document.addEventListener("DOMContentLoaded", function(event) { 
    addRadioListeners();
});

function addRadioListeners() {
    const potTypes = ["reg", "add"];
    const radioGroups = ["pot-rank-input", "dp-input", "cube-type-input"];

    potTypes.forEach(function(potType) {
        radioGroups.forEach(function(group) {
            const affectedRadios = Array.from(document.querySelectorAll(`.${potType}-${group}`));

            affectedRadios.forEach(function(radio) {
                radio.addEventListener("click", function() {
                    if(!this.classList.contains("active")) {
                        document.querySelector(`.${potType}-${group}.active`).classList.remove("active");
                        this.classList.add("active");
                        toggleElemViews(potType, group, this);
                    }
                })
            })    
        })
    })
}

function toggleElemViews(potType, group, elem) {
    if(group === "pot-rank-input") {
        const selectedPotRank = elem.dataset.potRank;
        const affectedPotRankTables = Array.from(document.querySelectorAll(`.single-${potType}-pot-rank-table`));

        if(selectedPotRank === "all") {
            affectedPotRankTables.forEach(function(table) {
                table.classList.remove("d-none");
                table.classList.add("d-flex");
            })
        } else {
            affectedPotRankTables.forEach(function(table) {
                table.classList.remove("d-flex");
                table.classList.add("d-none");
            })
            document.getElementById(`${potType}-pot-${selectedPotRank}`).classList.remove("d-none");
            document.getElementById(`${potType}-pot-${selectedPotRank}`).classList.add("d-flex");
        }
    }

    // As there are only two DP inputs for selection, using toggle is okay
    // To tweak if future developments include other DP values
    if(group === "dp-input") {
        const selectedDP = elem.dataset.dpType;
        const affectedDPelems = Array.from(document.querySelectorAll(`.single-${potType}-dp`));

        affectedDPelems.forEach(function(elem) {
            elem.classList.toggle("d-none")
        })
    }

    if(group === "cube-type-input") {
        const selectedCubeType = elem.dataset.cubeType;
        const affectedCubeElems = Array.from(document.querySelectorAll(`.single-${potType}-pot-cube-data`));
        const cubeElemsToShow = Array.from(document.querySelectorAll(`.${selectedCubeType}-cube-data`));

        if(selectedCubeType === "all") {
            affectedCubeElems.forEach(function(elem) {
                elem.classList.remove("d-none");
            })
        } else {
            affectedCubeElems.forEach(function(elem) {
                elem.classList.add("d-none");
            })

            cubeElemsToShow.forEach(function(elem) {
                elem.classList.remove("d-none")
            })
        }
    }
}

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