$('#menu-toggle').click(function () { 
  $('.main-nav').toggleClass('toggled');
  $('.wrapper').toggleClass('toggled');
});
    $('.nav-menu a').click(function () {
  $('.main-nav').toggleClass('toggled');
  $('.wrapper').removeClass('toggled');
});

$('.menu').click (function(){
  $(this).toggleClass('open');
});

$(".static-menu div.link").append("<i class='fa fa-chevron-down'></i>");
$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;
 
    var links = this.el.find('.link');
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown);
  };
 
  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();
 
    $next.slideToggle();
    $this.parent().toggleClass('open');
 
    if (!e.data.multiple) {
      $el.find('.sub-menu').not($next).slideUp().parent().removeClass('open');
    }
  };
 
  var accordion = new Accordion($('#accordion'), false);
});