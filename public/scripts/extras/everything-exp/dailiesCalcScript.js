function loadDailiesCalcListeners() {
    toggleDailiesBtnListener();
    dailiesDateInputListener();
    dailiesCalcCurrLevelInputListener();
    dailiesCalcCurrExpPercentInputListener();
    dailiesCalcCurrExpRawInputListener();
    dailiesCalcNewExpBtnListener();
}

function toggleDailiesBtnListener() {
    let allDailiesElems = document.querySelectorAll(".calc-daily-quest");

    allDailiesElems.forEach(elem => {
        elem.addEventListener("click", () => {
            if(elem.classList.contains("active")) {
                elem.classList.remove("active");
                elem.querySelector(".selected-daily").classList.add("d-none");
            } else {   
                elem.classList.add("active");
                elem.querySelector(".selected-daily").classList.remove("d-none");
            }
        })
    })
}

/****************
 * 
 * Dailies Calculator input field change listener and validation
 * 
 * **************/
function dailiesDateInputListener() {
    let elemIds = {
        parentContainerId: "calc-exp-contents",
        startDateId: "dailies-start-date",
        endDateId: "dailies-end-date",
        calcBtnId: "btn-calc-dailies-exp-result",
        dateErrorMsgId: "calc-dailies-date-input-error",
    };
    validateDateInput(elemIds);
}

function dailiesCalcCurrLevelInputListener() {
    let elemIds = {
        parentContainerId: "calc-exp-contents",
        charLevelInputId: "start-calc-dailies-char-level",
        currExpPercentInputId: "start-calc-dailies-char-exp-percent",
        currExpRawInputId: "start-calc-dailies-char-exp-raw",
        calcBtnId: "btn-calc-dailies-exp-result",
    };
    validateCurrLevelInput(elemIds);
}

function dailiesCalcCurrExpPercentInputListener() {
    let elemIds = {
        parentContainerId: "calc-exp-contents",
        charLevelInputId: "start-calc-dailies-char-level",
        currExpPercentInputId: "start-calc-dailies-char-exp-percent",
        currExpRawInputId: "start-calc-dailies-char-exp-raw",
        calcBtnId: "btn-calc-dailies-exp-result",
        currExpPercentErrorMsgId: "calc-dailies-exp-percent-input-error",
    };
    validateCurrExpPercentInput(elemIds);
}

function dailiesCalcCurrExpRawInputListener() {
    let elemIds = {
        parentContainerId: "calc-exp-contents",
        charLevelInputId: "start-calc-dailies-char-level",
        currExpPercentInputId: "start-calc-dailies-char-exp-percent",
        currExpRawInputId: "start-calc-dailies-char-exp-raw",
        calcBtnId: "btn-calc-dailies-exp-result",
        currExpRawErrorMsgId: "calc-dailies-exp-raw-input-error",
    };
    validateCurrExpRawInput(elemIds);
}

/****************
 * 
 * Dailies Calculator execute calculation
 * 
 * **************/
function dailiesCalcNewExpBtnListener() {
    let calcExpBtn = document.getElementById("btn-calc-dailies-exp-result");

    calcExpBtn.addEventListener("click", () => {
        let currLevel = parseInt(document.getElementById("start-calc-dailies-char-level").value);
        let currExp = parseInt(document.getElementById("start-calc-dailies-char-exp-raw").value);

        let startDate = Date.parse(new Date(document.getElementById("dailies-start-date").value));
        let endDate = Date.parse(new Date(document.getElementById("dailies-end-date").value));
        let perDayExp = compilePerDayExp();

        [currLevel, currExp] = calcDailiesNewExp(currLevel, currExp, startDate, endDate, perDayExp);

        document.getElementById("end-calc-dailies-char-level").value = currLevel;
        document.getElementById("end-calc-dailies-char-exp-percent").value = `${(currExp / getExpTNL(currLevel) * 100).toFixed(3)} %`;
        document.getElementById("end-calc-dailies-char-exp-raw").value = `${currExp.toLocaleString("en-SG")} EXP`;
    })
}

function compilePerDayExp() {
    let minigameSelectElem = document.getElementById("exp-minigame-select");

    let perDayExp = {
        dailyQuest: 0,
        monsterHunting: 0,
        erdaSpectrum: getNumRuns("num-erda-spectrum") * document.getElementById("erda-spectrum-select").value,
        hungryMuto: getNumRuns("num-muto") * document.getElementById("muto-select").value,
        monsterPark: document.getElementById("monster-park-select").value, // due to EXP variations from Sunday monster park, numRuns will be factored further down instead
        eventMinigameId: minigameSelectElem.value,
        eventMinigameMult: parseFloat(minigameSelectElem.options[minigameSelectElem.selectedIndex].dataset.multiplier),
    };

    // Daily Quests
    let allSelectedDailyQuests = document.querySelectorAll(".calc-daily-quest.active");

    allSelectedDailyQuests.forEach(daily => {
        perDayExp.dailyQuest += parseInt(daily.dataset.rawExp);
    })

    // Monster Hunting
    for(let i = 1; i <= 3; i++) {
        let qtyMonsters = parseInt(document.getElementById(`qty-monster-${i}`).value) || 0;
        let perMonsterExp = parseInt(document.getElementById(`per-monster-exp-${i}`).value) || 0;

        perDayExp.monsterHunting += qtyMonsters * perMonsterExp;
    }

    return perDayExp;
}

