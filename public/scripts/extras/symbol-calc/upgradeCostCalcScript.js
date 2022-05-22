function loadCalcTabData() {
    loadSavedData();

    // Symbol Progress Tracker
    progressAllSymbolListener();
    calcDefaultSymbolUpgradeCosts();
    symbolSelectListener();
    symbolProgressListener();
    symbolUpgradeListener();

    // EXP Overflow
    expOverflowInputListeners();

    // Catalyst
    catalystStartLevelInputListener();
    catalystStartExpInputListener();
}

function loadSavedData() {
    let savedData = JSON.parse(localStorage.getItem("symbolCalc"));

    if(savedData !== null) {
        Object.keys(savedData).forEach(symbolId => {
            let symbolGroup = (SYMBOL_COST_TABLE.filter(symbolData => symbolData.id === symbolId))[0].symbolGroup;
            let symbolData = getUpgradeInputData(symbolGroup, symbolId);
            
            symbolData.currLevelElem.value = savedData[symbolId].currLevel;
            symbolData.currCountElem.value = savedData[symbolId].currCount;
            symbolData.endLevelElem.value = savedData[symbolId].endLevel;
            symbolData.endCountElem.value = savedData[symbolId].endCount;
            symbolData.symbolsPerDayElem.value = savedData[symbolId].symbolsPerDay;

            toggleProgressBtnDisplay(symbolData);
            toggleUpgradeBtnDisplay(symbolData);
            updateSymbolLevelDisplay(symbolData);
        })
    }
}

// Retrieves all input/output data contained within a singular symbol
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

function progressAllSymbolListener() {
    // On click, hide button and display cooldown message + progress non-maxed symbols
    let progressAllBtn = document.getElementById("btn-progress-all");
    let refreshCdMessage = document.getElementById("refresh-cd");

    progressAllBtn.addEventListener("click", () => {
        progressAllBtn.classList.add("d-none");
        refreshCdMessage.classList.remove("d-none");

        window.setTimeout(() => {
            progressAllBtn.classList.remove("d-none");
            refreshCdMessage.classList.add("d-none");
        }, 3000)

        let allSymbols = document.querySelectorAll(".single-symbol-div");

        allSymbols.forEach(symbol => {
            progressSymbol(symbol.dataset.symbolGroup, symbol.dataset.symbolId);
        })
    })
}

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

            /*if(symbolData.symbolGroup === "arc") {
                document.getElementById(`${symbolData.symbolId}-total-new-meso-req`).textContent = "??";                    
            }*/
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

function symbolProgressListener() {
    let allProgressBtns = document.querySelectorAll(".single-progress-btn");

    allProgressBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            progressSymbol(btn.dataset.symbolGroup, btn.dataset.symbolId);
        })
    })
}

function progressSymbol(symbolGroup, symbolId) {
    let symbolData = getUpgradeInputData(symbolGroup, symbolId);

    if(symbolData.currLevelElem.value < MAX_SYMBOL_LEVEL[symbolData.symbolGroup]) {
        symbolData.currCountElem.value = parseInt(symbolData.currCountElem.value) + parseInt(symbolData.symbolsPerDayElem.value);

        toggleSymbolsProgressedDisplay(symbolData);
        toggleProgressBtnDisplay(symbolData);
        toggleUpgradeBtnDisplay(symbolData);
        calcSymbolUpgradeCosts(symbolData);
        saveSymbolCalcInputs(symbolData);
    }
}

function symbolUpgradeListener() {
    let allUpgradeBtns = document.querySelectorAll(".single-upgrade-btn");

    allUpgradeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            let symbolData = getUpgradeInputData(btn.dataset.symbolGroup, btn.dataset.symbolId)
            let currLevel = parseInt(symbolData.currLevelElem.value);
            let currCount = parseInt(symbolData.currCountElem.value);
            let symbolsReqTnl = getSymbolExpTnl(symbolData.symbolGroup, currLevel);
            let newLevel = currLevel + 1;

            symbolData.currLevelElem.value = newLevel
            symbolData.currCountElem.value = currCount - symbolsReqTnl;

            toggleUpgradeBtnDisplay(symbolData);
            calcSymbolUpgradeCosts(symbolData);
            updateSymbolLevelDisplay(symbolData);
            saveSymbolCalcInputs(symbolData);
        });
    })
}

function updateSymbolLevelDisplay(symbolData) {
    if(parseInt(symbolData.currLevelElem.value) === MAX_SYMBOL_LEVEL[symbolData.symbolGroup]) {
        symbolData.currCountElem.value = 0;
        document.getElementById(`${symbolData.symbolId}-curr-level-display`).textContent = `MAX`;
    } else {
        document.getElementById(`${symbolData.symbolId}-curr-level-display`).textContent = `Lv. ${symbolData.currLevelElem.value}`; 
    }
}

