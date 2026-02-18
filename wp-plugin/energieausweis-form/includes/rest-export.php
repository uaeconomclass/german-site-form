<?php

if (!defined('ABSPATH')) {
    exit;
}

add_action('rest_api_init', function () {
    register_rest_route('ea/v1', '/order-export-bundle', array(
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
                $csv_content = isset($params['csvContent']) ? (string) $params['csvContent'] : '';
                $csv_name = isset($params['csvName']) ? sanitize_file_name((string) $params['csvName']) : ('EA_Verbrauch_' . (int) $order_id . '.csv');
                if ($csv_content === '') {
                    return new WP_Error('ea_invalid_csv', 'Missing csvContent.', array('status' => 400));
                }
                if ($csv_name === '') {
                    $csv_name = 'EA_Verbrauch_' . (int) $order_id . '.csv';
                }

                if (!class_exists('ZipArchive')) {
                    return new WP_Error('ea_zip_missing', 'ZipArchive is not available on this server.', array('status' => 500));
                }

                $idx = ea_form_files_index_get($order_id);
                $uploads = wp_upload_dir();

                $tmp = wp_tempnam('ea-export-' . (int) $order_id . '.zip');
                if (!$tmp) {
                    return new WP_Error('ea_zip_tmp', 'Could not create temp zip file.', array('status' => 500));
                }

                $zip = new ZipArchive();
                if ($zip->open($tmp, ZipArchive::OVERWRITE) !== true) {
                    @unlink($tmp);
                    return new WP_Error('ea_zip_open', 'Could not open zip archive.', array('status' => 500));
                }

                // Keep UTF-8 BOM for better spreadsheet compatibility.
                $zip->addFromString($csv_name, "\xEF\xBB\xBF" . $csv_content);

                foreach ((array) $idx as $file_id => $rec) {
                    $mime = (string) ($rec['mime'] ?? '');
                    if (stripos($mime, 'image/') !== 0) continue;

                    $rel = (string) ($rec['relPath'] ?? '');
                    if ($rel === '') continue;
                    $abs = trailingslashit((string) $uploads['basedir']) . ltrim($rel, '/\\');
                    if (!file_exists($abs)) continue;

                    $field_key = sanitize_key((string) ($rec['fieldKey'] ?? 'uploads'));
                    $name = sanitize_file_name((string) ($rec['name'] ?? 'image'));
                    if ($name === '') $name = sanitize_file_name((string) $file_id) . '.bin';

                    $in_zip = 'images/' . $field_key . '/' . $name;
                    if ($zip->locateName($in_zip) !== false) {
                        $in_zip = 'images/' . $field_key . '/' . sanitize_file_name((string) $file_id) . '__' . $name;
                    }
                    $zip->addFile($abs, $in_zip);
                }

                $zip->close();

                $download_name = preg_replace('/\.csv$/i', '', $csv_name) . '.zip';
                if (!$download_name) $download_name = 'ea-export-' . (int) $order_id . '.zip';

                nocache_headers();
                header('Content-Type: application/zip');
                header('Content-Length: ' . filesize($tmp));
                header('Content-Disposition: attachment; filename="' . rawurlencode($download_name) . '"');
                readfile($tmp);
                @unlink($tmp);
                exit;
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

    // Debug endpoint: returns order meta + draft/files state to troubleshoot export/upload issues.
    register_rest_route('ea/v1', '/order-debug-meta', array(
        array(
            'methods' => WP_REST_Server::READABLE,
            'permission_callback' => function (WP_REST_Request $req) {
                return true;
            },
            'callback' => function (WP_REST_Request $req) {
                $order_id = (int) $req->get_param('orderId');
                $p = ea_form_get_order_post($order_id);
                if (!$p) {
                    return new WP_Error('ea_not_found', 'Order not found.', array('status' => 404));
                }

                $meta_raw = get_post_meta($order_id);
                $meta = array();
                foreach ((array) $meta_raw as $k => $vals) {
                    $meta[$k] = ea_form_meta_value_unwrap($vals);
                }

                $draft_data = ea_form_get_order_draft_data($order_id);
                $draft_meta = ea_form_get_order_draft_meta($order_id);
                $files_idx = ea_form_files_index_get($order_id);

                $uploads = wp_upload_dir();
                $files_debug = array();
                foreach ((array) $files_idx as $file_id => $rec) {
                    $rel = (string) ($rec['relPath'] ?? '');
                    $abs = trailingslashit((string) $uploads['basedir']) . ltrim($rel, '/\\');
                    $files_debug[$file_id] = array(
                        'fileId' => (string) ($rec['fileId'] ?? $file_id),
                        'fieldKey' => (string) ($rec['fieldKey'] ?? ''),
                        'name' => (string) ($rec['name'] ?? ''),
                        'relPath' => $rel,
                        'existsOnDisk' => file_exists($abs),
                        'sizeOnDisk' => file_exists($abs) ? (int) @filesize($abs) : 0,
                        'url' => (string) ($rec['url'] ?? ''),
                        'createdAt' => (string) ($rec['createdAt'] ?? ''),
                    );
                }

                return rest_ensure_response(array(
                    'orderId' => $order_id,
                    'post' => array(
                        'id' => (int) $p->ID,
                        'type' => (string) $p->post_type,
                        'status' => (string) $p->post_status,
                        'author' => (int) $p->post_author,
                        'title' => (string) $p->post_title,
                    ),
                    'meta' => $meta,
                    'draft' => array(
                        'data' => is_array($draft_data) ? $draft_data : new stdClass(),
                        'meta' => is_array($draft_meta) ? $draft_meta : new stdClass(),
                        'updatedAt' => (string) get_post_meta($order_id, '_ea_form_draft_updated_at', true),
                    ),
                    'files' => array(
                        'count' => count((array) $files_idx),
                        'index' => $files_debug,
                    ),
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
});
