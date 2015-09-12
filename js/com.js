(function($){
    "use strict";
    $(function(){

        var $socialBarOpened = false;
        var socialBarInnerContainer;
        var chatOpened = false;
        var messagesOpened = false;
        var descripcionOpened = false;

        $("body").mousewheel(function(event, delta) {
          this.scrollLeft -= (delta * 2);
          event.preventDefault();
       });

        $('.sidebar').sidebar();

        $('.menu-container').css({'height':$(window).height() - 150 - 16 + 'px'}).jScrollPane({
            'showArrows': false,
            'animateScroll': true,
            'animateDuration': 800,
            'animateEase': 'easeInOutQuart',
            'trackBackgroundColor': '#e5eef7',
            'dragBackgroundColor': '#0158a8'
        });

        socialBarInnerContainer = $('.social-bar-inner-container').jScrollPane({
            'showArrows': false,
            'animateScroll': true,
            'animateDuration': 800,
            'animateEase': 'easeInOutQuart',
            'trackBackgroundColor': 'rgba(255, 255, 255, 0.2)',
            'dragBackgroundColor': 'rgba(255, 255, 255, 0.6)'
        });

        $('.mas').click(function(){
            if ($socialBarOpened) {
                $socialBarOpened = false;
                $(this).find('.close-plus').removeClass('rotate');
                $('.social-bar').animate({'height':'41px'}, 600, 'easeOutQuint');
            } else {

                var api = socialBarInnerContainer.data('jsp');
                api.scrollToPercentX(100, false);

                $socialBarOpened = true;
                $(this).find('.close-plus').addClass('rotate');
                $('.social-bar').animate({'height':'200px'}, 600, 'easeOutQuint');
            }

        });

        $('.mail-button').click(function(event){
            if (messagesOpened) {
                $('.chat-button').trigger('click');
            }
            if (!chatOpened) {
                chatOpened = true;
                $(this).children('.modal').css({'display':'block','opacity':'0'}).animate({'top':'110px', 'opacity':'1'}, 200, 'easeOutQuint');
            } else {
                chatOpened = false;
                $(this).children('.modal').animate({'top':'94px', 'opacity':'0'}, 200, 'easeOutQuint', function(){
                    $(this).css({'display':'none'});
                });
            }

        });

        $('.chat-button').click(function(event){
            if (chatOpened) {
                $('.mail-button').trigger('click');
            }

            if (!messagesOpened) {
                messagesOpened = true;
                $(this).children('.modal').css({'display':'block','opacity':'0'}).animate({'top':'110px', 'opacity':'1'}, 200, 'easeOutQuint');
            } else {
                messagesOpened = false;
                $(this).children('.modal').animate({'top':'81px', 'opacity':'0'}, 200, 'easeOutQuint', function(){
                    $(this).css({'display':'none'});
                });
            }

        });

        $(document).scrollLeft(0);

        $(window).resize(function(){

            var container = $('.menu-container');
            var api = container.data('jsp');
            container.css({'height': $(window).height() - 150 - 16});

            $('.menu-container').css({'height':$(window).height() - 150 - 16 + 'px'}).jScrollPane({
                'showArrows': false,
                'animateScroll': true,
                'animateDuration': 800,
                'animateEase': 'easeInOutQuart',
                'trackBackgroundColor': '#e5eef7',
                'dragBackgroundColor': '#0158a8'
            });

            var container = $('.social-bar-inner-container');
            var api = container.data('jsp');
            container.css({'width': $(window).width()});

            $('.wrapper').height( $(window).height() - 60 - 16 );


        }).trigger('resize');


        /*------------------------------------*\
         /------------------------------------\
                    #CUERVOS LOCOS
         \------------------------------------/
        \*------------------------------------*/


        /*------------------------------------*\
            #FUNCTIONS
        \*------------------------------------*/

        /**
         * Toggle any element
         * @param element to be shown
        **/
        function toggleVisibility(element){
            $(element).toggleClass('opened');
        }// toggleVisibility

        function commaSeparateNumber(val){
            while (/(\d+)(\d{3})/.test(val.toString())){
              val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
            }
            return val;
          }

        function textIncrementAnimation(elemento, duracion, cifraFinal, porcentaje){
            elemento.prop('Counter', 0).animate({
                Counter: cifraFinal
            }, {
                duration: duracion,
                easing: 'swing',
                step: function (now) {
                     $(this).text( commaSeparateNumber( Math.round(now) ) );
                     if ( porcentaje == true ){
                        $(this).text( Math.round(now) + '%');
                     }
                }
            });
        }// textIncrementAnimation





        /*------------------------------------*\
            #EVENTS
        \*------------------------------------*/

        var bloque05 = $('.bloque-personas-1').children('h1');
        var bloque06 = $('.bloque-personas-2').children('h1');
        var bloque07 = $('.bloque-personas-3').children('h1');
        var bloque08 = $('.bloque-personas-4').children('h1');

        var bloque09 = $('.bloque-resultados-1').children('h1');
        var bloque10 = $('.bloque-resultados-2').children('h1');
        var bloque11 = $('.bloque-resultados-3').children('h1');

        $(window).scroll(function() {
           var hT = $('.js-seccion-cifras').offset().left,
               hH = $('.js-seccion-cifras').outerWidth(),
               wH = $(window).width(),
               wS = $(this).scrollLeft();
           if (wS > (hT+hH-wH)){
                textIncrementAnimation(bloque05, 1400, 95124);
                textIncrementAnimation(bloque06, 1400, 9206);
                textIncrementAnimation(bloque07, 1400, 31);
                textIncrementAnimation(bloque08, 1400, 19);
                textIncrementAnimation(bloque09, 1400, 52, true);
                textIncrementAnimation(bloque10, 1400, 51, true);
                textIncrementAnimation(bloque11, 1400, 21, true);
           }
        });


    });
})(jQuery);