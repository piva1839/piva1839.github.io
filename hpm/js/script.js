window.onload = function () {
    hideAddressBar();
    window.addEventListener("orientationchange", function () {
        hideAddressBar();
    }, false);
}

function hideAddressBar() {
    setTimeout(function () {
        document.body.style.height = window.outerHeight + 'px';
        setTimeout(function () {
            window.scrollTo(0, 1);
        }, 1100);
    }, 1000);
    return false;
}

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
});