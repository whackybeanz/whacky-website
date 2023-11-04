function loadCalcTabData() {
    loadSavedData();

    // Symbol Progress Tracker
    calcDefaultSymbolUpgradeCosts();
    symbolSelectListener();
    resetFieldsBtnListener();

    // EXP Overflow
    expOverflowInputListeners();

    // Catalyst
    catalystSelectListener();
    catalystDataInputListener();
}

function loadSavedData() {
    let savedData = JSON.parse(localStorage.getItem("symbolCalc"));

    if(savedData !== null) {
        Object.keys(savedData).forEach(symbolId => {
            let symbolGroup = (SYMBOL_COST_TABLE.filter(symbolData => symbolData.id === symbolId))[0].symbolGroup;
            let symbolData = getUpgradeInputData(symbolGroup, symbolId);
            
            symbolData.currLevelElem.value = savedData[symbolId].currLevel;
            symbolData.currCountElem.value = savedData[symbolId].currCount;
            symbolData.endLevelElem.value = savedData[symbolId].endLevel;
            symbolData.endCountElem.value = savedData[symbolId].endCount;
            //symbolData.symbolsPerDayElem.value = savedData[symbolId].symbolsPerDay;

            updateSymbolLevelDisplay(symbolData);
        })
    }
}

// Retrieves all input/output data contained within a singular symbol
function getUpgradeInputData(symbolGroup, symbolId) {
    return {
        symbolId: symbolId,
        symbolGroup: symbolGroup,

        currLevelElem: document.getElementById(`${symbolId}-curr-level`),
        currCountElem: document.getElementById(`${symbolId}-curr-symbol-count`),
        endLevelElem: document.getElementById(`${symbolId}-end-level`),
        endCountElem: document.getElementById(`${symbolId}-end-symbol-count`),
        symbolsPerDayElem: document.getElementById(`${symbolId}-gain-per-day`),
        symbolsPerWeekElem: document.getElementById(`${symbolId}-gain-per-week`),

        totalMesoReqElem: document.getElementById(`${symbolId}-total-meso-req`),
        totalSymbolReqElem: document.getElementById(`${symbolId}-total-symbols-req`),
        totalDaysReqElem: document.getElementById(`${symbolId}-total-days-req`),
    };
}

// On page load, calculate all symbol upgrade costs
// Validate all inputs and attach change listeners to each input field
// If valid, execute calculation; else hide values
function calcDefaultSymbolUpgradeCosts() {
    let allSymbols = document.querySelectorAll(".single-symbol-div");

    allSymbols.forEach(symbol => {
        let symbolData = getUpgradeInputData(symbol.dataset.symbolGroup, symbol.dataset.symbolId);
        let dataIsValid = validateSymbolUpgradeInputs(symbolData);

        attachListeners(symbolData);

        if(dataIsValid) {
            calcSymbolUpgradeCosts(symbolData);
        } else {
            symbolData.totalMesoReqElem.textContent = "??";
            symbolData.totalSymbolReqElem.textContent = "??";
            symbolData.totalDaysReqElem.textContent = "??";
            document.getElementById(`${symbolData.symbolId}-date-complete`).textContent = "??";

            /*if(symbolData.symbolGroup === "arc") {
                document.getElementById(`${symbolData.symbolId}-total-new-meso-req`).textContent = "??";                    
            }*/
        }
    })
}

function symbolSelectListener() {
    const allSymbols = document.querySelectorAll(".single-symbol-btn");

    allSymbols.forEach(symbol => {
        symbol.addEventListener("click", () => {
            if(!symbol.classList.contains("active")) {
                let currActiveSymbol = document.querySelector(".single-symbol-btn.active");
                let currActiveDiv = document.querySelector(".single-symbol-div.active");

                currActiveDiv.classList.remove("active");
                currActiveDiv.classList.add("d-none");
                currActiveSymbol.classList.remove("active");

                symbol.classList.add("active");
                document.getElementById(`symbol-${symbol.dataset.viewSymbol}-upgrade`).classList.add("active");
                document.getElementById(`symbol-${symbol.dataset.viewSymbol}-upgrade`).classList.remove("d-none");
            }
        })
    })
}

