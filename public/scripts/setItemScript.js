var allItemTypes = ["Ring", "Pocket", "Pendant", "Weapon", "Belt", 
					"Hat", "Face Accessory", "Eye Accessory", "Top / Overall", "Bottom", "Shoes",
					"Earring", "Shoulder", "Gloves", "Android",
					"Emblem", "Badge", "Medal", "Secondary Weapon", "Cape", "Heart"];
var currNavIndex = 0;
var pendantRingDetails = {
	pendant: {
		MAX_NUM_EQUIPPED: 2,
		currIndex: 0,
		itemIds: ["", ""]
	},
	ring: {
		MAX_NUM_EQUIPPED: 4,
		currIndex: 0,
		itemIds: ["", "", "", ""]
	}
}
const MIN_NUM_ITEMS_FOR_LUCKY_EFFECT = 3;

/*$(".job-choice-div").on("click", ".single-job-choice.clickable", function() {
	var jobType = $(this).data("jobSelect");
	$(".single-job-choice").removeClass("clickable");
	$(this).addClass("active");
	$(".job-select-blocker").removeClass("d-none").addClass("d-flex");

	$(".step-2-div").removeClass("d-none").addClass("d-flex").hide().fadeIn();
	$(`.equip-choice, .set-effect`).removeClass("d-flex").addClass("d-none");
	$(`.equip-${jobType}, .equip-common, .set-effect-${jobType}, .set-effect-common`).removeClass("d-none").addClass("d-flex");
})*/

/***************************

	Carousel Navigation

***************************/
$(".equip-slot").on("click", function() {
	var equipType = $(this).data("equipType");
	currNavIndex = $(this).data("equipTypeIndex");
	$(".carousel-header").text(allItemTypes[currNavIndex])
	$(`.equip-select-div`).removeClass("active");
	$(`.equip-select-${equipType}`).addClass("active");

	updateCarouselNavText(currNavIndex);
})

$(".carousel-control-prev").on("click", function() {
	currNavIndex--;
	if(currNavIndex < 0) {
		currNavIndex = allItemTypes.length -1;
	}

	$(".carousel-header").text(allItemTypes[currNavIndex])
	updateCarouselNavText(currNavIndex);
})

$(".carousel-control-next").on("click", function() {
	currNavIndex++;
	if(currNavIndex >= allItemTypes.length) {
		currNavIndex = 0;
	}

	$(".carousel-header").text(allItemTypes[currNavIndex])
	updateCarouselNavText(currNavIndex);
})

function updateCarouselNavText(currNavIndex) {
	var nextIndex = (currNavIndex + 1) % allItemTypes.length;

	if(currNavIndex - 1 < 0) {
		var prevIndex = allItemTypes.length - 1;
	} else {
		var prevIndex = currNavIndex - 1;
	}

	$(".carousel-control-prev-text").text(allItemTypes[prevIndex]);
	$(".carousel-control-next-text").text(allItemTypes[nextIndex]);
}

/***************************

	Carousel Item Selection

***************************/
$(".single-equip-choice").on("click", function(event) {
	var equipType = $(this).data("equipType");
	var choiceImage = $(this).data("choiceImg");
	var equipId = $(this).data("itemId");
	var isLuckyItem = $(this).data("isLuckyItem");

	if($(this).hasClass("active")) {
		removeSetItem($(this), equipType, equipId);
	} else {
		addSetItem($(this), equipType, equipId, choiceImage);
	}
})

function removeSetItem(selectedItem, equipType, equipId) {
	var oldSetType;

	if(equipType === "ring" || equipType === "pendant") {
		oldSetType = selectedItem.data("setType");
		removeRingPendant(selectedItem, pendantRingDetails[equipType], equipType, equipId);
	} else {
		oldSetType = $(`.single-equip-${equipType}.active`).data("setType");
		removeNonRingPendant(selectedItem, equipType, equipId);
	}

	updateSetEffects(oldSetType, "none")
}

function removeRingPendant(selectedItem, itemDetails, equipType, equipId) {
	selectedItem.removeClass("active");
	var arrIndexToUpdate = itemDetails.itemIds.indexOf(equipId);
	itemDetails.itemIds[arrIndexToUpdate] = "";
	itemDetails.currIndex = findNearestEmptySlot(itemDetails);
	$(`#${equipType}-${arrIndexToUpdate+1}-slot`).css("background-image", "");
	$(`#item-${equipId}`).removeClass("active");
}

function removeNonRingPendant(selectedItem, equipType, equipId) {
	selectedItem.removeClass("active");
	$(`#${equipType}-slot`).css("background-image", "");
	$(`#item-${equipId}`).removeClass("active");
}

