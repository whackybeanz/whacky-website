const patchDetails = {
    neo: {
        details: ["Released in KMS in December 2020", "Level cap raised to 300", "Level 210 to 250 EXP reductions"],
        maxLevel: 300,
        expStages: {
            at160: 76574580,
            at200: 2207026470,
            at250: 1313764762354
        },
        multiplierToUse: {
            to200: "rise",
            to250: "neo",
            to300: "neo",
        }
    },
    rise: {
        details: ["Released in KMS in December 2020", "Level 170 to 199 EXP reductions"],
        maxLevel: 275,
        expStages: {
            at160: 76574580,
            at200: 2207026470,
            at250: 1313764762354
        },
        multiplierToUse: {
            to200: "rise",
            to250: "glory",
            to300: "black",
        }
    },
    glory: {
        details: ["Released in KMS in July 2019", "Level 220 to 234 EXP reductions"],
        maxLevel: 275,
        expStages: {
            at160: 76574580,
            at200: 2207026470,
            at250: 1313764762354
        },
        multiplierToUse: {
            to200: "default",
            to250: "glory",
            to300: "black",
        }
    },
    black: {
        details: ["Released in KMS in June 2018", "Level 201 to 220 EXP reductions", "Level cap raised to 275"],
        maxLevel: 275,
        expStages: {
            at160: 76574580,
            at200: 2207026470,
            at250: 1313764762354,
        },
        multiplierToUse: {
            to200: "default",
            to250: "black",
            to300: "black",
        }
    }
}

const multipliers = {
    neo: {
        to250: [1.12, 1.12, 1.12, 1.12, 1.12, 1.12, 1.12, 1.12, 1.12, 
                1.6, 1.11, 1.11, 1.11, 1.11, 1.3, 1.09, 1.09, 1.09, 1.09,
                1.6, 1.07, 1.07, 1.07, 1.07, 1.3, 1.05, 1.05, 1.05, 1.05,
                1.6, 1.03, 1.03, 1.03, 1.03, 1.3, 1.03, 1.03, 1.03, 1.03,
                1.6, 1.03, 1.03, 1.03, 1.03, 1.3, 1.03, 1.03, 1.03, 1.03],
        to300: [1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01,
                2.02, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01,
                2.02, 1.01, 1.01, 1.01, 1.01, 2.02, 1.1, 1.1, 1.1, 1.1,
                2.02, 1.1, 1.1, 1.1, 1.1, 2.02, 1.1, 1.1, 1.1, 1.1,
                2.02, 1.1, 1.1, 1.1, 1.1, 2.02, 1.1, 1.1, 1.1, 1.5]
    },
    rise: {
        to200: [1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625,
                1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625,
                1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625,
                1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 
                1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 
                1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 1.05]
    },
    glory: {
        to250: [1.12, 1.12, 1.12, 1.12, 1.12, 1.12, 1.12, 1.12, 1.12,
                2.75, 1.08, 1.08, 1.08, 1.08, 1.08, 1.08, 1.08, 1.08, 1.08,
                1.7, 1.05, 1.05, 1.05, 1.05, 1.35, 1.03, 1.03, 1.03, 1.03,
                1.65, 1.02, 1.02, 1.02, 1.02, 1.3, 1.03, 1.03, 1.03, 1.03,
                1.6, 1.03, 1.03, 1.03, 1.03, 1.3, 1.03, 1.03, 1.03, 1.03]
    },
    black: {
        to250: [1.12, 1.12, 1.12, 1.12, 1.12, 1.12, 1.12, 1.12, 1.12, 
                2.75, 1.08, 1.08, 1.08, 1.08, 1.08, 1.08, 1.08, 1.08, 1.08, 
                2.52159015761, 1.04, 1.04, 1.04, 1.04, 1.04, 1.04, 1.04, 1.04, 1.04,
                2.04, 1.02, 1.02, 1.02, 1.02, 1.02, 1.02, 1.02, 1.02, 1.02, 
                2.02, 1.02, 1.02, 1.02, 1.02, 1.02, 1.02, 1.02, 1.02, 1.02],
        to300: [1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01,
                2.02, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01,
                2.02, 1.01, 1.01, 1.01, 1.01]
    }
}

document.addEventListener("DOMContentLoaded", function(event) { 
    addEXPTableSelectListener();
    addStartCalcBtnListener();
    addEXPStackBtnListener();
})

function addEXPTableSelectListener() {
    const expTableSelectField = document.getElementById("exp-table-used");

    expTableSelectField.addEventListener("change", (event) => {
        const selectedField = event.target.value;
        let patchDetailsField = document.getElementById("patch-details");
        patchDetailsField.innerHTML = "";

        patchDetails[selectedField].details.forEach(function(detail) {
            patchDetailsField.appendChild(document.createTextNode(`- ${detail}`));
            patchDetailsField.appendChild(document.createElement('br'));
        })
    })
}

