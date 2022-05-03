function loadDailiesCalcListeners() {
    toggleDailiesBtnListener();
    dailiesCalcCurrLevelInputListener();
    dailiesCalcCurrExpPercentInputListener();
    dailiesCalcCurrExpRawInputListener();
    //dailiesCalcNewExpBtnListener();
}

function toggleDailiesBtnListener() {
    let allDailiesElems = document.querySelectorAll(".calc-daily-quest");

    allDailiesElems.forEach(elem => {
        elem.addEventListener("click", () => {
            if(elem.classList.contains("active")) {
                elem.classList.remove("active");
                elem.querySelector(".selected-daily").classList.add("d-none");
            } else {   
                elem.classList.add("active");
                elem.querySelector(".selected-daily").classList.remove("d-none");
            }
        })
    })
}

/****************
 * 
 * Dailies Calculator input field change listener and validation
 * 
 * **************/
function dailiesCalcCurrLevelInputListener() {
    let elemIds = {
        charLevelInputId: "start-calc-dailies-char-level",
        currExpPercentInputId: "start-calc-dailies-char-exp-percent",
        currExpRawInputId: "start-calc-dailies-char-exp-raw",
    };
    validateCurrLevelInput(elemIds);
}

function dailiesCalcCurrExpPercentInputListener() {
    let elemIds = {
        charLevelInputId: "start-calc-dailies-char-level",
        currExpPercentInputId: "start-calc-dailies-char-exp-percent",
        currExpRawInputId: "start-calc-dailies-char-exp-raw",
        calcBtnId: "btn-calc-dailies-exp-result",
        currExpPercentErrorMsgId: "calc-dailies-exp-percent-input-error",
    };
    validateCurrExpPercentInput(elemIds);
}

function dailiesCalcCurrExpRawInputListener() {
    let elemIds = {
        charLevelInputId: "start-calc-dailies-char-level",
        currExpPercentInputId: "start-calc-dailies-char-exp-percent",
        currExpRawInputId: "start-calc-dailies-char-exp-raw",
        calcBtnId: "btn-calc-dailies-exp-result",
        currExpRawErrorMsgId: "calc-dailies-exp-raw-input-error",
    };
    validateCurrExpRawInput(elemIds);
}

/****************
 * 
 * Dailies Calculator execute calculation
 * 
 * **************/
function dailiesCalcNewExpBtnListener() {
    let calcExpBtn = document.getElementById("btn-calc-dailies-exp-result");

    calcExpBtn.addEventListener("click", () => {
        let currLevel = parseInt(document.getElementById("start-calc-dailies-char-level").value);
        let currExp = parseInt(document.getElementById("start-calc-dailies-char-exp-raw").value);
        /*let allAddedPotions = document.querySelectorAll(".single-potion-add");

        allAddedPotions.forEach(potion => {
            let potionType = potion.dataset.potionType;
            let numPotionsUsed = potion.dataset.qty;

            [currLevel, currExp] = calcDailiesNewExp(currLevel, currExp, potionType, numPotionsUsed);
        })*/

        document.getElementById("end-calc-dailies-char-level").value = currLevel;
        document.getElementById("end-calc-dailies-char-exp-percent").value = `${(currExp / getExpTNL(currLevel) * 100).toFixed(3)} %`;
        document.getElementById("end-calc-dailies-char-exp-raw").value = `${currExp.toLocaleString("en-SG")} EXP`;
    })
}

function calcDailiesNewExp() {
    let charLevel = getCharLevel();
    let expTNL = getExpTNL(charLevel);

    let eventExpTableCell = document.getElementById(`${charLevel}-event-exp`);
    let eventExpPerRun = -1;

    if(eventExpTableCell) {
        eventExpPerRun = parseInt(eventExpTableCell.dataset.rawExp);
    }     

    if(eventExpPerRun !== -1) {
        let eventTotalPercentExp = (eventExpPerRun * 2 / expTNL * 100).toFixed(3);
        document.getElementById("event-per-day-raw-exp").textContent = (eventExpPerRun * 2).toLocaleString('en-SG') + " EXP";
        document.getElementById("event-per-day-percent-exp").textContent = eventTotalPercentExp + "%";
    } else {
        document.getElementById("event-per-day-raw-exp").textContent = "-";
        document.getElementById("event-per-day-percent-exp").textContent = "-";
    }
}