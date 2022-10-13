window.addEventListener('DOMContentLoaded', () => {
  const inputSearch = document.querySelector('#search-input');
  const switchFilterActive = document.querySelector('#switch-filter-active');
  const currentPageInput = document.querySelector('#current-page');
  const btnDisplayCards = document.querySelector('.btn-display-card');
  const btnDisplayTable = document.querySelector('.btn-display-list');
  let isForceModeViewCards = false;
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

  const handleDisplayMode = (e) => {
    el = e.target.closest('button');
    mode = el.classList.contains('btn-display-card') ? 'cards' : 'table';
    // tooltips.forEach((el) => el.hide());
    handleDisplayBtns(mode);
    if (previousMode != mode) {
      handleFetchData();
    }
  };

  [btnDisplayCards, btnDisplayTable].forEach((el) => {
    el.addEventListener('click', handleDisplayMode);
  });

  // Force to display cards if innerWidth < lg to prevent issue of table responsive view
  const switchCardsView = () => {
    if (window.innerWidth < 992) {
      isForceModeViewCards = true;
      // Launch once ajax only if previous mode was table
      if (
        typeof isFetchExecuted !== 'undefined' &&
        !isFetchExecuted &&
        mode === 'table'
      ) {
        handleFetchData();
        isFetchExecuted = true;
      }
    } else {
      isForceModeViewCards = false;
      isFetchExecuted = false;
    }
  };

  window.addEventListener('resize', switchCardsView);

  const handleFetchData = (paginationPage = '') => {
    let Params = new URLSearchParams();
    currentPage = currentPageInput.value;
    searchValue = inputSearch.value;

    if (isForceModeViewCards === false) {
      mode = mode === null ? 'cards' : mode;
    } else {
      mode = 'cards';
    }

    previousMode = mode;

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
    // Get current url
    const CurrentUrl = new URL(window.location.href);
    const urlPathname = CurrentUrl.pathname;

    url = urlPathname + '?' + Params.toString() + '&ajax=1';
    console.log(url);
    fetchData(url, Params, urlPathname, CurrentUrl);
  };

  // Ajax request - function fetch data
  const fetchData = (url, Params, urlPathname, CurrentUrl) => {
    fetch(url, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (urlPathname === '/admin/structures') {
          let structureListContent = document.querySelector(
            '#structure-list-content'
          );
          structureListContent.innerHTML = data.content;
        } else if (urlPathname === '/admin/franchises') {
          let franchiseListContent = document.querySelector(
            '#franchise-list-content'
          );
          franchiseListContent.innerHTML = data.content;
        } else if (urlPathname === '/admin/features') {
          let featureListContent = document.querySelector(
            '#feature-list-content'
          );
          featureListContent.innerHTML = data.content;
        } else if (
          [
            '/admin/users',
            '/admin/managers-structures',
            '/admin/managers-franchises',
            '/admin/commercials',
          ].includes(urlPathname)
        ) {
          let usersListContent = document.querySelector('#users-list-content');
          usersListContent.innerHTML = data.content;
        }
        // update url
        history.pushState(
          {},
          null,
          CurrentUrl.pathname + '?' + Params.toString()
          // Url.pathname + '?' + Params.toString() + '&page=' + currentPage
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFilterSearchParam = (e) => {
    if (e.target.value.length === 0 || e.target.value.length > 3) {
      setTimeout(() => {
        handleFetchData();
      }, 1000);
    }
  };

  // EventListener of the search input and checkbox from structure page
  inputSearch.addEventListener('keyup', handleFilterSearchParam);
  // if (typeof switchFilterActive !== 'undefined' || switchFilterActive != null) {
  if (switchFilterActive) {
    switchFilterActive.addEventListener('change', handleFetchData);
  }
});
