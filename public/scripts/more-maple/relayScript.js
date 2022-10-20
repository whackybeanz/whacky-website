document.addEventListener("DOMContentLoaded", function(event) { 
    dateChangeListener();
    settingsListeners();
    loadSavedData();
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
        let [version, savedData] = getGeneralData();
        event.preventDefault();

        let charList = generateCharList();
        generatePlanner(charList);
        calculateIntermediateScore();

        let boosters = suggestBoosters(version);
        displayFinalScore();
        saveData(charList, boosters);
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

function loadSavedData() {
    const [version, savedData] = getGeneralData();

    if(savedData !== null) {
        if(savedData[version] !== undefined) {
            const eventStartDate = savedData[version].startDate;

            document.getElementById("select-date").value = eventStartDate;
            updateTableDateDisplay(eventStartDate);

            if(savedData[version].charList !== undefined) {
                populateInputs(savedData[version].charList);
                generatePlanner(savedData[version].charList);
                calculateIntermediateScore();
                suggestBoosters(version, savedData[version].boosters);
                displayFinalScore();
            }
        }
    }
}

// Update dates displayed in the table
// Toggle between week 1 or 2 depending on the status of the event
// Also highlight the column corresponding to today's date if event is currently ongoing
function updateTableDateDisplay(eventStartDate) {
    for(let i = 1; i <= 14; i++) {
        document.querySelector(`.single-date.day-${i}`).textContent = new Date(Date.parse(eventStartDate) + (i-1)*24*60*60*1000).toLocaleDateString('en-US', {month: "short", day: "numeric", timeZone: "Asia/Singapore"});
    }

    const currDate = Date.now();
    const timeSinceEventStarted = currDate - Date.parse(eventStartDate) + 8*60*60*1000;

    if(timeSinceEventStarted > 0) {
        const currEventDayNum = Math.ceil(timeSinceEventStarted / (24*60*60*1000));

        if(currEventDayNum >= 1 && currEventDayNum <= 14) {
            document.querySelectorAll(`.planner-cell`).forEach(cell => cell.classList.add("inactive"));
            document.querySelectorAll(`.day-${currEventDayNum}`).forEach(cell => cell.classList.add("curr-day"));
            document.querySelectorAll(`.day-${currEventDayNum}`).forEach(cell => cell.classList.remove("inactive"));
        } else {
            document.querySelectorAll(`.class-type`).forEach(cell => cell.classList.remove("inactive"));
        }

        if(currEventDayNum > 7 && currEventDayNum <= 14) {
            document.querySelectorAll(".week-1").forEach(cell => cell.classList.add("d-none"));
            document.querySelectorAll(".week-2").forEach(cell => cell.classList.remove("d-none"));
        } else {
            document.querySelectorAll(".week-1").forEach(cell => cell.classList.remove("d-none"));
            document.querySelectorAll(".week-2").forEach(cell => cell.classList.add("d-none"));
        }
    } else {
        document.querySelectorAll(`.class-type`).forEach(cell => cell.classList.remove("inactive"));
        document.querySelectorAll(".week-1").forEach(cell => cell.classList.remove("d-none"));
        document.querySelectorAll(".week-2").forEach(cell => cell.classList.add("d-none"));
    }
}

function populateInputs(charList) {
    const numCharsByType = {
        warrior: 0, mage: 0, archer: 0,
        thief: 0, pirate: 0, xenon: 0,
    }

    charList.forEach((char, index) => {
        const parentElem = document.querySelector(`.${char.classType}-list`);

        numCharsByType[char.classType]++;

        // Increase number of input fields if more than the default 2 of any class type was added
        if(numCharsByType[char.classType] > 2) {
            parentElem.querySelector(".add-character-btn").click();
        }

        // Populate input field
        parentElem.querySelector(`#${char.classType}-class-input-${numCharsByType[char.classType]}`).value = char.name;
        parentElem.querySelector(`#${char.classType}-level-input-${numCharsByType[char.classType]}`).value = char.level;
    })
}

function generateCharList() {
    const classTypeList = ["warrior", "mage", "archer", "thief", "pirate", "xenon"];
    const allChars = [];

    for(let classType of classTypeList) {
        let allInputs = document.getElementsByName(`${classType}Inputs`);
        let allLevels = document.getElementsByName(`${classType}Levels`);

        // Only retrieve non-empty inputs for character name
        allInputs = Array.from(allInputs).filter(input => input.value !== "");
        allLevels = Array.from(allLevels);

        // If user forgot to input character level, assign character as level 0
        if(allInputs.length > 0) {
            allInputs.forEach((input, index) => {
                let levelInput = allLevels[index].value;

                if(levelInput !== "" && parseInt(levelInput) >= 101) {
                    allChars.push({ classType: classType, name: input.value, level: parseInt(levelInput)});
                }
            })
        }
    }

    // Sort in descending order of levels
    allChars.sort((a, b) => b.level - a.level);

    return allChars;
}

function generatePlanner(charList) {
    const numMissionsDaily = document.querySelectorAll(".planned-characters.day-1").length;
    let [version, savedData] = getGeneralData();

    // Erase all displayed data (if any)
    document.querySelectorAll(".recommended-char").forEach(elem => elem.textContent = "");
    document.querySelectorAll(".icon-class").forEach(elem => elem.classList.remove("active"));
    document.querySelectorAll(".icon-level-bonus, .icon-over-200, .icon-over-220, .icon-over-250").forEach(elem => {
        elem.classList.remove("active");
        elem.classList.add("d-none");
    })

    // Plan who does what for each day of the event
    for(let i = 1; i <= 14; i++) {
        let tempList = charList.slice();
        let numMissionsCompletable = charList.length;
        let skipped = [];

        // If there are sufficient characters to fulfill all missions daily, fill the most difficult mission (the final one) first
        // First assign by [level 200 and job match], otherwise try assigning by [level 200]
        // If still unable to assign, skip this assignment (no eligible characters)
        if(charList.length >= numMissionsDaily) {
            numMissionsCompletable = numMissionsDaily;

            const elem = document.querySelector(`.day-${i}.mission-${numMissionsDaily}`);
            [tempList, isSkipped] = assignMatchingChar(version, tempList, elem, "levelJob", true);

            if(isSkipped) {
                [tempList, isSkipped] = assignMatchingChar(version, tempList, elem, "level", true);

                if(!isSkipped) {
                    numMissionsCompletable -= 1;
                }
            } else {
                numMissionsCompletable -= 1;
            }
        }

        // Now begin assignment of remaining missions
        // Assign characters in a backwards order to prioritize using strong characters to complete the more time-consuming missions
        for(let missionCount = numMissionsCompletable; missionCount > 0; missionCount--) { 
            if(tempList.length > 0) {
                const elem = document.querySelector(`.day-${i}.mission-${missionCount}`);
                [tempList, isSkipped] = assignMatchingChar(version, tempList, elem, "levelJob");

                if(isSkipped) {
                    [tempList, isSkipped] = assignMatchingChar(version, tempList, elem, "level");

                    if(isSkipped) {
                        [tempList, isSkipped] = assignMatchingChar(version, tempList, elem, "job");

                        if(isSkipped) {
                            skipped.push(missionCount);
                        }
                    }
                }
            }
        }

        // In the above attempts, assignment has already exhausted any possible bonuses
        // For the skipped missions, now assign all remaining characters in a random order
        skipped.forEach(missionNum => {
            if(tempList.length > 0) {
                const elem = document.querySelector(`.day-${i}.mission-${missionNum}`);
                [tempList, isSkipped] = assignMatchingChar(version, tempList, elem, "any");
            }
        })
    }
}

// Assign a matching character or skip assignment if matching is not possible
function assignMatchingChar(version, tempList, elem, assignmentType) {
    let isSkipped = false;
    let matchingCharIndex = parseInt(getMatchingCharIndex(tempList, elem, assignmentType));

    if(matchingCharIndex >= 0) {
        const matchingChar = tempList.splice(matchingCharIndex, 1);
        displayCharacter(version, elem, matchingChar[0]);
    } else {
        isSkipped = true;
    }
    
    return [tempList, isSkipped];
}

// Search for a matching character index given an assignment type
// The priority for retrieving a matching character is as follows:
// [Level and class match] >> [Level match] >> [Class match] >> [First element in array]
// Since array has been sorted by highest level first, it is already optimized to retrieve the maximum bonus for level of character used (applicable for v4)
function getMatchingCharIndex(tempList, elem, assignmentType) {
    let requiredClass = elem.dataset.class;

    // As Xenon can cover both thief and pirate classes, add the class as "required" for easier searching
    if(requiredClass === "thief" || requiredClass === "pirate") {
        requiredClass += ", xenon";
    }

    let matchingCharIndex = tempList.findIndex(char => {
        switch(assignmentType) {
            // Assign by level + job
            case "levelJob":
                return requiredClass.includes(char.classType) && char.level >= 200;
            // Assign by level
            case "level":
                return char.level >= 200;
            // Assign by job
            case "job":
                return requiredClass.includes(char.classType);
            // Assign by any
            case "any":
                return "0";
            default:
                return 0;
        }
    });

    return matchingCharIndex;
}

// Assigns character name to the respective table cell
// Also activates display of job matching and level matching bonuses (if applicable)
function displayCharacter(version, elem, matchingChar) {
    elem.querySelector(".recommended-char").textContent = matchingChar.name;

    // Highlight icon if class matches
    // Also run a check for xenon due to specialized icon
    if(matchingChar.classType === elem.dataset.class) {
        elem.querySelector(`.icon-${matchingChar.classType}`).classList.add("active");
    }

    if(matchingChar.classType === "xenon") {
        if(elem.dataset.class === "thief" || elem.dataset.class === "pirate") {
            elem.querySelector(`.icon-${elem.dataset.class}`).classList.add("active");
        }
    }

    // Level bonus differs based on version
    // For version 2 and 3, level bonus is given on level 200+ characters
    // For version 4, level bonus is tiered with varying bonus at level 200+, 220+ and 250+
    if(version === "v1" || version === "v2" || version === "v3") {
        if(matchingChar.level >= 200) {
            elem.querySelector(".icon-level-bonus").classList.add("active");
            elem.querySelector(".icon-level-bonus").classList.remove("d-none");
        }
    }

    if(version === "v4") {
        if(matchingChar.level >= 250) {
            elem.querySelector(".icon-over-250").classList.add("active");
            elem.querySelector(".icon-over-250").classList.remove("d-none");
        } else if(matchingChar.level >= 220) {
            elem.querySelector(".icon-over-220").classList.add("active");
            elem.querySelector(".icon-over-220").classList.remove("d-none");
        } else if(matchingChar.level >= 200) {
            elem.querySelector(".icon-over-200").classList.add("active");
            elem.querySelector(".icon-over-200").classList.remove("d-none");
        }
    }
}

function saveData(charList, boosters) {
    let [version, savedData] = getGeneralData();

    if(savedData === null) {
        savedData = { };
    }

    savedData[version] = {
        startDate: document.getElementById("select-date").value,
        charList: charList,
        boosters: boosters || [],
    }

    localStorage.setItem("tacticalRelay", JSON.stringify(savedData));
}

function calculateIntermediateScore() {
    for(let i = 1; i <= 14; i++) {
        let missionScore = 0;
        let jobScore = 0;
        let levelScore = 0;

        Array.from(document.querySelectorAll(`.planned-characters.day-${i}`)).map(elem => {
            if(elem.querySelector(".recommended-char").textContent !== "") {
                missionScore += 50;
            }

            if(elem.querySelector(".icon-class.active") !== null) {
                jobScore += 10;
            }

            if(elem.querySelector(".icon-level-bonus.active") !== null || elem.querySelector(".icon-over-200.active") !== null) {
                levelScore += 20;
            }

            if(elem.querySelector(".icon-over-220.active") !== null) {
                levelScore += 30;
            }

            if(elem.querySelector(".icon-over-250.active") !== null) {
                levelScore += 50;
            }
        })

        document.querySelector(`.day-${i}.mission-score`).textContent = missionScore || "-";
        document.querySelector(`.day-${i}.job-score`).textContent = jobScore || "-";
        document.querySelector(`.day-${i}.level-score`).textContent = levelScore || "-";
        document.querySelector(`.day-${i}.intermediate-score`).textContent = missionScore + jobScore + levelScore || "-";
    }
}

// Only applicable to v3 and above
// If there is saved booster data, display the days to be boosted
// If there is no saved data on boosters, find the first three highest daily scores and assign booster logos, then save the data
function suggestBoosters(version, savedBoosterData = null) {
    if(version === "v3" || version === "v4") {
        for(let elem of document.querySelectorAll(".booster")) {
            elem.querySelector(".relay-booster").classList.add("d-none");
            elem.querySelector(".relay-booster").classList.remove("active");
        }

        if(savedBoosterData) {
            for(let dayNum of savedBoosterData) {
                document.querySelector(`.booster.day-${dayNum}`).querySelector(".relay-booster").classList.remove("d-none");
                document.querySelector(`.booster.day-${dayNum}`).querySelector(".relay-booster").classList.add("active");
            }

            return null;
        } else {
            const allScores = [];
            Array.from(document.querySelectorAll(".intermediate-score")).forEach((elem, index) => {
                allScores.push({ score: parseInt(elem.textContent), dayNum: index+1 });
            })
            allScores.sort((a, b) => b.score - a.score);
            
            for(let i = 0; i <= 2; i++) {
                document.querySelector(`.booster.day-${allScores[i].dayNum}`).querySelector(".relay-booster").classList.remove("d-none");
                document.querySelector(`.booster.day-${allScores[i].dayNum}`).querySelector(".relay-booster").classList.add("active");
            }

            return [allScores[0].dayNum, allScores[1].dayNum, allScores[2].dayNum];
        }
    }
}

function displayFinalScore() {
    let grandTotal = 0;

    for(let i = 1; i <= 14; i++) {
        let totalScore = parseInt(document.querySelector(`.intermediate-score.day-${i}`).textContent) || 0;
        let boosterElem = document.querySelector(`.booster.day-${i}`);

        if(boosterElem !== null && boosterElem.querySelector(".relay-booster.active") !== null) {
            totalScore *= 2;
        }

        grandTotal += totalScore;
        document.querySelector(`.total-score.day-${i}`).textContent = totalScore.toLocaleString("en-SG");
    }

    document.querySelector(".grand-total-score").textContent = grandTotal.toLocaleString("en-SG");
}