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
                        ${(rawExp * i).toLocaleString('en-SG')} EXP / <span class="font-weight-bold text-custom">${((rawExp * i) / expTNL * 100).toFixed(3)}%</span>
                    </td>
                    <td class="text-center">
                        ${(Math.round(rawExp * 1.5) * i).toLocaleString('en-SG')} EXP / <span class="font-weight-bold text-custom">${((Math.round(rawExp * 1.5) * i) / expTNL * 100).toFixed(3)}%</span>
                    </td>
                    <td class="text-center">
                        ${(rawExp * 2 * i).toLocaleString('en-SG')} EXP / <span class="font-weight-bold text-custom">${((rawExp * 2 * i) / expTNL * 100).toFixed(3)}%</span>
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

function loadMonsterParkExtremeEXPTable() {
    let startingLevel = 260;
    let expTNL = 0;
    let tableElem = document.getElementById("monster-park-extreme-exp-table");

    MONSTER_PARK_EXTREME_TABLE.forEach((multiplier, index) => {
        let expTNL = getExpTNL(startingLevel + index);
        let totalEXP = (startingLevel + index) * multiplier * 100000000;

        tableElem.insertAdjacentHTML('beforeend', `<tr>
                    <th scope="row" class="text-center align-middle">${startingLevel + index} > ${startingLevel + index + 1}</th>
                    <td class="text-center align-middle">${totalEXP.toLocaleString('en-SG')} EXP / <span class="text-custom font-weight-bold">${(totalEXP / expTNL * 100).toFixed(3)}%</span></td>
                    <td class="text-center align-middle">${(totalEXP * 1.5).toLocaleString('en-SG')} EXP / <span class="text-custom font-weight-bold">${(totalEXP * 1.5 / expTNL * 100).toFixed(3)}%</td>
                    <td class="text-center align-middle">${(totalEXP * 2).toLocaleString('en-SG')} EXP / <span class="text-custom font-weight-bold">${(totalEXP * 2/ expTNL * 100).toFixed(3)}%</td>
                </tr>`);
    })
}

function saveEXPContentData() {
    let savedData = JSON.parse(localStorage.getItem("everythingEXP"));

    let charLevel = getCharLevel();
    let selectedDailies = document.querySelectorAll(".single-daily-quest.active.selected");
    let selectedMonsterPark = document.querySelector(".single-mp-dungeon.active.selected");

    let toSave = {
        dailies: [],
        monsterPark: selectedMonsterPark !== null ? selectedMonsterPark.id : "",
    }

    selectedDailies.forEach(daily => {
        toSave.dailies.push(daily.id);
    })

    if(savedData === null) {
        savedData = { charLevel: charLevel, expContents: toSave };
    } else {
        savedData.charLevel = charLevel;
        savedData.expContents = toSave;
    }

    localStorage.setItem("everythingEXP", JSON.stringify(savedData));
}