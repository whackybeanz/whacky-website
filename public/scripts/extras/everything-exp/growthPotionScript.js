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
    let allNumPotionsInput = document.querySelectorAll(".single-potion-add-input");

    allNumPotionsInput.forEach(input => {
        input.addEventListener("change", () => {
            let numPotions = parseInt(input.value);

            if(isNaN(numPotions) || numPotions < 0) {
                input.value = 0;
            }

            if(numPotions > 1000) {
                input.value = 1000;
            }
        })
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
        currExpRawErrorMsgId: "exp-raw-input-error",
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
        currExpRawErrorMsgId: "exp-raw-input-error",
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
        errorMaxExpTnlId: "potion-calc-err-max-exp-tnl",
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
        let currExp = parseInt(document.getElementById("start-potion-char-exp-raw").value.match(/\d/g).join(""));
        let allPotionInputs = Array.from(document.querySelectorAll(".single-potion-add-input")).filter(input => input.value > 0);
        let potionSummary = document.getElementById("potion-summary");
        potionSummary.textContent = "";

        if(allPotionInputs.length > 0) {
            document.getElementById("calc-start-potion-level").textContent = currLevel;
            document.getElementById("calc-start-potion-percent").textContent = `${(currExp / getExpTNL(currLevel) * 100).toFixed(3)} %`;
            document.getElementById("calc-start-potion-raw").textContent = `${currExp.toLocaleString("en-SG")} EXP`;

            allPotionInputs.forEach(input => {
                let potionType = input.dataset.potionType;
                let numPotionsUsed = parseInt(input.value);

                [currLevel, currExp] = calcPotionsNewExp(currLevel, currExp, potionType, numPotionsUsed);

                potionSummary.insertAdjacentHTML('beforeend', `<div class="d-flex align-items-center"><img class="item-square mr-2" src='${input.dataset.imgSrc}'> ${numPotionsUsed} x ${input.dataset.potionName}</div>`);
            })

            document.getElementById("end-potion-char-level").textContent = currLevel;
            document.getElementById("end-potion-char-exp-percent").textContent = `${(currExp / getExpTNL(currLevel) * 100).toFixed(3)} %`;
            document.getElementById("end-potion-char-exp-raw").textContent = `${currExp.toLocaleString("en-SG")} EXP`;

            // Display div
            $("#potion-summary-modal").modal();
        }
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
 * If gain is 100%, highlight row in custom color
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
    let allPotElems = Array.from(document.querySelectorAll(".per-potion-exp-div"));
    let allPotKeys = Array.from(allPotElems).map(elem => elem.dataset.potType);

    for(let elem of allPotElems) {
        let potType = elem.dataset.potType;
        let potionTableCell = document.getElementById(`potion-${potType}-level-${charLevel}-exp`);
        let potionValue = 0;
        let expTNL = 0;
        let [displayedValue, displayedPercent] = ["-", "-"];

        if(potionTableCell) {
            potionValue = parseInt(potionTableCell.dataset.potionRawExp);
            expTNL = getExpTNL(charLevel);
            displayedValue = potionValue.toLocaleString('en-SG') + " EXP";
            displayedPercent = (potionValue / expTNL * 100).toFixed(3) + "%";
        }

        if(potType === "extreme" && charLevel >= 141 && charLevel < 200) {
            elem.querySelector(".pot-raw-exp").textContent = "Amount varies";
            elem.querySelector(".pot-percent-exp").textContent = "See EXP Tables section below";
        } else {
            elem.querySelector(".pot-raw-exp").textContent = displayedValue;
            elem.querySelector(".pot-percent-exp").textContent = displayedPercent;
        }
    }
}