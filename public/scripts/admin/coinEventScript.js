document.addEventListener("DOMContentLoaded", function(event) { 
    addNewCoinIcon();
    addRemoveIconInputBtnListener();
    addCoinEventFormListener();
    deleteFormListener();
    addRankUpBtnListener();
    addMoreItemsListener();
    deleteAddedItemListener();
});

function addNewCoinIcon() {
    const addIconBtn = document.getElementById("btn-add-coin-icon");

    if(addIconBtn) {
        addIconBtn.addEventListener("click", function() {
            const html = `<div class="d-flex align-items-center mb-2">
                            <input type="text" class="col-11 form-control mr-2" name="coinIconIds" pattern="^[a-zA-Z0-9-]+$" placeholder="Coin Icon ID" required autocomplete="off">
                            <button type="button" class="remove-coin-icon-input btn text-danger d-flex align-items-center"><i class="fas fa-times"></i></button>
                        </div>`;
            addIconBtn.insertAdjacentHTML('beforebegin', html);
        })
    }
}

function addRemoveIconInputBtnListener() {
    document.addEventListener("click", function(event) {
        if(event.target && event.target.classList.contains("remove-coin-icon-input")) {
            event.target.parentNode.remove();
        }
    })
}

function addCoinEventFormListener() {
    const addCoinEventForm = document.getElementById("add-coin-event-form");

    if(addCoinEventForm) {
        addCoinEventForm.addEventListener("submit", function(event) {
            if(checkDateValidity) {
                return true;
            } else {
                event.preventDefault();
            }
        })
    }
}

function checkDateValidity() {
    const startDateValue = document.getElementById("start-date").value;
    const endDateValue = document.getElementById("end-date").value;
    const startDate = new Date(startDateValue);
    const endDate = new Date(endDateValue);

    if(startDateValue !== "" && endDateValue !== "" && startDate < endDate) {
        if(numWeeks < 12) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function deleteFormListener() {
    const deleteCoinEventForm = document.getElementById("delete-coin-event-form");
    const deleteCoinShopForm = document.getElementById("delete-coin-shop-form");

    if(deleteCoinEventForm) {
        const eventName = document.getElementById("event-name").value;

        deleteCoinEventForm.addEventListener("submit", function(event) {
            if(prompt(`Do you really wish to delete the ${eventName} coin event? This action is irreversible.\n\nType 'confirm delete' (without quotation marks) to proceed with deletion.`) === "confirm delete") {
                return true;
            } else {
                event.preventDefault();
            }
        })
    }

    if(deleteCoinShopForm) {
        const shopName = document.getElementById("coin-shop-name").value;

        deleteCoinShopForm.addEventListener("submit", function(event) {
            if(prompt(`Do you really wish to delete the [${shopName}] coin shop? This action is irreversible.\n\nType 'confirm delete' (without quotation marks) to proceed with deletion.`) === "confirm delete") {
                return true;
            } else {
                event.preventDefault();
            }
        })
    }
}

function addRankUpBtnListener() {
    const radioBtns = document.querySelectorAll(".used-for-rank-up-input");

    radioBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            if(this.dataset.usedForRankUp === "yes") {
                document.getElementById("rank-up-table").classList.remove("d-none");
            } else {
                document.getElementById("rank-up-table").classList.add("d-none");
            }
        })
    })
}

function addMoreItemsListener() {
    const addMoreItemsBtn = document.getElementById("btn-add-more-items");

    if(addMoreItemsBtn) {
        addMoreItemsBtn.addEventListener("click", function() {
            const html = `<div class="col-sm-4 px-0 px-sm-2">
                            <div class="border border-dark rounded-sm px-3 py-3 mb-3 position-relative">
                                <div class="delete-bulk-add-item-div text-danger position-absolute cursor-pointer">
                                    <i class="fas fa-lg fa-times pointer-events-none"></i>
                                </div>
                                <div class="form-group mb-2">
                                    <input type="text" class="form-control text-center" placeholder="Item ID" name="itemId" pattern="^[a-zA-Z0-9-]+$" autocomplete="off" required>
                                </div>
                                <div class="form-group mb-2">
                                    <input type="number" class="form-control text-center" placeholder="Price" name="price" autocomplete="off" required>
                                </div>
                                <div class="form-group mb-2">
                                    <input type="number" class="form-control text-center" placeholder="Quantity" name="quantity" autocomplete="off">
                                </div>
                                <div class="form-group mb-0">
                                    <input type="text" class="form-control text-center" placeholder="Notes" name="notes" autocomplete="off">
                                </div>
                            </div>
                        </div>`;
            document.getElementById("bulk-add-item-list").insertAdjacentHTML('beforeend', html);
        })
    }
}

function deleteAddedItemListener() {
    document.addEventListener("click", function(event) {
        if(event.target && event.target.classList.contains("delete-bulk-add-item-div")) {
            event.target.parentNode.parentNode.remove();
        }
    })
}