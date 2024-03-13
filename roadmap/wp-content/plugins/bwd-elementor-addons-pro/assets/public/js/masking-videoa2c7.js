"use strict";
(() => {
  function BWDVideoPopUp(videoBtn) {
    //sticky video =====
    const stickyVideoWrapper = videoBtn.querySelector(".bwdmv-mask-video");

    const body = document.querySelector("body");
    // element creator function
    const elemCreator = (elem = "div") => {
      return document.createElement(elem);
    };
    //attribute setter
    const attrSetter = (elem, attr, val) => {
      return elem.setAttribute(attr, val);
    };

    // function VideoMaker(){
    function VideoMaker() {
      // all video attributes
      const youtubeUrl = videoBtn.getAttribute("data-youtube-url");
      const vimeoUrl = videoBtn.getAttribute("data-vimeo-url");
      const selfUrl = videoBtn.getAttribute("data-self-url");

      let VideoTag;
      const allAttribute = {
        autoplay: videoBtn.getAttribute("data-autoplay"),
        muted: videoBtn.getAttribute("data-mute"),
        loop: videoBtn.getAttribute("data-loop"),
        controls: videoBtn.getAttribute("data-control"),
        privacy: videoBtn.getAttribute("data-privacy"),
        poster: videoBtn.getAttribute("data-poster"),
      };

      // checking here type of the url
      if (selfUrl) {
        VideoTag = elemCreator("video");
        const SourceTag = elemCreator("source");
        attrSetter(SourceTag, "src", selfUrl);

        // check video type and set
        (() => {
          if (selfUrl.includes("ogg")) {
            attrSetter(SourceTag, "type", "video/ogg");
          } else if (selfUrl.includes("mp4")) {
            attrSetter(SourceTag, "type", "video/mp4");
          } else if (selfUrl.includes("webm")) {
            attrSetter(SourceTag, "type", "video/webm");
          }
        })();
        //  video controls check & active
        if (allAttribute.controls === "yes") {
          attrSetter(VideoTag, "controls", "");
        }
        if (allAttribute.autoplay === "yes") {
          attrSetter(VideoTag, "autoplay", "");
          VideoTag.muted=true;
          VideoTag.play();
        }
        if (allAttribute.muted === "yes") {
          attrSetter(VideoTag, "muted", "muted");
        }
        if (allAttribute.loop === "yes") {
          attrSetter(VideoTag, "loop", "");
        }
        if (allAttribute.poster) {
          attrSetter(VideoTag, "poster", allAttribute.poster);
        }
		attrSetter(VideoTag, "controlslist", "nodownload");

        VideoTag.appendChild(SourceTag);
      } else if (youtubeUrl) {
        let youTubeVUrl;
        let videoId;
        if (youtubeUrl.includes("watch")) {
          // watch url
          let videoIdFirstPosition = youtubeUrl.indexOf("?v=") + 3;
         	 videoId = youtubeUrl.substr(videoIdFirstPosition, 11);

           if(allAttribute.privacy === 'yes'){
            youTubeVUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;
           }else{
            youTubeVUrl = `https://www.youtube.com/embed/${videoId}`;
           }

        } else if(youtubeUrl.includes("youtu.be")) {
          // share url
          let shareVideoUrl = youtubeUrl + "mb";
          let videoIdFirstPosition = shareVideoUrl.indexOf("youtu.be/") + 9;
          let videoIdLastPosition = shareVideoUrl.lastIndexOf("mb");
          	 videoId = shareVideoUrl.substring(
            videoIdFirstPosition,
            videoIdLastPosition
          );
          if(allAttribute.privacy === 'yes'){
            youTubeVUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;
           }else{
            youTubeVUrl = `https://www.youtube.com/embed/${videoId}`;
           }
        } else if (youtubeUrl.includes("embed")) {
          // embed url

          if(allAttribute.privacy === 'yes'){
            // embed url
            let videoIdFirstPosition = youtubeUrl.indexOf("embed") + 6;
              videoId = youtubeUrl.substr(videoIdFirstPosition, 11);
              youTubeVUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;
           }else{
            youTubeVUrl = youtubeUrl;
           }
        }

        // create i frame tag
        VideoTag = document.createElement("iframe");
        //youtube  video controls check & active
        if (allAttribute.controls === "yes") {
          youTubeVUrl = `${youTubeVUrl}?controls=1`;
        } else {
          youTubeVUrl = `${youTubeVUrl}?controls=0`;
        }

        if (allAttribute.autoplay === "yes") {
          youTubeVUrl = `${youTubeVUrl}&autoplay=1`;
        }

        if (allAttribute.muted === "yes") {
          youTubeVUrl = `${youTubeVUrl}&mute=1`;
        }
        if (allAttribute.loop === "yes") {
          youTubeVUrl = `${youTubeVUrl}&playlist=${videoId}&loop=1`;
        }
        // for popup video
        VideoTag.setAttribute("src", youTubeVUrl);
        VideoTag.setAttribute(
          "allow",
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        );
      } else if (vimeoUrl) {
        // create i frame tag
        let setVimeoUrl;
        VideoTag = document.createElement("iframe");

        let videoIdFirstPosition;
        if (vimeoUrl.includes("video")) {
          videoIdFirstPosition = vimeoUrl.indexOf("video/") + 6;
        } else {
          videoIdFirstPosition = vimeoUrl.indexOf("com/") + 4;
        }
        let videoId = vimeoUrl.substr(videoIdFirstPosition, 9);
        setVimeoUrl = `https://player.vimeo.com/video/${videoId}`;

        //vimeo  video controls check & active
        if (allAttribute.controls === "yes") {
          setVimeoUrl = `${setVimeoUrl}?controls=1`;
        } else {
          setVimeoUrl = `${setVimeoUrl}?controls=0`;
        }

        if (allAttribute.autoplay === "yes") {
          setVimeoUrl = `${setVimeoUrl}&autoplay=1`;
        }

        if (allAttribute.muted === "yes") {
          setVimeoUrl = `${setVimeoUrl}&muted=1`;
        }

        if (allAttribute.loop === "yes") {
          setVimeoUrl = `${setVimeoUrl}&loop=1`;
        }
        VideoTag.setAttribute("src", setVimeoUrl);
      }

      // if any url or video have given
      if (selfUrl || youtubeUrl || vimeoUrl) {
        //sticky video render
        stickyVideoWrapper.appendChild(VideoTag);
        // when click on sticky video
        if (videoBtn.getAttribute("data-lightbox") === "yes") {
          videoBtn.addEventListener("click", (e) => {
            e.preventDefault();

            VideoTag.setAttribute("class", "bwd-video-wrapper");
            //pop up before background
            let popUpBefore = document.createElement("div");
            popUpBefore.setAttribute("class", "bwd-popup-before");
            // pop up element
            let popUpElem = document.createElement("div");

            // popup body style adding
            popUpElem.setAttribute("class", `bwd-popUpBody`);

            //cross button
            let popUpCrossUp = document.createElement("i");
            popUpCrossUp.setAttribute(
              "class",
              "fa fa-times bwd-popup-cross-btn"
            );

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
      }
    }
    VideoMaker();
  }


  // videoPopup plyer
  const videoPopupPlayer = () => {
    let allvideoPopupVideoCommon = document.querySelectorAll(
      ".bwdmv-video-mask-wrapper"
    );
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
              if (singleItem.querySelector(".bwdmv-video-mask-wrapper")) {
                let observedItem = singleItem.querySelector(
                  ".bwdmv-video-mask-wrapper"
                );
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
      document.querySelector(".bwdmv-video-mask-wrapper")
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
