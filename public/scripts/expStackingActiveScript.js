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
                1.65, 1.02, 1.02, 1.02, 1.02, 1.441558145, 1.02, 1.02, 1.02, 1.02,
                2.02, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01]
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

const charLevel = parseInt(document.getElementById("char-level").value);

document.addEventListener("DOMContentLoaded", function(event) { 
    addEXPTableSelectListener();
    addEXPStackBtnListener();
    addEXPStackSelectListener();
    addEXPStackInputListener();
    addMapSelectorListener();
    updateGeneralContentsEXP();
})

// On selection change of EXP table, present the EXP table details
// Also check if user's character level is invalid against the newly selected EXP table
// TODO: Update calculated EXP values against newly selected EXP table if valid
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

        if(charLevel > patchDetails[selectedField].maxLevel) {
            document.getElementById("invalid-select-warning").classList.remove("d-none");
        } else {
            document.getElementById("invalid-select-warning").classList.add("d-none");
        }
    })
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
                updateMultipliers(selectedCategoryNum, -expBuffValue, false, itemType);
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

// For Category 5 select options, on change, add/remove changed value to multiplier and update visual value
let expStackUserInputList = {
    elvenBlessing: 0,
    zeroUnion: 0,
    spiritPendant: 0,
    ringOfClan: 0,
    burningField: 0,
    runeBuff: 0,
    unionBoard: 0,
    eventTitle: 0,
    hyperStats: 0,
    holySymbol: 0
}

function addEXPStackSelectListener() {
    const expStackSelectFields = Array.from(document.querySelectorAll(".single-exp-stack-select"));
    const categoryNum = 5;

    expStackSelectFields.forEach(function(selectField) {
        selectField.addEventListener("change", function(event) {
            let prevSelectedValue = expStackUserInputList[event.target.dataset.selectType];
            let newSelectedValue = Number(event.target.value);
            let valueDiff = newSelectedValue - prevSelectedValue;

            if(newSelectedValue === 0) {
                updateMultipliers(categoryNum, valueDiff, false);
            } else {
                updateMultipliers(categoryNum, valueDiff, true);
            }

            expStackUserInputList[event.target.dataset.selectType] = newSelectedValue;
        })
    })
}

// For Category 5 input fields, on change, add/remove changed value to multiplier and update visual value
function addEXPStackInputListener() {
    const expStackInputFields = Array.from(document.querySelectorAll(".single-exp-stack-input"));
    const categoryNum = 5;

    expStackInputFields.forEach(function(inputField) {
        inputField.addEventListener("change", function(event) {
            let prevInputValue = expStackUserInputList[event.target.dataset.inputType];
            let newInputValue = Number(event.target.value);
            let valueDiff = newInputValue - prevInputValue;

            if(valueDiff !== 0) {
                if(newInputValue === 0) {
                    updateMultipliers(categoryNum, valueDiff, false);
                } else {
                    updateMultipliers(categoryNum, valueDiff, true);
                }
            }

            expStackUserInputList[event.target.dataset.inputType] = newInputValue;
        })
    })
}

// On selection of a map:
// 1) Check if map has already been selected
// 2) If not selected, toggle active state, add total count, and insert data to calculations in Step 4
// 3) If selected, remove active state, remove total count, and remove data from calculations in Step 4
let numSelectedMaps = 0;

function addMapSelectorListener() {
    document.addEventListener("click", function(event) {
        if(event.target && event.target.classList.contains("single-map-select")) {
            if(event.target.classList.contains("active")) {
                event.target.classList.remove("active");
                numSelectedMaps--;
                document.getElementById("num-maps-selected").textContent = numSelectedMaps;
                document.getElementById("num-maps-prompt").classList.remove("text-danger");
            } else {
                if(numSelectedMaps < 5) {
                    event.target.classList.add("active");
                    numSelectedMaps++;
                    document.getElementById("num-maps-selected").textContent = numSelectedMaps;

                    if(numSelectedMaps === 5) {
                        document.getElementById("num-maps-prompt").classList.add("text-danger");
                    }

                    const selectedElem = event.target;
                    const mapData = {
                        mapName: selectedElem.dataset.mapName,
                        monsterLevels: selectedElem.dataset.monsterLevels.split(","),
                        monsterName: selectedElem.dataset.monsterNames.split(","),
                        monsterEXP: selectedElem.dataset.monsterExp.split(","),
                        monsterHP: selectedElem.dataset.monsterHp.split(","),
                        monsterIsBoss: selectedElem.dataset.monsterIsBoss.split(","),
                    }

                    addMapData(mapData);
                }
            }
        }
    })
}

function addMapData(mapData) {

}

// Update multiplier values presented in a table
let expBuffValueList = [1, 1, 1, 1, 0]
let isCat1Premium = false;

function updateMultipliers(categoryNum, expBuffValue, isAddStack, itemType = undefined) {
    expBuffValueList[categoryNum-1] += expBuffValue;

    if(isAddStack) {
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
            document.getElementById(`category-${categoryNum}-value`).textContent = `x${expBuffValue}`;
        }

        if(categoryNum === 5) {
            document.getElementById(`category-5-value`).textContent = `+${expBuffValueList[categoryNum-1]}%`;
        }
    } else {
        if(categoryNum === 5) {
            if(expBuffValueList[categoryNum-1] === 0) {
                document.getElementById(`category-5-value`).textContent = "-";
            } else {
                document.getElementById(`category-5-value`).textContent = `+${expBuffValueList[categoryNum-1]}%`;
            }
        } else {
            expBuffValueList[categoryNum-1] = 1;
            document.getElementById(`category-${categoryNum}-value`).textContent = "-";
        }
    }
}

function updateGeneralContentsEXP() {
    updateMonsterParkEXP();
    updatePotionEXP();
}

function updateMonsterParkEXP() {
    
}

function updatePotionEXP() {
    const expTableSelected = document.getElementById("exp-table-used").value;
    let expPotions = {
        potion1: {
            maxLevel: 209,
            rawEXP: 0,
            percentEXP: 0,
        },
        potion2: {
            maxLevel: 219,
            rawEXP: 0,
            percentEXP: 0,
        },
        potion3: {
            maxLevel: 229,
            rawEXP: 0,
            percentEXP: 0,
        },
        typhoon: {
            maxLevel: 239,
            rawEXP: 0,
            percentEXP: 0,
        },
        maximum: {
            maxLevel: 249,
            rawEXP: 0,
            percentEXP: 0,
        },
    };

    const expToLevel = calculateEXPRequired(expTableSelected, charLevel);

    Object.keys(expPotions).forEach(function(potionType) {
        expPotions[potionType].rawEXP = calculateEXPRequired(expTableSelected, expPotions[potionType].maxLevel);

        if(charLevel <= expPotions[potionType].maxLevel) {
            expPotions[potionType].percentEXP = 100.000;
        } else {
            expPotions[potionType].percentEXP = (expPotions[potionType].rawEXP / expToLevel * 100).toFixed(3);
        }

        document.getElementById(`exp-${potionType}`).textContent = `${expPotions[potionType].percentEXP}%`;
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
        finalEXPValue = Math.trunc(finalEXPValue * multipliers[multiplierToUse][multiplierType][i]);
    }

    return finalEXPValue;
}