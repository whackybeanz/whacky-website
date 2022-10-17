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
        event.preventDefault();
        let charList = generateCharList();
        generatePlanner(charList);
        saveData(charList);
        calculateIntermediateScore();
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
                allChars.push({ classType: classType, name: input.value, level: parseInt(allLevels[index].value) || 0 });
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

    // Plan who does what for each day of the event
    for(let i = 1; i <= 14; i++) {
        let tempList = charList.slice();

        if(charList.length >= numMissionsDaily) {
            // If there are sufficient characters to fulfill all missions daily, fill the most difficult mission (the final one) first
            // Assign characters in a backwards order to prioritize using strong characters to complete the more time-consuming missions
            const elem = document.querySelector(`.day-${i}.mission-${numMissionsDaily}`);
            tempList = assignMatchingChar(version, tempList, elem, true);

            for(let missionCount = numMissionsDaily-1; missionCount > 0; missionCount--) { 
                if(tempList.length > 0) {
                    const elem = document.querySelector(`.day-${i}.mission-${missionCount}`);
                    tempList = assignMatchingChar(version, tempList, elem);
                }
            }
        } else {
            // If there are insufficient characters to fulfill all missions, assign characters beginning with mission 1
            for(let missionCount = 1; missionCount < numMissionsDaily; missionCount++) { 
                if(tempList.length > 0) {
                    const elem = document.querySelector(`.day-${i}.mission-${missionCount}`);
                    tempList = assignMatchingChar(version, tempList, elem);
                }
            }
        }
    }
}

// Assign a matching character based on the required class for the day
// The priority for retrieving a matching character is as follows:
// [Level and class match] >> [Level match] >> [Class match] >> [First element in array]
// Since array has been sorted by highest level first, it is already optimized to retrieve the maximum bonus for level of character used
function assignMatchingChar(version, tempList, elem, isFinalMission = false) {
    let requiredClass = elem.dataset.class;

    // As Xenon can cover both thief and pirate classes, add the class as "required" for easier searching
    if(requiredClass === "thief" || requiredClass === "pirate") {
        requiredClass += ", xenon";
    }

    // Regardless of mission, first attempt to match job and level
    // If this is not possible, prioritize level
    let matchingCharIndex = tempList.findIndex(char => requiredClass.includes(char.classType) && char.level >= 200);

    if(matchingCharIndex === -1) {
        matchingCharIndex = tempList.findIndex(char => char.level >= 200);
    }
    
    // At this point, if matchingCharIndex still returns -1, then all input levels were below level 200
    if(isFinalMission) {
        // If it's a final mission, assignment can be skipped if matchingCharIndex is -1 (it is impossible to finish the last mission)
        // If there is a matching character, proceed to assign character to the mission
        // Extract the affected character from the tempList array using splice (so tempList will automatically get changed)
        if(matchingCharIndex !== -1) {
            const matchingChar = tempList.splice(matchingCharIndex, 1);
            displayCharacter(version, elem, matchingChar[0]);
        }    
    } else {
        // If it's a non-final mission, first try to match based on class type
        // If class type cannot be matched, all options are exhausted - take the first element left in the array for assignment
        matchingCharIndex = tempList.findIndex(char => requiredClass.includes(char.classType));

        if(matchingCharIndex === -1) {
            matchingCharIndex = 0;
        }

        // Extract the affected character from the tempList array using splice (so tempList will automatically get changed)
        const matchingChar = tempList.splice(matchingCharIndex, 1);
        displayCharacter(version, elem, matchingChar[0]);
    }

    return tempList;
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

function saveData(charList) {
    let [version, savedData] = getGeneralData();

    if(savedData === null) {
        savedData = { };
    }

    savedData[version] = {
        startDate: document.getElementById("select-date").value,
        charList: charList,
    }

    localStorage.setItem("tacticalRelay", JSON.stringify(savedData));
}

function calculateIntermediateScore() {
    let grandTotal = 0;

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