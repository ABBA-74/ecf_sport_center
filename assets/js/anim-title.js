window.addEventListener('DOMContentLoaded', () => {
  let titleAnimJs = document.querySelector('h1.anim-title-js');
  let titleH1 = document.querySelector('h1');
  let titleContent = document.querySelector('h1').textContent;
  const InnerWidthToggleAnimTitle = 992;
  let flag = false;

  const reportWindowSize = (e) => {
    if (window.innerWidth < InnerWidthToggleAnimTitle) {
      // reset title + reset flag
      noAnimTitle();
      flag = false;
    } else {
      if (!flag) {
        animTitle();
        flag = true;
      }
    }
  };
  window.addEventListener('resize', reportWindowSize);

  /// Reset title for small screen (No animation for better performance)
  const noAnimTitle = () => {
    // delete all child element dom
    let titleSpan = document.querySelectorAll('h1 span');
    if (titleSpan) {
      [...titleSpan].forEach((el) => titleH1.removeChild(el));
    }

    // Add content to the h1 dom element + style
    titleH1.innerText = titleContent;
    titleH1.style.color = '#FFF';
  };

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
            if (element) {
              element.style.transform = 'rotateY(0deg) scale(1)';
              // element.style.color = 'white';
              element.style.color = '#ff9000';
              if (indexBreakLine !== '' && j > indexBreakLine) {
                element.style.color = 'white';
              }
              element.style.opacity = '1';
            }
          }, 100 * j);
          // setInterval(() => {
          //   location.reload();
          // }, 200 * lengthTitle + 5000);
        }
      }
    });
  };
  window.innerWidth < InnerWidthToggleAnimTitle ? noAnimTitle() : animTitle();
});
