$(window).scroll(function(){
  $('.parallax').css('background-position','100%'+($(window).scrollTop()*0.3)+'px');
});