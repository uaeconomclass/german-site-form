<?php

if (!defined('ABSPATH')) {
    exit;
}

add_action('rest_api_init', function () {
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
                $direct_url = trailingslashit((string) ($uploads['baseurl'] ?? '')) . str_replace('\\', '/', $rel);
                $idx = ea_form_files_index_get($order_id);
                $idx[$file_id] = array(
                    'fileId' => $file_id,
                    'fieldKey' => $field_key,
                    'name' => $orig_name,
                    'storedName' => $stored_name,
                    'mime' => $mime,
                    'size' => $size,
                    'relPath' => $rel,
                    'url' => $direct_url,
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
                    'url' => $direct_url,
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
