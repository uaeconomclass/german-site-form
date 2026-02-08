<?php
/**
 * Plugin Name: Energieausweis Form
 * Description: Data-driven Energieausweis form embedded via shortcode, with draft storage on ea_order posts.
 * Version: 0.1.24
 * Author: uaeconomclass
 */

if (!defined('ABSPATH')) {
    exit;
}

define('EA_FORM_PLUGIN_FILE', __FILE__);
define('EA_FORM_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('EA_FORM_PLUGIN_URL', plugin_dir_url(__FILE__));
define('EA_FORM_PLUGIN_VERSION', '0.1.24');

register_activation_hook(__FILE__, function () {
    // Ensure CPT rewrites are registered, then flush once on activation.
    if (function_exists('ea_form_register_cpts')) {
        ea_form_register_cpts();
    }
    flush_rewrite_rules();
});

// Flush rewrites once per plugin version (covers plugin updates where activation hook won't re-run).
add_action('init', function () {
    $k = 'ea_form_rewrite_flushed_for';
    $v = defined('EA_FORM_PLUGIN_VERSION') ? EA_FORM_PLUGIN_VERSION : '';
    $cur = (string) get_option($k, '');
    if ($v && $cur !== $v) {
        flush_rewrite_rules(false);
        update_option($k, $v, true);
    }
}, 20);

require_once EA_FORM_PLUGIN_DIR . 'includes/cpt.php';
require_once EA_FORM_PLUGIN_DIR . 'includes/enqueue.php';
require_once EA_FORM_PLUGIN_DIR . 'includes/rest.php';
require_once EA_FORM_PLUGIN_DIR . 'includes/shortcode.php';
