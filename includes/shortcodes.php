<?php

/* Button */

function sm_shortcodes_button($atts, $content = null) {

	/* Set up variables */
	extract(shortcode_atts(array(
		'link' => '', 
		'icon' => '',
		'text' => '',
		'colour_text' =>'',
		'colour_custom' => '', 
		'size' => 'medium', 
		'edge' => 'straight', 
		'target' => '_self'
	), $atts));
	
	/* Return Button */
	$button_style = "";
	if($colour_custom) {
		$button_style = ' style="background-color: '.$colour_custom.';color:'.$colour_text.'"';
	}
	if($icon) {
		$icon = '<i class="fa-icon-'.$icon.'"></i>&nbsp;&nbsp;';
	}
	return '<a href="'.$link.'" class="sm-shortcode sm-shortcode-button sm-shortcode-button-size-'.$size.' sm-shortcode-button-edge-'.$edge.'" target="'.$target.'"'.$button_style.'>'.$icon.$text.'</a>';
	
}
add_shortcode('sm_button', 'sm_shortcodes_button');


/* Columns */

function sm_shortcodes_columns($atts, $content = null) {

	/* Set up variables */
	extract(shortcode_atts(array(
		'structure' => '50|50'
	), $atts));
	
	$structure_class = str_replace('|', '-', $structure);
	$structure_class = str_replace('50', 'half', $structure_class);
	$structure_class = str_replace('33', 'third', $structure_class);
	$structure_class = str_replace('67', 'twothirds', $structure_class);
	$structure_class = str_replace('25', 'quarter', $structure_class);
	
	$structure_class = ' sm-shortcode-cols-'.$structure_class.' ';

	/* Return Columns */
	return '<div class="sm-shortcode sm-shortcode-cols '.$structure_class.'">'.do_shortcode($content).'</div>';
	 
}
add_shortcode('sm_columns', 'sm_shortcodes_columns');



/* Column */

function sm_shortcodes_column($atts, $content = null) {

	/* Set up variables */
	extract(shortcode_atts(array(
		'position' => 'a'
	), $atts));
	
	return '<div class="sm-shortcode sm-shortcode-col sm-shortcode-col-'.$position.'"><div class="sm-shortcode-col-inner">'.wpautop(do_shortcode($content)).'</div></div>';

}
add_shortcode('sm_col', 'sm_shortcodes_column');



/* Social */

function sm_social($atts, $content = null) {
	
	/* Return Social */
	return '<p class="sm-shortcode sm-shortcode-social-links">'.do_shortcode($content).'</p>';
	 
}
add_shortcode('sm_social', 'sm_social');



/* Social Link */

function sm_social_link($atts, $content = null) {
	global $sm_shortcodes_directory;
	
	/* Set up variables */
	extract(shortcode_atts(array(
		'service' => '',
		'link' => ''
	), $atts));
	
	if(strpos($service, 'sm-social-icon-') !== false) {
		
		$social_link_code = '<a href="'.$link.'" target="_blank" class="sm-social-icon '.$service.'"></a>';
		
	} else {
		
		$social_link_code = '<a href="'.$link.'" target="_blank" class="sm-social-icon-image"><img src="'.$sm_shortcodes_directory.'images/social-icons/'.$service.'.png" alt="'.$service.'" /></a>';
		
	}

	/* Return Social */
	return $social_link_code;
	 
}
add_shortcode('sm_social_link', 'sm_social_link');



/* YouTube */

function sm_shortcodes_media($atts, $content = null) {

	/* Set up variables */
	extract(shortcode_atts(array(
		'type' => 'youtube',
		'url' => '',
		'width' => '100%',
		'height' => '400'
	), $atts));
	
	$media_code = '';
	
	if($type == "youtube") {
	
	/* YouTube */
		if(strpos($url, 'youtube')) {
			$embed_src = $url;
			parse_str( parse_url( $embed_src, PHP_URL_QUERY ), $my_array_of_vars );
			$youtube_id = $my_array_of_vars['v']; 
		} else {
			$youtube_id = $url;
		}
		$media_code = '<div class="sm-shortcode sm-shortcode-video-embed"><iframe width="'.$width.'" height="'.$height.'" src="http://www.youtube.com/embed/'.$youtube_id.'" frameborder="0" allowfullscreen></iframe></div>'; 
		
	} else if($type == "vimeo") {
	
	/* Vimeo */
		$result = preg_match('/(\d+)/', $url, $matches);
		if($result) {
		    $vimeo_id = $matches[0];
		} else {
			$vimeo_id = $url;
		}
		$media_code = '<div class="sm-shortcode sm-shortcode-video-embed"><iframe src="http://player.vimeo.com/video/'.$vimeo_id.'" width="'.$width.'" height="'.$height.'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>'; 
	
	}
	
	return $media_code;

}
add_shortcode('sm_media', 'sm_shortcodes_media');



