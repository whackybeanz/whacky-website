/***********************
 * 
 * Basic getters
 * 
 * *********************/
function getCharLevel() {
    return parseInt(document.getElementById("char-level").value);
}

function getExpTNL(charLevel) {
    return parseInt(document.getElementById(`${charLevel}-exp-tnl`).dataset.rawExpTnl);
}

/***********************
 * 
 * Loading of EXP Tables
 * 
 * *********************/
function loadEXPTableHistory() {
    EXP_TABLE_HISTORY.forEach(history => {
        document
                .getElementById(`exp-table-history`)
                .insertAdjacentHTML('beforeend', `<tr>
                    <th scope="row" class="align-middle text-center">${history.name}</th>
                    <td class="py-2 px-2">${history.details.join("<br/>")}</td>
                    <td class="align-middle text-center"><a class="text-info" href="${history.url}" target="_blank">Click me!</a></td>
                </tr>`);
    })
}

function loadCurrentEXPTable() {
    let prevEXP = -1;

    CURR_EXP_TABLE.forEach((levelRange, index) => {
        let html = `<div class="w-100 col-12 col-sm-6 col-xl-4 d-flex flex-column align-items-center mb-4"><h2 class="font-subsubheader font-weight-bold text-underline mb-2">${levelRange.name}</h2>

        <table class='font-table size-350 table table-sm table-bordered table-hover'>
            <thead>
                <tr>
                    <th scope="col" class="text-center">Level</th>
                    <th scope="col" class="text-center">EXP To Next Level</th>
                    <th scope="col" class="text-center">% increase</th>
                </tr>
            </thead>
            <tbody id='exp-table-${index}'>
            </tbody>
        </table></div>`;

        document.getElementById("curr-exp-tables").insertAdjacentHTML('beforeend', html);

        levelRange.values.forEach((rawEXP, arrayNum) => {
            document
                .getElementById(`exp-table-${index}`)
                .insertAdjacentHTML('beforeend', `<tr>
                    <th scope="row" class="text-center">${levelRange.startLevel+arrayNum} > ${levelRange.startLevel+arrayNum+1}</th>
                    <td class="text-center" id="${levelRange.startLevel+arrayNum}-exp-tnl" data-raw-exp-tnl="${rawEXP}">${rawEXP.toLocaleString('en-SG')}</td>
                    <td class="text-center">${prevEXP === -1 ? "-" : (rawEXP / prevEXP * 100 - 100).toFixed(1).replace(/[.,]0$/, "") + "%" }</td>
                </tr>`);

            prevEXP = rawEXP;
        })
    })
}

function loadEventEXPTable() {
    let startingLevel = 200;
    let expTNL = 0;

    EVENT_EXP_TABLE.forEach((expValue, index) => {
        expTNL = parseInt(document.getElementById(`${startingLevel + index}-exp-tnl`).dataset.rawExpTnl);

        document
                .getElementById(`event-exp-table`)
                .insertAdjacentHTML('beforeend', `<tr>
                    <th scope="row" class="text-center">${startingLevel + index} > ${startingLevel + index + 1}</th>
                    <td class="text-center align-middle">${expTNL.toLocaleString('en-SG')}</td>
                    <td class="text-center align-middle" id="${startingLevel + index}-event-exp" data-raw-exp="${expValue}">${expValue === -1 ? "???" : expValue.toLocaleString('en-SG')}</td>
                    <td class="text-center align-middle text-info font-weight-bold">${expValue === -1 ? "-" : (expValue / expTNL*100).toFixed(3) + "%"}</td>
                </tr>`);
    })
}

