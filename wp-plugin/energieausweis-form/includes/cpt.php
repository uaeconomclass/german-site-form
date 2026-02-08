<?php

if (!defined('ABSPATH')) {
    exit;
}

// Ensure the `misch` order post type exists (theme might not provide it).
add_action('init', function () {
    if (post_type_exists('misch')) {
        return;
    }

    register_post_type('misch', array(
        'labels' => array(
            'name' => 'Mischgebaeude',
            'singular_name' => 'Mischgebaeude',
            'menu_name' => 'Mischgebaeude',
        ),
        'public' => false,
        'show_ui' => true,
        'show_in_menu' => true,
        'supports' => array('title', 'author'),
        'capability_type' => 'post',
        'map_meta_cap' => true,
        'has_archive' => false,
        'rewrite' => false,
    ));
}, 9);


