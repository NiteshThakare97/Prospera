(function ($, elementor) {
    'use strict';
  
    function handleViewportItems(entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          $(entry.target).addClass('in-view');
        } else {
          $(entry.target).removeClass('in-view');
        }
      });
    }
  
    var observer = new IntersectionObserver(handleViewportItems, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Adjust this threshold as needed
    });
  
    var timelineAnimation = function () {
      var items = $('.bwdtasx-timeline-container ul li');
  
      items.each(function () {
        observer.observe(this);
      });
    };
  
    $(window).on('elementor/frontend/init', function () {
      elementorFrontend.hooks.addAction('frontend/element_ready/bwdtasx-timeline-animation.default', function () {
        timelineAnimation();
      });
    });
  
  })(jQuery, window.elementorFrontend);
  