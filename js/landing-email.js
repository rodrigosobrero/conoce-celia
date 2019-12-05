$(document).ready(() => {
  $('#basesCondiciones').on('click', () => {
    $('.modal').modal();
  });

  $('#form').parsley();

  window.Parsley.on('field:error', function () {
    this.$element
      .removeClass('is-valid')
      .addClass('is-invalid');
  });

  window.Parsley.on('form:success', function () {
    this.$element
      .removeClass('is-invalid')
      .addClass('is-valid');
  });
});