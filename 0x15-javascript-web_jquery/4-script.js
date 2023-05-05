const $ = window.jQuery;

$(document).ready(function () {
  $('#toggle_header').click(function () {
    $('header').toggleClass(function () {
      if ($(this).hasClass('red')) {
        return 'green';
      } else {
        return 'red';
      }
    });
  });
});
