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
    return parseInt(document.getElementById(`${symbolGroup}-${symbolLevel}-exp-tnl`).dataset.rawExpTnl);
}