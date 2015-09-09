(function ( $ ) {

	$.fn.counter = function(options) {

		var settings = $.extend({
		}, options);

		// variables

		var $this = this;
		var $paso = true;
		var $timer;
		var $incremento = 0;
		var $meta = $this.text().replace(",", "");
		$meta = parseInt( $meta.replace("%", "") );
		var $suma = settings.incremento;
		var $inicio = settings.inicio;

		$this.text('0');

		function formatNumber(num) {
			if (!settings.porcentaje) {
				return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
			} else {
				return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "%";
			}
		}

	};

}(jQuery));