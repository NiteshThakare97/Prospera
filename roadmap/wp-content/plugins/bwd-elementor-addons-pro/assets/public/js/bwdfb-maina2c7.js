

(function ($) {
  "use strict";
  $(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/bwdfb-flip-box-Carousel.default",
      function(){



          function sliderAllWrapper(sliderItem){
            let sliderAttrs =sliderItem.querySelector('.bwdfb-for-all-owlCarousel');
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

                margin = parseInt(slider.getAttribute('bwdfb-data-margin'));
                desktop = parseInt(slider.getAttribute('bwdfb-data-desktop'));

                tablet = parseInt(slider.getAttribute('bwdfb-data-tablet'));

                mobile = parseInt(slider.getAttribute('bwdfb-data-mobile'));

                autoplay = slider.getAttribute('bwdfb-data-autoplay') === 'yes' ? true : false;

                loop = slider.getAttribute('bwdfb-data-loop') === 'yes' ? true : false;

                autoplayHoverPause = slider.getAttribute('bwdfb-data-hoverpause') === 'yes' ? true : false;

                center = slider.getAttribute('bwdfb-data-centermode') === 'yes' ? true : false;

                autoplayTimeout = parseInt(slider.getAttribute('bwdfb-data-timeout'));

                autoplaySpeed = parseInt(slider.getAttribute('bwdfb-data-autospeed'));

                stagePadding = parseInt(slider.getAttribute('bwdfb-data-stagepadding'));

                //nav-arrow
                nav = slider.getAttribute('bwdfb-data-navigations') === 'yes' ? true : false;

                setTimeout( function() {

                  const sliderIdNew = sliderItem.getAttribute('id');
                  let myNewTest = document.querySelector(`#${sliderIdNew}`);
                  let myOwlNavNew = myNewTest.querySelector( '.bwdfb-owl-nav' );

                  if( slider.getAttribute('bwdfb-data-navigations') === 'yes' ) {
                    myOwlNavNew.classList.add('owlActive')
                  }

                }, 500)

                navType = slider.getAttribute('bwdfb-data-navtype');
                
                if( navType === 'icon' ) {
                  navText = [
                    `<i class="${slider.getAttribute('bwdfb-data-navprev')}"></i>`,
                    `<i class="${slider.getAttribute('bwdfb-data-navnext')}"></i>`
                  ]
                } else {
                  navText = [
                    `<span>${slider.getAttribute('bwdfb-data-navprev')}</span>`, 
                    `<span>${slider.getAttribute('bwdfb-data-navnext')}</span>`
                  ]
                }

                //dots
                dots = slider.getAttribute('bwdfb-data-dots') === 'yes' ? true : false;

                dotsType = slider.getAttribute('bwdfb-data-dotstype');

                setTimeout( function() {

                  const sliderIdNew = sliderItem.getAttribute('id');
                  let myNewTest = document.querySelector(`#${sliderIdNew}`);
                let sliderDots = myNewTest.querySelector('.bwdfb-owl-dots');
                let dotBtns = sliderDots.querySelectorAll('button');

                if( slider.getAttribute('bwdfb-data-dots') === 'yes' ) {
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
   
          $(`#${sliderId} .bwdfb-owl.bwdfb-owl-carousel`).owlCarouselbwdfb({
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

          const allSliderItem = document.querySelectorAll('.bwdfb-slider-common')
          for(let item of allSliderItem){
          sliderAllWrapper(item)
          }
          
      }
    );
  });
})(jQuery);








