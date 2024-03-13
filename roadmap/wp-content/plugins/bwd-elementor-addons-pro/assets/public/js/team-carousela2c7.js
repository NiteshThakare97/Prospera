(function ($) {
    "use strict";
    $(window).on("elementor/frontend/init", function() {
        elementorFrontend.hooks.addAction("frontend/element_ready/bwdtmc-teammember-carousel.default", function($scope) {

            function sliderAllWrapper(sliderItem){
                let sliderAttrs =sliderItem.querySelector('.bwdtmc-for-all-owlCarousel');
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
    
                    margin = parseInt(slider.getAttribute('bwdtmc-data-margin'));
                    desktop = parseInt(slider.getAttribute('bwdtmc-data-desktop'));
    
                    tablet = parseInt(slider.getAttribute('bwdtmc-data-tablet'));
    
                    mobile = parseInt(slider.getAttribute('bwdtmc-data-mobile'));
    
                    autoplay = slider.getAttribute('bwdtmc-data-autoplay') === 'yes' ? true : false;
    
                    loop = slider.getAttribute('bwdtmc-data-loop') === 'yes' ? true : false;
    
                    autoplayHoverPause = slider.getAttribute('bwdtmc-data-hoverpause') === 'yes' ? true : false;
    
                    center = slider.getAttribute('bwdtmc-data-centermode') === 'yes' ? true : false;
    
                    autoplayTimeout = parseInt(slider.getAttribute('bwdtmc-data-timeout'));
    
                    autoplaySpeed = parseInt(slider.getAttribute('bwdtmc-data-autospeed'));
    
                    stagePadding = parseInt(slider.getAttribute('bwdtmc-data-stagepadding'));
    
                    //nav-arrow
                    nav = slider.getAttribute('bwdtmc-data-navigations') === 'yes' ? true : false;
    
                    setTimeout( function() {
    
                      const sliderIdNew = sliderItem.getAttribute('id');
                      let myNewTest = document.querySelector(`#${sliderIdNew}`);
                      let myOwlNavNew = myNewTest.querySelector( '.bwdtmc-owl-nav' );
    
                      if( slider.getAttribute('bwdtmc-data-navigations') === 'yes' ) {
                        myOwlNavNew.classList.add('owlActive')
                      }
    
                    }, 500)
    
                    navType = slider.getAttribute('bwdtmc-data-navtype');
                    
                    if( navType === 'icon' ) {
                      navText = [
                        `<i class="${slider.getAttribute('bwdtmc-data-navprev')}"></i>`,
                        `<i class="${slider.getAttribute('bwdtmc-data-navnext')}"></i>`
                      ]
                    } else {
                      navText = [
                        `<span>${slider.getAttribute('bwdtmc-data-navprev')}</span>`, 
                        `<span>${slider.getAttribute('bwdtmc-data-navnext')}</span>`
                      ]
                    }
    
                    //dots
                    dots = slider.getAttribute('bwdtmc-data-dots') === 'yes' ? true : false;
    
                    dotsType = slider.getAttribute('bwdtmc-data-dotstype');
    
                    setTimeout( function() {
    
                      const sliderIdNew = sliderItem.getAttribute('id');
                      let myNewTest = document.querySelector(`#${sliderIdNew}`);
                    let sliderDots = myNewTest.querySelector('.bwdtmc-owl-dots');
                    let dotBtns = sliderDots.querySelectorAll('button');
    
                    if( slider.getAttribute('bwdtmc-data-dots') === 'yes' ) {
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
       
              $(`#${sliderId} .bwdtmc-owl.bwdtmc-owl-carousel`).owlCarouselbwdtmc({
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
    
              const allSliderItem = document.querySelectorAll('.bwdtmc-slider-common')
              for(let item of allSliderItem){
              sliderAllWrapper(item)
              }
    
    });
    });
})(jQuery);