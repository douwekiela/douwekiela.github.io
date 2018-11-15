$(document).ready(function() {
  function hideAllExcept(cls) {
    $('.pubsyear').hide();
    $('.pubslist').children().hide();
    $('.' + cls).show();
    $('.' + cls).each(function() {
      $(this).parent().prev().show();
    });
  }
  $('.pt').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('text-warning')) {
      $('.pt').removeClass('text-warning');
      $('.pubslist').children().show();
      $('.pubsyear').show();
    } else {
      $('.pt').removeClass('text-warning');
      $(this).addClass('text-warning');
      hideAllExcept($(this).data('toggle-theme'));
    }
  });
  $('.pubslist').each(function() {
    $(this).append('<p class="toplink float-right"><a href="#">Back to top</a></p>');
  });
});
