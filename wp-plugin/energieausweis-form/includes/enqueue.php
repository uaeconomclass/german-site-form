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

add_action('wp_enqueue_scripts', function () {
    // Only load assets on pages where the shortcode is present, OR on order single pages.
    $should_enqueue = false;

    if (is_singular(array('wg', 'nwg', 'misch'))) {
        $should_enqueue = true;
    } else {
        $post = get_post();
        if ($post && has_shortcode($post->post_content, 'energieausweis_form')) {
            $should_enqueue = true;
        }
    }

    if (!$should_enqueue) {
        return;
    }

    $css = ea_form_plugin_form_base_url() . 'energieausweis-form.css';
    $js  = ea_form_plugin_form_base_url() . 'energieausweis-form.js';

    wp_enqueue_style('ea-form', $css, array(), '0.1.0');
    wp_enqueue_script('ea-form', $js, array(), '0.1.0', true);

    $rest_base = rest_url('ea/v1');
    $nonce = is_user_logged_in() ? wp_create_nonce('wp_rest') : '';

    $config = array(
        'restUrl' => $rest_base,
        'nonce' => $nonce,
        // Used by runtime to rewrite ../assets/* references when embedded in WP pages.
        'assetsBaseUrl' => ea_form_plugin_assets_base_url(),
    );

    if (is_singular(array('wg', 'nwg', 'misch')) && is_user_logged_in()) {
        $order_id = get_the_ID();
        $config['orderId'] = $order_id;
        $config['draftUrl'] = add_query_arg('orderId', $order_id, rest_url('ea/v1/order-draft'));
    } else {
        $page_id = get_the_ID();
        $config['pageId'] = $page_id;
        if (is_user_logged_in()) {
            $config['createUrl'] = rest_url('ea/v1/order-create');
        }
    }

    wp_localize_script('ea-form', 'EA_CONFIG', $config);
});
