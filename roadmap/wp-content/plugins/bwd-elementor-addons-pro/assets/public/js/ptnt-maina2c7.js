



(function ($) {
    "use strict";
    $(window).on("elementor/frontend/init", function () {
      elementorFrontend.hooks.addAction(
        "frontend/element_ready/ptnticker-newsticker.default",
        function(){
  
  
  
            function sliderAllWrapper(sliderItem){
              let sliderAttrs =sliderItem.querySelector('.ptnticker-for-all-owlCarousel');
                let slider = sliderAttrs;
                let autoplay = false;
                let loop = false;
                let autoplayHoverPause = false;
                let autoplayTimeout = null;
                let autoplaySpeed = null;
                let nav = false;
                let navText = null;
                let navType = '';
                let effects = '';
                let mobile = null;
                let tablet = null;
                let desktop = null;
  
              const init = function() {

                desktop = parseInt(slider.getAttribute('ptnticker-data-desktop'));

                tablet = parseInt(slider.getAttribute('ptnticker-data-tablet'));

                mobile = parseInt(slider.getAttribute('ptnticker-data-mobile'));

                effects = slider.getAttribute('ptnticker-data-effects');
  
                  autoplay = slider.getAttribute('ptnticker-data-autoplay') === 'yes' ? true : false;
  
                  loop = slider.getAttribute('ptnticker-data-loop') === 'yes' ? true : false;
  
                  autoplayHoverPause = slider.getAttribute('ptnticker-data-hoverpause') === 'yes' ? true : false;
  
                  autoplayTimeout = parseInt(slider.getAttribute('ptnticker-data-timeout'));
  
                  autoplaySpeed = parseInt(slider.getAttribute('ptnticker-data-autospeed'));
  
                  //nav-arrow
                  nav = slider.getAttribute('ptnticker-data-navigations') === 'yes' ? true : false;
  
                  setTimeout( function() {
  
                    const sliderIdNew = sliderItem.getAttribute('id');
                    let myNewTest = document.querySelector(`#${sliderIdNew}`);
                    let myOwlNavNew = myNewTest.querySelector( '.owl-nav' );
  
                    if( slider.getAttribute('ptnticker-data-navigations') === 'yes' ) {
                      myOwlNavNew.classList.add('owlActive')
                    }
  
                  }, 500)
  
                  navType = slider.getAttribute('ptnticker-data-navtype');
                  
                  if( navType === 'icon' ) {
                    navText = [
                      `<i class="${slider.getAttribute('ptnticker-data-navprev')}"></i>`,
                      `<i class="${slider.getAttribute('ptnticker-data-navnext')}"></i>`
                    ]
                  }
            }
            init();
  
            const sliderId = sliderItem.getAttribute('id');
     
            $(`#${sliderId} .ptnticker-owl.owl-carousel`).owlCarouselPTNTICKER({
                animateIn: effects,
                loop:loop,
                autoplay: autoplay,
                autoplayTimeout: autoplayTimeout,
                autoplaySpeed: autoplaySpeed,
                autoplayHoverPause: autoplayHoverPause,
                nav: nav,
                navText: [ navText[0], navText[1] ],
                dots: false,
                items: 1,
                responsive:{
                    0:{
                        items:mobile,
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
  
            const allSliderItem = document.querySelectorAll('.ptnticker-ticker-common')
            for(let item of allSliderItem){
            sliderAllWrapper(item)
            }
            
        }
      );
    });
  })(jQuery);
  
  
  
  
  
  
  
  
  