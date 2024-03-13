"use strict";

(function ($) {
  'use strict';

  var $window = $(window);

  $window.on('elementor/frontend/init', function () {

    //Image Accordion
    var Image_Accordion = function Image_Accordion($scope) {
      if ($scope.hasClass('bwdiukx-image-accordion-click')) {
        var items = $scope.find('.bwdiukx-ia-item');
        items.each(function (inx, btn) {
          $(this).on('click', function (e) {
            // e.preventDefault();
            if ($(this).hasClass('active')) {
              return;
            } else {
              items.removeClass('active');
              $(this).addClass('active');
            }
          });
        });
      }
    };

    var fnHanlders = {
      'bwdiukx-kit-unfold-image.default': Image_Accordion
    };
    $.each(fnHanlders, function (widgetName, handlerFn) {
      elementorFrontend.hooks.addAction('frontend/element_ready/' + widgetName, handlerFn);
    });

  });
})(jQuery);