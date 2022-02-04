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
        }
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
                // Only execute a check for end-level calculation if input changes
                // were made from Current Level / Symbol Count inputs
                if(input.id.includes("curr")) {
                    calcNewEndLevel(symbolData);
                }
                calcSymbolUpgradeCosts(symbolData);
            } else {
                symbolData.totalMesoReqElem.textContent = "??";
                symbolData.totalSymbolReqElem.textContent = "??";
                symbolData.totalDaysReqElem.textContent = "??";
            }
        })
    })
}

function calcNewEndLevel(symbolData) {
    let currLevel = parseInt(symbolData.currLevelElem.value);
    let currCount = parseInt(symbolData.currCountElem.value);
    let symbolsTnl = getSymbolExpTnl(symbolData.symbolGroup, currLevel);

    if(currCount > symbolsTnl) {
        let currTotalSymbols = currCount;
        let newSymbolLevel = currLevel;

        for(let i = currLevel; i < MAX_SYMBOL_LEVEL[symbolData.symbolGroup]; i++) {
            if(currTotalSymbols >= getSymbolExpTnl(symbolData.symbolGroup, i)) {
                currTotalSymbols = currTotalSymbols - getSymbolExpTnl(symbolData.symbolGroup, i);
                newSymbolLevel += 1;
            } else {
                break;
            }
        }

        symbolData.endLevelElem.value = newSymbolLevel;
        symbolData.endCountElem.value = currTotalSymbols;
    }
}

/*********************
 * 
 * The only possible cases (after validation) to begin calculating upgrade costs are:
 * - currLevel === endLevel (same level, but X symbols away from each other)
 * - currLevel < endLevel (some growth needed, calculate mesos cost as well)
 * 
 * ********************/
function calcSymbolUpgradeCosts(symbolData) {
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

    }
}