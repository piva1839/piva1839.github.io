$(document).ready(function(){
	$(".main-header__menu").on("click", "a", function(){
		if ($(".main-header__menu a").hasClass("active")) {
			$(".main-header__menu a").removeClass("active");
		}
		$(this).addClass("active");
	});
	
	$(".more-menu-items").click(function(event) {
		event.preventDefault();
  });
  
  $(".more-menu-items").mouseover(function() {
    $(".subitems").css("display","block");
  });
  
  $(".subitems").mouseover(function() {
    $(".subitems").css("display","block");
  });
  
  $(".more-menu-items").mouseout(function() {
    $(".subitems").css("display","none");
  });
  
  $(".subitems").mouseout(function() {
    $(".subitems").css("display","none");
  });
	
	$(".subitems__item a").click(function() {
		$(".subitems").css("display","none");
	});
	
	$(".burger").click(function() {
		$(".menu-mob").css("display","block");
	});
	
	$(".menu-mob a").click(function() {
		$(".menu-mob").css("display","none");
	});
	
	$(".fixed-mail").click(function() {
    $(".modal-contact-block").css("display","block");
  });
  
  $(".close-modal-block").click(function() {
    $(".modal-contact-block").css("display","none");
  });
	
	/*
	
	$('.fade').slick({
		dots: true,
		dotsClass: "my-dots",
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});
	
	*/
	
	$(".main-slider__items").slick({
		dots: true,
    dotsClass: "my-dots"
	});
  
  $(".resort-about-slider__items").slick({
		dots: true,
    dotsClass: "my-dots"
	});
	
	$(".cottage-about-slider__items").slick({
		dots: true,
    dotsClass: "my-dots"
	});
	
	$(".rooms-about-slider__items").slick({
		dots: true,
    dotsClass: "my-dots"
	});
});