function getNumRuns(elemId) {
    let inputElem = document.getElementById(elemId);
    let inputValue = parseInt(inputElem.value);

    if(isNaN(inputValue) || inputValue < 0) {
        inputElem.value = 0;
        inputValue = 0;
    }

    return inputValue;
}

function calcDailiesNewExp(currLevel, currExp, startDate, endDate, perDayExp) {
    let newLevel = currLevel;
    let newExp = currExp;
    let normalExp = perDayExp.dailyQuest + perDayExp.erdaSpectrum + perDayExp.hungryMuto + getNumRuns("num-monster-park") * perDayExp.monsterPark;
    let sundayExp = perDayExp.dailyQuest + perDayExp.erdaSpectrum + perDayExp.hungryMuto + getNumRuns("num-monster-park") * Math.round(perDayExp.monsterPark * 1.5);
    let expFromGrinding = perDayExp.monsterHunting;
    let expMinigameId = perDayExp.eventMinigameId;
    let numExpMinigamePerDay = getNumRuns("num-exp-minigame");
    let numMpExPerDay = getNumRuns("num-monster-park-extreme");
    let burningType = document.getElementById("burning-select").value;

    for(let i = startDate; i <= endDate; i += 1000*60*60*24) {
        let expTNL = getExpTNL(newLevel);
        let expFromDaily;

        // If day is a Sunday (represented as 0 on getDay() function), use sunday's EXP value
        if((new Date(i)).getDay() === 0) {
            expFromDaily = sundayExp;
        } else {
            expFromDaily = normalExp;
        }

        // After regular dailies, does level increase? If so, adjust value accordingly
        // Then, after grinding, does level increase? If so, adjust value accordingly
        [newLevel, newExp, isLevelUp] = adjustLevelAndExp(newLevel, newExp, expFromDaily, expTNL, burningType);
        [newLevel, newExp, isLevelUp] = adjustLevelAndExp(newLevel, newExp, expFromGrinding, expTNL, burningType);

        // Now add EXP obtained from event minigames
        if(expMinigameId !== "" && numExpMinigamePerDay > 0) {
            let expFromMinigames;

            for(let j = 0; j < numExpMinigamePerDay; j++) {
                if(expMinigameId === "live") {
                    expFromMinigames = EVENT_EXP_TABLE[newLevel-200];
                } else {
                    expFromMinigames = DESTINY_EVENT_EXP_TABLE[newLevel-200] || DESTINY_EVENT_EXP_TABLE[DESTINY_EVENT_EXP_TABLE.length-1];
                    expFromMinigames = Math.floor(expFromMinigames * perDayExp.eventMinigameMult / 100000) * 100000;
                }

                // As event EXP is added last (to factor for best EXP rates possible), a second calculation is needed to check for potential level up
                // After event minigames, does level increase? If so, adjust value accordingly
                [newLevel, newExp, isLevelUp] = adjustLevelAndExp(newLevel, newExp, expFromMinigames, expTNL, burningType);

                if(isLevelUp) {
                    expTNL = getExpTNL(newLevel);
                }
            }            
        }

        // If character is level 260+, now add EXP obtained from Monster Park Extreme
        if(newLevel >= 260 && numMpExPerDay > 0) {
            let expFromMpEx; 

            if((new Date(i)).getDay() === 0) {
                expFromMpEx = newLevel * MONSTER_PARK_EXTREME_TABLE[newLevel - 260] * 100000000 * 1.5;
            } else {
                expFromMpEx = newLevel * MONSTER_PARK_EXTREME_TABLE[newLevel - 260] * 100000000;
            }

            [newLevel, newExp, isLevelUp] = adjustLevelAndExp(newLevel, newExp, expFromMpEx, expTNL, burningType);
        }
    }

    return [newLevel, newExp];
}

function adjustLevelAndExp(newLevel, newExp, expValue, expTNL, burningType) {
    if(newExp + expValue >= expTNL) {
        if(burningType === "") {
            newLevel++;    
        }

        if(burningType === "hyper") {
            if(newLevel+3 <= 250) {
                newLevel += 3;
            } else {
                newLevel = 250;
            }
        }
        
        newExp = newExp + expValue - expTNL;
        isLevelUp = true;
    } else {
        newExp += expValue;
        isLevelUp = false;
    }

    return [newLevel, newExp, isLevelUp]
}