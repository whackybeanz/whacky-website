var allItemTypes = ["Hat", "Face Accessory", "Eye Accessory"];
var currIndex = 0;

$(".job-choice-div").on("click", ".single-job-choice.clickable", function() {
	var jobType = $(this).data("jobSelect");
	$(".single-job-choice").removeClass("clickable");
	$(this).addClass("active");
	$(".job-select-blocker").removeClass("d-none").addClass("d-flex");

	$(".step-2-div").removeClass("d-none").addClass("d-flex").hide().fadeIn();
	$(`.equip-choice, .set-effect`).removeClass("d-flex").addClass("d-none");
	$(`.equip-${jobType}, .equip-common, .set-effect-${jobType}, .set-effect-common`).removeClass("d-none").addClass("d-flex");
})

$(".equip-slot").on("click", function() {
	var equipType = $(this).data("equipType");
	currIndex = $(this).data("equipTypeIndex");
	$(`.equip-select-div`).removeClass("active");
	$(`.equip-select-${equipType}`).addClass("active");

	updateCarouselNavText(currIndex);
})

$(".single-equip-choice").on("click", function() {
	var equipType = $(this).data("equipType");
	var oldSetType = $(`.single-equip-${equipType}.active`).data("setType");
	var newSetType = $(this).data("setType");
	var jobType = $(this).data("jobType");
	var choiceImage = $(this).data("choiceImg");
	var equipId = $(this).data("itemId");

	$(`.single-equip-${equipType}`).removeClass("active");
	$(this).addClass("active");
	$(`#${equipType}-slot`).css("background-image", `url(${choiceImage})`);
	updateSetEffects(newSetType, jobType, equipType, oldSetType, equipId);
})

// Possible scenarios when a user selects an item:
// 1) Brand new item selected, does not belong to any existing set
// 2) Item type (e.g. shoe) was already factored in another set, so both this and the
// new set need to have set effects updated
function updateSetEffects(newSetType, jobType, equipType, oldSetType, equipId) {
	// Update any sets affected by user selection
	$(`.wearing-${equipType}`).removeClass("active");
	$(`#item-${equipId}`).addClass("active");

	updateOldSetEffect(oldSetType, newSetType, jobType);
	updateNewSetEffect(newSetType, jobType);

	var numSetsActive = $(".set-item-effect-div.d-flex").length;
	if(numSetsActive > 0) {
		$(".no-set-effect-msg").removeClass("d-flex").addClass("d-none");
	} else {
		$(".no-set-effect-msg").removeClass("d-none").addClass("d-flex");
	}
}

// If oldSetType exists, there was a previously selected item in that equip slot
// Update number of active set effects in old set
function updateOldSetEffect(oldSetType, newSetType, jobType) {
	if(oldSetType) {
		// Recalculate number of items equipped in old set and hide set effect if none equipped
		var numItemsEquipped = $(`.${oldSetType}-set .set-items .active`).length;
		if(numItemsEquipped === 0) {
			$(`.${oldSetType}-set`).removeClass("d-flex").addClass("d-none");
		} 

		$(`.${oldSetType}-set .num-wearing-div div`).removeClass("active");
		for(var i = 1; i <= numItemsEquipped; i++) {
			$(`.${oldSetType}-set .num-wearing-div .wearing-${i}`).addClass("active");
		}
	}
}

// If newSetType is none, then there are no set effects to update
function updateNewSetEffect(newSetType, jobType) {
	if(newSetType !== "none") {
		// Recalculate number of items equipped in new set and reveal set effect
		var newSetNumItemsEquipped = $(`.${newSetType}-set .set-items .set-effect-${jobType}.active`).length;
		$(`.${newSetType}-set`).removeClass("d-none").addClass("d-flex");

		for(var i = 1; i <= newSetNumItemsEquipped; i++) {
			$(`.${newSetType}-set .num-wearing-div .set-effect-${jobType}.wearing-${i}`).addClass("active");
		}		
	}
}

$(".carousel-control-prev").on("click", function() {
	currIndex--;

	if(currIndex < 0) {
		currIndex = allItemTypes.length -1;
	}
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