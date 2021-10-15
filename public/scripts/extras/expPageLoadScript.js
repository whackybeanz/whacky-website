document.addEventListener("DOMContentLoaded", function(event) {
    // EXP Contents
    loadEXPTableHistory();
    loadCurrentEXPTable();
    loadEventEXPTable();
    loadDojoEXPTable();

    addDailyQuestListeners();
    addMonsterParkListeners();
    addResetMonsterParkListener();

    changeLevelListener();

    // EXP Multipliers
    addEXPStackBtnListener();
    addEXPStackSelectListener();
    addEXPStackInputListener();

    // Load data
    loadSavedData();
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
        loadEXPContentsData(savedData.expContents);
        loadSavedEXPMultipliers(savedData.expMultipliers);
    }

    updateAvailableDailyQuests();
    updateAvailableMonsterParkDungeons();
    calcEventEXPPercent();
}

function loadEXPContentsData(savedData) {
    document.getElementById("char-level").value = savedData.charLevel;

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