window.addEventListener('DOMContentLoaded', (event) => {
  const inputSearchStructure = document.querySelector('#search-structure');
  const inputStructureActive = document.querySelector('#switch-filter-active');
  const currentPageInput = document.querySelector('#current-page');
  const btnDisplayCards = document.querySelector('.btn-display-card-structure');
  const btnDisplayTable = document.querySelector('.btn-display-list-structure');

  let mode = '';
  let previousMode = '';
  let searchStructure = '';
  let isActiveStructure = '';
  let url = '';
  let currentPage = currentPageInput.value;

  const handleDisplayBtns = (mode) => {
    if (previousMode == mode) {
      if ((mode = 'cards')) {
        btnDisplayCards.classList.add('shadow-none');
        btnDisplayTable.classList.remove('shadow-none');
      } else {
        btnDisplayTable.classList.add('shadow-none');
        btnDisplayCards.classList.remove('shadow-none');
      }
    }
  };

  const handleDisplayModeStructures = (e) => {
    el = e.target.closest('button');
    mode = el.classList.contains('btn-display-card-structure')
      ? 'cards'
      : 'table';
    handleDisplayBtns(mode);
    if (previousMode != mode) {
      handleFilters();
    }
  };

  [btnDisplayCards, btnDisplayTable].forEach((el) => {
    el.addEventListener('click', handleDisplayModeStructures);
  });

  const handleFilters = (paginationPage = '') => {
    currentPage = currentPageInput.value;
    // console.log('current page', currentPage);
    // Get values from structure page
    searchStructure = inputSearchStructure.value;
    isActiveStructure = inputStructureActive.checked;

    mode = mode === null ? 'cards' : mode;
    previousMode = mode;
    // Build query string
    let Params = new URLSearchParams({
      search: searchStructure,
      opt: isActiveStructure,
      mode: mode,
    });
    // console.log(Params.toString());

    // Get current url
    const Url = new URL(window.location.href);
    // console.log(Url);

    url = Url.pathname + '?' + Params.toString() + '&ajax=1';

    // Ajax request
    fetch(url, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let structureListContent = document.querySelector(
          '#structure-list-content'
        );
        structureListContent.innerHTML = data.content;
        // console.log(data.content);

        // update url
        history.pushState(
          {},
          null,
          Url.pathname + '?' + Params.toString() + '&page=' + currentPage
        );

        //   // update href of pagination links
        //   // let pageLinks = document.querySelectorAll('.pagination .page-item a');
        //   // console.log(pageLinks);
      })
      .catch((error) => {
        console.log(error);
        // alert(error);
      });
  };

  const handleFilterSearchParam = (e) => {
    if (e.target.value.length === 0 || e.target.value.length > 3) {
      setTimeout(() => {
        handleFilters();
      }, 1000);
    }
  };

  // EventListener of the search input and checkbox from structure page
  inputSearchStructure.addEventListener('keyup', handleFilterSearchParam);
  inputStructureActive.addEventListener('change', handleFilters);
});
