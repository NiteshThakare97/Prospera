"use strict";
(() => {

	function filteringGallery(imgGallery) {
		// tooltip
		function toolTip() {
		  const allItems = imgGallery.querySelectorAll(".bwdlc-brand-box-part");
		  for (let i = 0; i < allItems.length; i++) {
			let allTooltips = allItems[i].getAttribute("data-tooltip");
			let toolTipWrapper = document.createElement("div");
	
			toolTipWrapper.setAttribute("class", "tooltip-wrapper");
			toolTipWrapper.innerText = allTooltips;
			allItems[i].appendChild(toolTipWrapper);
		  }
		}
		const isEnableTooltip = imgGallery.getAttribute("data-tooltip-enable");
	
		if ("yes" === isEnableTooltip) {
		  toolTip();
		}
		// if it is filter item
		if (imgGallery.classList.contains("bwdlc-filter-common")) {
		  let filterBtns = imgGallery.querySelectorAll(
			".bwdlc-brand-menu .bwdlc-brand-menu-btn"
		  );
		  let galleryImg = imgGallery.querySelectorAll(
			".bwdlc-grid .bwdlc-grid-item"
		  );
	
		  let itemPadding = getComputedStyle(galleryImg[0], null).getPropertyValue(
			"padding"
		  );
		  for (let btn of filterBtns) {
			btn.addEventListener("click", () => {
			  (function addRemoveBtnActiveClass() {
				for (let btnItem of filterBtns) {
				  btnItem.classList.remove("active");
				}
				btn.classList.add("active");
			  })();
	
			  let filterValue = btn.getAttribute("data-filter");
			  (function checkingImgFiltering() {
				function addingImgActiveClass(addItem) {
				  addItem.style.padding = itemPadding;
				  addItem.classList.add("active");
				}
				for (let imgItem of galleryImg) {
				  // checking padding if img item has
	
				  if (filterValue == "*") {
					addingImgActiveClass(imgItem);
				  } else if (imgItem.classList.contains(filterValue)) {
					// removing img active class
					(function removingImgActiveClass() {
					  for (let imgSingleItem of galleryImg) {
						if (!imgSingleItem.classList.contains(filterValue)) {
						  imgSingleItem.style.padding = "0";
						  imgSingleItem.style.maxWidth = "0";
						  imgSingleItem.classList.remove("active");
						}
					  }
					})();
					addingImgActiveClass(imgItem);
				  }
				}
			  })();
			});
		  }
		}
	  }
	

	//all galleryFilter player
	const galleryFilterPlayer = () => {
	  let allgalleryFilterCommon = document.querySelectorAll(
		".bwdlc-brand-logo-common"
	  );
	  for (let item of allgalleryFilterCommon) {
		filteringGallery(item);
	  }
	};
  
	// editMode active or not
	let bwdfgGalleryFilteringEditModeObserver = (getEditMode) => {
	  // elementor render observing
	  const bwdfgGalleryFilteringObserver = new MutationObserver((mutations) => {
		mutations.map((record) => {
		  if (record.addedNodes.length) {
			record.addedNodes.forEach((singleItem) => {
			  if (singleItem.nodeName == "DIV") {
				if (singleItem.querySelector(".bwdlc-brand-logo-common")) {
				  let observedItem = singleItem.querySelector(
					".bwdlc-brand-logo-common"
				  );
				  filteringGallery(observedItem);
				}
			  }
			});
		  }
		});
	  });
  
	  bwdfgGalleryFilteringObserver.observe(getEditMode, {
		subtree: true,
		childList: true,
	  });
	};
	// edit mode checker
	(() => {
	  let bwdfgMyInterValId;
	  if (
		document.querySelector(".elementor-edit-area") ||
		document.querySelector(".bwdlc-brand-logo-common")
	  ) {
		galleryFilterPlayer();
	  } else {
		bwdfgMyInterValId = setInterval(() => {
		  let ElementorEditArea = document.querySelector(".elementor-edit-area") || document.querySelector(".page");
		  
		  if (ElementorEditArea) {
			clearInterval(bwdfgMyInterValId);
			// play ===============
			bwdfgGalleryFilteringEditModeObserver(ElementorEditArea);
		  }
		}, 300);
	  }
	})();
})();


// slider --> logo carousel

"use strict";

