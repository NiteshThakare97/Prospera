"use strict";

(function ($) {
  'use strict';

  var $window = $(window);

  $window.on('elementor/frontend/init', function () {

        //Team Member
        var Team_Member = function Team_Member($scope) {
          var btn = $scope.find('.bwdepix-btn');
          var lightBox = $scope.find('.bwdepix-member-lightbox');
          if (lightBox.length > 0) {
            var close = lightBox.find('.bwdepix-member-lightbox-close');
            btn.on('click', function () {
              lightBox.addClass('bwdepix-member-lightbox-show');
            });
            lightBox.on('click', function (e) {
              if (lightBox.hasClass('bwdepix-member-lightbox-show')) {
                if (e.target == lightBox[0]) {
                  lightBox.removeClass('bwdepix-member-lightbox-show');
                } else if (e.target == close[0]) {
                  lightBox.removeClass('bwdepix-member-lightbox-show');
                } else if (e.target == close.find('i.eicon-editor-close')[0]) {
                  lightBox.removeClass('bwdepix-member-lightbox-show');
                }
              }
            });
          }
        };

    var fnHanlders = {
      'bwdepix-employe-profile-identity.default': Team_Member
    };
    $.each(fnHanlders, function (widgetName, handlerFn) {
      elementorFrontend.hooks.addAction('frontend/element_ready/' + widgetName, handlerFn);
    });

  });
})(jQuery);