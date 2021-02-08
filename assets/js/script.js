/**
 * Created by paulromijn on 01-09-14.
 */
// Setting dynamic, equal heights for multiple elements
(function($){
	function equalizeHeights(selector) {
		var heights = new Array();

		// Loop to get all element heights
		$(selector).each(function() {

			// Need to let sizes be whatever they want so no overflow on resize
			$(this).css('min-height', '0');
			$(this).css('max-height', 'none');
			$(this).css('height', 'auto');

			// Then add size (no units) to array
	 		heights.push($(this).height());
		});

		// Find max height of all elements
		var max = Math.max.apply( Math, heights );

		// Set all heights to max height
		$(selector).each(function() {
			$(this).css('height', max + 'px');
		});
	}

	$(window).load(function() {
		// Fix heights on page load
		equalizeHeights('#bootstack-pricing .panel-body');


		// Fix heights on window resize
		$(window).resize(function() {

			// Needs to be a timeout function so it doesn't fire every ms of resize
			setTimeout(function() {
	      		equalizeHeights('#bootstack-pricing .panel-body');
			}, 120);
		});
	});
})(jQuery);