(function ($, w) {

	var $window = $(w);
	$(function () {
		function log(event, item, level) {
			$(document).on(event, item, level);
		}
	}),


	$window.on("elementor/frontend/init", function (){

		var BwdlcBaseSlider = elementorModules.frontend.handlers.Base.extend({

			onInit: function onInit() {
				elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
				this.run();
			},
			getDefaultSettings: function getDefaultSettings() {
			return {
				selectors: {
				container: ".bwdlc-mySwiper-container"
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
					loop: !!(this.getElementSettings("bwdlc_loop_switcher") || false),
					slideShadows: !!(this.getElementSettings("bwdlc_coverflow_shadow_switcher") || false),
					effect: this.getElementSettings("bwdlc_slider_effects"),
					sliderType: this.getElementSettings("bwdlc_slider_type"),
					//direction: this.getElementSettings("bwdlc_slider_direction"),
					mousewheel: (this.getElementSettings("bwdlc_mousewheel") || false),
					speed: this.getElementSettings("bwdlc_slide_speed"),
					spaceBetween: parseInt(this.getElementSettings("bwdlc_desk_Space")) || 0,
					spaceBetween: parseInt(this.getElementSettings("bwdlc_tablet_space")) || 0,
					spaceBetween: parseInt(this.getElementSettings("bwdlc_mobile_space")) || 0,
					centeredSlides: true,
				};
	
				if (this.getElementSettings("bwdlc_autoslide_switcher") == "yes") {
					settings.autoplay = {
					delay: this.getElementSettings("bwdlc_slider_autoplay_speed"),
					disableOnInteraction: false,
					stopOnLastSlide: !(this.getElementSettings("bwdlc_loop_switcher") || false)
					};
				};

				if (this.getElementSettings("bwdlc_arrow_switcher") == "yes") {
					var selectorNext = this.elements.$container.find(".bwdlc-swiper-next");
					var selectorPrev = this.elements.$container.find(".bwdlc-swiper-prev");
					settings.navigation = {
					  nextEl: selectorNext[0],
					  prevEl: selectorPrev[0]
					};
				};

				if (this.getElementSettings("bwdlc_slider_effects") == "coverflow") {
					settings.coverflowEffect = {
						rotate: parseInt(this.getElementSettings("bwdlc_coverflow_rotate")),
						stretch: 0,
						depth: parseInt(this.getElementSettings("bwdlc_coverflow_depth")),
						modifier: parseInt(this.getElementSettings("bwdlc_coverflow_modifier")),
						slideShadows: (this.getElementSettings("bwdlc_coverflow_shadow_switcher") || false),
					};
				};

				if (this.getElementSettings("bwdlc_slider_effects") == "cube"){
					settings.cubeEffect = {
						shadow: (this.getElementSettings("bwdlc_cube_shadow_switcher") || false),
						slideShadows: (this.getElementSettings("bwdlc_cube_slide_shadow_switcher") || false),
						shadowOffset: parseInt(this.getElementSettings("bwdlc_cube_shadow_offset")),
						shadowScale: 0.94,
					};
				};

				if (this.getElementSettings("bwdlc_slider_effects") == "creative"){
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

				if (this.getElementSettings("bwdlc_popover_responsive_device") == "yes"){
					settings.breakpoints = {
						0: {
							slidesPerView:  parseInt(this.getElementSettings("bwdlc_slide_mobile_view")),
							spaceBetween: parseInt(this.getElementSettings("bwdlc_mobile_space")) || 0,
						},
						768: {
							slidesPerView: parseInt(this.getElementSettings("bwdlc_slide_tablet_view")),
							spaceBetween: parseInt(this.getElementSettings("bwdlc_tablet_space")) || 0,
						},
						1025: {
							slidesPerView: parseInt(this.getElementSettings("bwdlc_slide_desktop_view")),
							spaceBetween: parseInt(this.getElementSettings("bwdlc_desk_Space")) || 0,
						}
					};
				};

				if (this.getElementSettings("bwdlc_scroll_bar") == "yes") {
					var selectorScroll = this.elements.$container.find(".bwdlc-swiper-scrollbar");
					settings.scrollbar = {
					  el: selectorScroll[0],
					  hide: this.getElementSettings("bwdlc_scroll_visibility") == "true",
					  draggable: true
					};
				};

				if (this.getElementSettings("bwdlc_slide_pagination") == "yes") {
					var pagination_type = this.getElementSettings("bwdlc_pagination_type");

					if ( pagination_type == "bullets" || pagination_type == "progressbar" || pagination_type == "fraction" ){
						var selectorPagi = this.elements.$container.find(".bwdlc-swiper-pagination");
						settings.pagination = {
							el: selectorPagi[0],
							clickable: true,
							type: this.getElementSettings("bwdlc_pagination_type"),
						};
					}
					else if(pagination_type == "numbers"){
						var selectorPagi = this.elements.$container.find(".bwdlc-swiper-pagination");
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
				var slider = elContainer.find(".bwdlc-mySwiper-container");
				var readySettings = this.getReadySettings();
				var sliderObj = new XblSwiper(slider[0], readySettings);


				sliderObj.on("slideChange", function () {
		  
					var aI = sliderObj.activeIndex;
					var elSlide = elContainer.find(".bwdlc-swiper-slide");
					var elSlideContent = elContainer.find(".bwdlc-slide-content");
					var currentSlide = elSlideContent.eq(aI);
					currentSlide.hide();
		  
					if (currentSlide.length <= 0) {}
		  
					setTimeout(function () {
					  currentSlide.show();
					}, readySettings.speed);
					elSlide.eq(aI).find(".elementor-invisible, .animated").each(function (e, t) {
					  var i = $(this).data("settings");
		  
					  if (i && (i._animation || i.animation)) {
						var n = i._animation_delay ? i._animation_delay : 0,
							a = i._animation || i.animation;
						$(this).removeClass("elementor-invisible");
						$(this).addClass(a + " animated");
					  }
					});
				});
				sliderObj.on("transitionEnd", function () {
				var aI = sliderObj.activeIndex;
				var elSlide = elContainer.find(".bwdlc-swiper-slide");
				var elSlideContent = elContainer.find(".bwdlc-slide-content");
				var currentSlide = elSlideContent.eq(aI);
				setTimeout(function () {
					elSlide.eq(aI).find(".animated").each(function (e, t) {
					var i = $(this).data("settings");
		
					if (i && (i._animation || i.animation)) {
						var n = i._animation_delay ? i._animation_delay : 0,
							a = i._animation || i.animation;
						$(this).removeClass(a);
					}
					});
				}, readySettings.speed);
				});
	
			}
		});
	
		elementorFrontend.hooks.addAction("frontend/element_ready/bwdlc-Logo-Carousel.default", function ($scope) {
			elementorFrontend.elementsHandler.addHandler(BwdlcBaseSlider, {
			$element: $scope,
			selectors: {
				container: ".bwdlc-slider-container-wrapper"
			}
			});
		});
	});


})(jQuery, window);




