<?php

if (!defined('ABSPATH')) {
    exit;
}

function ea_form_plugin_assets_base_url() {
    return trailingslashit(EA_FORM_PLUGIN_URL . 'assets');
}

function ea_form_plugin_form_base_url() {
    return trailingslashit(EA_FORM_PLUGIN_URL . 'assets/form');
}

function ea_form_plugin_enqueue_assets() {
    // Idempotent: shortcodes/templates can call this safely.
    if (wp_style_is('ea-form', 'enqueued') && wp_script_is('ea-form', 'enqueued')) {
        return;
    }

    $css = ea_form_plugin_form_base_url() . 'energieausweis-form.css';
    $js  = ea_form_plugin_form_base_url() . 'energieausweis-form.js';

    // Cache busting: plugin version changes rarely during development, but assets change often.
    // Use file mtimes when possible so browsers pick up fresh CSS/JS without manual cache clears.
    $fallback_ver = defined('EA_FORM_PLUGIN_VERSION') ? EA_FORM_PLUGIN_VERSION : '0.0.0';

    $css_path = defined('EA_FORM_PLUGIN_DIR') ? (EA_FORM_PLUGIN_DIR . 'assets/form/energieausweis-form.css') : '';
    $js_path  = defined('EA_FORM_PLUGIN_DIR') ? (EA_FORM_PLUGIN_DIR . 'assets/form/energieausweis-form.js') : '';

    $css_ver = ($css_path && file_exists($css_path)) ? (string) filemtime($css_path) : $fallback_ver;
    $js_ver  = ($js_path && file_exists($js_path)) ? (string) filemtime($js_path) : $fallback_ver;

    wp_enqueue_style('ea-form', $css, array(), $css_ver);
    wp_enqueue_script('ea-form', $js, array(), $js_ver, true);

    $rest_base = rest_url('ea/v1');
    $nonce = is_user_logged_in() ? wp_create_nonce('wp_rest') : '';

    $config = array(
        'restUrl' => $rest_base,
        'nonce' => $nonce,
        // Used by runtime to rewrite ../assets/* references when embedded in WP pages.
        'assetsBaseUrl' => ea_form_plugin_assets_base_url(),
    );

    if (is_singular(array('ea_order', 'wg', 'nwg', 'misch')) && is_user_logged_in()) {
        $order_id = get_the_ID();
        if (function_exists('ea_form_current_user_can_access_order') && ea_form_current_user_can_access_order($order_id)) {
            $config['orderId'] = $order_id;
            $config['draftUrl'] = add_query_arg('orderId', $order_id, rest_url('ea/v1/order-draft'));
            $config['uploadUrl'] = rest_url('ea/v1/order-upload');
            $config['uploadDownloadUrl'] = rest_url('ea/v1/order-upload-download');
            $config['uploadDeleteUrl'] = rest_url('ea/v1/order-upload-delete');
        }
    } else {
        $page_id = get_the_ID();
        $config['pageId'] = $page_id;
        // Enable order creation on landing pages by default (it only triggers on "Weiter" click).
        // Can be disabled/controlled by theme via filter.
        $enable_create = (bool) apply_filters('ea_form_enable_order_create', true, $page_id);
        if ($enable_create && is_user_logged_in()) {
            $config['createUrl'] = rest_url('ea/v1/order-create');
        }
    }

    wp_localize_script('ea-form', 'EA_CONFIG', $config);
}

add_action('wp_enqueue_scripts', function () {
    // Only load assets on pages where the shortcode is present, OR on order single pages.
    $should_enqueue = false;

    if (is_singular(array('ea_order', 'wg', 'nwg', 'misch'))) {
        $should_enqueue = true;
    } else {
        $post = get_post();
        // NOTE: if a template renders the shortcode via do_shortcode(),
        // it won't be in post_content. In that case, the shortcode itself will enqueue assets.
        if ($post && has_shortcode($post->post_content, 'energieausweis_form')) {
            $should_enqueue = true;
        }
    }

    if (!$should_enqueue) {
        return;
    }

    ea_form_plugin_enqueue_assets();
});
