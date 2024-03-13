


(function ($) {
	"use strict";
	$(window).on("elementor/frontend/init", function () {
	  elementorFrontend.hooks.addAction(
		"frontend/element_ready/bwdcp-catproduct.default",
		function(){
  
			//carousel
			function sliderAllWrapper(sliderItem){
			  let sliderAttrs =sliderItem.querySelector('.bwdcp-for-all-owlCarousel')
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
  
				  margin = parseInt(slider.getAttribute('bwdcp-data-margin'));
				  desktop = parseInt(slider.getAttribute('bwdcp-data-desktop'));
  
				  tablet = parseInt(slider.getAttribute('bwdcp-data-tablet'));
  
				  mobile = parseInt(slider.getAttribute('bwdcp-data-mobile'));
  
				  autoplay = slider.getAttribute('bwdcp-data-autoplay') === 'yes' ? true : false;
  
				  loop = slider.getAttribute('bwdcp-data-loop') === 'yes' ? true : false;
  
				  autoplayHoverPause = slider.getAttribute('bwdcp-data-hoverpause') === 'yes' ? true : false;
  
				  center = slider.getAttribute('bwdcp-data-centermode') === 'yes' ? true : false;
  
				  autoplayTimeout = parseInt(slider.getAttribute('bwdcp-data-timeout'));
  
				  autoplaySpeed = parseInt(slider.getAttribute('bwdcp-data-autospeed'));
  
				  stagePadding = parseInt(slider.getAttribute('bwdcp-data-stagepadding'));
  
				  //nav-arrow
				  nav = slider.getAttribute('bwdcp-data-navigations') === 'yes' ? true : false;
  
				  setTimeout( function() {
  
					const sliderIdNew = sliderItem.getAttribute('id');
					let myNewTest = document.querySelector(`#${sliderIdNew}`);
					let myOwlNavNew = myNewTest.querySelector( '.bwdcp-owl-nav' );
  
					if( slider.getAttribute('bwdcp-data-navigations') === 'yes' ) {
					  myOwlNavNew.classList.add('owlActive')
					}
  
				  }, 500)
  
				  navType = slider.getAttribute('bwdcp-data-navtype');
				  
				  if( navType === 'icon' ) {
					navText = [
					  `<i class="${slider.getAttribute('bwdcp-data-navprev')}"></i>`,
					  `<i class="${slider.getAttribute('bwdcp-data-navnext')}"></i>`
					]
				  } else {
					navText = [
					  `<span>${slider.getAttribute('bwdcp-data-navprev')}</span>`, 
					  `<span>${slider.getAttribute('bwdcp-data-navnext')}</span>`
					]
				  }
  
				  //dots
				  dots = slider.getAttribute('bwdcp-data-dots') === 'yes' ? true : false;
  
				  dotsType = slider.getAttribute('bwdcp-data-dotstype');
  
				  setTimeout( function() {
  
					const sliderIdNew = sliderItem.getAttribute('id');
					let myNewTest = document.querySelector(`#${sliderIdNew}`);
				  let sliderDots = myNewTest.querySelector('.bwdcp-owl-dots');
				  let dotBtns = sliderDots.querySelectorAll('button');
  
				  if( slider.getAttribute('bwdcp-data-dots') === 'yes' ) {
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
	 
			$(`#${sliderId} .bwdcp-owl.bwdcp-owl-carousel`).owlCarouselBWDCP({
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
			const allSliderItem = document.querySelectorAll('.bwdcp-slider-common')
			for(let item of allSliderItem){
			sliderAllWrapper(item)
			}
		}
	  );
	});
  })(jQuery);
  
  
  
  
  
  
  
  
  


