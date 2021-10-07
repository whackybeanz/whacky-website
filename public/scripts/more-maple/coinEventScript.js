const NUM_PROFILES = 10;

document.addEventListener("DOMContentLoaded", function(event) {
    // On page load
    loadSavedInputs();

    // Respective tab's select listener
    sectionSelectListener();
    shopSelectListener();
    profileSelectListener();

    // Expense summary page listeners
    profileNameBlurListener();

    // Shop item list page listeners
    addInputBlurListener();
    addQtyByOneListener();
    minusQtyByOneListener();
    rotateSaveProfileListener();
    saveExpensesListener();
    eraseInputsBtnListener();

    // Shopping cart page listeners
    loadProfileBtnListener();
});

function loadSavedInputs() {
    const newExpenseData = localStorage.getItem("coinEventExpenses");

    if(newExpenseData === null) {
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
            displayProfileNames();
        } else {
            displayExpenses();    
        }
    } else {
        displayExpenses();
    }
}

// First check if saved data exists and is not empty
// Check if current event page viewed is same as saved data's event ID

// If this is an initial page view, load all profiles' expenses into cart
// - Also, load Profile 1's data into shop item list
// - Also, display all saved profile names into Expense Summary

// Otherwise, function was called during saving of one profile's expenses
// - Load this profile's expense into cart

// If saved data does not exist, is empty, or if event page viewed is different from saved data
// Do not load any saved information, and only load default profile names in Expense Summary
function displayExpenses(isDisplayAllProfiles = true, activeProfileNum = undefined) {
    const savedData = JSON.parse(localStorage.getItem("coinEventExpenses"));
    const eventIdViewed = document.getElementById("event-id").value;

    if(savedData && Object.keys(savedData).length !== 0) {
        if(savedData.eventId === eventIdViewed) {
            if(isDisplayAllProfiles) {
                for(let i = 0; i < NUM_PROFILES; i++) { 
                    if(savedData.profiles[`profile-${i}`] !== undefined) {
                        displayProfileExpenseInCart(savedData, i);
                    }
                }
                loadProfile(savedData);
                displayProfileNames(false, savedData);
            } else {
                displayProfileExpenseInCart(savedData, activeProfileNum);

                if(savedData.profiles[`profile-${activeProfileNum}`].expenses.length === 0) {
                    let allAffectedElems = document.querySelectorAll(`.profile-${activeProfileNum}-single-currency-expense`);

                    allAffectedElems.forEach(elem => {
                        elem.textContent = "";
                    })
                }
            }
        } else {
            displayProfileNames();
        }
    } else {
        displayProfileNames();
    }
}

// Display a profile's expense in cart
function displayProfileExpenseInCart(savedData, profileNum) {
    // Hide container displaying list of items added to cart, and show default "no items added yet" message
    // For each shop within container, empty the element
    document.getElementById(`profile-${profileNum}-shop-list`).classList.remove("d-flex");
    document.getElementById(`profile-${profileNum}-shop-list`).classList.add("d-none");

    let profileShops = document.querySelectorAll(`.profile-${profileNum}-single-shop`);

    emptyShopContainers(profileShops, profileNum);

    let profileExpenses = savedData.profiles[`profile-${profileNum}`].expenses;
    
    if(profileExpenses.length > 0) {
        populateExpensesInCart(profileExpenses, profileNum);
    }
}

// For each shop that contains an expense, display the shop
// Check the existence of the shop based on shopIndex (to factor in rank-up shop not being a numerical index)
// If shop doesn't exist, it is possible the shop is a rank-up shop; check if this is the case
// In either case, empty the element of the shop
function emptyShopContainers(profileShops, profileNum) {
    profileShops.forEach((shop, shopIndex) => {
        shop.classList.add("d-none");
        document.getElementById(`profile-${profileNum}-no-expense-msg`).classList.remove("d-none");

        let shopExpenseContainer = document.getElementById(`profile-${profileNum}-shop-${shopIndex}-expenses`);

        if(shopExpenseContainer === null) {
            let rankUpExpensesContainer = document.getElementById(`profile-${profileNum}-shop-rank-up-expenses`);

            if(rankUpExpensesContainer !== null) {
                rankUpExpensesContainer.innerHTML = "";
            }
        } else {
            shopExpenseContainer.innerHTML = "";    
        }
    })
}

