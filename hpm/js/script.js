$(document).ready(function(){
	$(".main-slider").slick({
    dots: true,
    dotsClass: "my-dots",
  });
	
	$(".drop-menu-marker").click(function(event) {
		event.preventDefault();
  });
  
  $(".drop-menu-marker").mouseover(function() {
    $(".drop-menu").css("display","block");
  });
  
  $(".drop-menu").mouseover(function() {
    $(".drop-menu").css("display","block");
  });
  
  $(".drop-menu-marker").mouseout(function() {
    $(".drop-menu").css("display","none");
  });
  
  $(".drop-menu").mouseout(function() {
    $(".drop-menu").css("display","none");
  });
	
	$(".drop-menu__item").click(function() {
		$(".drop-menu").css("display","none");
	});
	
	$(".drop-menu__link").click(function() {
		$(".drop-menu").css("display","none");
	});
	
	$(".fixed-contacts-item_email").click(function(event) {
		event.preventDefault();
		$(".popup-overlay").css("display","block");
	});
	
	$(".fixed-contacts-item_email").click(function() {
		$(".popup-feedback").css("display","block");
	});
	
	$(".close-modal-block").click(function() {
    $(".popup-overlay").css("display","none");
  });
	
	$(".close-modal-block").click(function() {
    $(".popup-feedback").css("display","none");
  });
	
	$(".burger-icon").click(function() {
		$(".mobile-menu").css("display","block");
	});
	
	$(".mobile-menu__item").click(function() {
		$(".mobile-menu").css("display","none");
	});
});
