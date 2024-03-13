


(function ($) {
	"use strict";
	$(window).on("elementor/frontend/init", function () {
	  elementorFrontend.hooks.addAction(
		"frontend/element_ready/bwdimximagemarquee.default",
		function(){

			function circle_info(circleItem) {

				let pass_value =circleItem.querySelector('.bwdimx-variable');

				let wrap = circleItem.querySelectorAll('.bwdimx-logo-wrapper');
				let holder = circleItem.querySelectorAll('.bwdimx_logo_marquee_holder');
				let single_marquee = circleItem.querySelectorAll('.bwdimx_marquee');


				function cloneSlider() {
					// holder.forEach(function(item){
					// const clonedDiv = item.cloneNode(true);
					// wrap.forEach(function(wrapp){
					// 	wrapp.appendChild(clonedDiv);
					// })
					// });

					wrap.forEach(itemm => {
						var parent = itemm
						holder.forEach(item => {
							parent.appendChild(item.cloneNode(true))
						})
					  })
				}
				// function cloneSliderr() {
				// 	wrap.forEach(itemm => {
				// 		var parent = itemm
				// 		holder.forEach(item => {
				// 			parent.appendChild(item.cloneNode(true))
				// 		})
				// 	  })
				// }

				

				function setWidth() {

					single_marquee.forEach( function(parentItem){

						var parentWidth = parentItem.offsetWidth;
						var viewportWidth = parseInt(screen.width);

						//attribute
						let direction = pass_value.getAttribute('bwdimx-direction');
						let dataItemsNumberMobile = Number(pass_value.getAttribute('bwdimx-res-mobile'));
						let dataItemsNumberTablet = Number(pass_value.getAttribute('bwdimx-res-tablet'));
						let dataItemsNumberDesktop = Number(pass_value.getAttribute('bwdimx-res-desktop'));
						let dataMargin = Number(pass_value.getAttribute('bwdimx-gap'));
						var dataHeight = Number(pass_value.getAttribute('bwdimx-height'));
						

						var isBreakPoint = function (breakpoint) {
							var breakpointsArray = [767, 1024, 1920];
							var breakpointsArrayLength = breakpointsArray.length;
							var min, max;
							
							for (var i = 0; i < breakpointsArrayLength; i++) {
							  if (breakpointsArray[i] === breakpoint) {
								min = breakpointsArray[i-1] || 0
								max = breakpointsArray[i]
								break
							  }
							}
							return viewportWidth > min && viewportWidth <= max
						}

						if (direction == 'dirup' || direction == 'dirdown'){
        
							if (isBreakPoint(767))
						       parentItem.style.height = (dataHeight + dataMargin) * dataItemsNumberMobile + 'px';
					
							if (isBreakPoint(1024))
							   parentItem.style.height = (dataHeight + dataMargin) * dataItemsNumberTablet + 'px';
							
							if (isBreakPoint(1920) || viewportWidth > 1920 )
							   parentItem.style.height = (dataHeight + dataMargin) * dataItemsNumberDesktop + 'px';
						}

						holder.forEach(function(item){

							if(direction == 'dirright' || direction == 'dirleft')
							item.style.marginRight = dataMargin + 'px';
							
							if(direction == 'dirup' || direction == 'dirdown')
							item.style.marginTop = dataMargin + 'px';

							if(direction == 'dirright' || direction == 'dirleft' ){
          
								if (isBreakPoint(767)) 
								item.style.width = (parentWidth / dataItemsNumberMobile) - dataMargin + 'px';
								
								if (isBreakPoint(1024)) 
								item.style.width = (parentWidth / dataItemsNumberTablet) - dataMargin + 'px';
								
								if (isBreakPoint(1920) || (viewportWidth > 1920)) 
								item.style.width = (parentWidth / dataItemsNumberDesktop) - dataMargin + 'px';
							}
						})

						
					})

				}

				function setAnimationOptions() {

					single_marquee.forEach(function(item){
						let dataItemsSpeed = Number(pass_value.getAttribute('bwdimx-speed'));
						let marqueeList = item.children[0];
						let slidesAmount = marqueeList.children.length / 3;
						let marqueeSpeed = dataItemsSpeed * slidesAmount;
						marqueeList.style.animationDuration = marqueeSpeed / 1000 + 's';
						marqueeList.style.WebkitAnimationDuration = marqueeSpeed / 1000 + 's';
					})

				}

				function init() {

					
					setWidth();
					setAnimationOptions();
					cloneSlider();
					cloneSlider();
					cloneSlider();
					//cloneSliderr();
					
					var width = screen.width;
					
					window.addEventListener('resize', function() {
				
					  if (this.width != width) {
						
						width = this.width;
						
						setWidth();
						
					  }
				
					})
				}
				  
				init();


				
			
			
			}

			const allSliderItem = document.querySelectorAll('.bwdimx-style-common')
			for(let item of allSliderItem){
				circle_info(item)
			}
			
		});
	});
})(jQuery);


























