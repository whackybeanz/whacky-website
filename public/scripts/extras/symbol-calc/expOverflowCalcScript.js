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