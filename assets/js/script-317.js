jQuery(document).ready(function($) {
            $('#mb-slider').responsiveSlides({
		        auto: true,
		        pager: true,
		        nav: true,
		        speed: 1000,
		        timeout: 7000,
		        namespace: 'callbacks',
		        before: function () {
		          $('.events').append('<li>before event fired.</li>');
		        },
		        after: function () {
		          $('.events').append('<li>after event fired.</li>');
		        }
	      	});
        
            /* EQUALIZE ALL TABLE BLOCK HEIGHTS */
            var bpBoxes = $('.bp-pricing-table');
            maxHeight = Math.max.apply(
            Math, bpBoxes.map(function() {
                return $(this).height();
            }).get());
            bpBoxes.height(maxHeight);

        
            /* EQUALIZE ALL BLOCK HEIGHTS */
            var eqBoxes = $('.teams');
            maxHeight = Math.max.apply(
            Math, eqBoxes.map(function() {
                return $(this).height();
            }).get());
            eqBoxes.height(maxHeight);


            $(function() {
		        $("[rel='tooltip']").tooltip();
		    });
        
});