function resetFieldsBtnListener() {
    const allResetBtns = document.querySelectorAll(".reset-fields-btn");

    allResetBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            let symbolId = btn.dataset.symbolId;
            let symbolGroup = btn.dataset.symbolGroup;

            document.getElementById(`${symbolId}-curr-level`).value = 1;
            document.getElementById(`${symbolId}-curr-symbol-count`).value = 0;

            if(symbolGroup === "arc") {
                document.getElementById(`${symbolId}-end-level`).value = 20;
            } else {
                document.getElementById(`${symbolId}-end-level`).value = 11;
            }
            document.getElementById(`${symbolId}-end-symbol-count`).value = 0;

            let symbolData = getUpgradeInputData(symbolGroup, symbolId);
            calcSymbolUpgradeCosts(symbolData);
            updateSymbolLevelDisplay(symbolData);
            saveSymbolCalcInputs(symbolData);
        })
    })
}

function updateSymbolLevelDisplay(symbolData) {
    if(parseInt(symbolData.currLevelElem.value) === MAX_SYMBOL_LEVEL[symbolData.symbolGroup]) {
        symbolData.currCountElem.value = 0;
        document.getElementById(`${symbolData.symbolId}-curr-level-display`).textContent = `MAX`;
    } else {
        document.getElementById(`${symbolData.symbolId}-curr-level-display`).textContent = `Lv. ${symbolData.currLevelElem.value}`; 
    }
}

function saveSymbolCalcInputs(symbolData) {
    let savedData = JSON.parse(localStorage.getItem("symbolCalc"));

    let toSave = {
        currLevel: parseInt(symbolData.currLevelElem.value),
        currCount: parseInt(symbolData.currCountElem.value),
        endLevel: parseInt(symbolData.endLevelElem.value),
        endCount: parseInt(symbolData.endCountElem.value),
        //symbolsPerDay: parseInt(symbolData.symbolsPerDayElem.value),
    };

    if(savedData === null) {
        savedData = {};
    } 
    savedData[`${symbolData.symbolId}`] = toSave;

    localStorage.setItem("symbolCalc", JSON.stringify(savedData));
}

/************
 * 
 * Check for invalid (or non-existent) level selections
 * Check if start/end level exceeds thresholds determined by symbol type
 * Check if current symbol count exceeds end count
 * 
 * ***********/
function validateSymbolUpgradeInputs(symbolData) {
    let currLevel = parseInt(symbolData.currLevelElem.value);
    let currCount = parseInt(symbolData.currCountElem.value);
    let endLevel = parseInt(symbolData.endLevelElem.value);
    let endCount = parseInt(symbolData.endCountElem.value);

    if(isNaN(currLevel) || isNaN(endLevel)) {
        return false;
    }

    if(currLevel < 1 || currLevel > 20 || currLevel > endLevel || endLevel < 1 || endLevel > MAX_SYMBOL_LEVEL[symbolData.symbolGroup]) {
        return false;
    }

    if(currLevel === endLevel && currCount > endCount && currLevel !== 20) {
        return false;
    }

    checkNonZeroInputValues(symbolData, currCount, endCount);
    checkMaxPossibleSymbolCount(symbolData, currLevel, currCount, endLevel, endCount);

    return true;
}

function checkNonZeroInputValues(symbolData, currCount, endCount) {
    let symbolsPerDay = parseInt(symbolData.symbolsPerDayElem.value);

    if(isNaN(currCount) || currCount < 0) {
        symbolData.currCountElem.value = 0;
    }

    if(isNaN(endCount) || endCount < 0) {
        symbolData.endCountElem.value = 0;
    }

    if(isNaN(symbolsPerDay) || symbolsPerDay < 0) {
        symbolData.symbolsPerDayElem.value = 0;
    }
}

/************
 * 
 * Within a single set of inputs (e.g. Current group, or Target group), check if the symbol count input
 * has exceeded possible limit possible by the symbol. Also limit possible maximum symbol gain per day.
 * 
 * ***********/
function checkMaxPossibleSymbolCount(symbolData, currLevel, currCount, endLevel, endCount) {
    let maxPossibleCurrSymbolCount = getSymbolTotalExp(symbolData.symbolGroup, MAX_SYMBOL_LEVEL[symbolData.symbolGroup]-1) - getSymbolTotalExp(symbolData.symbolGroup, currLevel-1);

    if(currCount > maxPossibleCurrSymbolCount) {
        symbolData.currCountElem.value = maxPossibleCurrSymbolCount;
    }

    if(endLevel < MAX_SYMBOL_LEVEL[symbolData.symbolGroup]) {
        let maxPossibleEndSymbolCount = getSymbolTotalExp(symbolData.symbolGroup, MAX_SYMBOL_LEVEL[symbolData.symbolGroup]-1) - getSymbolTotalExp(symbolData.symbolGroup, endLevel-1);

        if(endCount > maxPossibleEndSymbolCount) {
            symbolData.endCountElem.value = maxPossibleEndSymbolCount;
        }
    }

    if(endLevel === MAX_SYMBOL_LEVEL[symbolData.symbolGroup] && endCount > 0) {
        symbolData.endCountElem.value = 0;
    }

    let symbolsPerDay = parseInt(symbolData.symbolsPerDayElem.value);

    if(symbolsPerDay > 50) {
        symbolData.symbolsPerDayElem.value = 50;
    }
}

