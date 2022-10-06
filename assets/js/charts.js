document.addEventListener('DOMContentLoaded', function () {
  const inputGroupFranchise = document.getElementById('inputGroupFranchise');

  const handleGroupFranchise = (e) => {
    const optionsSelectInput = inputGroupFranchise.querySelectorAll('option');

    // get dataset from the selected option
    const idFranchiseSelected = e.target.value;
    const optionSelected = [...optionsSelectInput].filter((el) => {
      return idFranchiseSelected === el.value;
    });

    const qtyglobalPermission = optionSelected[0].dataset.globalPermissions;
    const qtyActiveGlobalPermission =
      optionSelected[0].dataset.activeGlobalPermission;
    const qtyActiveStructure = optionSelected[0].dataset.qtyActiveStructure;
    const qtyTotalStructure = optionSelected[0].dataset.qtyTotalStructure;

    // display the ratio inside the franchise card of dashboard > Permissions
    setRatioInnerText(
      'ratioGlobalsPermissions',
      qtyActiveGlobalPermission,
      qtyglobalPermission
    );
    // change the aspect of progress-bar according to the value > Permissions
    setProgressBar(
      '#card-dashboard-franchise #progress-bar-options',
      qtyActiveGlobalPermission,
      qtyglobalPermission
    );

    // display the ratio inside the franchise card of dashboard > Structures
    setRatioInnerText('ratioStructures', qtyActiveStructure, qtyTotalStructure);
    // change the aspect of progress-bar according to the value > Structures
    setProgressBar(
      '#card-dashboard-franchise #progress-bar-structures',
      qtyActiveStructure,
      qtyTotalStructure
    );

    // ajax to get data for the chart-3 / polar area of all structures
    handleChartPolarArea(idFranchiseSelected);
  };

  inputGroupFranchise.addEventListener('change', handleGroupFranchise);

  const setProgressBar = (elDom, qty, qtyTotal) => {
    const progressBar = document.querySelector(elDom);
    const valueProgressBarPercent = Math.floor((qty / qtyTotal) * 100);
    progressBar.style.width = `${valueProgressBarPercent}%`;
    progressBar.setAttribute('aria-valuenow', valueProgressBarPercent);
  };

  const setRatioInnerText = (elDom, qty, qtyTotal) => {
    const elDomRatio = document.getElementById(elDom);
    elDomRatio.innerText = `${qty} / ${qtyTotal}`;
  };

  const handleChartPolarArea = (idFranchiseSelected) => {
    handleAjax(idFranchiseSelected);
  };

  const handleAjax = (idFranchiseSelected) => {
    // Get current url
    const Url = new URL(window.location.href);
    const urlPathname = Url.pathname;

    let url = urlPathname + idFranchiseSelected;

    // Ajax request
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
        createChartPolarArea(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
});

const createChartPolarArea = (datas) => {
  renewCanavasChartPolarArea();
  const labels = datas[0][0];
  const dataPermsissions = datas[0][1];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Structure active',
        backgroundColor: ['#9be5647C', '#03ddcf7C', '#e46f627C'],
        borderWidth: 0,
        data: dataPermsissions,
      },
    ],
  };

  const config = {
    type: 'polarArea',
    data: data,
    options: {
      responsive: true,
      cutout: 96,
      plugins: {
        datalabels: {
          display: true,
          align: 'bottom',
          backgroundColor: '#ccc',
          color: 'red',
          borderRadius: 3,
          font: {
            size: 18,
          },
        },
        legend: {
          position: 'bottom',
          align: 'center',
          labels: {
            padding: 35,
            color: '#6c757d ',
            font: {
              size: 14,
            },
            padding: 10,
          },
        },
      },
    },
    gridLines: {
      display: true,
      drawBorder: false,
      color: '#6c757d33',
    },
  };

  const PermissionsChart = new Chart(
    document.getElementById('chartDetailsStructures'),
    config
  );
};

const renewCanavasChartPolarArea = () => {
  document.getElementById('chartDetailsStructures').remove();
  let canvas = document.createElement('canvas');
  canvas.setAttribute('id', 'chartDetailsStructures');
  // canvas.setAttribute('width', '300');
  // canvas.setAttribute('height', '100');
  document.querySelector('#chartjs-structures').appendChild(canvas);
};
