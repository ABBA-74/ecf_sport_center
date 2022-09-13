window.addEventListener('DOMContentLoaded', () => {
  const btnsDeleteCards = document.querySelectorAll('.card-delete-btn');

  const handleDelete = (e) => {
    // Configuration of the madal
    const options = {
      keyboard: false,
      backdrop: true,
      focus: true,
    };

    const modalDelete = new bootstrap.Modal(
      document.getElementById('modal_confirmation'),
      options
    );

    modalDelete.show();

    let confirmationBtnModal = document.querySelector(
      '#confirmation-btn-modal'
    );
    const cancelBtnModal = document.querySelector('#cancel-btn-modal');
    const closeBtnModal = document.querySelector('.modal .btn-close');
    let form = e.target.closest('form');

    confirmationBtnModal.addEventListener('click', () => form.submit());
    [closeBtnModal, cancelBtnModal].forEach((el) => {
      el.addEventListener('click', () => {
        modalDelete.hide();
        document.querySelector('.modal-backdrop').remove();
      });
    });
  };

  btnsDeleteCards.forEach((btnDelete) => {
    btnDelete.addEventListener('click', handleDelete);
  });
});
