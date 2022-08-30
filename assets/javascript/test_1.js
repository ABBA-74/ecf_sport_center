// alert('test_1');

const btnListStructure = document.querySelector('.btn-display-list-structure');
const btnCardStructure = document.querySelector('.btn-display-card-structure');
const cardsStructure = document.querySelector('.container-cards-structure');
const tableStructure = document.querySelector('.container-table-structure');

const handleDisplayListStructure = () => {
  tableStructure.classList.remove('d-none');
  cardsStructure.classList.add('d-none');
  //   btnListStructure.classList.remove('btn-primary');
  //   btnListStructure.classList.add('btn-outline-primary');
  //   //   btnCardStructure.classList.remove('btn-outline-primary');
  //   //   btnCardStructure.classList.add('btn-primary');
};
const handleDisplayCardStructure = () => {
  tableStructure.classList.add('d-none');
  cardsStructure.classList.remove('d-none');
  //   //   btnListStructure.classList.remove('btn-outline-primary');
  //   //   btnListStructure.classList.add('btn-primary');
  //   btnCardStructure.classList.remove('btn-primary');
  //   btnCardStructure.classList.add('btn-outline-primary');
};
if (btnListStructure != null && btnCardStructure != null) {
  btnListStructure.addEventListener('click', handleDisplayListStructure);
  btnCardStructure.addEventListener('click', handleDisplayCardStructure);
  window.addEventListener('resize', (e) => {
    if (window.innerWidth < 992) {
      handleDisplayCardStructure();
    }
  });
}
