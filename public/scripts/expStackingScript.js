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
    const initSelectedField = document.getElementById("exp-table-used").value;
    populateStep1Details(initSelectedField);
    addEXPTableSelectListener();
    addViewTypeBtnListeners();
    addStartCalcBtnListener();
    addViewEXPTypeListener();
})

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