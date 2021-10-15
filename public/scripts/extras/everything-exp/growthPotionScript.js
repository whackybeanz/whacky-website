function loadGrowthPotionsEXPTable() {
    let divToAppend = document.getElementById("potion-exp-table-details");

    Object.keys(POTION_EXP_TABLE).forEach(potion => {
        document
            .getElementById("potion-exp-table-details")
            .insertAdjacentHTML('beforeend', `<div class="single-potion-exp-table-div w-100 ${potion === "extreme" ? "d-flex" : "d-none"} flex-wrap justify-content-center" id="potion-${potion}-div"></div>`);

        addExpTable(potion, POTION_EXP_TABLE[potion].minLevel, POTION_EXP_TABLE[potion].maxLevel);
    })
}

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

        let maxLevelExpTNL = getExpTNL(maxLevel)

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
                    <td scope="row" class="text-center ${percentGain === 100.000 ? "text-info font-weight-bold" : "" }" data-potion-raw-exp="${rawExpGain}" id="potion-${potionType}-level-${i}-exp">${percentGain.toFixed(3) + "%"}</td>
                <tr>`);
        }
    })
}

function addPotionTableSelectListener() {
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

        tableToPopulate
            .insertAdjacentHTML('beforeend', `<tr>
                <th scope="col" class="align-middle">${currPotion.name} (Level ${currPotion.minLevel}~${currPotion.maxLevel})</th>
                <td class="text-center">${displayedValue} / <span class="text-info font-weight-bold">${displayedPercent}</span></td>
            </tr>`);
    })
}