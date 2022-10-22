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
    
        add_filter( 'rest_pre_serve_request', "initCors");
    }, 15 );

    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Origin: http://localhost:8000');
    
    function enregistrer_menus() {
        register_nav_menu(
            'principal', __('Principal')
        );
    }

    add_action('init', 'enregistrer_menus');

    function obtenir_logo_site() {
        print_r(wp_register_script("test", "../../../../react/src/composansts/navigation/EnTete.jsx", [], false, false));
        wp_register_script("test", "../../../../react/src/composansts/navigation/EnTete.jsx", [], false, false);
        wp_enqueue_script("test", "../../../../react/src/composansts/navigation/EnTete.jsx", [], false, false);
        echo "allo";
    }

    add_action( 'wp_enqueue_scripts', 'obtenir_logo_site' );
    if(file_get_contents("php://input") !== false){
        $test_requete = json_decode(json_encode(json_decode(file_get_contents("php://input"))), true);

        if(isset($test_requete['_allo']))
            echo '<script> export const test=' . get_theme_mod('custom_logo') . ' </script>';
    }
?>