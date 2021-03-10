const NUM_CLUES = 20;
const NUM_ROWS = 19;
const NUM_COLS = 17;
var currDirection = "";

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
    $('[data-toggle="tooltip"]').tooltip({
        html: true
    });

    grid.forEach(function(row, xIndex) {
        row.forEach(function(col, yIndex) {
            // If square is empty, mark with black square
            if(col === 0) {
                $(".crossword-board").append(`<input type="text" class="single-square border-0 bg-dark" disabled>`)
            } else {
                var xClue;
                var yClue;
                var isClueNumFirstInstance = false;
                var clueNum;
                var clueClass = ""

                // If square is an input square along rows, get clue number
                if(rowClueNums[xIndex][yIndex] !== 0) {
                    xClue = rowClueNums[xIndex][yIndex];
                    clueClass += `answer-${xClue} `

                    // If this is the first instance of this clue number being found
                    // Set clue number to found number, and remove from allClueNums
                    if(allClueNums.indexOf(xClue) !== -1) {
                        isClueNumFirstInstance = true;
                        clueNum = allClueNums.splice(allClueNums.indexOf(xClue), 1);
                    }
                }

                // If square is an input square along columns, get clue number
                if(colClueNums[xIndex][yIndex] !== 0) {
                    yClue = colClueNums[xIndex][yIndex];
                    clueClass += `answer-${yClue}`

                    if(allClueNums.indexOf(yClue) !== -1) {
                        isClueNumFirstInstance = true;
                        clueNum = allClueNums.splice(allClueNums.indexOf(yClue), 1);
                    }
                }

                // If this is the first time clueNum was found, it is the start of the row/column input
                // Create a HTML input that attaches the appropriate x and/or y clue number attribute to the square AND display its clue number
                // Otherwise, create a HTML input that only attaches x/y clue number attribute
                if(isClueNumFirstInstance) {
                    var html = `<div class="w-100 h-100 position-relative">`;
                    html += `<input type="text" class="single-square board-square ${clueClass} w-100 h-100 border border-dark font-weight-bold text-center text-uppercase" id="square-num-${xIndex*NUM_COLS + yIndex+1}" minlength="1" maxlength="1" required="required" `;
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
                        $(`<input type="text" class="single-square board-square ${clueClass} w-100 h-100 border border-dark font-weight-bold text-center text-uppercase" id="square-num-${xIndex*NUM_COLS + yIndex+1}" minlength="1" maxlength="1" required="required">`).attr({"data-xclue": xClue, "data-yclue": yClue})
                    )
                }
            }
        })
    })
})

$(".crossword-board").on("focus", ".board-square", function() {
    highlightClue($(this));
    var xClueNum = $(this).data("xclue");
    var yClueNum = $(this).data("yclue");

    if(currDirection === "") {
        // If both row/col clue numbers are found or if only row clue number is found
        // Set direction to move cursor horizontally to next input box, else move vertically
        if(xClueNum && yClueNum || xClueNum) {
            currDirection = "horz";
        } else if(yClueNum) {
            currDirection = "vert"
        }
    } else {
        
    }
})

$(".crossword-board").on("blur", ".board-square", function() {
    unhighlightClue($(this));   
    var squareId = $(this).attr("id");
    var squareIdNum = Number(squareId.split("-")[2]);

    // Reset cursor direction to nothing when leaving focus from input boxes if boxes are at the edge of the crossword
    // or if cursor meets a blank (non-input) square
    if(currDirection === "horz") {
        if(squareIdNum % NUM_COLS === 0 || $(`#square-num-${squareIdNum+1}`).length === 0) {
            currDirection = "";
        }
    }

    if(currDirection === "vert") {
        if($(`#square-num-${squareIdNum+NUM_COLS}`).length === 0) {
            currDirection = "";
        }
    }
})

function highlightClue(elem) {
    var xClueNum = elem.data("xclue");
    var yClueNum = elem.data("yclue");

    if(xClueNum) {
        $(`.clue-${xClueNum}`).addClass("bg-info text-white");
    }

    if(yClueNum) {
        $(`.clue-${yClueNum}`).addClass("bg-info text-white");
    }
}

function unhighlightClue(event) {
    var xClueNum = $(event).data("xclue");
    var yClueNum = $(event).data("yclue");

    if(xClueNum) {
        $(`.clue-${xClueNum}`).removeClass("bg-info text-white");
    }

    if(yClueNum) {
        $(`.clue-${yClueNum}`).removeClass("bg-info text-white");
    }
}

$(".crossword-board").on("keyup", ".board-square", function(event) {
    var squareId = $(this).attr("id");
    var squareIdNum = Number(squareId.split("-")[2]);

    if(event.which === 8) {
        // If user hits backspace, move the cursor to the next appropriate box and focus on box based on direction
        // or end focus if reached non-input/invalid square
        if(currDirection === "horz") {
            if(squareIdNum-1 % NUM_COLS === 0 || $(`#square-num-${squareIdNum-1}`).length === 0) {
                $(this).blur();
                currDirection = "";
            } else {
                $(".crossword-board").find(`#square-num-${squareIdNum-1}`).focus();
            }
        }

        if(currDirection === "vert") {
            if($(`#square-num-${squareIdNum-NUM_COLS}`).length === 0) {
                $(this).blur();
                currDirection = "";
            } else {
                $(".crossword-board").find(`#square-num-${squareIdNum-NUM_COLS}`).focus();
            }
        }
    } else {
        // For any other keys, move cursor to next square based on direction or end focus if reached non-input/invalid square
        if($(this).val()) {
            if(currDirection === "horz") {
                if(squareIdNum % NUM_COLS === 0 || $(`#square-num-${squareIdNum+1}`).length === 0) {
                    $(this).blur();
                    currDirection = "";
                } else {
                    $(".crossword-board").find(`#square-num-${squareIdNum+1}`).focus();
                }
            }

            if(currDirection === "vert") {
                if($(`#square-num-${squareIdNum+NUM_COLS}`).length === 0) {
                    $(this).blur();
                    currDirection = "";
                } else {
                    $(".crossword-board").find(`#square-num-${squareIdNum+NUM_COLS}`).focus();
                }
            }
        }
    }
})

$(".crossword-board-form").on("submit", function(event) {
    event.preventDefault();

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

    $.post("/maple/fun/crossword/answers", {allAnswers: allAnswers}, function(data) {
        if(data.isAnswerCorrect) {
            $(".submit-ans-btn").hide();
            $(".answer-prompt").text("Nice! All answers are correct! Now, unscramble each colored group of highlighted squares to form a silly message and you're done!")
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

$(".clue").on("mouseenter", function() {
    var clueNum = $(this).data("clueNum");
    $(this).addClass("bg-info text-white");
    $(`.answer-${clueNum}`).addClass("bg-info text-white");
});

$(".clue").on("mouseleave", function() {
    var clueNum = $(this).data("clueNum");
    $(this).removeClass("bg-info text-white");
    $(`.answer-${clueNum}`).removeClass("bg-info text-white");
})