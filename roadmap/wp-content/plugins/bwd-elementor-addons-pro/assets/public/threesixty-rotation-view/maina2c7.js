"use strict";

;
(function ($) {
  'use strict';

  var $window = $(window);

  $window.on('elementor/frontend/init', function () {

    //Threesixty Rotation
    var Threesixty_Rotation = function Threesixty_Rotation($scope) {
      var ha_circlr = $scope.find('.bwdtsrx-threesixty-rotation-inner');
      var cls = ha_circlr.data('selector');
      var autoplay = ha_circlr.data('autoplay');
      var glass_on = $scope.find('.bwdtsrx-threesixty-rotation-magnify');
      var t360 = $scope.find('.bwdtsrx-threesixty-rotation-360img');
      var zoom = glass_on.data('zoom');
      var playb = $scope.find('.bwdtsrx-threesixty-rotation-play');
      var crl = circlr(cls, {
        play: true
      });
      if ('on' === autoplay) {
        var autoplay_btn = $scope.find('.bwdtsrx-threesixty-rotation-autoplay');
        autoplay_btn.on('click', function (el) {
          el.preventDefault();
          crl.play();
          t360.remove();
        });
        setTimeout(function () {
          autoplay_btn.trigger('click');
          autoplay_btn.remove();
        }, 1000);
      } else {
        playb.on('click', function (el) {
          el.preventDefault();
          var $self = $(this);
          var $i = $self.find('i');
          if ($i.hasClass('fa-play')) {
            $i.removeClass('fa-play');
            $i.addClass('fa-pause');
            crl.play();
          } else {
            $i.removeClass('fa-pause');
            $i.addClass('fa-play');
            crl.stop();
          }
          t360.remove();
        });
      }
      glass_on.on('click', function (el) {
        var img_block = $scope.find('img');
        img_block.each(function () {
          var style = $(this).attr('style');
          if (-1 !== style.indexOf("block")) {
            BWDTSRX_SimplaMagnify($(this)[0], zoom);
            glass_on.css('display', 'none');
            t360.remove();
          }
        });
      });
      $(document).on('click', function (e) {
        var t = $(e.target);
        var magnifier = $scope.find('.bwdtsrx-img-magnifier-glass');
        var i = glass_on.find('i');
        if (magnifier.length && t[0] !== i[0]) {
          magnifier.remove();
          glass_on.removeAttr('style');
        }
        if (t[0] === ha_circlr[0]) {
          t360.remove();
        }
      });
      ha_circlr.on('mouseup mousedown touchstart touchend', function (e) {
        t360.remove();
      });
    };

    var fnHanlders = {
      'bwdtsrx-threesixty-rotation-view.default': Threesixty_Rotation
    };
    $.each(fnHanlders, function (widgetName, handlerFn) {
      elementorFrontend.hooks.addAction('frontend/element_ready/' + widgetName, handlerFn);
    });

  });
})(jQuery);