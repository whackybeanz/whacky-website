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
            if(input.value < 0) {
                input.value = 0;
            }

            if(input.value > 100) {
                input.value = 100;
            }
        })
    })
}

function addQtyByOneListener() {
    const addQtyBtns = document.querySelectorAll(".qty-plus-one");

    addQtyBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            let inputIdElem = document.getElementById(this.dataset.inputId);
            let inputValue = parseInt(inputIdElem.value);

            console.log(inputValue);

            if(!isNaN(inputValue)) {
                if(inputValue > 0 && inputValue < 100) {
                    inputIdElem.value = inputValue + 1;
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
            saveInputs(allBuyQtyInputs);

            this.querySelector(".update-expense-text").classList.toggle("d-none");
            this.querySelector(".save-success-text").classList.toggle("d-none");
            
            window.setTimeout(() => {
                this.querySelector(".update-expense-text").classList.toggle("d-none");
                this.querySelector(".save-success-text").classList.toggle("d-none");
            }, 3000)
        })
    })
}

function saveInputs(allBuyQtyInputs) {
    let savedInputs = allBuyQtyInputs.map(input => {
        return { inputId: input.id, value: input.value};
    });

    let toSave = {
        eventId: document.getElementById("event-id").value,
        buyQtyInputs: savedInputs,
    }

    localStorage.setItem("coinEvent", JSON.stringify(toSave));
}