function loadDailiesCalcListeners() {
    toggleDailiesBtnListener();
    dailiesDateInputListener();
    dailiesCalcCurrLevelInputListener();
    dailiesCalcCurrExpPercentInputListener();
    dailiesCalcCurrExpRawInputListener();
    expMinigameSelectListener();
    monsterExpValidate();
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
        currExpRawErrorMsgId: "calc-dailies-exp-raw-input-error",
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
        currExpRawErrorMsgId: "calc-dailies-exp-raw-input-error",
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
        errorMaxExpTnlId: "calc-dailies-err-max-exp-tnl",
    };
    validateCurrExpRawInput(elemIds);
}

function expMinigameSelectListener() {
    let expMinigameSelect = document.getElementById("exp-minigame-select");

    expMinigameSelect.addEventListener("change", () => {
        let numTix = expMinigameSelect.options[expMinigameSelect.selectedIndex].dataset.numTix;
        let numGames = expMinigameSelect.options[expMinigameSelect.selectedIndex].dataset.numMinigames;

        if(numTix) {
            document.getElementById("num-exp-minigame").value = "";
            document.getElementById("num-exp-tickets").value = parseInt(numTix);
        }

        if(numGames) {
            document.getElementById("num-exp-minigame").value = parseInt(numGames);
            document.getElementById("num-exp-tickets").value = "";
        }
    })
}

function monsterExpValidate() {
    let monsterExpInputs = document.querySelectorAll(".per-monster-exp");

    monsterExpInputs.forEach(input => {
        input.addEventListener("change", () => {
            let numStr = input.value.match(/\d/g);

            if(numStr) {
                input.value = parseInt(numStr.join("")).toLocaleString("en-SG");
            } else {
                input.value = "";
            }
        })
    })
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
        let currExp = parseInt(document.getElementById("start-calc-dailies-char-exp-raw").value.match(/\d/g).join(""));
        document.getElementById("calc-start-level").textContent = currLevel;
        document.getElementById("calc-start-percent").textContent = `${(currExp / getExpTNL(currLevel) * 100).toFixed(3)}%`;
        document.getElementById("calc-start-raw").textContent = `${currExp.toLocaleString("en-SG")} EXP`;

        let startDate = new Date(document.getElementById("dailies-start-date").value);
        let endDate = new Date(document.getElementById("dailies-end-date").value)
        let startDateVal = Date.parse(startDate);
        let endDateVal = Date.parse(endDate);
        document.getElementById("calc-start-date").textContent = startDate.toLocaleDateString('en-SG', { day: "2-digit", month: "short", year: "numeric" });
        document.getElementById("calc-end-date").textContent = endDate.toLocaleDateString('en-SG', { day: "2-digit", month: "short", year: "numeric" });

        let perDayExp = compilePerDayExp();
        let perWeekExp = compilePerWeekExp();

        [finalLevel, finalExp] = calcDailiesNewExp(currLevel, currExp, startDateVal, endDateVal, perDayExp, perWeekExp);

        document.getElementById("calc-end-level").textContent = finalLevel;
        document.getElementById("calc-end-percent").textContent = `${(finalExp / getExpTNL(finalLevel) * 100).toFixed(3)}%`;
        document.getElementById("calc-end-raw").textContent = `${finalExp.toLocaleString("en-SG")} EXP`;

        if(finalLevel !== currLevel || finalExp !== currExp) {
            displaySummary(perDayExp, perWeekExp);
        }
    })
}

function compilePerDayExp() {
    let minigameSelectElem = document.getElementById("exp-minigame-select");
    let mpSelectElem = document.getElementById("monster-park-select");

    let perDayExp = {
        allSelectedDailyQuests: Array.from(document.querySelectorAll(".calc-daily-quest.active"))
                                    .map(daily => { return { minLevel: parseInt(daily.dataset.minLevel), rawExp: parseInt(daily.dataset.rawExp), imgSrc: daily.querySelector(".item-square").src }}),
        monsterHunting: 0,
        numMonsterPark: getNumRuns("num-monster-park-select"),
        numMonsterParkExtreme: getNumRuns("num-monster-park-extreme-select"),
        numExpMinigame: getNumRuns("num-exp-minigame"),
        expMinigameId: minigameSelectElem.value,
        expMinigameMult: parseFloat(minigameSelectElem.options[minigameSelectElem.selectedIndex].dataset.multiplier) || 1.0, // defaults to x1 multiplier if NaN
    };

    // Monster Hunting
    for(let i = 1; i <= 3; i++) {
        let qtyMonsters = parseInt(document.getElementById(`qty-monster-${i}`).value) || 0;
        let perMonsterExp = parseInt(document.getElementById(`per-monster-exp-${i}`).value.replace(/\D/g, "")) || 0;

        perDayExp.monsterHunting += qtyMonsters * perMonsterExp;
    }

    return perDayExp;
}

