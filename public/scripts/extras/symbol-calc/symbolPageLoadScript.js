document.addEventListener("DOMContentLoaded", () => {
    loadSymbolExpTables();
    loadSymbolCostTables();
    loadCalcTabData();
    symbolCostTableSelectListener();
});

/***************
 * 
 * Table loaders
 * 
 * *************/
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
        let html = `<div class="w-100 col-12 d-flex flex-column align-items-center mb-4">
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
    })
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

    for(let i = 1; i < MAX_SYMBOL_LEVEL[symbol.symbolGroup]; i++) {
        let symbolCost = symbol.values[i-1];
        totalCost += symbolCost;

        let displayedCost = `${symbolCost.toLocaleString('en-SG')}`;;
        let displayedTotalCost = `${totalCost.toLocaleString('en-SG')}`

        if(symbol.postDestinyValues !== undefined) {
            let postDestinySymbolCost = symbol.postDestinyValues[i-1] || symbolCost;
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
                <td scope="row" class="text-center data-raw-cost-tnl="${symbolCost}" id="symbol-${symbol.id}-level-${i}-cost">
                    ${displayedCost}
                </td>
                <td scope="row" class="text-center" data-raw-total-cost="${totalCost}" data-raw-new-total-cost="${totalPostDestinyCost}" id="symbol-${symbol.id}-level-${i}-total-cost">
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