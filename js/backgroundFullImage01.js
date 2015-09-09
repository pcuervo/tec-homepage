(function($) {
 
	$.fn.backgroundFullImage01 = function(options) {

		var settings = $.extend({
		}, options);

		var $this = this;
		var w = settings.w;
		var h = settings.h;
        var incremento = settings.incremento;

		$this.css({
			'background-image' : 'url(images/' + settings.background + ')',
			'background-repeat' : 'no-repeat',
			'background-position' : '50% 50%'
		});

        $this.hover(function() {

            xwidth = $this.width();
            yheight = $this.height();

            var rp = w / h;
            var reg = xwidth / yheight;

            wi = Math.round((yheight + incremento) * rp);
            he = yheight + incremento;

            //wi = xwidth + incremento;
            //he = Math.round((xwidth + incremento) / rp);

            $this.css({
                'background-size' : wi + 'px' + ' ' + he + 'px'
            });
        
        }, function() {

            xwidth = $this.width();
            yheight = $this.height();

            var rp = w / h;
            var reg = xwidth / yheight;

            wi = Math.round((yheight) * rp);
            he = yheight;

            $(this).css('background-size', wi + 'px' + ' ' + he + 'px');
        
        });

		function resizeBackground()
		{
			xwidth = $this.width();
            yheight = $this.height();

            var rp = w / h;
            var reg = xwidth / yheight;

            if(reg >= rp)
            {
                w = xwidth;
                h = Math.round(xwidth / rp);
                
                //posX = (w - $this.width()) / 2;
                //posY = (h - $this.height()) / 2;

                $this.css({
                	'background-size' : w + 'px' + ' ' + h + 'px'
                });
            }
            else
            {
                w = Math.round(yheight * rp);
                h = yheight;
                
                //posX = (w - $this.width()) / 2;
                //posY = (h - $this.height()) / 2;

                $this.css({
                	'background-size' : w + 'px' + ' ' + h + 'px'
                });
            }
		}

		$(window).resize(function(){
            resizeBackground();
        }).trigger('resize');

        setTimeout(function(){ $(window).trigger('resize'); }, 1000);

		return this;
	};

}(jQuery));




