const charLevel = parseInt(document.getElementById("char-level").value);

document.addEventListener("DOMContentLoaded", function(event) { 
    addEXPStackBtnListener();
    addEXPStackSelectListener();
    addEXPStackInputListener();
    addMapSelectorListener();
})

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