function validateCatalystSymbolLevelInput(elem, expValueInputElem, symbolGroup) {    
    let symbolLevel = parseInt(elem.value);

    if(symbolGroup === "arc") {
        if(isNaN(symbolLevel) || symbolLevel > 20) {
            elem.value = 20;
            expValueInputElem.value = 0;
        }
    } else {
        if(isNaN(symbolLevel) || symbolLevel > 11) {
            elem.value = 11;
            expValueInputElem.value = 0;
        }
    }
    

    if(symbolLevel < 2) {
        elem.value = 2;
        expValueInputElem.value = 0;
    }
}

function validateSymbolExpInput(levelInputElem, expValueInputElem, symbolGroup) {
    let symbolLevel = parseInt(levelInputElem.value);
    let currSymbolExp = parseInt(expValueInputElem.value);
    let maxTotalSymbols = getSymbolTotalExp(symbolGroup, MAX_SYMBOL_LEVEL[symbolGroup]-1);
    let currTotalUsedSymbols = getSymbolTotalExp(symbolGroup, symbolLevel-1) || 0;
    let maxPossibleSymbolsLeft = maxTotalSymbols - currTotalUsedSymbols;

    if(isNaN(currSymbolExp) || currSymbolExp < 0 ) {
        expValueInputElem.value = 0;
    }

    if(symbolLevel === MAX_SYMBOL_LEVEL[symbolGroup]) {
        expValueInputElem.value = 0;
    }

    if(currSymbolExp > maxPossibleSymbolsLeft) {
        expValueInputElem.value = maxPossibleSymbolsLeft;
    }

    document.getElementById(`${symbolGroup}-max-possible-symbols-before`).textContent = (maxPossibleSymbolsLeft - expValueInputElem.value).toLocaleString('en-SG');
}

function catalystSelectListener() {
    let elem = document.getElementById("catalyst-type-select");

    elem.addEventListener("change", () => {
        document.querySelectorAll(".catalyst-type")
                .forEach(div => {
                    div.classList.remove("d-flex");
                    div.classList.add("d-none");
                });
        document.getElementById(`${elem.value}-catalyst`).classList.add("d-flex");

        if(elem.value === "arc") {
            document.getElementById("catalyst-percent-loss").textContent = 20;
        } else {
            document.getElementById("catalyst-percent-loss").textContent = 40;
        }
    })
}

function catalystDataInputListener() {
    let selectElems = document.querySelectorAll(".catalyst-start-level-select");

    selectElems.forEach(selectElem => {
        selectElem.addEventListener("change", () => {
            let symbolGroup = selectElem.dataset.symbolGroup;
            let expValueInputElem = document.getElementById(`${symbolGroup}-catalyst-start-symbol-exp-raw`);

            validateCatalystSymbolLevelInput(selectElem, expValueInputElem, symbolGroup);
            validateSymbolExpInput(selectElem, expValueInputElem, symbolGroup);
            calcEndSymbolStats(selectElem, expValueInputElem, symbolGroup);

            expValueInputElem.addEventListener("change", () => {
                validateCatalystSymbolLevelInput(selectElem, expValueInputElem, symbolGroup);
                validateSymbolExpInput(selectElem, expValueInputElem, symbolGroup);
                calcEndSymbolStats(selectElem, expValueInputElem, symbolGroup);
            })
        })
    })
}

function calcEndSymbolStats(levelInputElem, expValueInputElem, symbolGroup) {
    let symbolLevel = parseInt(levelInputElem.value);
    let currSymbolExp = parseInt(expValueInputElem.value);
    let maxTotalSymbols = getSymbolTotalExp(symbolGroup, MAX_SYMBOL_LEVEL[symbolGroup]-1);
    let currTotalSymbols = getSymbolTotalExp(symbolGroup, symbolLevel-1) + currSymbolExp;
    let afterCatalystTotalSymbols = symbolGroup === "arc" ? Math.ceil(currTotalSymbols * 0.8) : Math.ceil(currTotalSymbols * 0.6);

    let newSymbolLevel = 0;

    for(let i = 1; i < MAX_SYMBOL_LEVEL[symbolGroup]; i++) {
        let currTotalUsedSymbols = getSymbolTotalExp(symbolGroup, i);

        if(afterCatalystTotalSymbols < currTotalUsedSymbols) {
            newSymbolLevel = i;
            break;
        }
    }

    let remainingSymbols = afterCatalystTotalSymbols - getSymbolTotalExp(symbolGroup, newSymbolLevel-1);
    //let newSymbolLevelExpRequired = getSymbolExpTnl(symbolGroup, newSymbolLevel);
    let numSymbolsToMax = maxTotalSymbols - afterCatalystTotalSymbols;

    document.getElementById(`${symbolGroup}-catalyst-end-symbol-level`).value = newSymbolLevel;
    document.getElementById(`${symbolGroup}-catalyst-end-symbol-exp-raw`).value = `${remainingSymbols}`;
    document.getElementById(`${symbolGroup}-max-possible-symbols-after`).textContent = numSymbolsToMax.toLocaleString('en-SG');
}