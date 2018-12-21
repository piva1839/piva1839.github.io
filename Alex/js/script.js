$(document).ready(function(){

  $('.slider').slick({
    arrows: true,
    dots: true,
  });

  $(".burger").click(function() {
  $(".mobile-nav").css("display","block");
  });

  $(".mobile-nav__close").click(function() {
  $(".mobile-nav").css("display","none");
  });

  $(".mobile-nav__item-link").click(function() {
  $(".mobile-nav").css("display","none");
  });

});
