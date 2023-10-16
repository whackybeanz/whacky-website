/***********************
 * 
 * Basic getters
 * 
 * *********************/
function getCharLevel() {
    return parseInt(document.getElementById("char-level").value);
}

function getExpTNL(charLevel, patchType) {
    if(patchType === "newage") {
        return NEW_AGE_TABLE[charLevel-210];
    } else {
        return parseInt(document.getElementById(`${charLevel}-exp-tnl`).dataset.rawExpTnl);
    }
}

/***********************
 * 
 * Core loading functions - Creates EXP table for information retrieval
 * 
 * *********************/
function loadEXPTableHistory() {
    EXP_TABLE_HISTORY.forEach(history => {
        document
                .getElementById(`exp-table-history`)
                .insertAdjacentHTML('beforeend', `<tr>
                    <th scope="row" class="align-middle text-center">${history.name}</th>
                    <td class="py-2 px-2">${history.details.join("<br/>")}</td>
                    <td class="align-middle text-center"><a class="text-custom" href="${history.url}" target="_blank">Click me!</a></td>
                </tr>`);
    })
}

function loadCurrentEXPTable() {
    let prevEXP = -1;

    CURR_EXP_TABLE.forEach((levelRange, index) => {
        let html = `<div class="w-100 col-12 col-sm-6 col-xl-4 d-flex flex-column align-items-center mb-4"><h2 class="font-subsubheader font-weight-bold text-underline mb-2">${levelRange.name}</h2>

        <table class='font-table size-350 table table-sm table-bordered table-hover'>
            <thead>
                <tr>
                    <th scope="col" class="text-center">Level</th>
                    <th scope="col" class="text-center">EXP To Next Level</th>
                    <th scope="col" class="text-center">% increase</th>
                </tr>
            </thead>
            <tbody id='exp-table-${index}'>
            </tbody>
        </table></div>`;

        document.getElementById("curr-exp-tables").insertAdjacentHTML('beforeend', html);

        levelRange.values.forEach((rawEXP, arrayNum) => {
            document
                .getElementById(`exp-table-${index}`)
                .insertAdjacentHTML('beforeend', `<tr>
                    <th scope="row" class="text-center">${levelRange.startLevel+arrayNum} > ${levelRange.startLevel+arrayNum+1}</th>
                    <td class="text-center" id="${levelRange.startLevel+arrayNum}-exp-tnl" data-raw-exp-tnl="${rawEXP}">${rawEXP.toLocaleString('en-SG')}</td>
                    <td class="text-center">${prevEXP === -1 ? "-" : (rawEXP / prevEXP * 100 - 100).toFixed(1).replace(/[.,]0$/, "") + "%" }</td>
                </tr>`);

            prevEXP = rawEXP;
        })
    })
}

/***********************
 * 
 * Validation functions
 * 
 * *********************/
function validateDateInput(elemIds) {
    let startDateInput = document.getElementById(elemIds.startDateId);
    let endDateInput = document.getElementById(elemIds.endDateId);

    [startDateInput, endDateInput].forEach(input => {
        input.addEventListener("change", () => {
            let startDate = Date.parse(new Date(startDateInput.value));
            let endDate = Date.parse(new Date(endDateInput.value))

            if(startDate > endDate) {
                document.getElementById(elemIds.dateErrorMsgId).classList.remove("d-none");
                document.getElementById(elemIds.dateErrorMsgId).classList.add("active");
                document.getElementById(elemIds.dateErrorMsgId).textContent = "Start date cannot be later than end date.";
            } else {
                let totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);

                if(totalDays > 1825) {
                    document.getElementById(elemIds.dateErrorMsgId).classList.remove("d-none");
                    document.getElementById(elemIds.dateErrorMsgId).classList.add("active");
                    document.getElementById(elemIds.dateErrorMsgId).textContent = "You can only calculate up to 1,825 days (5 years) of dailies. Please adjust the date range.";
                } else {
                    document.getElementById(elemIds.dateErrorMsgId).classList.add("d-none");
                    document.getElementById(elemIds.dateErrorMsgId).classList.remove("active");
                }
            }

            checkAnyActiveErrors(elemIds.parentContainerId, elemIds.calcBtnId);
        })
    })
}

