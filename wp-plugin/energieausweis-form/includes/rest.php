<?php

if (!defined('ABSPATH')) {
    exit;
}

function ea_form_allowed_post_types() {
    // Unified order CPT + legacy types (for backward compatibility only).
    return array('ea_order', 'wg', 'nwg', 'misch');
}

function ea_form_map_gebaeudetyp_to_post_type($gebaeudetyp) {
    $s = strtoupper(trim((string) $gebaeudetyp));
    // New system: always create `ea_order` and store the building type in meta.
    if ($s === 'WG') return 'ea_order';
    if ($s === 'NWG') return 'ea_order';
    if ($s === 'MISCH') return 'ea_order';
    return '';
}

function ea_form_get_order_post($order_id) {
    $order_id = (int) $order_id;
    if ($order_id <= 0) return null;
    $p = get_post($order_id);
    if (!$p) return null;
    if (!in_array($p->post_type, ea_form_allowed_post_types(), true)) return null;
    return $p;
}

function ea_form_current_user_can_access_order($order_id) {
    if (!is_user_logged_in()) return false;
    $p = ea_form_get_order_post($order_id);
    if (!$p) return false;

    // Author OR admins/editors (edit_post) can access.
    if ((int) $p->post_author === get_current_user_id()) return true;
    return current_user_can('edit_post', (int) $order_id);
}

function ea_form_get_order_draft_data($order_id) {
    $raw = get_post_meta((int) $order_id, '_ea_form_draft', true);
    return is_array($raw) ? $raw : null;
}

function ea_form_get_order_draft_meta($order_id) {
    $raw = get_post_meta((int) $order_id, '_ea_form_draft_meta', true);
    return is_array($raw) ? $raw : null;
}

function ea_form_set_order_draft_data($order_id, $data, $meta = null) {
    update_post_meta((int) $order_id, '_ea_form_draft', $data);
    update_post_meta((int) $order_id, '_ea_form_draft_updated_at', current_time('mysql'));
    if ($meta !== null) {
        update_post_meta((int) $order_id, '_ea_form_draft_meta', $meta);
    }
}

function ea_form_sync_gebaeudetyp_meta_from_draft($order_id, $data) {
    if (!is_array($data)) return;

    $gt = isset($data['gebaeudetyp']) ? strtoupper(trim((string) $data['gebaeudetyp'])) : '';
    if (!in_array($gt, array('WG', 'NWG', 'MISCH'), true)) {
        return;
    }

    $cur = strtoupper(trim((string) get_post_meta((int) $order_id, '_ea_gebaeudetyp', true)));
    if ($cur === $gt) return;

    update_post_meta((int) $order_id, '_ea_gebaeudetyp', $gt);
}

function ea_form_uploads_base_dir() {
    $u = wp_upload_dir();
    $base = trailingslashit($u['basedir']) . 'ea-form';
    if (!file_exists($base)) {
        wp_mkdir_p($base);
    }
    // Best effort privacy for Apache setups.
    $ht = trailingslashit($base) . '.htaccess';
    if (!file_exists($ht)) {
        @file_put_contents($ht, "Deny from all\n");
    }
    $idx = trailingslashit($base) . 'index.html';
    if (!file_exists($idx)) {
        @file_put_contents($idx, "");
    }
    return $base;
}

function ea_form_allowed_upload_exts() {
    $default = array('pdf', 'jpg', 'jpeg', 'png', 'webp', 'heic', 'heif');
    $exts = apply_filters('ea_form_allowed_upload_exts', $default);
    return array_values(array_unique(array_map('strtolower', array_filter((array) $exts))));
}

function ea_form_max_upload_bytes() {
    $default = 25 * 1024 * 1024; // 25MB
    $v = (int) apply_filters('ea_form_max_upload_bytes', $default);
    $wp_max = (int) wp_max_upload_size();
    if ($wp_max > 0) $v = min($v, $wp_max);
    return max(1024 * 1024, $v);
}

function ea_form_files_index_get($order_id) {
    $raw = get_post_meta((int) $order_id, '_ea_form_files', true);
    return is_array($raw) ? $raw : array();
}

