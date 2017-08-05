var searchButton = document.querySelector(".search-button");
var modalSearch = document.querySelector(".modal-search");

	searchButton.addEventListener("click", function(event) {
		event.preventDefault();
		modalSearch.classList.toggle("modal-search-show");
	}); 