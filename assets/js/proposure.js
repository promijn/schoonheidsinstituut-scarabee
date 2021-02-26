/**
 * proposure.js
 *
 * Global Proposure js and jquery
 *
 * @package:    Proposure Framework
 * @since 1.0
 *
 */

// Detecting Mobile Devices
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


// Equalize section items heights
(function ($) {
    $.fn.equalizeHeights = function () {

        var items = $(this), //grab all slides
            heights = [], //create empty array to store height values
            tallest; //create variable to make note of the tallest slide

        var normalizeHeights = function () {

            items.each(function () { //add heights to array
                heights.push($(this).height());
            });
            tallest = Math.max.apply(null, heights); //cache largest value
            items.each(function () {
                $(this).css('min-height', tallest + 'px');
            });
        };

        normalizeHeights();

        $(window).on('resize orientationchange', function () {
            //reset vars
            tallest = 0;
            heights.length = 0;

            items.each(function () {
                $(this).css('min-height', '0'); //reset min-height
            });
            normalizeHeights(); //run it again

        });

    };
}(jQuery));


function urldecode(str) {
    return decodeURIComponent((str + '').replace(/\+/g, '%20'));
}


jQuery(document).ready(function ($) {


    //ANIMATED OBJECT
    // We don' activate this on mobile devices, cause it doesn't work very well on this
    if (isMobile.any()) {
        $(".animatez").waypoint(function (direction) {
            var effect = $(this).attr('data-effect');
            $(this).removeClass('animatez');
        }, {
            offset: '100%'
        });
    } else {
        $(".animatez").waypoint(function (direction) {
            var effect = $(this).attr('data-effect');
            $(this).removeClass('animatez');
            $(this).addClass('animated ' + effect);
        }, {
            offset: '90%'
        });
    }


    //SMOOTH SCROLL
    $(".sscroll").smoothScroll();

    //BACK TO TOP
    $("#backtotop").backToTop();


    // PROPOSURE MODAL SCRIPTS
    $('.proposure-modal').click(function () {
        var body = urldecode($(this).data('body'));
        console.log(body)
        $('#app-modal-body').html(body);
    });

    $(window).on('load', function () {
        $("#rindu-team .teams").equalizeHeights();
    });

    // CAROUSEL
    $('.carousel').carousel({
        interval: false
    })
});

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
        //equalizeHeights('#bootstack-pricing .panel-body');
        equalizeHeights('#bootstack-pricing .panel-body');
        equalizeHeights('#bootstack-pricing .row-2 .panel-body');
        equalizeHeights("#content-section-1 .thumbnail");
        equalizeHeights("#simpleCarousel .slide-box");

        // Fix heights on window resize
        $(window).resize(function() {

            // Needs to be a timeout function so it doesn't fire every ms of resize
            setTimeout(function() {
                equalizeHeights('#bootstack-pricing .panel-body');
                equalizeHeights('#bootstack-pricing .row-2 .panel-body');
                equalizeHeights('#bootstack-pricing .thumbnail');
                equalizeHeights("#simpleCarousel .slide-box");

            }, 120);
        });
    });
})(jQuery);

