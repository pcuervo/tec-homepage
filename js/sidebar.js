(function ( $ ) {

	$.fn.sidebar = function(options) {

		var settings = $.extend({
		}, options);

		var $this = this;
		var $open = $this.find('.open');
		var $level01 = $this.find('.level-01');
		var $level02 = $this.find('.level-02');

		var $nosotros = $this.find('.nosotros');
		var $educacion = $this.find('.educacion');
		var $numeros = $this.find('.numeros');

		var $campus = $this.find('.campus');
		var $tecenlinea = $this.find('.tecenlinea');
		var $investigacion = $this.find('.investigacion');
		var $emprendimiento = $this.find('.emprendimiento');
		var $programas = $this.find('.programas');
		var $desarrollo = $this.find('.desarrollo');
		var $admision = $this.find('.admision');
		var $inicia = $this.find('.inicia');
		var $servicios = $this.find('.servicios');
		var $sorteotec = $this.find('.sorteotec');
		var $exatec = $this.find('.exatec');
		var $programasinternacionales = $this.find('.programasinternacionales');
		var $desarrollosocial = $this.find('.desarrollosocial');

		var $menuOpened = false;
		var $level = 0;
		var $active = $('.seccion-home');

		var $logo = $this.find('.logo');
		var $closeButton = $this.find('.close-button');

		$open.click(function(event){
			event.preventDefault();
			$menuOpened = true;
			$level = 1;
			$level01.animate({'width':'350px'}, 400, 'easeOutQuint');
			$('.logo').animate({'left':'300px'}, 400, 'easeOutQuint');
			$('.tecnologico-monterrey').animate({'left':'410px'}, 400, 'easeOutQuint');
			$('.sidebar .js-menu-content').fadeIn(400, function(){ $(window).trigger('resize'); });
			$(this).fadeOut(400);
			$('.menu-button').delay(400).fadeIn(400);

		});

		$closeButton.click(function(event){
			event.preventDefault();
			returnStateButtons(false);
			closeMenu();
		});

		$logo.click(function(event){
			event.preventDefault();
			returnStateButtons(false);

			scrollTo( $('.seccion-home') );
			closeMenu();
		});

		$('.js-menu-scroll').on('click', function(event){
			event.preventDefault();
			returnStateButtons(false);

			var seccion = $(this).data('seccion');
			console.log( '.seccion-'+seccion );
			scrollTo( $('.seccion-'+seccion) );
			$(this).addClass('selected');
			closeMenu();
		});


		$campus.click(function(event){ event.preventDefault(); returnStateButtons(false); $(this).addClass('selected'); });
		$tecenlinea.click(function(event){ event.preventDefault(); returnStateButtons(false); $(this).addClass('selected'); });
		$investigacion.click(function(event){ event.preventDefault(); returnStateButtons(false); $(this).addClass('selected'); });
		$emprendimiento.click(function(event){ event.preventDefault(); returnStateButtons(false); $(this).addClass('selected'); });
		$programas.click(function(event){ event.preventDefault(); returnStateButtons(false); $(this).addClass('selected'); });
		$desarrollo.click(function(event){ event.preventDefault(); returnStateButtons(false); $(this).addClass('selected'); });
		$admision.click(function(event){ event.preventDefault(); returnStateButtons(false); $(this).addClass('selected'); });
		$inicia.click(function(event){ event.preventDefault(); returnStateButtons(false); $(this).addClass('selected'); });
		$servicios.click(function(event){ event.preventDefault(); returnStateButtons(false); $(this).addClass('selected'); });
		$sorteotec.click(function(event){ event.preventDefault(); returnStateButtons(false); $(this).addClass('selected'); });
		$exatec.click(function(event){ event.preventDefault(); returnStateButtons(false); $(this).addClass('selected'); });
		$programasinternacionales.click(function(event){ event.preventDefault(); returnStateButtons(false); $(this).addClass('selected'); });
		$desarrollosocial.click(function(event){ event.preventDefault(); returnStateButtons(false); $(this).addClass('selected'); });

		function returnStateButtons(param) {

			$nosotros.removeClass('selected');
			$educacion.removeClass('selected');
			$numeros.removeClass('selected');
			$campus.removeClass('selected');
			$tecenlinea.removeClass('selected');
			$investigacion.removeClass('selected');
			$emprendimiento.removeClass('selected');
			$programas.removeClass('selected');
			$desarrollo.removeClass('selected');
			$admision.removeClass('selected');
			$inicia.removeClass('selected');
			$servicios.removeClass('selected');
			$sorteotec.removeClass('selected');
			$exatec.removeClass('selected');
			$programasinternacionales.removeClass('selected');
			$desarrollosocial.removeClass('selected');

			if (!param) {
				$menuOpened = true;
				$level = 1;
				$level02.animate({'width':'0'}, 400, 'easeOutQuint');
			}

		}

		function closeMenu()
		{
			if ($level == 1) {
				if ($menuOpened) {
					$level = 0;
					$menuOpened = false;
					$open.delay(400).fadeIn(400);
					$('.menu-button').css({'display':'none'});
					$('.sidebar .js-menu-content').fadeOut(400);
					$('.tecnologico-monterrey').animate({'left':'190px'}, 400, 'easeOutQuint');
					$level01.animate({'width':'120px'}, 400, 'easeOutQuint');
					$('.logo').animate({'left':'70px'}, 400, 'easeOutQuint');
				}
			} else if ($level == 2) {
				if ($menuOpened) {
					$menuOpened = true;
					$level = 1;

					$level02.animate({'width':'0'}, 400, 'easeOutQuint', function(){
						$open.delay(400).fadeIn(400);
						$('.menu-button').css({'display':'none'});
						$('.sidebar .js-menu-content').fadeOut(400);
						$('.tecnologico-monterrey').animate({'left':'190px'}, 400, 'easeOutQuint');
						$level01.animate({'width':'120px'}, 400, 'easeOutQuint');
						$('.logo').animate({'left':'70px'}, 400, 'easeOutQuint');
					});
				}
			}
		}

		$(window).resize(function(){
			$this.css({'height' : $(window).height() - 16});
		}).trigger('resize');

		return this;

	};

	function scrollTo(elemento){
		console.log( elemento );
		var divPosicion = elemento.offset().left,
			divPosicion = divPosicion - 100;
		console.log( divPosicion );
		$('html, body').animate({scrollLeft: divPosicion}, 500);
	}

}(jQuery));