/* Toggles */

function sm_shortcodes_toggle($atts, $content = null) {

	/* Set up variables */
	extract(shortcode_atts(array(
		'heading' => '',
		'icon' => '',
		'text' => '',
		'accordion' => '',
		'onload' => 'closed'
	), $atts));
	
	if($onload == "open") { $active_class = "sm-shortcode-toggle-active"; } else { $active_class = ""; }
	if($icon) { $icon_code = '<i class="fa-icon-'.$icon.'"></i>'; } else { $icon_code = ''; }
	if($accordion == 1) {
		$toggle_icons = '<i class="toggle-down fa-icon-plus"></i><i class="toggle-up fa-icon-minus"></i>';
	} else {
		$toggle_icons = '<i class="toggle-down fa-icon-caret-down"></i><i class="toggle-up fa-icon-caret-up"></i>';
	}
	
	return '<div class="sm-shortcode sm-shortcode-toggle '.$active_class.'"><h3 class="sm-shortcode sm-shortcode-toggle-heading">'.$icon_code.$heading.$toggle_icons.'</h3><div class="sm-shortcode sm-shortcode-toggle-content">'.wpautop($text).'</div></div>';

}
add_shortcode('sm_toggle', 'sm_shortcodes_toggle');



/* Accordion */

function sm_shortcodes_accordion($atts, $content = null) {

	/* Return Toggles */
	return '<div class="sm-shortcode sm-shortcode-accordion">'.do_shortcode($content).'</div>';
	
}
add_shortcode('sm_accordion', 'sm_shortcodes_accordion');



/* Tabs */

function sm_shortcodes_tabs($atts, $content = null) {
	/* Return Tabs */
	return '<div class="sm-shortcode sm-shortcode-tabs">'.do_shortcode($content).'</div>';
}
add_shortcode('sm_tabs', 'sm_shortcodes_tabs');


/* Tab */

function sm_shortcodes_tab($atts, $content = null) {

	/* Set up variables */
	extract(shortcode_atts(array(
		'label' => ''
	), $atts));
		
	return '<div class="sm-shortcode sm-shortcode-tabpane"><div class="sm-shortcode sm-shortcode-tab-label">'.$label.'</div>'.wpautop(do_shortcode($content)).'</div>';

}
add_shortcode('sm_tab', 'sm_shortcodes_tab');

/* Alert Box */

function sm_shortcodes_alertbox($atts, $content = null) {

	/* Set up variables */
	extract(shortcode_atts(array(
		'icon' => '',
		'colour_text' => '', 
		'colour_custom' => ''
	), $atts));
	
	
	$alertbox_style = "";
	
	if($colour_custom) {
		$alertbox_style = ' style="background-color: '.$colour_custom.';color:'.$colour_text.'"';
	}
	if($icon) {
		$icon_code = '<i class="fa-icon-'.$icon.'"></i>';
	} else {
		$icon_code = '';
	}
	
	return '<div class="sm-shortcode sm-shortcode-alertbox"'.$alertbox_style.'>'.$icon_code.do_shortcode($content).'</div>';

}
add_shortcode('sm_alertbox', 'sm_shortcodes_alertbox');


/* Code */

function sm_shortcode_code( $atts, $content = null )
{	
	$atts = (shortcode_atts(array(
			'type' => 'code',
			'icon' => '',
			'content' => !empty($content) ? $content : 'Custom Heading',
		), $atts));
	
	extract($atts);
	/*
	* Code
	*/
	
	if($icon) {
	$icon_code = '<i class="fa-icon-'.$icon.'"></i>';
	} else {
	$icon_code = '';
	}
	
	if ( strtolower( $type ) == 'code')
	{
		
		return '<div class = "sm_code">'.$icon_code.do_shortcode($content).'</div>';
	}	
}
add_shortcode('sm_code', 'sm_shortcode_code');



/* Blockquotes */

