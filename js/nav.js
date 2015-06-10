$('#menu-toggle').click(function () { 
  $('.main-nav').toggleClass('toggled');
  $('.push-nav').toggleClass('toggled');
});
    $('.nav-menu a').click(function () {
  $('.main-nav').toggleClass('toggled');
  $('.push-nav').removeClass('toggled');
});

$('.menu').click (function(){
  $(this).toggleClass('open');
});
