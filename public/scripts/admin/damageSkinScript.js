document.addEventListener("DOMContentLoaded", function(event) { 
    addServerTypeRadioListener();
    addCustomSkinRadioListener();
    addUnitSkinRadioListener();
    addRemoveSkinFromLatestListener();
});

function addServerTypeRadioListener() {
    const radioBtns = document.querySelectorAll(".is-kms-skin-input");

    radioBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            document.getElementById("msg-Miss").checked = true;
            document.getElementById("msg-Miss-label").classList.add("active");

            document.getElementById("msg-guard").checked = true;
            document.getElementById("msg-guard-label").classList.add("active");

            document.getElementById("msg-resist").checked = true;
            document.getElementById("msg-resist-label").classList.add("active");

            if(this.dataset.isKmsSkin === "yes") {
                document.getElementById("msg-counter").checked = false;
                document.getElementById("msg-counter-label").classList.remove("active");
                document.getElementById("msg-shot").checked = false;
                document.getElementById("msg-shot-label").classList.remove("active");
            } else {
                document.getElementById("unit-skin-label-no").click();
                document.getElementById("msg-counter").checked = true;
                document.getElementById("msg-counter-label").classList.add("active");
                document.getElementById("msg-shot").checked = true;
                document.getElementById("msg-shot-label").classList.add("active");
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

function addRemoveSkinFromLatestListener() {
    const btns = document.querySelectorAll(".remove-latest-dmg-skin-btn");

    btns.forEach(function(btn) {
        btn.addEventListener("click", function(event) {
            this.parentNode.remove();
        })
    })
}