$('.slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
});

$('.main-gallery-mobile-slider').slick({
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});

$('.main-gallery-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
});

$('.teachers-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  arrowsClass: "my-arrows",
});

$('.teachers-slider-descktop').slick({
  dots: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
});

$('.reviews-slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  dotsClass: "my-dots",
});

$('.reviews-slider-descktop').slick({
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  dotsClass: "my-dots",
});

$(".burger-icon").click(function() {
  $(".main-mobile-nav").css("display","block");
});

$(".modal-close").click(function() {
  $(".main-mobile-nav").css("display","none");
});

$(".main-mobile-nav__item-link").click(function() {
  $(".main-mobile-nav").css("display","none");
});

$(".button--map").click(function() {
  $(".modal-map").css("display","block");
});

$(".modal-close").click(function() {
  $(".modal-map").css("display","none");
});
