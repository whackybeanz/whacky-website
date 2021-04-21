document.addEventListener("DOMContentLoaded", function(event) {
    loadSavedInputs();
    addInputBlurListener();
    addQtyByOneListener();
    minusQtyByOneListener();   
    updateTotalExpenseListener();
});

function loadSavedInputs() {
    const savedInputs = localStorage.getItem("coinEvent");
    
    if(savedInputs) {
        const savedData = JSON.parse(savedInputs);
        const eventIdViewed = document.getElementById("event-id").value;

        if(savedData.eventId === eventIdViewed) {
            savedData.buyQtyInputs.forEach(input => {
                let inputValue = parseInt(input.value);

                if(!isNaN(inputValue) && inputValue > 0) {
                    document.getElementById(input.inputId).value = inputValue;
                }
            })

            calculateAndDisplayTotalExpense();
        }        
    }
}

function calculateAndDisplayTotalExpense() {
    let allPriceInputs = Array.from(document.getElementsByName("itemPrice"));
    let allCoinTypeInputs = Array.from(document.getElementsByName("itemCoinType"));
    let allCoinTypes = [...new Set(allCoinTypeInputs.map(input => input.value))];
    let allBuyQtyInputs = Array.from(document.getElementsByName("itemBuyQty"));

    let totalExpense = {};
    allCoinTypes.forEach(coinType => {
        totalExpense[coinType] = 0;
    })

    allPriceInputs.forEach((priceInput, index) => {
        let buyQty = parseInt(allBuyQtyInputs[index].value);
        let coinType = allCoinTypeInputs[index].value;

        if(!isNaN(buyQty)) {
            if(buyQty >= 0 && buyQty <= 100) {
                totalExpense[coinType] += parseInt(priceInput.value) * buyQty;
            }
        }
    })

    Object.keys(totalExpense).forEach(coinType => {
        if(totalExpense[coinType] > 0) { 
            document.getElementById(`${coinType}-total-expense`).textContent = totalExpense[coinType].toLocaleString('en-SG');
        } else {
            document.getElementById(`${coinType}-total-expense`).textContent = "-";
        }
    })

    return allBuyQtyInputs;
}

function addInputBlurListener() {
    const allInputs = document.querySelectorAll(".buy-item-input");

    allInputs.forEach(input => {
        input.addEventListener("blur", function() {
            const shopItemId = input.id;
            const shopItemMaxQtyContent = document.getElementById(`${shopItemId}-max-qty`).textContent;
            const shopItemMaxQty = isNaN(parseInt(shopItemMaxQtyContent)) ? 250 : parseInt(shopItemMaxQtyContent);

            if(input.value < 0) {
                input.value = 0;
            }

            if(input.value > shopItemMaxQty) {
                input.value = shopItemMaxQty;
            }
        })
    })
}

function addQtyByOneListener() {
    const addQtyBtns = document.querySelectorAll(".qty-plus-one");

    addQtyBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            const shopItemId = this.dataset.inputId;
            const shopItemMaxQtyContent = document.getElementById(`${shopItemId}-max-qty`).textContent;
            const shopItemMaxQty = isNaN(parseInt(shopItemMaxQtyContent)) ? 250 : parseInt(shopItemMaxQtyContent);

            let inputIdElem = document.getElementById(shopItemId);
            let inputValue = parseInt(inputIdElem.value);

            if(!isNaN(inputValue)) {
                if(inputValue > 0) {
                    if(inputValue < shopItemMaxQty) {
                        inputIdElem.value = inputValue + 1;    
                    } else {
                        inputIdElem.value = shopItemMaxQty;
                    }
                } else {
                    inputIdElem.value = 1;    
                }
            } else {
                inputIdElem.value = 1;
            }
        })
    }) 
}

function minusQtyByOneListener() {
    const minusQtyBtns = document.querySelectorAll(".qty-minus-one");

    minusQtyBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            let inputIdElem = document.getElementById(this.dataset.inputId);
            let inputValue = parseInt(inputIdElem.value);

            if(!isNaN(inputValue) && inputValue > 0) {
                inputIdElem.value = inputValue - 1;
            } else {
                inputIdElem.value = 0;
            }
        })
    })
}

function updateTotalExpenseListener() {
    const updateExpenseBtns = document.querySelectorAll(".btn-update-expense");

    updateExpenseBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            let allBuyQtyInputs = calculateAndDisplayTotalExpense();
            let isSaved = saveInputs(allBuyQtyInputs);

            this.querySelector(".update-expense-text").classList.toggle("d-none");
            this.querySelector(".save-success-text").classList.toggle("d-none");

            if(isSaved) {
                this.querySelector(".save-success-text").textContent = "Expense updated & inputs saved!";
            } else {
                this.querySelector(".save-success-text").textContent = "Expense updated!";
            }
            
            window.setTimeout(() => {
                this.querySelector(".update-expense-text").classList.toggle("d-none");
                this.querySelector(".save-success-text").classList.toggle("d-none");
            }, 3000)
        })
    })
}

function saveInputs(allBuyQtyInputs) {
    const eventId = document.getElementById("event-id").value;
    const savedData = JSON.parse(localStorage.getItem("coinEvent"));
    let currSavedEventId = "???";
    
    if(savedData !== null) {
        currSavedEventId = savedData.eventId;
    }
    
    if(savedData !== null && eventId !== currSavedEventId) {
        const currSavedEventName = savedData.eventName || "???";
        
        if(confirm(`You currently have saved data from another coin event: [${currSavedEventName}]. Proceeding with the save will overwrite your current saved data. Do you really wish to proceed?\n\nIf you click 'No', the total expense will still be updated for your reference, but no data will be saved.`)) {
            proceedWithSave(allBuyQtyInputs, eventId);
            return true;
        } else {
            calculateAndDisplayTotalExpense();
            return false;
        }
    } else {
        proceedWithSave(allBuyQtyInputs, eventId);
        return true;
    }
}

function proceedWithSave(allBuyQtyInputs, eventId) {
    let savedInputs = allBuyQtyInputs.map(input => {
        return { inputId: input.id, value: input.value};
    });

    let toSave = {
        eventName: document.getElementById("event-name").textContent,
        eventId: eventId,
        buyQtyInputs: savedInputs,
    }

    localStorage.setItem("coinEvent", JSON.stringify(toSave));
}
