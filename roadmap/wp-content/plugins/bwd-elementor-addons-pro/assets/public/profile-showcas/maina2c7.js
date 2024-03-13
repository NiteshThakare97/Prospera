
"use strict";

(function ($, w) {

	var $window = $(w);
	$(function () {
		function log(event, item, level) {
			$(document).on(event, item, level);
		}
	}),


	$window.on("elementor/frontend/init", function (){

		// function circle_info(circleItem) {

			
		
		// }

		// let allBtn = document.querySelectorAll('.bwdsypx-profile-card-17-area .bwdsypx-profile-card-add');
		// 	let allBtnWrapper = document.querySelectorAll('.bwdsypx-profile-card-17-area .bwdsypx-profile-card-item');


			// allBtn.addEventListener('click', function(){
			// 	console.log(allBtn);
			// 	console.log(allBtnWrapper);
			// 	allBtnWrapper.classList.toggle('bwdsypx-profile-card-on');
			// });

			// allBtn.forEach(function(allBtn){
			// 	allBtn.addEventListener('click', function(){
			// 		allBtnWrapper.forEach(function(allBtnW){
			// 			allBtnW.classList.toggle('bwdsypx-profile-card-on');
			// 		})
			// 	})
			// });

		// const allSliderItem = document.querySelectorAll('.bwdsypx-profile-card-17-area')
		// for(let item of allSliderItem){
		// 	circle_info(item)
		// }


		function contentToggle(){
			const allBtn = document.querySelectorAll('.bwdsypx-profile-card-17-area .bwdsypx-profile-card-add');
			const allBtnWrapper = document.querySelectorAll('.bwdsypx-profile-card-17-area .bwdsypx-profile-card-item');
			console.log(allBtnWrapper);
			for(let i = 0; i< allBtn.length; i++){
				allBtn[i].addEventListener('click',()=>{
					allBtnWrapper[i].classList.toggle('bwdsypx-profile-card-on')
				})
			}
		}
		
		contentToggle();

		var bwdsypx_SliderBase = elementorModules.frontend.handlers.Base.extend({

			onInit: function onInit() {
				elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
				this.run();
			},
			getDefaultSettings: function getDefaultSettings() {
			return {
				selectors: {
				container: ".bwdsypx-mySwiper"
				}
			};
			},
			getDefaultElements: function getDefaultElements() {
			var selectors = this.getSettings("selectors");
			return {
				$container: this.$element.find(selectors.container)
			};
			},
			getReadySettings: function getReadySettings(){

	
				var settings = {
					loop: !!(this.getElementSettings("bwdsypx_loop_switcher") || false),
					slideShadows: !!(this.getElementSettings("bwdsypx_coverflow_shadow_switcher") || false),
					effect: this.getElementSettings("bwdsypx_slider_effects"),
					sliderType: this.getElementSettings("bwdsypx_slider_type"),
					direction: this.getElementSettings("bwdsypx_slider_direction"),
					mousewheel: (this.getElementSettings("bwdsypx_mousewheel") || false),
					speed: this.getElementSettings("bwdsypx_slide_speed"),
					spaceBetween: parseInt(this.getElementSettings("bwdsypx_desk_Space")) || 0,
					spaceBetween: parseInt(this.getElementSettings("bwdsypx_tablet_space")) || 0,
					spaceBetween: parseInt(this.getElementSettings("bwdsypx_mobile_space")) || 0,
				};
	
				if (this.getElementSettings("bwdsypx_autoslide_switcher") == "yes") {
					settings.autoplay = {
					delay: this.getElementSettings("bwdsypx_slider_autoplay_speed"),
					disableOnInteraction: false,
					stopOnLastSlide: !(this.getElementSettings("bwdsypx_loop_switcher") || false)
					};
				};

				if (this.getElementSettings("bwdsypx_arrow_switcher") == "yes") {
					var selectorNext = this.elements.$container.find(".bwdsypx-swiper-next");
					var selectorPrev = this.elements.$container.find(".bwdsypx-swiper-prev");
					settings.navigation = {
					  nextEl: selectorNext[0],
					  prevEl: selectorPrev[0]
					};
				};

				if (this.getElementSettings("bwdsypx_slider_effects") == "coverflow") {
					settings.coverflowEffect = {
						rotate: parseInt(this.getElementSettings("bwdsypx_coverflow_rotate")),
						stretch: 0,
						depth: parseInt(this.getElementSettings("bwdsypx_coverflow_depth")),
						modifier: parseInt(this.getElementSettings("bwdsypx_coverflow_modifier")),
						slideShadows: (this.getElementSettings("bwdsypx_coverflow_shadow_switcher") || false),
					};
				};

				if (this.getElementSettings("bwdsypx_slider_effects") == "cube"){
					settings.cubeEffect = {
						shadow: (this.getElementSettings("bwdsypx_cube_shadow_switcher") || false),
						slideShadows: (this.getElementSettings("bwdsypx_cube_slide_shadow_switcher") || false),
						shadowOffset: parseInt(this.getElementSettings("bwdsypx_cube_shadow_offset")),
						shadowScale: 0.94,
					};
				};

				if (this.getElementSettings("bwdsypx_slider_effects") == "creative"){
					settings.creativeEffect = {
						prev: {
							shadow: true,
							translate: [0, 0, -600],
						},
						next: {
							translate: ["100%", 0, 0],
						},
					};
				};

				if (this.getElementSettings("bwdsypx_popover_responsive_device") == "yes"){
					settings.breakpoints = {
						0: {
							slidesPerView:  parseInt(this.getElementSettings("bwdsypx_slide_mobile_view")),
							spaceBetween: parseInt(this.getElementSettings("bwdsypx_mobile_space")) || 0,
						},
						768: {
							slidesPerView: parseInt(this.getElementSettings("bwdsypx_slide_tablet_view")),
							spaceBetween: parseInt(this.getElementSettings("bwdsypx_tablet_space")) || 0,
						},
						1025: {
							slidesPerView: parseInt(this.getElementSettings("bwdsypx_slide_desktop_view")),
							spaceBetween: parseInt(this.getElementSettings("bwdsypx_desk_Space")) || 0,
						}
					};
				};

				if (this.getElementSettings("bwdsypx_scroll_bar") == "yes") {
					var selectorScroll = this.elements.$container.find(".bwdsypx-swiper-scrollbar");
					settings.scrollbar = {
					  el: selectorScroll[0],
					  hide: this.getElementSettings("bwdsypx_scroll_visibility") == "true",
					  draggable: true
					};
				};

				if (this.getElementSettings("bwdsypx_slide_pagination") == "yes") {
					var pagination_type = this.getElementSettings("bwdsypx_pagination_type");

					if ( pagination_type == "bullets" || pagination_type == "progressbar" || pagination_type == "fraction" ){
						var selectorPagi = this.elements.$container.find(".bwdsypx-swiper-pagination");
						settings.pagination = {
							el: selectorPagi[0],
							clickable: true,
							type: this.getElementSettings("bwdsypx_pagination_type"),
						};
					}
					else if(pagination_type == "numbers"){
						var selectorPagi = this.elements.$container.find(".bwdsypx-swiper-pagination");
						settings.pagination = {
							el: selectorPagi[0],
							clickable: true,
							type: "bullets",
							renderBullet: function renderBullet(index, className) {
							return '<span class="' + className + '">' + (index + 1) + "</span>";
							},
						}
	
					};
				};

	
			return $.extend({}, settings);
			},
			run: function run() {
				var elContainer = this.elements.$container;
				var slider = elContainer.find(".bwdsypx-mySwiper");
				var readySettings = this.getReadySettings();
				var sliderObj = new BwdsypxSwiper(slider[0], readySettings);


	
			}
		});
	
		elementorFrontend.hooks.addAction("frontend/element_ready/bwdsypx-showcase-your-profile.default", function ($scope) {
			elementorFrontend.elementsHandler.addHandler(bwdsypx_SliderBase, {
			$element: $scope,
			selectors: {
				container: ".bwdsypx-profile-card-common-area"
			}
			});
		});
	});


})(jQuery, window);


