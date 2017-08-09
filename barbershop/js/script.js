	var login = document.querySelector(".login");
	var popupLogin = document.querySelector(".popup-login");
	var closePopup = document.querySelector(".close-popup");
	var closePopupMap = document.querySelector(".map-popup .close-popup");
	var overlay = document.querySelector(".popup-overlay");
	var map = document.querySelector(".map");
	var mapPopup = document.querySelector(".map-popup");
	
	login.addEventListener("click", function(event) {
		event.preventDefault();
		popupLogin.classList.add("popup-login-show");
		overlay.classList.add("popup-login-show");
		});
		
	closePopup.addEventListener("click", function(event) {
		event.preventDefault();
		popupLogin.classList.remove("popup-login-show");
		overlay.classList.remove("popup-login-show");
		});
		
	map.addEventListener("click", function(event) {
		event.preventDefault();
		mapPopup.classList.add("map-popup-show");
		overlay.classList.add("map-popup-show");
		});
		
	closePopupMap.addEventListener("click", function(event) {
		event.preventDefault();	
		mapPopup.classList.remove("map-popup-show");
		overlay.classList.remove("map-popup-show");
		});