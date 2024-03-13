

(function ($) {
  "use strict";
  $(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/bwdbpc-blogpost-carousel.default",
      function(){



          function sliderAllWrapper(sliderItem){
            let sliderAttrs =sliderItem.querySelector('.bwdbpc-for-all-owlCarousel');
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

                margin = parseInt(slider.getAttribute('bwdbpc-data-margin'));
                desktop = parseInt(slider.getAttribute('bwdbpc-data-desktop'));

                tablet = parseInt(slider.getAttribute('bwdbpc-data-tablet'));

                mobile = parseInt(slider.getAttribute('bwdbpc-data-mobile'));

                autoplay = slider.getAttribute('bwdbpc-data-autoplay') === 'yes' ? true : false;

                loop = slider.getAttribute('bwdbpc-data-loop') === 'yes' ? true : false;

                autoplayHoverPause = slider.getAttribute('bwdbpc-data-hoverpause') === 'yes' ? true : false;

                center = slider.getAttribute('bwdbpc-data-centermode') === 'yes' ? true : false;

                autoplayTimeout = parseInt(slider.getAttribute('bwdbpc-data-timeout'));

                autoplaySpeed = parseInt(slider.getAttribute('bwdbpc-data-autospeed'));

                stagePadding = parseInt(slider.getAttribute('bwdbpc-data-stagepadding'));

                //nav-arrow
                nav = slider.getAttribute('bwdbpc-data-navigations') === 'yes' ? true : false;

                setTimeout( function() {

                  const sliderIdNew = sliderItem.getAttribute('id');
                  let myNewTest = document.querySelector(`#${sliderIdNew}`);
                  let myOwlNavNew = myNewTest.querySelector( '.bwdbpc-owl-nav' );

                  if( slider.getAttribute('bwdbpc-data-navigations') === 'yes' ) {
                    myOwlNavNew.classList.add('owlActive')
                  }

                }, 500)

                navType = slider.getAttribute('bwdbpc-data-navtype');
                
                if( navType === 'icon' ) {
                  navText = [
                    `<i class="${slider.getAttribute('bwdbpc-data-navprev')}"></i>`,
                    `<i class="${slider.getAttribute('bwdbpc-data-navnext')}"></i>`
                  ]
                } else {
                  navText = [
                    `<span>${slider.getAttribute('bwdbpc-data-navprev')}</span>`, 
                    `<span>${slider.getAttribute('bwdbpc-data-navnext')}</span>`
                  ]
                }

                //dots
                dots = slider.getAttribute('bwdbpc-data-dots') === 'yes' ? true : false;

                dotsType = slider.getAttribute('bwdbpc-data-dotstype');

                setTimeout( function() {

                  const sliderIdNew = sliderItem.getAttribute('id');
                  let myNewTest = document.querySelector(`#${sliderIdNew}`);
                let sliderDots = myNewTest.querySelector('.bwdbpc-owl-dots');
                let dotBtns = sliderDots.querySelectorAll('button');

                if( slider.getAttribute('bwdbpc-data-dots') === 'yes' ) {
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
   
          $(`#${sliderId} .bwdbpc-owl.bwdbpc-owl-carousel`).owlCarouselBWDBPC({
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

          const allSliderItem = document.querySelectorAll('.bwdbpc-slider-common')
          for(let item of allSliderItem){
          sliderAllWrapper(item)
          }
          
      }
    );
  });
})(jQuery);








