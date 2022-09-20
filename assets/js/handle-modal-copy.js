// window.addEventListener('DOMContentLoaded', () => {
//   // let btnsCardsModal = document.querySelectorAll('.card-btn-modal');
//   // let btnsCardsModal = document.querySelectorAll(
//   //   '.btn-enable, .btn-disable, .card-btn-modal'
//   // );
//   let btnsCardsModal = document.querySelectorAll(
//     '.card-btn-modal button, .card-btn-modal, .btn-enable, .btn-disable'
//   );
//   console.log('btnsCardsModal', btnsCardsModal);
//   // const btnsCardsModal = document.querySelectorAll(
//   //   'card.d-none .card-btn-modal, card:not([style*="display: none;"]) .card-btn-modal,table:not([style*="display: none;"]) .card-btn-modal, table .card-btn-modal'
//   // );

//   const handleModal = (e) => {
//     console.log('click btn');
//     let bodyModal = document.querySelector('.modal-body');
//     let confirmationBtnModal = document.querySelector(
//       '#confirmation-btn-modal'
//     );
//     // Configuration of the madal
//     const options = {
//       keyboard: false,
//       backdrop: true,
//       focus: true,
//     };

//     let modal = new bootstrap.Modal(
//       document.getElementById('modal_confirmation'),
//       options
//     );
//     // Get current url
//     const Url = new URL(window.location.href);
//     const urlPathname = Url.pathname;

//     if (urlPathname === '/commercial') {
//       // Change body message + validation Btn of the modal according to the case : disable or enable the commercial
//       // const btnValue = e.target.textContent.trim();
//       console.log(e.target.classList.contains('enable-icon', 'btn-enable'));
//       console.log(e.target.classList);
//       let isBtnEnableCommercial =
//         e.target.classList.contains('enable-icon') ||
//         // e.target.classList.contains('btn-disable') ||
//         e.target.classList.contains('btn-enable');
//       console.log(isBtnEnableCommercial);

//       if (isBtnEnableCommercial) {
//         bodyModal.innerText = "Confirmez vous l'activation du commercial ?";
//         confirmationBtnModal.innerText = 'Activer';
//       } else {
//         bodyModal.innerText = 'Confirmez vous la désactivation du commercial ?';
//         confirmationBtnModal.innerText = 'Désactiver';
//       }
//     }

//     modal.show();

//     const cancelBtnModal = document.querySelector('#cancel-btn-modal');
//     const closeBtnModal = document.querySelector('.modal .btn-close');
//     let form = e.target.closest('form');

//     confirmationBtnModal.addEventListener('click', () => form.submit());
//     [closeBtnModal, cancelBtnModal].forEach((el) => {
//       el.addEventListener('click', () => {
//         modal.hide();
//         let modalBackdrop = document.querySelector('.modal-backdrop');
//         // modalBackdrop.remove();
//         if (modalBackdrop) {
//           modalBackdrop.remove();
//         }
//       });
//     });
//   };

//   const btnDisplayCards = document.querySelector('.btn-display-card');
//   const btnDisplayTable = document.querySelector('.btn-display-list');

//   [btnDisplayCards, btnDisplayTable].forEach((el) => {
//     el.addEventListener('click', () => {
//       // btnsCardsModal = document.querySelectorAll('.btn-disable, .btn-enable');
//       btnsCardsModal = document.querySelectorAll(
//         '.card-btn-modal button, .btn-enable, .btn-disable'
//       );
//       console.log('click table card');
//       console.log(btnsCardsModal);
//     });
//   });

//   btnsCardsModal.forEach((btnCardModal) => {
//     btnCardModal.addEventListener('click', handleModal);
//   });
// });

/////////////////

// window.addEventListener('DOMContentLoaded', () => {
//   // let btnsCardsModal = document.querySelectorAll('.card-btn-modal');
//   // let btnsCardsModal = document.querySelectorAll(
//   //   '.btn-enable, .btn-disable, .card-btn-modal'
//   // );
//   let btnsCardsModal = document.querySelectorAll(
//     '.card-btn-modal button, .card-btn-modal, .btn-enable, .btn-disable'
//   );
//   console.log('btnsCardsModal', btnsCardsModal);
//   // const btnsCardsModal = document.querySelectorAll(
//   //   'card.d-none .card-btn-modal, card:not([style*="display: none;"]) .card-btn-modal,table:not([style*="display: none;"]) .card-btn-modal, table .card-btn-modal'
//   // );

