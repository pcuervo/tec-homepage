(function($) {
 
	$.fn.backgroundFullImage = function( options ) {

		var settings = $.extend({
		}, options);

		var $this = this;
		var w = settings.w;
		var h = settings.h;

		$this.css({
			'background-image' : 'url(images/' + settings.background + ')',
			'background-repeat' : 'no-repeat',
			'background-position' : '50% 50%'
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
                
                posX = (w - $this.width()) / 2;
                posY = (h - $this.height()) / 2;

                $this.css({
                	'background-size' : w + 'px' + ' ' + h + 'px'
                	//'background-position' : -posX + 'px' + ' ' + -posY + 'px',
                });
            }
            else
            {
                w = Math.round(yheight * rp);
                h = yheight;
                
                posX = (w - $this.width()) / 2;
                posY = (h - $this.height()) / 2;

                $this.css({
                	'background-size' : w + 'px' + ' ' + h + 'px'
                	//'background-position' : -posX + 'px' + ' ' + -posY + 'px',
                });
            }
		}

        $this.resize()
        {
            resizeBackground();
        }

		$(window).resize(function(){
            resizeBackground();
        }).trigger('resize');

		return this;
	};

}(jQuery));