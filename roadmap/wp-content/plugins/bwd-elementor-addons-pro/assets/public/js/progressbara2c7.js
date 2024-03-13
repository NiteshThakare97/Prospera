"use strict";
function BWDProgressBar(progressWrapper){  
	let bwdProgressBox = progressWrapper.querySelectorAll('.bwd_progress_box');

	if(!bwdProgressBox.length){
		bwdProgressBox = progressWrapper.querySelectorAll('.bwd-progress');
	}
	for(let pbBox of bwdProgressBox){
		let allProgressBar = pbBox.querySelector('.bwd-progress .bwd_progress-bar');
		let allPbVal = pbBox.querySelector('.bwd_pb_val_con').innerText;
		allPbVal = parseInt(allPbVal);
		allProgressBar.style.overflow ='visible';
		allProgressBar.style.width = allPbVal + '%';
	}
}
// scroll to trigger
function scrollToPlayPB(PB){
	function playWithScrollPb(){
		let windowHeight = window.innerHeight / 2;
		let PBTopDsc = PB.getBoundingClientRect().top;
		if(windowHeight > PBTopDsc){
				BWDProgressBar(PB)
			document.removeEventListener("scroll", playWithScrollPb);
		}
	}
  // if already scroll cross the distance
  let windowHeight = window.innerHeight / 2;
  let PBTopDsc = PB.getBoundingClientRect().top;
  if(windowHeight > PBTopDsc){
      BWDProgressBar(PB)
    document.removeEventListener("scroll", playWithScrollPb);
  } else{
    document.addEventListener('scroll',playWithScrollPb);
  }
}
// all progressBar Player=========================
function AllPBPlayer(){
  let AllPbWrappers = document.querySelectorAll('.bwd_pb_common');
  for(let item of AllPbWrappers){
    scrollToPlayPB(item);
  }
}
// editMode active or not
let PBeditModeObserver = (getEditMode) => {
  // elementor render observing
  const observer = new MutationObserver((mutations) => {
    mutations.map((record) => {
      if (record.addedNodes.length) {
        record.addedNodes.forEach((singleItem) => {
          if (singleItem.nodeName == "DIV") {
            if (singleItem.querySelector(".bwd_pb_common")) {
              let observedItem = singleItem.querySelector(".bwd_pb_common");
              scrollToPlayPB(observedItem);
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

let PBeditModeChecker = () => {
  let myInterValId;
  if (
    document.querySelector(".elementor-edit-area") ||
    document.querySelector(".bwd_pb_common")
  ) {
    AllPBPlayer();
  } else {
    myInterValId = setInterval(() => {
      let viewPage = document.querySelector(".page");      
      if (viewPage) {
        clearInterval(myInterValId);
        // play ===============
        PBeditModeObserver(viewPage);
      }
    }, 300);
  }
};
PBeditModeChecker();
// editMode end ============================



