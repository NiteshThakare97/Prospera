

// (function($, elementor) {
//     'use strict';
//     var widgetScrollimageReveal = function($scope, $) {

//         var objImageReveal = $scope.find('#bwdirax_uc_image_reveal_on_scroll');
//         var objOverlay = objImageReveal.find('.uc_overlay');
//         var revealClass = 'uc_reveal';

//         $(objImageReveal).on('inview', function(event, isInView) {

//             // if (isInView == true){ objOverlay.addClass(revealClass); }

//             if (isInView) {objOverlay.addClass(revealClass);}
//             else {objOverlay.removeClass(revealClass);}

//         });

//         sal({
//             once: false,
//         });


//     };
//     $(window).on('elementor/frontend/init', function() {
//         elementorFrontend.hooks.addAction('frontend/element_ready/bwdirax-image-reveal-animation.default', widgetScrollimageReveal);
//     });
// }(jQuery, window.elementorFrontend));


(function($, elementor) {
    'use strict';

    console.log("Script is loaded and executed");

    var widgetScrollimageReveal = function($scope, $) {
        var objImageReveal = $scope.find('#bwdirax_uc_image_reveal_on_scroll');
        var objOverlay = objImageReveal.find('.uc_overlay');
        var revealClass = 'uc_reveal';

        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    console.log("Element is in view");
                    objOverlay.addClass(revealClass);
                } else {
                    console.log("Element is out of view");
                    objOverlay.removeClass(revealClass);
                }
            });
        });

        observer.observe(objImageReveal[0]);
		
		sal({
			once: false,
        });
    };

    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/bwdirax-image-reveal-animation.default', widgetScrollimageReveal);
    });
})(jQuery, window.elementorFrontend);

