(function ( $ ) {

	$.fn.seccion_oferta = function( options ) {

		var settings = $.extend({
		}, options);

		var $this = this;
		var $preparatoria = $this.find('.preparatoria');
		var $profesional = $this.find('.profesional');
		var $postgrados = $this.find('.postgrados');
		var $cursosenlinea = $this.find('.cursosenlinea');
		var $bg = $this.find('.seccion-fondo');
		var $oferta = $this.find('.content-container');
		var $contenido = $this.find('.content-oferta-container');
		var $titles = $this.find('.seccion-oferta-titles');
		//var $bloque_oferta = $this.find('.bloque-oferta');
		var $imagenOferta = $this.find('.imagen-oferta');
		var $descripcionOferta = $this.find('.descripcion-oferta');
		var $closeContenidoOferta = $this.find('.js-seccion-oferta__content--closer');
		var contentOpened = false;

		$contenido.css({'height': ($(window).height() - 206 - 16) + 'px'});

		$preparatoria.click(function(event){
			event.preventDefault();
		});

		$profesional.click(function(event){
			event.preventDefault();
			//$bg.animate({'height':'206px'}, 1200, 'easeOutQuint');
			$contenido.removeClass('closed');
			$titles.removeClass('closed');
		});

		$postgrados.click(function(event){
			event.preventDefault();
		});

		$cursosenlinea.click(function(event){
			event.preventDefault();
		});

		$closeContenidoOferta.click(function(event){
			event.preventDefault();
			contentOpened = false;

			$contenido.addClass('closed');
			$titles.addClass('closed');
		});

		$(window).resize(function(){

			$('.content-oferta-container').css({'height': ($(window).height() - 206 - 16) + 'px' });

			//

			if (contentOpened) {
				$contenidoOferta.css({'height': ($(window).height() - 206 - 16) + 'px'});
				$imagenOferta.css({'height': ($(window).height() - 206 - 16) + 'px'});
				$descripcionOferta.css({'height': ($(window).height() - 206 - 16) + 'px'});
			}

		}).trigger('resize');

		return this;

	};

}(jQuery));