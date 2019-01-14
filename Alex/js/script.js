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

  $(".calendar-in--open").click(function() {
  $(".calendar-in").css("display","block");
  });

  $(".calendar-out--open").click(function() {
  $(".calendar-out").css("display","block");
  });

});