function validateCurrLevelInput(elemIds) {
    let levelInput = document.getElementById(elemIds.charLevelInputId);

    levelInput.addEventListener("change", () => {
        let levelInputValue = parseInt(levelInput.value)
        let currExpPercentInput = document.getElementById(elemIds.currExpPercentInputId);
        let currExpRawInput = document.getElementById(elemIds.currExpRawInputId);

        currExpPercentInput.value = 0.000;
        currExpRawInput.value = 0;
        document.getElementById(elemIds.currExpRawErrorMsgId).classList.add("d-none");
        document.getElementById(elemIds.currExpRawErrorMsgId).classList.remove("active");

        if(isNaN(levelInputValue) || levelInputValue < 200) {
            levelInput.value = 200;
        }

        if(levelInputValue > 299) {
            levelInput.value = 299;
        }

        checkAnyActiveErrors(elemIds.parentContainerId, elemIds.calcBtnId);
    })
}

function validateCurrExpPercentInput(elemIds){
    let expPercentInput = document.getElementById(elemIds.currExpPercentInputId);

    expPercentInput.addEventListener("change", () => {
        let expRawInput = document.getElementById(elemIds.currExpRawInputId);
        let levelInputValue = parseInt(document.getElementById(elemIds.charLevelInputId).value);
        let expPercentInputValue = parseFloat(expPercentInput.value);

        if(isNaN(expPercentInputValue) || expPercentInputValue < 0) {
            expPercentInput.value = 0.000;
            expRawInput.value = 0;
        }

        if(expPercentInputValue > 100) {
            expPercentInput.value = 100.000;
            expRawInput.value = parseInt(document.getElementById(`${levelInputValue}-exp-tnl`).dataset.rawExpTnl).toLocaleString("en-SG");
        } else if(expPercentInputValue > 0) {
            expRawInput.value = parseInt(document.getElementById(`${levelInputValue}-exp-tnl`).dataset.rawExpTnl * expPercentInputValue / 100.00).toLocaleString("en-SG");
        }

        document.getElementById(elemIds.currExpRawErrorMsgId).classList.add("d-none");
        document.getElementById(elemIds.currExpRawErrorMsgId).classList.remove("active");

        checkAnyActiveErrors(elemIds.parentContainerId, elemIds.calcBtnId);
    })
}

function validateCurrExpRawInput(elemIds) {
    let expRawInput = document.getElementById(elemIds.currExpRawInputId);

    expRawInput.addEventListener("change", () => {
        let expPercentInput = document.getElementById(elemIds.currExpPercentInputId);
        let levelInputValue = parseInt(document.getElementById(elemIds.charLevelInputId).value);
        let expRawInputStr = expRawInput.value.match(/\d/g);
        let expRawInputValue;

        if(!expRawInputStr) {
            expRawInputValue = 0;
            expRawInput.value = 0;
            expPercentInput.value = 0.000;
        } else {
            expRawInputValue = parseInt(expRawInputStr.join(""));

            if(expRawInputValue === 0) {
                expRawInput.value = 0;
                expPercentInput.value = 0.000;
            }
        }

        let expTnl = document.getElementById(`${levelInputValue}-exp-tnl`).dataset.rawExpTnl;

        if(expRawInputValue > expTnl) {
            document.getElementById(elemIds.currExpRawErrorMsgId).classList.remove("d-none");
            document.getElementById(elemIds.currExpRawErrorMsgId).classList.add("active");
            document.getElementById(elemIds.errorMaxExpTnlId).textContent = parseInt(expTnl).toLocaleString("en-SG");
        } else if(expRawInputValue >= 0) {            
            document.getElementById(elemIds.currExpRawErrorMsgId).classList.add("d-none");
            document.getElementById(elemIds.currExpRawErrorMsgId).classList.remove("active");
            expPercentInput.value = (expRawInputValue / getExpTNL(levelInputValue) * 100).toFixed(3);
            expRawInput.value = expRawInputValue.toLocaleString("en-SG");
        }

        checkAnyActiveErrors(elemIds.parentContainerId, elemIds.calcBtnId);
    })
}

function checkAnyActiveErrors(parentContainerId, btnId) {
    let parentContainer = document.getElementById(parentContainerId);
    let activeErrors = parentContainer.querySelectorAll(".text-danger.active");

    if(activeErrors.length > 0) {
        document.getElementById(btnId).classList.add("d-none");
    } else {
        document.getElementById(btnId).classList.remove("d-none");
    }
}