// Possible scenarios when a user selects an item:
// 1) Brand new item selected, does not belong to any existing set
// 2) Item type (e.g. shoe) was already factored in another set, so both this and the
// new set need to have set effects updated
// 3) Item type is pendant/ring and can have up to 2/4 equipped at once
function addSetItem(selectedItem, equipType, equipId, choiceImage) {
	var oldSetType = $(`.single-equip-${equipType}.active`).data("setType");
	var newSetType = selectedItem.data("setType");
	var isLuckyItem = selectedItem.data("isLuckyItem");

	if(equipType === "ring" || equipType === "pendant") {
		addRingPendant(selectedItem, equipType, equipId, choiceImage);
		updateSetEffects("", newSetType);
	} else {
		addNonRingPendant(selectedItem, equipType, equipId, choiceImage);
		if(isLuckyItem) {
			var setsToUpdate = addLuckyItem(selectedItem, equipType);

			setsToUpdate.forEach(function(set) {
				updateSetEffects(oldSetType, set);
			})
		} else {
			updateSetEffects(oldSetType, newSetType);
		}
	}
}

function addRingPendant(selectedItem, equipType, equipId, choiceImage) {
	var itemDetails = pendantRingDetails[equipType];

	if(itemDetails.currIndex < itemDetails.MAX_NUM_EQUIPPED) {
		// As long as slot permits, allow user to add items
		// Highlight selected item on carousel and add item image to respective slot number
		selectedItem.addClass("active");
		selectedItem.data("slotNum", itemDetails.currIndex+1);
		$(`#${equipType}-${itemDetails.currIndex+1}-slot`).css("background-image", `url(${choiceImage})`);

		// Highlight newly active items in item sets
		// Update necessary object with added item
		$(`#item-${equipId}`).addClass("active");
		itemDetails.itemIds[itemDetails.currIndex] = equipId;
		itemDetails.currIndex = findNearestEmptySlot(itemDetails);
	} else {
		$(".slot-exceed-msg").text(`Up to ${itemDetails.MAX_NUM_EQUIPPED} ${equipType}s can be selected. Unselect at least one ${equipType} first.`)

		window.setTimeout(function() {
			$(".slot-exceed-msg").fadeOut(1000);
		}, 2000);
	}
}

function addNonRingPendant(selectedItem, equipType, equipId, choiceImage) {
	// Toggle newly selected item on carousel
	// Add selected item image to equip window
	$(`.single-equip-${equipType}`).removeClass("active");
	selectedItem.addClass("active");
	$(`#${equipType}-slot`).css("background-image", `url(${choiceImage})`);

	// For non-lucky items, un-highlight set effects affected by user selection
	// Highlight newly active item from user selection
	$(`.wearing-${equipType}`).removeClass("active");
	$(`#item-${equipId}`).addClass("active");
}

function findNearestEmptySlot(itemDetails) {
	if(itemDetails.itemIds.indexOf("") === -1) {
		return itemDetails.itemIds.length;
	} else {
		return itemDetails.itemIds.indexOf("");
	}
}

function addLuckyItem(selectedItem, equipType) {
	var setsAffected = [];

	// For each active set effect, check if lucky item type exists in set
	// If it exists, activate lucky item if it meets minimum equipped items requirement
	$(".set-item-effect-div.d-flex").each(function() {
		if($(`.set-items .wearing-${equipType}`, this).length > 0) {
			console.log(`has matching equip type ${equipType} in set`);

			if($(`.set-items .set-effect.active`, this).length >= MIN_NUM_ITEMS_FOR_LUCKY_EFFECT) {
				$(".set-items .lucky-item", this).addClass('d-flex active');
				setsAffected.push($(this).data("setName"));
			}
		} else {
			console.log(`${equipType} does not exist in set`)
		}
	})

	// Empty all lucky item names, then re-add to relevant sets new lucky item name
	$(".set-items .lucky-item").text("");
	$(".set-item-effect-div").each(function() {
		if($(`.set-items .wearing-${equipType}`, this).length > 0) {
			$(".set-items .lucky-item", this).text(selectedItem.data("equipName"));
		}
	})

	return setsAffected;
}

/***************************

	Set Effect Display Updates

***************************/
function updateSetEffects(oldSetType, newSetType) {
	updateOldSetEffect(oldSetType);
	updateNewSetEffect(newSetType);
	updateSetEffectMessage();
	updateTotalSetEffect();
}

// If oldSetType exists, there was a previously selected item in that equip slot
// Update number of active set effects in old set
function updateOldSetEffect(oldSetType) {
	if(!!oldSetType) {
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

function updateSetEffectMessage() {
	var numSetsDisplayed = $(".set-item-effect-div.d-flex").length;
	if(numSetsDisplayed > 0) {
		$(".no-active-set-msg").removeClass("d-flex").addClass("d-none");
	} else {
		$(".no-active-set-msg").removeClass("d-none").addClass("d-flex");
	}
}

function updateTotalSetEffect() {
	var allStatTypes = { str: 0, dex: 0, int: 0, luk: 0, allStats: 0,
						maxHp: 0, maxHpMp: 0, maxHpMpPercent: 0, def: 0, acc: 0, avoid: 0, 
						wama: 0, wa: 0, ma: 0, damagePercent: 0, bossPercent: 0, iedPercent: 0, critDmgPercent: 0 }
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

	var numSetEffectDisplayed = $(".total-stat.d-flex").length;
	if(numSetEffectDisplayed > 0) {
		$(".no-set-effect-msg").removeClass("d-flex").addClass("d-none");
	} else {
		$(".no-set-effect-msg").removeClass("d-none").addClass("d-flex");
	}
}