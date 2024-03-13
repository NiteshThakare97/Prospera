"use strict";

(function ($) {
  'use strict';

  var $window = $(window);

  $window.on('elementor/frontend/init', function () {

    var PDF_View = function PDF_View($scope) {
      console.log('ok');
      var $id = $scope.data('id');
      var $settings = $scope.find(".viewer-" + $id).data('pdf-settings');
      var options = {
        width: $settings.width,
        height: $settings.height,
        page: $settings.page_number
      };
      PDFObject.embed($settings.pdf_url, "#" + $settings.unique_id, options);
    };

    var fnHanlders = {
      'bwdpdfx-view-pdf-clear.default': PDF_View
    };
    $.each(fnHanlders, function (widgetName, handlerFn) {
      elementorFrontend.hooks.addAction('frontend/element_ready/' + widgetName, handlerFn);
    });


  });
})(jQuery);