function ea_form_files_index_set($order_id, $idx) {
    update_post_meta((int) $order_id, '_ea_form_files', $idx);
}

add_action('rest_api_init', function () {
    register_rest_route('ea/v1', '/order-create', array(
        array(
            'methods' => WP_REST_Server::CREATABLE,
            'permission_callback' => function () {
                return is_user_logged_in();
            },
            'callback' => function (WP_REST_Request $req) {
                $params = (array) $req->get_json_params();
                $gebaeudetyp = isset($params['gebaeudetyp']) ? $params['gebaeudetyp'] : '';
                $data = isset($params['data']) ? $params['data'] : null;
                $meta = isset($params['meta']) ? $params['meta'] : null;

                $post_type = ea_form_map_gebaeudetyp_to_post_type($gebaeudetyp);
                if ($post_type === '') {
                    return new WP_Error('ea_invalid_gebaeudetyp', 'Invalid gebaeudetyp.', array('status' => 400));
                }
                if (!is_array($data)) {
                    return new WP_Error('ea_invalid_data', 'Invalid data payload.', array('status' => 400));
                }
                if ($meta !== null && !is_array($meta)) {
                    $meta = null;
                }

                $post_id = wp_insert_post(array(
                    'post_type' => $post_type,
                    'post_status' => 'publish',
                    'post_title' => 'Anfrage ' . strtoupper(trim((string) $gebaeudetyp)) . ' ' . current_time('Y-m-d H:i'),
                    'post_author' => get_current_user_id(),
                ), true);

                if (is_wp_error($post_id) || !$post_id) {
                    return new WP_Error('ea_create_failed', 'Order could not be created.', array('status' => 500));
                }

                // Store initial draft right away (server source of truth).
                $merged_meta = array(
                    'reason' => 'create',
                    'at' => current_time('mysql'),
                );
                if (is_array($meta)) {
                    // Allow client to set step pointers (e.g. next step after gebaeudetyp).
                    $merged_meta = array_merge($merged_meta, $meta);
                }
                ea_form_set_order_draft_data($post_id, $data, $merged_meta);
                // Store building type for easier backend filtering/reporting.
                update_post_meta((int) $post_id, '_ea_gebaeudetyp', strtoupper(trim((string) $gebaeudetyp)));

                $redirect = get_permalink((int) $post_id);
                if (!$redirect) {
                    $redirect = home_url('/?p=' . (int) $post_id);
                }

                return rest_ensure_response(array(
                    'orderId' => (int) $post_id,
                    'redirectUrl' => $redirect,
                    'draftUrl' => add_query_arg('orderId', (int) $post_id, rest_url('ea/v1/order-draft')),
                ));
            },
        ),
    ));

    register_rest_route('ea/v1', '/order-draft', array(
        array(
            'methods' => WP_REST_Server::READABLE,
            'permission_callback' => function (WP_REST_Request $req) {
                $order_id = (int) $req->get_param('orderId');
                return ea_form_current_user_can_access_order($order_id);
            },
            'callback' => function (WP_REST_Request $req) {
                $order_id = (int) $req->get_param('orderId');
                $p = ea_form_get_order_post($order_id);
                if (!$p) {
                    return new WP_Error('ea_not_found', 'Order not found.', array('status' => 404));
                }

                $data = ea_form_get_order_draft_data($order_id);
                $meta = ea_form_get_order_draft_meta($order_id);
                $updated_at = (string) get_post_meta($order_id, '_ea_form_draft_updated_at', true);

                return rest_ensure_response(array(
                    'orderId' => $order_id,
                    'data' => $data ? $data : new stdClass(),
                    'meta' => $meta ? $meta : new stdClass(),
                    'updatedAt' => $updated_at,
                ));
            },
            'args' => array(
                'orderId' => array(
                    'required' => true,
                    'validate_callback' => function ($param) {
                        return is_numeric($param) && (int) $param > 0;
                    },
                ),
            ),
        ),
        array(
            'methods' => WP_REST_Server::CREATABLE,
            'permission_callback' => function (WP_REST_Request $req) {
                $order_id = (int) $req->get_param('orderId');
                return ea_form_current_user_can_access_order($order_id);
            },
            'callback' => function (WP_REST_Request $req) {
                $order_id = (int) $req->get_param('orderId');
                $p = ea_form_get_order_post($order_id);
                if (!$p) {
                    return new WP_Error('ea_not_found', 'Order not found.', array('status' => 404));
                }

                $params = (array) $req->get_json_params();
                $data = isset($params['data']) ? $params['data'] : null;
                $meta = isset($params['meta']) ? $params['meta'] : null;

                if (!is_array($data)) {
                    return new WP_Error('ea_invalid_data', 'Invalid data payload.', array('status' => 400));
                }
                if ($meta !== null && !is_array($meta)) {
                    // We only store arrays for debug/telemetry.
                    $meta = null;
                }

                ea_form_set_order_draft_data($order_id, $data, $meta);
                // Keep order meta in sync when user changes the building type later in the flow.
                ea_form_sync_gebaeudetyp_meta_from_draft($order_id, $data);

                return rest_ensure_response(array(
                    'ok' => true,
                    'orderId' => $order_id,
                    'updatedAt' => (string) get_post_meta($order_id, '_ea_form_draft_updated_at', true),
                ));
            },
            'args' => array(
                'orderId' => array(
                    'required' => true,
                    'validate_callback' => function ($param) {
                        return is_numeric($param) && (int) $param > 0;
                    },
                ),
            ),
        ),
    ));

    register_rest_route('ea/v1', '/order-upload', array(
        array(
            'methods' => WP_REST_Server::CREATABLE,
            'permission_callback' => function (WP_REST_Request $req) {
                $order_id = (int) $req->get_param('orderId');
                return ea_form_current_user_can_access_order($order_id);
            },
            'callback' => function (WP_REST_Request $req) {
                $order_id = (int) $req->get_param('orderId');
                $p = ea_form_get_order_post($order_id);
                if (!$p) return new WP_Error('ea_not_found', 'Order not found.', array('status' => 404));

                $field_key = (string) $req->get_param('fieldKey');
                if ($field_key === '') {
                    // Try multipart field
                    $field_key = isset($_POST['fieldKey']) ? sanitize_key(wp_unslash($_POST['fieldKey'])) : '';
                } else {
                    $field_key = sanitize_key($field_key);
                }
                if ($field_key === '') {
                    return new WP_Error('ea_invalid_field', 'Missing fieldKey.', array('status' => 400));
                }

                $files = $req->get_file_params();
                if (!isset($files['file'])) {
                    return new WP_Error('ea_no_file', 'Missing file.', array('status' => 400));
                }

                $f = $files['file'];
                if (!is_array($f) || empty($f['tmp_name']) || !file_exists($f['tmp_name'])) {
                    return new WP_Error('ea_invalid_file', 'Invalid upload.', array('status' => 400));
                }
                if (!empty($f['error'])) {
                    return new WP_Error('ea_upload_error', 'Upload error.', array('status' => 400));
                }

                $orig_name = sanitize_file_name((string) ($f['name'] ?? 'upload'));
                $size = (int) ($f['size'] ?? 0);
                $max = ea_form_max_upload_bytes();
                if ($size <= 0 || $size > $max) {
                    return new WP_Error('ea_too_large', 'File too large.', array('status' => 400));
                }

                $ext = strtolower(pathinfo($orig_name, PATHINFO_EXTENSION));
                $allowed_exts = ea_form_allowed_upload_exts();
                if ($ext === '' || !in_array($ext, $allowed_exts, true)) {
                    return new WP_Error('ea_bad_type', 'File type not allowed.', array('status' => 400));
                }

                $file_id = function_exists('wp_generate_uuid4') ? wp_generate_uuid4() : uniqid('f_', true);
                $base = ea_form_uploads_base_dir();
                $dir = trailingslashit($base) . (int) $order_id . '/' . $field_key;
                if (!file_exists($dir)) {
                    wp_mkdir_p($dir);
                }
                $stored_name = $file_id . '__' . $orig_name;
                $dest = trailingslashit($dir) . $stored_name;

                if (!@move_uploaded_file($f['tmp_name'], $dest)) {
                    return new WP_Error('ea_move_failed', 'Could not store file.', array('status' => 500));
                }

                $mime = '';
                if (function_exists('mime_content_type')) {
                    $mime = (string) @mime_content_type($dest);
                }

                $uploads = wp_upload_dir();
                $rel = ltrim(str_replace(trailingslashit($uploads['basedir']), '', $dest), '/\\');
                $idx = ea_form_files_index_get($order_id);
                $idx[$file_id] = array(
                    'fileId' => $file_id,
                    'fieldKey' => $field_key,
                    'name' => $orig_name,
                    'storedName' => $stored_name,
                    'mime' => $mime,
                    'size' => $size,
                    'relPath' => $rel,
                    'createdAt' => current_time('mysql'),
                );
                ea_form_files_index_set($order_id, $idx);

                return rest_ensure_response(array(
                    'ok' => true,
                    'orderId' => $order_id,
                    'fileId' => $file_id,
                    'fieldKey' => $field_key,
                    'name' => $orig_name,
                    'mime' => $mime,
                    'size' => $size,
                    'createdAt' => current_time('mysql'),
                ));
            },
            'args' => array(
                'orderId' => array('required' => true),
            ),
        ),
    ));

    register_rest_route('ea/v1', '/order-upload-download', array(
        array(
            'methods' => WP_REST_Server::READABLE,
            'permission_callback' => function (WP_REST_Request $req) {
                $order_id = (int) $req->get_param('orderId');
                return ea_form_current_user_can_access_order($order_id);
            },
            'callback' => function (WP_REST_Request $req) {
                $order_id = (int) $req->get_param('orderId');
                $file_id = (string) $req->get_param('fileId');
                $inline = (int) $req->get_param('inline') === 1;

                $idx = ea_form_files_index_get($order_id);
                if (!isset($idx[$file_id])) {
                    return new WP_Error('ea_not_found', 'File not found.', array('status' => 404));
                }
                $rec = $idx[$file_id];
                $uploads = wp_upload_dir();
                $path = trailingslashit($uploads['basedir']) . ltrim((string) ($rec['relPath'] ?? ''), '/\\');
                if (!file_exists($path)) {
                    return new WP_Error('ea_not_found', 'File missing.', array('status' => 404));
                }

                $name = (string) ($rec['name'] ?? 'download');
                $mime = (string) ($rec['mime'] ?? 'application/octet-stream');

                nocache_headers();
                header('Content-Type: ' . $mime);
                header('Content-Length: ' . filesize($path));
                header('Content-Disposition: ' . ($inline ? 'inline' : 'attachment') . '; filename="' . rawurlencode($name) . '"');
                // Stream file
                readfile($path);
                exit;
            },
            'args' => array(
                'orderId' => array('required' => true),
                'fileId' => array('required' => true),
            ),
        ),
    ));

    register_rest_route('ea/v1', '/order-upload-delete', array(
        array(
            'methods' => WP_REST_Server::CREATABLE,
            'permission_callback' => function (WP_REST_Request $req) {
                $order_id = (int) $req->get_param('orderId');
                return ea_form_current_user_can_access_order($order_id);
            },
            'callback' => function (WP_REST_Request $req) {
                $order_id = (int) $req->get_param('orderId');
                $file_id = (string) $req->get_param('fileId');
                if ($file_id === '') {
                    $params = (array) $req->get_json_params();
                    $file_id = isset($params['fileId']) ? (string) $params['fileId'] : '';
                }
                if ($file_id === '') {
                    return new WP_Error('ea_invalid', 'Missing fileId.', array('status' => 400));
                }

                $idx = ea_form_files_index_get($order_id);
                if (!isset($idx[$file_id])) {
                    return rest_ensure_response(array('ok' => true));
                }
                $rec = $idx[$file_id];
                $uploads = wp_upload_dir();
                $path = trailingslashit($uploads['basedir']) . ltrim((string) ($rec['relPath'] ?? ''), '/\\');
                if (file_exists($path)) {
                    @unlink($path);
                }
                unset($idx[$file_id]);
                ea_form_files_index_set($order_id, $idx);

                return rest_ensure_response(array('ok' => true));
            },
            'args' => array(
                'orderId' => array('required' => true),
                'fileId' => array('required' => true),
            ),
        ),
    ));
});
