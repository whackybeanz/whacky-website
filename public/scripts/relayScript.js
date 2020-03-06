$(function() {
	var date = new Date($("#select-date").val());
	var dateMilliseconds = Date.parse(date);

	for(var i = 0; i < 14; i++) {
		var newDate = dateMilliseconds + i * 24 * 60 * 60 * 1000;

		if(i < 7) {
			$(".date-range").append(`<th class="week-1 text-center p-1">${new Date(newDate).toLocaleDateString('en-US', {month: "short", day: "numeric", timeZone: "Asia/Singapore"})}</th>`)
		} else {
			$(".date-range").append(`<th class="week-2 text-center p-1 d-none">${new Date(newDate).toLocaleDateString('en-US', {month: "short", day: "numeric", timeZone: "Asia/Singapore"})}</th>`)
		}
	}
})

$(".section-show-hide").on("click", function() {
	var sectionType = $(this).data("section");
	$(this).find(".far").toggleClass("d-none");
	$(`.relay-${sectionType}`).toggleClass("d-none");
})

// Settings
$("#is-perfect-score").change(function() {
	if($(this).prop("checked")) {
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
	$(".over-200-checkbox").prop("checked", this.checked);
})

$(".over-200-checkbox").change(function() {
	if($(this).prop("checked")) {
		var numChecked = $(".over-200-checkbox:checked").length;
		var numCheckboxes = $(".over-200-checkbox").length;

		if(numChecked === numCheckboxes) {
			$("#all-level-200").prop("checked", true);
		}
	} else {
		$("#all-level-200").prop("checked", false);
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

$(".add-character-btn").on("click", function() {
	var addClassType = $(this).data("class");
	var numCharacters = $(`.input-${addClassType}-list .class-input`).length;
	var isPerfectScore = $("#is-perfect-score").prop("checked") ? "d-none" : ""
	var isAll200 = $("#all-level-200").prop("checked") ? "checked" : "";
	
	$(`.input-${addClassType}-list`).append(`<div class="position-relative">
		<input type="text" placeholder="${addClassType} ${numCharacters+1}" class="class-input w-100 border text-center mb-0" data-class="${addClassType}" data-num="${numCharacters+1}">
		<input type="checkbox" class="form-check-input over-200-checkbox ${isPerfectScore} position-absolute" data-class="${addClassType}" data-num="${numCharacters+1}" ${isAll200}>
	</div>`)
})

$(".generate-score-btn").on("click", function() {
	if($("#is-perfect-score").prop("checked")) {

		var setupPlanner = new Promise((resolve, reject) => {
				$(".class-input").each(function(index, elem) {
				var classType = $(elem).data("class");
				var characterNum = $(elem).data("num");
				var ign = $(elem).val();
				
				if(ign !== "") {
					$(`.class-type.${classType}-${characterNum}`).html(`<div data-class="${classType}" data-level-bonus=true>${ign}</div>`);
					resolve();
				}
			})
		})

		setupPlanner.then(() => {
			generateScore();
		})
	} else {
		var charList = {
			warrior: {
				notOver200: [],
				over200: [],
			},
			mage: {
				notOver200: [],
				over200: [],
			},
			archer: {
				notOver200: [],
				over200: [],
			},
			thief: {
				notOver200: [],
				over200: [],
			},
			pirate: {
				notOver200: [],
				over200: [],
			}
		}

		var setupCharList = new Promise((resolve, reject) => {
			$(".class-input").each(function(index, elem) {
				var classType = $(elem).data("class");
				var isOver200 = $(elem).next().prop("checked");
				var ign = $(elem).val();

				if(ign !== "") {
					if(isOver200) {
						charList[classType]['over200'].push(ign);
						console.log(charList[classType])
						
						resolve();
					} else {
						charList[classType]['notOver200'].push(ign);
						resolve();
					}
				} else {
					resolve();
				}
			})
		})
		
		setupCharList.then(() => {
			planRelay(charList);
			generateScore();
		})
	}
})

function planRelay(charList) {
	for(let i = 1; i <= 14; i++) {
		var tempCharList = charList;

		for(let j = 1; j <= 9; j++) {
			var requiredClass = $(`.planned-characters.mission-${j}.day-${i}`).data("class");
			var plannedIgn = "";
			var isOver200 = false;

			if(tempCharList[requiredClass]['over200'].length > 0) {
				plannedIgn = tempCharList[requiredClass]['over200'].shift();
				isOver200 = true;
				$(`.planned-characters.mission-${j}.day-${i}`).html(`<div data-class="${requiredClass}" data-level-bonus=${isOver200}>${plannedIgn}</div>`)
			} else {
				if(tempCharList[requiredClass]['notOver200'].length > 0) {
					plannedIgn = tempCharList[requiredClass]['notOver200'].shift();
					$(`.planned-characters.mission-${j}.day-${i}`).html(`<div data-class="${requiredClass}" data-level-bonus=${isOver200}>${plannedIgn}</div>`)
				}
			}
		}
	}
}

function generateScore() {
	var totalScore = 0;

	for(var i = 1; i <= 14; i++) {
		var dayScore = 0;

		$(`.planned-characters.day-${i}`).map(function(index, elem) {
			var expectedClassType = $(elem).data("class");

			if($(elem).children().length !== 0) {
				dayScore += 50;
				totalScore += 50;

				var inputClassType = $(elem).children().data("class");
				var isOver200 = $(elem).children().data("level-bonus");

				if(expectedClassType === inputClassType) {
					dayScore += 10;
					totalScore += 10;
				}

				if(isOver200) {
					dayScore += 20;
					totalScore += 20;
				}
			}
		})
		$(`.day-${i}-score`).text(dayScore);
	}
	$(`.grand-total-score`).text(totalScore);
}