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
	
	function load() {
    hideAddressBar();
    //  1
    //window.addEventListener("orientationchange", function () {
    //    hideAddressBar();
    //});
}

	function hideAddressBar() {
    if (navigator.userAgent.match(/Android/i) != null) {
        //window.orientation 0 - 180 - landscape; 90 and -90 portrait
        document.documentElement.style.height = window.outerHeight + 'px';
        setTimeout(window.scrollTo(0, 1), 0);
    }
}
});

