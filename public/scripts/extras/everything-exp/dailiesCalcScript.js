const CHAR_MAX_LEVEL = 300;

function loadDailiesCalcListeners() {
    toggleDailiesBtnListener();
    dailiesDateInputListener();
    dailiesCalcCurrLevelInputListener();
    dailiesCalcCurrExpPercentInputListener();
    dailiesCalcCurrExpRawInputListener();
    dailiesTargetLevelListener();
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

function dailiesTargetLevelListener() {
    let elemIds = {
        parentContainerId: "calc-exp-contents",
        targetLevelInputId: "start-calc-dailies-target-level",
        calcBtnId: "btn-calc-dailies-exp-result",
    };
    validateTargetLevelInput(elemIds);
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
        //let numGames = expMinigameSelect.options[expMinigameSelect.selectedIndex].dataset.numMinigames;

        if(numTix) {
            //document.getElementById("num-exp-minigame").value = "";
            document.getElementById("num-exp-tickets").value = parseInt(numTix);
        }

        /*if(numGames) {
            document.getElementById("num-exp-minigame").value = parseInt(numGames);
            document.getElementById("num-exp-tickets").value = "";
        }*/
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
        let targetLevel = parseInt(document.getElementById("start-calc-dailies-target-level").value);
        let currExp = parseInt(document.getElementById("start-calc-dailies-char-exp-raw").value.match(/\d/g).join(""));
        document.getElementById("calc-start-level").textContent = currLevel;
        document.getElementById("calc-start-percent").textContent = `${(currExp / getExpTNL(currLevel) * 100).toFixed(3)}%`;
        document.getElementById("calc-start-raw").textContent = `${currExp.toLocaleString("en-SG")} EXP`;

        let startDate = new Date(document.getElementById("dailies-start-date").value);
        let endDate = new Date(document.getElementById("dailies-end-date").value)
        let startDateVal = Date.parse(startDate) - startDate.getTimezoneOffset() * 60 * 1000;
        let endDateVal = Date.parse(endDate) - endDate.getTimezoneOffset() * 60 * 1000;
        document.getElementById("calc-start-date").textContent = startDate.toLocaleDateString('en-SG', { day: "2-digit", month: "short", year: "numeric" });
        document.getElementById("calc-end-date").textContent = endDate.toLocaleDateString('en-SG', { day: "2-digit", month: "short", year: "numeric" });

        let perDayExp = compilePerDayExp();
        let perWeekExp = compilePerWeekExp();

        [finalLevel, finalExp, milestones] = calcDailiesNewExp(currLevel, currExp, targetLevel, startDateVal, endDateVal, perDayExp, perWeekExp);

        document.getElementById("calc-end-level").textContent = finalLevel;
        document.getElementById("calc-end-percent").textContent = `${(finalExp / getExpTNL(finalLevel) * 100).toFixed(3)}%`;
        document.getElementById("calc-end-raw").textContent = `${finalExp.toLocaleString("en-SG")} EXP`;

        if(finalLevel !== currLevel || finalExp !== currExp) {
            displaySummary(perDayExp, perWeekExp, milestones);
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
        //numExpMinigame: getNumRuns("num-exp-minigame"),
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
    let expPunchKingPoints = parseInt(document.getElementById("exp-pk-points").value) || -1;

    // Day ranges from 0 (Sunday) till 6 (Saturday); do a validity check
    if(isNaN(weekliesWhen) || weekliesWhen < 0 || weekliesWhen > 6) {
        return { expPunchKingPoints: expPunchKingPoints };
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
            }),
            expPunchKingPoints: expPunchKingPoints,
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

function calcDailiesNewExp(currLevel, currExp, targetLevel, startDate, endDate, perDayExp, perWeekExp) {
    // Object created here to prevent repeated creation of variables that will be accessed for updating
    let burningSelectElem = document.getElementById("burning-select");
    let charData = {
        burningType: burningSelectElem.value,
        burningMaxLevel: parseInt(burningSelectElem.options[burningSelectElem.selectedIndex].dataset.maxLevel),
        currLevel: currLevel,
        targetLevel: targetLevel,
        currExp: currExp,
        expTNL: getExpTNL(currLevel),
        milestones: [],
    }
    
    // Add EXP based on start/end date provided
    //let hasWeeklies = Object.keys(perWeekExp).length > 0;
    let weekliesWhen = (perWeekExp.weekliesWhen >= 0) && (perWeekExp.weekliesWhen <= 6) ? perWeekExp.weekliesWhen : -1;
    let mpDungeonList = Array.from(document.querySelectorAll(".mp-details")).filter(dungeons => dungeons.dataset.minLevel >= 200).reverse();
    let expFromGrinding = perDayExp.monsterHunting || 0;

    for(let i = startDate; i <= endDate; i += 1000*60*60*24) {
        charData = addExpComponents(i, charData, perDayExp, perWeekExp, weekliesWhen, mpDungeonList, expFromGrinding);
    }

    // Add EXP tickets
    let isUsingExpTickets = getNumRuns("num-exp-tickets") > 0;

    if(perDayExp.expMinigameId !== "" && isUsingExpTickets) {
        charData = addMinigameExpTicketExp(endDate, charData);
    }

    charData.endDateLevel = charData.currLevel;
    charData.endDateExp = charData.currExp;

    // If target level was not reached, continue adding EXP until target is reached, or until a maximum of 5000 counts have elapsed
    // NOTE: This is a ballpark calculation, where MP and MPE EXP is not calculated accurately to the day
    // Instead, it takes whatever day it is currently for the EXP value, so it may either not account for any Sunday benefits, or counts everyday as a Sunday
    // This is to reduce the load on the client during calculations, so a rougher value is used -- please take the results only as a ballpark and not as 100% accurate.
    let count = 0;

    let totalContentExp = getDailiesExp(charData, perDayExp.allSelectedDailyQuests) + getWeekliesExp(charData, perWeekExp) + 
                            getMonsterParkRegularExp(endDate, charData, perDayExp.numMonsterPark, mpDungeonList) + expFromGrinding + 
                            getMonsterParkExtremeExp(endDate, charData, perDayExp.numMonsterParkExtreme) + getPunchKingEXP(charData, perWeekExp.expPunchKingPoints)/7;
    let numDaysToLevel = 0;

    if(totalContentExp > 0) {
        while(charData.currLevel < charData.targetLevel && count < 300) {
            numDaysToLevel = Math.ceil((getExpTNL(charData.currLevel) - charData.currExp) / totalContentExp);

            if(numDaysToLevel > 5000) {
                charData.milestones.push({ date: -1, level: -1 });
                break;
            }
            endDate += numDaysToLevel*1000*60*60*24;
            charData = adjustLevelAndExp(endDate, charData, numDaysToLevel*totalContentExp);

            // Update totalContentExp due to level up
            totalContentExp = getDailiesExp(charData, perDayExp.allSelectedDailyQuests) + getWeekliesExp(charData, perWeekExp) + 
                                getMonsterParkRegularExp(endDate, charData, perDayExp.numMonsterPark, mpDungeonList) + expFromGrinding + 
                                getMonsterParkExtremeExp(endDate, charData, perDayExp.numMonsterParkExtreme) + getPunchKingEXP(charData, perWeekExp.expPunchKingPoints)/7;
            count++;
        }
    }

    // When returning data, return
    // 1) The level and EXP obtained based on the designated date range
    // 2) The milestones achieved (that may go beyond the date range)
    return [charData.endDateLevel, charData.endDateExp, charData.milestones];
}

function addExpComponents(i, charData, perDayExp, perWeekExp, weekliesWhen, mpDungeonList, expFromGrinding) {
    let contentExp;

    if(perDayExp.allSelectedDailyQuests.length > 0) {
        contentExp = getDailiesExp(charData, perDayExp.allSelectedDailyQuests);
        charData = adjustLevelAndExp(i, charData, contentExp); 
    }
    
    if((new Date(i)).getDay() === weekliesWhen) {
        contentExp = getWeekliesExp(charData, perWeekExp);
        charData = adjustLevelAndExp(i, charData, contentExp);
    }

    if(perDayExp.numMonsterPark > 0) {
        contentExp = getMonsterParkRegularExp(i, charData, perDayExp.numMonsterPark, mpDungeonList);
        charData = adjustLevelAndExp(i, charData, contentExp);
    }

    // Now add EXP obtained from event minigames
    /*if(perDayExp.expMinigameId !== "") {
        charData = addDailyMinigameExp(charData, perDayExp);
    }*/

    // Factor in grinding EXP
    if(expFromGrinding > 0) {
        charData = adjustLevelAndExp(i, charData, expFromGrinding);
    }

    // If character is level 260+, now add EXP obtained from Monster Park Extreme
    if(charData.currLevel >= 260) {
        contentExp = getMonsterParkExtremeExp(i, charData, perDayExp.numMonsterParkExtreme);
        charData = adjustLevelAndExp(i, charData, contentExp);
    }

    if(perWeekExp.expPunchKingPoints > 0 && (new Date(i)).getDay() === 2) {
        contentExp = getPunchKingEXP(charData, perWeekExp.expPunchKingPoints);
        charData = adjustLevelAndExp(i, charData, contentExp);
    }

    return charData;
}

// For all selected symbol dailies, calculate and add EXP obtained to data
// Filter according to current character level to determine what can be done within the list
function getDailiesExp(charData, dailies) {
    return dailies
            .filter(daily => charData.currLevel >= daily.minLevel)
            .reduce((sum, daily) => sum + daily.rawExp, 0);                    
}

// For all weeklies that have at least one run done, calculate and add EXP obtained to data
// Filter according to current character level to determine what can be done within the list
function getWeekliesExp(charData, perWeekExp) {
    if(perWeekExp.list) {
        return perWeekExp.list
            .filter(weekly => charData.currLevel >= weekly.minLevel)
            .reduce((sum, weekly) => sum + weekly.expPerRegion, 0);
    } else {
        return 0;
    }
}

// Calculate Monster Park (Regular) EXP
// Obtain the highest possible monster park dungeon's EXP value based on character level
// If day is a Sunday (represented as 0 on getDay() function), use sunday's Monster Park EXP value (x1.5 multiplier)
function getMonsterParkRegularExp(timestamp, charData, numRuns, mpDungeonList) {
    let perMpExp = parseInt(mpDungeonList.filter(dungeons => dungeons.dataset.minLevel <= charData.currLevel).pop().dataset.rawExp);

    if((new Date(timestamp)).getDay() === 0) {
        return numRuns * Math.round(perMpExp * 1.5);
    } else {
        return numRuns * perMpExp;
    }
}

// Add minigame EXP that is done on a daily basis (i.e. not ticket based)
/*function addDailyMinigameExp(charData, perDayExp) {
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
}*/

function getMonsterParkExtremeExp(timestamp, charData, numRuns) {
    if(charData.currLevel >= 260) {
        if((new Date(timestamp)).getDay() === 0) {
            return numRuns * charData.currLevel * MONSTER_PARK_EXTREME_TABLE[charData.currLevel - 260] * 100000000 * 1.5;
        } else {
            return numRuns * charData.currLevel * MONSTER_PARK_EXTREME_TABLE[charData.currLevel - 260] * 100000000;
        }
    } else {
        return 0;
    }
}

function getPunchKingEXP(charData, expPunchKingPoints) {
    if(expPunchKingPoints > 0) {
        return PUNCH_KING_EXP_TABLE[charData.currLevel - 200] * expPunchKingPoints * 3 * 100;    
    } else {
        return 0;
    }
}

function addMinigameExpTicketExp(timestamp, charData) {
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
            charData = adjustLevelAndExp(timestamp, charData, totalExpFromTickets);
            ticketsUsed = numTicketsTNL;
        }

        totalNumExpTickets -= ticketsUsed;
    }

    return charData;
}

