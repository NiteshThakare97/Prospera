

/**
 * Start honeycombs widget script
 */

(function($, elementor) {
    'use strict';
    var widgetOffcanvasSlideMagic = function($scope, $) {

        var offcanvasBody = $scope.find('.bwdosmx-offcanvas-body');
        var offcanvasClick = offcanvasBody.find('.bwdosmx-offcanvas-toggle-wrap a');
        var offcanvasOverlay = offcanvasBody.find('.bwdosmx-ofcanvas-overlay');
        var offcanvasCloseButton = offcanvasBody.find('.bwdosmx-close-bttn');
        var offcanvasFixed = offcanvasBody.find('.bwdosmx-ofcanvas-fixed');
        var activeOverlay = 'overlay-active';
        var activeFixed = 'fixed-active';

        $( offcanvasClick ).click(function(e){
            e.preventDefault();
            $( offcanvasOverlay ).addClass( activeOverlay );
            $( offcanvasFixed ).addClass( activeFixed );
        });

        $( offcanvasOverlay ).click(function(ee){
            $( ee.target ).removeClass( activeOverlay );
            $( offcanvasFixed ).removeClass( activeFixed );

        });

        $( offcanvasCloseButton ).click(function(){
            $(offcanvasOverlay).removeClass(activeOverlay);
            $(offcanvasFixed).removeClass(activeFixed);
        });


    };
    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/bwdosmx-offcanvas-slide-magic.default', widgetOffcanvasSlideMagic);
    });
}(jQuery, window.elementorFrontend));

/**
 * End honeycombs widget script
 * 
 * 
 * 
 */