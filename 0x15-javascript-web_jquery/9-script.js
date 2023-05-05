$(document).ready(function () {
  $.ajax({
    url: 'https://fourtonfish.com/hellosalut/',
    method: 'GET',
    data: { lang: 'fr' },
    success: function (data) {
      $('#hello').text(data.hello);
    }
  });
});
