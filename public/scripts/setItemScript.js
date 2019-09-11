var allItemTypes = ["Ring", "Pocket", "Pendant", "Weapon", "Belt", 
					"Hat", "Face Accessory", "Eye Accessory", "Top / Overall", "Bottom", "Shoes",
					"Earring", "Shoulder", "Gloves", "Android",
					"Emblem", "Badge", "Medal", "Secondary Weapon", "Cape", "Heart"];
var currIndex = 0;

/*$(".job-choice-div").on("click", ".single-job-choice.clickable", function() {
	var jobType = $(this).data("jobSelect");
	$(".single-job-choice").removeClass("clickable");
	$(this).addClass("active");
	$(".job-select-blocker").removeClass("d-none").addClass("d-flex");

	$(".step-2-div").removeClass("d-none").addClass("d-flex").hide().fadeIn();
	$(`.equip-choice, .set-effect`).removeClass("d-flex").addClass("d-none");
	$(`.equip-${jobType}, .equip-common, .set-effect-${jobType}, .set-effect-common`).removeClass("d-none").addClass("d-flex");
})*/

$(".equip-slot").on("click", function() {
	var equipType = $(this).data("equipType");
	currIndex = $(this).data("equipTypeIndex");
	$(".carousel-header").text(allItemTypes[currIndex])
	$(`.equip-select-div`).removeClass("active");
	$(`.equip-select-${equipType}`).addClass("active");

	updateCarouselNavText(currIndex);
})

$(".carousel-control-prev").on("click", function() {
	currIndex--;
	if(currIndex < 0) {
		currIndex = allItemTypes.length -1;
	}

	$(".carousel-header").text(allItemTypes[currIndex])
	updateCarouselNavText(currIndex);
})

$(".carousel-control-next").on("click", function() {
	currIndex++;
	if(currIndex >= allItemTypes.length) {
		currIndex = 0;
	}

	$(".carousel-header").text(allItemTypes[currIndex])
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

$(".single-equip-choice").on("click", function() {
	var equipType = $(this).data("equipType");
	var oldSetType = $(`.single-equip-${equipType}.active`).data("setType");
	var newSetType = $(this).data("setType");
	var choiceImage = $(this).data("choiceImg");
	var equipId = $(this).data("itemId");
	var isLuckyItem = $(this).data("isLuckyItem");

	$(`.single-equip-${equipType}`).removeClass("active");
	$(this).addClass("active");
	$(`#${equipType}-slot`).css("background-image", `url(${choiceImage})`);
	updateSetEffects(newSetType, equipType, oldSetType, equipId);
})

// Possible scenarios when a user selects an item:
// 1) Brand new item selected, does not belong to any existing set
// 2) Item type (e.g. shoe) was already factored in another set, so both this and the
// new set need to have set effects updated
function updateSetEffects(newSetType, equipType, oldSetType, equipId) {
	// For non-lucky items, un-highlight set effects affected by user selection
	// Highlight newly active item from user selection
	$(`.wearing-${equipType}`).removeClass("active");
	$(`#item-${equipId}`).addClass("active");

	updateOldSetEffect(oldSetType);
	updateNewSetEffect(newSetType);

	var numSetsActive = $(".set-item-effect-div.d-flex").length;
	if(numSetsActive > 0) {
		$(".no-set-effect-msg").removeClass("d-flex").addClass("d-none");
	} else {
		$(".no-set-effect-msg").removeClass("d-none").addClass("d-flex");
	}

	updateTotalSetEffect();
}

// If oldSetType exists, there was a previously selected item in that equip slot
// Update number of active set effects in old set
function updateOldSetEffect(oldSetType) {
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
function updateNewSetEffect(newSetType) {
	if(newSetType !== "none") {
		// Recalculate number of items equipped in new set and reveal set effect
		var newSetNumItemsEquipped = $(`.${newSetType}-set .set-items .active`).length;
		$(`.${newSetType}-set`).removeClass("d-none").addClass("d-flex");

		for(var i = 1; i <= newSetNumItemsEquipped; i++) {
			$(`.${newSetType}-set .num-wearing-div .wearing-${i}`).addClass("active");
		}		
	}
}

function updateTotalSetEffect() {
	var allStatTypes = { str: 0, dex: 0, int: 0, luk: 0, allStats: 0,
						maxHp: 0, maxHpMp: 0, maxHpMpPercent: 0, def: 0, acc: 0, avoid: 0, 
						wama: 0, wa: 0, ma: 0, bossPercent: 0, iedPercent: 0, critDmgPercent: 0 }
	var currIed = 0;

	$(".num-wearing-div .set-effect.active .single-effect").map(function() {
		var statToUpdate = $(this).data("statId");

		if(statToUpdate !== "iedPercent") {
			allStatTypes[statToUpdate] += $(this).data("statVal");
		} else {
			allStatTypes[statToUpdate] = currIed + $(this).data("statVal") * (1 - currIed/100);
			currIed = allStatTypes[statToUpdate];
		}
	})

	$(".total-stat").removeClass("d-flex").addClass("d-none");
	Object.keys(allStatTypes).forEach(function(statType) { 
		if(allStatTypes[statType] !== 0) {
			$(`.total-stat-${statType}`).removeClass("d-none").addClass("d-flex");
			$(`.total-stat-${statType}-val`).text(allStatTypes[statType])
		}
	});
}