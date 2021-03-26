document.addEventListener("DOMContentLoaded", function(event) { 
    addIconTypeSelectListener();
    addEquipTypeSelectListener();
    addItemIdInputListener();
    addLocalhostRadioListener();
    addSearchListener();
    addDeleteIconListener();
});

function addIconTypeSelectListener() {
    const selectElem = document.getElementById("item-type");

    selectElem.addEventListener("change", function() {
        if(this.value === "equip") {
            document.getElementById("select-equip-type").classList.remove("d-none");
        } else {
            document.getElementById("select-equip-type").classList.add("d-none");
        }

        const mainFolder = this.options[this.selectedIndex].dataset.imgMainFolder;
        const subFolder = this.options[this.selectedIndex].dataset.imgSubFolder;

        document.getElementById("image-main-folder").value = mainFolder;

        if(typeof subFolder === "string") {
            document.getElementById("image-sub-folder").value = subFolder;
        } else {
            document.getElementById("image-sub-folder").value = "";
        }
    })
}

function addEquipTypeSelectListener() {
    const selectElem = document.getElementById("equip-type");

    selectElem.addEventListener("change", function() {
        console.log(this.options[this.selectedIndex])
        if(this.options[this.selectedIndex].dataset.imgSubFolder) {
            document.getElementById("image-sub-folder").value = this.options[this.selectedIndex].dataset.imgSubFolder;
        } else {
            document.getElementById("image-sub-folder").value = this.value;
        }
    })
}

function addItemIdInputListener() {
    const inputField = document.getElementById("item-id");

    inputField.addEventListener("change", function() {
        if(this.value !== "") {
            const adjustedId = this.value.toLowerCase();
            inputField.value = adjustedId;
            document.getElementById("image-file-name").value = `${adjustedId}.png`;
        } else {
            document.getElementById("image-file-name").value = "";
        }
    })
}

function addLocalhostRadioListener() {
    const radioBtns = document.querySelectorAll(".is-localhost-input");

    radioBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            if(this.dataset.isLocalhost === "yes") {
                document.getElementById("image-path-start").value = "/images";
            } else {
                document.getElementById("image-path-start").value = "https://whacky-website.s3-ap-southeast-1.amazonaws.com/images";
            }
        })
    })
}