function loadDojoEXPTable() {
    let startingLevel = 105;
    let expTNL = 0;

    DOJO_EXP_TABLE.forEach((expValue, index) => {
        expTNL = parseInt(document.getElementById(`${startingLevel + index}-exp-tnl`).dataset.rawExpTnl);

        document
                .getElementById(`dojo-exp-table`)
                .insertAdjacentHTML('beforeend', `<tr>
                    <th scope="row" class="text-center align-middle">${startingLevel + index} > ${startingLevel + index + 1}</th>
                    <td class="text-center align-middle">${expTNL.toLocaleString('en-SG')}</td>
                    <td class="text-center align-middle">${expValue.toLocaleString('en-SG')} / tick<br/>${(expValue*12*60).toLocaleString('en-SG')} / hour</td>
                    <td class="text-center align-middle text-info font-weight-bold">${(expValue / expTNL*100).toFixed(3) + "%"} / tick<br/>${(expValue*12*60 / expTNL*100).toFixed(3) + "%"} / hour</td>
                </tr>`);
    })

    document
        .getElementById(`dojo-exp-table`)
        .insertAdjacentHTML('beforeend', `<tr>
            <th scope="row" class="text-center align-middle">220+</th>
            <td class="text-center align-middle" colspan="3">EXP per tick is same as 219 > 220. It's not worth AFK-ing for EXP beyond this point f3</td>
        </tr>`);
}

/***********************
 * 
 * Div, Button, Input Listeners
 * 
 * *********************/
// For all daily quests, add or remove selected state (a check mark) based on user interaction
// Then, calculate sum of total dailies EXP based on all selected dailies
function addDailyQuestListeners() {
    let allDailiesElems = document.querySelectorAll(".single-daily-quest");

    allDailiesElems.forEach(elem => {
        elem.addEventListener("click", () => {
            if(elem.classList.contains("active")) {
                if(elem.classList.contains("selected")) {
                    elem.classList.remove("selected");
                    elem.querySelector(".selected-mark").classList.add("d-none");
                } else {
                    elem.classList.add("selected");
                    elem.querySelector(".selected-mark").classList.remove("d-none");
                }
            }

            calcTotalDailiesEXP();
            saveEXPContentData();
        })
    })
}

// For all monster park dungeons, first check if selected dungeon is actually available (active)
// - If active, update selected state based on latest-clicked dungeon
// - Then, proceed to calculate % EXP gains from monster park
function addMonsterParkListeners() {
    let allMonsterParkElems = document.querySelectorAll(".single-mp-dungeon");

    allMonsterParkElems.forEach(elem => {
        elem.addEventListener("click", () => {
            if(elem.classList.contains("active")) {
                let currSelectedMonsterParkElem = document.querySelector(".single-mp-dungeon.selected");

                if(currSelectedMonsterParkElem !== null) {
                    currSelectedMonsterParkElem.classList.remove("selected");
                }

                elem.classList.add("selected");
                calcMonsterParkPercent();
                saveEXPContentData();
            }
        })
    })
}

// Disable table view for monster park dungeon when reset option is selected
function addResetMonsterParkListener() {
    let resetMPbtn = document.getElementById("btn-reset-monster-park");

    resetMPbtn.addEventListener("click", event => {
        document.querySelector(".single-mp-dungeon.selected").classList.remove("selected");
        document.getElementById("monster-park-default-display").classList.remove("d-none");
        document.getElementById("monster-park-selected-display").classList.add("d-none");
        document.getElementById("selected-mp-dungeon").classList.remove('d-flex');
        document.getElementById("selected-mp-dungeon").classList.add('d-none');
        saveEXPContentData();
    })
}

/***********************
 * 
 * When user clicks out of level input box, first validate input
 * 
 * If input is valid, do the following:
 * - Update available daily quests (and % EXP gain from each daily) based on new level value
 * - Update what monster park dungeons are still available for selection based on new level value
 * 
 * - Calculate and display daily quest total EXP value based on still-available-and-selected dailies
 * - Calculate and display monster park EXP value if dungeon is still active and selected
 * 
 * ***********************/
