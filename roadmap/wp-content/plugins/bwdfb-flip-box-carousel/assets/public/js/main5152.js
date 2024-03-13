

(function ($) {
  "use strict";
  $(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/wppfb-flip-box-Carousel.default",
      function(){



          function sliderAllWrapper(sliderItem){
            let sliderAttrs =sliderItem.querySelector('.wppfb-for-all-owlCarousel');
              let slider = sliderAttrs;
              let margin = null;
              let mobile = null;
              let tablet = null;
              let desktop = null;
              let autoplay = false;
              let loop = false;
              let autoplayHoverPause = false;
              let center= false;
              let autoplayTimeout = null;
              let autoplaySpeed = null;
              let stagePadding = null;
              let nav = false;
              let navText = null;
              let navType = '';
              let dots = false;
              let dotsType = '';


            const init = function() {

                margin = parseInt(slider.getAttribute('wppfb-data-margin'));
                desktop = parseInt(slider.getAttribute('wppfb-data-desktop'));

                tablet = parseInt(slider.getAttribute('wppfb-data-tablet'));

                mobile = parseInt(slider.getAttribute('wppfb-data-mobile'));

                autoplay = slider.getAttribute('wppfb-data-autoplay') === 'yes' ? true : false;

                loop = slider.getAttribute('wppfb-data-loop') === 'yes' ? true : false;

                autoplayHoverPause = slider.getAttribute('wppfb-data-hoverpause') === 'yes' ? true : false;

                center = slider.getAttribute('wppfb-data-centermode') === 'yes' ? true : false;

                autoplayTimeout = parseInt(slider.getAttribute('wppfb-data-timeout'));

                autoplaySpeed = parseInt(slider.getAttribute('wppfb-data-autospeed'));

                stagePadding = parseInt(slider.getAttribute('wppfb-data-stagepadding'));

                //nav-arrow
                nav = slider.getAttribute('wppfb-data-navigations') === 'yes' ? true : false;

                setTimeout( function() {

                  const sliderIdNew = sliderItem.getAttribute('id');
                  let myNewTest = document.querySelector(`#${sliderIdNew}`);
                  let myOwlNavNew = myNewTest.querySelector( '.wppfb-owl-nav' );

                  if( slider.getAttribute('wppfb-data-navigations') === 'yes' ) {
                    myOwlNavNew.classList.add('owlActive')
                  }

                }, 500)

                navType = slider.getAttribute('wppfb-data-navtype');
                
                if( navType === 'icon' ) {
                  navText = [
                    `<i class="${slider.getAttribute('wppfb-data-navprev')}"></i>`,
                    `<i class="${slider.getAttribute('wppfb-data-navnext')}"></i>`
                  ]
                } else {
                  navText = [
                    `<span>${slider.getAttribute('wppfb-data-navprev')}</span>`, 
                    `<span>${slider.getAttribute('wppfb-data-navnext')}</span>`
                  ]
                }

                //dots
                dots = slider.getAttribute('wppfb-data-dots') === 'yes' ? true : false;

                dotsType = slider.getAttribute('wppfb-data-dotstype');

                setTimeout( function() {

                  const sliderIdNew = sliderItem.getAttribute('id');
                  let myNewTest = document.querySelector(`#${sliderIdNew}`);
                let sliderDots = myNewTest.querySelector('.wppfb-owl-dots');
                let dotBtns = sliderDots.querySelectorAll('button');

                if( slider.getAttribute('wppfb-data-dots') === 'yes' ) {
                  sliderDots.classList.add('owlActive')
                }
                  
                if( dotsType == 'dots' ) {
                  sliderDots.classList.add('myActivexxx');
                }else if( dotsType == 'numbers' ) {
                  sliderDots.classList.remove('myActive');
                  for(let i = 0; i <  dotBtns.length; i++){
                    dotBtns[i].innerHTML = `<span>${i + 1}</span>`;
                    }
                }
                }, 500)
          }
          init();

          const sliderId = sliderItem.getAttribute('id');
   
          $(`#${sliderId} .wppfb-owl.wppfb-owl-carousel`).owlCarouselWPPFB({
            loop:loop,
            autoplay: autoplay,
            autoplayTimeout: autoplayTimeout,
            autoplaySpeed: autoplaySpeed,
            autoplayHoverPause: autoplayHoverPause,
            center: center,
            margin: margin,
            stagePadding: stagePadding,
            nav: nav,
            navText: [ navText[0], navText[1] ],
            dots: dots,
            responsive:{
              0:{
                items:mobile
              },
              768:{
                  items:tablet
              },
              992:{
                  items:desktop
              }
            }
          })

          }

          const allSliderItem = document.querySelectorAll('.wppfb-slider-common')
          for(let item of allSliderItem){
          sliderAllWrapper(item)
          }
          
      }
    );
  });
})(jQuery);








