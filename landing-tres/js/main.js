$(document).ready(() => {
  $('#basesCondiciones').on('click', () => {
    $('#modal-legales').modal();
  });

  $('[data-toggle="tooltip"]').tooltip();

  new ClipboardJS('a');

  $('#form').parsley();

  window.Parsley.on('field:error', function () {
    this.$element
      .removeClass('is-valid')
      .addClass('is-invalid');
  });

  window.Parsley.on('field:success', function () {
    this.$element
      .removeClass('is-invalid');
  });

  // window.Parsley.on('form:success', function () {
  //   MicroModal.show('modal-success');
  // });

  MicroModal.init();

  // $('#form').submit(e => {
  //   e.preventDefault();
  //   MicroModal.show('modal-success');

  //   setTimeout(() => {
  //     $('#form').submit();
  //   }, 3000);
  // });
});