<?php

if (!defined('ABSPATH')) {
    exit;
}

add_action('rest_api_init', function () {
    register_rest_route('ea/v1', '/order-create', array(
        array(
            'methods' => WP_REST_Server::CREATABLE,
            'permission_callback' => function () {
                return is_user_logged_in();
            },
            'callback' => function (WP_REST_Request $req) {
                $params = (array) $req->get_json_params();
                $gebaeudetyp = isset($params['gebaeudetyp']) ? $params['gebaeudetyp'] : '';
                $data = isset($params['data']) ? $params['data'] : null;
                $meta = isset($params['meta']) ? $params['meta'] : null;

                $post_type = ea_form_map_gebaeudetyp_to_post_type($gebaeudetyp);
                if ($post_type === '') {
                    return new WP_Error('ea_invalid_gebaeudetyp', 'Invalid gebaeudetyp.', array('status' => 400));
                }
                if (!is_array($data)) {
                    return new WP_Error('ea_invalid_data', 'Invalid data payload.', array('status' => 400));
                }
                if ($meta !== null && !is_array($meta)) {
                    $meta = null;
                }

                $post_id = wp_insert_post(array(
                    'post_type' => $post_type,
                    'post_status' => 'publish',
                    'post_title' => 'Anfrage ' . strtoupper(trim((string) $gebaeudetyp)) . ' ' . current_time('Y-m-d H:i'),
                    'post_author' => get_current_user_id(),
                ), true);

                if (is_wp_error($post_id) || !$post_id) {
                    return new WP_Error('ea_create_failed', 'Order could not be created.', array('status' => 500));
                }

                // Store initial draft right away (server source of truth).
                $merged_meta = array(
                    'reason' => 'create',
                    'at' => current_time('mysql'),
                );
                if (is_array($meta)) {
                    // Allow client to set step pointers (e.g. next step after gebaeudetyp).
                    $merged_meta = array_merge($merged_meta, $meta);
                }
                ea_form_set_order_draft_data($post_id, $data, $merged_meta);
                // Store building type for easier backend filtering/reporting.
                update_post_meta((int) $post_id, '_ea_gebaeudetyp', strtoupper(trim((string) $gebaeudetyp)));

                $redirect = get_permalink((int) $post_id);
                if (!$redirect) {
                    $redirect = home_url('/?p=' . (int) $post_id);
                }

                return rest_ensure_response(array(
                    'orderId' => (int) $post_id,
                    'redirectUrl' => $redirect,
                    'draftUrl' => add_query_arg('orderId', (int) $post_id, rest_url('ea/v1/order-draft')),
                ));
            },
        ),
    ));

    register_rest_route('ea/v1', '/order-draft', array(
        array(
            'methods' => WP_REST_Server::READABLE,
            'permission_callback' => function (WP_REST_Request $req) {
                $order_id = (int) $req->get_param('orderId');
                return ea_form_current_user_can_access_order($order_id);
            },
            'callback' => function (WP_REST_Request $req) {
                $order_id = (int) $req->get_param('orderId');
                $p = ea_form_get_order_post($order_id);
                if (!$p) {
                    return new WP_Error('ea_not_found', 'Order not found.', array('status' => 404));
                }

                $data = ea_form_get_order_draft_data($order_id);
                $meta = ea_form_get_order_draft_meta($order_id);
                $updated_at = (string) get_post_meta($order_id, '_ea_form_draft_updated_at', true);

                return rest_ensure_response(array(
                    'orderId' => $order_id,
                    'data' => $data ? $data : new stdClass(),
                    'meta' => $meta ? $meta : new stdClass(),
                    'updatedAt' => $updated_at,
                ));
            },
            'args' => array(
                'orderId' => array(
                    'required' => true,
                    'validate_callback' => function ($param) {
                        return is_numeric($param) && (int) $param > 0;
                    },
                ),
            ),
        ),
        array(
            'methods' => WP_REST_Server::CREATABLE,
            'permission_callback' => function (WP_REST_Request $req) {
                $order_id = (int) $req->get_param('orderId');
                return ea_form_current_user_can_access_order($order_id);
            },
            'callback' => function (WP_REST_Request $req) {
                $order_id = (int) $req->get_param('orderId');
                $p = ea_form_get_order_post($order_id);
                if (!$p) {
                    return new WP_Error('ea_not_found', 'Order not found.', array('status' => 404));
                }

                $params = (array) $req->get_json_params();
                $data = isset($params['data']) ? $params['data'] : null;
                $meta = isset($params['meta']) ? $params['meta'] : null;

                if (!is_array($data)) {
                    return new WP_Error('ea_invalid_data', 'Invalid data payload.', array('status' => 400));
                }
                if ($meta !== null && !is_array($meta)) {
                    // We only store arrays for debug/telemetry.
                    $meta = null;
                }

                ea_form_set_order_draft_data($order_id, $data, $meta);
                // Keep order meta in sync when user changes the building type later in the flow.
                ea_form_sync_gebaeudetyp_meta_from_draft($order_id, $data);

                return rest_ensure_response(array(
                    'ok' => true,
                    'orderId' => $order_id,
                    'updatedAt' => (string) get_post_meta($order_id, '_ea_form_draft_updated_at', true),
                ));
            },
            'args' => array(
                'orderId' => array(
                    'required' => true,
                    'validate_callback' => function ($param) {
                        return is_numeric($param) && (int) $param > 0;
                    },
                ),
            ),
        ),
    ));
});
