// window.addEventListener('DOMContentLoaded', (event) => {
//   const btnListStructure = document.querySelector(
//     '.btn-display-list-structure'
//   );
//   const btnCardStructure = document.querySelector(
//     '.btn-display-card-structure'
//   );
//   const cardsStructure = document.querySelector('.container-cards-structure');
//   const tableStructure = document.querySelector('.container-table-structure');
//   const structurePage = document.querySelector('.structure_page');

//   const handleDisplayListStructure = () => {
//     localStorage.setItem('preference_mode', 'table');
//     //   tableStructure.classList.remove('d-none');
//     //   cardsStructure.classList.add('d-none');

//     handleFetch('table');
//     // structurePage.classList.add('display-list');
//     // structurePage.classList.remove('display-card');

//     //   btnListStructure.classList.remove('btn-primary');
//     //   btnListStructure.classList.add('btn-outline-primary');
//     //   //   btnCardStructure.classList.remove('btn-outline-primary');
//     //   //   btnCardStructure.classList.add('btn-primary');
//   };
//   const handleDisplayCardStructure = () => {
//     localStorage.setItem('preference_mode', 'cards');
//     //   tableStructure.classList.add('d-none');
//     //   cardsStructure.classList.remove('d-none');
//     handleFetch('cards');
//     // structurePage.classList.remove('display-list');
//     // structurePage.classList.add('display-card');

//     //   //   btnListStructure.classList.remove('btn-outline-primary');
//     //   //   btnListStructure.classList.add('btn-primary');
//     //   btnCardStructure.classList.remove('btn-primary');
//     //   btnCardStructure.classList.add('btn-outline-primary');
//   };
//   if (btnListStructure != null && btnCardStructure != null) {
//     btnListStructure.addEventListener('click', handleDisplayListStructure);
//     btnCardStructure.addEventListener('click', handleDisplayCardStructure);
//     window.addEventListener('resize', (e) => {
//       if (window.innerWidth < 992) {
//         handleDisplayCardStructure();
//       }
//     });
//   }
//   let mode = localStorage.getItem('preference_mode');

//   if (mode != null) {
//     if (mode === 'cards') {
//       handleDisplayCardStructure();
//     } else if (mode === 'table') {
//       handleDisplayListStructure();
//     }
//   }
// });

// const handleFetch = (modeDisplay) => {
//   // Build query string
//   //   let Params = new URLSearchParams({
//   //     mode: modeDisplay,
//   //   });

//   dataPreference = {
//     display: 'modeDisplay',
//   };

//   const Url = new URL(window.location.href);
//   console.log(Url);

//   //   const url = Url.pathname + '?' + Params.toString() + '&ajax=1';
//   const url = Url.pathname;
//   console.log('url', url);

//   fetch(url + '/preference', {
//     // headers: {
//     //   'X-Requested-With': 'XMLHttpRequest',
//     // },
//     method: 'POST',
//     // data: dataMode,
//     // body: {
//     //   //   title: 'New Pirate Captain',
//     //   //   body: 'Arrrrrr-ent you excited?',
//     //   //   userId: 3,
//     //   display: 'modeDisplay',
//     // },
//     body: JSON.stringify(dataPreference),
//     // headers: {
//     //   //   'X-Requested-With': 'XMLHttpRequest',
//     //   'Content-Type': 'application/json',
//     // },
//     headers: {
//       //   'X-Requested-With': 'XMLHttpRequest',
//       //   'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//       'Content-Type': 'application/json;charset=utf-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       //   let structureListContent = document.querySelector(
//       //     '#structure-list-content'
//       //   );
//       //   structureListContent.innerHTML = data.content;
//       console.log('ok post send', data.content);

//       // //   // update url
//       // //   history.pushState(
//       // //     {},
//       // //     null,
//       // //     Url.pathname + '?' + Params.toString() + '&page=' + currentPage
//       // //   );

//       //   //   // update href of pagination links
//       //   //   // let pageLinks = document.querySelectorAll('.pagination .page-item a');
//       //   //   // console.log(pageLinks);
//     })
//     .catch((error) => {
//       console.log(error);
//       alert(error);
//     });
// };

// // let response = await fetch(baseUrl + '/aaa/nom-de-levenement/add', {
// //     method: 'POST',
// //     headers: {
// //         'X-CSRF-TOKEN': token,
// //         "Content-type": "application/json",
// //     },
// //     body: data
// // })
// // return response.json()
