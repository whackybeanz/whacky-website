const MAX_ARC_SYMBOL_LEVEL = 20;

document.addEventListener("DOMContentLoaded", () => {
    symbolStartLevelInputListener();
    symbolStartExpInputListener();
    loadSymbolExpTables();
    loadSymbolCostTables();
    symbolCostTableSelectListener();
});

function getSymbolTotalExp(symbolLevel) {
    return parseInt(document.getElementById(`arc-${symbolLevel}-total-exp`).dataset.totalExp);
}

function getSymbolExpTnl(symbolLevel) {
    return parseInt(document.getElementById(`arc-${symbolLevel}-exp-tnl`).dataset.rawExpTnl);
}

function symbolStartLevelInputListener() {
    let levelInputElem = document.getElementById("start-symbol-level");
    let expValueInputElem = document.getElementById("start-symbol-exp-raw");

    levelInputElem.addEventListener("change", () => {
        validateLevelInput(levelInputElem, expValueInputElem);
        validateExpInput(levelInputElem, expValueInputElem);
        calcEndSymbolStats(levelInputElem, expValueInputElem);
    })
}

function symbolStartExpInputListener() {
    let levelInputElem = document.getElementById("start-symbol-level");
    let expValueInputElem = document.getElementById("start-symbol-exp-raw");

    expValueInputElem.addEventListener("change", () => {        
        validateLevelInput(levelInputElem, expValueInputElem);
        validateExpInput(levelInputElem, expValueInputElem);
        calcEndSymbolStats(levelInputElem, expValueInputElem);
    })
}

