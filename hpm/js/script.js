$(document).ready(function(){
  var h_hght = $(".header").outerHeight();
  var h_nav = $(".menu").outerHeight();
  var top;
  $(window).scroll(function(){
    top = $(this).scrollTop();
    if((h_hght-top) <= h_nav){
      $(".menu").css("top","0");
    }
    else if(top < h_hght && top > 0){
      $(".menu").css({"bottom" : top, "top":""});
    }
    else if(top < h_nav){
      $(".menu").css({"top":"","bottom":"-95px"});
    }
  });
	
	$(".main-menu").on("click", "a", function(){
		if ($(".main-menu a").hasClass("active")) {
			$(".main-menu a").removeClass("active");
		}
		$(this).addClass("active");
	});
	
	$(".main-menu").on("click", ".to-top", function(){
		if ($(".main-menu a").hasClass("active")) {
			$(".main-menu a").removeClass("active");
		}
	});
	
  $(".main-slider").slick({
    dots: true,
    dotsClass: "my-dots",
  });
	
	$(".burger").click(function() {
		$(".menu-mob").css("display","block");
	});
	
	$(".menu-mob a").click(function() {
		$(".menu-mob").css("display","none");
	});
});