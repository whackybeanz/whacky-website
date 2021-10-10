const patchDetails = {
    neo: {
        details: ["Released in KMS in December 2020", "Level cap raised to 300", "Level 210 to 250 EXP reductions"],
        maxLevel: 300,
    },
    rise: {
        details: ["Released in KMS in December 2020", "Level 170 to 199 EXP reductions"],
        maxLevel: 275,
    },
    glory: {
        details: ["Released in KMS in July 2019", "Level 220 to 234 EXP reductions"],
        maxLevel: 275,
    },
    black: {
        details: ["Released in KMS in June 2018", "Level 201 to 220 EXP reductions", "Level cap raised to 275"],
        maxLevel: 275,
    },
    v: {
        details: ["Released in KMS in July 2016", "Level 66 to 200 EXP reductions", "Level cap raised to 250"],
        maxLevel: 250,
    },
    bigbang: {
        details: ["Released in KMS in July 2010", "EXP reduced across all levels"],
        maxLevel: 250,
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    /*const initSelectedField = document.getElementById("exp-table-used").value;
    populateStep1Details(initSelectedField);
    addEXPTableSelectListener();
    addViewTypeBtnListeners();
    addStartCalcBtnListener();
    addViewEXPTypeListener();*/

    loadEXPTableDetails();
})

function loadEXPTableDetails() {
    loadEXPTableHistory();
    loadCurrentEXPTable();
}

function loadEXPTableHistory() {
    EXP_TABLE_HISTORY.forEach(history => {
        document
                .getElementById(`exp-table-history`)
                .insertAdjacentHTML('beforeend', `<tr>
                    <th scope="row" class="align-middle text-center">${history.name}</th>
                    <td class="py-2 px-2">${history.details.join("<br/>")}</td>
                    <td class="align-middle text-center"><a class="text-info" href="${history.url}" target="_blank">Click me!</a></td>
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
                    <td class="text-center" id="${levelRange.startLevel+arrayNum}-exp-tnl">${rawEXP.toLocaleString('en-SG')}</td>
                    <td class="text-center">${prevEXP === -1 ? "-" : (rawEXP / prevEXP * 100 - 100).toFixed(1).replace(/[.,]0$/, "") + "%" }</td>
                </tr>`);

            prevEXP = rawEXP;
        })
    })
}

// Populates "tooltip" below each input field for patch details and restrictions
function populateStep1Details(selectedField) {
    let patchDetailsField = document.getElementById("patch-details");
    patchDetailsField.innerHTML = "";
    
    patchDetails[selectedField].details.forEach(function(detail) {
        patchDetailsField.appendChild(document.createTextNode(`- ${detail}`));
        patchDetailsField.appendChild(document.createElement('br'));
        document.getElementById("max-level").textContent = patchDetails[selectedField].maxLevel-1;
    })
}

function addEXPTableSelectListener() {
    const expTableSelectField = document.getElementById("exp-table-used");

    expTableSelectField.addEventListener("change", (event) => {
        const selectedField = event.target.value;
        populateStep1Details(selectedField);
    })
}

function addViewTypeBtnListeners() {
    const viewTypeBtns = Array.from(document.querySelectorAll(".view-type-input"));

    viewTypeBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            if(!this.classList.contains("active")) {
                document.querySelector(".view-type-input.active").classList.remove("active");
                this.classList.add("active");
            }
        })
    })
}

// On click of "Begin", check if user entered valid character level
// If invalid, display relevant error message and maximum allowed level input
function addStartCalcBtnListener() {
    const startCalcBtn = document.getElementById("btn-start-calc");

    startCalcBtn.addEventListener("click", (event) => {
        const expTableSelected = document.getElementById("exp-table-used").value;
        const charLevelInput = parseInt(document.getElementById("char-level").value);
        const maxAllowedLevelInput = patchDetails[expTableSelected].maxLevel;
        const minAllowedLevelInput = 50;

        if(isNaN(charLevelInput) || charLevelInput < minAllowedLevelInput || charLevelInput >= maxAllowedLevelInput) {
            event.preventDefault();
            document.getElementById("allowed-levels").classList.add("text-danger");
            document.getElementById("max-level").textContent = maxAllowedLevelInput-1;
        } else {
            document.getElementById("allowed-levels").classList.remove("text-danger");
        }
    })
}

// Toggles view between raw EXP value and percent EXP value
let isViewEXPPercent = true;

function addViewEXPTypeListener() {
    const expTypeElem = document.getElementById("view-exp-type-col");

    if(expTypeElem) {
        expTypeElem.addEventListener("click", function() {
            const allPercentEXPElem = Array.from(document.querySelectorAll(".view-percent-exp"));
            const allRawEXPElem = Array.from(document.querySelectorAll(".view-raw-exp"));

            allPercentEXPElem.forEach(function(elem) {
                elem.classList.toggle("d-none");
            })

            allRawEXPElem.forEach(function(elem) {
                elem.classList.toggle("d-none");
            })

            isViewEXPPercent = !isViewEXPPercent;

            if(isViewEXPPercent) {
                document.getElementById("view-exp-type").textContent = "(%)";
            } else {
                document.getElementById("view-exp-type").textContent = "(Raw EXP)";
            }
        })
    }
}