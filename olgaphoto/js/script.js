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
});

$(document).ready(function(){
  $(".slider").slick({
    dots: true
  });
});