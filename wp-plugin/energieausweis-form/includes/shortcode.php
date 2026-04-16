<?php

if (!defined('ABSPATH')) {
    exit;
}

function ea_form_page_context_title() {
    // Prefer order post type, fallback to page slug.
    if (is_singular('ea_order')) return 'Energieausweis Anfrage';
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
        'post_type' => array('ea_order', 'wg', 'nwg', 'misch'),
        'post_status' => array('publish', 'private', 'draft', 'pending'),
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
    if (is_singular(array('ea_order', 'wg', 'nwg', 'misch'))) return '';

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

    if (is_singular('ea_order')) {
        $order_id = get_the_ID();
        if (!function_exists('ea_form_current_user_can_access_order') || !ea_form_current_user_can_access_order($order_id)) {
            return '<div class="wrap" style="max-width:1100px;margin:30px auto;padding:0 14px">'
                . '<div class="banner warn" style="display:flex">'
                . '<div class="ico">!</div>'
                . '<div><b>Zugriff eingeschränkt</b><p>Bitte melden Sie sich an, um diese Anfrage zu sehen.</p></div>'
                . '</div></div>';
        }
    }
    $title = ea_form_page_context_title();

    ob_start();
    ?>
      <style>
        body {
          background: #F5F8F4 !important;
        }
      </style>
      <div class="ea-form-root">
        <?php echo ea_form_render_previous_orders_link(); ?>
        <div class="wrap">
          <div class="stepsbar" id="topStepper" aria-label="Schritte"></div>
          <div class="groupbar" id="groupStepper" aria-label="Abschnitte" style="display:none"></div>

          <header class="headtop">
            <div class="head-left">
              <h1><?php echo esc_html($title); ?></h1>
              <p class="sub">In nur wenigen Schritten zu Ihrem Energieausweis.</p>
            </div>
          </header>

          <div class="layout">
            <div class="layout-main">
              <section class="effbox" aria-label="Energieeffizienzklasse">
                <div class="eff-left">
                  <div class="eff-title">Ihre Energieeffizienzklasse</div>
                  <div class="muted small">Wir berechnen Ihre aktuelle Energieeffizienzklasse automatisch anhand Ihrer Angaben.</div>
                </div>
                <div class="eff-right">
                 <div class="potenz jetzt">
    				<svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    				<path d="M13 0H0V9L6.5 14.5L13 9V0Z" fill="#5D5A88"/>
    				</svg>

                    <span class="muted small">Jetzt</span>
                  </div>
                  <div class="rating" aria-hidden="true" style="--marker: 66%">
                    <span class="r r1">A+</span><span class="r r2">A</span><span class="r r3">B</span><span class="r r4">C</span><span class="r r5">D</span><span class="r r6">E</span><span class="r r7">F</span><span class="r r8">G</span><span class="r r9">H</span>
                  </div>
                  <div class="potenz">
                    <span class="pico" aria-hidden="true">
						<svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M13 14.5H0V5.5L6.5 0L13 5.5V14.5Z" fill="#5D5A88"/>
						</svg>

                    </span>
                    <span class="muted small">Potenz</span>
                  </div>
                </div>
              </section>

            <main class="card main">
              <div class="main-head">
                <div>
                  <div class="kicker">
                    <span id="stepTitle">Gebäudedaten &amp; Grundprüfung</span>
                    <span class="sep">·</span>
                    <span class="muted" id="stepMeta"></span>
                  </div>
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
                  <p id="introText"></p>
                </div>
              </div>

              <form id="wizardForm" class="form" novalidate></form>

              <div id="summaryBox" style="display:none">
                <div class="summary"><pre id="summaryJson"></pre></div>
              </div>

              <div class="footerbar" id="footerBar">
                <button class="linkbtn" type="button" id="btnBack">Zurück</button>
                <div class="footer-right">
                  <button class="btn secondary" type="button" id="btnSave" aria-label="Speichern">
                    <span class="btn-save-label">Speichern</span>
                    <span class="btn-icon" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#btnSaveClip)">
                          <path d="M4.5 3H12L15 6V13.5C15 13.8978 14.842 14.2794 14.5607 14.5607C14.2794 14.842 13.8978 15 13.5 15H4.5C4.10218 15 3.72064 14.842 3.43934 14.5607C3.15804 14.2794 3 13.8978 3 13.5V4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3Z" stroke="#2F4109" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M7.5 10.5C7.5 10.8978 7.65804 11.2794 7.93934 11.5607C8.22064 11.842 8.60218 12 9 12C9.39782 12 9.77936 11.842 10.0607 11.5607C10.342 11.2794 10.5 10.8978 10.5 10.5C10.5 10.1022 10.342 9.72064 10.0607 9.43934C9.77936 9.15804 9.39782 9 9 9C8.60218 9 8.22064 9.15804 7.93934 9.43934C7.65804 9.72064 7.5 10.1022 7.5 10.5Z" stroke="#2F4109" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M10.5 3V6H6V3" stroke="#2F4109" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                          <clipPath id="btnSaveClip">
                            <rect width="18" height="18" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </button>
                  <button class="btn primary" type="button" id="btnNext" aria-label="Weitermachen">
                    <span class="btn-next-label">Weitermachen</span>
                    <span class="btn-icon" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#btnNextClip)">
                          <path d="M3.75 9H14.25" stroke="#2F4109" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M9.75 13.5L14.25 9" stroke="#2F4109" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M9.75 4.5L14.25 9" stroke="#2F4109" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                          <clipPath id="btnNextClip">
                            <rect width="18" height="18" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </button>
                  <button class="btn secondary" type="button" id="btnDownload" style="display:none">Download JSON</button>
                </div>
              </div>
            </main>
            </div>

            <aside class="card side">
              <div class="side-head">Ihre Gesamtübersicht</div>
              <div class="side-body">
                <div class="price" id="overviewPriceWrap" style="display:none">
                  <b id="overviewPrice">-</b>
                </div>

                <div class="sp" id="overviewPriceSpacer" style="display:none"></div>

                <div class="kv">
                  <div class="muted">Voraussichtliche Fertigstellung:</div>
                  <div><b id="overviewDelivery">–</b></div>
                </div>

                <div class="sp"></div>

                <div class="kv">
                  <div class="muted">Fortschritt:</div>
                  <div><b id="overviewProgress">0/0</b> Angaben vollständig</div>
                </div>

                <div class="sp"></div>

                <a class="help" href="/kontakt/">Sie haben Fragen? Wir helfen gerne vor <b>Ort Beratung</b> beantragen</a>

                <div class="sp"></div>

                <?php if (current_user_can('manage_options')): ?>
                <button class="btn wide secondary" type="button" id="btnAdminExportCsv" style="display:none">CSV-Export (Admin)</button>
                <?php endif; ?>
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
