window.addEventListener('DOMContentLoaded', () => {
  let listContent = document.querySelector('.list-content');
  let titleModal = document.querySelector('.modal-title');
  let btnsCardsModal = document.querySelectorAll(
    '.btn-enable, .btn-disable, .btn-delete, .delete-icon, .enable-icon, .disable-icon'
  );
  let titleModalContent;

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

      if (
        [
          '/admin/users',
          '/admin/commercials',
          '/admin/managers-franchises',
          '/admin/managers-structures',
        ].includes(urlPathname)
      ) {
        // Change body message + validation Btn of the modal according to the case : if disable or enable the commercial
        let isBtnEnableUser =
          e.target.classList.contains('enable-icon') ||
          e.target.classList.contains('btn-enable');

        // check status of the user and add it to the end body msg modal
        let statusUser = '';
        switch (urlPathname) {
          case '/admin/users':
            statusUser = "de l'utilisateurs";
            break;
          case '/admin/commercials':
            statusUser = 'du commercial';
            break;
          case '/admin/managers-franchises':
            statusUser = 'du responsable de franchise';
            break;
          case '/admin/managers-structures':
            statusUser = 'du manager de la structure';
            break;
          default:
            break;
        }

        if (isBtnEnableUser) {
          titleModalContent = "Confirmation d'activation";
          bodyModal.innerText = `Confirmez vous l'activation ${statusUser} ?`;
          confirmationBtnModal.innerText = 'Activer';
        } else {
          titleModalContent = 'Confirmation de désactivation';
          bodyModal.innerText = `Confirmez vous la désactivation ${statusUser} ?`;
          confirmationBtnModal.innerText = 'Désactiver';
        }
      } else if (urlPathname === '/admin/features') {
        // Change body message + validation Btn of the modal according to the case : if disable or enable the commercial
        let isBtnEnableFeature =
          e.target.classList.contains('enable-icon') ||
          e.target.classList.contains('btn-enable');

        if (isBtnEnableFeature) {
          titleModalContent = "Confirmation d'activation";
          bodyModal.innerText =
            "Confirmez vous l'activation de la fonctionnalité ?";
          confirmationBtnModal.innerText = 'Activer';
        } else {
          titleModalContent = 'Confirmation de désactivation';
          bodyModal.innerText =
            'Confirmez vous la désactivation de la fonctionnalité ?';
          confirmationBtnModal.innerText = 'Désactiver';
        }
      } else if (
        ['/admin/structures', '/admin/franchises'].includes(urlPathname)
      ) {
        titleModalContent = 'Confirmation de suppression';
        labelMsg =
          urlPathname === '/admin/structures' ? 'structure' : 'franchise';
        bodyModal.innerText = `Confirmez vous la suppression de la ${labelMsg} ?`;
        confirmationBtnModal.innerText = 'Supprimer';
      }

      handleTitleModal();
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

  // Responsive title modal avoid 2 lines inside header modal for small screen
  const handleTitleModal = (e) => {
    if (window.innerWidth < 440) {
      titleModal.innerText = 'Confirmation';
    } else {
      titleModal.innerText = titleModalContent;
    }
  };
  window.addEventListener('resize', handleTitleModal);

  btnsCardsModal.forEach((e) => {
    listContent && listContent.addEventListener('click', handleModal);
  });
});