// Enable view of container displaying list of items added to cart and hide default "no items added yet" message
// Proceed to list out purchased items in cart under respective shops in container
function populateExpensesInCart(profileExpenses, profileNum) {
    document.getElementById(`profile-${profileNum}-shop-list`).classList.add("d-flex");
    document.getElementById(`profile-${profileNum}-shop-list`).classList.remove("d-none");
    document.getElementById(`profile-${profileNum}-no-expense-msg`).classList.add("d-none");  

    let allCoinTypeInputs = Array.from(document.getElementsByName("itemCoinType"));
    let allCoinTypes = [...new Set(allCoinTypeInputs.map(input => input .value))];

    let expenseByCurrency = {};

    allCoinTypes.forEach(coin => {
        expenseByCurrency[coin] = 0;
    })

    // For each expense, show the shop that will contain the item purchased
    // Populate the necessary information of the item (name, tradability, quantity purchased, price, currency) based on saved data
    // Create the HTML element for each item and add it into the shop
    profileExpenses.forEach(expense => {
        const shopListContainer = document.getElementById(`profile-${profileNum}-shop-${expense.shopId}`);
        shopListContainer.classList.remove("d-none");

        const expenseContainer = document.getElementById(`profile-${profileNum}-shop-${expense.shopId}-expenses`);
        
        let itemName = document.getElementById(`shop-${expense.shopId}-item-${expense.itemId}-name`).value;
        let tradability = document.getElementById(`shop-${expense.shopId}-item-${expense.itemId}-tradability`).value;
        let qtyPurchased = parseInt(expense.qtyPurchased);
        let itemPricePerUnit = parseInt(document.getElementById(`shop-${expense.shopId}-item-${expense.itemId}-price`).value);
        let currencyImgSrc = document.getElementById(`shop-${expense.shopId}-item-${expense.itemId}-currency`).value;
        let currencyId = document.getElementById(`shop-${expense.shopId}-item-${expense.itemId}-coinType`).value;

        expenseByCurrency[currencyId] += qtyPurchased * itemPricePerUnit;

        let html = `<tr class="single-item-expense">`
            html +=    `<td class="align-middle py-2 position-relative">${itemName}`;
            html +=        `<div class="tradability-display position-absolute">`

        if(tradability === "x") {
            html +=            `<div class="d-inline ml-1 text-danger" data-toggle="tooltip" data-placement="bottom" title="Untradable"><i class="fas fa-ban"></i></div>`;
        } else if(tradability === "i") {
            html +=            `<div class="d-inline ml-1" data-toggle="tooltip" data-placement="bottom" title="Inter-Account Transactions only"><i class="fas fa-exchange-alt"></i></div>`;
        }
            html +=        `</div>`;
            html +=    `</td>`;
            html +=    `<td class="table-cols-50 text-center align-middle py-2">${qtyPurchased.toLocaleString('en-SG')}</td>`;
            //html +=    `<td class="table-cols-100 text-center align-middle py-2"><img src="${currencyImgSrc}"> ${itemPricePerUnit.toLocaleString('en-SG')}</td>`;
            html +=    `<td class="table-cols-100 text-center align-middle py-2"><img src="${currencyImgSrc}"> ${(qtyPurchased * itemPricePerUnit).toLocaleString('en-SG')}</td>`;
            html += `</tr>`;

        expenseContainer.insertAdjacentHTML('beforeend', html)
    })

    // For each currency within this event, update the profile's expense under Expense Summary
    Object.keys(expenseByCurrency).forEach(coinId => {
        if(parseInt(expenseByCurrency[coinId]) !== 0) {
            document.getElementById(`profile-${profileNum}-${coinId}`).textContent = expenseByCurrency[coinId].toLocaleString('en-SG');
        } else {
            document.getElementById(`profile-${profileNum}-${coinId}`).textContent = "-";    
        }
    })
}

// Loads a profile's expenses (quantity purchased per item) into shop item list
function loadProfile(savedData, profileNum = 0) {
    if(Object.keys(savedData).length !== 0) {
        const eventIdViewed = document.getElementById("event-id").value;

        if(savedData.eventId === eventIdViewed) {
            let profileData = savedData.profiles[`profile-${profileNum}`]

            if(profileData !== undefined) {
                let allBuyQtyInputs = document.getElementsByName("itemBuyQty");
                allBuyQtyInputs.forEach(input => input.value = "");

                profileData.expenses.forEach(item => {
                    document.getElementById(`shop-${item.shopId}-item-${item.itemId}`).value = parseInt(item.qtyPurchased);
                })
            }
        }
    }
}

