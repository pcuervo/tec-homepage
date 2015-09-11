(function ( $ ) {

	$.fn.seccion_home = function( options ) {

		var settings = $.extend({
		}, options);

		// variables

		var $this = this;
		var nosotros = $this.find('.js-seccion-nosotros');

		var min_w = 300; // minimum video width allowed
		var vid_w_orig;  // original video dimensions
		var vid_h_orig;
		vid_w_orig = parseInt( $('.bg-video').innerWidth() );
		vid_h_orig = parseInt( $('.bg-video').innerHeight() );

		$(window).resize(function () { resizeToCover(min_w, vid_w_orig, vid_h_orig); });

		return this;

	};

	// set video to cover
	function resizeToCover( min_w, vid_w_orig, vid_h_orig ) {

		// set the video viewport to the window size
		$('.bg-video').width($(window).width());
		$('.bg-video').height($(window).height());

		// use largest scale factor of horizontal/vertical
		var scale_h = $(window).width() / vid_w_orig;
		var scale_v = $(window).height() / vid_h_orig;
		var scale = scale_h > scale_v ? scale_h : scale_v;

		// don't allow scaled width < minimum video width
		if (scale * vid_w_orig < min_w) {scale = min_w / vid_w_orig;};

		// now scale the video
		$('video').width(scale * vid_w_orig);
		$('video').height(scale * vid_h_orig);
		// and center it by scrolling the video viewport
		$('#video-viewport').scrollLeft(($('video').width() - $(window).width()) / 2);
		$('#video-viewport').scrollTop(($('video').height() - $(window).height()) / 2);
	};



}(jQuery));