$('.slider').slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});


$(document).ready(function(){
  $('.slider-phone').slick({
    arrows: false,
    dots: true
  });
});

$(".calculate-modal").click(function(event){
    event.preventDefault();
});

$(".calculate-modal").click(function() {
  $(".calculate").css("display","block");
});

$(".modal-close").click(function() {
  $(".calculate").css("display","none");
});

$(".order-modal").click(function() {
  $(".order").css("display","block");
});

$(".modal-close").click(function() {
  $(".order").css("display","none");
});
