(function ($, elementor) {
    'use strict';

    // Function to initialize the vertical slideshow
    function initializeVerticalSlideshow() {
        var $slider = $('.bwdvsix-slideshow .bwdvsix-slider');
        var maxItems = $('.item', $slider).length;
        var dragging = false;
        var tracking;
        var rightTracking;

        var $sliderRight = $('.bwdvsix-slideshow').clone().addClass('slideshow-right').appendTo($('.bwdvsix-split-slideshow'));
        var rightItems = $('.item', $sliderRight).toArray();
        var reverseItems = rightItems.reverse();
        $('.bwdvsix-slider', $sliderRight).html('');
        for (var i = 0; i < maxItems; i++) {
            $(reverseItems[i]).appendTo($('.bwdvsix-slider', $sliderRight));
        }

        $slider.addClass('slideshow-left');
        $('.slideshow-left').slick({
            // Slick options for the left slideshow
            vertical: true,
            verticalSwiping: true,
            arrows: false,
            infinite: true,
            dots: true,
            speed: 1000,
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
            // Add other options and event handlers as needed
        }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            if (currentSlide > nextSlide && nextSlide == 0 && currentSlide == maxItems - 1) {
                $('.slideshow-right .bwdvsix-slider').slick('slickGoTo', -1);
                $('.bwdvsix-slideshow-text').slick('slickGoTo', maxItems);
            } else if (currentSlide < nextSlide && currentSlide == 0 && nextSlide == maxItems - 1) {
                $('.slideshow-right .bwdvsix-slider').slick('slickGoTo', maxItems);
                $('.bwdvsix-slideshow-text').slick('slickGoTo', -1);
            } else {
                $('.slideshow-right .bwdvsix-slider').slick('slickGoTo', maxItems - 1 - nextSlide);
                $('.bwdvsix-slideshow-text').slick('slickGoTo', nextSlide);
            }
        });

        // Mousewheel event handling for the left slideshow
        $('.slideshow-left').on('wheel', function (event) {
            event.preventDefault();
            if (event.originalEvent.deltaY > 0) {
                $(this).slick('slickNext');
            } else {
                $(this).slick('slickPrev');
            }
        });

        // Initialize the right slideshow and text slideshow (as in your original code)
        $('.slideshow-right .bwdvsix-slider').slick({
            // Slick options for the right slideshow
            swipe: false,
            vertical: true,
            arrows: false,
            infinite: true,
            speed: 950,
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
            initialSlide: maxItems - 1
            // Add other options as needed
        });

        $('.bwdvsix-slideshow-text').slick({
            // Slick options for the text slideshow
            swipe: false,
            vertical: true,
            arrows: false,
            infinite: true,
            speed: 900,
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
            // Add other options as needed
        });

        // Additional code or functionality
    }

    // Initialize the vertical slideshow when Elementor frontend is ready
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/bwdvsix-vertical-split-slideshow.default', function () {
            initializeVerticalSlideshow();
        });
    });

})(jQuery, window.elementorFrontend);
