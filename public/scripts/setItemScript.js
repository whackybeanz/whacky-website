var allItemTypes = ["Hat", "Face Accessory", "Eye Accessory"];
var currIndex = 0;

$(".equip-choice").on("click", function() {
	var equipType = $(this).data("equipType");
	var choiceImage = $(this).data("choiceImg");

	$(`.${equipType}-choice`).removeClass("active");
	$(this).addClass("active");
	$(`#${equipType}-slot`).css("background-image", `url(${choiceImage})`);
})

$(".carousel-control-prev").on("click", function() {
	currIndex--;
	updateCarouselNavText(currIndex);
})

$(".carousel-control-next").on("click", function() {
	currIndex++;
	updateCarouselNavText(currIndex);
})

function updateCarouselNavText(currIndex) {
	var nextIndex = (currIndex + 1) % allItemTypes.length;

	if(currIndex - 1 < 0) {
		var prevIndex = allItemTypes.length - 1;
	} else {
		var prevIndex = currIndex - 1;
	}

	$(".carousel-control-prev-text").text(allItemTypes[prevIndex]);
	$(".carousel-control-next-text").text(allItemTypes[nextIndex]);
}