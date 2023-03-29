window.addEventListener('DOMContentLoaded', () => {
  const loader = document.querySelector('.wrapper-loader-permissions');
  const inputFranchiseName = document.querySelector('#structure_franchise');
  const formChecks = document.querySelectorAll('.form-check');
  const inputGlobalesPermissions = document.querySelectorAll(
    'input[type="checkbox"]'
  );

  // init permission > reset all permissions chechbox
  const initCheckboxPermission = () => {
    inputGlobalesPermissions.forEach((input) => {
      input.removeAttribute('checked');
    });
  };

  // Handle display globales permissions from ajax request
  const handleDisplayGlobalesPermissions = (data) => {
    // set aray of active permission according to the franchise selected
    idActiveFilter = [];
    data.forEach((el) => {
      idActiveFilter.push(el.feature.id);
    });

    // add attribut checked only for active permission input
    inputGlobalesPermissions.forEach((el) => {
      if (idActiveFilter.includes(+el.value)) {
        el.setAttribute('checked', 'checked');
      }
    });
  };

  // Ajax request
  const handleFetchData = (url) => {
    addDNoneCheckboxPermission();
    loader.classList.remove('d-none');
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        loader.classList.add('d-none');
        removeDNoneCheckboxPermission();
        initCheckboxPermission();
        handleDisplayGlobalesPermissions(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Handle permissions
  const handlePermissions = (idFranchise) => {
    if (idFranchise !== null) {
      // Get current url
      const Url = new URL(window.location.href);

      // set url for fetch api
      const url = Url.pathname + '/getpermissions/' + idFranchise;

      if (idFranchise !== '') {
        handleFetchData(url);
      } else {
        // placeholder of input-select choose franchise selected
        initCheckboxPermission();
      }
    }
  };

  // display none for all permissions chechbox
  const addDNoneCheckboxPermission = () => {
    formChecks.forEach((input) => {
      input.classList.add('d-none');
    });
  };

  // remove display none for all permissions chechbox
  const removeDNoneCheckboxPermission = () => {
    formChecks.forEach((input) => {
      input.classList.remove('d-none');
    });
  };

  // handlePermissions when domLoaded usefull in case form is not valid => reassign options from input already selected
  handlePermissions(inputFranchiseName.value);

  // EventListener
  inputFranchiseName.addEventListener('change', (e) => {
    idFranchise = e.target.value;
    handlePermissions(idFranchise);
  });
});
