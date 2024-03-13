

(function($, elementor) {
    'use strict';
    var AgeGate = function($scope, $) {
        if (elementorFrontend.isEditMode()) {
          localStorage.removeItem("bwdspox-promotions-sales-expire-time");
          if ($scope.find('.bwdspox-promotions-sales-wrapper').length) {
            var editor_mood = $scope.find('.bwdspox-promotions-sales-wrapper').data('editor_mood');
            if ('no' == editor_mood) {
              $scope.find('.bwdspox-promotions-sales-wrapper').hide();
            }
          }
        } else if (!elementorFrontend.isEditMode()) {
          var container = $scope.find('.bwdspox-promotions-sales-wrapper'),
            cookies_time = container.data('promotions_sales_cookies_time'),
            exd = localStorage.getItem("bwdspox-promotions-sales-expire-time");
          //container.closest("body").find("header").css("display","none");
          container.closest("body").css("overflow", "hidden");
          var cdate = new Date();
          var endDate = new Date();
          endDate.setDate(cdate.getDate() + cookies_time);
          if (exd != '' && exd != undefined && new Date(cdate) <= new Date(exd)) {
            $('.bwdspox-promotions-sales-wrapper').hide();
            container.closest("body").css("overflow", "");
          } else if (exd != '' && exd != undefined && new Date(cdate) > new Date(exd)) {
            localStorage.removeItem("bwdspox-promotions-sales-expire-time");
            $('.bwdspox-promotions-sales-wrapper').show();
          } else {
            $('.bwdspox-promotions-sales-wrapper').show();
          }
  
          /*confirm-age*/
          if ($scope.find('.bwdspox-promotions-sales-wrapper.bwdspox-promotions-sales-confirm-age').length) {
            $(".bwdspox-promotions-sales-confirm-a-btn").on("click", function () {
              localStorage.setItem("bwdspox-promotions-sales-expire-time", endDate);
              $(this).closest(".bwdspox-promotions-sales-wrapper").hide();
              //$(this).closest("body").find("header").css("display","block");
              $(this).closest("body").css("overflow", "");
            });
          }
  
        }
    };
    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/bwdspox-promotion-sales-offer.default', AgeGate);
    });
}(jQuery, window.elementorFrontend));