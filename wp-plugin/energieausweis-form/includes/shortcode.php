<?php

if (!defined('ABSPATH')) {
    exit;
}

function ea_form_page_context_title() {
    // Prefer order post type, fallback to page slug.
    if (is_singular('nwg')) return 'Verbrauchsausweis für Gewerbe';
    if (is_singular('misch')) return 'Verbrauchsausweis für Mischgebäude';
    if (is_singular('wg')) return 'Verbrauchsausweis für Wohngebäude';

    $p = get_post();
    $slug = $p ? (string) $p->post_name : '';
    if ($slug === 'verbrauchsausweis-fur-gewerbe') return 'Verbrauchsausweis für Gewerbe';
    if ($slug === 'verbrauchsausweis-fur-mischgebaeude') return 'Verbrauchsausweis für Mischgebäude';
    if ($slug === 'verbrauchsausweis-fur-wohngebaude') return 'Verbrauchsausweis für Wohngebäude';

    return 'Energieausweis';
}

function ea_form_user_orders_count($user_id) {
    $user_id = (int) $user_id;
    if ($user_id <= 0) return 0;

    $q = new WP_Query(array(
        'post_type' => array('wg', 'nwg', 'misch'),
        'post_status' => array('publish'),
        'author' => $user_id,
        'fields' => 'ids',
        'posts_per_page' => 1,
        'no_found_rows' => false, // we need found_posts
    ));
    return (int) $q->found_posts;
}

function ea_form_render_previous_orders_link() {
    if (!is_user_logged_in()) return '';
    // Only show on non-order pages.
    if (is_singular(array('wg', 'nwg', 'misch'))) return '';

    $count = ea_form_user_orders_count(get_current_user_id());
    if ($count <= 0) return '';

    $url = home_url('/mein-bereich/');
    $label = 'Vorherige Anfragen ansehen';

    return '<div class="ea-ordersnote"><a href="' . esc_url($url) . '"><span class="ea-ordersnote-ico" aria-hidden="true">↩</span><span class="ea-ordersnote-text">' . esc_html($label) . '</span><span class="ea-ordersnote-count">(' . (int) $count . ')</span></a></div>';
}

add_shortcode('energieausweis_form', function ($atts = array(), $content = '') {
    if (function_exists('ea_form_plugin_enqueue_assets')) {
        ea_form_plugin_enqueue_assets();
    }
    $title = ea_form_page_context_title();

    ob_start();
    ?>
      <div class="ea-form-root">
        <?php echo ea_form_render_previous_orders_link(); ?>
        <div class="wrap">
          <div class="stepsbar" id="topStepper" aria-label="Schritte"></div>

          <header class="headtop">
            <div class="head-left">
              <h1><?php echo esc_html($title); ?></h1>
              <p class="sub">In nur wenigen Schritten zu Ihrem Energieausweis.</p>
            </div>
          </header>

          <section class="effbox" aria-label="Energieeffizienzklasse">
            <div class="eff-left">
              <div class="eff-title">Ihre Energieeffizienzklasse</div>
              <div class="muted small">Wir berechnen Ihre aktuelle Energieeffizienzklasse automatisch anhand Ihrer Angaben.</div>
            </div>
            <div class="eff-right">
              <div class="rating" aria-hidden="true" style="--marker: 66%">
                <span class="r r1">A+</span><span class="r r2">A</span><span class="r r3">B</span><span class="r r4">C</span><span class="r r5">D</span><span class="r r6">E</span><span class="r r7">F</span><span class="r r8">G</span><span class="r r9">H</span>
                <span class="marker">Jetzt</span>
              </div>
              <div class="potenz">
                <span class="pico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 11.5 12 4l9 7.5"></path>
                    <path d="M5.5 10.8V20h13V10.8"></path>
                  </svg>
                </span>
                <span class="muted small">Potenz</span>
              </div>
            </div>
          </section>

          <div class="layout">
            <main class="card main">
              <div class="main-head">
                <div>
                  <div class="kicker">
                    <span id="stepTitle">Gebäudedaten &amp; Grundprüfung</span>
                    <span class="sep">·</span>
                    <span class="muted" id="stepMeta"></span>
                  </div>
                  <div class="desc" id="stepDesc">Damit wir Ihren Energieausweis erstellen können, benötigen wir ein paar Angaben zu Ihrem Gebäude.</div>
                </div>
                <!-- removed "Ungefähre Zeit: 5min" -->
              </div>

              <div class="banner warn" id="warnBox" style="display:none">
                <div class="ico">!</div>
                <div>
                  <b>Plausibilitätscheck</b>
                  <p id="warnText"></p>
                </div>
              </div>

              <div id="stepIntro" class="banner info" style="display:none">
                <div class="ico">i</div>
                <div>
                  <b id="introTitle">Hinweis</b>
                  <p id="introText"></p>
                </div>
              </div>

              <form id="wizardForm" class="form" novalidate></form>

              <div id="summaryBox" style="display:none">
                <div class="summary"><pre id="summaryJson"></pre></div>
              </div>

              <div class="footerbar">
                <button class="linkbtn" type="button" id="btnBack">Zurück</button>
                <div class="footer-right">
                  <button class="btn secondary" type="button" id="btnSave">Speichern</button>
                  <button class="btn primary" type="button" id="btnNext">Weiter zur Bestätigung</button>
                  <button class="btn secondary" type="button" id="btnDownload" style="display:none">Download JSON</button>
                </div>
              </div>
            </main>

            <aside class="card side">
              <div class="side-head">Ihre Gesamtübersicht</div>
              <div class="side-body">
                <div class="kv">
                  <div class="muted">Voraussichtliche Fertigstellung:</div>
                  <div><b>innerhalb von 24 Stunden</b></div>
                </div>

                <div class="sp"></div>

                <div class="kv">
                  <div class="muted">Fortschritt:</div>
                  <div><b id="overviewProgress">0/0</b> Angaben vollständig</div>
                </div>

                <div class="sp"></div>

                <a class="help" href="#" onclick="return false;">Sie haben Fragen? Wir helfen gerne or <b>Ort Beratung</b> beantragen</a>

                <div class="sp"></div>

                <button class="btn wide" type="button" disabled>Weiter zur Bestätigung</button>
                <div class="okline"><span class="check"></span> Verarbeitung zertifiziert nach GEG</div>
                <div class="muted small" id="buildInfo" style="margin-top:10px"></div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    <?php
    return ob_get_clean();
});
