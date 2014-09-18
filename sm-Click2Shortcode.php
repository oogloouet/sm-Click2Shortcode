<?php
/*
Plugin Name: Click2Shortcode
Description: A user friendly shortcodes plugin.
Version: 1.0.0
Author: Syed Muneeb
*/

/* Variables */
$sm_shortcodes_path = dirname(__FILE__);
$sm_shortcodes_main_file = dirname(__FILE__).'/sm-shortcodes.php';
$sm_shortcodes_directory = plugin_dir_url($sm_shortcodes_main_file);
$sm_shortcodes_name = "Click2Shortcode";

/* Add shortcodes scripts file */
function sm_shortcodes_add_scripts() {
	global $sm_shortcodes_directory, $sm_shortcodes_path;
	if(!is_admin()) {
		
		/* Includes */
		include($sm_shortcodes_path.'/includes/shortcodes.php');

		wp_enqueue_style('sm_shortcodes', $sm_shortcodes_directory.'/includes/shortcodes.css');
		
		wp_enqueue_script('jquery');
		wp_register_script('sm_shortcodes_js', $sm_shortcodes_directory.'/includes/shortcodes.js', 'jquery');
		wp_enqueue_script('sm_shortcodes_js');
		
	} else {
		
		wp_enqueue_style( 'wp-color-picker' );
	    wp_enqueue_script( 'wp-color-picker' );
	    		
	}
	
	/* Font Awesome */
	wp_enqueue_style('sm_shortcodes_fontawesome', $sm_shortcodes_directory.'/fonts/fontawesome/css/font-awesome.min.css');
	wp_enqueue_style('sm_shortcodes_fontello', $sm_shortcodes_directory.'/fonts/fontello/css/fontello.css');
	
}
add_filter('init', 'sm_shortcodes_add_scripts');

/* Add button to TinyMCE */
add_action('admin_head', 'sm_shortcodes_addbuttons');
function sm_shortcodes_addbuttons() {
    global $typenow;
    // check user permissions
    if ( !current_user_can('edit_posts') && !current_user_can('edit_pages') ) {
   	return;
    }
	// check if WYSIWYG is enabled
	if ( get_user_option('rich_editing') == 'true') {
		add_filter("mce_external_plugins", "add_sm_shortcodes_tinymce_plugin");
		add_filter('mce_buttons', 'register_sm_shortcodes_button');
	}
}
function add_sm_shortcodes_tinymce_plugin($plugin_array) {
   	$plugin_array['sm_shortcodes_button'] = plugins_url( '/includes/tinymce_button.js', __FILE__ );
   	return $plugin_array;
}
function register_sm_shortcodes_button($buttons) {
   array_push($buttons, "sm_shortcodes_button");
   return $buttons;
}