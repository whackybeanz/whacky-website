const NUM_CLUES = 20;

var grid = [[0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
			[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
			[1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1],
			[0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
			[0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
			[0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
			[0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
			[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0],
			[0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0],
			[0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0]]

var rowClueNums = [ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 17, 17, 17, 17, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[1, 1, 1, 1, 1, 1, 1, 1, 0, 10, 10, 10, 10, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 12, 12, 12, 12, 12, 12, 12],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 15, 15, 15, 15, 15, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 19, 19, 19, 0, 0],
					[0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

var colClueNums = [ [0, 0, 0, 0, 18, 0, 11, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 18, 0, 11, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 18, 0, 11, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 18, 0, 11, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 18, 0, 0, 0, 16, 0, 0, 20, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 20, 0, 0, 0, 0, 0],
					[0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 8],
					[0, 7, 0, 0, 0, 4, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 8],
					[0, 7, 0, 0, 0, 4, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 8],
					[0, 7, 0, 0, 0, 4, 0, 0, 0, 0, 0, 20, 0, 0, 13, 0, 8],
					[0, 7, 0, 0, 0, 4, 0, 0, 0, 0, 0, 20, 0, 0, 13, 0, 8],
					[0, 7, 0, 0, 0, 4, 0, 14, 0, 0, 0, 20, 0, 0, 13, 0, 8],
					[0, 7, 0, 0, 0, 4, 0, 14, 0, 5, 0, 0, 0, 0, 13, 0, 0],
					[0, 0, 0, 0, 0, 4, 0, 14, 0, 5, 0, 0, 0, 0, 13, 0, 0],
					[0, 0, 0, 0, 0, 4, 0, 14, 0, 5, 0, 0, 0, 0, 13, 0, 0],
					[0, 0, 0, 0, 0, 4, 0, 14, 0, 5, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 4, 0, 14, 0, 5, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 4, 0, 14, 0, 5, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 14, 0, 5, 0, 0, 0, 0, 0, 0, 0]]

var colorBoard = [ 0, 0, 0, 0, "#848482", 0, 0, 0, "#2B65EC", 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, "#848482", 0, 0, 0, 0, "#F87217", 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, "#41A317", 0, 0, 0, "#848482", 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "#848482",
					0, 0, "#2B65EC", 0, 0, 0, 0, 0, 0, "#F87217", 0, 0, "#2B65EC", 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, "#F87217", 0, 0, 0, 0, 0, 0, "#41A317", 0, 0,
					0, "#41A317", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, "#41A317", 0, 0, "#848482", "#41A317", 0, 0, 0, "#2B65EC", 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, "#F87217", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, "#F87217", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, "#848482", 0, 0, "#41A317", 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "#848482", 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, "#2B65EC", 0, 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

var allClueNums = Array.from(Array(NUM_CLUES)).map((e, i) => i + 1);

$(function() {
	grid.forEach(function(row, xIndex) {
		row.forEach(function(col, yIndex) {
			if(col === 0) {
				$(".crossword-board").append(`<input type="text" class="single-square border-0 bg-dark" disabled>`)
			} else {
				var xClue;
				var yClue;
				var isClueNumFirstInstance = false;
				var clueNum;
				var clueClass = ""

				if(rowClueNums[xIndex][yIndex] !== 0) {
					xClue = rowClueNums[xIndex][yIndex];
					clueClass += `answer-${xClue} `

					if(allClueNums.indexOf(xClue) !== -1) {
						isClueNumFirstInstance = true;
						clueNum = allClueNums.splice(allClueNums.indexOf(xClue), 1);
					}
				}

				if(colClueNums[xIndex][yIndex] !== 0) {
					yClue = colClueNums[xIndex][yIndex];
					clueClass += `answer-${yClue}`

					if(allClueNums.indexOf(yClue) !== -1) {
						isClueNumFirstInstance = true;
						clueNum = allClueNums.splice(allClueNums.indexOf(yClue), 1);
					}
				}

				if(isClueNumFirstInstance) {
					var html = `<div class="w-100 h-100 position-relative">`;
					html += `<input type="text" class="single-square board-square ${clueClass} w-100 h-100 border border-dark font-weight-bold text-center text-uppercase" minlength="1" maxlength="1" required="required" `;
					if(xClue) {
						html += `data-xclue=${xClue} `;
					}
					if(yClue) {
						html += `data-yclue=${yClue}`;
					}
					html += `>`
					html += `<div class="board-clue-num w-100 h-100 position-absolute">${clueNum}</div>`
					html += "</div>";

					$(".crossword-board").append(html);
				} else {
					$(".crossword-board").append(
						$(`<input type="text" class="single-square board-square ${clueClass} border border-dark font-weight-bold text-center text-uppercase" minlength="1" maxlength="1" required="required">`).attr({"data-xclue": xClue, "data-yclue": yClue})
					)
				}
			}
		})
	})
})

$(".crossword-board").on("mouseenter", ".board-square", function() {
	var xClueNum = $(this).data("xclue");
	var yClueNum = $(this).data("yclue");

	if(xClueNum) {
		$(`.clue-${xClueNum}`).addClass("bg-info text-white");
	}

	if(yClueNum) {
		$(`.clue-${yClueNum}`).addClass("bg-info text-white");
	}
})

$(".crossword-board").on("mouseleave", ".board-square", function() {
	var xClueNum = $(this).data("xclue");
	var yClueNum = $(this).data("yclue");

	if(xClueNum) {
		$(`.clue-${xClueNum}`).removeClass("bg-info text-white");
	}

	if(yClueNum) {
		$(`.clue-${yClueNum}`).removeClass("bg-info text-white");
	}
})

$(".crossword-board-form").on("submit", function(event) {
	event.preventDefault();
})

$(".submit-ans-btn").on("click", function(event) {
	var allAnswers = [];
	$(".clue").removeClass("text-danger font-weight-bold");
	$(".answer-prompt").removeClass("text-danger");

	for(var i = 1; i <= NUM_CLUES; i++) {
		var answer = "";
		$(`.answer-${i}`).each(function() {
			answer += $(this).val().toLowerCase();
		})
		allAnswers.push(answer);
	}

	$.post("/xwrdpzl/answers", {allAnswers: allAnswers}, function(data) {
		if(data.isAnswerCorrect) {
			$(".submit-ans-btn").hide();
			$(".answer-prompt").text("Nice! All answers are correct! Now, unscramble each colored group of highlighted squares to form a phrase and PM me the phrase to complete this task.")
			$(".answer-prompt").addClass("d-flex text-success");
			$(".crossword-clues").hide();
			$(".crossword-board-blocker").removeClass("d-none");
			$(".color-clues").removeClass("d-none").addClass("d-flex");

			$(".single-square").each(function(index) {
				if(colorBoard[index] !== 0) {
					$(this).css("background-color", colorBoard[index]);
				}
			})
		} else {
			$(".answer-prompt").text("A few answers are wrong! Clues with wrong answers have been highlighted red.")
			$(".answer-prompt").addClass("d-flex text-danger")

			data.wrongAnswers.forEach(function(clueNum) {
				$(`.clue-${clueNum}`).addClass("text-danger font-weight-bold");
			})
		}
	})
})