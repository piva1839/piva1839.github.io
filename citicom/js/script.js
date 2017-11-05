$(function() {
  $(".menu,a").click(function() {
    $("#act").prop("checked",false);
    $(".menu").one("right","-250px");
    $(".burger").css("right","45px");
    $(".to-header").css("right","90px");  
  });
});