function sm_shortcode_blockquotes( $atts, $content = null )
{
	$atts = shortcode_atts(
			array(
			'cite' => 'Citation',
			'type' => 'left',
			'content' => !empty($content) ? $content : 'Content Goes Here'
		), $atts
	);
	
	extract($atts);	
	$shape = '';
	$cite = wp_strip_all_tags($cite);
        $content = wp_strip_all_tags($content);
	
	if ( strtolower( $type ) == 'left' )
	{
		return "<div class = 'sm_blockquote left_text'> $content <cite class = 'sm_blockquote_cite' >- $cite</cite></div>";
	
	}
	if ( strtolower( $type ) == 'center' )
	{
		return "<div class = 'sm_blockquote center_text'> $content <cite class = 'sm_blockquote_cite' >- $cite</cite></div>";
		
	}
	if ( strtolower( $type ) == 'right' )
	{
		return "<div class = 'sm_blockquote right_text'> $content<cite class = 'sm_blockquote_cite' >- $cite</cite></div>";
		
	}
	
}
add_shortcode('sm_blockquotes', 'sm_shortcode_blockquotes');


/* Progress Bars */

function sm_shortcodes_progress_bar( $atts )
{
	$atts = shortcode_atts(
			array(
			'id' => 'progress_bar',
			'heading' => 'Title Goes Here',
			'percentage' => '50%',
			'colour_custom' => 'background-color:#ff2a13'
		), $atts
	);

	extract($atts);
        $heading = wp_strip_all_tags($heading);
	

	if ( strtolower( $id ) == 'progress_bar' )
	{
		return "<div class = 'sm_progress_heading'>$heading</div>
					<div class = 'sm_progress_main_wrapper'>
						<div class='sm_progress_bar' style='width:$percentage;$colour_custom;'>	
							<div class = 'sm_progress_percent'>
							$percentage
							</div>
						</div>
					</div>";
	
	}
}
add_shortcode('sm_progress_bar', 'sm_shortcodes_progress_bar');


/* Prompt Shortcode */

function sm_shortcodes_prompt( $atts )
{
	$atts = shortcode_atts(
			array(
			'id' => 'prompt',
			'title' => 'Title Goes Here',
			'message' => 'Prompt Message',
			'type' => 'left',
			'button_text' => 'Click Me',
			'url'=> 'http://www.ahmadawais.com',
			'colour_text' => '',
			'colour_custom' => 'background-color:#ff2a13'
		), $atts
	);
	
	extract($atts);
	$title = wp_strip_all_tags($title);
        $message = wp_strip_all_tags($message);
	
	$prompt_style = ' style="'.$colour_custom.';';
	$prompt_style.= $colour_text;
	
	if ( strtolower( $type ) == 'left' && strtolower( $id ) == 'prompt' )
	{
		return "<div class = 'sm_prompt_main_wrapper'>
					<div class='sm_prompt_content'>
						<h2>$title</h2>
						<p>$message</p>
					</div>
					<div class = 'sm_prompt_button'>
					<a href='$url' class = 'sm_prompt_button_text sm_anchor' target='_blank' \"$prompt_style\">$button_text</a>
					</div>
				</div>";
	}
	if ( strtolower( $type ) == 'right' && strtolower( $id ) == 'prompt' )
	{
		return "<div class = 'sm_prompt_main_wrapper'>
					<div class = 'sm_prompt_button'>
					<a href='$url' class='sm_prompt_button_text sm_anchor' target='_blank' \"$prompt_style\">$button_text</a>
					</div>
					<div class='sm_prompt_content'>
						<h2>$title</h2>
						<p>$message</p>
					</div>
				</div>";
	}
	
}
add_shortcode('sm_prompt', 'sm_shortcodes_prompt');

/* Map shortcode */

function sm_shortcodes_map( $atts, $content = null )
{
	$atts = shortcode_atts(
			array(
			'id' => 'map',
			'src' => 'https://www.google.com/maps/place/Worwox+Group+of+Agencies/@31.4627701,74.38875,15z/data=!4m2!3m1!1s0x39190613a72bbbef:0x5a3c493dfd222380'
		), $atts
	);

	extract($atts);

	if ( strtolower( $id ) == 'map' )
	{
		return "<div class = 'sm_map_main_wrapper'>
                            <iframe src='$src' width='600' height='450' frameborder='0' style='border:0'></iframe>
                        </div>";
		
	}
}
add_shortcode('sm_map', 'sm_shortcodes_map');