function validateLevelInput(levelInputElem, expValueInputElem) {    
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

function validateExpInput(levelInputElem, expValueInputElem) {
    let symbolLevel = parseInt(levelInputElem.value);
    let currSymbolExp = parseInt(expValueInputElem.value);
    let maxTotalSymbols = getSymbolTotalExp(MAX_ARC_SYMBOL_LEVEL-1);
    let currTotalUsedSymbols = getSymbolTotalExp(symbolLevel-1) || 0;
    let maxPossibleSymbolsLeft = maxTotalSymbols - currTotalUsedSymbols;

    if(isNaN(currSymbolExp) || currSymbolExp < 0 ) {
        expValueInputElem.value = 0;
    }

    if(symbolLevel === MAX_ARC_SYMBOL_LEVEL) {
        expValueInputElem.value = 0;
    }

    if(currSymbolExp > maxPossibleSymbolsLeft) {
        expValueInputElem.value = maxPossibleSymbolsLeft;
    }

    document.getElementById("max-possible-symbols-before").textContent = maxPossibleSymbolsLeft - expValueInputElem.value;
}

function calcEndSymbolStats(levelInputElem, expValueInputElem) {
    let symbolLevel = parseInt(levelInputElem.value);
    let currSymbolExp = parseInt(expValueInputElem.value);
    let maxTotalSymbols = getSymbolTotalExp(MAX_ARC_SYMBOL_LEVEL-1);
    let currTotalSymbols = getSymbolTotalExp(symbolLevel-1) + currSymbolExp;
    let afterCatalystTotalSymbols = Math.ceil(currTotalSymbols * 0.8);

    let newSymbolLevel = 0;

    for(let i = 1; i < MAX_ARC_SYMBOL_LEVEL; i++) {
        let currTotalUsedSymbols = getSymbolTotalExp(i);

        if(afterCatalystTotalSymbols < currTotalUsedSymbols) {
            newSymbolLevel = i;
            break;
        }
    }

    let remainingSymbols = afterCatalystTotalSymbols - getSymbolTotalExp(newSymbolLevel-1);
    let newSymbolLevelExpRequired = getSymbolExpTnl(newSymbolLevel);
    let numSymbolsToMax = maxTotalSymbols - afterCatalystTotalSymbols;

    document.getElementById("end-symbol-level").value = newSymbolLevel;
    document.getElementById("end-symbol-exp-raw").value = `${remainingSymbols} / ${newSymbolLevelExpRequired}`;
    document.getElementById("max-possible-symbols-after").textContent = numSymbolsToMax;
}

function loadSymbolExpTables() {
    let totalSymbolEXP;

    SYMBOL_EXP_TABLE.forEach(symbolType => {
        totalSymbolEXP = 0;
        let html = `<div class="w-100 col-12 col-sm-6 col-xl-4 d-flex flex-column align-items-center mb-4"><h2 class="font-subsubheader font-weight-bold text-underline mb-2">${symbolType.name}</h2>

        <table class='font-table size-350 table table-sm table-bordered table-hover'>
            <thead>
                <tr>
                    <th scope="col" class="text-center">Level</th>
                    <th scope="col" class="text-center">EXP To Next Level</th>
                    <th scope="col" class="text-center">Total Symbols</th>
                </tr>
            </thead>
            <tbody id='symbol-exp-table-${symbolType.id}'>
            </tbody>
        </table></div>`;

        document.getElementById("symbol-exp-tables").insertAdjacentHTML('beforeend', html);

        symbolType.values.forEach((rawEXP, arrayNum) => {
            totalSymbolEXP += rawEXP;

            document
                .getElementById(`symbol-exp-table-${symbolType.id}`)
                .insertAdjacentHTML('beforeend', `<tr>
                    <th scope="row" class="text-center">${symbolType.startLevel+arrayNum} > ${symbolType.startLevel+arrayNum+1}</th>
                    <td class="text-center" id="${symbolType.id}-${symbolType.startLevel+arrayNum}-exp-tnl" data-raw-exp-tnl="${rawEXP}">${rawEXP.toLocaleString('en-SG')}</td>
                    <td class="text-center" id="${symbolType.id}-${symbolType.startLevel+arrayNum}-total-exp" data-total-exp="${totalSymbolEXP}">${totalSymbolEXP.toLocaleString('en-SG')}</td>
                </tr>`);
        })
    })
}

// Create containers for each symbol's cost table data and show RTE's table by default on load
function loadSymbolCostTables() {
    SYMBOL_COST_TABLE.forEach(symbol => {
        document
            .getElementById("symbol-cost-table-details")
            .insertAdjacentHTML('beforeend', `<div class="single-symbol-cost-table-div w-100 ${symbol.id === "rte" ? "d-flex" : "d-none"} flex-wrap justify-content-center" id="symbol-${symbol.id}-div"></div>`);

        addCostTable(symbol);
    })
}

// Create skeleton table containing headers for each symbol
function addCostTable(symbol) {
    let html = `<div class="w-100 col-12 d-flex flex-column align-items-center mb-4"><h2 class="font-subsubheader font-weight-bold text-underline mb-2">${symbol.name}</h2>

    <table class='font-table size-720 table table-sm table-bordered table-hover' id='symbol-${symbol.id}-cost-table'>
        <thead>
            <tr>
                <th scope="col" class="text-center">Level</th>
                <th scope="col" class="text-center">Cost</th>
                <th scope="col" class="text-center">Total Cost</th>
            </tr>
        </thead>
        <tbody id='symbol-${symbol.id}-table-details'>
        </tbody>
    </table></div>`;

    document.getElementById(`symbol-${symbol.id}-div`).insertAdjacentHTML('beforeend', html);

    populateCostTable(symbol);
}

/***************
 * Populates each row (level) of symbol upgrade cost.
 * 
 * For Arcane Symbols, there are symbol cost adjustments to be noted due to
 * upcoming DESTINY patch.
 * 
 * Display both pre- and post-DESTINY cost details where applicable and percentage change.
 * *************/
function populateCostTable(symbol) {
    let totalCost = 0;
    let totalPostDestinyCost = 0;

    for(let i = 1; i < SYMBOL_MAX_LEVEL[symbol.id]; i++) {
        let symbolCost = symbol.values[i-1];
        totalCost += symbolCost;

        let displayedCost = `${symbolCost.toLocaleString('en-SG')}`;;
        let displayedTotalCost = `${totalCost.toLocaleString('en-SG')}`

        if(symbol.postDestinyValues !== undefined) {
            let postDestinySymbolCost = symbol.postDestinyValues[i-1]
            let percentChange = (postDestinySymbolCost - symbolCost) / symbolCost;
            
            totalPostDestinyCost += postDestinySymbolCost;
            let totalPercentChange = (totalPostDestinyCost - totalCost) / totalCost;
            
            displayedCost += ` <i class="fas fa-lg fa-long-arrow-alt-right"></i> ${postDestinySymbolCost.toLocaleString('en-SG')}<br/><span class="font-weight-bold text-success">( <i class="fas fa-caret-down"></i> ${(percentChange * 100).toFixed(2)}% )</span>`
            displayedTotalCost += ` <i class="fas fa-lg fa-long-arrow-alt-right"></i> ${totalPostDestinyCost.toLocaleString('en-SG')}<br/><span class="font-weight-bold text-success">( <i class="fas fa-caret-down"></i> ${(totalPercentChange * 100).toFixed(2)}% )</span>`
        }

        document
            .getElementById(`symbol-${symbol.id}-table-details`)
            .insertAdjacentHTML('beforeend', `<tr>
                <th scope="row" class="text-center align-middle">${i} > ${i+1}</th>
                <td scope="row" class="text-center data-potion-raw-cost="" id="symbol-${symbol.id}-level-${i}-cost">
                    ${displayedCost}
                </td>
                <td scope="row" class="text-center data-potion-raw-cost="" id="symbol-${symbol.id}-level-${i}-total-cost">
                    ${displayedTotalCost}
                </td>
            </tr>`);
    }
}

// Toggle view of symbol cost chart whenever select option is changed
function symbolCostTableSelectListener() {
    const symbolCostTableSelect = document.getElementById("symbol-cost-table-select");

    symbolCostTableSelect.addEventListener("change", function(event) {
        let currActiveTable = document.querySelector(".single-symbol-cost-table-div.d-flex");

        if(currActiveTable.id !== this.value) {
            currActiveTable.classList.remove("d-flex");
            currActiveTable.classList.add("d-none");

            document.getElementById(`symbol-${this.value}-div`).classList.add("d-flex");
            document.getElementById(`symbol-${this.value}-div`).classList.remove("d-none");
        }
    })
}