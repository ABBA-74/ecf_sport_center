window.addEventListener('DOMContentLoaded', () => {
  const inputSearch = document.querySelector('#search-input');
  const switchFilterActive = document.querySelector('#switch-filter-active');
  const currentPageInput = document.querySelector('#current-page');
  const btnDisplayCards = document.querySelector('.btn-display-card');
  const btnDisplayTable = document.querySelector('.btn-display-list');

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
    searchValue = inputSearch.value;
    isActive = switchFilterActive.checked;

    mode = mode === null ? 'cards' : mode;
    previousMode = mode;
    // Build query string
    let Params = new URLSearchParams({
      search: searchValue,
      opt: isActive,
      mode: mode,
    });
    // console.log(Params.toString());

    // Get current url
    const Url = new URL(window.location.href);
    const urlPathname = Url.pathname;
    // console.log(Url);

    url = urlPathname + '?' + Params.toString() + '&ajax=1';
    console.log('====================================');
    console.log(urlPathname);
    console.log('====================================');
    // Ajax request
    fetch(url, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (urlPathname === '/structure') {
          let structureListContent = document.querySelector(
            '#structure-list-content'
          );
          structureListContent.innerHTML = data.content;
        } else if (urlPathname === '/franchise') {
          let franchiseListContent = document.querySelector(
            '#franchise-list-content'
          );
          franchiseListContent.innerHTML = data.content;
        }
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
  inputSearch.addEventListener('keyup', handleFilterSearchParam);
  switchFilterActive.addEventListener('change', handleFilters);
});