//   const handleModal = (e) => {
//     console.log('click btn');
//     // let bodyModal = document.querySelector('.modal-body');
//     // let confirmationBtnModal = document.querySelector(
//     //   '#confirmation-btn-modal'
//     // );
//     // // Configuration of the madal
//     // const options = {
//     //   keyboard: false,
//     //   backdrop: true,
//     //   focus: true,
//     // };

//     // let modal = new bootstrap.Modal(
//     //   document.getElementById('modal_confirmation'),
//     //   options
//     // );
//     // // Get current url
//     // const Url = new URL(window.location.href);
//     // const urlPathname = Url.pathname;

//     // if (urlPathname === '/commercial') {
//     //   // Change body message + validation Btn of the modal according to the case : disable or enable the commercial
//     //   // const btnValue = e.target.textContent.trim();
//     //   console.log(e.target.classList.contains('enable-icon', 'btn-enable'));
//     //   console.log(e.target.classList);
//     //   let isBtnEnableCommercial =
//     //     e.target.classList.contains('enable-icon') ||
//     //     // e.target.classList.contains('btn-disable') ||
//     //     e.target.classList.contains('btn-enable');
//     //   console.log(isBtnEnableCommercial);

//     //   if (isBtnEnableCommercial) {
//     //     bodyModal.innerText = "Confirmez vous l'activation du commercial ?";
//     //     confirmationBtnModal.innerText = 'Activer';
//     //   } else {
//     //     bodyModal.innerText = 'Confirmez vous la désactivation du commercial ?';
//     //     confirmationBtnModal.innerText = 'Désactiver';
//     //   }
//     // }

//     // modal.show();

//     // const cancelBtnModal = document.querySelector('#cancel-btn-modal');
//     // const closeBtnModal = document.querySelector('.modal .btn-close');
//     // let form = e.target.closest('form');

//     // confirmationBtnModal.addEventListener('click', () => form.submit());
//     // [closeBtnModal, cancelBtnModal].forEach((el) => {
//     //   el.addEventListener('click', () => {
//     //     modal.hide();
//     //     let modalBackdrop = document.querySelector('.modal-backdrop');
//     //     // modalBackdrop.remove();
//     //     if (modalBackdrop) {
//     //       modalBackdrop.remove();
//     //     }
//     //   });
//     // });
//   };

//   const btnDisplayCards = document.querySelector('.btn-display-card');
//   const btnDisplayTable = document.querySelector('.btn-display-list');

//   [btnDisplayCards, btnDisplayTable].forEach((el) => {
//     el.addEventListener('click', (e) => {
//       console.log('click btns filters');
//       let containerTable = document.querySelector(
//         '#container-table-commercial'
//       );
//       let containerCards = document.querySelector(
//         '#container-cards-commercial'
//       );
//       //     // btnsCardsModal = document.querySelectorAll('.btn-disable, .btn-enable');
//       btnsCardsModal = document.querySelectorAll(
//         '.card-btn-modal button, .btn-enable, .btn-disable'
//       );
//       console.log('====================================');
//       console.log(e.target.closest('button'));
//       let btnSelected = e.target.closest('button');
//       console.log('====================================');
//       if (btnSelected.classList.contains('btn-display-card')) {
//         // btnsCardsModal = document.querySelectorAll(
//         //   '.card-btn-modal button, .btn-enable, .btn-disable'
//         // );
//         containerTable.classList.add('invisible');
//         containerCards.classList.remove('invisble');
//       } else if (btnSelected.classList.contains('btn-display-list')) {
//         // btnsCardsModal = document.querySelectorAll(
//         //   '.card-btn-modal button, .btn-enable, .btn-disable'
//         // );
//         containerTable.classList.remove('invisible');
//         containerCards.classList.add('invisble');
//       }
//       //     console.log('click table card');
//       //     console.log(btnsCardsModal);
//     });
//   });

//   btnsCardsModal.forEach((btnCardModal) => {
//     btnCardModal.addEventListener('click', handleModal);
//   });
// });
