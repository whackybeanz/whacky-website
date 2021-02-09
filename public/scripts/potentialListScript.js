document.addEventListener("DOMContentLoaded", function(event) { 
    addEquipSelectListeners();
    addServerBtnListeners();
});

function addEquipSelectListeners() {
    const itemParts = Array.from(document.querySelectorAll(".equip-slot"));

    itemParts.forEach(function(part) {
        if(!part.classList.contains("disabled")) {
            part.addEventListener("click", function() {
                if(!this.classList.contains("active")) {
                    document.querySelector(".equip-slot.active").classList.remove("active");
                    this.classList.add("active");

                    const itemPart = this.dataset.itemPart;
                    let selectElem = document.getElementById("item-part");
                    selectElem.value = itemPart;
                }
            })
        }
    })
}

function addServerBtnListeners() {
    const serverTypeBtns = Array.from(document.querySelectorAll(".server-type-input"));

    serverTypeBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            if(!this.classList.contains("active")) {
                document.querySelector(".server-type-input.active").classList.remove("active");
                this.classList.add("active");
            }
        })
    })
}