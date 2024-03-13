"use strict";
(() => {

  
  function toggleFunc(swtItem){
	  const swtrBtn = swtItem.querySelector('.bwdcs-switcher-btn');
	  const swtrTab = swtItem.querySelector('.bwdcs-switcher-content-tab');
	  const swtrContentArea = swtItem.querySelector('.bwdcs-switcher-content-area');
	  const allSwtrTitle = swtItem.querySelectorAll('.bwdcs-content-title');

	  allSwtrTitle[0].classList.add('active-title')

	  swtrBtn.addEventListener('click',()=>{
		  swtrBtn.classList.toggle('active')
		  swtrTab.classList.toggle('seleceted')
		  swtrContentArea.classList.toggle('bwdcs-change-item')
		  if(swtrTab.classList.contains('seleceted') ){
			  allSwtrTitle[1].classList.add('active-title')
			  allSwtrTitle[0].classList.remove('active-title')
		  }else {
			  allSwtrTitle[1].classList.remove('active-title')
			  allSwtrTitle[0].classList.add('active-title')
		  }
	  })
  }

  //all switcherContent player
  const switcherContentPlayer = () => {
	let allswitcherContentCommon = document.querySelectorAll(".bwdcs-content-switcher-common" );

	for (let item of allswitcherContentCommon) {
	  toggleFunc(item);
	}
  };

  // editMode active or not
  let bwdcsContentSwitcherEditModeObserver = (getEditMode) => {
	// elementor render observing
	const bwdcsContentSwitcherObserver = new MutationObserver((mutations) => {
	  mutations.map((record) => {
		if (record.addedNodes.length) {
		  record.addedNodes.forEach((singleItem) => {
			if (singleItem.nodeName == "DIV") {
			  if (singleItem.querySelector(".bwdcs-content-switcher-common")) {
				let observedItem = singleItem.querySelector(
				  ".bwdcs-content-switcher-common"
				);
				toggleFunc(observedItem);
			  }
			}
		  });
		}
	  });
	});

	bwdcsContentSwitcherObserver.observe(getEditMode, {
	  subtree: true,
	  childList: true,
	});
  };
  // edit mode checker
  (() => {
	let bwdcsMyInterValId;
	if (
	  document.querySelector(".elementor-edit-area") ||
	  document.querySelector(".bwdcs-content-switcher-common")
	) {
	  switcherContentPlayer();
	} else {
	  bwdcsMyInterValId = setInterval(() => {
		let ElementorEditArea = document.querySelector(".elementor-edit-area") || document.querySelector(".page");
		
		if (ElementorEditArea) {
		  clearInterval(bwdcsMyInterValId);
		  // play ===============
		  bwdcsContentSwitcherEditModeObserver(ElementorEditArea);
		}
	  }, 300);
	}
  })();
})();