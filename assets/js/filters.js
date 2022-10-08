// const { length } = require('file-loader');

window.addEventListener('DOMContentLoaded', () => {
  const inputSearch = document.querySelector('#search-input');
  const switchFilterActive = document.querySelector('#switch-filter-active');
  const currentPageInput = document.querySelector('#current-page');
  const btnDisplayCards = document.querySelector('.btn-display-card');
  const btnDisplayTable = document.querySelector('.btn-display-list');

  // const tooltips = document.querySelectorAll('.tooltip');

  let mode = '';
  let previousMode = '';
  let searchValue = '';
  let isActive = '';
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
    mode = el.classList.contains('btn-display-card') ? 'cards' : 'table';
    // tooltips.forEach((el) => el.hide());
    console.log('click');
    handleDisplayBtns(mode);
    if (previousMode != mode) {
      handleFilters();
    }
  };

  [btnDisplayCards, btnDisplayTable].forEach((el) => {
    el.addEventListener('click', handleDisplayModeStructures);
  });

  const handleFilters = (paginationPage = '') => {
    let Params = new URLSearchParams();
    currentPage = currentPageInput.value;
    // Get values from structure page
    searchValue = inputSearch.value;

    mode = mode === null ? 'cards' : mode;
    previousMode = mode;
    // Build query string
    // let Params = new URLSearchParams({
    //   search: searchValue,
    //   opt: isActive,
    //   mode: mode,
    // });

    if (searchValue) {
      Params.append('search', searchValue);
      currentPage = 1;
    }
    if (switchFilterActive) {
      isActive = switchFilterActive.checked;
      Params.append('opt', isActive);
      currentPage = 1;
    }
    if (mode) {
      Params.append('mode', mode);
    }
    Params.append('page', currentPage);
    // console.log(Params.toString());

    // Get current url
    const Url = new URL(window.location.href);
    const urlPathname = Url.pathname;
    // console.log(Url);

    url = urlPathname + '?' + Params.toString() + '&ajax=1';

    // Ajax request
    fetch(url, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (urlPathname === '/admin/structure') {
          let structureListContent = document.querySelector(
            '#structure-list-content'
          );
          structureListContent.innerHTML = data.content;
        } else if (urlPathname === '/admin/franchise') {
          let franchiseListContent = document.querySelector(
            '#franchise-list-content'
          );
          franchiseListContent.innerHTML = data.content;
        } else if (urlPathname === '/admin/commercial') {
          let commercialListContent = document.querySelector(
            '#commercial-list-content'
          );
          commercialListContent.innerHTML = data.content;
        } else if (urlPathname === '/admin/feature') {
          let featureListContent = document.querySelector(
            '#feature-list-content'
          );
          featureListContent.innerHTML = data.content;
        }

        // update url
        history.pushState(
          {},
          null,
          Url.pathname + '?' + Params.toString()
          // Url.pathname + '?' + Params.toString() + '&page=' + currentPage
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
  inputSearch.addEventListener('keyup', handleFilterSearchParam);
  // if (typeof switchFilterActive !== 'undefined' || switchFilterActive != null) {
  if (switchFilterActive) {
    switchFilterActive.addEventListener('change', handleFilters);
  }
});
