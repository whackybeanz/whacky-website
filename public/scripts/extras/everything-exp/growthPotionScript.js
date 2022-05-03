// On page load, generate all tables in EXP Tables section for the respective growth potions
// Make Extreme Growth Potion be the first displayed table on page load always
function loadGrowthPotionsEXPTable() {
    let divToAppend = document.getElementById("potion-exp-table-details");

    Object.keys(POTION_EXP_TABLE).forEach(potion => {
        document
            .getElementById("potion-exp-table-details")
            .insertAdjacentHTML('beforeend', `<div class="single-potion-exp-table-div w-100 ${potion === "extreme" ? "d-flex" : "d-none"} flex-wrap justify-content-center" id="potion-${potion}-div"></div>`);

        addExpTable(potion, POTION_EXP_TABLE[potion].minLevel, POTION_EXP_TABLE[potion].maxLevel);
    })
}

function loadPotionListeners() {
    potionCalcInputListener();
    potionCalcAddListener();
    potionCalcRemoveAllListener();
    potionCalcCurrLevelInputListener();
    potionCalcCurrExpPercentInputListener();
    potionCalcCurrExpRawInputListener();
    calcNewExpBtnListener();
    potionTableSelectListener();
}

/****************
 * 
 * Potion Calculator quantity verification / addition
 * 
 * **************/
function potionCalcInputListener() {
    let numPotionsInput = document.getElementById("potion-calc-qty-input");

    numPotionsInput.addEventListener("change", () => {
        let numPotions = parseInt(numPotionsInput.value);

        if(isNaN(numPotions) || numPotions < 1) {
            numPotionsInput.value = 1;
        }

        if(numPotions > 100) {
            numPotionsInput.value = 100;
        }
    })
}

function potionCalcAddListener() {
    let addPotionToCalcBtn = document.getElementById("btn-add-potion-calc");

    addPotionToCalcBtn.addEventListener("click", () => {
        let potionId = document.getElementById("potion-exp-calc-select").value;
        let quantity = parseInt(document.getElementById("potion-calc-qty-input").value);

        if(isValidAddQuantity(potionId, quantity)) {
            document.getElementById("no-potion-added-msg").classList.add("d-none");
            document.getElementById("btn-calc-pot-result").classList.remove("d-none");
            document.getElementById("btn-remove-all-potions").classList.remove("d-none");
            addPotionToCalc(potionId, quantity);
        }
    })
}

function isValidAddQuantity(potionId, quantity) {
    const MAX_ALLOWED_POTION_QTY = 100;
    let currAddedPotions = document.getElementById("potion-exp-calc-table").querySelectorAll(`.add-potion-${potionId}`);
    let currAddedPotionsQty = 0;
    let statusMessage = document.getElementById('add-potion-calc-status');

    if(currAddedPotions !== null) {
        currAddedPotions.forEach(potion => {
            currAddedPotionsQty += parseInt(potion.dataset.qty);
        })
    }

    if(currAddedPotionsQty + quantity > MAX_ALLOWED_POTION_QTY) {
        statusMessage.classList.remove("d-none");
        statusMessage.innerHTML = `Failed to add - will exceed max of 100<br/>(Current added total: ${currAddedPotionsQty} / Attempted to add: ${quantity} / Available quantity: ${MAX_ALLOWED_POTION_QTY - currAddedPotionsQty})`;

        window.setTimeout(() => {
            statusMessage.classList.add("d-none");
        }, 5000)
        return false;
    } else {
        statusMessage.classList.add("d-none");
        return true;
    }
}

function addPotionToCalc(potionId, quantity) {
    let potionName = POTION_EXP_TABLE[potionId].name;
    let tableDisplay = document.getElementById("potion-exp-calc-table");

    let html = "";

    if(tableDisplay.querySelector(".single-potion-add")) {
        html += `<div class="font-subsubheader mx-2">&#187</div>`;
    }

    html += `<div class="single-potion-add add-potion-${potionId} font-small text-center my-1" data-potion-type="${potionId}" data-qty="${quantity}">
            <span class="font-weight-bold">${potionName}</span><br/>x${quantity}
        </div>`

    tableDisplay.insertAdjacentHTML('beforeend', html);
}

