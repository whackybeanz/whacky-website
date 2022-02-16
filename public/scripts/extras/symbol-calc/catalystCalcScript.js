function validateCatalystSymbolLevelInput(levelInputElem, expValueInputElem) {    
    let symbolLevel = parseInt(levelInputElem.value);

    if(isNaN(symbolLevel) || symbolLevel > 20) {
        levelInputElem.value = 20;
        expValueInputElem.value = 0;
    }

    if(symbolLevel < 2) {
        levelInputElem.value = 2;
        expValueInputElem.value = 0;
    }
}

function validateSymbolExpInput(levelInputElem, expValueInputElem) {
    let symbolLevel = parseInt(levelInputElem.value);
    let currSymbolExp = parseInt(expValueInputElem.value);
    let maxTotalSymbols = getSymbolTotalExp("arc", MAX_SYMBOL_LEVEL['arc']-1);
    let currTotalUsedSymbols = getSymbolTotalExp("arc", symbolLevel-1) || 0;
    let maxPossibleSymbolsLeft = maxTotalSymbols - currTotalUsedSymbols;

    if(isNaN(currSymbolExp) || currSymbolExp < 0 ) {
        expValueInputElem.value = 0;
    }

    if(symbolLevel === MAX_SYMBOL_LEVEL['arc']) {
        expValueInputElem.value = 0;
    }

    if(currSymbolExp > maxPossibleSymbolsLeft) {
        expValueInputElem.value = maxPossibleSymbolsLeft;
    }

    document.getElementById("max-possible-symbols-before").textContent = (maxPossibleSymbolsLeft - expValueInputElem.value).toLocaleString('en-SG');
}

function catalystStartLevelInputListener() {
    let levelInputElem = document.getElementById("catalyst-start-symbol-level");
    let expValueInputElem = document.getElementById("catalyst-start-symbol-exp-raw");

    levelInputElem.addEventListener("change", () => {
        validateCatalystSymbolLevelInput(levelInputElem, expValueInputElem);
        validateSymbolExpInput(levelInputElem, expValueInputElem, "catalyst");
        calcEndSymbolStats(levelInputElem, expValueInputElem);
    })
}

function catalystStartExpInputListener() {
    let levelInputElem = document.getElementById("catalyst-start-symbol-level");
    let expValueInputElem = document.getElementById("catalyst-start-symbol-exp-raw");

    expValueInputElem.addEventListener("change", () => {        
        validateCatalystSymbolLevelInput(levelInputElem, expValueInputElem);
        validateSymbolExpInput(levelInputElem, expValueInputElem, "catalyst");
        calcEndSymbolStats(levelInputElem, expValueInputElem);
    })
}

function calcEndSymbolStats(levelInputElem, expValueInputElem) {
    let symbolLevel = parseInt(levelInputElem.value);
    let currSymbolExp = parseInt(expValueInputElem.value);
    let maxTotalSymbols = getSymbolTotalExp("arc", MAX_SYMBOL_LEVEL['arc']-1);
    let currTotalSymbols = getSymbolTotalExp("arc", symbolLevel-1) + currSymbolExp;
    let afterCatalystTotalSymbols = Math.ceil(currTotalSymbols * 0.8);

    let newSymbolLevel = 0;

    for(let i = 1; i < MAX_SYMBOL_LEVEL['arc']; i++) {
        let currTotalUsedSymbols = getSymbolTotalExp("arc", i);

        if(afterCatalystTotalSymbols < currTotalUsedSymbols) {
            newSymbolLevel = i;
            break;
        }
    }

    let remainingSymbols = afterCatalystTotalSymbols - getSymbolTotalExp("arc", newSymbolLevel-1);
    let newSymbolLevelExpRequired = getSymbolExpTnl("arc", newSymbolLevel);
    let numSymbolsToMax = maxTotalSymbols - afterCatalystTotalSymbols;

    document.getElementById("catalyst-end-symbol-level").value = newSymbolLevel;
    document.getElementById("catalyst-end-symbol-exp-raw").value = `${remainingSymbols} / ${newSymbolLevelExpRequired}`;
    document.getElementById("max-possible-symbols-after").textContent = numSymbolsToMax.toLocaleString('en-SG');
}