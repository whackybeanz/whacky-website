$(function() {
	updateTableDates(true);
	generateSavedInputs();
})

function updateTableDates(isNewDateCreation) {
	var anySavedDate = localStorage.getItem("relayStartDate");

	if(anySavedDate !== null) {
		var date = new Date(anySavedDate);
		$("#select-date").val(anySavedDate);
	} else {
		var date = new Date($("#select-date").val());
		localStorage.setItem("relayStartDate", $("#select-date").val());
	}
	
	var dateMilliseconds = Date.parse(date);

	for(var i = 0; i < 14; i++) {
		var newDate = dateMilliseconds + i * 24 * 60 * 60 * 1000;

		if(isNewDateCreation) {
			if(i < 7) {
				$(".date-range").append(`<th class="single-date week-1 day-${i+1} text-center p-1">${new Date(newDate).toLocaleDateString('en-US', {month: "short", day: "numeric", timeZone: "Asia/Singapore"})}</th>`)	
			} else {
				$(".date-range").append(`<th class="single-date week-2 day-${i+1} text-center p-1 d-none">${new Date(newDate).toLocaleDateString('en-US', {month: "short", day: "numeric", timeZone: "Asia/Singapore"})}</th>`)	
			}
		} else {
			$(`.single-date.day-${i+1}`).text(new Date(newDate).toLocaleDateString('en-US', {month: "short", day: "numeric", timeZone: "Asia/Singapore"}));
		}
	}
}

function generateSavedInputs() {
	var classTypes = ["warrior", "mage", "archer", "thief", "pirate"];
	var savedCharList = JSON.parse(localStorage.getItem("savedCharList"));

	if(savedCharList !== null) {
		var storageIsPerfectScore = localStorage.getItem("isPerfectScore");
		var storageIsAll200 = localStorage.getItem("isAll200");
		var perfectScoreSettings;

		// Check/uncheck is perfect score box
		if(storageIsPerfectScore === null || storageIsPerfectScore === "true") {
			$("#is-perfect-score").prop("checked", true);
			perfectScoreSettings = "d-none";
			$(".level-200-form-checkbox").addClass("d-none");
		} else {
			$("#is-perfect-score").prop("checked", false);
			perfectScoreSettings = "";
			$(".level-200-form-checkbox").removeClass("d-none");
		}		

		// Check/uncheck all level 200 box
		if(storageIsAll200 === null || storageIsAll200 === "true") {
			$("#all-level-200").prop("checked", true);
		} else {
			$("#all-level-200").prop("checked", false);
		}


		Object.keys(savedCharList).forEach(function(classType) {
			//var numExtraClassInputs = localStorage.getItem(`${classType}NumExtraInputs`);

			savedCharList[classType].forEach(function(charData) {
				if(charData.characterNum <= 2) {
					$(`#input-${classType}-${charData.characterNum}`).val(charData.ign);
					$(`#input-${classType}-${charData.characterNum}`).next().prop("checked", charData.isOver200);

					if(perfectScoreSettings === "") {
						$(`#input-${classType}-${charData.characterNum}`).next().removeClass("d-none");
					} else {
						$(`#input-${classType}-${charData.characterNum}`).next().addClass("d-none");
					}
				} else {
					var charIsOver200 = charData.isOver200 ? "checked" : ""

					$(`.input-${classType}-list`).append(`<div class="position-relative">
						<input type="text" placeholder="${classType} ${charData.characterNum}" class="class-input font-table form-control w-100 rounded-sm text-center p-0 mb-1" data-class="${classType}" data-num="${charData.characterNum}" value="${charData.ign}">
						<input type="checkbox" class="form-check-input over-200-checkbox ${perfectScoreSettings} position-absolute" data-class="${classType}" data-num="${charData.characterNum}" ${charIsOver200}>
					</div>`)
				}
			})
		})

		createPlanner();
	}
}

$(".section-show-hide").on("click", function() {
	var sectionType = $(this).data("section");
	$(this).find(".far").toggleClass("d-none");
	$(`.relay-${sectionType}`).toggleClass("d-none");
})

// Settings
$("#select-date").on("blur", function() {
	localStorage.setItem("relayStartDate", $(this).val());
	updateTableDates(false);
})

$("#is-perfect-score").on("change", function() {
	if($(this).prop("checked")) {
		localStorage.setItem("isPerfectScore", true);

		$(".class-input").map(function(index, elem) {
			var classType = $(elem).data("class");
			var characterNum = $(elem).data("num");
			var extraPlaceholderText = "";

			if(characterNum === 1) {
				extraPlaceholderText = " (Level 200+)";
			} else if(characterNum === 2) {
				extraPlaceholderText = " (Arcane River)";
			}
			
			$(elem).attr("placeholder", `${classType} ${characterNum}${extraPlaceholderText}`)
		})
		$(".level-200-form-checkbox").addClass("d-none");
	} else {
		localStorage.setItem("isPerfectScore", false);

		$(".class-input").map(function(index, elem) {
			var classType = $(elem).data("class");
			var characterNum = $(elem).data("num");
			$(elem).attr("placeholder", `${classType} ${characterNum}`);
		})
		$(".level-200-form-checkbox").removeClass("d-none");
	}

	$(".over-200-checkbox").toggleClass("d-none");
})

