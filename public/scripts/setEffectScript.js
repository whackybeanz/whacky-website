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
var equippedLuckyItems = {};
var priorityList = [];
var isEquippedOverall = false;

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
	var isLuckyItem = selectedItem.data("isLuckyItem");

	if(isLuckyItem) {
		var itemPriorityToRemove = selectedItem.data("itemPriority");
		removeLuckyItem(itemPriorityToRemove);
	}

	if(equipType === "ring" || equipType === "pendant") {
		removeRingPendant(selectedItem, equipType, equipId);
	} else {
		removeNonRingPendant(selectedItem, equipType, equipId);
	}

	activateLuckyItem();
	updateSetEffects();
	updateSetEffectMessage();
	updateTotalSetEffect();
}

function removeLuckyItem(itemPriorityToRemove) {
	delete equippedLuckyItems[itemPriorityToRemove];
	priorityList = priorityList.filter(priority => priority !== itemPriorityToRemove);
}

function removeRingPendant(selectedItem, equipType, equipId) {
	var itemDetails = pendantRingDetails[equipType];

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

	if(equipType === "weapon") {
		var setType = selectedItem.data("setType");
		$(`.${setType}-set .set-items .choose-weapon-text`).removeClass("d-none");
		$(`#item-${equipId}`).removeClass("active").addClass("d-none");
	} else {
		$(`#item-${equipId}`).removeClass("active");
	}
}

function addSetItem(selectedItem, equipType, equipId, choiceImage) {
	var isLuckyItem = selectedItem.data("isLuckyItem");

	if(isLuckyItem) {
		addLuckyItem(selectedItem, equipType);
	}

	if(equipType === "ring" || equipType === "pendant") {
		addRingPendant(selectedItem, equipType, equipId, choiceImage);
	} else {
		addNonRingPendant(selectedItem, equipType, equipId, choiceImage);
	}
}

function addLuckyItem(selectedItem, equipType) {
	var selectedItemPriority = Number(selectedItem.data("itemPriority"));
	priorityList.push(selectedItemPriority);
	priorityList.sort((a, b) => a - b);

	equippedLuckyItems[selectedItemPriority] = {
		name: selectedItem.data("equipName"), 
		type: selectedItem.data("equipType")
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

		activateLuckyItem();
		updateSetEffects();
		updateSetEffectMessage();
		updateTotalSetEffect();
	} else {
		$(".slot-exceed-msg").text(`Up to ${itemDetails.MAX_NUM_EQUIPPED} ${equipType}s can be selected. Unselect at least one ${equipType} first.`)

		window.setTimeout(function() {
			$(".slot-exceed-msg").fadeOut(1000);
		}, 2000);
	}
}

function addNonRingPendant(selectedItem, equipType, equipId, choiceImage) {
	if(equipType === "bottom") {
		if(isEquippedOverall) {
			$(".slot-exceed-msg").text(`An overall has been equipped. Unselect the overall first to enable selection in this item category.`)

			window.setTimeout(function() {
				$(".slot-exceed-msg").fadeOut(1000);
			}, 2000);
		} else {
			addSelectedItem(selectedItem, equipType, equipId, choiceImage);
		}
	} else {
		addSelectedItem(selectedItem, equipType, equipId, choiceImage);
	}
}

function addSelectedItem(selectedItem, equipType, equipId, choiceImage) {
	// Toggle newly selected item on carousel
	// Add selected item image to equip window
	$(`.single-equip-${equipType}`).removeClass("active");
	selectedItem.addClass("active");
	$(`#${equipType}-slot`).css("background-image", `url(${choiceImage})`);

	// For non-lucky items, un-highlight set effects affected by user selection
	// Highlight newly active item from user selection
	var setType = selectedItem.data("setType");
	
	if(equipType === "weapon") {
		$(`.wearing-${equipType}`).removeClass("active").addClass("d-none");
		$(`.wearing-${equipType}.choose-weapon-text`).removeClass("d-none");
		$(`.${setType}-set .set-items .wearing-${equipType}.choose-weapon-text`).addClass("d-none");
		$(`#item-${equipId}`).addClass("active").removeClass("d-none");
	} else {
		$(`.wearing-${equipType}`).removeClass("active");
		$(`#item-${equipId}`).addClass("active");
	}

	if(equipType === "top") {
		isEquippedOverall = selectedItem.data("isOverall") || false;
	}
	
	// If previous item was a lucky item of the same item type, remove it from list of equipped lucky items
	// As activated lucky item will be the same type/priority regardless of which set it is in, no need to
	// retrieve individual equip types/priorities
	var isLuckyItemActive = ($(`.set-items .lucky-item.active`).length > 0);
	var isLuckyItemSameType = (equipType === $(`.set-items .lucky-item.active`).data("equipType"));

	if(isLuckyItemActive && isLuckyItemSameType) {
		var itemPriorityToRemove = $(`.set-items .lucky-item.active`).data("itemPriority");
		removeLuckyItem(itemPriorityToRemove);
	}

	activateLuckyItem();
	updateSetEffects();
	updateSetEffectMessage();
	updateTotalSetEffect();
}

