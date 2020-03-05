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
	var numCharacters = $(`.input-${addClassType}-list input`).length;
	
	$(`.input-${addClassType}-list`).append(`<input type="text" placeholder="${addClassType} ${numCharacters+1}" class="class-input w-100 border rounded-lg text-center mb-0" data-class="${addClassType}" data-num="${numCharacters+1}">`)
})

$(".perfect-score-btn").on("click", function() {
	$(".class-input").map(function(index, elem) {
		var classType = $(elem).data("class");
		var characterNum = $(elem).data("num");
		var ign = $(elem).val();

		$(`.class-type.${classType}-${characterNum}`).text(ign);
	})
})