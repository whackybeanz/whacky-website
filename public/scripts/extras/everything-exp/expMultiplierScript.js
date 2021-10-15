// On click of any exp stack, check category of selected item
// If within category 1/2/3, disable other active states within category
// Activate selected item
function addEXPStackBtnListener() {
    const singleEXPStackBtn = Array.from(document.querySelectorAll(".single-exp-stack"));

    singleEXPStackBtn.forEach(function(expStackBtn) {
        expStackBtn.addEventListener("click", function() {
            const selectedCategoryNum = parseInt(this.dataset.categoryNum);
            const expBuffValue = Number(this.dataset.value);

            if(this.classList.contains("active")) {
                this.classList.remove("active");
            } else {                
                if(selectedCategoryNum == 1 || selectedCategoryNum == 2 || selectedCategoryNum == 3) {
                    const allSingleCategoryElems = Array.from(document.querySelectorAll(`.category-${selectedCategoryNum}`));

                    allSingleCategoryElems.forEach(function(elem) {
                        elem.classList.remove("active");
                    })
                }

                this.classList.add("active");
            }

            updateMultiplier(selectedCategoryNum);
            getTotalMultiplier();
            saveMultipliers();
        })
    })
}

function addEXPStackSelectListener() {
    const expStackSelectFields = document.querySelectorAll(".single-exp-stack-select");
    const categoryNum = 5;

    expStackSelectFields.forEach(function(selectField) {
        selectField.addEventListener("change", function(event) {
            updateMultiplier(categoryNum);
            getTotalMultiplier();
            saveMultipliers();
        })
    })
}

function addEXPStackInputListener() {
    const expStackInputFields = document.querySelectorAll(".single-exp-stack-input");
    const categoryNum = 5;

    expStackInputFields.forEach(function(inputField) {
        inputField.addEventListener("change", function(event) {
            if(inputField.value === "" || isNaN(inputField.value)) {
                inputField.value = 0;
            }
            updateMultiplier(categoryNum);
            getTotalMultiplier();
            saveMultipliers();
        })
    })
}

function checkIsCat1Premium() {
    let anyActiveCat1Elem = document.querySelector(".category-1.active");

    if(anyActiveCat1Elem !== null) {
        return anyActiveCat1Elem.dataset.isPremium === "true";
    } else {
        return false;
    }
}

function updateMultiplier(categoryNum) {
    let multiplierValue = 1;
    let isCat1Premium = checkIsCat1Premium();

    if(categoryNum === 1) {
        if(isCat1Premium) {
            document.getElementById("category-1-symbol").textContent = "+";
            document.getElementById("category-1-percent").classList.remove("d-none");
        } else {
            document.getElementById("category-1-symbol").textContent = "x";
            document.getElementById("category-1-percent").classList.add("d-none");
        }

        let anyActiveCat1Elem = document.querySelector(".category-1.active");

        if(anyActiveCat1Elem) {
            multiplierValue = parseFloat(anyActiveCat1Elem.dataset.value);
        } else {
            multiplierValue = 1;
        }
    }

    if(categoryNum === 2 || categoryNum === 3 || categoryNum === 4) {
        let anyActiveCatElem = document.querySelector(`.category-${categoryNum}.active`);

        if(anyActiveCatElem) {
            multiplierValue = parseFloat(anyActiveCatElem.dataset.value);
        } else {
            multiplierValue = 1;
        }
    }

    if(categoryNum === 5) {
        multiplierValue = 0.00;

        document.querySelectorAll(".category-5.active").forEach(selectedEXPBuff => multiplierValue += parseFloat(selectedEXPBuff.dataset.value));
        document.querySelectorAll(".single-exp-stack-select").forEach(select => multiplierValue += parseFloat(select.value));
        document.querySelectorAll(".single-exp-stack-input").forEach(input => multiplierValue += parseFloat(input.value));

        multiplierValue = multiplierValue.toFixed(2);
    }

    document.getElementById(`category-${categoryNum}-value`).textContent = multiplierValue;
}

function getTotalMultiplier() {
    let multiplierPerCategory = [];
    let totalMultiplier;

    document.querySelectorAll(".single-category-exp-buff-value").forEach(elem => {
        multiplierPerCategory.push(parseFloat(elem.textContent));
    })

    if(checkIsCat1Premium()) {
        totalMultiplier = multiplierPerCategory[0]/100 + multiplierPerCategory[1] * multiplierPerCategory[2] * multiplierPerCategory[3] + multiplierPerCategory[4]/100;
    } else {
        totalMultiplier = multiplierPerCategory[0] * multiplierPerCategory[1] * multiplierPerCategory[2] * multiplierPerCategory[3] + multiplierPerCategory[4]/100;
    }

    document.getElementById("total-exp-mult").textContent = totalMultiplier.toFixed(2);
}

function saveMultipliers() {
    let savedData = JSON.parse(localStorage.getItem("everythingEXP"));
    let selectedEXPBuffs = [];
    document.querySelectorAll(".single-exp-stack.active").forEach(buff => {
        selectedEXPBuffs.push(buff.id);
    })

    let expBuffSelectValues = [];
    document.querySelectorAll(".single-exp-stack-select").forEach(select => {
        expBuffSelectValues.push({ id: select.id, value: select.value });
    })

    let expBuffInputValues = [];
    document.querySelectorAll(".single-exp-stack-input").forEach(input => {
        expBuffInputValues.push({ id: input.id, value: input.value });
    })

    let toSave = {
        selectedEXPBuffs: selectedEXPBuffs,
        expBuffSelectValues: expBuffSelectValues,
        expBuffInputValues: expBuffInputValues,
    }

    if(savedData === null) {
        savedData = { expMultipliers: toSave };
    } else {
        savedData.expMultipliers = toSave;
    }

    localStorage.setItem("everythingEXP", JSON.stringify(savedData));
}