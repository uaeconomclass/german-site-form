<?php

if (!defined('ABSPATH')) {
    exit;
}

function ea_form_default_prices() {
    return array(
        'verbrauch_wg' => 59.0,
        'verbrauch_gewerbe' => 79.0,
        'bedarf_wg' => 129.0,
        'bedarf_gewerbe' => 139.0,
        'delivery_post' => 5.0,
        'express' => 7.0,
    );
}

function ea_form_sanitize_prices($raw) {
    $defaults = ea_form_default_prices();
    $in = is_array($raw) ? $raw : array();
    $out = array();

    foreach ($defaults as $key => $fallback) {
        $v = isset($in[$key]) ? (float) $in[$key] : (float) $fallback;
        if (!is_finite($v) || $v < 0) {
            $v = (float) $fallback;
        }
        $out[$key] = round($v, 2);
    }

    return $out;
}

function ea_form_get_prices() {
    $defaults = ea_form_default_prices();
    $saved = get_option('ea_form_prices', array());
    return ea_form_sanitize_prices(is_array($saved) ? $saved : $defaults);
}

add_action('admin_init', function () {
    register_setting(
        'ea_form_prices_group',
        'ea_form_prices',
        array(
            'type' => 'array',
            'sanitize_callback' => 'ea_form_sanitize_prices',
            'default' => ea_form_default_prices(),
        )
    );
});

add_action('admin_menu', function () {
    add_options_page(
        'Energieausweis Preise',
        'Energieausweis Preise',
        'manage_options',
        'ea-form-prices',
        'ea_form_render_prices_page'
    );
});

function ea_form_render_prices_page() {
    if (!current_user_can('manage_options')) {
        return;
    }

    $prices = ea_form_get_prices();
    ?>
    <div class="wrap">
      <h1>Energieausweis Preise</h1>
      <p>Preise für die Formular-Übersicht (inkl. MwSt.).</p>
      <form method="post" action="options.php">
        <?php settings_fields('ea_form_prices_group'); ?>
        <table class="form-table" role="presentation">
          <tbody>
            <tr>
              <th scope="row"><label for="ea_price_verbrauch_wg">Verbrauchsausweis für Wohngebäude</label></th>
              <td>
                <input id="ea_price_verbrauch_wg" type="number" step="0.01" min="0" name="ea_form_prices[verbrauch_wg]" value="<?php echo esc_attr((string) $prices['verbrauch_wg']); ?>" class="regular-text" />
              </td>
            </tr>
            <tr>
              <th scope="row"><label for="ea_price_verbrauch_gewerbe">Verbrauchsausweis für Gewerbe</label></th>
              <td>
                <input id="ea_price_verbrauch_gewerbe" type="number" step="0.01" min="0" name="ea_form_prices[verbrauch_gewerbe]" value="<?php echo esc_attr((string) $prices['verbrauch_gewerbe']); ?>" class="regular-text" />
              </td>
            </tr>
            <tr>
              <th scope="row"><label for="ea_price_bedarf_wg">Bedarfsausweis für Wohngebäude</label></th>
              <td>
                <input id="ea_price_bedarf_wg" type="number" step="0.01" min="0" name="ea_form_prices[bedarf_wg]" value="<?php echo esc_attr((string) $prices['bedarf_wg']); ?>" class="regular-text" />
              </td>
            </tr>
            <tr>
              <th scope="row"><label for="ea_price_bedarf_gewerbe">Bedarfsausweis für Gewerbe</label></th>
              <td>
                <input id="ea_price_bedarf_gewerbe" type="number" step="0.01" min="0" name="ea_form_prices[bedarf_gewerbe]" value="<?php echo esc_attr((string) $prices['bedarf_gewerbe']); ?>" class="regular-text" />
              </td>
            </tr>
            <tr>
              <th scope="row"><label for="ea_price_delivery_post">Versand: Per Post</label></th>
              <td>
                <input id="ea_price_delivery_post" type="number" step="0.01" min="0" name="ea_form_prices[delivery_post]" value="<?php echo esc_attr((string) $prices['delivery_post']); ?>" class="regular-text" />
              </td>
            </tr>
            <tr>
              <th scope="row"><label for="ea_price_express">Express-Zuschlag</label></th>
              <td>
                <input id="ea_price_express" type="number" step="0.01" min="0" name="ea_form_prices[express]" value="<?php echo esc_attr((string) $prices['express']); ?>" class="regular-text" />
              </td>
            </tr>
          </tbody>
        </table>
        <?php submit_button('Speichern'); ?>
      </form>
    </div>
    <?php
}