// Based on character's burning status, update new character level, EXP value and EXP TNL
function adjustLevelAndExp(timestamp, charData, expGainValue) {
    if(charData.currLevel < CHAR_MAX_LEVEL) {
        if(charData.currExp + expGainValue >= charData.expTNL) {
            if(charData.burningType === "") {
                charData.currLevel++;    
            }

            if(charData.burningType === "hyper") {
                if(charData.currLevel < charData.burningMaxLevel) {
                    if(charData.currLevel+3 <= charData.burningMaxLevel) {
                        charData.currLevel += 3;
                    } else {
                        charData.currLevel = charData.burningMaxLevel;
                    }    
                } else {
                    charData.currLevel++;
                }
            }
            if(charData.currLevel < CHAR_MAX_LEVEL) {
                charData.currExp = charData.currExp + expGainValue - charData.expTNL;
                charData.expTNL = getExpTNL(charData.currLevel);
            } else {
                charData.currExp = 0;
                charData.expTNL = 0;
            }
            
            charData.milestones.push({ date: timestamp, level: charData.currLevel });

            // For grinding, there is a chance there is overflow EXP
            // Repeatedly calculate new level/exp until EXP no longer overflows
            let count = 0;

            while(charData.currLevel < CHAR_MAX_LEVEL && charData.currExp >= charData.expTNL) {
                charData.currLevel += 1;
                charData.currExp = charData.currExp - charData.expTNL;
                charData.expTNL = getExpTNL(charData.currLevel);
                charData.milestones.push({ date: timestamp, level: charData.currLevel });

                // Crash prevention
                count++;

                if(count > 500) {
                    break;
                }
            }
        } else {
            charData.currExp += expGainValue;
        }
    }

    return charData;
}

