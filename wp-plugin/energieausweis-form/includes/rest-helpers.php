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
    // NOTE: For now we allow direct links to uploads (per request), so do NOT block access
    // via `.htaccess`. Still disable directory listing as a minimal safeguard.
    $ht = trailingslashit($base) . '.htaccess';
    $allow = "Options -Indexes\n<IfModule mod_authz_core.c>\n  Require all granted\n</IfModule>\n<IfModule !mod_authz_core.c>\n  Order allow,deny\n  Allow from all\n</IfModule>\n";
    if (!file_exists($ht)) {
        @file_put_contents($ht, $allow);
    } else {
        // If an old "Deny from all" exists, overwrite it to prevent broken direct links.
        $cur = @file_get_contents($ht);
        if (is_string($cur) && stripos($cur, 'Deny from all') !== false) {
            @file_put_contents($ht, $allow);
        }
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

function ea_form_meta_value_unwrap($v) {
    if (is_array($v) && count($v) === 1) {
        return ea_form_meta_value_unwrap($v[0]);
    }
    return $v;
}
