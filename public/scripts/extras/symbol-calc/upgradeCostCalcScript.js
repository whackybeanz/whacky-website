function calcDefaultSymbolUpgradeCosts() {
    let allSymbols = document.querySelectorAll(".single-symbol-div");

    allSymbols.forEach(symbol => {
        let symbolData = getUpgradeInputData(symbol.dataset.symbolGroup, symbol.dataset.symbolId);
        let dataIsValid = validateSymbolUpgradeInputs(symbolData);

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

        currLevel: parseInt(document.getElementById(`${symbolId}-curr-level`).value),
        currCount: parseInt(document.getElementById(`${symbolId}-curr-symbol-count`).value),
        endLevel: parseInt(document.getElementById(`${symbolId}-end-level`).value),
        endCount: parseInt(document.getElementById(`${symbolId}-end-symbol-count`).value),
        symbolsPerDay: parseInt(document.getElementById(`${symbolId}-gain-per-day`).value),

        totalMesoReqElem: document.getElementById(`${symbolId}-total-meso-req`),
        totalSymbolReqElem: document.getElementById(`${symbolId}-total-symbols-req`),
        totalDaysReqElem: document.getElementById(`${symbolId}-total-days-req`),
    };
}

function validateSymbolUpgradeInputs(symbolData) {
    if(isNaN(symbolData.currLevel) || isNaN(symbolData.currCount) || isNaN(symbolData.symbolsPerDay) || isNaN(symbolData.endLevel) || isNaN(symbolData.endCount)) {
        return false;
    }

    if(symbolData.currLevel < 1 || symbolData.currLevel > symbolData.endLevel || symbolData.endLevel > 20) {
        return false;
    }

    if(symbolData.endLevel === 20 && symbolData.endCount > 0) {
        symbolData.endCountElem.value = 0;
    }

    if(getSymbolTotalExp(symbolData.symbolGroup, symbolData.currLevel) < symbolData.currCount) {
        symbolData.currCountElem.value = getSymbolTotalExp(symbolData.currLevel);
    }

    if(symbolData.symbolsPerDay > 50) {
        symbolData.symbolsPerDayElem.value = 50;
    }

    return true;
}

function calcSymbolUpgradeCosts(symbolData) {

}