$("#all-level-200").change(function() {
	localStorage.setItem("isAll200", this.checked);
	$(".over-200-checkbox").prop("checked", this.checked);
})

$(".input-list").on("change", ".over-200-checkbox", function() {
	if($(this).prop("checked")) {
		var numChecked = $(".over-200-checkbox:checked").length;
		var numCheckboxes = $(".over-200-checkbox").length;

		if(numChecked === numCheckboxes) {
			$("#all-level-200").prop("checked", true);
			localStorage.setItem("isAll200", true);
		}
	} else {
		$("#all-level-200").prop("checked", false);
		localStorage.setItem("isAll200", false);
	}
})

$(".add-character-btn").on("click", function(event) {
	event.preventDefault();

	var addClassType = $(this).data("class");
	var numCharacters = $(`.input-${addClassType}-list .class-input`).length;
	var isPerfectScore = $("#is-perfect-score").prop("checked") ? "d-none" : ""
	var isAll200 = $("#all-level-200").prop("checked") ? "checked" : "";
	
	$(`.input-${addClassType}-list`).append(`<div class="position-relative">
		<input type="text" placeholder="${addClassType} ${numCharacters+1}" class="class-input font-table form-control w-100 rounded-sm text-center p-0 mb-1" data-class="${addClassType}" data-num="${numCharacters+1}">
		<input type="checkbox" class="form-check-input over-200-checkbox ${isPerfectScore} position-absolute" data-class="${addClassType}" data-num="${numCharacters+1}" ${isAll200}>
	</div>`)

	localStorage.setItem(`${addClassType}NumExtraInputs`, numCharacters+1-2);
})

$(".generate-score-btn").on("click", function(event) {
	event.preventDefault();
	createPlanner();
	saveData();
})

function createPlanner() {
	if($("#is-perfect-score").prop("checked")) {
		$(".class-input").each(function(index, elem) {
			var classType = $(elem).data("class");
			var characterNum = $(elem).data("num");
			var ign = $(elem).val();
			
			if(ign !== "") {
				$(`.class-type.${classType}-${characterNum} .recommended-char`).text(`${ign}`).attr({"data-class": classType, "data-level-bonus": true});
				$(`.class-type.${classType}-${characterNum} .icon-${classType}`).addClass("active");
				$(`.class-type.${classType}-${characterNum} .icon-over-200`).addClass("active");
			}
		})
		generateScore();
	} else {
		var charList = generateCharList();
		planRelay(charList);
		generateScore();
	}
}

function generateCharList() {
	var charList = [];

	$(".class-input").each(function(index, elem) {
		let classType = $(elem).data("class");
		let isOver200 = $(elem).next().prop("checked");
		let ign = $(elem).val();

		if(ign !== "") {
			charList.push({
				classType: classType,
				isOver200: isOver200,
				ign: ign
			})
		}
	})

	return charList;
}

