<?php
    function initCors( $value ) {
        $origin_url = '*';
        
        header( 'Access-Control-Allow-Origin: ' . $origin_url );
        header( 'Access-Control-Allow-Methods: GET' );
        header( 'Access-Control-Allow-Credentials: true' );
        return $value;
    }

    add_action( 'rest_api_init', function() {

        remove_filter( 'rest_pre_serve_request', 'rest_send_cors_headers' );
    
        add_filter( 'rest_pre_serve_request', initCors);
    }, 15 );
?>