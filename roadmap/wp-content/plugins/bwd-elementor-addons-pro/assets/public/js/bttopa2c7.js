(function ($) {
  "use strict";
$(window).on("elementor/frontend/init", function() {
  elementorFrontend.hooks.addAction("frontend/element_ready/BWDBackToTop.default", function($scope) {
// scrollToTopMaker
  function scrollToTop(button ,activeClass ='show' ){
    var btn = $(button);
    $(window).scroll(function(){
      if($(window).scrollTop() > 300){
        btn.addClass(activeClass);
      }else{
        btn.removeClass(activeClass);
      }
    });
    btn.on('click', function(e){
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
  }
  // item 1
  scrollToTop('.bwdbtt-scroll-to-top-1')
  // item 2
  scrollToTop('.bwdbtt-scroll-to-top-2')
  // item 3
  scrollToTop('.bwdbtt-scroll-to-top-3')
  // item 4
  scrollToTop('.bwdbtt-scroll-to-top-4')
  // item 5
  scrollToTop('.bwdbtt-scroll-to-top-5')
  // item 8
  scrollToTop('.bwdbtt-scroll-to-top-8')
  // item 9
  scrollToTop('.bwdbtt-scroll-to-top-9')
  // item 10
  scrollToTop('.bwdbtt-scroll-top-10')
  // item 11
  scrollToTop('.bwdbtt-scroll-top-11')
  // item 13
  scrollToTop('.bwdbtt-scroll-to-top-13')
  // item 14
  scrollToTop('.bwdbtt-scroll-to-top-14')
  // item 15
  scrollToTop('.bwdbtt-scroll-to-top-15')
  // item 16
  scrollToTop('.bwdbtt-scroll-to-top-16')
  // item 17
  scrollToTop('.bwdbtt-scroll-to-top-17')
  // item 18
  scrollToTop('.bwdbtt-scroll-to-top-18')
  // item 19
  scrollToTop('.bwdbtt-scroll-to-top-19')
  // item 20
  scrollToTop('.bwdbtt-scroll-to-top-20')
  // item 21
  scrollToTop('.bwdbtt-scroll-to-top-21')
  // item 22
  scrollToTop('.bwdbtt-scroll-to-top-22')
  // item 23
  scrollToTop('.bwdbtt-scroll-to-top-23')
  // item 24
  scrollToTop('.bwdbtt-scroll-to-top-24')
  // back-to-top-button-6
  $(window).on('scroll', function () {
  	var scroll = $(window).scrollTop();
  	if (scroll < 245) {
  		$('.bwdbtt-scroll-to-target').removeClass('open');
  	} else {
  		$('.bwdbtt-scroll-to-target').addClass('open');
  	}
  });
  // =============================================*/
  if ($('.bwdbtt-scroll-to-target').length) {
    $(".bwdbtt-scroll-to-target").on('click', function () {
      var target = $(this).attr('data-target');
      // animate
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 1000);

    });
  }
  // back-to-top-button-7
  /* ======= Scroll to Top ======= */
  var scrollTop = $("#bwdbtt-scroll-top");
  $(window).on('scroll', function() {
    var topPos = $(this).scrollTop();
    if (topPos > 100) {
        $('#bwdbtt-scroll__up-7').removeClass('hide');
        $('#bwdbtt-scroll__up-7').addClass('show');
    } else {
        $('#bwdbtt-scroll__up-7').removeClass('show');
        $('#bwdbtt-scroll__up-7').addClass('hide');
    }
  });
  // /* Click event to scroll to top */
  $(scrollTop).on("click", function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
  });
  // back-to-top-button-12
  $(window).on('scroll', function () {
  	var scroll = $(window).scrollTop();
  	if (scroll < 245) {
  		$('.bwdbtt-scroll-to-target-12').removeClass('open');
  	} else {
  		$('.bwdbtt-scroll-to-target-12').addClass('open');
  	}
  });
  // =============================================*/
  if ($('.bwdbtt-scroll-to-target-12').length) {
    $(".bwdbtt-scroll-to-target-12").on('click', function () {
      var target = $(this).attr('data-target');
      // animate
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 1000);
    });
  }
   // back-to-top-button-25//
   let calcScrollValue = () => {
    let scrollProgress = document.getElementById("bwdbtt-progress-25");
    let progressValue = document.getElementById("bwdbtt-progress-value-25");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
  
    scrollProgress.style.display = pos > 100 ? "grid" : "none"; // Improved display toggle
  
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
  
    scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  
  window.addEventListener("scroll", calcScrollValue); // Changed to event listener for scroll
  
  window.onload = calcScrollValue;
});
});
})(jQuery);
