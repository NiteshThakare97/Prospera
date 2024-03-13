

(function($, elementor) {
    'use strict';
    var AgeGate = function($scope, $) {
        if (elementorFrontend.isEditMode()) {
          localStorage.removeItem("bwdspox-age-gate-expire-time");
          if ($scope.find('.bwdspox-age-gate-wrapper').length) {
            var editor_mood = $scope.find('.bwdspox-age-gate-wrapper').data('editor_mood');
            if ('no' == editor_mood) {
              $scope.find('.bwdspox-age-gate-wrapper').hide();
            }
          }
        } else if (!elementorFrontend.isEditMode()) {
          var container = $scope.find('.bwdspox-age-gate-wrapper'),
            cookies_time = container.data('age_gate_cookies_time'),
            exd = localStorage.getItem("bwdspox-age-gate-expire-time");
          //container.closest("body").find("header").css("display","none");
          container.closest("body").css("overflow", "hidden");
          var cdate = new Date();
          var endDate = new Date();
          endDate.setDate(cdate.getDate() + cookies_time);
          if (exd != '' && exd != undefined && new Date(cdate) <= new Date(exd)) {
            $('.bwdspox-age-gate-wrapper').hide();
            container.closest("body").css("overflow", "");
          } else if (exd != '' && exd != undefined && new Date(cdate) > new Date(exd)) {
            localStorage.removeItem("bwdspox-age-gate-expire-time");
            $('.bwdspox-age-gate-wrapper').show();
          } else {
            $('.bwdspox-age-gate-wrapper').show();
          }
  
          /*confirm-age*/
          if ($scope.find('.bwdspox-age-gate-wrapper.bwdspox-age-gate-confirm-age').length) {
            $(".bwdspox-age-gate-confirm-age-btn").on("click", function () {
              localStorage.setItem("bwdspox-age-gate-expire-time", endDate);
              $(this).closest(".bwdspox-age-gate-wrapper").hide();
              //$(this).closest("body").find("header").css("display","block");
              $(this).closest("body").css("overflow", "");
            });
          }
  
          /*confirm-dob*/
          if ($scope.find('.bwdspox-age-gate-wrapper.bwdspox-age-gate-confirm-dob').length) {
            $(".bwdspox-age-gate-confirm-dob-btn").on("click", function () {
              var birthYear = new Date(Date.parse($(this).closest('.bwdspox-age-gate-form-body').find('.bwdspox-age-gate-date-input').val())),
                agebirth = birthYear.getFullYear(),
                currentYear = cdate.getFullYear(),
                userage = currentYear - agebirth,
                agelimit = $(this).closest('.bwdspox-age-gate-wrapper').data("userbirth");
              if (userage < agelimit) {
                $(this).closest('.bwdspox-age-gate-boxes').find('.bwdspox-age-gate-warning-msg').show();
              } else {
                localStorage.setItem("bwdspox-age-gate-expire-time", endDate);
                $(this).closest('.bwdspox-age-gate-wrapper').hide();
                //$(this).closest("body").find("header").css("display","block");
                $(this).closest("body").css("overflow", "");
              }
            });
          }
  
          /*confirm-by-boolean*/
          if ($scope.find('.bwdspox-age-gate-wrapper.bwdspox-age-gate-confirm-by-boolean').length) {
            $(".bwdspox-age-gate-wrapper .bwdspox-age-gate-confirm-yes-btn").on("click", function () {
              localStorage.setItem("bwdspox-age-gate-expire-time", endDate);
              $(this).closest('.bwdspox-age-gate-wrapper').hide();
              //$(this).closest("body").find("header").css("display","block");
              $(this).closest("body").css("overflow", "");
            });
            $(".bwdspox-age-gate-wrapper .bwdspox-age-gate-confirm-no-btn").on("click", function () {
              $(this).closest('.bwdspox-age-gate-boxes').find('.bwdspox-age-gate-warning-msg').show();
            });
          }
        }
    };
    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/bwdspox-promotion-sales-offer.default', AgeGate);
    });
}(jQuery, window.elementorFrontend));