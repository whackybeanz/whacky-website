function loadDailiesCalcListeners() {
    toggleDailiesBtnListener();
    dailiesDateInputListener();
    dailiesCalcCurrLevelInputListener();
    dailiesCalcCurrExpPercentInputListener();
    dailiesCalcCurrExpRawInputListener();
    expMinigameSelectListener();
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
        document.getElementById("calc-start-level").textContent = currLevel;
        document.getElementById("calc-start-percent").textContent = `${(currExp / getExpTNL(currLevel) * 100).toFixed(3)}%`;

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
        //document.getElementById("end-calc-dailies-char-exp-raw").value = `${currExp.toLocaleString("en-SG")} EXP`;

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
        monsterParkType: mpSelectElem.options[mpSelectElem.selectedIndex].text,
        monsterParkExpValue: parseInt(mpSelectElem.value), // due to EXP variations from Sunday monster park, numRuns will be factored further down instead
        numExpMinigame: getNumRuns("num-exp-minigame"),
        expMinigameId: minigameSelectElem.value,
        expMinigameMult: parseFloat(minigameSelectElem.options[minigameSelectElem.selectedIndex].dataset.multiplier) || 1.0, // defaults to x1 multiplier if NaN
    };

    // Monster Hunting
    for(let i = 1; i <= 3; i++) {
        let qtyMonsters = parseInt(document.getElementById(`qty-monster-${i}`).value) || 0;
        let perMonsterExp = parseInt(document.getElementById(`per-monster-exp-${i}`).value) || 0;

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
    let burningType = document.getElementById("burning-select").value;
    let newLevel = currLevel;
    let newExp = currExp;
    let normalMpExp = perDayExp.numMonsterPark * perDayExp.monsterParkExpValue;
    let sundayMpExp = perDayExp.numMonsterPark * Math.round(perDayExp.monsterParkExpValue * 1.5);
    let expFromGrinding = perDayExp.monsterHunting;
    let hasWeeklies = Object.keys(perWeekExp).length > 0;
    let weekliesWhen = (perWeekExp.weekliesWhen >= 0) && (perWeekExp.weekliesWhen <= 6) ? perWeekExp.weekliesWhen : -1;
    let isUsingExpTickets = perDayExp.numExpMinigame === 0 ? getNumRuns("num-exp-tickets") > 0 : false;

    for(let i = startDate; i <= endDate; i += 1000*60*60*24) {
        let expTNL = getExpTNL(newLevel);
        let [expFromDaily, expFromWeekly] = [0, 0];

        // Calculate dailies EXP by factoring in level growth
        if(perDayExp.allSelectedDailyQuests.length > 0) {
            expFromDaily += perDayExp.allSelectedDailyQuests
                                .filter(daily => newLevel >= daily.minLevel)
                                .reduce((sum, daily) => sum + daily.rawExp, 0)    
        }

        // If day is a Sunday (represented as 0 on getDay() function), use sunday's Monster Park EXP value
        if((new Date(i)).getDay() === 0) {
            expFromDaily += sundayMpExp;
        } else {
            expFromDaily += normalMpExp;
        }

        // After regular dailies, does level increase? If so, adjust value accordingly
        [newLevel, newExp, isLevelUp] = adjustLevelAndExp(newLevel, newExp, expFromDaily, expTNL, burningType);

        if(isLevelUp) {
            expTNL = getExpTNL(newLevel);
        }

        // Add EXP from weeklies if applicable and adjust level/value accordingly
        if(hasWeeklies && (new Date(i)).getDay() === weekliesWhen) {
            expFromWeekly = perWeekExp.list
                                        .filter(weekly => newLevel >= weekly.minLevel)
                                        .reduce((sum, weekly) => sum + weekly.expPerRegion, 0);

            [newLevel, newExp, isLevelUp] = adjustLevelAndExp(newLevel, newExp, expFromWeekly, expTNL, burningType);

            if(isLevelUp) {
                expTNL = getExpTNL(newLevel);
            }
        }

        // Now add EXP obtained from event minigames
        if(perDayExp.expMinigameId !== "" && perDayExp.numExpMinigame > 0) {
            let expFromMinigames;

            for(let j = 0; j < perDayExp.numExpMinigame; j++) {
                if(perDayExp.expMinigameId === "live") {
                    expFromMinigames = EVENT_EXP_TABLE[newLevel-200];
                } else {
                    expFromMinigames = DESTINY_EVENT_EXP_TABLE[newLevel-200] || DESTINY_EVENT_EXP_TABLE[DESTINY_EVENT_EXP_TABLE.length-1];
                    expFromMinigames = Math.floor(expFromMinigames * perDayExp.expMinigameMult / 100000) * 100000;
                }

                // As event EXP is added last (to factor for best EXP rates possible), a second calculation is needed to check for potential level up
                // After event minigames, does level increase? If so, adjust value accordingly
                [newLevel, newExp, isLevelUp] = adjustLevelAndExp(newLevel, newExp, expFromMinigames, expTNL, burningType);

                console.log(`Now at level ${newLevel} ${newExp}`);

                if(isLevelUp) {
                    expTNL = getExpTNL(newLevel);
                }
            }            
        }

        // Then, after grinding, does level increase? If so, adjust value accordingly
        [newLevel, newExp, isLevelUp] = adjustLevelAndExp(newLevel, newExp, expFromGrinding, expTNL, burningType);

        if(isLevelUp) {
            expTNL = getExpTNL(newLevel);
        }

        // If character is level 260+, now add EXP obtained from Monster Park Extreme
        if(newLevel >= 260 && perDayExp.numMonsterParkExtreme > 0) {
            let expFromMpEx; 

            if((new Date(i)).getDay() === 0) {
                expFromMpEx = newLevel * MONSTER_PARK_EXTREME_TABLE[newLevel - 260] * 100000000 * 1.5;
            } else {
                expFromMpEx = newLevel * MONSTER_PARK_EXTREME_TABLE[newLevel - 260] * 100000000;
            }

            [newLevel, newExp, isLevelUp] = adjustLevelAndExp(newLevel, newExp, expFromMpEx, expTNL, burningType);
        }
    }

    if(perDayExp.expMinigameId !== "" && isUsingExpTickets) {
        let totalNumExpTickets = getNumRuns("num-exp-tickets");
        let expPerTicket;

        // Determine the amount of EXP to next level
        // Check how many EXP tickets is required to reach next level
        // If there's enough tickets, deduct the number of tickets, and add that amount of EXP worth of tickets
        // Proceed to next level and repeat process
        // Otherwise, add the amount of EXP worth of tickets and end loop
        while(totalNumExpTickets > 0) {
            expTNL = getExpTNL(newLevel);
            expPerTicket = (DESTINY_EVENT_EXP_TABLE[newLevel-200] || DESTINY_EVENT_EXP_TABLE[DESTINY_EVENT_EXP_TABLE.length-1]) / 100;

            let expShortfall = expTNL - newExp;
            let numTicketsTNL = Math.ceil(expShortfall / expPerTicket);
            let totalExpFromTickets, ticketsUsed;

            if(numTicketsTNL >= totalNumExpTickets) {
                totalExpFromTickets = expPerTicket * totalNumExpTickets;
                newExp += totalExpFromTickets;
                ticketsUsed = totalNumExpTickets;
            } else {
                totalExpFromTickets = expPerTicket * numTicketsTNL;
                [newLevel, newExp, isLevelUp] = adjustLevelAndExp(newLevel, newExp, totalExpFromTickets, expTNL, burningType);
                ticketsUsed = numTicketsTNL;
            }

            totalNumExpTickets -= ticketsUsed;
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
            if(newLevel < 250) {
                if(newLevel+3 <= 250) {
                    newLevel += 3;
                } else {
                    newLevel = 250;
                }    
            } else {
                newLevel++;
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
            mpSummary.insertAdjacentHTML('beforeend', `<p class="col-12 text-center mb-2 px-0">${perDayExp.numMonsterPark} x ${perDayExp.monsterParkType}</p>`);
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
    $("#summary-modal").modal();
}