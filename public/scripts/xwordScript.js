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

var allClueNums = Array.from(Array(20)).map((e, i) => i + 1);

$(function() {
	grid.forEach(function(row, xIndex) {
		row.forEach(function(col, yIndex) {
			if(col === 0) {
				$(".crossword-board").append(`<input type="text" class="border-0 bg-dark" disabled>`)
			} else {
				var xClue;
				var yClue;
				var isClueNumFirstInstance = false;
				var clueNum;

				if(rowClueNums[xIndex][yIndex] !== 0) {
					xClue = rowClueNums[xIndex][yIndex];

					if(allClueNums.indexOf(xClue) !== -1) {
						isClueNumFirstInstance = true;
						clueNum = allClueNums.splice(allClueNums.indexOf(xClue), 1);
					}
				}

				if(colClueNums[xIndex][yIndex] !== 0) {
					yClue = colClueNums[xIndex][yIndex];

					if(allClueNums.indexOf(yClue) !== -1) {
						isClueNumFirstInstance = true;
						clueNum = allClueNums.splice(allClueNums.indexOf(yClue), 1);
					}
				}

				if(isClueNumFirstInstance) {
					var html = `<div class="w-100 h-100 position-relative">`;
					html += `<input type="text" class="board-square w-100 h-100 border border-dark font-weight-bold text-center text-uppercase" minlength="1" maxlength="1" required="required" `;
					if(xClue) {
						html += `data-xclue=${xClue}`;
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
						$(`<input type="text" class="board-square border border-dark font-weight-bold text-center text-uppercase" minlength="1" maxlength="1" required="required">`).attr({"data-xclue": xClue, "data-yclue": yClue})
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
		$(`.x-clue-${xClueNum}`).addClass("bg-info text-white");
	}

	if(yClueNum) {
		$(`.y-clue-${yClueNum}`).addClass("bg-info text-white");
	}
})

$(".crossword-board").on("mouseleave", ".board-square", function() {
	var xClueNum = $(this).data("xclue");
	var yClueNum = $(this).data("yclue");

	if(xClueNum) {
		$(`.x-clue-${xClueNum}`).removeClass("bg-info text-white");
	}

	if(yClueNum) {
		$(`.y-clue-${yClueNum}`).removeClass("bg-info text-white");
	}
})