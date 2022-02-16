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

            if(symbolData.symbolGroup === "arc") {
                document.getElementById(`${symbolData.symbolId}-total-new-meso-req`).textContent = "??";                    
            }
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

function getUpgradeInputData(symbolGroup, symbolId) {
    return {
        symbolId: symbolId,
        symbolGroup: symbolGroup,

        currLevelElem: document.getElementById(`${symbolId}-curr-level`),
        currCountElem: document.getElementById(`${symbolId}-curr-symbol-count`),
        endLevelElem: document.getElementById(`${symbolId}-end-level`),
        endCountElem: document.getElementById(`${symbolId}-end-symbol-count`),
        symbolsPerDayElem: document.getElementById(`${symbolId}-gain-per-day`),

        totalMesoReqElem: document.getElementById(`${symbolId}-total-meso-req`),
        totalSymbolReqElem: document.getElementById(`${symbolId}-total-symbols-req`),
        totalDaysReqElem: document.getElementById(`${symbolId}-total-days-req`),
    };
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

    if(currLevel < 1 || currLevel >= 20 || currLevel > endLevel || endLevel < 1 || endLevel > MAX_SYMBOL_LEVEL[symbolData.symbolGroup]) {
        return false;
    }

    if(currLevel === endLevel && currCount > endCount) {
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
    let inputList = [symbolData.currLevelElem, symbolData.currCountElem, symbolData.endLevelElem, symbolData.endCountElem, symbolData.symbolsPerDayElem];

    inputList.forEach(input => {
        input.addEventListener("change", () => {
            let dataIsValid = validateSymbolUpgradeInputs(symbolData);

            if(dataIsValid) {
                calcSymbolUpgradeCosts(symbolData);
            } else {
                symbolData.totalMesoReqElem.textContent = "??";
                symbolData.totalSymbolReqElem.textContent = "??";
                symbolData.totalDaysReqElem.textContent = "??";
                document.getElementById(`${symbolData.symbolId}-date-complete`).textContent = "??";

                if(symbolData.symbolGroup === "arc") {
                    document.getElementById(`${symbolData.symbolId}-total-new-meso-req`).textContent = "??";                    
                }
            }
        })
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

    let totalMesosReq = 0;
    let totalSymbolsReq = 0;
    let totalDaysReq = 0;

    if(currLevel === endLevel) {
        totalSymbolsReq = endCount - currCount;
        totalDaysReq = Math.ceil(totalSymbolsReq / symbolsPerDay);
    } else {
        // Calculate mesos cost
        totalMesosReq = getSymbolTotalCost(symbolId, endLevel-1) - getSymbolTotalCost(symbolId, currLevel-1);
        document.getElementById(`${symbolId}-total-meso-req`).textContent = totalMesosReq.toLocaleString('en-SG');

        if(symbolData.symbolGroup === "arc") {
            let totalNewMesoReq = getSymbolNewTotalCost(symbolId, endLevel-1) - getSymbolNewTotalCost(symbolId, currLevel-1);
            document.getElementById(`${symbolId}-total-new-meso-req`).textContent = totalNewMesoReq.toLocaleString('en-SG');
        }

        // Calculate symbols cost
        totalSymbolsReq = getSymbolTotalExp(symbolGroup, endLevel-1) - getSymbolTotalExp(symbolGroup, currLevel-1) + endCount - currCount;

        // Calculate number of days needed
        totalDaysReq = Math.ceil(totalSymbolsReq / symbolsPerDay);
    }

    document.getElementById(`${symbolId}-total-symbols-req`).textContent = totalSymbolsReq.toLocaleString('en-SG');
    document.getElementById(`${symbolId}-total-days-req`).textContent = totalDaysReq.toLocaleString('en-SG');

    let today = Date.parse(new Date());
    let endDay = today + (totalDaysReq-1) * 24 * 60 * 60 * 1000;
    
    document.getElementById(`${symbolId}-date-complete`).textContent = new Date(endDay).toLocaleDateString('en-SG', { day: "numeric", month: "short", year: "numeric" });
}

/*********************
 * 
 * Used in EXP Overflow calculations
 * 
 * ********************/
function expOverflowInputListeners() {
    let symbolTypeSelectElem = document.getElementById("overflow-symbol-group-select");
    let currLevelElem = document.getElementById("overflow-start-symbol-level");
    let currCountElem = document.getElementById("overflow-start-symbol-exp-raw");

    [symbolTypeSelectElem, currLevelElem, currCountElem].forEach(elem => {
        elem.addEventListener("change", () => {
            let symbolData = {
                symbolGroup: symbolTypeSelectElem.value,
                currLevelElem: currLevelElem,
                currCountElem: currCountElem,
                endLevelElem: document.getElementById("overflow-end-symbol-level"),
                endCountElem: document.getElementById("overflow-end-symbol-exp-raw"),
            };

            if(parseInt(currLevelElem.value) === MAX_SYMBOL_LEVEL[symbolData.symbolGroup]) {
                symbolData.endLevelElem.value = `${MAX_SYMBOL_LEVEL[symbolData.symbolGroup]}`;
                symbolData.endCountElem.value = "MAX";
                document.getElementById("overflow-max-possible-symbols-after").textContent = "0";
            }

            if(parseInt(currLevelElem.value) >= 1 && 
                parseInt(currLevelElem.value) <= MAX_SYMBOL_LEVEL[symbolData.symbolGroup]-1 && 
                parseInt(currCountElem.value) >= 0) {
                calcNewEndLevel(symbolData);
            }
        })
    })
}

function calcNewEndLevel(symbolData) {
    let currLevel = parseInt(symbolData.currLevelElem.value);
    let currCount = parseInt(symbolData.currCountElem.value);
    let symbolsTnl = getSymbolExpTnl(symbolData.symbolGroup, currLevel);
    let symbolsUsedSoFar = getSymbolTotalExp(symbolData.symbolGroup, currLevel-1) + currCount;
    let currTotalSymbols = currCount;
    let newSymbolLevel = currLevel;

    if(currCount >= symbolsTnl) {
        for(let i = currLevel; i < MAX_SYMBOL_LEVEL[symbolData.symbolGroup]; i++) {
            symbolsTnl = getSymbolExpTnl(symbolData.symbolGroup, i);

            if(currTotalSymbols >= getSymbolExpTnl(symbolData.symbolGroup, i)) {
                currTotalSymbols = currTotalSymbols - symbolsTnl;
                newSymbolLevel += 1;
            } else {
                break;
            }
        }
    }

    // Update final result displays
    symbolData.endLevelElem.value = newSymbolLevel;

    if(newSymbolLevel === MAX_SYMBOL_LEVEL[symbolData.symbolGroup]) {
        symbolData.endCountElem.value = "MAX";
        document.getElementById("overflow-max-possible-symbols-after").textContent = "0";            
    } else {
        symbolData.endCountElem.value = `${currTotalSymbols} / ${symbolsTnl}`;

        let maxTotalSymbols = getSymbolTotalExp(symbolData.symbolGroup, MAX_SYMBOL_LEVEL[symbolData.symbolGroup]-1);
        let numSymbolsToMax = maxTotalSymbols - symbolsUsedSoFar;

        document.getElementById("overflow-max-possible-symbols-after").textContent = numSymbolsToMax.toLocaleString("en-SG");
    }
}