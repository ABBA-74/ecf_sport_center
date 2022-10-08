window.addEventListener('DOMContentLoaded', () => {
  let listContent = document.querySelector('.list-content');

  let btnsCardsModal = document.querySelectorAll(
    '.btn-enable, .btn-disable, .btn-delete, .delete-icon, .enable-icon, .disable-icon'
  );

  const handleModal = (e) => {
    const el = e.target;
    const classNames = [
      'btn-disable',
      'disable-icon',
      'btn-enable',
      'enable-icon',
      'btn-delete',
      'delete-icon',
    ];
    if (classNames.some((className) => el.classList.contains(className))) {
      let bodyModal = document.querySelector('.modal-body');
      let confirmationBtnModal = document.querySelector(
        '#confirmation-btn-modal'
      );
      // madal's option
      const options = {
        keyboard: false,
        backdrop: true,
        focus: true,
      };

      let modal = new bootstrap.Modal(
        document.getElementById('modal_confirmation'),
        options
      );
      // Get current url
      const Url = new URL(window.location.href);
      const urlPathname = Url.pathname;

      if (urlPathname === '/admin/commercial') {
        // Change body message + validation Btn of the modal according to the case : if disable or enable the commercial
        let isBtnEnableCommercial =
          e.target.classList.contains('enable-icon') ||
          e.target.classList.contains('btn-enable');
        console.log(isBtnEnableCommercial);

        if (isBtnEnableCommercial) {
          bodyModal.innerText = "Confirmez vous l'activation du commercial ?";
          confirmationBtnModal.innerText = 'Activer';
        } else {
          bodyModal.innerText =
            'Confirmez vous la désactivation du commercial ?';
          confirmationBtnModal.innerText = 'Désactiver';
        }
      }
      if (urlPathname === '/admin/feature') {
        // Change body message + validation Btn of the modal according to the case : if disable or enable the commercial
        let isBtnEnableFeature =
          e.target.classList.contains('enable-icon') ||
          e.target.classList.contains('btn-enable');
        console.log(isBtnEnableFeature);

        if (isBtnEnableFeature) {
          bodyModal.innerText =
            "Confirmez vous l'activation de la fonctionnalité ?";
          confirmationBtnModal.innerText = 'Activer';
        } else {
          bodyModal.innerText =
            'Confirmez vous la désactivation de la fonctionnalité ?';
          confirmationBtnModal.innerText = 'Désactiver';
        }
      }

      modal.show();

      const cancelBtnModal = document.querySelector('#cancel-btn-modal');
      const closeBtnModal = document.querySelector('.modal .btn-close');
      let form = e.target.closest('form');

      // submit the modal
      confirmationBtnModal.addEventListener('click', () => form.submit());

      // hide modal
      [closeBtnModal, cancelBtnModal].forEach((el) => {
        el.addEventListener('click', () => {
          modal.hide();
          let modalBackdrop = document.querySelector('.modal-backdrop');
          // modalBackdrop.remove();
          if (modalBackdrop) {
            modalBackdrop.remove();
          }
        });
      });
    }
  };

  btnsCardsModal.forEach((e) => {
    listContent && listContent.addEventListener('click', handleModal);
  });
});
