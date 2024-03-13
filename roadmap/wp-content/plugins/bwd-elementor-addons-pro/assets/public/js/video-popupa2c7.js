"use strict";
(() => {
  function BWDVideoPopUp(videoBtn) {
    
  let body = document.querySelector("body");
  // element creator function
  const elemCreator = (elem = 'div')=>{
    return document.createElement(elem);
  }
  //attribute setter
  const attrSetter = (elem,attr,val)=>{
    return elem.setAttribute(attr,val);
  }
  // event listener to video button
  videoBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // all video attributes
    const youtubeUrl = videoBtn.getAttribute("data-youtube-url");
    const vimeoUrl = videoBtn.getAttribute("data-vimeo-url");
    const selfUrl = videoBtn.getAttribute("data-self-url");

    let VideoTag;
    const allAttribute ={
      autoplay: videoBtn.getAttribute("data-autoplay"),
      muted: videoBtn.getAttribute("data-mute"),
      loop: videoBtn.getAttribute("data-loop"),
      controls: videoBtn.getAttribute("data-control"),
      privacy: videoBtn.getAttribute("data-privacy")
    }
    // checking here type of the url
    if (selfUrl) {
      VideoTag = elemCreator('video');
       const SourceTag =  elemCreator('source');
       attrSetter(SourceTag,'src',selfUrl);

      // check video type and set
       (()=>{
        if(selfUrl.includes('ogg')){
          attrSetter(SourceTag,'type',"video/ogg");
         }else if(selfUrl.includes('mp4')){
          attrSetter(SourceTag,'type',"video/mp4");
         }else if(selfUrl.includes('webm')){
          attrSetter(SourceTag,'type',"video/webm");
         }
       })()

      //  video controls check & active
       if(allAttribute.controls === 'yes'){
        attrSetter(VideoTag,'controls',"");
       }
       if(allAttribute.autoplay === 'yes'){
        attrSetter(VideoTag,'autoplay',"");
       }
       if(allAttribute.muted === 'yes'){
        attrSetter(VideoTag,'muted',"");
       }
       if(allAttribute.loop === 'yes'){
        attrSetter(VideoTag,'loop',"");
       }
       
      VideoTag.appendChild(SourceTag);
    }else if (youtubeUrl) {
      
      let youTubeVUrl;
      if (youtubeUrl.includes("watch")) {
        let videoIdFirstPosition = youtubeUrl.indexOf("?v=") + 3;
        let videoId = youtubeUrl.substr(videoIdFirstPosition,11);
        youTubeVUrl = `https://www.youtube.com/embed/${videoId}`;
  
      } else if (youtubeUrl.includes("youtu.be")) {
        let shareVideoUrl = youtubeUrl + "mb";
        let videoIdFirstPosition = shareVideoUrl.indexOf("youtu.be/") + 9;
        let videoIdLastPosition = shareVideoUrl.lastIndexOf("mb");
        let videoId = shareVideoUrl.substring(
          videoIdFirstPosition,
          videoIdLastPosition
        );
        youTubeVUrl = `https://www.youtube.com/embed/${videoId}`;
      } else if (youtubeUrl.includes("embed")) {
        youTubeVUrl = youtubeUrl;
      }

      // create i frame tag
      VideoTag = document.createElement("iframe");
      //youtube  video controls check & active
       if(allAttribute.controls === 'yes'){
        youTubeVUrl = `${youTubeVUrl}?controls=1` 
       }else{
        youTubeVUrl = `${youTubeVUrl}?controls=0` 
       }

       if(allAttribute.autoplay === 'yes'){
        youTubeVUrl = `${youTubeVUrl}&autoplay=1` 
      }
       
      if(allAttribute.muted === 'yes'){
         youTubeVUrl = `${youTubeVUrl}&mute=1` 
        }
        
      if(allAttribute.loop === 'yes'){
         youTubeVUrl = `${youTubeVUrl}&loop=1` 
       }

      VideoTag.setAttribute("src", youTubeVUrl);
      VideoTag.setAttribute(
        "allow",
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      );
      
    }else if(vimeoUrl){
      // create i frame tag
      let setVimeoUrl;
      VideoTag = document.createElement("iframe");

      let videoIdFirstPosition;
      if(vimeoUrl.includes('video')){
        videoIdFirstPosition = vimeoUrl.indexOf("video/") + 6;
      }else {
        videoIdFirstPosition = vimeoUrl.indexOf("com/") + 4;
      }
      let videoId = vimeoUrl.substr(videoIdFirstPosition,9);
      setVimeoUrl = `https://player.vimeo.com/video/${videoId}`;


        //vimeo  video controls check & active
       if(allAttribute.controls === 'yes'){
        setVimeoUrl = `${setVimeoUrl}?controls=1` 
       }else{
        setVimeoUrl = `${setVimeoUrl}?controls=0` 
       }

       if(allAttribute.autoplay === 'yes'){
        setVimeoUrl = `${setVimeoUrl}&autoplay=1` 
      }
       
      if(allAttribute.muted === 'yes'){
         setVimeoUrl = `${setVimeoUrl}&muted=1` 
        }
        
      if(allAttribute.loop === 'yes'){
         setVimeoUrl = `${setVimeoUrl}&loop=1` 
       }


      VideoTag.setAttribute("src", setVimeoUrl);
    }


    VideoTag.setAttribute("class", "bwd-video-wrapper");
    //pop up before background
    let popUpBefore = document.createElement("div");
    popUpBefore.setAttribute("class", "bwd-popup-before");

    // pop up element
    let popUpElem = document.createElement("div");

    for(let i = 1; i < 13; i++){
      if(videoBtn.classList.contains(`bwdvp-btn-${i}`)){
        popUpElem.setAttribute("class", `bwd-popUpBody bwd-style${i}`);
      }
    }
  

    //cross button
    let popUpCrossUp = document.createElement("i");
    popUpCrossUp.setAttribute("class", "fa fa-times bwd-popup-cross-btn");

    //all append child
    popUpElem.appendChild(popUpCrossUp);
    popUpElem.appendChild(VideoTag);
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
  // videoPopup plyer
  const videoPopupPlayer = () => {
    let allvideoPopupVideoCommon = document.querySelectorAll(".bwdvp-btn");
    for (let item of allvideoPopupVideoCommon) {
      BWDVideoPopUp(item);
    }
  };
  // editMode active or not
  let bwdvideoPopupEditModeObserver = (getEditMode) => {
    // elementor render observing
    const bwdvideoPopupObserver = new MutationObserver((mutations) => {
      mutations.map((record) => {
        if (record.addedNodes.length) {
          record.addedNodes.forEach((singleItem) => {
            if (singleItem.nodeName == "DIV") {
              if (singleItem.querySelector(".bwdvp-btn")) {
                let observedItem =
                  singleItem.querySelector(".bwdvp-btn");
                BWDVideoPopUp(observedItem);
              }
            }
          });
        }
      });
    });

    bwdvideoPopupObserver.observe(getEditMode, {
      subtree: true,
      childList: true,
    });
  };
  // edit mode checker
  (() => {
    let bwdMyInterValId;
    if (
      document.querySelector(".elementor-edit-area") ||
      document.querySelector(".bwdvp-btn")
    ) {
      videoPopupPlayer();
    } else {
      bwdMyInterValId = setInterval(() => {
        let bwdElementorEditArea = document.querySelector(
          ".elementor-edit-area"
        );
        if (bwdElementorEditArea) {
          clearInterval(bwdMyInterValId);
          // play ===============
          bwdvideoPopupEditModeObserver(bwdElementorEditArea);
        }
      }, 300);
    }
  })();
})();

