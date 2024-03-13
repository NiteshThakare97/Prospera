

(function ($) {
  "use strict";
  $(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/wppgpc-product-carousel.default",
      function(){



          function sliderAllWrapper(sliderItem){
            let sliderAttrs =sliderItem.querySelector('.wppgpc-for-all-owlCarousel')
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

                margin = parseInt(slider.getAttribute('wppgpc-data-margin'));
                desktop = parseInt(slider.getAttribute('wppgpc-data-desktop'));

                tablet = parseInt(slider.getAttribute('wppgpc-data-tablet'));

                mobile = parseInt(slider.getAttribute('wppgpc-data-mobile'));

                autoplay = slider.getAttribute('wppgpc-data-autoplay') === 'yes' ? true : false;

                loop = slider.getAttribute('wppgpc-data-loop') === 'yes' ? true : false;

                autoplayHoverPause = slider.getAttribute('wppgpc-data-hoverpause') === 'yes' ? true : false;

                center = slider.getAttribute('wppgpc-data-centermode') === 'yes' ? true : false;

                autoplayTimeout = parseInt(slider.getAttribute('wppgpc-data-timeout'));

                autoplaySpeed = parseInt(slider.getAttribute('wppgpc-data-autospeed'));

                stagePadding = parseInt(slider.getAttribute('wppgpc-data-stagepadding'));

                //nav-arrow
                nav = slider.getAttribute('wppgpc-data-navigations') === 'yes' ? true : false;

                setTimeout( function() {

                  const sliderIdNew = sliderItem.getAttribute('id');
                  let myNewTest = document.querySelector(`#${sliderIdNew}`);
                  let myOwlNavNew = myNewTest.querySelector( '.wppgpc-owl-nav' );

                  if( slider.getAttribute('wppgpc-data-navigations') === 'yes' ) {
                    myOwlNavNew.classList.add('owlActive')
                  }

                }, 500)

                navType = slider.getAttribute('wppgpc-data-navtype');
                
                if( navType === 'icon' ) {
                  navText = [
                    `<i class="${slider.getAttribute('wppgpc-data-navprev')}"></i>`,
                    `<i class="${slider.getAttribute('wppgpc-data-navnext')}"></i>`
                  ]
                } else {
                  navText = [
                    `<span>${slider.getAttribute('wppgpc-data-navprev')}</span>`, 
                    `<span>${slider.getAttribute('wppgpc-data-navnext')}</span>`
                  ]
                }

                //dots
                dots = slider.getAttribute('wppgpc-data-dots') === 'yes' ? true : false;

                dotsType = slider.getAttribute('wppgpc-data-dotstype');

                setTimeout( function() {

                  const sliderIdNew = sliderItem.getAttribute('id');
                  let myNewTest = document.querySelector(`#${sliderIdNew}`);
                let sliderDots = myNewTest.querySelector('.wppgpc-owl-dots');
                let dotBtns = sliderDots.querySelectorAll('button');

                if( slider.getAttribute('wppgpc-data-dots') === 'yes' ) {
                  sliderDots.classList.add('owlActive')
                }
                  
                if( dotsType == 'dots' ) {
                  sliderDots.classList.add('myActive');
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
   
          $(`#${sliderId} .wppgpc-owl.wppgpc-owl-carousel`).owlCarousel({
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

          const allSliderItem = document.querySelectorAll('.wppgpc-slider-common')
          for(let item of allSliderItem){
          sliderAllWrapper(item)
          }
      }
    );
  });
})(jQuery);








