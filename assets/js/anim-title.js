window.addEventListener('DOMContentLoaded', () => {
  let titleAnimJs = document.querySelector('h1.anim-title-js');
  let titleH1 = document.querySelector('h1');
  let titleSpan = document.querySelectorAll('h1 span');
  let titleContent = document.querySelector('h1').textContent;
  let isAnimTitle;
  // let isTitleWithAnimation = true;
  let flag = false;
  let toggle = false;
  let isTitleWithAnimation = false;
  const reportWindowSize = (e) => {
    console.log('//', window.innerWidth);
    let isAnimAlreadyDone = false;

    if (window.innerWidth < 578) {
      isSmallSizeScreen = true;
      // isAnimAlreadyDone = false;
      toggle = !toggle;
      titleH1.classList.remove('anim-title-js');
      // titleH1.removeAllChild();
      if (titleSpan) {
        [...titleSpan].forEach((el) => titleH1.removeChild(el));
      }
      titleH1.textContent = 'Liste Des Fonctionnalités';
      isTitleWithAnimation = false;
    } else {
      isSmallSizeScreen = false;
      // isAnimAlreadyDone = false;
      titleH1.classList.add('anim-title-js');
      !isTitleWithAnimation && animTitle();
    }

    if (toggle) {
      if (isSmallSizeScreen) {
        // stopAnim();
        // flag = true;
        toggle = !toggle;
        console.log('stop animation');
        titleH1.classList.remove('anim-title-js');
      } else {
        // startAnim();
        // isAnimAlreadyDone = true;
        // flag = true;
        toggle = !toggle;
        console.log('start animation');
      }
    }
  };
  window.addEventListener('resize', reportWindowSize);

  /// Animation title

  const animTitle = () => {
    // title.classList.remove = 'opacity-100';

    isTitleWithAnimation = true;
    let main = document.querySelector('main');
    let indexBreakLine = '';

    if (main.classList.contains('structure_page_detail')) {
      indexBreakLine = 24;
    } else if (main.classList.contains('franchise_page_detail')) {
      indexBreakLine = 25;
    }

    titleAnimJs.innerHTML = '';
    titleAnimJs.style.textShadow = '0 4px 4px #000';
    [...titleContent].forEach((el, i) => {
      const lengthTitle = [...titleContent].length;

      // create a new div element
      let newSpan = document.createElement('span');
      newSpan.style.display = 'inline-block';
      if (el === ' ') {
        newSpan.style.width = '1.5rem';
      }
      newSpan.style.transform = 'rotateY(90deg) scale(3.6)';
      newSpan.classList.add('translateAnimationClass');
      newSpan.style.transition =
        'transform .35s ease-in, color 1s ease-out, opacity 3s ease-in';
      // newSpan.style.color = '#ff9000';
      newSpan.style.color = 'white';
      newSpan.style.opacity = '.85';
      let newContent = document.createTextNode(el);

      // add the text node to the newly created div
      newSpan.appendChild(newContent);
      titleAnimJs.appendChild(newSpan);
      if (indexBreakLine === i) {
        brElement = document.createElement('br');
        titleAnimJs.appendChild(brElement);
      }

      if (i == lengthTitle - 1) {
        titleAnimJs = document.querySelector('h1.anim-title-js');
        // title.classList.remove('invisible');
        for (let j = 0; j < lengthTitle; j++) {
          setTimeout(() => {
            const element = titleAnimJs.childNodes[j];
            element.style.transform = 'rotateY(0deg) scale(1)';
            // element.style.color = 'white';
            element.style.color = '#ff9000';
            if (indexBreakLine !== '' && j > indexBreakLine) {
              element.style.color = 'white';
            }
            element.style.opacity = '1';
          }, 100 * j);
          // setInterval(() => {
          //   location.reload();
          // }, 200 * lengthTitle + 5000);
        }
      }
    });
  };
});
