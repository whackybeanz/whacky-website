let currProfileNum = 1;

document.addEventListener("DOMContentLoaded", function(event) {
    //loadSavedInputs();
    displayExpenses();
    addInputBlurListener();
    addQtyByOneListener();
    minusQtyByOneListener();   
    updateTotalExpenseListener();
    saveExpensesListener();
});

function loadSavedInputs() {
    const savedInputs = localStorage.getItem("coinEvent");
    
    if(savedInputs) {
        const savedData = JSON.parse(savedInputs);
        const eventIdViewed = document.getElementById("event-id").value;

        if(savedData.eventId === eventIdViewed) {
            if(savedData.eventId === "hotel-maple") {
                savedData.buyQtyInputs.forEach(input => {
                    let inputValue = parseInt(input.value);

                    if(!isNaN(inputValue) && inputValue > 0) {
                        document.getElementById(input.inputId).value = inputValue;
                    }
                })    
            }
        }        
    }
}

function displayExpenses(isDisplayAllProfiles = true, activeProfileNum = undefined) {
    const savedInputs = JSON.parse(localStorage.getItem("coinEventTest"));
    const NUM_PROFILES = 10;

    if(isDisplayAllProfiles) {
        for(let i = 0; i < NUM_PROFILES; i++) { 
            if(savedInputs.profiles[`profile-${i}`] !== undefined) {
                displaySingleProfileExpense(savedInputs, i);
            }
        }
    } else {
        displaySingleProfileExpense(savedInputs, activeProfileNum);
    }
}

function displaySingleProfileExpense(savedInputs, profileNum) {
    // Hide all shops from view
    // Clear all previous expenses listed in profile
    let profileShops = document.querySelectorAll(`.profile-${profileNum}-single-shop`);

    profileShops.forEach((shop, shopIndex) => {
        shop.classList.add("d-none");
        document.getElementById(`profile-${profileNum}-no-expense-msg`).classList.remove("d-none");
        document.getElementById(`profile-${profileNum}-shop-${shopIndex}-expenses`).innerHTML = "";
    })

    // Retrieve all expenses
    // Display shop that has relevant expense
    // Create table rows representing each item's data
    let profileExpenses = savedInputs.profiles[`profile-${profileNum}`];

    if(profileExpenses.length > 0) {
        document.getElementById(`profile-${profileNum}-no-expense-msg`).classList.add("d-none");  

        profileExpenses.forEach(expense => {
            const shopListContainer = document.getElementById(`profile-${profileNum}-shop-${expense.shopId}`);
            shopListContainer.classList.remove("d-none");

            const expenseContainer = document.getElementById(`profile-${profileNum}-shop-${expense.shopId}-expenses`);
            
            let itemName = document.getElementById(`shop-${expense.shopId}-item-${expense.itemId}-name`).value;
            let qtyPurchased = parseInt(expense.qtyPurchased);
            let itemPricePerUnit = parseInt(document.getElementById(`shop-${expense.shopId}-item-${expense.itemId}-price`).value);
            let currencyImgSrc = document.getElementById(`shop-${expense.shopId}-item-${expense.itemId}-currency`).value;

            let html = `<tr class="single-item-expense">`
                html +=    `<td>${itemName}</td>`;
                html +=    `<td class="text-center">${qtyPurchased}</td>`;
                html +=    `<td class="text-center"><img src="${currencyImgSrc}"> ${itemPricePerUnit.toLocaleString('en-SG')}</td>`;
                html +=    `<td class="text-center"><img src="${currencyImgSrc}"> ${(qtyPurchased * itemPricePerUnit).toLocaleString('en-SG')}</td>`;
                html += `</tr>`;

            expenseContainer.insertAdjacentHTML('beforeend', html)
        })
    }
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

function saveExpensesListener() {
    let saveBtn = document.getElementById("btn-save");

    saveBtn.addEventListener("click", function() {
        let activeProfileElem = document.querySelector(".single-profile-name.active");
        let activeProfileNum = parseInt(activeProfileElem.dataset.profileNum);

        let totalExpenses = calculateTotalExpense();
        let isSaved = saveInputs(totalExpenses, activeProfileNum);

        if(isSaved) {
            displayExpenses(false, activeProfileNum);
        }
    })
}

function calculateTotalExpense() {
    let allBuyQtyInputs = Array.from(document.getElementsByName("itemBuyQty")); // Get all possible item inputs
    let validBuyQtyInputs = allBuyQtyInputs.filter(input => (!isNaN(parseInt(input.value)) && parseInt(input.value) > 0)); // Retrieve only valid item inputs for saving

    let profileExpenses = [];

    validBuyQtyInputs.forEach(input => {
        profileExpenses.push({ 
            shopId: input.dataset.shopId,
            itemId: input.dataset.itemId,
            qtyPurchased: input.value,
        });
    })

    return profileExpenses;
}

function saveInputs(totalExpenses, profileNum) {
    const eventId = document.getElementById("event-id").value;
    const savedData = JSON.parse(localStorage.getItem("coinEvent"));
    let currSavedEventId = "???";
    
    if(savedData !== null) {
        currSavedEventId = savedData.eventId;
    }
    
    if(savedData !== null && eventId !== currSavedEventId) {
        const currSavedEventName = savedData.eventName || "???";
        
        if(confirm(`You currently have saved data from another coin event: [${currSavedEventName}]. Proceeding with the save will overwrite your saved data from that coin event. Do you really wish to proceed?`)) {
            proceedWithSave(totalExpenses, eventId, profileNum);
            return true;
        } else {
            return false;
        }
    } else {
        proceedWithSave(totalExpenses, eventId, profileNum);
        return true;
    }
}

function proceedWithSave(totalExpenses, eventId, profileNum) {
    const savedData = JSON.parse(localStorage.getItem("coinEventTest"));
    let toSave = {};

    if(savedData !== null) {
        toSave = savedData;
    } else {
        toSave = {
            eventName: document.getElementById("event-name").textContent,
            eventId: eventId,
            profiles: { },
        }
    }
    toSave.profiles[`profile-${profileNum}`] = totalExpenses;
    
    localStorage.setItem("coinEventTest", JSON.stringify(toSave));
}