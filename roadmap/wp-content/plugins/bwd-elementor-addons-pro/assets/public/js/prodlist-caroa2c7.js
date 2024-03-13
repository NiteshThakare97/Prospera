

(function ($) {
  "use strict";
  $(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/CreativeProductsListcarousel.default",
      function(){



          function sliderAllWrapper(sliderItem){
            let sliderAttrs =sliderItem.querySelector('.bwdcrtplst-for-all-owlCarousel');
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

                margin = parseInt(slider.getAttribute('bwdcrtplst-data-margin'));
                desktop = parseInt(slider.getAttribute('bwdcrtplst-data-desktop'));

                tablet = parseInt(slider.getAttribute('bwdcrtplst-data-tablet'));

                mobile = parseInt(slider.getAttribute('bwdcrtplst-data-mobile'));

                autoplay = slider.getAttribute('bwdcrtplst-data-autoplay') === 'yes' ? true : false;

                loop = slider.getAttribute('bwdcrtplst-data-loop') === 'yes' ? true : false;

                autoplayHoverPause = slider.getAttribute('bwdcrtplst-data-hoverpause') === 'yes' ? true : false;

                center = slider.getAttribute('bwdcrtplst-data-centermode') === 'yes' ? true : false;

                autoplayTimeout = parseInt(slider.getAttribute('bwdcrtplst-data-timeout'));

                autoplaySpeed = parseInt(slider.getAttribute('bwdcrtplst-data-autospeed'));

                stagePadding = parseInt(slider.getAttribute('bwdcrtplst-data-stagepadding'));

                //nav-arrow
                nav = slider.getAttribute('bwdcrtplst-data-navigations') === 'yes' ? true : false;

                setTimeout( function() {

                  const sliderIdNew = sliderItem.getAttribute('id');
                  let myNewTest = document.querySelector(`#${sliderIdNew}`);
                  let myOwlNavNew = myNewTest.querySelector( '.bwdcrtplst-owl-nav' );

                  if( slider.getAttribute('bwdcrtplst-data-navigations') === 'yes' ) {
                    myOwlNavNew.classList.add('owlActive')
                  }

                }, 500)

                navType = slider.getAttribute('bwdcrtplst-data-navtype');
                
                if( navType === 'icon' ) {
                  navText = [
                    `<i class="${slider.getAttribute('bwdcrtplst-data-navprev')}"></i>`,
                    `<i class="${slider.getAttribute('bwdcrtplst-data-navnext')}"></i>`
                  ]
                } else {
                  navText = [
                    `<span>${slider.getAttribute('bwdcrtplst-data-navprev')}</span>`, 
                    `<span>${slider.getAttribute('bwdcrtplst-data-navnext')}</span>`
                  ]
                }

                //dots
                dots = slider.getAttribute('bwdcrtplst-data-dots') === 'yes' ? true : false;

                dotsType = slider.getAttribute('bwdcrtplst-data-dotstype');

                setTimeout( function() {

                  const sliderIdNew = sliderItem.getAttribute('id');
                  let myNewTest = document.querySelector(`#${sliderIdNew}`);
                let sliderDots = myNewTest.querySelector('.bwdcrtplst-owl-dots');
                let dotBtns = sliderDots.querySelectorAll('button');

                if( slider.getAttribute('bwdcrtplst-data-dots') === 'yes' ) {
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
   
          $(`#${sliderId} .bwdcrtplst-owl.bwdcrtplst-owl-carousel`).owlCarouselbwdcrtplst({
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

          const allSliderItem = document.querySelectorAll('.bwdcrtplst-slider-common')
          for(let item of allSliderItem){
          sliderAllWrapper(item)
          }
          
      }
    );
  });
})(jQuery);