// On click of "Begin", check if user entered valid character level
// If invalid, display relevant error message and maximum allowed level input
function addStartCalcBtnListener() {
    const startCalcBtn = document.getElementById("btn-start-calc");

    startCalcBtn.addEventListener("click", (event) => {
        event.preventDefault();
        const expTableSelected = expTableSelectField.value;
        const charLevelInput = parseInt(document.getElementById("char-level").value);
        const maxAllowedLevelInput = patchDetails[expTableSelected].maxLevel;
        const minAllowedLevelInput = 50;

        if(!isNaN(charLevelInput) && charLevelInput >= minAllowedLevelInput && charLevelInput <= maxAllowedLevelInput-1) {
            document.getElementById("invalid-level").classList.add("d-none");
            document.getElementById("select-exp-sources-div").classList.add("d-flex");

            let expRequired = calculateEXPRequired(expTableSelected, charLevelInput);
            console.log(expRequired.toLocaleString());
        } else {
            document.getElementById("invalid-level").classList.remove("d-none");
            document.getElementById("max-level").textContent = maxAllowedLevelInput-1;
        }
    })
}

// Calculates the expected EXP required to next level, split into multiple tiers
// Extracts the required multipliers to use for calculation
// Current assumption: input is between 160 and 300
function calculateEXPRequired(expTableSelected, charLevelInput) {
    let startingValue, count, multiplierToUse, multiplierType;

    if(charLevelInput < 200) {
        startingValue = patchDetails[expTableSelected].expStages.at160;
        count = charLevelInput - 160;
        multiplierToUse = patchDetails[expTableSelected].multiplierToUse.to200;
        multiplierType = "to200";
    } else if(charLevelInput < 250) {
        startingValue = patchDetails[expTableSelected].expStages.at200;
        count = charLevelInput - 200;
        multiplierToUse = patchDetails[expTableSelected].multiplierToUse.to250;
        multiplierType = "to250";
    } else {
        startingValue = patchDetails[expTableSelected].expStages.at250;
        count = charLevelInput - 250;
        multiplierToUse = patchDetails[expTableSelected].multiplierToUse.to300;
        multiplierType = "to300";
    }

    let finalEXPValue = startingValue;

    for(let i = 0; i < count; i++) {
        finalEXPValue = Math.trunc(finalEXPValue * multipliers[expTableSelected][multiplierType][i]);
    }

    return finalEXPValue;
}

// On click of any exp stack, check category of selected item
// If within category 1/2/3, disable other active states within category
// Activate selected item
function addEXPStackBtnListener() {
    const singleEXPStackBtn = Array.from(document.querySelectorAll(".single-exp-stack"));

    singleEXPStackBtn.forEach(function(expStackBtn) {
        expStackBtn.addEventListener("click", function() {
            const selectedCategoryNum = parseInt(this.dataset.categoryNum);
            const expBuffValue = Number(this.dataset.value);
            const itemType = this.dataset.item;

            if(this.classList.contains("active")) {
                this.classList.remove("active");
                updateMultipliers(selectedCategoryNum, expBuffValue, false, itemType);
            } else {                
                if(selectedCategoryNum == 1 || selectedCategoryNum == 2 || selectedCategoryNum == 3) {
                    const allSingleCategoryElems = Array.from(document.querySelectorAll(`.category-${selectedCategoryNum}`));

                    allSingleCategoryElems.forEach(function(elem) {
                        elem.classList.remove("active");
                    })
                }

                this.classList.add("active");

                updateMultipliers(selectedCategoryNum, expBuffValue, true, itemType);
            }
        })
    })
}

let expBuffValueList = [1, 1, 1, 1, 1]
let isCat1Premium = false;

function updateMultipliers(categoryNum, expBuffValue, isAddStack, itemType = undefined) {
    if(isAddStack) {
        if(categoryNum === 5) {
            expBuffValueList[categoryNum-1] += expBuffValue;
        } else {
            expBuffValueList[categoryNum-1] = expBuffValue;
        }

        if(categoryNum === 1) {
            if(itemType === "premium") {
                isCat1Premium = true;
                document.getElementById("category-1-value").textContent = `+${expBuffValue}%`;
            } else {
                isCat1Premium = false;
                document.getElementById("category-1-value").textContent = `x${expBuffValue}`;
            }
        }

        if(categoryNum === 2 || categoryNum === 3 || categoryNum === 4) {
            expBuffValueList[categoryNum-1] = expBuffValue;
            document.getElementById(`category-${categoryNum}-value`).textContent = `x${expBuffValue}`;
        }
    } else {
        if(categoryNum === 5) {

        } else {
            expBuffValueList[categoryNum-1] = 1;
            document.getElementById(`category-${categoryNum}-value`).textContent = "-";
        }
    }
}