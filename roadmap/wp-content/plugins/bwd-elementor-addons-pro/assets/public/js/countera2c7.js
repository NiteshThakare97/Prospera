//counter //counter inner function
let counterMain = (counterUp, countTime) => {
  let counterValues = [];
  for (let item of counterUp) {
    counterValues.push(Number(item.innerText));
  }

  let counterSetting = {
    exactTime: countTime / 7,
    timeCount: 1,
    interValId: "",
  };

  for (let i = 0; i < counterValues.length; i++) {
    let countNumWithTime = counterValues[i] / counterSetting.exactTime;

    let count = countNumWithTime;
    function counterManagement() {
      counterSetting.interValId = setTimeout(() => {
        counterUp[i].innerHTML = Math.round(count);
        count = count + countNumWithTime;
        counterSetting.timeCount++;
        counterManagement();
        if (count > counterValues[i]) {
          clearTimeout(counterSetting.interValId);
          counterUp[i].innerHTML = counterValues[i];
        }
      }, 1);
    }
    counterManagement();
  }
};
//counter wrapper
function scrollToPlay(counter) {
  let countDuration = counter.querySelector(".bwdc-count-duration");
  let counterVal = counter.querySelectorAll(".bwdc-num-container");
  let durationValue = parseInt(countDuration.value);

  let exactPositionToPlay = () => {
    let windowHeight = window.innerHeight / 3;
    let counterTopDsc = counter.getBoundingClientRect().top;
    if (windowHeight > counterTopDsc) {
      counterMain(counterVal, durationValue);
      document.removeEventListener("scroll", exactPositionToPlay);
    }
  };
    // play with scroll event==========
    let playCounterWithScroll =()=>{
    document.addEventListener("scroll", exactPositionToPlay);
   }

   // if the counter is in it's absolute position
    let windowHeight = window.innerHeight / 3;
    let counterTopDsc = counter.getBoundingClientRect().top;
    if (windowHeight > counterTopDsc) {
      exactPositionToPlay();
      playCounterWithScroll = null;
    }
    else{
      playCounterWithScroll();
    }
}
//all counter player
const counterPlayer = () => {
  let allCounterCommon = document.querySelectorAll(".bwdc-counter-common");
  for (item of allCounterCommon) {
    scrollToPlay(item);
  }

  // elementor render observing
  let elementorElem = document.querySelector(".elementor-element");
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((record) => {
      if (record.addedNodes.length) {
        for (let i = 0; i < record.addedNodes.length; i++) {
          if (
            record.addedNodes[i].nodeName === "DIV" &&
            record.addedNodes[i].className === "elementor-widget-container"
          ) {
            let changedCounter = record.addedNodes[i].querySelector(
              ".bwdc-counter-common"
            );
            scrollToPlay(changedCounter);
          }
        }
      }
    });
  });
  observer.observe(elementorElem, {
    subtree: true,
    childList: true,
  });
};
// is counter active or not
let CounterChecker = () => {
  let intervalId;
  if (document.querySelector(".bwdc-counter-common")) {
    counterPlayer();
    
  } else {
    intervalId = setInterval(() => {
      let counterCommon = document.querySelector(".bwdc-counter-common");
      if (counterCommon) {
        clearInterval(intervalId);
        // play counter================
        counterPlayer();
      }
    }, 100);
  }
};
CounterChecker();
