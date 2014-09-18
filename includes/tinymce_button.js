(function(){


	tinymce.PluginManager.add('sm_shortcodes_button', function( editor, url ) {
        editor.addButton( 'sm_shortcodes_button', {
            title: 'SM Click2Shortcode',
	    image: url +'/../images/icon.png',
            onclick: function() {
				var width = jQuery(window).width(), H = jQuery(window).height(), W = ( 720 < width ) ? 720 : width;
				W = W - 180;
				H = H - 84;
				tb_show( 'SM Click2Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=sm-shortcodes-form' );
            }
        });
    });

	
	
	jQuery(function(){
	
		/* Social Links */

var social_icons = '<a href="#" class="button sm-shortcodes-toggle-icon-list sm-shortcodes-toggle-social-list" style="float:left;display:block;">Choose icon</a><div class="social-icon"></div>\
<i class="current-social-icon sm-social-icon-"></i>\
<div class="sm-shortcodes-icon-list-holder" style="display:none;">\
<p style="margin-bottom:0px">Icons from <a href="http://zocial.smcllns.com/" target="_blank">Zocial</a> (via <a href="http://fontello.com/" target="_blank">Fontello</a>) and <a href="http://icondock.com/free/vector-social-media-icons" target="_blank">Icon Dock</a></p>\
<ul class="sm-shortcodes-icon-list">\
<li><a href="#"><i class="sm-social-icon-twitter"></i> <span>sm-social-icon-twitter</span></a></li>\
<li><a href="#"><i class="sm-social-icon-facebook"></i> <span>sm-social-icon-facebook</span></a></li>\
<li><a href="#"><i class="sm-social-icon-linkedin"></i> <span>sm-social-icon-linkedin</span></a></li>\
<li><a href="#"><i class="sm-social-icon-pinterest"></i> <span>sm-social-icon-pinterest</span></a></li>\
<li><a href="#"><i class="sm-social-icon-delicious"></i> <span>sm-social-icon-delicious</span></a></li>\
<li><a href="#"><i class="sm-social-icon-paypal"></i> <span>sm-social-icon-paypal</span></a></li>\
<li><a href="#"><i class="sm-social-icon-gplus"></i> <span>sm-social-icon-gplus</span></a></li>\
<li><a href="#"><i class="sm-social-icon-stumbleupon"></i> <span>sm-social-icon-stumbleupon</span></a></li>\
<li><a href="#"><i class="sm-social-icon-fivehundredpx"></i> <span>sm-social-icon-fivehundredpx</span></a></li>\
<li><a href="#"><i class="sm-social-icon-foursquare"></i> <span>sm-social-icon-foursquare</span></a></li>\
<li><a href="#"><i class="sm-social-icon-forrst"></i> <span>sm-social-icon-forrst</span></a></li>\
<li><a href="#"><i class="sm-social-icon-digg"></i> <span>sm-social-icon-digg</span></a></li>\
<li><a href="#"><i class="sm-social-icon-spotify"></i> <span>sm-social-icon-spotify</span></a></li>\
<li><a href="#"><i class="sm-social-icon-reddit"></i> <span>sm-social-icon-reddit</span></a></li>\
<li><a href="#"><i class="sm-social-icon-flickr"></i> <span>sm-social-icon-flickr</span></a></li>\
<li><a href="#"><i class="sm-social-icon-rss"></i> <span>sm-social-icon-rss</span></a></li>\
<li><a href="#"><i class="sm-social-icon-skype"></i> <span>sm-social-icon-skype</span></a></li>\
<li><a href="#"><i class="sm-social-icon-youtube"></i> <span>sm-social-icon-youtube</span></a></li>\
<li><a href="#"><i class="sm-social-icon-vimeo"></i> <span>sm-social-icon-vimeo</span></a></li>\
<li><a href="#"><i class="sm-social-icon-myspace"></i> <span>sm-social-icon-myspace</span></a></li>\
<li><a href="#"><i class="sm-social-icon-amazon"></i> <span>sm-social-icon-amazon</span></a></li>\
<li><a href="#"><i class="sm-social-icon-ebay"></i> <span>sm-social-icon-ebay</span></a></li>\
<li><a href="#"><i class="sm-social-icon-github"></i> <span>sm-social-icon-github</span></a></li>\
<li><a href="#"><i class="sm-social-icon-lastfm"></i> <span>sm-social-icon-lastfm</span></a></li>\
<li><a href="#"><i class="sm-social-icon-soundcloud"></i> <span>sm-social-icon-soundcloud</span></a></li>\
<li><a href="#"><i class="sm-social-icon-tumblr"></i> <span>sm-social-icon-tumblr</span></a></li>\
<li><a href="#"><i class="sm-social-icon-instagram"></i> <span>sm-social-icon-instagram</span></a></li>\
<li style="clear:left"><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/500px.png" alt="" /><span>500px</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/aboutme.png" alt="" /><span>aboutme</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/amazon.png" alt="" /><span>amazon</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/app-store.png" alt="" /><span>app-store</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/bebo.png" alt="" /><span>bebo</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/behance.png" alt="" /><span>behance</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/blogger.png" alt="" /><span>blogger</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/coroflot.png" alt="" /><span>coroflot</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/delicious.png" alt="" /><span>delicious</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/deviant-art.png" alt="" /><span>deviant-art</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/digg.png" alt="" /><span>digg</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/dribbble.png" alt="" /><span>dribbble</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/ebay.png" alt="" /><span>ebay</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/etsy.png" alt="" /><span>etsy</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/facebook.png" alt="" /><span>facebook</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/flickr.png" alt="" /><span>flickr</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/foodspotting.png" alt="" /><span>foodspotting</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/forrst.png" alt="" /><span>forrst</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/foursquare.png" alt="" /><span>foursquare</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/friendfeed.png" alt="" /><span>friendfeed</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/friendster.png" alt="" /><span>friendster</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/github.png" alt="" /><span>github</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/google-plus.png" alt="" /><span>google-plus</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/gowalla.png" alt="" /><span>gowalla</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/hyves.png" alt="" /><span>hyves</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/instagram.png" alt="" /><span>instagram</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/lastfm.png" alt="" /><span>lastfm</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/linkedin.png" alt="" /><span>linkedin</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/metacafe.png" alt="" /><span>metacafe</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/myspace.png" alt="" /><span>myspace</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/photobucket.png" alt="" /><span>photobucket</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/picasa.png" alt="" /><span>picasa</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/pinterest.png" alt="" /><span>pinterest</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/reddit.png" alt="" /><span>reddit</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/rss.png" alt="" /><span>rss</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/scribd.png" alt="" /><span>scribd</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/skype.png" alt="" /><span>skype</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/slashdot.png" alt="" /><span>slashdot</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/slideshare.png" alt="" /><span>slideshare</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/soundcloud.png" alt="" /><span>soundcloud</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/spotify.png" alt="" /><span>spotify</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/stumbleupon.png" alt="" /><span>stumbleupon</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/technorati.png" alt="" /><span>technorati</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/tumblr.png" alt="" /><span>tumblr</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/twitter.png" alt="" /><span>twitter</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/vimeo.png" alt="" /><span>vimeo</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/virb.png" alt="" /><span>virb</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/wordpress.png" alt="" /><span>wordpress</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/yahoo-buzz.png" alt="" /><span>yahoo-buzz</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/yahoo.png" alt="" /><span>yahoo</span></a></li>\
<li><a href="#"><img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/youtube.png" alt="" /><span>youtube</span></a></li>\
</ul>\
</div>';


var fa_icons = '<ul class="sm-shortcodes-icon-list">\
<li><a href="#"><i class="fa-icon-">&#xf000;</i> <span>glass</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf001;</i> <span>music</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf002;</i> <span>search</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf003;</i> <span>envelope</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf004;</i> <span>heart</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf005;</i> <span>star</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf006;</i> <span>star-empty</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf007;</i> <span>user</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf008;</i> <span>film</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf009;</i> <span>th-large</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf00a;</i> <span>th</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf00b;</i> <span>th-list</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf00c;</i> <span>ok</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf00d;</i> <span>remove</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf00e;</i> <span>zoom-in</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf010;</i> <span>zoom-out</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf011;</i> <span>off</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf012;</i> <span>signal</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf013;</i> <span>cog</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf014;</i> <span>trash</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf015;</i> <span>home</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf016;</i> <span>file</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf017;</i> <span>time</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf018;</i> <span>road</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf019;</i> <span>download-alt</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf01a;</i> <span>download</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf01b;</i> <span>upload</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf01c;</i> <span>inbox</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf01d;</i> <span>play-circle</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf01e;</i> <span>repeat</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf021;</i> <span>refresh</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf022;</i> <span>list-alt</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf023;</i> <span>lock</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf024;</i> <span>flag</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf025;</i> <span>headphones</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf026;</i> <span>volume-off</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf027;</i> <span>volume-down</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf028;</i> <span>volume-up</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf029;</i> <span>qrcode</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf02a;</i> <span>barcode</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf02b;</i> <span>tag</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf02c;</i> <span>tags</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf02d;</i> <span>book</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf02e;</i> <span>bookmark</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf02f;</i> <span>print</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf030;</i> <span>camera</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf031;</i> <span>font</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf032;</i> <span>bold</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf033;</i> <span>italic</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf034;</i> <span>text-height</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf035;</i> <span>text-width</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf036;</i> <span>align-left</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf037;</i> <span>align-center</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf038;</i> <span>align-right</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf039;</i> <span>align-justify</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf03a;</i> <span>list</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf03b;</i> <span>indent-left</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf03c;</i> <span>indent-right</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf03d;</i> <span>facetime-video</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf03e;</i> <span>picture</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf040;</i> <span>pencil</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf041;</i> <span>map-marker</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf042;</i> <span>adjust</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf043;</i> <span>tint</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf044;</i> <span>edit</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf045;</i> <span>share</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf046;</i> <span>check</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf047;</i> <span>move</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf048;</i> <span>step-backward</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf049;</i> <span>fast-backward</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf04a;</i> <span>backward</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf04b;</i> <span>play</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf04c;</i> <span>pause</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf04d;</i> <span>stop</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf04e;</i> <span>forward</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf050;</i> <span>fast-forward</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf051;</i> <span>step-forward</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf052;</i> <span>eject</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf053;</i> <span>chevron-left</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf054;</i> <span>chevron-right</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf055;</i> <span>plus-sign</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf056;</i> <span>minus-sign</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf057;</i> <span>remove-sign</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf058;</i> <span>ok-sign</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf059;</i> <span>question-sign</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf05a;</i> <span>info-sign</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf05b;</i> <span>screenshot</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf05c;</i> <span>remove-circle</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf05d;</i> <span>ok-circle</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf05e;</i> <span>ban-circle</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf060;</i> <span>arrow-left</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf061;</i> <span>arrow-right</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf062;</i> <span>arrow-up</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf063;</i> <span>arrow-down</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf064;</i> <span>share-alt</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf065;</i> <span>resize-full</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf066;</i> <span>resize-small</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf067;</i> <span>plus</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf068;</i> <span>minus</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf069;</i> <span>asterisk</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf06a;</i> <span>exclamation-sign</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf06b;</i> <span>gift</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf06c;</i> <span>leaf</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf06d;</i> <span>fire</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf06e;</i> <span>eye-open</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf070;</i> <span>eye-close</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf071;</i> <span>warning-sign</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf072;</i> <span>plane</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf073;</i> <span>calendar</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf074;</i> <span>random</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf075;</i> <span>comment</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf076;</i> <span>magnet</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf077;</i> <span>chevron-up</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf078;</i> <span>chevron-down</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf079;</i> <span>retweet</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf07a;</i> <span>shopping-cart</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf07b;</i> <span>folder-close</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf07c;</i> <span>folder-open</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf07d;</i> <span>resize-vertical</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf07e;</i> <span>resize-horizontal</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf080;</i> <span>bar-chart</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf081;</i> <span>twitter-sign</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf082;</i> <span>facebook-sign</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf083;</i> <span>camera-retro</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf084;</i> <span>key</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf085;</i> <span>cogs</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf086;</i> <span>comments</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf087;</i> <span>thumbs-up</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf088;</i> <span>thumbs-down</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf089;</i> <span>star-half</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf08a;</i> <span>heart-empty</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf08b;</i> <span>signout</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf08c;</i> <span>linkedin-sign</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf08d;</i> <span>pushpin</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf08e;</i> <span>external-link</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf090;</i> <span>signin</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf091;</i> <span>trophy</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf092;</i> <span>github-sign</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf093;</i> <span>upload-alt</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf094;</i> <span>lemon</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf095;</i> <span>phone</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf096;</i> <span>check-empty</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf097;</i> <span>bookmark-empty</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf098;</i> <span>phone-sign</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf099;</i> <span>twitter</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf09a;</i> <span>facebook</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf09b;</i> <span>github</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf09c;</i> <span>unlock</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf09d;</i> <span>credit-card</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf09e;</i> <span>rss</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0a0;</i> <span>hdd</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0a1;</i> <span>bullhorn</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0a2;</i> <span>bell</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0a3;</i> <span>certificate</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0a4;</i> <span>hand-right</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0a5;</i> <span>hand-left</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0a6;</i> <span>hand-up</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0a7;</i> <span>hand-down</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0a8;</i> <span>circle-arrow-left</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0a9;</i> <span>circle-arrow-right</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0aa;</i> <span>circle-arrow-up</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0ab;</i> <span>circle-arrow-down</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0ac;</i> <span>globe</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0ad;</i> <span>wrench</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0ae;</i> <span>tasks</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0b0;</i> <span>filter</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0b1;</i> <span>briefcase</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0b2;</i> <span>fullscreen</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0c0;</i> <span>group</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0c1;</i> <span>link</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0c2;</i> <span>cloud</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0c3;</i> <span>beaker</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0c4;</i> <span>cut</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0c5;</i> <span>copy</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0c6;</i> <span>paper-clip</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0c7;</i> <span>save</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0c8;</i> <span>sign-blank</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0c9;</i> <span>reorder</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0ca;</i> <span>list-ul</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0cb;</i> <span>list-ol</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0cc;</i> <span>strikethrough</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0cd;</i> <span>underline</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0ce;</i> <span>table</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0d0;</i> <span>magic</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0d1;</i> <span>truck</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0d2;</i> <span>pinterest</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0d3;</i> <span>pinterest-sign</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0d4;</i> <span>google-plus-sign</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0d5;</i> <span>google-plus</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0d6;</i> <span>money</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0d7;</i> <span>caret-down</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0d8;</i> <span>caret-up</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0d9;</i> <span>caret-left</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0da;</i> <span>caret-right</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0db;</i> <span>columns</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0dc;</i> <span>sort</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0dd;</i> <span>sort-down</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0de;</i> <span>sort-up</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0e0;</i> <span>envelope-alt</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0e1;</i> <span>linkedin</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0e2;</i> <span>undo</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0e3;</i> <span>legal</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0e4;</i> <span>dashboard</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0e5;</i> <span>comment-alt</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0e6;</i> <span>comments-alt</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0e7;</i> <span>bolt</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0e8;</i> <span>sitemap</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0e9;</i> <span>umbrella</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0ea;</i> <span>paste</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0eb;</i> <span>lightbulb</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0ec;</i> <span>exchange</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0ed;</i> <span>cloud-download</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0ee;</i> <span>cloud-upload</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0f0;</i> <span>user-md</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0f1;</i> <span>stethoscope</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0f2;</i> <span>suitcase</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0f3;</i> <span>bell-alt</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0f4;</i> <span>coffee</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0f5;</i> <span>food</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0f6;</i> <span>file-alt</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0f7;</i> <span>building</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0f8;</i> <span>hospital</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0f9;</i> <span>ambulance</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0fa;</i> <span>medkit</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0fb;</i> <span>fighter-jet</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0fc;</i> <span>beer</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0fd;</i> <span>h-sign</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf0fe;</i> <span>plus-sign-alt</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf100;</i> <span>double-angle-left</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf101;</i> <span>double-angle-right</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf102;</i> <span>double-angle-up</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf103;</i> <span>double-angle-down</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf104;</i> <span>angle-left</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf105;</i> <span>angle-right</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf106;</i> <span>angle-up</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf107;</i> <span>angle-down</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf108;</i> <span>desktop</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf109;</i> <span>laptop</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf10a;</i> <span>tablet</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf10b;</i> <span>mobile-phone</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf10c;</i> <span>circle-blank</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf10d;</i> <span>quote-left</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf10e;</i> <span>quote-right</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf110;</i> <span>spinner</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf111;</i> <span>circle</span></a></li>\
<li><a href="#"><i class="fa-icon-">&#xf112;</i> <span>reply</span></a></li>\
</ul>';
	
		/* The form */
		var form = jQuery('<style type="text/css">\
#TB_ajaxContent { padding: 0 0 30px 0; width: 100%!important; overflow: hidden; }\
.sm-shortcodes-form { display: block; overflow: hidden; height: 100%; position: relative; font-family: Helvetica, Arial; color: #333; font-size: 12px; text-align: left; background: #FFF; }\
.sm-shortcodes-form a { text-decoration: none; }\
.sm-shortcodes-form .sm-shortcodes-form-top { overflow: auto; height: 100%; position: relative; padding: 0 0 0 120px; margin: 0 0 0 0; }\
.sm-shortcodes-form .sm-shortcodes-form-types { position: absolute; top: 0px; left: 0px; width: 120px; height: 100%; min-height: 100%; background: #f9f9f9; border-right: 1px solid #EEE; }\
.sm-shortcodes-form .sm-shortcodes-form-types .sm-shortcodes-form-title { display: block; padding: 14px 20px 14px 40px; position: relative; font-size: 12px; line-height: 14px; color: #333; border-bottom: 1px solid #EEE; }\
.sm-shortcodes-form .sm-shortcodes-form-types .sm-shortcodes-form-title img { position: absolute; top: 13px; left: 12px; } \
.sm-shortcodes-form .sm-shortcodes-form-types ul { list-style: none; margin: 0px; padding: 0px; }\
.sm-shortcodes-form .sm-shortcodes-form-types ul li { display: block; border-bottom: 1px solid #EEE; margin: 0px; }\
.sm-shortcodes-form .sm-shortcodes-form-types ul li.active { width: 121px; font-weight: bold; }\
.sm-shortcodes-form .sm-shortcodes-form-types ul li a { display: block; padding: 14px 20px; font-size: 12px; color: #333; }\
.sm-shortcodes-form .sm-shortcodes-form-types ul li.active a,  .sm-shortcodes-form .sm-shortcodes-form-types ul li a:hover { background: #FFF; }\
.sm-shortcodes-form .sm-shortcodes-form-tabs { background: #FFF; padding: 20px 20px 70px 20px; overflow: hidden; }\
.sm-shortcodes-form .sm-shortcodes-form-tab { display: none; }\
.sm-shortcodes-form .sm-shortcodes-form-tabs h2 { display: block; padding: 0 10px 10px 10px; line-height: normal; font-size: 18px; margin: 0 0 10px 0; border-bottom: 1px solid #EEE; }\
.sm-shortcodes-form .sm-shortcodes-form-fields { overflow: auto; }\
.sm-shortcodes-form .sm-shortcodes-form-tabs table { width: 100%; border: none; font-size: 12px; text-align: left; }\
.sm-shortcodes-form .sm-shortcodes-form-tabs table th,  .sm-shortcodes-form .sm-shortcodes-form-tabs table td { padding: 14px 10px 14px 0; border-bottom: 1px solid #EEE; vertical-align: top; }\
.sm-shortcodes-form .sm-shortcodes-form-tabs table th { font-weight: normal; text-align: left; width: 120px; }\
.sm-shortcodes-form .sm-shortcodes-form-tabs table th label { padding: 5px 0 0 10px; display: block; }\
.sm-shortcodes-form .sm-shortcodes-form-tabs table td input, .sm-shortcodes-form .sm-shortcodes-form-tabs table td textarea { border: 1px solid #DDD; box-shadow: inset 1px 1px 4px #f9f9f9; padding: 6px 8px; font-family: Helvetica; font-size: 12px; color: #888; width: 80%; }\
.sm-shortcodes-form .sm-shortcodes-form-tabs table td .wp-picker-container input[type="text"] { width: 80px!important; margin: 0 5px 0 0; }\
.sm-shortcodes-form .sm-shortcodes-form-tabs table td .wp-picker-container input.button { width: auto!important; }\
.sm-shortcodes-form .sm-shortcodes-form-tabs table td textarea { height: 100px; }\
.sm-shortcodes-form .sm-shortcodes-form-tabs table td textarea:disabled { background: #EEE; }\
.sm-shortcodes-form .sm-shortcodes-form-tabs table td input:focus, .sm-shortcodes-form .sm-shortcodes-form-tabs table td textarea:focus { color: #333; border-color: #BBB; background: #FFF; outline: none; }\
.sm-shortcodes-form .sm-shortcodes-form-tabs table td span.tip { display: block; padding: 5px 0; color: #999; }\
.sm-shortcodes-form .sm-shortcodes-submit { clear: both; height: 70px; /*position: absolute; */bottom: 0px; left: 0px; width: 100%; background: #EEE; border-top: 1px solid #DDD; }\
.sm-shortcodes-form .sm-shortcodes-submit .button-primary { position: absolute; right: 20px; bottom: 20px; }\
.sm-shortcodes-form .current-icon, .sm-shortcodes-form .current-social-icon { margin: 0 0 0 10px; font-size: 14px; width: 24px; text-align:center; height: 24px; line-height: 24px; }\
.sm-shortcodes-toggle-social-list { margin: 0 0 20px 0; }\
.sm-shortcodes-form .social-icon, .sm-shortcodes-form .current-social-icon { margin: 0 0 0 10px; display: block; float: left; }\
.sm-shortcodes-form .current-social-icon { display: none; }\
.sm-shortcodes-form .social-icon img { width: 21px; height: 21px; margin: 1px 0 0 0; }\
.sm-shortcodes-form .sm-shortcodes-social-link-field { float: left; width: 220px!important; margin: 0 0 0 10px; }\
.sm-shortcodes-form .sm-shortcodes-icon-list-holder { clear: both; overflow: hidden; }\
.sm-shortcodes-form .sm-shortcodes-icon-list { padding: 10px 0 0 0; display: block; list-style: none; margin: 0px; }\
.sm-shortcodes-form .sm-shortcodes-icon-list li { display: block; float: left; width: 40px; height: 40px; margin: 0 10px 10px 0; }\
.sm-shortcodes-form .sm-shortcodes-icon-list li a { display: block; float: left; width: 40px; height: 40px; text-align: center; line-height: 40px; background: #f9f9f9; border: 1px solid #EEE; }\
.sm-shortcodes-form .sm-shortcodes-icon-list li a:hover { border: 1px solid #CCC; box-shadow: 1px 1px 2px #EEE; }\
.sm-shortcodes-form .sm-shortcodes-icon-list li a i { font-size: 14px; }\
.sm-shortcodes-form .sm-shortcodes-icon-list li a img { width: 20px; height: 20px; margin-top: 10px; }\
.sm-shortcodes-form .sm-shortcodes-icon-list li a span { display: none; }\
.sm-shortcodes-form .column-structures { display: block; padding: 0 0 0 10px; }\
.sm-shortcodes-form .column-structures a { display: block; width: 100px; height: 40px; float: left; margin: 0 10px 20px 0; }\
.sm-shortcodes-form .column-structures a span { float:left; position: relative; display: block; height: 40px; overflow: hidden; }\
.sm-shortcodes-form .column-structures a i { background: #EEE; position: absolute; left: -2px; top: 0px; display: block; height: 40px; line-height: 40px; font-size: 14px; text-align: center; width: 100%; }\
.sm-shortcodes-form .column-structures a:hover i, .sm-shortcodes-form .column-structures a.active i { background: #999; color: #FFF; }\
.sm-shortcodes-form .column-structures label { margin: 0 0 14px 0; display: block; font-size: 14px; }\
.sm-shortcodes-form .clearfix { clear: both; }\
#sm-shortcodes-form-tab_tabs td label,\
#sm-shortcodes-form-tab_accordion td label { display: block; padding: 5px 0 10px 0; color: #999; }\
#sm-shortcodes-form-tab_tabs input,\
#sm-shortcodes-form-tab_accordion input,\
#sm-shortcodes-form-tab_accordion .sm-shortcodes-toggle-icon-list { margin: 0 0 10px 0; }\
</style>\
		<div id="sm-shortcodes-form"><div class="sm-shortcodes-form">\
		<div class="sm-shortcodes-form-top">\
		<div class="sm-shortcodes-form-types">\
			<span class="sm-shortcodes-form-title"><img src="../wp-content/plugins/sm-Click2Shortcode/images/icon.png" alt="" />SM Click2Shortcode</span>\
			<ul>\
				<li class="sm-shortcodes-form-type-button active" type="button"><a href="#">Button</a></li>\
				<li class="sm-shortcodes-form-type-columns" type="columns"><a href="#">Columns</a></li>\
				<li class="sm-shortcodes-form-type-social" type="social"><a href="#">Social</a></li>\
				<li class="sm-shortcodes-form-type-media" type="media"><a href="#">Video</a></li>\
				<li class="sm-shortcodes-form-type-toggle" type="toggle"><a href="#">Toggle</a></li>\
				<li class="sm-shortcodes-form-type-accordion" type="accordion"><a href="#">Accordion</a></li>\
				<li class="sm-shortcodes-form-type-alertbox" type="alertbox"><a href="#">Alert Box</a></li>\
				<li class="sm-shortcodes-form-type-tabs" type="tabs"><a href="#">Tabs</a></li>\
				<li class="sm-shortcodes-form-type-prompt" type="prompt"><a href="#">Prompt</a></li>\
				<li class="sm-shortcodes-form-type-map" type="map"><a href="#">Google Map</a></li>\
				<li class="sm-shortcodes-form-type-progressbars" type="progressbars"><a href="#">Progress Bars</a></li>\
				<li class="sm-shortcodes-form-type-blockquote" type="blockquote"><a href="#">Blockquote</a></li>\
				<li class="sm-shortcodes-form-type-code" type="code"><a href="#">Code</a></li>\
			</ul>\
		</div><!-- end types -->\
		<div class="sm-shortcodes-form-tabs">\
<!-- BUTTON -->\
			<div class="sm-shortcodes-form-tab" id="sm-shortcodes-form-tab_button" style="display:block">\
			<h2>Add Button</h2>\
				<div class="sm-shortcodes-form-fields">\
				<table cellpadding="0" cellspacing="0">\
					<tr>\
						<th><label>Link</label></th>\
						<td><input type="text" placeholder="http://www.yourlink.com" value="" fieldname="link" /></td>\
					</tr>\
					<tr>\
						<th><label>Icon</label></th>\
						<td>\
<a href="#" class="button sm-shortcodes-toggle-icon-list">Choose an icon</a>\
<i class="current-icon fa-icon-"></i>\
<div class="sm-shortcodes-icon-list-holder" style="display:none">\
<p style="margin-bottom:0px">Icons by <a href="http://fortawesome.github.com/Font-Awesome/" target="_blank">Font Awesome</a></p>'+fa_icons+'</div>\
						<input type="text" style="display:none" value="" fieldname="icon" />\
						</td>\
					</tr>\
					<tr>\
						<th><label>Button Text</label></th>\
						<td><input type="text" placeholder="Text on button" value="" fieldname="text" /></td>\
					</tr>\
					<tr>\
					    <th><label>Text Color</label></th>\
					    <td><input type="text" class="sm-shortcodes-button_colour_custom" fieldname="colour_text" value="" /></td>\
					</tr>\
					<tr>\
					    <th><label>Background Colour</label></th>\
					    <td>\
						<input type="text" class="sm-shortcodes-button_colour_custom" fieldname="colour_custom" value="" />\
					    </td>\
					</tr>\
					<tr>\
						<th><label>Size</label></th>\
						<td>\
							<select fieldname="size">\
								<option value="small">Small</option>\
								<option value="medium" selected="selected">Medium</option>\
								<option value="large">Large</option>\
								<option value="fullwidth">Full Width</option>\
							</select>\
						</td>\
					</tr>\
					<tr>\
						<th><label>Edge</label></th>\
						<td>\
							<select fieldname="edge">\
								<option value="straight">Straight</option>\
								<option value="rounded">Rounded</option>\
							</select>\
						</td>\
					</tr>\
					<tr>\
						<th><label>Link to open in</label></th>\
						<td>\
							<select fieldname="target">\
								<option value="_self">Current Tab/Window</option>\
								<option value="_blank">New Tab/Window</option>\
							</select>\
						</td>\
					</tr>\
				</table>\
				</div>\
			</div><!-- end tab -->\
<!-- SOCIAL ICONS -->\
			<div class="sm-shortcodes-form-tab" id="sm-shortcodes-form-tab_social">\
				<h2>Add Social Links</h2>\
				<div class="sm-shortcodes-form-fields">\
				<table cellpadding="0" cellspacing="0">\
					<tr>\
						<th><label>Social Link 1</label></th>\
						<td>'+social_icons+'\
							<input type="text" value="" fieldname="service" style="display:none" />\
							<input type="text" placeholder="http://www.yourlink.com" value="" class="sm-shortcodes-social-link-field" fieldname="link" />\
						</td>\
					</tr>\
					<tr>\
						<th><label>Social Link 2</label></th>\
						<td>'+social_icons+'\
							<input type="text" value="" fieldname="service" style="display:none" />\
							<input type="text" placeholder="http://www.yourlink.com" value="" class="sm-shortcodes-social-link-field" fieldname="link" />\
						</td>\
					</tr>\
					<tr>\
						<th><label>Social Link 3</label></th>\
						<td>'+social_icons+'\
							<input type="text" value="" fieldname="service" style="display:none" />\
							<input type="text" placeholder="http://www.yourlink.com" value="" class="sm-shortcodes-social-link-field" fieldname="link" />\
						</td>\
					</tr>\
					<tr>\
						<th><label>Social Link 4</label></th>\
						<td>'+social_icons+'\
							<input type="text" value="" fieldname="service" style="display:none" />\
							<input type="text" placeholder="http://www.yourlink.com" value="" class="sm-shortcodes-social-link-field" fieldname="link" />\
						</td>\
					</tr>\
					<tr>\
						<th><label>Social Link 5</label></th>\
						<td>'+social_icons+'\
							<input type="text" value="" fieldname="service" style="display:none" />\
							<input type="text" placeholder="http://www.yourlink.com" value="" class="sm-shortcodes-social-link-field" fieldname="link" />\
						</td>\
					</tr>\
					<tr>\
						<th><label>Social Link 6</label></th>\
						<td>'+social_icons+'\
							<input type="text" value="" fieldname="service" style="display:none" />\
							<input type="text" placeholder="http://www.yourlink.com" value="" class="sm-shortcodes-social-link-field" fieldname="link" />\
						</td>\
					</tr>\
					<tr>\
						<th><label>Social Link 7</label></th>\
						<td>'+social_icons+'\
							<input type="text" value="" fieldname="service" style="display:none" />\
							<input type="text" placeholder="http://www.yourlink.com" value="" class="sm-shortcodes-social-link-field" fieldname="link" />\
						</td>\
					</tr>\
					<tr>\
						<th><label>Social Link 8</label></th>\
						<td>'+social_icons+'\
							<input type="text" value="" fieldname="service" style="display:none" />\
							<input type="text" placeholder="http://www.yourlink.com" value="" class="sm-shortcodes-social-link-field" fieldname="link" />\
						</td>\
					</tr>\
					<tr>\
						<th><label>Social Link 9</label></th>\
						<td>'+social_icons+'\
							<input type="text" value="" fieldname="service" style="display:none" />\
							<input type="text" placeholder="http://www.yourlink.com" value="" class="sm-shortcodes-social-link-field" fieldname="link" />\
						</td>\
					</tr>\
					<tr>\
						<th><label>Social Link 10</label></th>\
						<td>'+social_icons+'\
							<input type="text" value="" fieldname="service" style="display:none" />\
							<input type="text" placeholder="http://www.yourlink.com" value="" class="sm-shortcodes-social-link-field" fieldname="link" />\
						</td>\
					</tr>\
				</table>\
				</div>\
			</div><!-- end tab -->\
<!-- COLUMNS -->\
			<div class="sm-shortcodes-form-tab" id="sm-shortcodes-form-tab_columns">\
				<h2>Add Columns</h2>\
				<div class="sm-shortcodes-form-fields">\
				<table cellpadding="0" cellspacing="0">\
					<tr>\
						<td colspan="2">\
							<div class="column-structures">\
							<label>Choose a column structure</label>\
<a href="#" class="active" split="50|50"><span style="width:50%"><i>&frac12;</i></span><span style="width:50%"><i>&frac12;</i></span></a>\
<div class="clearfix"></div>\
<a href="#" split="33|33|33"><span style="width:33%"><i>&frac13;</i></span><span style="width:33%"><i>&frac13;</i></span><span style="width:33%"><i>&frac13;</i></span></a>\
<a href="#" split="67|33"><span style="width:67%"><i>&frac23;</i></span><span style="width:33%"><i>&frac13;</i></span></a>\
<a href="#" split="33|67"><span style="width:33%"><i>&frac13;</i></span><span style="width:67%"><i>&frac23;</i></span></a>\
<div class="clearfix"></div>\
<a href="#" split="25|25|25|25"><span style="width:25%"><i>&frac14;</i></span><span style="width:25%"><i>&frac14;</i></span><span style="width:25%"><i>&frac14;</i></span><span style="width:25%"><i>&frac14;</i></span></a>\
<a href="#" split="50|25|25"><span style="width:50%"><i>&frac12;</i></span><span style="width:25%"><i>&frac14;</i></span><span style="width:25%"><i>&frac14;</i></span></a>\
<a href="#" split="25|25|50"><span style="width:25%"><i>&frac14;</i></span><span style="width:25%"><i>&frac14;</i></span><span style="width:50%"><i>&frac12;</i></span></a>\
<a href="#" split="25|50|25"><span style="width:25%"><i>&frac14;</i></span><span style="width:50%"><i>&frac12;</i></span><span style="width:25%"><i>&frac14;</i></span></a>\
							<input style="display:none" type="text" fieldname="structure" value="50|50" />\
							</div>\
						</td>\
					</tr>\
					<tr>\
						<th><label>Column 1</label></th>\
						<td><textarea fieldname="col"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Column 2</label></th>\
						<td><textarea fieldname="col"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Column 3</label></th>\
						<td><textarea fieldname="col" disabled="disabled"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Column 4</label></th>\
						<td><textarea fieldname="col" disabled="disabled"></textarea></td>\
					</tr>\
				</table>\
				</div>\
			</div><!-- end tab -->\
<!-- MEDIA -->\
			<div class="sm-shortcodes-form-tab" id="sm-shortcodes-form-tab_media">\
				<h2>Add Media</h2>\
				<div class="sm-shortcodes-form-fields">\
				<table cellpadding="0" cellspacing="0">\
					<tr>\
						<th><label>Type</label></th>\
						<td>\
							<select fieldname="type">\
								<option value="youtube">YouTube</option>\
								<option value="vimeo">Vimeo</option>\
							</select>\
						</td>\
					</tr>\
					<tr>\
						<th><label>URL or ID</label></th>\
						<td><input type="text" value="" fieldname="url" /></td>\
					</tr>\
					<tr>\
						<th><label>Width</label></th>\
						<td><input type="text" value="100%" fieldname="width" /></td>\
					</tr>\
					<tr>\
						<th><label>Height</label></th>\
						<td><input type="text" value="400" fieldname="height" /></td>\
					</tr>\
				</table>\
				</div>\
			</div><!-- end tab -->\
<!-- BLOCKQUOTE -->\
			<div class="sm-shortcodes-form-tab" id="sm-shortcodes-form-tab_blockquote">\
				<h2>Add Blockquote</h2>\
				<div class="sm-shortcodes-form-fields">\
				<table cellpadding="0" cellspacing="0">\
					<tr>\
						<th><label>Quote</label></th>\
						<td><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Cited By</label></th>\
						<td><input type="text" value="" fieldname="cited" /></td>\
					</tr>\
					<tr>\
						<th><label>Position</label></th>\
						<td>\
							<select fieldname="type">\
								<option value="left">Left</option>\
								<option value="right">Right</option>\
								<option value="center">Center</option>\
							</select>\
						</td>\
					</tr>\
				</table>\
				</div>\
			</div><!-- end tab -->\
<!-- PROGRESSBARS -->\
			<div class="sm-shortcodes-form-tab" id="sm-shortcodes-form-tab_progressbars">\
				<h2>Add Progress Bars</h2>\
				<div class="sm-shortcodes-form-fields">\
				<table cellpadding="0" cellspacing="0">\
					<tr>\
						<th><label>Heading</label></th>\
						<td><input type="text" value="" fieldname="heading" /></td>\
					</tr>\
					<tr>\
						<th><label>Percentage</label></th>\
						<td><input type="text" value="50%" fieldname="percentage" /></td>\
					</tr>\
					<tr>\
						<th><label>Colour</label></th>\
						<td>\
						    <input type="text" class="sm-shortcodes-button_colour_custom" fieldname="colour_custom" value="" />\
						</td>\
					</tr>\
				</table>\
				</div>\
			</div><!-- end tab -->\
<!-- PROMPT -->\
			<div class="sm-shortcodes-form-tab" id="sm-shortcodes-form-tab_prompt">\
				<h2>Add Prompt</h2>\
				<div class="sm-shortcodes-form-fields">\
				<table cellpadding="0" cellspacing="0">\
					<tr>\
						<th><label>Title</label></th>\
						<td><input type="text" value="" fieldname="title" /></td>\
					</tr>\
					<tr>\
						<th><label>Message</label></th>\
						<td><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Position</label></th>\
						<td>\
							<select fieldname="type">\
								<option value="left">Left</option>\
								<option value="right">Right</option>\
							</select>\
						</td>\
					</tr>\
					<tr>\
						<th><label>Url</label></th>\
						<td><input type="text" placeholder="http://www.yourlink.com" value="" fieldname="url" /></td>\
					</tr>\
					<tr>\
						<th><label>Button Text</label></th>\
						<td><input type="text" value="" fieldname="text" /></td>\
					</tr>\
					<tr>\
						<th><label>Text Colour</label></th>\
						<td>\
						    <input type="text" class="sm-shortcodes-button_colour_custom" fieldname="colour_text" value="" />\
						</td>\
					</tr>\
					<tr>\
						<th><label>Background Colour</label></th>\
						<td>\
						    <input type="text" class="sm-shortcodes-button_colour_custom" fieldname="colour_custom" value="" />\
						</td>\
					</tr>\
				</table>\
				</div>\
			</div><!-- end tab -->\
<!-- TOGGLE -->\
			<div class="sm-shortcodes-form-tab" id="sm-shortcodes-form-tab_toggle">\
				<h2>Add Toggle</h2>\
				<div class="sm-shortcodes-form-fields">\
				<table cellpadding="0" cellspacing="0">\
					<tr>\
						<th><label>Icon</label></th>\
						<td>\
<a href="#" class="button sm-shortcodes-toggle-icon-list">Choose an icon</a>\
<i class="current-icon fa-icon-"></i>\
<div class="sm-shortcodes-icon-list-holder" style="display:none">\
<p style="margin-bottom:0px">Icons by <a href="http://fortawesome.github.com/Font-Awesome/" target="_blank">Font Awesome</a></p>'+fa_icons+'</div>\
						<input type="text" style="display:none" value="" fieldname="icon" />\
						</td>\
					</tr>\
					<tr>\
						<th><label>Heading</label></th>\
						<td><input type="text" value="" fieldname="heading" /></td>\
					</tr>\
					<tr>\
						<th><label>Text</label></th>\
						<td><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>On page load...</label></th>\
						<td>\
							<select fieldname="onload">\
								<option value="closed">Show Closed</option>\
								<option value="open">Show Open</option>\
							</select>\
						</td>\
					</tr>\
				</table>\
				</div>\
			</div><!-- end tab -->\
<!-- CODE -->\
			<div class="sm-shortcodes-form-tab" id="sm-shortcodes-form-tab_code">\
				<h2>Add Code</h2>\
				<div class="sm-shortcodes-form-fields">\
				<table cellpadding="0" cellspacing="0">\
					<tr>\
						<th><label>Icon</label></th>\
						<td>\
<a href="#" class="button sm-shortcodes-toggle-icon-list">Choose an icon</a>\
<i class="current-icon fa-icon-"></i>\
<div class="sm-shortcodes-icon-list-holder" style="display:none">\
<p style="margin-bottom:0px">Icons by <a href="http://fortawesome.github.com/Font-Awesome/" target="_blank">Font Awesome</a></p>'+fa_icons+'</div>\
						<input type="text" style="display:none" value="" fieldname="icon" />\
						</td>\
					</tr>\
					<tr>\
						<th><label>Code</label></th>\
						<td><textarea fieldname="text"></textarea></td>\
					</tr>\
				</table>\
				</div>\
			</div><!-- end tab -->\
<!-- ACCORDION -->\
			<div class="sm-shortcodes-form-tab" id="sm-shortcodes-form-tab_accordion">\
				<h2>Add Accordion</h2>\
				<div class="sm-shortcodes-form-fields">\
				<table cellpadding="0" cellspacing="0">\
					<tr>\
						<th><label>Toggle 1</label></th>\
						<td><label>Icon</label>\
<a href="#" class="button sm-shortcodes-toggle-icon-list">Choose an icon</a>\
<i class="current-icon fa-icon-"></i>\
<div class="sm-shortcodes-icon-list-holder" style="display:none">\
<p style="margin-bottom:0px">Icons by <a href="http://fortawesome.github.com/Font-Awesome/" target="_blank">Font Awesome</a></p>'+fa_icons+'</div>\
						<input type="text" style="display:none" value="" fieldname="icon" />\
						<label>Title</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea>\
						<label>On page load...</label><select fieldname="onload">\
							<option value="closed">Show Closed</option>\
							<option value="open">Show Open</option>\
						</select></td>\
					</tr>\
					<tr>\
						<th><label>Toggle 2</label></th>\
						<td><label>Icon</label>\
<a href="#" class="button sm-shortcodes-toggle-icon-list">Choose an icon</a>\
<i class="current-icon fa-icon-"></i>\
<div class="sm-shortcodes-icon-list-holder" style="display:none">\
<p style="margin-bottom:0px">Icons by <a href="http://fortawesome.github.com/Font-Awesome/" target="_blank">Font Awesome</a></p>'+fa_icons+'</div>\
						<input type="text" style="display:none" value="" fieldname="icon" />\
						<label>Title</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea>\
						<label>On page load...</label><select fieldname="onload">\
							<option value="closed">Show Closed</option>\
							<option value="open">Show Open</option>\
						</select></td>\
					</tr>\
					<tr>\
						<th><label>Toggle 3</label></th>\
						<td><label>Icon</label>\
<a href="#" class="button sm-shortcodes-toggle-icon-list">Choose an icon</a>\
<i class="current-icon fa-icon-"></i>\
<div class="sm-shortcodes-icon-list-holder" style="display:none">\
<p style="margin-bottom:0px">Icons by <a href="http://fortawesome.github.com/Font-Awesome/" target="_blank">Font Awesome</a></p>'+fa_icons+'</div>\
						<input type="text" style="display:none" value="" fieldname="icon" />\
						<label>Title</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea>\
						<label>On page load...</label><select fieldname="onload">\
							<option value="closed">Show Closed</option>\
							<option value="open">Show Open</option>\
						</select></td>\
					</tr>\
					<tr>\
						<th><label>Toggle 4</label></th>\
						<td><label>Icon</label>\
<a href="#" class="button sm-shortcodes-toggle-icon-list">Choose an icon</a>\
<i class="current-icon fa-icon-"></i>\
<div class="sm-shortcodes-icon-list-holder" style="display:none">\
<p style="margin-bottom:0px">Icons by <a href="http://fortawesome.github.com/Font-Awesome/" target="_blank">Font Awesome</a></p>'+fa_icons+'</div>\
						<input type="text" style="display:none" value="" fieldname="icon" />\
						<label>Title</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea>\
						<label>On page load...</label><select fieldname="onload">\
							<option value="closed">Show Closed</option>\
							<option value="open">Show Open</option>\
						</select></td>\
					</tr>\
					<tr>\
						<th><label>Toggle 5</label></th>\
						<td><label>Icon</label>\
<a href="#" class="button sm-shortcodes-toggle-icon-list">Choose an icon</a>\
<i class="current-icon fa-icon-"></i>\
<div class="sm-shortcodes-icon-list-holder" style="display:none">\
<p style="margin-bottom:0px">Icons by <a href="http://fortawesome.github.com/Font-Awesome/" target="_blank">Font Awesome</a></p>'+fa_icons+'</div>\
						<input type="text" style="display:none" value="" fieldname="icon" />\
						<label>Title</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea>\
						<label>On page load...</label><select fieldname="onload">\
							<option value="closed">Show Closed</option>\
							<option value="open">Show Open</option>\
						</select></td>\
					</tr>\
					<tr>\
						<th><label>Toggle 6</label></th>\
						<td><label>Icon</label>\
<a href="#" class="button sm-shortcodes-toggle-icon-list">Choose an icon</a>\
<i class="current-icon fa-icon-"></i>\
<div class="sm-shortcodes-icon-list-holder" style="display:none">\
<p style="margin-bottom:0px">Icons by <a href="http://fortawesome.github.com/Font-Awesome/" target="_blank">Font Awesome</a></p>'+fa_icons+'</div>\
						<input type="text" style="display:none" value="" fieldname="icon" />\
						<label>Title</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea>\
						<label>On page load...</label><select fieldname="onload">\
							<option value="closed">Show Closed</option>\
							<option value="open">Show Open</option>\
						</select></td>\
					</tr>\
					<tr>\
						<th><label>Toggle 7</label></th>\
						<td><label>Icon</label>\
<a href="#" class="button sm-shortcodes-toggle-icon-list">Choose an icon</a>\
<i class="current-icon fa-icon-"></i>\
<div class="sm-shortcodes-icon-list-holder" style="display:none">\
<p style="margin-bottom:0px">Icons by <a href="http://fortawesome.github.com/Font-Awesome/" target="_blank">Font Awesome</a></p>'+fa_icons+'</div>\
						<input type="text" style="display:none" value="" fieldname="icon" />\
						<label>Title</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea>\
						<label>On page load...</label><select fieldname="onload">\
							<option value="closed">Show Closed</option>\
							<option value="open">Show Open</option>\
						</select></td>\
					</tr>\
					<tr>\
						<th><label>Toggle 8</label></th>\
						<td><label>Icon</label>\
<a href="#" class="button sm-shortcodes-toggle-icon-list">Choose an icon</a>\
<i class="current-icon fa-icon-"></i>\
<div class="sm-shortcodes-icon-list-holder" style="display:none">\
<p style="margin-bottom:0px">Icons by <a href="http://fortawesome.github.com/Font-Awesome/" target="_blank">Font Awesome</a></p>'+fa_icons+'</div>\
						<input type="text" style="display:none" value="" fieldname="icon" />\
						<label>Title</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea>\
						<label>On page load...</label><select fieldname="onload">\
							<option value="closed">Show Closed</option>\
							<option value="open">Show Open</option>\
						</select></td>\
					</tr>\
					<tr>\
						<th><label>Toggle 9</label></th>\
						<td><label>Icon</label>\
<a href="#" class="button sm-shortcodes-toggle-icon-list">Choose an icon</a>\
<i class="current-icon fa-icon-"></i>\
<div class="sm-shortcodes-icon-list-holder" style="display:none">\
<p style="margin-bottom:0px">Icons by <a href="http://fortawesome.github.com/Font-Awesome/" target="_blank">Font Awesome</a></p>'+fa_icons+'</div>\
						<input type="text" style="display:none" value="" fieldname="icon" />\
						<label>Title</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea>\
						<label>On page load...</label><select fieldname="onload">\
							<option value="closed">Show Closed</option>\
							<option value="open">Show Open</option>\
						</select></td>\
					</tr>\
					<tr>\
						<th><label>Toggle 10</label></th>\
						<td><label>Icon</label>\
<a href="#" class="button sm-shortcodes-toggle-icon-list">Choose an icon</a>\
<i class="current-icon fa-icon-"></i>\
<div class="sm-shortcodes-icon-list-holder" style="display:none">\
<p style="margin-bottom:0px">Icons by <a href="http://fortawesome.github.com/Font-Awesome/" target="_blank">Font Awesome</a></p>'+fa_icons+'</div>\
						<input type="text" style="display:none" value="" fieldname="icon" />\
						<label>Title</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea>\
						<label>On page load...</label><select fieldname="onload">\
							<option value="closed">Show Closed</option>\
							<option value="open">Show Open</option>\
						</select></td>\
					</tr>\
				</table>\
				</div>\
			</div><!-- end tab -->\
<!-- ALERTBOX -->\
			<div class="sm-shortcodes-form-tab" id="sm-shortcodes-form-tab_alertbox">\
				<h2>Add an Alert Box</h2>\
				<div class="sm-shortcodes-form-fields">\
				<table cellpadding="0" cellspacing="0">\
					<tr>\
						<th><label>Icon</label></th>\
						<td>\
<a href="#" class="button sm-shortcodes-toggle-icon-list">Choose an icon</a>\
<i class="current-icon fa-icon-"></i>\
<div class="sm-shortcodes-icon-list-holder" style="display:none">\
<p style="margin-bottom:0px">Icons by <a href="http://fortawesome.github.com/Font-Awesome/" target="_blank">Font Awesome</a></p>' + fa_icons + '</div>\
						<input type="text" style="display:none" value="" fieldname="icon" />\
						</td>\
					</tr>\
					<tr>\
					    <th><label>Text Color</label></th>\
					    <td>\
						<input type="text" class="sm-shortcodes-button_colour_custom" fieldname="colour_text" value="" />\
					    </td>\
					</tr>\
					<tr>\
					    <th><label>Background Color</label></th>\
					    <td>\
						<input type="text" class="sm-shortcodes-button_colour_custom" fieldname="colour_custom" value="" />\
					    </td>\
					</tr>\
					<tr>\
						<th><label>Alert Text</label></th>\
						<td><textarea fieldname="text"></textarea></td>\
					</tr>\
				</table>\
				</div>\
			</div><!-- end tab -->\
<!-- TABS -->\
			<div class="sm-shortcodes-form-tab" id="sm-shortcodes-form-tab_tabs">\
				<h2>Add Tabs</h2>\
				<div class="sm-shortcodes-form-fields">\
				<table cellpadding="0" cellspacing="0">\
					<tr>\
						<th><label>Tab 1</label></th>\
						<td><label>Title</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Tab 2</label></th>\
						<td><label>Title</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Tab 3</label></th>\
						<td><label>Title</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Tab 4</label></th>\
						<td><label>Title</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Tab 5</label></th>\
						<td><label>Title</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Tab 6</label></th>\
						<td><label>Title</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Tab 7</label></th>\
						<td><label>Title</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Tab 8</label></th>\
						<td><label>Title</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Tab 9</label></th>\
						<td><label>Title</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Tab 10</label></th>\
						<td><label>Title</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea></td>\
					</tr>\
				</table>\
				</div>\
			</div><!-- end tab -->\
<!-- MAP -->\
			<div class="sm-shortcodes-form-tab" id="sm-shortcodes-form-tab_map">\
				<h2>Add Google Map</h2>\
				<p>Visit <a href="http://www.maps.google.com">www.maps.google.com</a>, copy only the embed sorce code of your location and paste in the field below.</p>\
				<div class="sm-shortcodes-form-fields">\
				<table cellpadding="0" cellspacing="0">\
					<tr>\
						<th><label>Source Url</label></th>\
						<td><input type="text" placeholder="Enter Source url Only" fieldname="src" /></td>\
					</tr>\
				</table>\
				</div>\
			</div><!-- end tab -->\
\
		</div></div>\
		<div class="sm-shortcodes-submit">\
			<input style="display:none" id="sm-shortcodes-form-type" value="button" />\
			<textarea style="display:none" id="sm-shortcodes-form-code-to-add"></textarea>\
			<input type="button" id="sm_shortcodes-submit" class="button-primary" value="Insert Shortcode" name="submit" />\
		</div>\
	</div></div>');
		
		form.appendTo('body').hide();
		
		/* Change tab */
		var sm_shortcode_type = "button";
		var sm_shortcode_code = "";
		form.find('.sm-shortcodes-form-types ul li a').click(function(){
			sm_shortcode_type = jQuery(this).parent('li').attr('type');
			jQuery('input#sm-shortcodes-form-type').val(sm_shortcode_type);
			jQuery('.sm-shortcodes-form-tab').hide();
			jQuery('#sm-shortcodes-form-tab_'+sm_shortcode_type).show();
			jQuery('.sm-shortcodes-form-types .active').removeClass('active');
			jQuery(this).parent('li').addClass('active');
			jQuery('.sm-shortcodes-form .sm-shortcodes-form-types').css({"height":jQuery('.sm-shortcodes-form-tabs').outerHeight()});
			return false;
		});
		
		/* Choose icon */
		jQuery('.sm-shortcodes-toggle-icon-list').click(function() {
			jQuery(this).parent('td').find('.sm-shortcodes-icon-list-holder').fadeToggle();
			return false;
		});
		jQuery('.sm-shortcodes-icon-list li a').click(function() {
			jQuery(this).parentsUntil('td').parent('td').find('input[type="text"]:first').val(jQuery(this).find('span').text());
			jQuery('.sm-shortcodes-icon-list-holder').hide();
			jQuery(this).parentsUntil('td').parent('td').find('.current-icon').attr({'class':'current-icon fa-icon- fa-icon-'+jQuery(this).find('span').text()});
			
			var icon_to_add = jQuery(this).find('span').text();
			if(icon_to_add.search('sm-social-icon') > -1) {
				jQuery(this).parentsUntil('td').parent('td').find('.current-social-icon').attr({'class':'current-social-icon sm-social-icon- '+jQuery(this).find('span').text()});
				jQuery(this).parentsUntil('td').parent('td').find('.social-icon').hide();
				jQuery(this).parentsUntil('td').parent('td').find('.current-social-icon').show();
			} else {
				jQuery(this).parentsUntil('td').parent('td').find('.social-icon').html('<img src="../wp-content/plugins/sm-Click2Shortcode/images/social-icons/'+jQuery(this).find('span').text()+'.png" alt="" />');
				jQuery(this).parentsUntil('td').parent('td').find('.social-icon').show();
				jQuery(this).parentsUntil('td').parent('td').find('.current-social-icon').hide();
			}
			return false;
		});
	
		/* Colour Picker */
		if(jQuery('.sm-shortcodes-button_colour_custom').size() > 0) {
			jQuery('.sm-shortcodes-button_colour_custom').wpColorPicker();
		}
		
		/* Choose Column Structure */
		var num_of_columns = 2;
		jQuery('.column-structures a').click(function() {
			jQuery('.column-structures a').removeClass('active');
			jQuery(this).addClass('active');
			jQuery('.column-structures input').val(jQuery(this).attr('split'));
			num_of_columns = jQuery(this).attr('split');
			num_of_columns = num_of_columns.split('|');
			num_of_columns = num_of_columns.length;
			
			jQuery('#sm-shortcodes-form-tab_columns textarea').attr({'disabled':'disabled'});
			var i = -1;
			while(i < (num_of_columns - 1)) {
				i++;
				jQuery('#sm-shortcodes-form-tab_columns textarea').eq(i).removeAttr('disabled');
			}
			
			return false;
		});
		
		/* On submit click */
		form.find('#sm_shortcodes-submit').click(function(){
		
			/* Create shortcode */
			sm_shortcode_code = '';
			
			if(sm_shortcode_type == "social") {
				
				/* Social shortcode */
			
				sm_shortcode_code = sm_shortcode_code + '[sm_' + sm_shortcode_type + ']';
				
					jQuery('#sm-shortcodes-form-tab_' + sm_shortcode_type + ' td').each(function() {
						if(jQuery(this).find('input:first').val() == "" || jQuery(this).find('input:first').val() == undefined) { } else {
						
							sm_shortcode_code = sm_shortcode_code + '[sm_social_link service="';
							sm_shortcode_code = sm_shortcode_code + jQuery(this).find('input').eq(0).val();
							sm_shortcode_code = sm_shortcode_code + '" link="';
							sm_shortcode_code = sm_shortcode_code + jQuery(this).find('input').eq(1).val();
							sm_shortcode_code = sm_shortcode_code + '"] ';
							
						}
					});
				
				sm_shortcode_code = sm_shortcode_code + '[/sm_' + sm_shortcode_type + ']';
			
			} else if(sm_shortcode_type == "columns") {
				
				/* Columns shortcode */
			
				sm_shortcode_code = sm_shortcode_code + '[sm_' + sm_shortcode_type + ' ';
				
				jQuery('#sm-shortcodes-form-tab_' + sm_shortcode_type + ' input, #sm-shortcodes-form-tab_' + sm_shortcode_type + ' select').each(function() {
					
					if(jQuery(this).attr('fieldname') != "" || jQuery(this).attr('fieldname') != undefined) {
						sm_shortcode_code = sm_shortcode_code + ' ' + jQuery(this).attr('fieldname') + '="' + jQuery(this).val() + '"';
					}
					
				});
				sm_shortcode_code = sm_shortcode_code + ']';
				
					/* the actual cols */
					var col_counter = 0;
					var col_class = 'a';
					jQuery('#sm-shortcodes-form-tab_' + sm_shortcode_type + ' textarea').each(function() {
					
						if(jQuery(this).attr('disabled') == "disabled") { } else {
							
							col_counter++;
							if(col_counter == 1) { col_class = "a"; }
							if(col_counter == 2) { col_class = "b"; }
							if(col_counter == 3) { col_class = "c"; }
							if(col_counter == 4) { col_class = "d"; }
							sm_shortcode_code = sm_shortcode_code + '[sm_col position="'+col_class+'"]' + jQuery(this).val() + '[/sm_col]';
							
						}
					
					});
				
				
				sm_shortcode_code = sm_shortcode_code + '[/sm_' + sm_shortcode_type + ']';
				
				
			} else if(sm_shortcode_type == "tabs") {
				
				/* Tabs shortcode */
			
				sm_shortcode_code = sm_shortcode_code + '[sm_' + sm_shortcode_type + ']';
				
					/* the actual tabs */
					jQuery('#sm-shortcodes-form-tab_' + sm_shortcode_type + ' input').each(function() {
					
						if(jQuery(this).val() != "") { 
													
							sm_shortcode_code = sm_shortcode_code + '[sm_tab label="' + jQuery(this).val() + '"]' + jQuery(this).parent('td').find('textarea').val() + '[/sm_tab]';
							
						}
					
					});
				
				
				sm_shortcode_code = sm_shortcode_code + '[/sm_' + sm_shortcode_type + ']';
				
				
			} else if(sm_shortcode_type == "accordion") {
				
				/* Accordion shortcode */
			
				sm_shortcode_code = sm_shortcode_code + '[sm_' + sm_shortcode_type + ']';
				
					/* the actual toggle */
					jQuery('#sm-shortcodes-form-tab_' + sm_shortcode_type + ' tr').each(function() {
					
						if(jQuery(this).find('textarea').val() != "") { 
													
							sm_shortcode_code = sm_shortcode_code + '[sm_toggle accordion="1" icon="' + jQuery(this).find('input').eq(0).val() + '" heading="' + jQuery(this).find('input').eq(1).val() + '" onload="' + jQuery(this).find('select').val() + '" text="' + jQuery(this).find('textarea').val() + '"]';
							
						}
					
					});
				
				
				sm_shortcode_code = sm_shortcode_code + '[/sm_' + sm_shortcode_type + ']';
				
				
			} else if (sm_shortcode_type == "alertbox") {
			    
			    /* Alert Box Shortcode */

			    jQuery('#sm-shortcodes-form-tab_' + sm_shortcode_type).each(function () {

			    sm_shortcode_code = sm_shortcode_code + '[sm_alertbox icon="' + jQuery(this).find('input').eq(0).val() + '" colour_text="' + jQuery(this).find('input').eq(1).val() + '" colour_custom="' + jQuery(this).find("input[fieldname='colour_custom']").val() + '"]' + jQuery(this).find('textarea').val() + '[/sm_alertbox]';

			 });
	    
			} else if (sm_shortcode_type == "code"){
			    
			    /* Code shortcode */
			    
			    jQuery('#sm-shortcodes-form-tab_' + sm_shortcode_type).each(function (){
			    
			    sm_shortcode_code = sm_shortcode_code + '[sm_code type="code" icon="' + jQuery(this).find('input').eq(0).val() + '"]' + jQuery(this).find('textarea').val() + '[/sm_code]';
				
			    });
			
			} else if (sm_shortcode_type == "blockquote"){
			    
			    /* Blockquote shortcode */
			    
			    jQuery('#sm-shortcodes-form-tab_' + sm_shortcode_type).each(function (){
			    
			    sm_shortcode_code = sm_shortcode_code + '[sm_blockquotes type="' + jQuery(this).find('select').val() + '" cite="' + jQuery(this).find('input').eq(0).val() + '" ]' + jQuery(this).find('textarea').val() + '[/sm_blockquotes]';
				
			    });
			
			} else if (sm_shortcode_type == "progressbars"){
			    
			    /* Progress Bar shortcode */
			    
			    jQuery('#sm-shortcodes-form-tab_' + sm_shortcode_type).each(function (){
			    
			    sm_shortcode_code = sm_shortcode_code + '[sm_progress_bar id="progress_bar" heading="' + jQuery(this).find('input').eq(0).val() + '" percentage="' + jQuery(this).find('input').eq(1).val() + '" colour_custom="background-color:' + jQuery(this).find('input').eq(2).val() + '"]';
				
			    });
			
			} else if (sm_shortcode_type == "prompt"){
			    
			    /* Prompt shortcode */
			    
			    jQuery('#sm-shortcodes-form-tab_' + sm_shortcode_type).each(function (){
			    
			    sm_shortcode_code = sm_shortcode_code + '[sm_prompt id="prompt" title="' + jQuery(this).find('input').eq(0).val() + '" message="' + jQuery(this).find('textarea').val() + '" type="' + jQuery(this).find('select').eq(0).val() + '" colour_text="color:' + jQuery(this).find('input').eq(3).val() + '" colour_custom="background-color:' + jQuery(this).find("input[fieldname='colour_custom']").val() + '" url="'+ jQuery(this).find('input').eq(1).val() +'" button_text="'+ jQuery(this).find('input').eq(2).val() +'"]';
				
			    });
			
			}
			else if (sm_shortcode_type == "map"){
			    
			    /* Map shortcode */
			    
			    jQuery('#sm-shortcodes-form-tab_' + sm_shortcode_type).each(function (){
			    
			    sm_shortcode_code = sm_shortcode_code + '[sm_map id="map" src="' + jQuery(this).find('input').eq(0).val() + '"]';
				
			    });
			
			}else {
				
				/* Default shortcodes */
			
				sm_shortcode_code = sm_shortcode_code + '[sm_' + sm_shortcode_type + ' ';
				
				jQuery('#sm-shortcodes-form-tab_' + sm_shortcode_type + ' input, #sm-shortcodes-form-tab_' + sm_shortcode_type + ' select, #sm-shortcodes-form-tab_' + sm_shortcode_type + ' textarea').each(function() {
					
					if(jQuery(this).attr('fieldname') != "" && jQuery(this).attr('fieldname') != undefined) {
						sm_shortcode_code = sm_shortcode_code + ' ' + jQuery(this).attr('fieldname') + '="' + jQuery(this).val() + '"';
					}
					
				});
				sm_shortcode_code = sm_shortcode_code + ']';
				
			}
				
			/* Insert shortcode */
			tinyMCE.activeEditor.execCommand('mceInsertContent', 0, sm_shortcode_code);
			tb_remove();
			
			return false;
			
		});
	});
})()