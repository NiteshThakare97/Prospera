"use strict";

(function ($)
 {
  $(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction("frontend/element_ready/bwbcod-coupon-code.default",
      function () {


		// ####----1
		let coupon_code = document.querySelector (" .bwdcd-coupon-code-1-area .bwdcd-coupon-code");

		if(coupon_code){
			let coupon_code_btn = document.querySelector (".bwdcd-coupon-code-btn");

			coupon_code_btn.addEventListener('click', function () {
				navigator.clipboard.writeText(coupon_code.innerHTML);
				coupon_code_btn.innerHTML = "COPIED!";
	
				setTimeout( function () {
					coupon_code_btn.innerHTML = "COPY CODE";
				}, 1500);
			});
		}


		// // ####----2
		const coupon2_code = document.querySelector(".bwdcd-coupon-code-2-area .bwdcd-coupon-code");
		
		if(coupon2_code){
			const coupon2_btn = document.querySelector(".bwdcd-coupon-code-2-area #coupon-btn");

			coupon2_btn.addEventListener('click', function () {
				navigator.clipboard.writeText(coupon2_code.innerHTML);
				coupon2_btn.innerHTML = "COPIED!";
	
				setTimeout( function () {
					coupon2_btn.innerHTML = "COPY CODE";
				}, 1500);
			});
		}

		// // ####----3
		
		const bwdcd_code = document.querySelector('.bwdcd-coupon-code-3-area .bwdcd-coupon-code');

		if (bwdcd_code) {

			const bwdcd_code_btn = document.querySelector('.bwdcd-coupon-code-3-area .bwdcd-coupon-code-btn');
			bwdcd_code_btn.addEventListener("click", function(){
				navigator.clipboard.writeText(bwdcd_code.innerHTML);
				bwdcd_code_btn.innerHTML = "COPIED!";
				
				setTimeout(() => {
					bwdcd_code_btn.innerHTML= "COPY CODE";
				}, 2000);
			});	
		}
		

		// ####----4
		
		const coupon4_codes = document.querySelector('.bwdcd-coupon-code-4-area #coupon-btn');

		if (coupon4_codes) {
			const code4_btn = document.querySelector('.bwdcd-coupon-code-4-area .bwdcd-coupon-code-btn');

			code4_btn.addEventListener('click', function(){

				coupon4_codes.classList.add("active");

				navigator.clipboard.writeText(coupon4_codes.innerHTML);
				code4_btn.innerHTML = "COPIED!";

				setTimeout(() => {
					code4_btn.innerHTML= "COPY CODE";
				}, 1800);

				setTimeout(() => {
					coupon4_codes.classList.remove("active");
				}, 1800);
			});
		}
		
		// ####----5
		const bwdcd_coupon_item = document.querySelector('.bwdcd-coupon-code-5-area .bwdcd-coupon-code-wrapper');
		if (bwdcd_coupon_item) {
			const bwdcd_coupon_btn = document.querySelector('.bwdcd-coupon-code-5-area .bwdcd-coupon-code-btn');
			bwdcd_coupon_btn.addEventListener('click', function(){
				bwdcd_coupon_item.classList.add("active");
				setTimeout( function () {
					bwdcd_coupon_item.classList.remove("active");
				}, 5000);
			});
		}

		
		// ####----6
		const bwdcd_btns = document.querySelector('.bwdcd-coupon-code-6-area .bwdcd-coupon-code');

		if(bwdcd_btns) {
			const coupon6_btn = document.querySelector('.bwdcd-coupon-code-6-area .bwdcd-coupon-code-btn');
			coupon6_btn.addEventListener('click', function () {
				navigator.clipboard.writeText(bwdcd_btns.innerHTML);
				coupon6_btn.innerHTML = "COPIED!";
			});
		}

		// // ####----7
		const coupon_7_code = document.querySelector('.bwdcd-coupon-code-7-area .bwdcd-coupon-code');
		if(coupon_7_code) {
			const coupon_7_btn = document.querySelector('.bwdcd-coupon-code-7-area #coupon-btn');
			coupon_7_btn.addEventListener('click', function(){
				coupon_7_code.classList.add('active');
				coupon_7_btn.classList.add('active');
				navigator.clipboard.writeText(coupon_7_code.innerHTML);

				setTimeout( function () {
					coupon_7_code.classList.remove('active');
					coupon_7_btn.classList.remove('active');
				}, 2500);
			});
		}

		// // ####----8
		window.addEventListener('click', modalboxhandler);

		function modalboxhandler(e) {
		    let coupon_8_modal_btn = document.querySelector('.bwdcd-coupon-code-8-area .bwdcd-coupon-modal-btn');
			let coupon_8_close = document.querySelector('.bwdcd-coupon-code-8-area .bwdcd-coupon-close');
			
		    let  coupon_8_modal = document.querySelector('.bwdcd-coupon-code-8-area .bwdcd-coupon-modal');

		    if (coupon_8_modal_btn === e.target) {
		        coupon_8_modal.classList.add('show');
		    } else if (coupon_8_close === e.target || coupon_8_modal === e.target) {
		        coupon_8_modal.classList.remove('show');
		    }
		};

		let coupon_8_coupon_code = document.querySelector (".bwdcd-coupon-code-8-area .bwdcd-coupon-code");
		if (coupon_8_coupon_code) {
			let coupon_8_code_btn = document.querySelector (".bwdcd-coupon-code-8-area .bwdcd-coupon-code-btn");

			coupon_8_code_btn.onclick = function () {
				navigator.clipboard.writeText(coupon_8_coupon_code.innerHTML);
				coupon_8_code_btn.innerHTML = "COPIED!";

				setTimeout( function () {
					coupon_8_code_btn.innerHTML = "COPY CODE";
				}, 1000);
			};
		}

		// // ####----9

		window.addEventListener('click', cuponmodalbox);

		function cuponmodalbox(e) {
		    let coupon_9_modal_btn = document.querySelector('.bwdcd-coupon-code-9-area .bwdcd-coupon-modal-btn');
			let coupon_9_close = document.querySelector('.bwdcd-coupon-code-9-area .bwdcd-coupon-close');
			
		    let  coupon_9_modal = document.querySelector('.bwdcd-coupon-code-9-area .bwdcd-coupon-modal');

		    if (coupon_9_modal_btn === e.target) {
		        coupon_9_modal.classList.add('show');
		    } else if (coupon_9_close === e.target || coupon_9_modal === e.target) {
		        coupon_9_modal.classList.remove('show');
		    }
		};

		let coupon_9_coupon_code = document.querySelector (".bwdcd-coupon-code-9-area .bwdcd-coupon-code");
		if (coupon_9_coupon_code) {
			let coupon_9_code_btn = document.querySelector (".bwdcd-coupon-code-9-area .bwdcd-coupon-code-btn");

			coupon_9_code_btn.onclick = function () {
				navigator.clipboard.writeText(coupon_9_coupon_code.innerHTML);
				coupon_9_code_btn.innerHTML = "COPIED!";

				setTimeout( function () {
					coupon_9_code_btn.innerHTML = "COPY CODE";
				}, 1000);
			};
		}

		// ####----10
		window.addEventListener('click', codemodalbox);

		function codemodalbox(e) {
		    let coupon_10_modal_btn = document.querySelector('.bwdcd-coupon-code-10-area .bwdcd-coupon-modal-btn');
			let coupon_10_close = document.querySelector('.bwdcd-coupon-code-10-area .bwdcd-coupon-close');
			
		    let  coupon_10_modal = document.querySelector('.bwdcd-coupon-code-10-area .bwdcd-coupon-modal');

		    if (coupon_10_modal_btn === e.target) {
		        coupon_10_modal.classList.add('show');
		    } else if (coupon_10_close === e.target || coupon_10_modal === e.target) {
		        coupon_10_modal.classList.remove('show');
		    }
		};

		// // ####----11
		let coupon_11_code = document.querySelector (".bwdcd-coupon-code-11-area .bwdcd-coupon-code");
		if(coupon_11_code) {
			let coupon_11_code_btn = document.querySelector (".bwdcd-coupon-code-11-area .bwdcd-coupon-code-btn");

			coupon_11_code_btn.onclick = function () {
				navigator.clipboard.writeText(coupon_11_code.innerHTML);
				coupon_11_code_btn.innerHTML = "COPIED!";

				setTimeout( function () {
					coupon_11_code_btn.innerHTML = "COPY CODE";
				}, 2000);
			};
		}

		// // ####----12
		let coupon_12_code = document.querySelector (".bwdcd-coupon-code-12-area .bwdcd-coupon-code");

		if(coupon_12_code) {
			let coupon_12_code_btn = document.querySelector (".bwdcd-coupon-code-12-area .bwdcd-coupon-code-btn");

			coupon_12_code_btn.onclick = function () {
				navigator.clipboard.writeText(coupon_12_code.innerHTML);
				coupon_12_code_btn.innerHTML = 'COPIED !';
				setTimeout( function () {
					coupon_12_code_btn.innerHTML = "COPY CODE";
				}, 2000);
			};
		}

		// // ####----13
		let coupon_13_code = document.querySelector (".bwdcd-coupon-code-13-area .bwdcd-coupon-code");
		if(coupon_13_code) {
			let coupon_13_code_btn = document.querySelector (".bwdcd-coupon-code-13-area .bwdcd-coupon-code-btn");

			coupon_13_code_btn.onclick = function () {
				navigator.clipboard.writeText(coupon_13_code.innerHTML);
				coupon_13_code_btn.innerHTML = "COPIED!";

			};
		}

		// ####----14
		let coupon_14_coupon_code = document.querySelector (".bwdcd-coupon-code-14-area .bwdcd-coupon-code");
		if (coupon_14_coupon_code) {
			let coupon_14_code_btn = document.querySelector (".bwdcd-coupon-code-14-area .bwdcd-coupon-code-btn");

			coupon_14_code_btn.onclick = function () {
				navigator.clipboard.writeText(coupon_14_coupon_code.innerHTML);
				coupon_14_code_btn.innerHTML = "COPIED!";
			};
		}

		// ####----15
		let coupon_15_coupon_code = document.querySelector (".bwdcd-coupon-code-15-area .bwdcd-coupon-code");
		if (coupon_15_coupon_code) {
			let coupon_15_code_btn = document.querySelector (".bwdcd-coupon-code-15-area .bwdcd-coupon-code-btn");

			coupon_15_code_btn.onclick = function () {
				navigator.clipboard.writeText(coupon_15_coupon_code.innerHTML);
				coupon_15_code_btn.innerHTML = "COPIED!";

				setTimeout( function () {
					coupon_15_code_btn.innerHTML = "COPY CODE";
				}, 1000);
			};
		}

		// // ####----16
		let coupon_16_coupon_code = document.querySelector (".bwdcd-coupon-code-16-area .bwdcd-coupon-code");
		if (coupon_16_coupon_code) {
			let coupon_16_code_btn = document.querySelector (".bwdcd-coupon-code-16-area .bwdcd-coupon-code-btn");

			coupon_16_code_btn.onclick = function () {
				navigator.clipboard.writeText(coupon_16_coupon_code.innerHTML);
				coupon_16_code_btn.innerHTML = "COPIED!";
			};
		}

      }
    );
  });


})(jQuery);
