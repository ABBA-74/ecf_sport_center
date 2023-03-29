window.addEventListener('DOMContentLoaded', () => {
  const inputSearch = document.querySelector('#search-input');
  const switchFilterActive = document.querySelector('#switch-filter-active');
  const currentPageInput = document.querySelector('#current-page');
  const btnDisplayCards = document.querySelector('.btn-display-card');
  const btnDisplayTable = document.querySelector('.btn-display-list');
  let isForceModeViewCards = false;

  let mode = '';
  let previousMode = '';
  let searchValue = '';
  let isActive = '';
  let url = '';
  let currentPage = currentPageInput.value;
  let timeoutId;

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

  const handleFetchData = () => {
    let loader = document.querySelector('.loader');
    let listContent = document.querySelector('.list-content');
    listContent.classList.add('d-none');
    // Launch the loader
    loader.classList.remove('d-none');

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
    fetchData(url, Params, CurrentUrl, loader);
  };

  // Ajax request - function fetch data
  const fetchData = (url, Params, CurrentUrl, loader) => {
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        // Remove the loader
        loader.classList.add('d-none');
        let listContent = document.querySelector('.list-content');
        listContent.classList.remove('d-none');
        listContent.innerHTML = data.content;
        // update url
        history.pushState(
          {},
          null,
          CurrentUrl.pathname + '?' + Params.toString()
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Search if char > 2 or after reinit (erase all content of the search input)
  const handleFilterSearchParam = (e) => {
    if (e.target.value.length === 0 || e.target.value.length > 2) {
      debounce(handleFetchData, 1000);
    }
  };

  const debounceFetchData = () => debounce(handleFetchData, 1000);

  // EventListener of the search input and checkbox from structure page
  inputSearch.addEventListener('keyup', handleFilterSearchParam);
  if (switchFilterActive) {
    switchFilterActive.addEventListener('change', debounceFetchData);
  }

  // ajax to get data for the chart-3 / polar area of all structures / debounce fn for performance every 1s ajax call
  function debounce(callback, delay) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback();
    }, delay);
  }
});
