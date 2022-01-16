document.addEventListener("DOMContentLoaded", function(event) { 
    addNewCoinIcon();
    addRemoveIconInputBtnListener();
    addCoinEventFormListener();
    deleteFormListener();
    addRankUpBtnListener();
    isFromWeeklyBossBtnListener();
    addToBulkAddFormListener();
    addMoreItemsListener();
    deleteAddedItemListener();
    pasteFromClipboardListener();
    removeCoinShopItemListener();
    moveItemPositions();
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

function isFromWeeklyBossBtnListener() {
    const radioBtns = document.querySelectorAll(".from-weekly-boss-input");

    radioBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            if(this.dataset.fromWeeklyBoss === "yes") {
                document.getElementById("boss-coin-values").classList.remove("d-none");
            } else {
                document.getElementById("boss-coin-values").classList.add("d-none");
            }
        })
    })
}

function addToBulkAddFormListener() {
    const commonItemAddBtns = document.querySelectorAll(".btn-add-to-bulk");

    commonItemAddBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            const iconId = this.dataset.iconId;
            const firstBulkAddInputElem = document.querySelector(".paste-input");
            
            if(firstBulkAddInputElem.value === "") {
                firstBulkAddInputElem.value = iconId;
            } else {
                const html = addIconInputHTML(iconId);
                document.getElementById("bulk-add-item-list").insertAdjacentHTML('beforeend', html);
            }

            let feedbackTextElem = this.parentNode.querySelector(".add-icon-feedback");

            feedbackTextElem.classList.remove('d-none');
            window.setTimeout(() => {
                feedbackTextElem.classList.add('d-none');
            }, 1500)
        })
    })
}

function addMoreItemsListener() {
    const addMoreItemsBtn = document.getElementById("btn-add-more-items");

    if(addMoreItemsBtn) {
        addMoreItemsBtn.addEventListener("click", function() {
            const html = addIconInputHTML();
            document.getElementById("bulk-add-item-list").insertAdjacentHTML('beforeend', html);
        })
    }
}

function addIconInputHTML(iconId = "") {
    let html = "";

    html += `<div class="col-sm-4 px-0 px-sm-2">
                <div class="border border-dark rounded-sm px-3 py-3 mb-3 position-relative">
                    <div class="delete-bulk-add-item-div text-danger position-absolute cursor-pointer">
                        <i class="fas fa-lg fa-times pointer-events-none"></i>
                    </div>
                    <div class="input-group mb-2">
                        <input type="text" class="paste-input form-control text-center" placeholder="Item ID" name="itemId" pattern="^[a-zA-Z0-9-]+$" autocomplete="off" value="${iconId}" required>
                        <div class="input-group-append">
                            <button type="button" class="btn-paste-from-clipboard btn btn-outline-custom btn-sm" data-toggle="tooltip" data-placement="bottom" title="Paste from clipboard">
                                <i class="fas fa-clipboard pointer-events-none"></i>
                            </button>
                        </div>
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

    return html;
}

function deleteAddedItemListener() {
    document.addEventListener("click", function(event) {
        if(event.target && event.target.classList.contains("delete-bulk-add-item-div")) {
            event.target.parentNode.parentNode.remove();
        }
    })
}

function pasteFromClipboardListener() {
    document.addEventListener("click", function(event) {
        if(event.target && event.target.classList.contains("btn-paste-from-clipboard")) {
            navigator.clipboard.readText().then(function(clipText) {
                event.target.parentNode.parentNode.querySelector(".paste-input").value = clipText;
            }, function() {
                
            });
        }
    })
}

function removeCoinShopItemListener() {
    const removeBtns = document.querySelectorAll(".remove-coin-shop-item-btn");

    removeBtns.forEach(function(btn) {
        btn.addEventListener("click", function(event) {
            if(confirm(`Do you really wish to remove [${this.dataset.name}]?`)) {
                const coinEventId = this.dataset.coinEventId;
                const coinShopId = this.dataset.coinShopId;
                const coinShopItemId = this.dataset.coinShopItemId;

                fetch(`/admin/coin-event/${coinEventId}/shop/${coinShopId}/item/${coinShopItemId}/delete`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' }
                })
                    .then(response => response.json())
                    .then(data => {
                        if(data.isSuccess) {
                            alert(`Deletion of [${this.dataset.name}] succeeded.`);
                            this.parentNode.parentNode.remove();
                        } else {
                            alert(`Deletion of [${this.dataset.name}] failed. Please try again. Error: ${data.message}`);
                        }
                    })
            } else {
                event.preventDefault();
            }
        })
    })
}

function moveItemPositions() {
    moveItemUp();
    moveItemDown();
}

function moveItemUp() {
    const moveItemUpBtns = document.querySelectorAll(".move-item-up-btn");

    moveItemUpBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            let nodeToMove = this.parentNode.parentNode.parentNode.parentNode;
            console.log(nodeToMove);
            let nodeParent = nodeToMove.parentNode;
            let siblingNode = nodeToMove.previousElementSibling;

            if(siblingNode !== null) {
                nodeParent.insertBefore(nodeToMove, siblingNode);
            }
        })
    })
}

function moveItemDown() {
    const moveItemDownBtns = document.querySelectorAll(".move-item-down-btn");

    moveItemDownBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            let nodeToMove = this.parentNode.parentNode.parentNode.parentNode;
            let nodeParent = nodeToMove.parentNode;
            let siblingNode = nodeToMove.nextElementSibling;

            console.log(siblingNode.classList);

            if(siblingNode !== null) {
                nodeParent.insertBefore(nodeToMove, siblingNode.nextElementSibling);
            }
        })
    })
}