// Create a summary window (appears as a modal) that displays overall progress within a provided timeframe
// At the end, use Bootstrap's in-built function to trigger modal appearance
function displaySummary(perDayExp, perWeekExp, milestones) {
    let selectedLang = document.getElementById("lang-select").value;

    // Burning text display
    if(document.getElementById("burning-select").value === "hyper") {
        document.getElementById("hyper-text").classList.remove("d-none");
    } else {
        document.getElementById("hyper-text").classList.add("d-none");
    }

    // Level Milestones
    let milestonesSummary = document.getElementById("milestones-summary");
    milestonesSummary.textContent = "";

    if(milestones.length > 0) {
        const text = {
            "lang-en": ["Estimated; may be off by several days", "- Over 5,000 days required for next level -", "Level"],
            "lang-tw": ["估计;可能相差几天", "下一等级需超过5,000天", "等级"],
        }

        milestonesSummary.insertAdjacentHTML('beforeend', `<p class="col-12 mb-1 font-small text-custom text-center">${text[selectedLang][0]}</p>`)
        milestones.forEach(data => {
            if(data.date === -1 || data.level === -1) {
                milestonesSummary.insertAdjacentHTML('beforeend', `<p class="col-12 mb-1 text-center text-danger">${text[selectedLang][1]}</p>`);
            } else { 
                milestonesSummary.insertAdjacentHTML('beforeend', `<p class="col-12 mb-1 text-center">(${new Date(data.date).toLocaleDateString('en-SG', { day: "2-digit", month: "short", year: "numeric" })}) ${text[selectedLang][2]} ${data.level}</p>`)
            }
        })
        document.getElementById("level-milestones-div").classList.remove("d-none");
    } else {
        document.getElementById("level-milestones-div").classList.add("d-none");
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
    const days = {
        "lang-en": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        "lang-tw": ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    };

    if(Object.keys(perWeekExp).length === 0) {
        weekliesSummaryDiv.classList.add("d-none");
    } else {
        document.getElementById("which-day").textContent = days[selectedLang][perWeekExp.weekliesWhen];

        if(perWeekExp.activeWeeklies && perWeekExp.activeWeeklies.length > 0) {
            weekliesSummaryDiv.classList.remove("d-none");
            weekliesSummary.textContent = "";

            const datasetType = {
                "lang-en": "weeklyName",
                "lang-tw": "weeklyNameTw",
            }
            perWeekExp.activeWeeklies.map(weekly => weekliesSummary.insertAdjacentHTML('beforeend', `<p class="col-12 col-sm-6 text-center mb-2 px-0">${weekly.value} x ${weekly.dataset[datasetType[selectedLang]]}</p>`));
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

        const text = {
            "lang-en": ["Monster Park (Regular)", "Monster Park Extreme"],
            "lang-tw": ["怪物公園(普通)", "极限怪物公園"],
        }
        
        if(perDayExp.numMonsterPark > 0) {
            mpSummary.insertAdjacentHTML('beforeend', `<p class="col-12 text-center mb-2 px-0">${perDayExp.numMonsterPark} x ${text[selectedLang][0]}</p>`);
        }
        
        if(perDayExp.numMonsterParkExtreme > 0) {
            mpSummary.insertAdjacentHTML('beforeend', `<p class="col-12 text-center mb-2 px-0">${perDayExp.numMonsterParkExtreme} x ${text[selectedLang][1]}</p>`);
        }
    }

    // Others (hunting + EXP minigames)
    if(perDayExp.monsterHunting <= 0 && (perDayExp.expMinigameId === "" || getNumRuns("num-exp-tickets") <= 0) && perWeekExp.expPunchKingPoints <= 0) {
        document.getElementById("others-summary-div").classList.add("d-none");
    } else {
        let othersSummary = document.getElementById("others-summary");
        document.getElementById("others-summary-div").classList.remove("d-none");
        othersSummary.textContent = "";

        const text = {
            "lang-en": ["EXP from grinding / day", "EXP Points / Tickets used", "EXP Punch King Points"],
            "lang-tw": ["每日打怪经验值", "經驗兌換券/積分", "拳擊機積分"],
        }

        if(perDayExp.monsterHunting > 0) {
            othersSummary.insertAdjacentHTML('beforeend', `<p class="col-12 text-center mb-2 px-0">
                ${perDayExp.monsterHunting.toLocaleString("en-SG")} ${text[selectedLang][0]}
            </p>`);
        }

        /*
        if(perDayExp.numExpMinigame > 0) {
            othersSummary.insertAdjacentHTML('beforeend', `<p class="col-12 text-center mb-2 px-0"><i class="fas fa-puzzle-piece mr-2"></i> ${perDayExp.numExpMinigame} minigames / day</p>`);
        }*/

        if(getNumRuns("num-exp-tickets") > 0) {
            othersSummary.insertAdjacentHTML('beforeend', `<p class="col-12 text-center mb-2 px-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-puzzle-fill" viewBox="0 0 16 16">
                  <path d="M3.112 3.645A1.5 1.5 0 0 1 4.605 2H7a.5.5 0 0 1 .5.5v.382c0 .696-.497 1.182-.872 1.469a.459.459 0 0 0-.115.118.113.113 0 0 0-.012.025L6.5 4.5v.003l.003.01c.004.01.014.028.036.053a.86.86 0 0 0 .27.194C7.09 4.9 7.51 5 8 5c.492 0 .912-.1 1.19-.24a.86.86 0 0 0 .271-.194.213.213 0 0 0 .036-.054l.003-.01v-.008a.112.112 0 0 0-.012-.025.459.459 0 0 0-.115-.118c-.375-.287-.872-.773-.872-1.469V2.5A.5.5 0 0 1 9 2h2.395a1.5 1.5 0 0 1 1.493 1.645L12.645 6.5h.237c.195 0 .42-.147.675-.48.21-.274.528-.52.943-.52.568 0 .947.447 1.154.862C15.877 6.807 16 7.387 16 8s-.123 1.193-.346 1.638c-.207.415-.586.862-1.154.862-.415 0-.733-.246-.943-.52-.255-.333-.48-.48-.675-.48h-.237l.243 2.855A1.5 1.5 0 0 1 11.395 14H9a.5.5 0 0 1-.5-.5v-.382c0-.696.497-1.182.872-1.469a.459.459 0 0 0 .115-.118.113.113 0 0 0 .012-.025L9.5 11.5v-.003l-.003-.01a.214.214 0 0 0-.036-.053.859.859 0 0 0-.27-.194C8.91 11.1 8.49 11 8 11c-.491 0-.912.1-1.19.24a.859.859 0 0 0-.271.194.214.214 0 0 0-.036.054l-.003.01v.002l.001.006a.113.113 0 0 0 .012.025c.016.027.05.068.115.118.375.287.872.773.872 1.469v.382a.5.5 0 0 1-.5.5H4.605a1.5 1.5 0 0 1-1.493-1.645L3.356 9.5h-.238c-.195 0-.42.147-.675.48-.21.274-.528.52-.943.52-.568 0-.947-.447-1.154-.862C.123 9.193 0 8.613 0 8s.123-1.193.346-1.638C.553 5.947.932 5.5 1.5 5.5c.415 0 .733.246.943.52.255.333.48.48.675.48h.238l-.244-2.855z"/>
                </svg> ${getNumRuns("num-exp-tickets").toLocaleString("en-SG")} ${text[selectedLang][1]}
            </p>`);
        }

        if(perWeekExp.expPunchKingPoints > 0) {
            othersSummary.insertAdjacentHTML('beforeend', `<p class="col-12 text-center mb-2 px-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-crosshair2" viewBox="0 0 16 16">
                  <path d="M8 0a.5.5 0 0 1 .5.5v.518A7.001 7.001 0 0 1 14.982 7.5h.518a.5.5 0 0 1 0 1h-.518A7.001 7.001 0 0 1 8.5 14.982v.518a.5.5 0 0 1-1 0v-.518A7.001 7.001 0 0 1 1.018 8.5H.5a.5.5 0 0 1 0-1h.518A7.001 7.001 0 0 1 7.5 1.018V.5A.5.5 0 0 1 8 0Zm-.5 2.02A6.001 6.001 0 0 0 2.02 7.5h1.005A5.002 5.002 0 0 1 7.5 3.025V2.02Zm1 1.005A5.002 5.002 0 0 1 12.975 7.5h1.005A6.001 6.001 0 0 0 8.5 2.02v1.005ZM12.975 8.5A5.002 5.002 0 0 1 8.5 12.975v1.005a6.002 6.002 0 0 0 5.48-5.48h-1.005ZM7.5 12.975A5.002 5.002 0 0 1 3.025 8.5H2.02a6.001 6.001 0 0 0 5.48 5.48v-1.005ZM10 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"/>
                </svg> ${perWeekExp.expPunchKingPoints.toLocaleString("en-SG")} ${text[selectedLang][2]}
            </p>`);
        }
    }

    // Display div
    $("#dailies-summary-modal").modal();
}

/*function displayNewAgeStats(endDateVal, currLevel, finalLevel, finalExp) {
    // Special notes for New Age
    // If end date is 14 Nov or earlier, display a message indicating adjusted EXP post-New Age patch
    if(endDateVal <= 1699920000000 && finalLevel >= 210) {
        let specialNotesSummary = document.getElementById("special-notes-summary");
        document.getElementById("special-notes-div").classList.remove("d-none");
        specialNotesSummary.textContent = "";

        let newExpTnl = NEW_AGE_TABLE[finalLevel-210];
        let levelUpNewExpTnl = NEW_AGE_TABLE[finalLevel-210+1] || NEW_AGE_TABLE[NEW_AGE_TABLE.length-1];
        
        let message = ``;
        let newExpPercent;

        if(finalExp > newExpTnl) {
            finalLevel += 1;
            finalExp = finalExp - newExpTnl;
            newExpPercent = finalExp / levelUpNewExpTnl * 100;

            if(finalExp > levelUpNewExpTnl) {
                finalLevel += 1;
                finalExp = finalExp - levelUpNewExpTnl;
                levelUpNewExpTnl = NEW_AGE_TABLE[finalLevel-210] || NEW_AGE_TABLE[NEW_AGE_TABLE.length-1];
                newExpPercent = finalExp / levelUpNewExpTnl * 100;
            }

            message += `<p class="col-12 font-table text-center mb-0 px-0">You will be <span class="font-weight-bold text-custom">Level ${finalLevel}, ${(newExpPercent).toFixed(3)}%</span> after the New Age patch (15 Nov).`;
        } else {
            message += `<p class="col-12 font-table text-center mb-0 px-0">You will be <span class="font-weight-bold text-custom">Level ${finalLevel}, ${(finalExp / newExpTnl * 100).toFixed(3)}%</span> after the New Age patch (15 Nov).`;

            if(currLevel !== finalLevel && finalLevel - currLevel === 1) {
                let doNotLevelPercent;
                let currLevelExpTnl = getExpTNL(currLevel);
                let currLevelNewAgeExpTnl = getExpTNL(currLevel, "newage");
                let nextLevelNewAgeExpTnl = getExpTNL(currLevel+1, "newage");

                if(currLevelExpTnl - 1 - currLevelNewAgeExpTnl > nextLevelNewAgeExpTnl) {
                    finalLevel = currLevel + 2;
                    finalExp = currLevelExpTnl - 1 - currLevelNewAgeExpTnl - nextLevelNewAgeExpTnl;
                    nextLevelNewAgeExpTnl = NEW_AGE_TABLE[finalLevel-210] || NEW_AGE_TABLE[NEW_AGE_TABLE.length-1];
                    doNotLevelPercent = finalExp / nextLevelNewAgeExpTnl * 100;
                } else {
                    doNotLevelPercent = (currLevelExpTnl - 1 - currLevelNewAgeExpTnl) / nextLevelNewAgeExpTnl * 100;
                }

                message += ` If you keep your EXP at Level ${currLevel}, 99.99999% (1 EXP to level) and wait for New Age to arrive, you would be <span class="font-weight-bold text-custom">Level ${finalLevel}, ${(doNotLevelPercent).toFixed(3)}%</span>.`
            }
        }

        message += `<br/>The new EXP tables can be found in the <a href="https://bit.ly/ms-exp-table" target="_blank">EXP Table sheet (EXP to level up tab)</a>; opens in new tab.</p>`;

        specialNotesSummary.insertAdjacentHTML('beforeend', message);
    } else {
        document.getElementById("special-notes-div").classList.add("d-none");
    }
}*/