// Displays profile names based on saved data (or default values) in
// Expense Summary, active profile to save to in shop item list, and profile selection dropdown in Cart
function displayProfileNames(isDisplayDefaultNames = true, savedData) {
    for(let i = 0; i < 10; i++) {
        if(isDisplayDefaultNames) {
            document.getElementById(`profile-${i}-name`).value = `Profile ${i+1}`;
            document.getElementById(`option-profile-${i}-name`).textContent = `Profile ${i+1}`;
            document.getElementById(`active-profile-${i}-name`).textContent = `Profile ${i+1}`;
        } else {
            if(savedData.profiles[`profile-${i}`] !== undefined) {
                document.getElementById(`profile-${i}-name`).value = savedData.profiles[`profile-${i}`].profileName;
                document.getElementById(`option-profile-${i}-name`).textContent = savedData.profiles[`profile-${i}`].profileName;
                document.getElementById(`active-profile-${i}-name`).textContent = savedData.profiles[`profile-${i}`].profileName;
            } else {
                document.getElementById(`profile-${i}-name`).value = `Profile ${i+1}`;
                document.getElementById(`option-profile-${i}-name`).textContent = `Profile ${i+1}`;
                document.getElementById(`active-profile-${i}-name`).textContent = `Profile ${i+1}`;
            }
        }
    }
}

// Display save button based on which tab was clicked on for viewing
function sectionSelectListener() {
    const sectionSelects = document.querySelectorAll(".single-section-select");

    sectionSelects.forEach(section => {
        section.addEventListener("click", function() {
            if(this.id === "shop-item-list-pill") {
                document.getElementById("save-container").classList.remove("d-none");
            } else {
                document.getElementById("save-container").classList.add("d-none");
            }
        })
    })
}

// Display respective shop based on selected option in dropdown in shop item list
function shopSelectListener() {
    const shopSelect = document.getElementById("shop-select");

    shopSelect.addEventListener("change", function() {
        const allShopElems = document.querySelectorAll(".single-shop");

        allShopElems.forEach(shop => {
            shop.classList.add("d-none");
        })

        document.getElementById(`coin-shop-${this.value}`).classList.remove("d-none");
    })
}

// Display respective profile's item purchases based on selected option in dropdown in cart
function profileSelectListener() {
    const profileSelect = document.getElementById("profile-select");

    profileSelect.addEventListener("change", function() {
        const allProfileElems = document.querySelectorAll(".single-profile");

        allProfileElems.forEach(profile => {
            profile.classList.add("d-none");
        })

        document.getElementById(`profile-${this.value}-cart`).classList.remove("d-none");
    })
}

// When user clicks out of any input box in Expense Summary, update any possible profile name change across all elements that use it
function profileNameBlurListener() {
    let allProfileInputs = document.querySelectorAll(".single-profile-name-input");

    allProfileInputs.forEach(input => {
        input.addEventListener('blur', function() {
            document.getElementById(`option-profile-${this.dataset.profileNum}-name`).textContent = this.value;
            document.getElementById(`active-profile-${this.dataset.profileNum}-name`).textContent = this.value;
        })
    })
}

// When user clicks out of input box to indicate purchase quantity in shop item list, check if user's input is valid
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

// +1 to the item's purchase quantity up till the max allowed value
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

// -1 to the item's purchase quantity down till the minimum allowed value
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

// When user clicks on the profile names beside the save button, rotate the profile to save to
function rotateSaveProfileListener() {
    let activeProfileElems = document.querySelectorAll(".single-profile-name");

    activeProfileElems.forEach(elem => {
        elem.addEventListener("click", function() {
            let currProfileToSave = parseInt(this.dataset.profileNum);

            this.classList.add("d-none");
            this.classList.remove("active");

            let newProfileToSave = (currProfileToSave + 1) % NUM_PROFILES;
            document.getElementById(`active-profile-${newProfileToSave}-name`).classList.remove("d-none");
            document.getElementById(`active-profile-${newProfileToSave}-name`).classList.add("active");
            document.getElementById('saving-profile').textContent = document.getElementById(`active-profile-${newProfileToSave}-name`).textContent;
        })
    })
}

