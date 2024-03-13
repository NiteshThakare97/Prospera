(function ($) {
  "use strict";
  $(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/NameFilterableGallery.default",
      function ($scope) {
        // gellary-image-animation
        // $(".snake").snakeify({
        //   speed: 200,
        // });

        $(document).ready(function() {
          $('.bwdfg-grid-common').magnificPopup({
            type:'image',
            delegate:'a',
            gallery:{
              enabled:true
            }
          });
        });

      }
    );
  });
})(jQuery);


//filterable gallery
("use strict");
function filteringGallery(imgGallery) {
  let filterBtns = imgGallery.querySelectorAll(
    ".bwdfg-my-commonsk-class .bwdfg-menu-item"
  );
  let galleryImg = imgGallery.querySelectorAll(
    ".bwdfg-grid-common .bwdfg-grid-item"
  );

  let itemPadding = getComputedStyle(galleryImg[0],null).getPropertyValue("padding");

  for (let btn of filterBtns) {
    // add click event to btn
    btn.addEventListener("click", () => {
      // add or remove button active class
      (function addRemoveBtnActiveClass() {
        for (let btnItem of filterBtns) {
          btnItem.classList.remove("active");
        }
        btn.classList.add("active");
      })();

      // get clicked button data-filter value
      let filterValue = btn.getAttribute("data-filter");

      //gallery img filtering by filter value
      (function checkingImgFiltering() {

        // adding Active Class to img
        function addingImgActiveClass(addItem) {
          addItem.style.padding = itemPadding;
          addItem.classList.add("bwdfg-img-galleryItem-active");
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
                  imgSingleItem.classList.remove("bwdfg-img-galleryItem-active");
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

//all galleryFilter player
const galleryFilterPlayer = () => {
  let allgalleryFilterCommon = document.querySelectorAll(".bwdfg-gallery-filtering-common");
  for (item of allgalleryFilterCommon) {
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
            if (singleItem.querySelector(".bwdfg-gallery-filtering-common")) {
              let observedItem = singleItem.querySelector(".bwdfg-gallery-filtering-common");
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
    document.querySelector(".bwdfg-gallery-filtering-common")
  ) {
    galleryFilterPlayer();
  } else {
    bwdfgMyInterValId = setInterval(() => {
      let bwdfgElementorEditArea = document.querySelector(".elementor-edit-area");
      if (bwdfgElementorEditArea) {
        clearInterval(bwdfgMyInterValId);
        // play ===============
        bwdfgGalleryFilteringEditModeObserver(bwdfgElementorEditArea);
      }
    }, 300);
  }
})()






















// is galleryFilter active or not
// (() => {
//   let intervalId;
//   if (document.querySelector(".bwdfg-gallery-filtering-common")) {
//     galleryFilterPlayer();
//   } else {
//     intervalId = setInterval(() => {
//       let galleryFilterCommon = document.querySelector(
//         ".bwdfg-gallery-filtering-common"
//       );
//       if (galleryFilterCommon) {
//         clearInterval(intervalId);
//         // play galleryFilter================
//         galleryFilterPlayer();
//       }
//     }, 100);
//   }
// })();
