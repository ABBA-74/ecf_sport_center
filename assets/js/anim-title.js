window.addEventListener('DOMContentLoaded', () => {
  /// Animation title
  let title = document.querySelector('h1.anim-title-js');
  let titleContent = title.textContent;
  // title.classList.remove = 'opacity-100';

  let main = document.querySelector('main');
  let indexBreakLine = '';

  if (main.classList.contains('structure_page_detail')) {
    indexBreakLine = 24;
  } else if (main.classList.contains('franchise_page_detail')) {
    indexBreakLine = 25;
  }

  title.innerHTML = '';
  title.style.textShadow = '0 4px 4px #000';
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
    title.appendChild(newSpan);
    if (indexBreakLine === i) {
      brElement = document.createElement('br');
      title.appendChild(brElement);
    }

    if (i == lengthTitle - 1) {
      title = document.querySelector('h1.anim-title-js');
      // title.classList.remove('invisible');
      for (let j = 0; j < lengthTitle; j++) {
        setTimeout(() => {
          const element = title.childNodes[j];
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
});
