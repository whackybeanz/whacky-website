document.addEventListener("DOMContentLoaded", function(event) { 
    addIconTypeSelectListener();
    addEquipTypeSelectListener();
    addItemIdInputListener();
    addLocalhostRadioListener();
    addCopyToClipboardListener();
    removeIconListener();
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

// To prevent eventListener from firing twice, callback function is split into its own handler
function addCopyToClipboardListener() {
    const copyBtns = document.querySelectorAll(".btn-copy-to-clipboard");

    copyBtns.forEach(function(btn) {
        btn.addEventListener("click", getNode)
    })
}

function getNode() {
    const copyBtnElem = this;
    const iconId = copyBtnElem.parentNode.parentNode.querySelector(".cell-icon-id").textContent;

    navigator.clipboard.writeText(iconId).then(function() {
        
    }, function() {
        
    });
}

function removeIconListener() {
    const removeBtns = document.querySelectorAll(".remove-icon-btn");

    removeBtns.forEach(function(btn) {
        btn.addEventListener("click", function(event) {
            if(confirm(`Do you really wish to remove [${this.dataset.name}]?`)) {
                const iconId = this.dataset.iconId;

                fetch(`/admin/icon/${iconId}/delete`, {
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