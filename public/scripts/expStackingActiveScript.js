const charLevel = parseInt(document.getElementById("char-level").value);

document.addEventListener("DOMContentLoaded", function(event) { 
    addEXPStackBtnListener();
    addEXPStackSelectListener();
    addEXPStackInputListener();
    addMapSelectorListener();
    addUpdateMapCalcListener();
    addViewEXPTypeListener();
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
                }
            }
        }
    })
}

// Update multiplier values presented in a table
let expBuffValueList = [1, 1, 1, 1, 0]
let isCat1Premium = false;
let totalMultiplier = 1;

function updateMultipliers(categoryNum, expBuffValue, isAddStack, itemType = undefined) {
    if(categoryNum === 5) {
        expBuffValueList[categoryNum-1] += expBuffValue;    
    } else {
        expBuffValueList[categoryNum-1] = expBuffValue;
    }

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
            if(categoryNum === 1 && itemType === "premium") {
                isCat1Premium = false;
            }
            expBuffValueList[categoryNum-1] = 1;
            document.getElementById(`category-${categoryNum}-value`).textContent = "-";
        }
    }

    if(isCat1Premium) {
        totalMultiplier = expBuffValueList[1] * expBuffValueList[2] * expBuffValueList[3] + expBuffValueList[0]/100 + expBuffValueList[4]/100;
    } else {
        totalMultiplier = expBuffValueList[0] * expBuffValueList[1] * expBuffValueList[2] * expBuffValueList[3] + expBuffValueList[4]/100;
    }

    document.getElementById("total-value").textContent = `x${totalMultiplier}`;
}

function addUpdateMapCalcListener() {
    const btnUpdateMap = document.getElementById("btn-update-calc");

    btnUpdateMap.addEventListener("click", function() {
        // Hide all map data rows
        const allMapDisplayElems = Array.from(document.querySelectorAll(".single-map-display"));

        allMapDisplayElems.forEach(function(elem, index) {
            elem.classList.add("d-none");
        })

        // Populate new map data
        const allSelectedMapElems = Array.from(document.querySelectorAll(".single-map-select.active"));

        if(allSelectedMapElems.length > 0) {
            document.getElementById("all-map-display").classList.remove("d-none");

            allSelectedMapElems.forEach(function(mapElem, index) {
                let mapData = {
                    mapName: mapElem.dataset.mapName,
                    mapIconUrl: mapElem.dataset.mapIcon,
                    monsterLevels: mapElem.dataset.monsterLevels.split(","),
                    monsterNames: mapElem.dataset.monsterNames.split(","),
                    monsterEXP: mapElem.dataset.monsterExp.split(","),
                    monsterHP: mapElem.dataset.monsterHp.split(","),
                    monsterIsBoss: mapElem.dataset.monsterIsBoss.split(","),
                };

                document.getElementById(`map-name-${index+1}`).innerHTML = `<div class="d-flex align-items-center"><img src='${mapData.mapIconUrl}' class='mr-2'> ${mapData.mapName}</div>`;

                const numMonsters = mapData.monsterNames.length;
                let html = ``;

                for(let i = 0; i < numMonsters; i++) {
                    let levelDiffModifier = getLevelDiffModifier(charLevel, mapData.monsterLevels[i]);

                    html += `<div class="font-weight-bold">[Lv. ${mapData.monsterLevels[i]}] ${mapData.monsterNames[i]}</div>`;
                    html += `<div class="col-12 d-flex"><span class="col-6 col-sm-5 col-md-5 col-lg-6 px-0 text-right">Monster HP</span> <span class="col-6">${Number(mapData.monsterHP[i]).toLocaleString()}</span></div>`;
                    html += `<div class="col-12 d-flex"><span class="col-6 col-sm-5 col-md-5 col-lg-6 px-0 text-right">Base EXP</span> <span class="col-6">${Number(mapData.monsterEXP[i]).toLocaleString()}</span></div>`;
                    html += `<div class="col-12 d-flex"><span class="col-6 col-sm-5 col-md-5 col-lg-6 px-0 text-right">Level Bonus/Penalty</span> <span class="col-6">x${levelDiffModifier}<sup class="text-info">[3]</sup></span></div>`;
                    html += `<div class="col-12 d-flex"><span class="col-6 col-sm-5 col-md-5 col-lg-6 px-0 text-right">New Base EXP</span> <span class="col-6">${Math.round(Number(mapData.monsterEXP[i]) * levelDiffModifier).toLocaleString()}</span></div>`;
                    html += `<div class="col-12 d-flex font-weight-bold"><span class="col-6 col-sm-5 col-md-5 col-lg-6 px-0 text-right">EXP with multipliers</span> <span class="col-6">${Math.round(Number(mapData.monsterEXP[i]) * levelDiffModifier * totalMultiplier).toLocaleString()}</span></div>`;

                    if(i !== numMonsters - 1) {
                        html += "<hr>";
                    }
                }

                document.getElementById(`monster-level-${index+1}`).innerHTML = html;

                const affectedMapElem = Array.from(document.querySelectorAll(`.map-display-${index+1}`));

                affectedMapElem.forEach(function(elem) {
                    elem.classList.remove("d-none");
                })
            })
        } else {
            document.getElementById("all-map-display").classList.add("d-none");
        }
    })
}

// Returns the level difference bonus/penalty after comparing character level to monster level
function getLevelDiffModifier(charLevel, monsterLevel) {
    const levelDiff = charLevel-monsterLevel;

    const overleveledModifiers = [
        1.2, 1.2, 1.1, 1.1, 1.1, 1.05, 1.05, 1.05, 1.05, 1.05, 1, 
        0.99, 0.99, 0.98, 0.98, 0.97, 0.97, 0.96, 0.96, 0.95, 0.95,
        0.89, 0.88, 0.87, 0.86, 0.85, 0.84, 0.83, 0.82, 0.81, 0.80,
        0.79, 0.78, 0.77, 0.76, 0.75, 0.74, 0.73, 0.72, 0.71, 0.70];
    const underleveledModifiers = [
        1.2, 1.2, 1.1, 1.1, 1.1, 1.05, 1.05, 1.05, 1.05, 1.05, 1, 
        0.99, 0.98, 0.97, 0.96, 0.95, 0.94, 0.93, 0.92, 0.91, 0.90,
        0.70, 0.66, 0.62, 0.58, 0.54, 0.50, 0.46, 0.42, 0.38, 0.34,
        0.30, 0.26, 0.22, 0.18, 0.14, 0.10];

    if(levelDiff >= 0) {
        if(!overleveledModifiers[levelDiff]) {
            return overleveledModifiers[overleveledModifiers.length-1];
        }
        return overleveledModifiers[levelDiff];
    } else {
        if(!underleveledModifiers[Math.abs(levelDiff)]) {
            return underleveledModifiers[underleveledModifiers.length-1];
        }
        return underleveledModifiers[Math.abs(levelDiff)];
    }
}

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