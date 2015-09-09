(function ( $ ) {

	$.fn.seccion_home = function( options ) {

		var settings = $.extend({
		}, options);

		// variables

		var $this = this;
		var $video = settings.video;
		var $diferenciadores = $this.find('.diferenciadores');
		var w = settings.w;
		var h = settings.h;
		var loop = settings.loop;
		var bienvenidaButton = $this.find('.bienvenida-button');
		var bienvenidaContainer = $this.find('.bienvenida-container');
		var bienvenidaCloser = $this.find('.js-bienvenida-container-closer');
		var nosotros = $this.find('.js-seccion-nosotros');

		// set video

		$video.css({'position':'absolute', 'top':'0', 'left':'0'});
		$video[0].volume = 0;
		$video[0].oncanplaythrough = function() {
			this.play();
		}
		$video[0].onended = function() {
			if (loop) {
				this.play();
			}
		}

		// set video resize

		function resizeVideo()
		{

			xwidth = $(window).width();
			yheight = $(window).height();

			var rp = w / h;
			var reg = xwidth / yheight;

			if(reg >= rp)
			{
				w = xwidth;
				h = Math.round(xwidth / rp);
				posX = (w - $(window).width()) / 2;
				posY = (h - $(window).height()) / 2;
				$video.css('height', h + 'px');
				$video.css('width', w + 'px');
				$video.css({'margin-left' : -posX + 'px', 'margin-top' : -posY + 'px'});
			}
			else
			{
				w = Math.round(yheight * rp);
				h = yheight;
				posX = (w - $(window).width()) / 2;
				posY = (h - $(window).height()) / 2;
				$video.css('height', h + 'px');
				$video.css('width', w + 'px');
				$video.css({'margin-left' : -posX + 'px', 'margin-top' : -posY + 'px'});
			}
		}

		$(window).resize(function(){
			resizeVideo();
		}).trigger('resize');

		// animation diferenciadores

		$diferenciadores.delay(10000).animate({'bottom':'0px'}, 1000, 'easeOutQuint');

		//

		bienvenidaButton.on( 'click', function(event){

			event.preventDefault();
			bienvenidaContainer.animate({'opacity':'0'}, 800, 'easeOutQuint', function(){
				bienvenidaContainer.remove();

				$('.sidebar').css({'width':'440px'});

				$('.level-01').animate({'width':'120px'}, 600, 'easeOutQuint', function(){
					$('.sidebar').css({'width':'120px'});
				});
				$('.logo').css({'display':'block'}).animate({'left':'70px'}, 600, 'easeOutQuint');
				$('.tecnologico-monterrey').css({'display':'block'}).animate({'left':'190px'}, 600, 'easeOutQuint');
				$('.buscador').fadeIn(400);
				$('.chat').fadeIn(400);
				$('.messages').fadeIn(400);
				$('.aplica-container').fadeIn(400);
				$video.fadeOut(400);
				nosotros.fadeIn(400);
				$('body').css({'overflow-x': 'scroll'});
				$('.wrapper').addClass('opened');

			});


		});

		return this;

	};

}(jQuery));