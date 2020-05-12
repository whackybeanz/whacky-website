const uiElemArr = Array.from(document.querySelectorAll(".soul-ui"));

uiElemArr.forEach(function(elem) {
	elem.addEventListener("click", function() {
		if(!this.classList.contains("active")) {
			swapDisplay();	
		}
	})
})

function swapDisplay() {
	const captionElemArr = Array.from(document.querySelectorAll(".soul-caption-img"));

	// Swap display of highlighted UI and image
	uiElemArr.forEach(function(elem) {
		elem.classList.toggle("active");
	});

	captionElemArr.forEach(function(elem) {
		elem.classList.toggle("d-none");
	})
}