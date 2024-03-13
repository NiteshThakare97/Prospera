"use strict";
(()=>{



  function ICinputImgCompare(compareItem) {
    let afterImg = compareItem.querySelector(".bwdic-compare-img .bwdic-after");
    let beforeImg = compareItem.querySelector(".bwdic-compare-img .bwdic-before");
    let sliderBar = compareItem.querySelector(".bwdic-slider-bar .bwdic-drag-line");
    let compareInp = compareItem.querySelector(".bwdic-slider-bar .bwdic-range-inp");
    //before after text
    let beforeText = compareItem.querySelector('.bwdic-text-before');
    let afterText = compareItem.querySelector('.bwdic-text-after');
    compareInp.addEventListener("input", (e) => {
      afterImg.style.width = e.target.value + "%";
      sliderBar.style.left = e.target.value + "%";
  
      // before after text hide show
      let beforeImgWidth = beforeImg.offsetWidth;
      let beforeTxtWidth = (beforeText.offsetWidth * 100) / beforeImgWidth;
      let afterTxtLeft = (afterText.offsetLeft * 100) / beforeImgWidth;
  
      if(beforeTxtWidth > e.target.value ){
        beforeText.classList.add('active');
      }else if(e.target.value  > afterTxtLeft ){
        afterText.classList.add('active');
      }else {
        beforeText.classList.remove('active');
        afterText.classList.remove('active');
      }
    });  
  }
  function IChoverImgCompare(compItem, dir) {
    let imgArea = compItem.querySelector(".bwdic-compare-img-wrapper");
    let afterImg = compItem.querySelector(".bwdic-compare-img .bwdic-after");
    let sliderBar = compItem.querySelector(".bwdic-slider-bar .bwdic-drag-line");
    let beforeText = compItem.querySelector(".bwdic-text-before");
    let afterText = compItem.querySelector(".bwdic-text-after");
  
    imgArea.addEventListener("mousemove", (e) => {
      let eventX = e.clientX;
      let eventY = e.clientY;
  
      let imgLeft = imgArea.getBoundingClientRect().left;
      let imgTop = imgArea.getBoundingClientRect().top;
  
      let hoverAreaX = eventX - imgLeft;
      let hoverAreaY = eventY - imgTop;
  
      if (eventX >= imgLeft && eventX <= imgLeft + imgArea.offsetWidth) {
        if (dir === "x") {
          afterImg.style.width = hoverAreaX + "px";
          sliderBar.style.left = hoverAreaX + "px";
  
           // before after text fade in out
          let beforeTextLeft = beforeText.getBoundingClientRect().left;
          let afterTextLeft = afterText.getBoundingClientRect().left;
          if (beforeTextLeft + beforeText.offsetWidth > eventX) {
            beforeText.classList.add("active");
          } else if (afterTextLeft < eventX) {
            afterText.classList.add("active");
          } else {
            afterText.classList.remove("active");
            beforeText.classList.remove("active");
          }
        } else if (
          dir === "y" &&
          eventY >= imgTop &&
          eventY <= imgTop + imgArea.clientHeight
        ) {
          afterImg.style.height = hoverAreaY + "px";
          sliderBar.style.top = hoverAreaY + "px";
  
          // before after text fade in out
          let beforeTextTop = beforeText.getBoundingClientRect().top;
          let afterTextTop = afterText.getBoundingClientRect().top;
          if (afterTextTop < eventY) {
            afterText.classList.add("active");
          } else if (beforeTextTop + beforeText.offsetHeight > eventY) {
            beforeText.classList.add("active");
          } else {
            afterText.classList.remove("active");
            beforeText.classList.remove("active");
          }
        }
      }
    });
  }
  // clip path img compare==========================================
  function clipImgCompare(item, dir) {
    let clippingImg = item.querySelector(".bwdic-after");
    let beforeImg = item.querySelector(".bwdic-before");
    //before after text
    let beforeText = item.querySelector('.bwdic-text-before')
    let afterText = item.querySelector('.bwdic-text-after')


    let IW;
    let IH;
  
    let RY;
    let RX;

  
    let imgLoadInterval ;
    // get img width
    function getImgWidth(){
      if(item.querySelector(".bwdic-before").offsetWidth){
        IW = item.querySelector(".bwdic-before").offsetWidth
        IH = item.querySelector(".bwdic-before").offsetHeight
      }else{
        imgLoadInterval = setInterval(() => {
          let imgWidth = item.querySelector(".bwdic-before").offsetWidth
          if(imgWidth){
            clearInterval(imgLoadInterval);
            IH = item.querySelector(".bwdic-before").offsetHeight
            IW = imgWidth;
          }
        }, 200);
      }
    }
    getImgWidth()

    beforeImg.addEventListener("mousemove", (e) => {
      let CX = e.clientX;
      let CY = e.clientY;
      let imgLDsc = beforeImg.getBoundingClientRect().left;
      let imgTDsc = beforeImg.getBoundingClientRect().top;
  
      let X = CX - imgLDsc;
      let Y = CY - imgTDsc;
      X = Math.floor(X);
      Y = Math.floor(Y);

 
      if (CY >= imgTDsc && CY <= imgTDsc + IH && dir === "h") {
        // lateRender
        setTimeout(() => {
          RY = Y;
          clippingImg.style.clipPath = `path("M 0 0 L 0 ${RY} L ${X} ${Y} L ${IW} ${RY} L ${IW} 0 L 0 0 Z")`;
        }, 200);
        clippingImg.style.clipPath = `path("M 0 0 L 0 ${RY} L ${X} ${Y} L ${IW} ${RY} L ${IW} 0 L 0 0 Z")`;
  
        // before text hide show
        let beforeTop = beforeText.getBoundingClientRect().top;
        let afterTop = afterText.getBoundingClientRect().top;
  
        if (beforeTop + beforeText.offsetHeight >= CY) {
          beforeText.classList.add("active");
        }
        else if (afterTop < CY) {
          afterText.classList.add("active");
        } else {
          afterText.classList.remove("active");
          beforeText.classList.remove("active");
        }


      } else if (((CX >= imgLDsc) && (CX <= imgLDsc + IW)) && dir === "w") {
  
        console.log('condition is true');
        
        // lateRender
        setTimeout(() => {
          RX = X;
          clippingImg.style.clipPath = `path("M 0 0 L ${RX} 0 L ${X} ${Y} L ${RX} ${IH} L 0 ${IH} L 0 0 Z")`;
  
        }, 200);
        clippingImg.style.clipPath = `path("M 0 0 L ${RX} 0 L ${X} ${Y} L ${RX} ${IH} L 0 ${IH} L 0 0 Z")`;
  
        // before text hide show
        let beforeLeft = beforeText.getBoundingClientRect().left;
        let afterLeft = afterText.getBoundingClientRect().left;
  
        if (beforeLeft + beforeText.offsetWidth >= CX) {
          beforeText.classList.add("active");
        }
        else if (afterLeft < CX) {
          afterText.classList.add("active");
        } else {
          afterText.classList.remove("active");
          beforeText.classList.remove("active");
        }
      }
    });
  }
  // all imgCom player
  const ICimgComPlayer = () => {
    let allCounterCommon = document.querySelectorAll(".bwdic-compare-item");
    for (let item of allCounterCommon) {
      if (item.classList.contains("bwdic-compare-item-5")) {
        IChoverImgCompare(item, "x");
      } else if (item.classList.contains("bwdic-y-IC-item")) {
        IChoverImgCompare(item, "y");
      } else if(item.classList.contains("bwdic-compare-item-9")){      
        clipImgCompare(item, "h");
      } else if(item.classList.contains("bwdic-compare-item-10")){
        clipImgCompare(item, "w");
      }
      else {
        ICinputImgCompare(item);
      }
    }
    
  };
  
  // window resize to call========================
  (function () {
    window.addEventListener("resize", () => {
      ICimgComPlayer();
    });
  })();
  
  // editMode active or not
  let ICeditModeObserver = (getEditMode) => {
    // elementor render observing
    const observer = new MutationObserver((mutations) => {
      mutations.map((record) => {
        if (record.addedNodes.length) {
          record.addedNodes.forEach((singleItem) => {
            if (singleItem.nodeName == "DIV") {
              if (singleItem.querySelector(".bwdic-compare-item")) {
                let observedItem = singleItem.querySelector(".bwdic-compare-item");
  
                
                if (observedItem.classList.contains("bwdic-compare-item-5")) {
                  IChoverImgCompare(observedItem, "x");
                } else if (observedItem.classList.contains("bwdic-y-IC-item")) {
                  IChoverImgCompare(observedItem, "y");
                } else if(observedItem.classList.contains("bwdic-compare-item-9")){
                  clipImgCompare(observedItem, "h");
                } else if(observedItem.classList.contains("bwdic-compare-item-10")){
                  clipImgCompare(observedItem, "w");
                }
                 else {
                  ICinputImgCompare(observedItem);
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
  
  let ICeditModeChecker = () => {
    let myInterValId;
    if ( document.querySelector(".elementor-edit-area") || document.querySelector(".bwdic-compare-item")) {
      ICimgComPlayer();
    } else {
      myInterValId = setInterval(() => {
        let myElementorEditArea = document.querySelector(".elementor-edit-area");
        if (myElementorEditArea) {
          clearInterval(myInterValId);
          // play ===============        
          ICeditModeObserver(myElementorEditArea);
        }
      }, 300);
    }
  };
  ICeditModeChecker();


})()