function potionCalcRemoveAllListener() {
    let removeAllPotionBtn = document.getElementById("btn-remove-all-potions");

    removeAllPotionBtn.addEventListener("click", () => {
        document.getElementById("potion-exp-calc-table").innerHTML = "";
        document.getElementById("no-potion-added-msg").classList.remove("d-none");
        document.getElementById("btn-calc-pot-result").classList.add("d-none");
        removeAllPotionBtn.classList.add("d-none");
    })
}

/****************
 * 
 * Potion Calculator input field change listener and validation
 * 
 * **************/
function potionCalcCurrLevelInputListener() {
    let elemIds = {
        parentContainerId: "potion-exp-calc",
        charLevelInputId: "start-potion-char-level",
        currExpPercentInputId: "start-potion-char-exp-percent",
        currExpRawInputId: "start-potion-char-exp-raw",
        calcBtnId: "btn-calc-pot-result",
    };
    validateCurrLevelInput(elemIds);
}

function potionCalcCurrExpPercentInputListener() {
    let elemIds = {
        parentContainerId: "potion-exp-calc",
        charLevelInputId: "start-potion-char-level",
        currExpPercentInputId: "start-potion-char-exp-percent",
        currExpRawInputId: "start-potion-char-exp-raw",
        calcBtnId: "btn-calc-pot-result",
        currExpPercentErrorMsgId: "exp-percent-input-error",
    };
    validateCurrExpPercentInput(elemIds);
}

function potionCalcCurrExpRawInputListener() {
    let elemIds = {
        parentContainerId: "potion-exp-calc",
        charLevelInputId: "start-potion-char-level",
        currExpPercentInputId: "start-potion-char-exp-percent",
        currExpRawInputId: "start-potion-char-exp-raw",
        calcBtnId: "btn-calc-pot-result",
        currExpRawErrorMsgId: "exp-raw-input-error",
    };
    validateCurrExpRawInput(elemIds);
}

/****************
 * 
 * Potion Calculator execute calculation
 * 
 * **************/
function calcNewExpBtnListener() {
    let calcExpBtn = document.getElementById("btn-calc-pot-result");

    calcExpBtn.addEventListener("click", () => {
        let currLevel = parseInt(document.getElementById("start-potion-char-level").value);
        let currExp = parseInt(document.getElementById("start-potion-char-exp-raw").value);
        let allAddedPotions = document.querySelectorAll(".single-potion-add");

        allAddedPotions.forEach(potion => {
            let potionType = potion.dataset.potionType;
            let numPotionsUsed = potion.dataset.qty;

            [currLevel, currExp] = calcPotionsNewExp(currLevel, currExp, potionType, numPotionsUsed);
        })

        document.getElementById("end-potion-char-level").value = currLevel;
        document.getElementById("end-potion-char-exp-percent").value = `${(currExp / getExpTNL(currLevel) * 100).toFixed(3)} %`;
        document.getElementById("end-potion-char-exp-raw").value = `${currExp.toLocaleString("en-SG")} EXP`;
    })
}

function calcPotionsNewExp(currLevel, currExp, potionType, numPotionsUsed) {
    let newLevel = currLevel;
    let newExp = currExp;

    for(let i = 0; i < numPotionsUsed; i++) {
        let expTNL = getExpTNL(newLevel);
        let expFromPotion = parseInt(document.getElementById(`potion-${potionType}-level-${newLevel}-exp`).dataset.potionRawExp);

        if(newExp + expFromPotion >= expTNL) {
            newLevel++;
            newExp = newExp + expFromPotion - expTNL;
        } else {
            newExp += expFromPotion;
        }
    }

    return [newLevel, newExp];
}

/****************
 * 
 * See expTableDetails for all "optimal" min/max levels for the respective potions
 * For each potion, split into two tables -- Level 200 to 250 / Level 250 to 300
 * For each table, first populate table headers
 * For each table row, display the % gain (if not 100%) to 3 d.p. when the potion is used, and also calculate the raw EXP gain
 * If gain is 100%, highlight row in blue text
 * 
 * **************/