function attachListeners(symbolData) {
    let inputList = [symbolData.currLevelElem, symbolData.currCountElem, symbolData.endLevelElem, symbolData.endCountElem, symbolData.symbolsPerDayElem, symbolData.symbolsPerWeekElem];

    inputList.forEach(input => {
        if(input) {
            input.addEventListener("change", () => {
                let dataIsValid = validateSymbolUpgradeInputs(symbolData);

                if(dataIsValid) {
                    if(input.id.includes("curr-level")) {
                        updateSymbolLevelDisplay(symbolData);
                    }

                    saveSymbolCalcInputs(symbolData);
                    calcSymbolUpgradeCosts(symbolData);
                } else {
                    symbolData.totalMesoReqElem.textContent = "??";
                    symbolData.totalSymbolReqElem.textContent = "??";
                    symbolData.totalDaysReqElem.textContent = "??";
                    document.getElementById(`${symbolData.symbolId}-date-complete`).textContent = "??";
                }
            })
        }
    })
}

/*********************
 * 
 * The only possible cases (after validation) to begin calculating upgrade costs are:
 * - currLevel === endLevel (same level, but X symbols away from each other)
 * - currLevel < endLevel (some growth needed, calculate mesos cost as well)
 * 
 * ********************/
function calcSymbolUpgradeCosts(symbolData) {
    let symbolId = symbolData.symbolId;
    let symbolGroup = symbolData.symbolGroup;

    let currLevel = parseInt(symbolData.currLevelElem.value);
    let currCount = parseInt(symbolData.currCountElem.value);
    let endLevel = parseInt(symbolData.endLevelElem.value);
    let endCount = parseInt(symbolData.endCountElem.value);
    let symbolsPerDay = parseInt(symbolData.symbolsPerDayElem.value);
    let symbolsPerWeek = 0;

    if(symbolData.symbolsPerWeekElem) {
       symbolsPerWeek = parseInt(symbolData.symbolsPerWeekElem.value)
    }

    let totalMesosReq = getSymbolTotalCost(symbolId, endLevel-1) - getSymbolTotalCost(symbolId, currLevel-1);;
    let totalSymbolsReq = getSymbolTotalExp(symbolGroup, endLevel-1) - getSymbolTotalExp(symbolGroup, currLevel-1) + endCount - currCount;
    let totalDaysReq = 0;

    let endDate = Date.parse(new Date());
    let currSymbolsObtained = 0;

    if(symbolsPerDay === 0 && symbolsPerWeek === 0) {
        document.getElementById(`${symbolId}-total-meso-req`).textContent = totalMesosReq.toLocaleString('en-SG');
        document.getElementById(`${symbolId}-total-symbols-req`).textContent = totalSymbolsReq.toLocaleString('en-SG');
        document.getElementById(`${symbolId}-total-days-req`).textContent = "??";    
        document.getElementById(`${symbolId}-date-complete`).textContent = "??";
    } else {
        while(currSymbolsObtained < totalSymbolsReq) {
            // First add 1 day (calculation starts from next day)
            endDate += 1000*60*60*24;
            totalDaysReq++;

            // Add the daily/weekly symbols to current total
            currSymbolsObtained += symbolsPerDay;

            if((new Date(endDate)).getDay() === 1 && symbolsPerWeek !== 0) {
                currSymbolsObtained += symbolsPerWeek;
            }
        }

        document.getElementById(`${symbolId}-total-meso-req`).textContent = totalMesosReq.toLocaleString('en-SG');
        document.getElementById(`${symbolId}-total-symbols-req`).textContent = totalSymbolsReq.toLocaleString('en-SG');
        document.getElementById(`${symbolId}-total-days-req`).textContent = totalDaysReq.toLocaleString('en-SG');    
        document.getElementById(`${symbolId}-date-complete`).textContent = new Date(endDate).toLocaleDateString('en-SG', { day: "numeric", month: "short", year: "numeric" });
    }
}