


(function ($) {
	"use strict";
	$(window).on("elementor/frontend/init", function () {
	  elementorFrontend.hooks.addAction(
		"frontend/element_ready/bwdctc-clicktocall.default",
		function(){
  

			function sliderAllWrapper(item) {

				let callButton = item.querySelector('.bwdctc-call-button');
				let showBttn = item.querySelector('.bwdctc_show-bttn');
				let closeBttn = item.querySelector('.bwdctc_close-bttn');
				let overlay = item.querySelector('.bwdctc-overlay');
				let agentBox = item.querySelector('.bwdctc-agent-box');
				let callText = item.querySelector('.bwdctc-call-text');
				
				callButton.addEventListener( 'click', function() {
		
					this.classList.toggle('show-call-button');
					showBttn.classList.toggle('show-btn-hide');
					closeBttn.classList.toggle('close-btn-show');
					overlay.classList.toggle('show-overlay');
					agentBox.classList.toggle('show-agent-box');
					callText.classList.toggle('show-call-text');
		
				});
		
		
				document.addEventListener('click', function(e) {
		
					const clickNavArea = overlay.contains(e.target);
					
						if( clickNavArea ) {
							callButton.classList.remove('show-call-button');
							showBttn.classList.remove('show-btn-hide');
							closeBttn.classList.remove('close-btn-show');
							overlay.classList.remove('show-overlay');
							agentBox.classList.remove('show-agent-box');
							callText.classList.remove('show-call-text');
						}
				});
			}
			
			const allSliderItem = document.querySelectorAll('.bwdctc-common-class')
			for(let item of allSliderItem){
				sliderAllWrapper(item)
			}


		});
	});
  })(jQuery);



