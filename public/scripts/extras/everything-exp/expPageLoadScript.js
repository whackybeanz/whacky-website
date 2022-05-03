document.addEventListener("DOMContentLoaded", function(event) {
    loadEXPTableHistory();
    loadCurrentEXPTable();

    // Dailies Calculator
    loadDailiesCalcListeners();

    // Dailies
    addDailyQuestListeners();
    addMonsterParkListeners();
    addResetMonsterParkListener();
    changeLevelListener();

    // Growth Potions
    loadGrowthPotionsEXPTable();
    loadPotionListeners();

    // EXP Multipliers
    addEXPStackBtnListener();
    addEXPStackSelectListener();
    addEXPStackInputListener();

    // Monster EXP
    addRefreshMonsterListListener();
    updateNumKillsInputListener();

    // AFK Contents
    loadDojoEXPTable();

    // Load data
    loadSavedData();
    changeLevelListener();
})

/***********************
 * 
 * Load any available saved data from LocalStorage
 * 
 * If no data has been saved, use website defaults (level 225)
 * - Calculate potion EXP values based on default level
 * - Update available daily quests (and % EXP gain from each daily)
 * - Update available monster park dungeons
 * - Calculate and display expected EXP value (and %) from event minigames
 * 
 * If data is available, do the above 3 and also the following:
 * - Activate all selected daily quests, and calculate and display total value (and %)
 * - Display selected monster park (if any)
 * - Activate all selected EXP multipliers
 * 
 * ***********************/
function loadSavedData() {
    let savedData = JSON.parse(localStorage.getItem("everythingEXP"));

    if(savedData !== null) {
        loadEXPContentsData(savedData.expContents, savedData.charLevel);

        if(savedData.expMultipliers !== undefined) {
            loadSavedEXPMultipliers(savedData.expMultipliers);
        }
    }

    updatePerPotionEXPPercent();
    updateAvailableDailyQuests();
    updateAvailableMonsterParkDungeons();
    //calcEventEXPPercent();
}

function loadEXPContentsData(savedData, charLevel) {
    document.getElementById("char-level").value = charLevel;

    if(savedData.dailies.length !== 0) {
        savedData.dailies.forEach(daily => {
            document.getElementById(daily).classList.add("selected");
            document.getElementById(daily).querySelector(".selected-mark").classList.remove("d-none");
        })
        calcTotalDailiesEXP();
    }

    if(savedData.monsterPark !== "") {
        document.getElementById(savedData.monsterPark).classList.add("selected");
        calcMonsterParkPercent();
    }
}

function loadSavedEXPMultipliers(savedData) {
    savedData.selectedEXPBuffs.forEach(expBuffId => {
        document.getElementById(expBuffId).classList.add("active");
    })

    savedData.expBuffSelectValues.forEach(select => {
        document.getElementById(select.id).value = select.value;
    })

    savedData.expBuffInputValues.forEach(input => {
        document.getElementById(input.id).value = input.value;
    })

    for(let i = 1; i <= 5; i++) {
        updateMultiplier(i);
    }

    getTotalMultiplier();
}

/***********************
 * 
 * When user clicks out of level input box, first validate input
 * 
 * If input is valid, do the following:
 * - Retrieve new potion EXP based on this new level
 * 
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
                charLevelInput.value = 225;
            } else {
                charLevelInput.value = JSON.parse(everythingEXP).charLevel;
            }
        } else {
            updatePerPotionEXPPercent();
            updateAvailableDailyQuests();
            updateAvailableMonsterParkDungeons();
            calcTotalDailiesEXP();
            calcMonsterParkPercent();
            saveEXPContentData();
        }
    })
}