function saveSymbolCalcInputs(symbolData) {
    let savedData = JSON.parse(localStorage.getItem("symbolCalc"));

    let toSave = {
        currLevel: parseInt(symbolData.currLevelElem.value),
        currCount: parseInt(symbolData.currCountElem.value),
        endLevel: parseInt(symbolData.endLevelElem.value),
        endCount: parseInt(symbolData.endCountElem.value),
        symbolsPerDay: parseInt(symbolData.symbolsPerDayElem.value),
    };

    if(savedData === null) {
        savedData = {};
    } 
    savedData[`${symbolData.symbolId}`] = toSave;

    localStorage.setItem("symbolCalc", JSON.stringify(savedData));
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

    if(currLevel < 1 || currLevel > 20 || currLevel > endLevel || endLevel < 1 || endLevel > MAX_SYMBOL_LEVEL[symbolData.symbolGroup]) {
        return false;
    }

    if(currLevel === endLevel && currCount > endCount && currLevel !== 20) {
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
                if(input.id.includes("curr-level")) {
                    updateSymbolLevelDisplay(symbolData);
                }

                if(input.id.includes("curr-level") || input.id.includes("curr-symbol-count")) {
                    toggleProgressBtnDisplay(symbolData);
                    toggleUpgradeBtnDisplay(symbolData);
                }

                saveSymbolCalcInputs(symbolData);
                calcSymbolUpgradeCosts(symbolData);
            } else {
                symbolData.totalMesoReqElem.textContent = "??";
                symbolData.totalSymbolReqElem.textContent = "??";
                symbolData.totalDaysReqElem.textContent = "??";
                document.getElementById(`${symbolData.symbolId}-date-complete`).textContent = "??";

                /*if(symbolData.symbolGroup === "arc") {
                    document.getElementById(`${symbolData.symbolId}-total-new-meso-req`).textContent = "??";                    
                }*/
            }
        })
    })
}

function toggleSymbolsProgressedDisplay(symbolData) {
    document.getElementById(`symbol-btn-${symbolData.symbolId}`).classList.add("btn-outline-custom");

    window.setTimeout(() => {
        document.getElementById(`symbol-btn-${symbolData.symbolId}`).classList.remove("btn-outline-custom");
    }, 3000)
}

function toggleProgressBtnDisplay(symbolData) {
    let currTotalSymbols = getSymbolTotalExp(symbolData.symbolGroup, parseInt(symbolData.currLevelElem.value)-1) + parseInt(symbolData.currCountElem.value);
    let maxTotalSymbols = getSymbolTotalExp(symbolData.symbolGroup, MAX_SYMBOL_LEVEL[symbolData.symbolGroup]-1);

    if(currTotalSymbols >= maxTotalSymbols) {
        document.getElementById(`${symbolData.symbolId}-progress-btn`).classList.add("d-none");
    } else {
        document.getElementById(`${symbolData.symbolId}-progress-btn`).classList.remove("d-none");
    }
}

function toggleUpgradeBtnDisplay(symbolData) {
    let symbolTnl = getSymbolExpTnl(symbolData.symbolGroup, parseInt(symbolData.currLevelElem.value));

    if(parseInt(symbolData.currCountElem.value) >= symbolTnl && parseInt(symbolData.currLevelElem.value) < MAX_SYMBOL_LEVEL[symbolData.symbolGroup]) {
        document.getElementById(`${symbolData.symbolId}-upgrade-btn`).classList.remove("d-none");
        document.getElementById(`symbol-btn-${symbolData.symbolId}`).querySelector(".single-symbol-upgrade-available").classList.remove("d-none");
    } else {
        document.getElementById(`${symbolData.symbolId}-upgrade-btn`).classList.add("d-none");
        document.getElementById(`symbol-btn-${symbolData.symbolId}`).querySelector(".single-symbol-upgrade-available").classList.add("d-none");
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
        totalMesosReq = 0;

        /*if(symbolGroup === "arc") {
            let totalNewMesoReq = 0;
            document.getElementById(`${symbolId}-total-new-meso-req`).textContent = totalNewMesoReq.toLocaleString('en-SG');
        }*/

        totalSymbolsReq = endCount - currCount;
        totalDaysReq = Math.abs(Math.ceil(totalSymbolsReq / symbolsPerDay));
    } else {
        // Calculate meso cost
        totalMesosReq = getSymbolTotalCost(symbolId, endLevel-1) - getSymbolTotalCost(symbolId, currLevel-1);

        /*if(symbolGroup === "arc") {
            let totalNewMesoReq = getSymbolNewTotalCost(symbolId, endLevel-1) - getSymbolNewTotalCost(symbolId, currLevel-1);
            document.getElementById(`${symbolId}-total-new-meso-req`).textContent = totalNewMesoReq.toLocaleString('en-SG');
        }*/

        // Calculate symbols cost
        totalSymbolsReq = getSymbolTotalExp(symbolGroup, endLevel-1) - getSymbolTotalExp(symbolGroup, currLevel-1) + endCount - currCount;

        // Calculate number of days needed
        totalDaysReq = Math.abs(Math.ceil(totalSymbolsReq / symbolsPerDay));
    }

    if(totalSymbolsReq < 0) {
        totalSymbolsReq = 0;
    }

    document.getElementById(`${symbolId}-total-meso-req`).textContent = totalMesosReq.toLocaleString('en-SG');
    document.getElementById(`${symbolId}-total-symbols-req`).textContent = totalSymbolsReq.toLocaleString('en-SG');
    document.getElementById(`${symbolId}-total-days-req`).textContent = totalDaysReq.toLocaleString('en-SG');

    let today = Date.parse(new Date());
    let endDay = today + totalDaysReq * 24 * 60 * 60 * 1000;
    
    document.getElementById(`${symbolId}-date-complete`).textContent = new Date(endDay).toLocaleDateString('en-SG', { day: "numeric", month: "short", year: "numeric" });
}