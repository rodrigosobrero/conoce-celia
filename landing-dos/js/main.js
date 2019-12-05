$(document).ready(() => {
  $('#basesCondiciones').on('click', () => {
    $('.modal').modal();
  });

  $('[data-toggle="tooltip"]').tooltip();

  new ClipboardJS('a');
});