function compilePerWeekExp() {
    let weekliesWhen = parseInt(document.getElementById("weeklies-when-select").value);

    // Day ranges from 0 (Sunday) till 6 (Saturday); do a validity check
    if(isNaN(weekliesWhen) || weekliesWhen < 0 || weekliesWhen > 6) {
        return {};
    } else {
        let allWeeklyQuests = Array.from(document.querySelectorAll(".calc-weekly-quest"));
        let activeWeeklies = allWeeklyQuests.filter(weekly => parseInt(weekly.value) > 0);

        const weeklies = {
            weekliesWhen: weekliesWhen,
            activeWeeklies: activeWeeklies,
            list: activeWeeklies.map(weekly => { 
                return { 
                    region: weekly.dataset.region,
                    minLevel: parseInt(weekly.dataset.minLevel),
                    numRuns: parseInt(weekly.value), 
                    expPerRun: parseInt(weekly.dataset.weeklyRawExp),
                    expPerRegion: parseInt(weekly.value) * parseInt(weekly.dataset.weeklyRawExp),
                } 
            })
        }

        return weeklies;
    }
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

function calcDailiesNewExp(currLevel, currExp, startDate, endDate, perDayExp, perWeekExp) {
    // Object created here to prevent repeated creation of variables that will be accessed for updating
    let charData = {
        burningType: document.getElementById("burning-select").value,
        currLevel: currLevel,
        currExp: currExp,
        expTNL: getExpTNL(currLevel),
    }
    let hasWeeklies = Object.keys(perWeekExp).length > 0;
    let weekliesWhen = (perWeekExp.weekliesWhen >= 0) && (perWeekExp.weekliesWhen <= 6) ? perWeekExp.weekliesWhen : -1;
    let mpDungeonList = Array.from(document.querySelectorAll(".mp-details")).filter(dungeons => dungeons.dataset.minLevel >= 200);
    let expFromGrinding = perDayExp.monsterHunting;
    let isUsingExpTickets = perDayExp.numExpMinigame === 0 ? getNumRuns("num-exp-tickets") > 0 : false;

    for(let i = startDate; i <= endDate; i += 1000*60*60*24) {
        if(perDayExp.allSelectedDailyQuests.length > 0) {
            charData = addDailiesExp(charData, perDayExp.allSelectedDailyQuests);    
        }
        
        if(hasWeeklies && (new Date(i)).getDay() === weekliesWhen) {
            charData = addWeekliesExp(charData, perWeekExp);
        }

        if(perDayExp.numMonsterPark > 0) {
            charData = addMonsterParkRegularExp(charData, perDayExp, mpDungeonList, i);
        }

        // Now add EXP obtained from event minigames
        if(perDayExp.expMinigameId !== "" && perDayExp.numExpMinigame > 0) {
            charData = addDailyMinigameExp(charData, perDayExp);
        }

        // Factor in grinding EXP
        if(expFromGrinding > 0) {
            charData = adjustLevelAndExp(charData, expFromGrinding);
        }

        // If character is level 260+, now add EXP obtained from Monster Park Extreme
        if(charData.currLevel >= 260 && perDayExp.numMonsterParkExtreme > 0) {
            charData = addMonsterParkExtremeExp(charData, i);
        }
    }

    if(perDayExp.expMinigameId !== "" && isUsingExpTickets) {
        charData = addMinigameExpTicketExp(charData);
    }

    return [charData.currLevel, charData.currExp];
}

// For all selected symbol dailies, calculate and add EXP obtained to data
// Filter according to current character level to determine what can be done within the list
function addDailiesExp(charData, dailies) {
    let expFromDaily = dailies
                        .filter(daily => charData.currLevel >= daily.minLevel)
                        .reduce((sum, daily) => sum + daily.rawExp, 0);

    return adjustLevelAndExp(charData, expFromDaily);
}

// For all weeklies that have at least one run done, calculate and add EXP obtained to data
// Filter according to current character level to determine what can be done within the list
function addWeekliesExp(charData, perWeekExp) {
    let expFromWeekly = perWeekExp.list
                                .filter(weekly => charData.currLevel >= weekly.minLevel)
                                .reduce((sum, weekly) => sum + weekly.expPerRegion, 0);

    return adjustLevelAndExp(charData, expFromWeekly);
}

// Calculate Monster Park (Regular) EXP
// Obtain the highest possible monster park dungeon's EXP value based on character level
// If day is a Sunday (represented as 0 on getDay() function), use sunday's Monster Park EXP value (x1.5 multiplier)
function addMonsterParkRegularExp(charData, perDayExp, mpDungeonList, i) {
    let perMpExp = parseInt(mpDungeonList.filter(dungeons => dungeons.dataset.minLevel <= charData.currLevel).pop().dataset.rawExp);
    let totalMpExp;

    if((new Date(i)).getDay() === 0) {
        totalMpExp = perDayExp.numMonsterPark * Math.round(perMpExp * 1.5);
    } else {
        totalMpExp = perDayExp.numMonsterPark * perMpExp;
    }

    return adjustLevelAndExp(charData, totalMpExp);
}

// Add minigame EXP that is done on a daily basis (i.e. not ticket based)
function addDailyMinigameExp(charData, perDayExp) {
    let expFromMinigames;

    for(let j = 0; j < perDayExp.numExpMinigame; j++) {
        if(perDayExp.expMinigameId === "live") {
            expFromMinigames = EVENT_EXP_TABLE[charData.currLevel-200];
        } else {
            expFromMinigames = DESTINY_EVENT_EXP_TABLE[charData.currLevel-200] || DESTINY_EVENT_EXP_TABLE[DESTINY_EVENT_EXP_TABLE.length-1];
            expFromMinigames = Math.floor(expFromMinigames * perDayExp.expMinigameMult / 100000) * 100000;
        }

        // It is possible to level up midway through minigames
        // Determine newest level, exp and expTNL if necessary before proceeding with calculations
        charData = adjustLevelAndExp(charData, expFromMinigames);
    }

    return charData;
}

function addMonsterParkExtremeExp(charData, i) {
    let expFromMpEx; 

    if((new Date(i)).getDay() === 0) {
        expFromMpEx = charData.currLevel * MONSTER_PARK_EXTREME_TABLE[charData.currLevel - 260] * 100000000 * 1.5;
    } else {
        expFromMpEx = charData.currLevel * MONSTER_PARK_EXTREME_TABLE[charData.currLevel - 260] * 100000000;
    }

    return adjustLevelAndExp(charData, expFromMpEx);
}

function addMinigameExpTicketExp(charData) {
    let totalNumExpTickets = getNumRuns("num-exp-tickets");
    let expPerTicket;

    // Determine the amount of EXP to next level
    // Check how many EXP tickets is required to reach next level
    // If there's enough tickets, deduct the number of tickets, and add that amount of EXP worth of tickets
    // Proceed to next level and repeat process
    // Otherwise, add the amount of EXP worth of tickets and end loop
    while(totalNumExpTickets > 0) {
        expPerTicket = (DESTINY_EVENT_EXP_TABLE[charData.currLevel-200] || DESTINY_EVENT_EXP_TABLE[DESTINY_EVENT_EXP_TABLE.length-1]) / 100;

        let expShortfall = charData.expTNL - charData.currExp;
        let numTicketsTNL = Math.ceil(expShortfall / expPerTicket);
        let totalExpFromTickets, ticketsUsed;

        if(numTicketsTNL >= totalNumExpTickets) {
            totalExpFromTickets = expPerTicket * totalNumExpTickets;
            charData.currExp += totalExpFromTickets;
            ticketsUsed = totalNumExpTickets;
        } else {
            totalExpFromTickets = expPerTicket * numTicketsTNL;
            charData = adjustLevelAndExp(charData, totalExpFromTickets);
            ticketsUsed = numTicketsTNL;
        }

        totalNumExpTickets -= ticketsUsed;
    }

    return charData;
}

// Based on character's burning status, update new character level, EXP value and EXP TNL
function adjustLevelAndExp(charData, expGainValue) {
    if(charData.currExp + expGainValue >= charData.expTNL) {
        if(charData.burningType === "") {
            charData.currLevel++;    
        }

        if(charData.burningType === "hyper") {
            if(charData.currLevel < 250) {
                if(charData.currLevel+3 <= 250) {
                    charData.currLevel += 3;
                } else {
                    charData.currLevel = 250;
                }    
            } else {
                charData.currLevel++;
            }
        }
        charData.currExp = charData.currExp + expGainValue - charData.expTNL;
        charData.expTNL = getExpTNL(charData.currLevel);
    } else {
        charData.currExp += expGainValue;
    }

    return charData;
}

// Create a summary window (appears as a modal) that displays overall progress within a provided timeframe
// At the end, use Bootstrap's in-built function to trigger modal appearance
function displaySummary(perDayExp, perWeekExp) {
    // Burning text display
    if(document.getElementById("burning-select").value === "hyper") {
        document.getElementById("hyper-text").classList.remove("d-none");
    } else {
        document.getElementById("hyper-text").classList.add("d-none");
    }

    // Dailies Summary
    let dailiesSummary = document.getElementById("dailies-summary");
    dailiesSummary.textContent = "";

    if(perDayExp.allSelectedDailyQuests.length > 0) {
        document.getElementById("dailies-summary-div").classList.remove("d-none");
    } else {
        document.getElementById("dailies-summary-div").classList.add("d-none");
    }

    perDayExp.allSelectedDailyQuests.forEach(daily => {
        dailiesSummary.insertAdjacentHTML('beforeend', `<img class="item-square" src='${daily.imgSrc}'>`);
    })

    // Weeklies Summary
    let weekliesSummaryDiv = document.getElementById("weeklies-summary-div");
    let weekliesSummary = document.getElementById("weeklies-summary");
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    if(Object.keys(perWeekExp).length === 0) {
        weekliesSummaryDiv.classList.add("d-none");
    } else {
        document.getElementById("which-day").textContent = days[perWeekExp.weekliesWhen];

        if(perWeekExp.activeWeeklies.length > 0) {
            weekliesSummaryDiv.classList.remove("d-none");
            weekliesSummary.textContent = "";
            perWeekExp.activeWeeklies.map(weekly => weekliesSummary.insertAdjacentHTML('beforeend', `<p class="col-12 col-sm-6 text-center mb-2 px-0">${weekly.value} x ${weekly.dataset.weeklyName}</p>`));
        } else {
            weekliesSummaryDiv.classList.add("d-none");
        }
    }

    // Monster Park Summary
    if((perDayExp.numMonsterPark <= 0 || perDayExp.monsterParkExpValue === 0) && perDayExp.numMonsterParkExtreme <= 0) {
        document.getElementById("monster-park-summary-div").classList.add("d-none");
    } else {
        let mpSummary = document.getElementById("monster-park-summary")
        document.getElementById("monster-park-summary-div").classList.remove("d-none");
        mpSummary.textContent = "";
        
        if(perDayExp.numMonsterPark > 0) {
            mpSummary.insertAdjacentHTML('beforeend', `<p class="col-12 text-center mb-2 px-0">${perDayExp.numMonsterPark} x Monster Park (Regular)</p>`);
        }
        
        if(perDayExp.numMonsterParkExtreme > 0) {
            mpSummary.insertAdjacentHTML('beforeend', `<p class="col-12 text-center mb-2 px-0">${perDayExp.numMonsterParkExtreme} x Monster Park Extreme</p>`);
        }
    }

    // Others (hunting + EXP minigames)
    if(perDayExp.monsterHunting <= 0 && (perDayExp.expMinigameId === "" || (perDayExp.numExpMinigame <= 0 && getNumRuns("num-exp-tickets") <= 0))) {
        document.getElementById("others-summary-div").classList.add("d-none");
    } else {
        let othersSummary = document.getElementById("others-summary");
        document.getElementById("others-summary-div").classList.remove("d-none");
        othersSummary.textContent = "";

        if(perDayExp.monsterHunting > 0) {
            othersSummary.insertAdjacentHTML('beforeend', `<p class="col-12 text-center mb-2 px-0"><i class="fas fa-skull mr-2"></i> ${perDayExp.monsterHunting.toLocaleString("en-SG")} EXP from grinding / day</p>`);
        }

        if(perDayExp.numExpMinigame > 0) {
            othersSummary.insertAdjacentHTML('beforeend', `<p class="col-12 text-center mb-2 px-0"><i class="fas fa-puzzle-piece mr-2"></i> ${perDayExp.numExpMinigame} minigames / day</p>`);
        }

        if(perDayExp.numExpMinigame <= 0 && getNumRuns("num-exp-tickets") > 0) {
            othersSummary.insertAdjacentHTML('beforeend', `<p class="col-12 text-center mb-2 px-0"><i class="fas fa-puzzle-piece mr-2"></i> ${getNumRuns("num-exp-tickets").toLocaleString("en-SG")} EXP Points / Tickets used</p>`);
        }
    }

    // Display div
    $("#dailies-summary-modal").modal();
}