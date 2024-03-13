"use strict";
//selector function
function selector(elem, all) {
  return all ? document.querySelectorAll(elem) : document.querySelector(elem);
}
// add a tag and link
function linkAdder(heading, link) {
  if (link) {
    if(heading.classList.contains('bwdah-split-text')){
      let headingInner = heading.querySelector('.bwdah-heading-inner');
      headingInner.style.margin = '0 10px';
    }else if(heading.classList.contains('bwdah-scroll')){
      let headingInner = heading.querySelector('.bwdah-heading-inner');
      headingInner.style.margin = '0 10px';
    }
    else{
      let headingInner = heading.querySelector('.bwdah-heading-inner-wrapper');
      headingInner.style.margin = '0 10px';
    }
   
    let wrapperLink = document.createElement('a');
    wrapperLink.href = link;
    wrapperLink.classList.add('bwdcd-is-link-add');

   let elems = heading.querySelectorAll('*')

    for(let i=0; i< elems.length; i++){
      wrapperLink.appendChild(elems[i]);
    }
    heading.innerHTML ='';
    heading.appendChild(wrapperLink)
  }
}
// split animating text==============
function splitAnimatingText(heading) {
  let animTimingWrapper = heading.querySelector(".bwdcd-anim-timing-unit");
  let headingLink = animTimingWrapper.getAttribute("data-url");
  linkAdder(heading, headingLink);

  let headingInner = heading.querySelector(".bwdah-heading-inner");
  //timing unit select
  let speed = animTimingWrapper.getAttribute("data-speed");
  let delay = animTimingWrapper.getAttribute("data-delay");
  let isInfinite = animTimingWrapper.getAttribute("data-inf");

  // speed type conversion
  if (typeof speed != "number") {
    speed = parseInt(speed);
  }
  // delay type conversion
  if (typeof delay != "number") {
    delay = parseInt(delay);
  }

  let count = 0;
  let time2 = speed;
  // text splitting=================================
  let textContent = headingInner.innerText;
  let textSplit = textContent.split("");
  headingInner.textContent = "";

  for (let i = 0; i < textSplit.length; i++) {
    headingInner.innerHTML += `<span>${textSplit[i]}</span>`;
  }
  function spaceSpanSelect() {
    let allSpan = headingInner.querySelectorAll("span");
    for (let i = 0; i < allSpan.length; i++) {
      if (allSpan[i].textContent === " ") {
        let prevSib = allSpan[i].previousElementSibling;
        allSpan[i].style.marginRight = 10 + "px";
      }
    }
  }
  function tick() {
    let span = headingInner.querySelectorAll("span")[count];

    if (count === textSplit.length) {
      time2 = delay;
      setTimeout(() => {
        count = 0;
        let allSpan = headingInner.querySelectorAll("span");
        for (let item of allSpan) {
          item.classList.remove("bwd-fade");
        }
     
      }, delay);
    } else {
      time2 = speed;
      span.classList.add("bwd-fade");
      count++;
    }
    if (isInfinite === "yes") {
      setTimeout(tick, time2);
    }
  }
  spaceSpanSelect();
  tick();
}
//typing effect
function typingRoot(heading) {
  let animTimingWrapper = heading.querySelector(".bwdcd-anim-timing-unit");

  let headingLink = animTimingWrapper.getAttribute("data-url");
  linkAdder(heading, headingLink);

  let speed = animTimingWrapper.getAttribute("data-speed");
  let delay = animTimingWrapper.getAttribute("data-delay");
  let isInfinite = animTimingWrapper.getAttribute("data-inf");

  // speed type conversion
  if (typeof speed != "number") {
    speed = parseInt(speed);
  }
  // delay type conversion
  if (typeof delay != "number") {
    delay = parseInt(delay);
  }
  const texts = [];
  let counter2 = 0;
  let letter = "";
  let index = 0;
  function collectText() {
    let allItems = heading.querySelectorAll(
      ".bwdah-heading-inner"
    );
    for (let item of allItems) {
      texts.push(item.innerText);
      item.innerText = "";
    }
  }
  let textBox = heading.querySelector(".bwdah-heading-inner-wrapper");
  function typing() {
    if (counter2 === texts.length) {
      counter2 = 0;
    }
    letter = texts[counter2].slice(0, ++index);
    textBox.innerHTML = letter;
    if (letter.length === texts[counter2].length) {
      setTimeout(() => {
        counter2++;
        index = 0;
        if (isInfinite === "yes") {
          typing();
        }
      }, delay);
    } else {
      if (isInfinite === "yes") {
        setTimeout(typing, speed);
      }
    }
  }
  collectText();
  typing();
}
//scroll animation=========
function scrollAnimation(heading) {
  let animTimingWrapper = heading.querySelector(".bwdcd-anim-timing-unit");
  let headingLink = animTimingWrapper.getAttribute("data-url");
  linkAdder(heading, headingLink);

  let speed = animTimingWrapper.getAttribute("data-speed");
  // speed type conversion
  if (typeof speed != "number") {
    speed = parseInt(speed);
  }
  window.addEventListener("scroll", () => {
    let windowHeight = window.innerHeight / 1.5;
    let textTopHeight = heading.getBoundingClientRect().top;
    if (textTopHeight < windowHeight) {
      heading.classList.add("active");
      heading.style.transition = speed + "ms";
    } else {
      heading.classList.remove("active");
      heading.style.transition = "";
    }
  });
}
//text animation
function textAnimation(heading) {
  let animTimingWrapper = heading.querySelector(".bwdcd-anim-timing-unit");
  let headingLink = animTimingWrapper.getAttribute("data-url");
  linkAdder(heading, headingLink);

  let duration = animTimingWrapper.getAttribute("data-speed");
  let delay = animTimingWrapper.getAttribute("data-delay");
  let isInfinite = animTimingWrapper.getAttribute("data-inf");

  // duration & delay datatype Check
  if (typeof duration != "number") {
    duration = parseInt(duration);
  }
  if (typeof delay != "Number") {
    delay = parseInt(delay);
  }
  let count = 0;
  let allText = [];

  let headingInner2 = heading.querySelectorAll(".bwdah-heading-inner");
  for (let item of headingInner2) {
    allText.push(item.textContent);
    item.textContent = "";
  }
  // text rendering
  let headingWrapper = heading.querySelector(".bwdah-heading-inner-wrapper");
  headingWrapper.innerHTML = allText[count];
  headingWrapper.classList.add("active");

  setTimeout(() => {
    headingWrapper.classList.remove("active");
  }, duration);

  let mainAnimationFun = () => {
    if (count === allText.length) {
      count = 0;
    }
    headingWrapper.innerHTML = allText[count];

    setTimeout(() => {
      headingWrapper.classList.add("active");
    }, duration);

    setTimeout(() => {
      headingWrapper.classList.remove("active");
      mainAnimationFun();
    }, delay + duration);
    count++;
  };
  if (isInfinite === "yes") {
    mainAnimationFun();
  }
}

