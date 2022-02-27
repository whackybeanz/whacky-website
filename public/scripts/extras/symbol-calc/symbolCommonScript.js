/***************
 * 
 * Common functions 
 * 
 * *************/
function getSymbolTotalExp(symbolGroup, symbolLevel) {
    if(symbolLevel === 0) {
        return 0;
    } else {
        return parseInt(document.getElementById(`${symbolGroup}-${symbolLevel}-total-exp`).dataset.totalExp);
    }
}

function getSymbolExpTnl(symbolGroup, symbolLevel) {
    if(symbolLevel >= MAX_SYMBOL_LEVEL[symbolGroup]) {
        return -1;
    } else {
        return parseInt(document.getElementById(`${symbolGroup}-${symbolLevel}-exp-tnl`).dataset.rawExpTnl);
    }
}

// Retrieves current patch values
function getSymbolTotalCost(symbolId, symbolLevel) {
    if(symbolLevel === 0) {
        return 0;
    } else {
        return parseInt(document.getElementById(`symbol-${symbolId}-level-${symbolLevel}-total-cost`).dataset.rawTotalCost);
    }
}

// Retrieves DESTINY patch values
// This function should no longer be used after DESTINY patch arrives
function getSymbolNewTotalCost(symbolId, symbolLevel) {
    if(symbolLevel === 0) {
        return 0;
    } else {
        return parseInt(document.getElementById(`symbol-${symbolId}-level-${symbolLevel}-total-cost`).dataset.rawNewTotalCost);
    }
}