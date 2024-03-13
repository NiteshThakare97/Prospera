"use strict";
function CVPopUpAndProgress(CVItem){

  // popup video===============
  function BWDVideoPopUp() {
    // pop up element styles=============
  
   let videoBtn = CVItem.querySelector('.bwd-cv-vedio');


   let body = document.querySelector("body");
   if(videoBtn){
    videoBtn.addEventListener("click", (e) => {
      e.preventDefault();
  
      //   let popUpVideoUrl
      let popUpYoutubeVideoUrl = videoBtn.getAttribute("data-popup-youtube-url");
      let popUpCustomVideoUrl = videoBtn.getAttribute("data-popup-custom-url");
      let popUpVideoWrapper;
  
      if (popUpCustomVideoUrl) {
        // create i frame tag
        popUpVideoWrapper = document.createElement("video");
        let popUpVideoSource = document.createElement("source");
        popUpVideoWrapper.setAttribute("controls", "");
        popUpVideoSource.setAttribute("src", popUpCustomVideoUrl);
        popUpVideoSource.setAttribute("type", "video/ogg");
        popUpVideoWrapper.appendChild(popUpVideoSource);
      } else if (popUpYoutubeVideoUrl) {
        let youTubeVUrl;
        if (popUpYoutubeVideoUrl.includes("watch")) {
          let videoIdFirstPosition = popUpYoutubeVideoUrl.indexOf("?v=") + 3;
          let videoIdLastPosition = popUpYoutubeVideoUrl.indexOf("&");
          let videoId = popUpYoutubeVideoUrl.substring(
            videoIdFirstPosition,
            videoIdLastPosition
          );
          youTubeVUrl = `https://www.youtube.com/embed/${videoId}`;
        } else if (popUpYoutubeVideoUrl.includes("youtu.be")) {
          let shareVideoUrl = popUpYoutubeVideoUrl + "mb";
          let videoIdFirstPosition = shareVideoUrl.indexOf("youtu.be/") + 9;
          let videoIdLastPosition = shareVideoUrl.lastIndexOf("mb");
          let videoId = shareVideoUrl.substring(
            videoIdFirstPosition,
            videoIdLastPosition
          );
          youTubeVUrl = `https://www.youtube.com/embed/${videoId}`;
        } else if (popUpYoutubeVideoUrl.includes("embed")) {
          youTubeVUrl = popUpYoutubeVideoUrl;
        }
  
        // create i frame tag
        popUpVideoWrapper = document.createElement("iframe");
        popUpVideoWrapper.setAttribute("src", youTubeVUrl);
        popUpVideoWrapper.setAttribute(
          "allow",
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        );
      }
      popUpVideoWrapper.setAttribute("class", "bwd-video-wrapper");
  
      //pop up before background
      let popUpBefore = document.createElement("div");
      popUpBefore.setAttribute("class", "bwd-popup-before");
  
      // pop up element
      let popUpElem = document.createElement("div");
      popUpElem.setAttribute("class", "bwd-popUpBody");
  
      //cross button
      let popUpCrossUp = document.createElement("i");
      popUpCrossUp.setAttribute("class", "fa fa-times bwd-popup-cross-btn");
  
      //all append child
      popUpElem.appendChild(popUpCrossUp);
      popUpElem.appendChild(popUpVideoWrapper);
      body.appendChild(popUpBefore);
      body.appendChild(popUpElem);
  
      // click on cross btn to close popup
      popUpCrossUp.addEventListener("click", (e) => {
        e.preventDefault();
        body.removeChild(popUpElem);
        body.removeChild(popUpBefore);
      });
  
      popUpBefore.addEventListener("click", (e) => {
        e.preventDefault();
        body.removeChild(popUpElem);
        body.removeChild(popUpBefore);
      });
    });
   }
  

  }
  BWDVideoPopUp();
  // progressBar
  let CVPBArea = CVItem.querySelectorAll('.bwd-cv-pb-area');


  function CVProgressBar(progressWrapper){
      let bwdProgressBox = progressWrapper.querySelectorAll('.bwd-pb-name');
      for(let pbBox of bwdProgressBox){
        let allPB = pbBox.querySelector('.bwdcv-per-val');
        let allPBVal = allPB.getAttribute('data-pb-val');
   
        allPBVal = parseInt(allPBVal);
        allPB.style.width = allPBVal + '%';
      }
  }
  // scroll to trigger
  function CVscrollToPlayPB(){


    function playWithScrollPb(){
      let windowHeight = window.innerHeight / 2;
      for(let item of CVPBArea){
        let PBTopDsc = item.getBoundingClientRect().top;
        if(windowHeight > PBTopDsc){
            CVProgressBar(item)
            if(item.classList.contains('bwd-cv-language')){
              document.removeEventListener("scroll", playWithScrollPb);
            }
          
        }
      }

    }



    // if already scroll cross the distance
    let windowHeight = window.innerHeight / 2;

      for(let item of CVPBArea){
        let PBTopDsc = item.getBoundingClientRect().top;
        if(windowHeight > PBTopDsc){
            CVProgressBar(item)
            if(item.classList.contains('bwd-cv-language')){
              document.removeEventListener("scroll", playWithScrollPb);
            }
        } else{
          document.addEventListener('scroll',playWithScrollPb);
        }
      }
  }
  CVscrollToPlayPB()
}

// CV plyer
const bwdCVPlayer = () => {
  let allCVVideoCommon = document.querySelectorAll(".bwd-cv-vilder-common");
  for (let item of allCVVideoCommon) {
    CVPopUpAndProgress(item);
  }
};

// editMode active or not
let bwdCVEditModeObserver = (getEditMode) => {
  // elementor render observing
  const bwdCVObserver = new MutationObserver((mutations) => {
    mutations.map((record) => {
      if (record.addedNodes.length) {
        record.addedNodes.forEach((singleItem) => {
          if (singleItem.nodeName == "DIV") {
            if (singleItem.querySelector(".bwd-cv-vilder-common")) {
              let observedItem = singleItem.querySelector(".bwd-cv-vilder-common");
              CVPopUpAndProgress(observedItem);

            }
          }
        });
      }
    });
  });

  bwdCVObserver.observe(getEditMode, {
    subtree: true,
    childList: true,
  });
};

// edit mode checker
(() => {
  let bwdMyInterValId;
  if (
    document.querySelector(".elementor-edit-area") ||
    document.querySelector(".bwd-cv-vilder-common")
  ) {
    bwdCVPlayer();
  } else {
    bwdMyInterValId = setInterval(() => {
      let bwdElementorEditArea = document.querySelector(".elementor-edit-area");
      if (bwdElementorEditArea) {
        clearInterval(bwdMyInterValId);
        // play ===============
        bwdCVEditModeObserver(bwdElementorEditArea);
      }
    }, 300);
  }
})();