function planRelay(charList) {
	var totalValidInputs = $(".class-input").filter((index, elem) => !!elem.value).length;
	var endCount;
	var startCount;

	// Fill in from first cell if less than 9 inputs
	// Fill in backwards if 9 or more inputs
	if(totalValidInputs > 0) {
		if(totalValidInputs < 9) {
			startCount = 1;
			endCount = totalValidInputs+1;
		} else {
			startCount = 9;
			endCount = 0;
		}

		for(let i = 1; i <= 14; i++) {
			let tempCharList = [...charList];
			let currCount = startCount;

			do {
				var requiredClass = $(`.planned-characters.mission-${currCount}.day-${i}`).data("class");
				var plannedIgn = ""; //tempCharList.pop().ign;
				var indexToRemove;
				let foundIgnObj;

				if(currCount == 9) {
					[indexToRemove, foundIgnObj] = findMatchingChar(tempCharList, requiredClass, true);

					if(!foundIgnObj) {
						[indexToRemove, foundIgnObj] = findMatchingChar(tempCharList, "", true);
					}

					if(!foundIgnObj) {
						indexToRemove = -1;
					}
				} else {
					// Priority list:
					// Find matching class and over 200, THEN
					// Find matching class but under 200, THEN
					// Find non-matching class and over 200, THEN
					// Find non-matching class but under 200
					[indexToRemove, foundIgnObj] = findMatchingChar(tempCharList, requiredClass, true)

					if(!foundIgnObj) {
						[indexToRemove, foundIgnObj] = findMatchingChar(tempCharList, requiredClass, false);
					}

					if(!foundIgnObj) {
						[indexToRemove, foundIgnObj] = findMatchingChar(tempCharList, "", true);
					}

					if(!foundIgnObj) {
						[indexToRemove, foundIgnObj] = findMatchingChar(tempCharList, "", false);
					}

					if(!foundIgnObj) {
						indexToRemove = -1;
					}
				}

				if(indexToRemove !== -1) {
					tempCharList.splice(indexToRemove, 1);
					//$(`.planned-characters.mission-${currCount}.day-${i}`).html(`<div data-class="${foundIgnObj.classType}" data-level-bonus=true>${foundIgnObj.ign}</div>`)
					$(`.planned-characters.mission-${currCount}.day-${i} .recommended-char`).text(`${foundIgnObj.ign}`).attr({"data-class": foundIgnObj.classType, "data-level-bonus": foundIgnObj.isOver200});

					if(foundIgnObj.classType === requiredClass) {
						$(`.planned-characters.mission-${currCount}.day-${i} .icon-${requiredClass}`).addClass("active");
					}

					if(foundIgnObj.classType === "xenon" && (requiredClass === "thief" || requiredClass === "pirate")) {
						$(`.planned-characters.mission-${currCount}.day-${i} .icon-xenon`).addClass("active");
					}

					if(foundIgnObj.isOver200) {
						$(`.planned-characters.mission-${currCount}.day-${i} .icon-over-200`).addClass("active");
					} else {
						$(`.planned-characters.mission-${currCount}.day-${i} .icon-over-200`).removeClass("active");
					}
				} else {
					$(`.planned-characters.mission-${currCount}.day-${i} .recommended-char`).text("")
				}

				if(totalValidInputs < 9) {
					currCount += 1;
				} else {
					currCount -= 1;
				}
			} while(currCount !== endCount);
		}
	}
}

function findMatchingChar(tempCharList, requiredClass, isNeedOver200) {
	var indexToRemove;
	var foundChar;

	var foundChar = tempCharList.find((charObj, index) => {
		if(charObj.classType === "xenon" && (requiredClass === "thief" || requiredClass === "pirate")) {
			requiredClass = "xenon";
		}

		if(requiredClass === "") {
			if(charObj.isOver200 === isNeedOver200) {
				indexToRemove = index;
				return charObj;
			}
		} else {
			if(charObj.classType === requiredClass && charObj.isOver200 === isNeedOver200) {
				indexToRemove = index;
				return charObj;
			}
		}
	});

	return [indexToRemove, foundChar];
}

function generateScore() {
	var grandTotalScore = 0;

	for(var i = 1; i <= 14; i++) {
		var missionScore = 0;
		var jobScore = 0;
		var levelScore = 0;

		$(`.planned-characters.day-${i}`).map(function(index, elem) {
			var expectedClassType = $(elem).data("class");
			var recommendedCharElem = $(elem).find(".recommended-char");

			if(recommendedCharElem.text() !== "") {
				missionScore += 50;
				grandTotalScore += 50;

				var inputClassType = recommendedCharElem.data("class");
				var isOver200 = recommendedCharElem.data("level-bonus");

				if(expectedClassType === inputClassType || (inputClassType === "xenon" && (expectedClassType === "thief" || expectedClassType === "pirate"))) {
					jobScore += 10;
					grandTotalScore += 10;
				}

				if(isOver200) {
					levelScore += 20;
					grandTotalScore += 20;
				}
			}
		})
		$(`.day-${i}-mission-score`).text(missionScore);
		$(`.day-${i}-job-score`).text(jobScore);
		$(`.day-${i}-level-score`).text(levelScore);
		$(`.day-${i}-total-score`).text(missionScore + jobScore + levelScore);
	}
	$(`.grand-total-score`).text(grandTotalScore);
}

function saveData() {
	var savedCharList = {
		warrior: [],
		mage: [],
		archer: [],
		thief: [],
		pirate: [],
		xenon: []
	};

	$(".class-input").each(function(index, elem) {
		var classType = $(elem).data("class");
		var characterNum = $(elem).data("num");
		let isOver200 = $(elem).next().prop("checked");
		var ign = $(elem).val();

		savedCharList[classType].push({
			characterNum: characterNum,
			isOver200: isOver200,
			ign: ign
		})
	})

	localStorage.setItem("savedCharList", JSON.stringify(savedCharList));
}

$(".restart-btn").on("click", function() {
	var confirmRestart = window.confirm("Restarting will erase ALL saved data. Do you wish to continue?");

	if(confirmRestart) {
		var displayType = localStorage.getItem("pageDisplayType");
		localStorage.clear();
		localStorage.setItem("pageDisplayType", displayType);
		location.reload();
	}
})

// Generated table
$(".next-week").on("click", function() {
	$(this).toggleClass("d-none");
	$(".prev-week, .week-1, .week-2").toggleClass("d-none");
})

$(".prev-week").on("click", function() {
	$(this).toggleClass("d-none");
	$(".next-week, .week-1, .week-2").toggleClass("d-none");
})