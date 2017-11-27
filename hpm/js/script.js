$(document).ready(function(){
	$(".main-header__menu").on("click", "a", function(){
		if ($(".main-header__menu a").hasClass("active")) {
			$(".main-header__menu a").removeClass("active");
		}
		$(this).addClass("active");
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
	
	$(document).ready(function() { if (navigator.userAgent.match(/Android/i)) { window.scrollTo(0,0); var nPageH = $(document).height(); var nViewH = window.outerHeight; if (nViewH > nPageH) { nViewH -= 250; $('BODY').css('height',nViewH + 'px'); } window.scrollTo(0,1); } }); 
});

