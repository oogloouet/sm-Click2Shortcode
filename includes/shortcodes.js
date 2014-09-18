jQuery(function() {
	
	/* Accordion */
	jQuery('.sm-shortcode-toggle-active').each(function() {
		jQuery(this).find('.sm-shortcode-toggle-content').show();
	});
	jQuery('.sm-shortcode-toggle .sm-shortcode-toggle-heading').click(function() {
		var toggle = jQuery(this).parent('.sm-shortcode-toggle');
		if(jQuery(this).parent('.sm-shortcode-toggle').parent('div').hasClass('sm-shortcode-accordion')) {
			toggle.parent('div').find('.sm-shortcode-toggle').find('.sm-shortcode-toggle-content:visible').slideUp();
			toggle.parent('div').find('.sm-shortcode-toggle-active').removeClass('sm-shortcode-toggle-active');
			toggle.toggleClass('sm-shortcode-toggle-active');
			toggle.find('.sm-shortcode-toggle-content').slideToggle(500);
		} else {
			toggle.toggleClass('sm-shortcode-toggle-active');
			toggle.find('.sm-shortcode-toggle-content').slideToggle(500);
		}
	});
	
	
	/* Tabs */
	jQuery('.sm-shortcode-tabs').each(function() {
		
		jQuery(this).prepend('<div class="sm-shortcode-tab-buttons"></div>');
		jQuery(this).find('.sm-shortcode-tabpane').each(function() {
			
			jQuery(this).parent('.sm-shortcode-tabs').find('.sm-shortcode-tab-buttons').append('<a href="#">'+jQuery(this).find('.sm-shortcode-tab-label').text()+'</a>');
			jQuery(this).find('.sm-shortcode-tab-label').remove();
			
		});
		
		jQuery(this).find('.sm-shortcode-tab-buttons').find('a:first').addClass('active');
		jQuery(this).find('.sm-shortcode-tabpane').hide();
		jQuery(this).find('.sm-shortcode-tabpane:first').show();
		
	});
	
	var tab_to_show = 0;
	jQuery(document).on('click', '.sm-shortcode-tab-buttons a', function() {
		tab_to_show = jQuery(this).parent('.sm-shortcode-tab-buttons').find('a').index(jQuery(this));
		jQuery(this).parent('.sm-shortcode-tab-buttons').parent('.sm-shortcode-tabs').find('.sm-shortcode-tabpane').hide();
		jQuery(this).parent('.sm-shortcode-tab-buttons').parent('.sm-shortcode-tabs').find('.sm-shortcode-tabpane').eq(tab_to_show).show();
		jQuery(this).parent('.sm-shortcode-tab-buttons').find('a').removeClass('active');
		jQuery(this).parent('.sm-shortcode-tab-buttons').find('a').eq(tab_to_show).addClass('active');
		return false;
	});
	
});