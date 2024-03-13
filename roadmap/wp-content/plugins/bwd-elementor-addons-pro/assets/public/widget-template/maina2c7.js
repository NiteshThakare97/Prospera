"use strict";
(()=>{
  function bwdacFAQMaker(faq) {
    let faqItems = faq.querySelectorAll(".faqfg-FAQ-default");
  
    for (let singleItem of faqItems) {
      let itemButton = singleItem.querySelector("div");
      itemButton.addEventListener("click", function () {
        let buttonParent = this.parentElement;
  
        if (buttonParent.classList.contains("active")) {
          buttonParent.classList.remove("active");
          for (let item of faqItems) {
            item.classList.remove("active");
          }
        } else {
          for (let item of faqItems) {
            item.classList.remove("active");
          }
          buttonParent.classList.add("active");
        }
      });
    }
  
    function documentClickToActiveClass(e) {
      let isClick = faq.contains(e.target);
      if (!isClick) {
        for (let singleItem of faqItems) {
          singleItem.classList.remove("active");
        }
      }
    }
    document.addEventListener("click", documentClickToActiveClass);
  }
  // faq plyer
  const bwdacFAQPlayer = () => {
    let allFAQCommon = document.querySelectorAll(".faqfg-faq-all>*");
    for (let item of allFAQCommon) {
      bwdacFAQMaker(item);
    }
  };
  
  //===================================================
  // editMode active or not
  let bwdacFAQEditModeObserver = (getEditMode) => {
    // elementor render observing
    const bwdacFAQObserver = new MutationObserver((mutations) => {
      mutations.map((record) => {
        if (record.addedNodes.length) {
          record.addedNodes.forEach((singleItem) => {
            if (singleItem.nodeName == "DIV") {
              if (singleItem.querySelector(".faqfg-faq-all>*")) {
                let observedItem = singleItem.querySelector(
                  ".faqfg-faq-all>*"
                );
                bwdacFAQMaker(observedItem);
              }
            }
          });
        }
      });
    });
  
    bwdacFAQObserver.observe(getEditMode, {
      subtree: true,
      childList: true,
    });
  };
  
  // edit mode checker
  (() => {
    let bwdacMyInterValId;
    if (
      document.querySelector(".elementor-edit-area") ||
      document.querySelector(".faqfg-faq-all>*")
    ) {
      bwdacFAQPlayer();
    } else {
      bwdacMyInterValId = setInterval(() => {
        let bwdacElementorEditArea = document.querySelector(".elementor-edit-area") || document.querySelector(".page");
        if (bwdacElementorEditArea) {
          clearInterval(bwdacMyInterValId);
          // play ===============
          bwdacFAQEditModeObserver(bwdacElementorEditArea);
        }
      }, 300);
    }
  })();






})()
