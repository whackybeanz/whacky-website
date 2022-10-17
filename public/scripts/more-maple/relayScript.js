document.addEventListener("DOMContentLoaded", function(event) { 
    dateChangeListener();
    settingsListeners();

    //generateSavedInputs();
})

function dateChangeListener() {
    // Using function() instead of arrow function to retrieve 'this'
    document.getElementById("select-date").addEventListener("change", function() {
        let [version, savedData] = getGeneralData();

        if(savedData === null) {
            // If there is no saved data at all, create an empty save object
            // Also create an empty object for that relay version
            savedData = { };
            savedData[version] = { };
        } else {
            // If there is no saved data specific to the current relay version, create an empty object for that version
            if(savedData[version] === undefined) {
                savedData[version] = { };
            }
        }
        savedData[version].startDate = this.value;          

        updateTableDateDisplay(this.value);
        localStorage.setItem("tacticalRelay", JSON.stringify(savedData))
    })
}

function settingsListeners() {
    document.querySelector(".next-week").addEventListener("click", () => {
        document.querySelectorAll(".week-1").forEach(cell => cell.classList.add("d-none"));
        document.querySelectorAll(".week-2").forEach(cell => cell.classList.remove("d-none"));
    })

    document.querySelector(".prev-week").addEventListener("click", () => {
        document.querySelectorAll(".week-1").forEach(cell => cell.classList.remove("d-none"));
        document.querySelectorAll(".week-2").forEach(cell => cell.classList.add("d-none"));
    })

    document.querySelectorAll(".input-list").forEach(elem => {
        elem.addEventListener("keypress", (event) => {
            if(event.charCode === 13) {
                event.preventDefault();
            }
        })
    })

    document.querySelectorAll(".add-character-btn").forEach(btn => {
        btn.addEventListener("click", function(event) {
            event.preventDefault();

            const classType = this.dataset.classType;
            const affectedList = document.getElementById(`input-${classType}-list`);

            const html = `<div class="col-12 d-flex position-relative px-0">
                            <input type="text" placeholder="${classType.charAt(0).toUpperCase() + classType.slice(1)} ${affectedList.childElementCount+1}" class="col-9 class-input font-table form-control text-center p-0 mb-1" name="${classType}Inputs" id="${classType}-class-input-${affectedList.childElementCount+1}" autocomplete="off">
                            <input type="number" placeholder="Level" class="col-3 level-input font-table form-control text-center" name="${classType}Levels" id="${classType}-level-input-${affectedList.childElementCount+1}" autocomplete="off">
                        </div>`;
            
            affectedList.insertAdjacentHTML("beforeend", html);

            if(affectedList.childElementCount >= 9) {
                this.classList.remove("d-flex");
                this.classList.add("d-none");
            }
        })
    })

    document.getElementById("generate-planner-btn").addEventListener("click", (event) => {
        event.preventDefault();
    })

    // Erase all inputs and also delete data related to the currently-viewed relay version
    // If no further relay-related data exists, erase item from storage
    document.getElementById("restart-planner-btn").addEventListener("click", (event) => {
        event.preventDefault();

        if(window.confirm("Restarting will erase 1) all inputs made on this page and 2) all saved data related to the current tactical relay version. Do you wish to continue?")) {
            let [version, savedData] = getGeneralData();

            delete savedData[version];

            if(Object.keys(savedData).length === 0) {
                localStorage.removeItem("tacticalRelay");
            } else {
                localStorage.setItem("tacticalRelay", JSON.stringify(savedData));
            }
            
            location.reload();
        }
    })
}

function getGeneralData() {
    const version = document.getElementById("version").value;
    const savedData = JSON.parse(localStorage.getItem("tacticalRelay"));

    return [version, savedData];
}

// Update dates displayed in the table
// Toggle between week 1 or 2 depending on the status of the event
// Also highlight the column corresponding to today's date if event is currently ongoing
function updateTableDateDisplay(eventStartDate) {
    for(let i = 1; i <= 14; i++) {
        document.querySelector(`.single-date.day-${i}`).textContent = new Date(Date.parse(eventStartDate) + (i-1)*24*60*60*1000).toLocaleDateString('en-US', {month: "short", day: "numeric", timeZone: "Asia/Singapore"});
    }

    const currDate = Date.now();
    const timeSinceEventStarted = currDate - Date.parse(eventStartDate);

    if(timeSinceEventStarted > 0) {
        const currEventDayNum = Math.ceil(timeSinceEventStarted / (24*60*60*1000));

        if(currEventDayNum >= 1 && currEventDayNum <= 14) {
            document.querySelectorAll(`.day-${currEventDayNum}`).forEach(cell => cell.classList.add("active"));
        }

        if(currEventDayNum > 7 && currEventDayNum <= 14) {
            document.querySelectorAll(".week-1").forEach(cell => cell.classList.add("d-none"));
            document.querySelectorAll(".week-2").forEach(cell => cell.classList.remove("d-none"));
        } else {
            document.querySelectorAll(".week-1").forEach(cell => cell.classList.remove("d-none"));
            document.querySelectorAll(".week-2").forEach(cell => cell.classList.add("d-none"));
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
        $(`.day-${i}.mission-score`).text(missionScore);
        $(`.day-${i}.job-score`).text(jobScore);
        $(`.day-${i}.level-score`).text(levelScore);
        $(`.day-${i}.total-score`).text(missionScore + jobScore + levelScore);
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