function findNearestEmptySlot(itemDetails) {
	if(itemDetails.itemIds.indexOf("") === -1) {
		return itemDetails.itemIds.length;
	} else {
		return itemDetails.itemIds.indexOf("");
	}
}

function activateLuckyItem() {
	var hasActiveLuckyItem = false;

	// Erase all lucky item names
	$(".set-item-effect-div.d-flex").each(function() {
		$(".set-items .lucky-item").removeClass("d-flex active").text("");
	})

	// Starting from the highest priority (smallest number) lucky item, go down list of all and
	// equipped lucky items and activate the first possible lucky item in the list
	// For each active set effect, check if lucky item type exists in set
	// If it exists, activate lucky item if it meets minimum equipped items requirement
	// Stop looking through list upon first lucky item's activation
	priorityList.forEach(function(priority) {
		if(hasActiveLuckyItem) {
			return false;
		}

		var luckyItemType = equippedLuckyItems[priority].type;

		$(".set-item-effect-div.d-flex").each(function() {
			var numWearableItemsOfType = $(`.set-items .wearing-${luckyItemType}`, this).length;
			var numItemsOfTypeWorn = $(`.set-items .wearing-${luckyItemType}.active`, this).length;

			if(numWearableItemsOfType > 0) {
				if(luckyItemType === "ring" || luckyItemType === "pendant") {
					if(numWearableItemsOfType <= numItemsOfTypeWorn) {
						return false;
					}
				}

				if($(`.set-items .set-effect.active`, this).length >= MIN_NUM_ITEMS_FOR_LUCKY_EFFECT) {
					$(".set-items .lucky-item", this).addClass('d-flex active')
													 .text(equippedLuckyItems[priority].name)
													 .data({"itemPriority": priority, "equipType": luckyItemType});
					hasActiveLuckyItem = true;
				}
			}
		})
	})
}

/***************************

	Set Effect Display Updates

***************************/
function updateSetEffects() {
	$(".set-item-effect-div").each(function() {
		var setName = $(this).data("setName");
		var numItemsEquipped = $(`.${setName}-set .set-items .active`).length;

		if(numItemsEquipped === 0) {
			$(`.${setName}-set`).removeClass("d-flex").addClass("d-none");
		} else {
			$(`.${setName}-set`).removeClass("d-none").addClass("d-flex");
		}

		$(`.${setName}-set .num-wearing-div div`).removeClass("active");
		for(var i = 1; i <= numItemsEquipped; i++) {
			$(`.${setName}-set .num-wearing-div .wearing-${i}`).addClass("active");
		}
	})
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

	//$(".total-stat").removeClass("d-flex").addClass("d-none");
	Object.keys(allStatTypes).forEach(function(statType) { 
		if(allStatTypes[statType] !== 0) {
			$(`.total-stat-${statType}`).addClass("active");
			$(`.total-stat-${statType}-val`).text(allStatTypes[statType])
		} else {
			$(`.total-stat-${statType}`).removeClass("active");
		}
	});

	var numSetEffectDisplayed = $(".total-stat.d-flex").length;
	if(numSetEffectDisplayed > 0) {
		$(".no-set-effect-msg").removeClass("d-flex").addClass("d-none");
	} else {
		$(".no-set-effect-msg").removeClass("d-none").addClass("d-flex");
	}
}