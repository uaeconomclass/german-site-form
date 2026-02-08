<?php
/**
 * Plugin Name: Energieausweis Form
 * Description: Data-driven Energieausweis form embedded via shortcode, with draft storage on wg/nwg/misch posts.
 * Version: 0.1.6
 * Author: uaeconomclass
 */

if (!defined('ABSPATH')) {
    exit;
}

define('EA_FORM_PLUGIN_FILE', __FILE__);
define('EA_FORM_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('EA_FORM_PLUGIN_URL', plugin_dir_url(__FILE__));
define('EA_FORM_PLUGIN_VERSION', '0.1.6');

require_once EA_FORM_PLUGIN_DIR . 'includes/cpt.php';
require_once EA_FORM_PLUGIN_DIR . 'includes/enqueue.php';
require_once EA_FORM_PLUGIN_DIR . 'includes/rest.php';
require_once EA_FORM_PLUGIN_DIR . 'includes/shortcode.php';
