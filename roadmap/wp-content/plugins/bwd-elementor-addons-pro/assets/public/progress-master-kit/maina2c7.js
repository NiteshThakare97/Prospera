// (function($,elementor){'use strict';var widgetProgressMasterKitX=function(e,r){var t=r(".bwdpmkx-progressbar",e),n=t.data("layout"),o=t.data("count"),i=t.data("duration");o>100&&(o=100);if("line"==n){r(".bwdpmkx-progressbar-line-fill",t).css({width:o+"%"})}else if("half_circle"==n){r(".bwdpmkx-progressbar-circle-half",t).css({transform:"rotate("+1.8*o+"deg)"})}
// r(".bwdpmkx-progressbar-count",t).prop({counter:0}).animate({counter:o},{duration:i,easing:"linear",step:function(e){if("circle"==n||"circle_fill"==n){var angle=3.6*e;r(".bwdpmkx-progressbar-circle-half-left",t).css({transform:"rotate("+angle+"deg)"});if(angle>180){r(".bwdpmkx-progressbar-circle-pie",t).css({"-webkit-clip-path":"inset(0)","clip-path":"inset(0)"});r(".bwdpmkx-progressbar-circle-half-right",t).css({visibility:"visible"})}}
// r(this).text(Math.ceil(e))},});if("line_rainbow"==n){r(".bwdpmkx-progressbar-line-fill",t).css({width:o+"%"})}else if("half_circle_fill"==n){r(".bwdpmkx-progressbar-circle-half",t).css({transform:"rotate("+1.8*o+"deg)"})}else if("box"==n){r(".bwdpmkx-progressbar-box-fill",t).css({height:o+"%"})}};$(window).on('elementor/frontend/init',function(){elementorFrontend.hooks.addAction('frontend/element_ready/bwdpmkx-progress-master-kit.default',widgetProgressMasterKitX)})})(jQuery,window.elementorFrontend)
// 
// 
// 

(function ($, elementor) {
    'use strict';
  
    var widgetProgressMasterKitX = function (e, r) {
      var t = r('.bwdpmkx-progressbar', e);
  
      // Function to animate the progress bar
      function animateProgressBar() {
        var n = t.data('layout'),
          o = t.data('count'),
          i = t.data('duration');
  
        o > 100 && (o = 100);
  
        if ('line' == n) {
          r('.bwdpmkx-progressbar-line-fill', t).css({ width: o + '%' });
        } else if ('half_circle' == n) {
          r('.bwdpmkx-progressbar-circle-half', t).css({
            transform: 'rotate(' + 1.8 * o + 'deg)',
          });
        }
  
        r('.bwdpmkx-progressbar-count', t)
          .prop({ counter: 0 })
          .animate(
            { counter: o },
            {
              duration: i,
              easing: 'linear',
              step: function (e) {
                if ('circle' == n || 'circle_fill' == n) {
                  var angle = 3.6 * e;
                  r('.bwdpmkx-progressbar-circle-half-left', t).css({
                    transform: 'rotate(' + angle + 'deg)',
                  });
                  if (angle > 180) {
                    r('.bwdpmkx-progressbar-circle-pie', t).css({
                      '-webkit-clip-path': 'inset(0)',
                      'clip-path': 'inset(0)',
                    });
                    r('.bwdpmkx-progressbar-circle-half-right', t).css({
                      visibility: 'visible',
                    });
                  }
                }
                r(this).text(Math.ceil(e));
              },
            }
          );
  
        if ('line_rainbow' == n) {
          r('.bwdpmkx-progressbar-line-fill', t).css({ width: o + '%' });
        } else if ('half_circle_fill' == n) {
          r('.bwdpmkx-progressbar-circle-half', t).css({
            transform: 'rotate(' + 1.8 * o + 'deg)',
          });
        } else if ('box' == n) {
          r('.bwdpmkx-progressbar-box-fill', t).css({ height: o + '%' });
        }
      }
  
      // Use Intersection Observer to trigger the animation when the element is in view
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateProgressBar();
            observer.unobserve(entry.target);
          }
        });
      });
  
      // Observe the element
      observer.observe(t[0]);
    };
  
    $(window).on('elementor/frontend/init', function () {
      elementorFrontend.hooks.addAction(
        'frontend/element_ready/bwdpmkx-progress-master-kit.default',
        widgetProgressMasterKitX
      );
    });
  })(jQuery, window.elementorFrontend);