/**
 * Start honeycombs widget script
 */

(function($, elementor) {
    'use strict';
    var widgetScrollimageReveal = function($scope, $) {

        var objImageReveal = $scope.find('#bwdirax_uc_image_reveal_on_scroll');
        var objOverlay = objImageReveal.find('.uc_overlay');
        var revealClass = 'uc_reveal';

        $(objImageReveal).on('inview', function(event, isInView) {

            // if (isInView == true){ objOverlay.addClass(revealClass); }

            if (isInView) {objOverlay.addClass(revealClass);}
            else {objOverlay.removeClass(revealClass);}

        });

        sal({
            once: false,
        });


    };
    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/bwdirax-image-reveal-animation.default', widgetScrollimageReveal);
    });
}(jQuery, window.elementorFrontend));

/**
 * End honeycombs widget script
 */
