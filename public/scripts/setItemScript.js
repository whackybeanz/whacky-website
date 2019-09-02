var allItemTypes = ["Hat", "Face Accessory", "Eye Accessory"];
var currIndex = 0;

$(".equip-choice").on("click", function() {
	var equipType = $(this).data("equipType");
	var currSetType = $(`.${equipType}-choice.active`).data("setType");
	var newSetType = $(this).data("setType");
	var choiceImage = $(this).data("choiceImg");

	$(`.${equipType}-choice`).removeClass("active");
	$(this).addClass("active");
	$(`#${equipType}-slot`).css("background-image", `url(${choiceImage})`);
	updateSetEffects(newSetType, equipType, currSetType);
})

// Possible scenarios when a user selects an item:
// 1) Brand new item selected, does not belong to any existing set
// 2) Item type (e.g. shoe) was already factored in another set, so both this and the
// new set need to have set effects updated
function updateSetEffects(newSetType, equipType, currSetType) {
	if(newSetType !== "none") {
		// Update any sets affected by user selection
		$(`.${equipType}`).removeClass("active");
		$(`.${newSetType} .set-items .${equipType}`).addClass("active");

		// If currSetType exists, there was a previously selected item in that equip slot
		// Update number of active set effects in curr set
		if(currSetType) {
			var numItemsEquipped = $(`.${currSetType} .set-items .active`).length;
			$(`.${currSetType} .num-wearing-div div`).removeClass("active");

			for(var i = 1; i <= numItemsEquipped; i++) {
				$(`.${currSetType} .num-wearing-div .wearing-${i}`).addClass("active");
			}
		}

		// Update number of active set effects in new set
		var newSetNumItemsEquipped = $(`.${newSetType} .set-items .active`).length;

		for(var i = 1; i <= newSetNumItemsEquipped; i++) {
			$(`.${newSetType} .num-wearing-div .wearing-${i}`).addClass("active");
		}		
	}
}		

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