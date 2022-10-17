document.addEventListener("DOMContentLoaded", function(event) { 
    dateChangeListener();
    settingsListeners();
    loadSavedData();

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

function loadSavedData() {
    const [version, savedData] = getGeneralData();

    if(savedData !== null) {
        if(savedData[version] !== undefined) {
            const eventStartDate = savedData[version].startDate;

            document.getElementById("select-date").value = eventStartDate;
            updateTableDateDisplay(eventStartDate);

            if(savedData[version].charList !== undefined) {
                populateInputs(savedData[version].charList);
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