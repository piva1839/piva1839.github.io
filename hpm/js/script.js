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
	
	var page_size_check = null, q_body; (q_body = $('#body')).bind('DOMSubtreeModified', function() { if (page_size_check === null) { return; } page_size_check = setTimeout(function() { q_body.css('height', ''); if (q_body.height() < window.innerHeight) { q_body.css('height', window.innerHeight + 'px'); } if (!(window.pageYOffset > 1)) { window.scrollTo(0, 1); } page_size_check = null; }, 400); });
});

