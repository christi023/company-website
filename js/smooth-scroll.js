$(document).ready(
  (function() {
    var scrollLink = $('.scroll');
  })('a[href*="#"]').on('click', function(e) {
    e.preventDefault();

    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      500,
      'linear',
    );
  }),
);