// When user clicks on save button, calculate total expenses of profile, save this data, and display purchased items in cart
// Also toggle save button's view when save succeeds
function saveExpensesListener() {
    let saveBtns = document.querySelectorAll(".btn-save");

    saveBtns.forEach(saveBtn => {
        saveBtn.addEventListener("click", function() {
            let activeProfileElem = document.querySelector(".single-profile-name.active");
            let activeProfileNum = parseInt(activeProfileElem.dataset.profileNum);

            let totalExpenses = compileTotalExpense();
            let isSaved = saveInputs(totalExpenses, activeProfileNum);

            if(isSaved) {
                displayExpenses(false, activeProfileNum);

                document.querySelector(".save-icon.fa-save").classList.toggle("d-none");
                document.querySelector(".save-success-icon.fa-check").classList.toggle("d-none");
                document.getElementById("btn-save-round").classList.toggle("bg-success");
                document.querySelector(".save-default-msg").classList.toggle("d-none");
                document.querySelector(".save-success-msg").classList.toggle("d-none");

                window.setTimeout(() => {
                    document.querySelector(".save-icon.fa-save").classList.toggle("d-none");
                    document.querySelector(".save-success-icon.fa-check").classList.toggle("d-none");
                    document.getElementById("btn-save-round").classList.toggle("bg-success");
                    document.querySelector(".save-default-msg").classList.toggle("d-none");
                    document.querySelector(".save-success-msg").classList.toggle("d-none");
                }, 2000)
            }
        })
    })
}

// Erases all inputs in item list
function eraseInputsBtnListener() {
    const eraseInputBtn = document.getElementById("btn-erase-inputs");

    eraseInputBtn.addEventListener("click", function() {
        if(confirm("This will erase ALL inputs that were entered into ALL shops. Do you really wish to proceed?")) {
            let allBuyQtyInputs = document.getElementsByName("itemBuyQty");
            allBuyQtyInputs.forEach(input => input.value = "");

            this.querySelector(".erase-default-msg").classList.toggle("d-none");
            this.querySelector(".erase-success-msg").classList.toggle("d-none");

            window.setTimeout(() => {
                this.querySelector(".erase-default-msg").classList.toggle("d-none");
                this.querySelector(".erase-success-msg").classList.toggle("d-none");
            }, 2000)
        }
    })
}

// Compile total expenses of profile based on items purchased in shop item list
function compileTotalExpense() {
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

// Save compiled expenses to the indicated profile number
function saveInputs(totalExpenses, profileNum) {
    const eventId = document.getElementById("event-id").value;
    const savedData = JSON.parse(localStorage.getItem("coinEventExpenses"));
    let currSavedEventId = "???";

    // If saved data does not exist, proceed to create a new save
    // Else, if saved data's event ID is same as currently viewed event ID, use saved data and override only specific information
    // Otherwise, prompt user to confirm replacement and create a new save if confirmed
    if(savedData === null) {
        proceedWithSave(savedData, totalExpenses, eventId, profileNum, false);
        return true;
    } else {
        currSavedEventId = savedData.eventId;

        if(eventId === currSavedEventId) {
            proceedWithSave(savedData, totalExpenses, eventId, profileNum);
            return true;
        } else {
            const currSavedEventName = savedData.eventName || "???";
        
            if(confirm(`You currently have saved data from another coin event: [${currSavedEventName}]. Proceeding with the save will overwrite your saved data from that coin event. Do you really wish to proceed?`)) {
                proceedWithSave(savedData, totalExpenses, eventId, profileNum, false);
                return true;
            } else {
                return false;
            }
        }
    }
}

function proceedWithSave(savedData, totalExpenses, eventId, profileNum, isPreserveSaveData = true) {
    let toSave = {};

    if(isPreserveSaveData) {
        toSave = savedData;
    } else {
        toSave = {
            eventName: document.getElementById("event-name").textContent,
            eventId: eventId,
            profiles: { },
        }
    }

    toSave.profiles[`profile-${profileNum}`] = {
        profileName: document.getElementById(`profile-${profileNum}-name`).value,
        expenses: totalExpenses
    };
    
    localStorage.setItem("coinEventExpenses", JSON.stringify(toSave));
}

// When user clicks on "Load Profile to Item List", retrieve saved data related to that profile
// Populate all items' purchased quantity inputs in shop item list
// Show a load success message
function loadProfileBtnListener() {
    const loadProfileBtns = document.querySelectorAll(".btn-load-profile");
    const savedData = JSON.parse(localStorage.getItem("coinEventExpenses"));

    loadProfileBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            loadProfile(savedData, this.dataset.profileNum);

            document.querySelector(".single-profile-name.active").classList.add("d-none");
            document.querySelector(".single-profile-name.active").classList.remove("active");
            document.getElementById(`active-profile-${this.dataset.profileNum}-name`).classList.remove("d-none");
            document.getElementById(`active-profile-${this.dataset.profileNum}-name`).classList.add("active");

            this.querySelector(".load-default-msg").classList.toggle("d-none");
            this.querySelector(".load-success-msg").classList.toggle("d-none");

            window.setTimeout(() => {
                this.querySelector(".load-default-msg").classList.toggle("d-none");
                this.querySelector(".load-success-msg").classList.toggle("d-none");
            }, 2000)
        })
    })
}