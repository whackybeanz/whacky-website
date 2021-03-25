document.addEventListener("DOMContentLoaded", function(event) { 
    addServerTypeRadioListener();
    addCustomSkinRadioListener();
    addUnitSkinRadioListener();
});

function addServerTypeRadioListener() {
    const radioBtns = document.querySelectorAll(".is-kms-skin-input");

    radioBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            if(this.dataset.isKmsSkin === "yes") {
                document.getElementById("counter-label-no").click();
                document.getElementById("shot-label-no").click();
            } else {
                document.getElementById("unit-skin-label-no").click();
                document.getElementById("counter-label-yes").click();
                document.getElementById("shot-label-yes").click();
            }
        })
    })
}

function addCustomSkinRadioListener() {
    const radioBtns = document.querySelectorAll(".is-custom-skin-input");

    radioBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            if(this.dataset.isCustomSkin === "yes") {
                document.getElementById("custom-skin-section").classList.remove("d-none");
            } else {
                document.getElementById("custom-skin-section").classList.add("d-none");
            }
        })
    })
}

function addUnitSkinRadioListener() {
    const radioBtns = document.querySelectorAll(".has-unit-skin-input");

    radioBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            if(this.dataset.hasUnitSkin === "yes") {
                document.getElementById("unit-skin-section").classList.remove("d-none");
            } else {
                document.getElementById("unit-skin-section").classList.add("d-none");
            }
        })
    })
}

