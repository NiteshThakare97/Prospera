(function ($) {
  "use strict";
  $(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction("frontend/element_ready/AdvancedPostsTab.default", function ($scope) {
      // gellary-image-animation
      $(".snake").snakeify({
        speed: 200,
      });
    });
  });
})(jQuery);

// filterable gallery
(function () {
  "use strict";
  function filteringGallery(imgGallery) {
    let filterBtns = imgGallery.querySelectorAll(".apostst-my-commonsk-class .apostst-menu-item");
    let galleryImg = imgGallery.querySelectorAll(".apostst-grid-common .apostst-grid-item");

    let itemPadding = getComputedStyle(galleryImg[0], null).getPropertyValue("padding");

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
            addItem.classList.add("apostst-img-galleryItem-active");
          }
          for (let imgItem of galleryImg) {
            if (filterValue == "*") {
              addingImgActiveClass(imgItem);
            } else if (imgItem.classList.contains(filterValue)) {
              (function removingImgActiveClass() {
                for (let imgSingleItem of galleryImg) {
                  if (!imgSingleItem.classList.contains(filterValue)) {
                    imgSingleItem.style.padding = "0";
                    imgSingleItem.style.maxWidth = "0";
                    imgSingleItem.classList.remove("apostst-img-galleryItem-active");
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

  const galleryFilterPlayer = () => {
    let allgalleryFilterCommon = document.querySelectorAll(".apostst-gallery-filtering-common");
    for (let item of allgalleryFilterCommon) {
      filteringGallery(item);
    }
  };

  let apoststGalleryFilteringEditModeObserver = (getEditMode) => {
    const apoststGalleryFilteringObserver = new MutationObserver((mutations) => {
      mutations.map((record) => {
        if (record.addedNodes.length) {
          record.addedNodes.forEach((singleItem) => {
            if (singleItem.nodeName == "DIV") {
              if (singleItem.querySelector(".apostst-gallery-filtering-common")) {
                let observedItem = singleItem.querySelector(".apostst-gallery-filtering-common");
                filteringGallery(observedItem);
              }
            }
          });
        }
      });
    });

    apoststGalleryFilteringObserver.observe(getEditMode, {
      subtree: true,
      childList: true,
    });
  };

  (() => {
    let apoststMyInterValId;
    if (document.querySelector(".elementor-edit-area") || document.querySelector(".apostst-gallery-filtering-common")) {
      galleryFilterPlayer();
    } else {
      apoststMyInterValId = setInterval(() => {
        let apoststElementorEditArea = document.querySelector(".elementor-edit-area");
        if (apoststElementorEditArea) {
          clearInterval(apoststMyInterValId);
          apoststGalleryFilteringEditModeObserver(apoststElementorEditArea);
        }
      }, 300);
    }
  })();
})();
