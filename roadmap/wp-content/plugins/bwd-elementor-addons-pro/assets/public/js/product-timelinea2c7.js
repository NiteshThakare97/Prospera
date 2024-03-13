"use strict";
(()=>{

//selector function
function $(element,all){
  return (all ==='all'? document.querySelectorAll(element) : document.querySelector(element));
}

const body = $('body');

// hoisting top function==================
function minusHalfHeight(TLItems){
  for (let item of TLItems) {
      let itemClientHeight = Math.floor(item.clientHeight / 2) + 'px';
      let itemClientHeightMinus = '-' + itemClientHeight;
      item.style.marginTop = itemClientHeightMinus;
  }
}


// verticalProgressFunction
function verticalProgress(TL){
  let progressHelper = TL.querySelector('.tl-pb-helper-common');
  let progressLine = TL.querySelector('.tl-pb-line-common');

  window.addEventListener('scroll', function() {
      let progressHelperTopDsc = progressHelper.getBoundingClientRect().top;
      let windowHeight = window.innerHeight / 2;
      function progressing() {
          if ((progressHelperTopDsc < windowHeight) && (progressHelperTopDsc < 0)) {
              let positiveValue = Math.abs(progressHelperTopDsc);
              if (positiveValue <= TL.clientHeight) {
                  let positiveStringVal = positiveValue + 'px';
                  progressLine.style.height = positiveStringVal;
              }
          } else {
              progressLine.style.height = 0;
          }
      }
      progressing();
  })

}

// vertically scroll to active function
const scrollToActive = (TL) => {

  let TLItems = TL.querySelectorAll('.woocptmln-timeline-item');
  const windowInnerHeight = window.innerHeight / 5 * 4;

  // if already a item cross the distance
  TLItems.forEach(item => {
    let contentTop = item.getBoundingClientRect().top;
    if (contentTop < windowInnerHeight) {
        item.classList.add('active');
    } else {
        item.classList.remove('active');
    }
})

// scroll to active
  window.addEventListener('scroll', function() {
      TLItems.forEach(item => {
          let contentTop = item.getBoundingClientRect().top;
          if (contentTop < windowInnerHeight) {
              item.classList.add('active');
          } else {
              item.classList.remove('active');
          }
      })
  })
}
  // common js for work with elementor edit mode=================================================
    // all TL player
    const TLPlayer = () => {
      let allTLCommon = document.querySelectorAll(".woocptmln-common");
      allTLCommon.forEach((TLItem)=>{
        if(TLItem.classList.contains('woocptmln-scroll-show')){
          scrollToActive(TLItem)
        }else if(TLItem.classList.contains('woocptmln-progress')){
          scrollToActive(TLItem);
          verticalProgress(TLItem);
        }
      })
    };
    // rendering element observer 
    let ElemRenderObserver = (getEditMode) => {
      // elementor render observing
      const observer = new MutationObserver((mutations) => {
        mutations.map((record) => {
          if (record.addedNodes.length) {
            record.addedNodes.forEach((singleItem) => {
              if (singleItem.nodeName == "DIV") {
                if (singleItem.querySelector(".woocptmln-common")) {
                  let observedItem = singleItem.querySelector(".woocptmln-common");
                  if(observedItem.classList.contains('woocptmln-scroll-show')){
                    scrollToActive(observedItem)
                  }else if(observedItem.classList.contains('woocptmln-progress')){
                    scrollToActive(observedItem);
                    verticalProgress(observedItem);
                  }
                }
              }
            });
          }
        });
      });
      observer.observe(getEditMode, {
        subtree: true,
        childList: true,
      });
    };
    // elementor Edit Mode Active or not checker
    (() => {
      let EditModeIntervalId;
      if (document.querySelector(".elementor-edit-area") || document.querySelector(".woocptmln-common")) {
        TLPlayer();
      } else {
        EditModeIntervalId = setInterval(() => {
        let ElementorEditArea = document.querySelector(".elementor-edit-area") || document.querySelector(".page");
        
          if (ElementorEditArea) {
            clearInterval(EditModeIntervalId);
            //if active Edit mode Then Call The Function ===============
            ElemRenderObserver(ElementorEditArea);            
          }
        }, 300);
      }
    })()
})();

