<?php

if (!defined('ABSPATH')) {
    exit;
}

function ea_form_register_cpts() {
    // Main unified order CPT.
    if (!post_type_exists('ea_order')) {
        register_post_type('ea_order', array(
            'labels' => array(
                'name' => 'Anfragen',
                'singular_name' => 'Anfrage',
                'menu_name' => 'Anfragen',
            ),
            // Publicly queryable so single pages can render in the frontend.
            // Access is enforced by the plugin shortcode/templates.
            'public' => true,
            'publicly_queryable' => true,
            'exclude_from_search' => true,
            'show_ui' => true,
            'show_in_menu' => true,
            'show_in_rest' => false,
            'supports' => array('title', 'author'),
            'capability_type' => 'post',
            'map_meta_cap' => true,
            'has_archive' => false,
            'rewrite' => array('slug' => 'anfrage', 'with_front' => false),
        ));
    }

    // Legacy compatibility: some installs have a separate `misch` CPT in theme.
    // Keep it available if it doesn't exist, but the plugin no longer creates new posts of this type.
    if (!post_type_exists('misch')) {
        register_post_type('misch', array(
            'labels' => array(
                'name' => 'Mischgebaeude',
                'singular_name' => 'Mischgebaeude',
                'menu_name' => 'Mischgebaeude',
            ),
            'public' => false,
            // Hide legacy CPT from wp-admin menus. Old records can still exist and be accessed by direct URL if needed.
            'show_ui' => false,
            'show_in_menu' => false,
            'supports' => array('title', 'author'),
            'capability_type' => 'post',
            'map_meta_cap' => true,
            'has_archive' => false,
            'rewrite' => false,
        ));
    }
}

add_action('init', 'ea_form_register_cpts', 9);

// Some installs register `misch` from the theme or another plugin. Ensure the admin menu item is removed regardless.
add_action('admin_menu', function () {
    remove_menu_page('edit.php?post_type=misch');
}, 999);