function addExpTable(potionType, minLevel, maxLevel) {
    let levelRange = [
        { name: "Level 200 to 250", startLevel: 200, endLevel: 250 },
        { name: "Level 250 to 300", startLevel: 250, endLevel: 300 },
    ]

    levelRange.forEach((levelRange, index) => {
        let html = `<div class="w-100 col-12 col-sm-6 col-xl-4 d-flex flex-column align-items-center mb-4"><h2 class="font-subsubheader font-weight-bold text-underline mb-2">${levelRange.name}</h2>

        <table class='font-table size-350 table table-sm table-bordered table-hover' id='potion-${potionType}-table-${index}'>
                <thead>
                    <tr>
                        <th scope="col" class="text-center">Level</th>
                        <th scope="col" class="text-center">% From Potion</th>
                    </tr>
                </thead>
                <tbody id='potion-${potionType}-table-${index}-details'>
                </tbody>
            </table></div>`;

        document.getElementById(`potion-${potionType}-div`).insertAdjacentHTML('beforeend', html);

        let maxLevelExpTNL = getExpTNL(maxLevel);

        for(let i = levelRange.startLevel; i < levelRange.endLevel; i++) {
            let percentGain = 100.000;
            let rawExpGain;
            let expTNL = getExpTNL(i);

            if(i > maxLevel) {
                percentGain = maxLevelExpTNL / expTNL*100;
                rawExpGain = maxLevelExpTNL;
            } else {
                rawExpGain = expTNL;
            }

            document
                .getElementById(`potion-${potionType}-table-${index}-details`)
                .insertAdjacentHTML('beforeend', `<tr>
                    <th scope="row" class="text-center">${i} > ${i+1}</th>
                    <td scope="row" class="text-center ${percentGain === 100.000 ? "text-custom font-weight-bold" : "" }" data-potion-raw-exp="${rawExpGain}" id="potion-${potionType}-level-${i}-exp">${percentGain.toFixed(3) + "%"}</td>
                </tr>`);
        }
    })
}

// Toggle view of potion EXP chart whenever select option is changed
function potionTableSelectListener() {
    const potionExpTableSelect = document.getElementById("potion-exp-table-select");

    potionExpTableSelect.addEventListener("change", function(event) {
        let currActiveTable = document.querySelector(".single-potion-exp-table-div.d-flex");

        if(currActiveTable.id !== this.value) {
            if(this.value === "extreme") {
                document.getElementById('egp-chart-msg').classList.remove('d-none');
            } else {
                document.getElementById('egp-chart-msg').classList.add('d-none');
            }

            currActiveTable.classList.remove("d-flex");
            currActiveTable.classList.add("d-none");

            document.getElementById(`potion-${this.value}-div`).classList.add("d-flex");
            document.getElementById(`potion-${this.value}-div`).classList.remove("d-none");
        }
    })
}

// Updates potion EXP values in Summary section
// Erase current table and rebuild table rows
function updatePerPotionEXPPercent() {
    let charLevel = getCharLevel();
    let tableToPopulate = document.getElementById("per-potion-exp-table");

    tableToPopulate.innerHTML = "";

    Object.keys(POTION_EXP_TABLE).forEach(potion => {
        let currPotion = POTION_EXP_TABLE[potion];

        let potionTableCell = document.getElementById(`potion-${potion}-level-${charLevel}-exp`);
        let potionValue = 0;
        let expTNL = 0;
        let [displayedValue, displayedPercent] = ["-", "-"];

        if(potionTableCell) {
            potionValue = parseInt(potionTableCell.dataset.potionRawExp);
            expTNL = getExpTNL(charLevel);
            displayedValue = potionValue.toLocaleString('en-SG') + " EXP";
            displayedPercent = (potionValue / expTNL * 100).toFixed(3) + "%";
        }

        if(potion === "extreme" && charLevel >= 141 && charLevel < 200) {
            tableToPopulate
                .insertAdjacentHTML('beforeend', `<tr>
                    <th scope="col" class="align-middle">${currPotion.name} (Level ${currPotion.minLevel}~${currPotion.maxLevel})</th>
                    <td class="text-center">Amount varies - see EXP Tables section below</td>
                </tr>`);
        } else {
            tableToPopulate
                .insertAdjacentHTML('beforeend', `<tr>
                    <th scope="col" class="align-middle">${currPotion.name} (Level ${currPotion.minLevel}~${currPotion.maxLevel})</th>
                    <td class="text-center">${displayedValue} / <span class="text-custom font-weight-bold">${displayedPercent}</span></td>
                </tr>`);
        }
    })
}