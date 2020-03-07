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

$(".generate-score-btn").on("click", async function() {
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
		//let allInputs = document.querySelectorAll(".class-input");

		var charList = generateCharList();
		planRelay(charList);

		/*generateCharList(charList).then((charList) => {
			console.log("received char list");
			console.log(charList);
			planRelay(charList);
		}).then((isComplete) => console.log(isComplete));*/
	}
})

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
	for(let i = 1; i <= 14; i++) {
		let tempCharList = [...charList];

		for(let j = 1; j <= 9; j++) {
			var requiredClass = $(`.planned-characters.mission-${j}.day-${i}`).data("class");
			var plannedIgn = ""; //tempCharList.pop().ign;
			var indexToRemove;
			let foundIgnObj;

			if(j == 9) {
				foundIgnObj = tempCharList.find((charObj, index) => {
					if(charObj.classType === requiredClass && charObj.isOver200) {
						indexToRemove = index;
						return charObj;
					} else {
						indexToRemove = -1;
						//console.log("no over 200 candidates!")
					}
				});
			} else {
				foundIgnObj = tempCharList.find((charObj, index) => {
					if(charObj.classType === requiredClass && !charObj.isOver200) {
						indexToRemove = index;
						return charObj
					}
				})

				if(!foundIgnObj) {
					foundIgnObj = tempCharList.find((charObj, index) => {
						if(charObj.classType === requiredClass && charObj.isOver200) {
							indexToRemove = index;
							return charObj
						}
					})
				}

				if(!foundIgnObj) {
					indexToRemove = -1;
				}
			}

			if(indexToRemove !== -1) {
				tempCharList.splice(indexToRemove, 1);
				$(`.planned-characters.mission-${j}.day-${i}`).html(`<div data-class="${foundIgnObj.classType}" data-level-bonus=true>${foundIgnObj.ign}</div>`)
			} else {
				$(`.planned-characters.mission-${j}.day-${i}`).html("")
			}
		}
	}
	generateScore();
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