// all AH player
const AHPlayer = () => {
  let allAHCommon = document.querySelectorAll(".bwdah-heading");
  for (let item of allAHCommon) {
    if (item.classList.contains("bwdah-split-text")) {
      splitAnimatingText(item);
    } else if (item.classList.contains("bwdah-typing-text")) {
      typingRoot(item);
    } else if (item.classList.contains("bwdah-scroll")) {
      scrollAnimation(item);
    } else if (item.classList.contains("bwdah-multiple-text")) {
      textAnimation(item);
    }
  }
};
// editMode active or not
let AHeditModeObserver = (getEditMode) => {
  // elementor render observing
  const observer = new MutationObserver((mutations) => {
    mutations.map((record) => {
      if (record.addedNodes.length) {
        record.addedNodes.forEach((singleItem) => {
          if (singleItem.nodeName == "DIV") {
            if (singleItem.querySelector(".bwdah-heading")) {
              let observedItem = singleItem.querySelector(".bwdah-heading");
              if (observedItem.classList.contains("bwdah-split-text")) {
                splitAnimatingText(observedItem);
              } else if (observedItem.classList.contains("bwdah-typing-text")) {
                typingRoot(observedItem);
              } else if (observedItem.classList.contains("bwdah-scroll")) {
                scrollAnimation(observedItem);
              } else if (
                observedItem.classList.contains("bwdah-multiple-text")
              ) {
                textAnimation(observedItem);
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

let AHeditModeChecker = () => {
  let myInterValId;
  if (
    document.querySelector(".elementor-edit-area") ||
    document.querySelector(".bwdah-heading")
  ) {
    AHPlayer();
  } else {
    myInterValId = setInterval(() => {
      let myElementorEditArea = document.querySelector(".elementor-edit-area");
      if (myElementorEditArea) {
        clearInterval(myInterValId);
        // play ===============
        AHeditModeObserver(myElementorEditArea);
      }
    }, 300);
  }
};
AHeditModeChecker();
