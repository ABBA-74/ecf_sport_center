window.addEventListener('DOMContentLoaded', (event) => {
  const inputFranchiseName = document.querySelector('#structure_franchise');

  inputFranchiseName.addEventListener('change', (e) => {
    const inputGlobalesPermissions = document.querySelectorAll(
      '#structure_feature input'
    );
    const idFranchise = e.target.value;

    if (idFranchise !== null) {
      const token = document.querySelector('#structure__token').value;
      // Get current url
      const Url = new URL(window.location.href);

      // set url for fetch api
      const url = Url.pathname + '/getpermissions/' + idFranchise;

      // init permission
      const initCheckboxPermission = () => {
        inputGlobalesPermissions.forEach((input) => {
          input.removeAttribute('checked');
        });
      };

      if (idFranchise !== '') {
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
        fetch(url, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
          },
          // body: JSON.stringify(dataFranchise),
          credentials: 'include',
        })
          .then((res) => res.json())
          .then(($data) => {
            initCheckboxPermission();
            handleDisplayGlobalesPermissions($data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        // placeholder of input-select choose franchise selected
        initCheckboxPermission();
      }
    }
  });
});
