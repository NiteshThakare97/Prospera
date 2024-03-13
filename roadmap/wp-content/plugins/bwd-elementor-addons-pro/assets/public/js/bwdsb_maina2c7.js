


(function ($) {
	"use strict";
	$(window).on("elementor/frontend/init", function () {
	  elementorFrontend.hooks.addAction(
		"frontend/element_ready/bwdsb-switchbackground.default",
		function(){

			function bgSwitch(switchItem) {

				let bgImg = switchItem.querySelectorAll(".content-wrappersss:first-child");
				bgImg.forEach( function( allWrapppItem ){
				  allWrapppItem.classList.add('active');
				});

				//let eventChange = 'mouseenter';
				let mouse_event = switchItem.querySelector('.bwdsb-mouseevent');
				let mouse_event_value = mouse_event.getAttribute('bwdsb-mouse-event');
				console.log(mouse_event_value);

				let wrapItem = switchItem.querySelectorAll(".content-wrappersss");
				wrapItem.forEach( function( allWrapItem ) {
				  allWrapItem.addEventListener( mouse_event_value, function(e){
					wrapItem.forEach( function(allwrapItemmm) {
					  allwrapItemmm.classList.remove('active')
				  })
				  this.classList.add('active');
			
				  });
				})
			  }
			const allSliderItem = document.querySelectorAll('.bwdsb-style-common')
				for(let item of allSliderItem){
				bgSwitch(item)
				}
		});
	});
  })(jQuery);



