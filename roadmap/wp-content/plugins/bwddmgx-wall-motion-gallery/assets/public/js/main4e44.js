(function($, elementor) {
    'use strict';

    var widgetWallMotionGallery = function($scope, $) {
        const time = 10000;

        function animEnd(item) {
            item.removeClass("active");
        }

        function animStart(item) {
            if (!item.hasClass("active")) {
                item.addClass("active");
                setTimeout(function() {
                    animEnd(item);
                }, time);
            }
        }

        $(document).ready(function() {
            var items = $(".bwdwmgx-swaying-photo-gallery-gallery");
            if (items.length === 0) {
                return;
            }

            items.each(function() {
                animStart($(this));
            });

            items.on("mouseover", function() {
                animStart($(this));
            });
        });
    };

    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/bwdwmgx-wall-motion-gallery.default', widgetWallMotionGallery);
    });
})(jQuery, window.elementorFrontend);