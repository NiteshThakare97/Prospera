


(function ($) {
	"use strict";
	$(window).on("elementor/frontend/init", function () {
	  elementorFrontend.hooks.addAction(
		"frontend/element_ready/bwdci-circle-info.default",
		function(){

			function circle_info(circleItem) {

				let bgImg = circleItem.querySelectorAll(".bwdci-ep-circle-info-sub-circle:first-child");
				bgImg.forEach( function( allWrapppItem ){
				  allWrapppItem.classList.add('active');
				});
			
				let bgImgg = circleItem.querySelectorAll(".bwdci-ep-circle-info-item:first-child");
				bgImgg.forEach( function( allWrapppItem ){
				  allWrapppItem.classList.add('active');
				});


				var circles = circleItem.querySelectorAll('.bwdci-ep-circle-info-sub-circle');
			
				var parent_box = circleItem.querySelector('.bwdci-ep-circle-info-inner');
				var item_box = circleItem.querySelectorAll('.bwdci-ep-circle-info-item');
			
				var parent = parent_box.getBoundingClientRect();
				var centerX = 0;
				var centerY = 0;
			
				Array.from(circles).reverse().forEach(function (circle, index) {
					var circle = circle;
					var index = index;
					var angle = index * (360 / circles.length);
					var x = centerX + (parent.width / 2) * Math.cos((angle * Math.PI) / 180);
					var y = centerY + (parent.height / 2) * Math.sin((angle * Math.PI) / 180);
					circle.style.transform = 'translate3d(' + parseFloat(x).toFixed(5) + 'px,' + parseFloat(y).toFixed(5) + 'px,0)';
				});
			
				for (var i = 0; i < circles.length ; i++) {
				  var myValue = i;
				  circles[i].setAttribute("data-value" , myValue);
				};
				for (var i = 0; i < item_box.length ; i++) {
				  var myValue = i;
				  item_box[i].setAttribute("data-filter" , myValue);
				};


				let mouse_event = circleItem.querySelector('.bwdci-mouseevent');
				let mouse_event_value = mouse_event.getAttribute('bwdci-mouse-event');
			
				circles.forEach(function (circleItem) {
				 
				  circleItem.addEventListener( mouse_event_value, function(){
			
					circles.forEach(function(circleItemmm){
					  circleItemmm.classList.remove('active');
					})
					this.classList.add('active');
			
					const dataValue = circleItem.getAttribute('data-value');
					
					item_box.forEach(function(singleItem){
			
					  const dataFilter = singleItem.getAttribute('data-filter');
					  
					  if( dataValue === dataFilter ) {
						singleItem.classList.add('active');
					  }else {
						singleItem.classList.remove('active');
					  }
			
					})
			
				  })
				  
				});
				
			
			
			}
			const allSliderItem = document.querySelectorAll('.bwdci-style-common')
			for(let item of allSliderItem){
				circle_info(item)
			}
			
		});
	});
  })(jQuery);



