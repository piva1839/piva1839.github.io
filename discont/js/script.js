$(document).ready(function(){
  $('.slider').slick({
    arrows: true,
    dots: true
  });
});

$(".main-catalog__item-link--drop").click(function(){
      $(".main-catalog__sublist").toggle(5);
   });

$(".main-header__login").mouseover(function() {
  $(".main-header__login").addClass("main-header__login--signed");
    $(".main-header__user").css("display","block");
});

$(".main-header__login").mouseout(function() {
  $(".main-header__login").removeClass("main-header__login--signed");
    $(".main-header__user").css("display","none");
});

$(".main-header__user-item-link").click(function() {
  $(".main-header__login").removeClass("main-header__login--signed");
$(".main-header__user").css("display","none");
});

$(".main-header__contact-link--modal").click(function() {
  $(".modal-block--call").css("display","flex");
});

$(".modal-close").click(function() {
  $(".modal-block--call").css("display","none");
});

$(".main-header__login-link").click(function(event){
    event.preventDefault();
});

$(".main-header__login-link").click(function() {
  $(".modal-block--reg").css("display","flex");
});

$(".modal-close").click(function() {
  $(".modal-block--reg").css("display","none");
});

$(".main-header__contact-link--contact").click(function() {
  $(".modal-block--contact").css("display","flex");
});

$(".modal-close").click(function() {
  $(".modal-block--contact").css("display","none");
});

$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
	$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
 

/* для формы регистрации

$(".main-header__contact-link").click(function() {
  $(".modal-block--reg").css("display","flex");
});

$(".modal-close").click(function() {
  $(".modal-block--reg").css("display","none");
});

*/