function changeLevelListener() {
    let charLevelInput = document.getElementById("char-level");

    charLevelInput.addEventListener("focusout", event => {
        let charLevel = parseInt(charLevelInput.value)

        if(isNaN(charLevel) || charLevel <= 0 || charLevel >= 300) {
            let everythingEXP = localStorage.getItem("everythingEXP");

            if(everythingEXP === null) {
                charLevelInput.value = 250;
            } else {
                charLevelInput.value = JSON.parse(everythingEXP).charLevel;
            }
        } else {
            updateAvailableDailyQuests();
            updateAvailableMonsterParkDungeons();
            calcTotalDailiesEXP();
            calcMonsterParkPercent();
            calcEventEXPPercent();
            saveEXPContentData();
        }
    })
}

/***********************
 * 
 * Determine based on the current user level input if a particular daily is still available at that level
 * For each daily in the entire list:
 * - If not available, remove active state. If it was previously selected, also remove selected state.
 * - If newly (or still) available, add active state. Also calculate the raw/% EXP of this active daily.
 * 
 * ***********************/
function updateAvailableDailyQuests() {
    let charLevel = getCharLevel();
    let expTNL = getExpTNL(charLevel);
    let allDailiesElems = document.querySelectorAll(".single-daily-quest");

    allDailiesElems.forEach(dailyElem => {
        let dailyQuestDetails = dailyElem.querySelector(".daily-quest-details");
        let dailyQuestRawEXP = parseInt(dailyQuestDetails.dataset.rawExp);

        if(charLevel < parseInt(dailyQuestDetails.dataset.minLevel)) {
            dailyElem.classList.remove("active");
            dailyElem.classList.remove("selected");
            dailyElem.querySelector(".selected-mark").classList.add("d-none");
            dailyQuestDetails.querySelector(".percent-exp").textContent = "-";
        } else {
            dailyElem.classList.add("active");

            if(dailyQuestRawEXP !== 0) {
                let dailyQuestPercentEXP = (dailyQuestRawEXP / expTNL * 100).toFixed(3);
                dailyQuestDetails.querySelector(".percent-exp").textContent = dailyQuestPercentEXP + "%";
            }
        }
    })
}

/***********************
 * 
 * Determine based on the current user level input if a particular monster park dungeon is still available at that level
 * For each monster park dungeon in the entire list:
 * - If not available, remove active state. If it was previously selected, also remove selected state.
 * - If newly (or still) available, add active state.
 * 
 * ***********************/ 
function updateAvailableMonsterParkDungeons() {
    let charLevel = getCharLevel();
    let allMonsterParkElems = document.querySelectorAll(".single-mp-dungeon");

    allMonsterParkElems.forEach(monsterParkElem => {
        let mpDetails = monsterParkElem.querySelector(".mp-details");

        if(charLevel < parseInt(mpDetails.dataset.minLevel)) {
            monsterParkElem.classList.remove("active");
            monsterParkElem.classList.remove("selected");
        } else {
            monsterParkElem.classList.add("active");
        }
    })
}

// Calculate EXP from selected daily quests (must be both active and selected)
// Displays both raw value and % value
function calcTotalDailiesEXP() {
    let allActiveDailies = document.querySelectorAll(".single-daily-quest.active.selected");
    let charLevel = getCharLevel();
    let expTNL = getExpTNL(charLevel);
    let totalEXP = 0;

    allActiveDailies.forEach(elem => {
        totalEXP += parseInt(elem.querySelector(".daily-quest-details").dataset.rawExp);
    })
    
    document.getElementById("selected-dailies-total-raw-exp").textContent = (totalEXP).toLocaleString("en-SG") + " EXP";
    document.getElementById("selected-dailies-total-percent-exp").textContent = (totalEXP / expTNL * 100).toFixed(3) + "%";
}

// Check if any monster park dungeon is still currently selected
// If dungeon is still active and selected, update displayed EXP table for monster park dungeon values
// If not selected anymore, reset views related to monster park EXP table and prompt user to select dungeon
function calcMonsterParkPercent() {
    let selectedDungeon = document.querySelector(".single-mp-dungeon.selected");

    if(selectedDungeon !== null) {
        let charLevel = getCharLevel();
        let expTNL = getExpTNL(charLevel); 
        let mpDetails = selectedDungeon.querySelector(".mp-details");

        document.getElementById("monster-park-exp-table").innerHTML = "";

        for(let i = 1; i <= 7; i++) {
            let rawExp = mpDetails.dataset.rawExp;

            document
                .getElementById("monster-park-exp-table")
                .insertAdjacentHTML('beforeend', `<tr>
                    <th scope="row" class="text-center">${i}</th>
                    <td class="text-center">
                        ${(rawExp * i).toLocaleString('en-SG')} EXP / <span class="font-weight-bold text-info">${((rawExp * i) / expTNL * 100).toFixed(3)}%</span>
                    </td>
                    <td class="text-center">
                        ${(Math.round(rawExp * 1.5) * i).toLocaleString('en-SG')} EXP / <span class="font-weight-bold text-info">${((Math.round(rawExp * 1.5) * i) / expTNL * 100).toFixed(3)}%</span>
                    </td>
                    <td class="text-center">
                        ${(rawExp * 2 * i).toLocaleString('en-SG')} EXP / <span class="font-weight-bold text-info">${((rawExp * 2 * i) / expTNL * 100).toFixed(3)}%</span>
                    </td>
                </tr>`);
        }

        document.getElementById("monster-park-default-display").classList.add("d-none");
        document.getElementById("monster-park-selected-display").classList.remove("d-none");
        document.getElementById("selected-mp-dungeon-name").innerHTML = `<img src="${selectedDungeon.querySelector(".mp-dungeon-img").src}" class="mr-2"> Monster Park - ${mpDetails.dataset.name}`;
        document.getElementById("selected-mp-dungeon").classList.remove('d-none');
        document.getElementById("selected-mp-dungeon").classList.add('d-flex');
    } else {
        document.getElementById("monster-park-exp-table").innerHTML = "";
        document.getElementById("monster-park-default-display").classList.remove("d-none");
        document.getElementById("monster-park-selected-display").classList.add("d-none");
        document.getElementById("selected-mp-dungeon").classList.add('d-none');
        document.getElementById("selected-mp-dungeon").classList.remove('d-flex');
    }
}

// Calculate EXP obtained from event minigames and display total EXP (and %)
function calcEventEXPPercent() {
    let charLevel = getCharLevel();
    let expTNL = getExpTNL(charLevel);
    let eventExpPerRun = parseInt(document.getElementById(`${charLevel}-event-exp`).dataset.rawExp);

    if(eventExpPerRun !== -1) {
        let eventTotalPercentExp = (eventExpPerRun * 2 / expTNL * 100).toFixed(3);
        document.getElementById("event-per-day-raw-exp").textContent = (eventExpPerRun * 2).toLocaleString('en-SG') + " EXP";
        document.getElementById("event-per-day-percent-exp").textContent = eventTotalPercentExp + "%";
    } else {
        document.getElementById("event-per-day-raw-exp").textContent = "-";
        document.getElementById("event-per-day-percent-exp").textContent = "-";
    }
}

function saveEXPContentData() {
    let savedData = JSON.parse(localStorage.getItem("everythingEXP"));

    let charLevel = getCharLevel();
    let selectedDailies = document.querySelectorAll(".single-daily-quest.active.selected");
    let selectedMonsterPark = document.querySelector(".single-mp-dungeon.active.selected");

    let toSave = {
        charLevel: charLevel,
        dailies: [],
        monsterPark: selectedMonsterPark !== null ? selectedMonsterPark.id : "",
    }

    selectedDailies.forEach(daily => {
        toSave.dailies.push(daily.id);
    })

    if(savedData === null) {
        savedData = { expContents: toSave };
    } else {
        savedData.expContents = toSave;
    }

    localStorage.setItem("everythingEXP", JSON.stringify(savedData));
}