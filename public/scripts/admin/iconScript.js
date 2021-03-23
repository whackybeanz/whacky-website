document.addEventListener("DOMContentLoaded", function(event) { 
    addIconTypeSelectListener();
    addEquipTypeSelectListener();
    addItemIdInputListener();
    addCheckboxListener();
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
			document.getElementById("image-file-name").value = `${this.value}.png`;
		} else {
			document.getElementById("image-file-name").value = "";
		}
	})
}

function addCheckboxListener() {
	const checkboxes = document.querySelectorAll(".single-checkbox");

	checkboxes.forEach(function(checkbox) {
		checkbox.addEventListener("click", function() {
			this.classList.toggle("active");
		})
	})
}

function addLocalhostRadioListener() {
	const radioBtns = document.querySelectorAll(".is-localhost-input");

	radioBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            if(!this.classList.contains("active")) {
            	document.querySelector(".is-localhost-input.active").classList.remove("active");
            	this.classList.add("active");

            	if(this.dataset.isLocalhost === "yes") {
            		document.getElementById("image-path-start").value = "/images";
            	} else {
            		document.getElementById("image-path-start").value = "https://whacky-website.s3-ap-southeast-1.amazonaws.com/images";
            	}
            }
        })
    })
}

function addSearchListener() {
	const searchForm = document.getElementById("search-icon-form");
	const searchInputField = document.getElementById("search-icon-field");

	if(searchForm && searchInputField) {
		searchForm.addEventListener("submit", function(event) {
			event.preventDefault();
		})

		searchInputField.addEventListener("keyup", function(event) {
			const searchTerm = this.value.toLowerCase();

			// Search for input as long as above 3 characters
			// Search by equipType (if applicable), icon ID and icon name
			// If any match, display row
			if(searchTerm.length >= 3) {
				const allSearchRows = document.querySelectorAll(".single-search-row");

				allSearchRows.forEach(function(row) {
					if((row.dataset.equipType && row.dataset.equipType.toLowerCase().includes(searchTerm)) ||
						row.dataset.iconId.toLowerCase().includes(searchTerm) ||
						row.dataset.iconName.toLowerCase().includes(searchTerm)) {
						row.classList.remove("d-none");
					}  else {
						row.classList.add("d-none");
					}
				})
			} else {
				const allSearchRows = document.querySelectorAll(".single-search-row");

				allSearchRows.forEach(function(row) {
					row.classList.remove("d-none");
				})
			}
		})
	}
}

function addDeleteIconListener() {
	const deleteIconBtns = document.querySelectorAll(".delete-icon-btn");

	deleteIconBtns.forEach(function(btn) {
		btn.addEventListener("click", function(event) {
			if(confirm(`Do you really wish to delete [${this.dataset.iconName}]?`)) {
				return true;
			} else {
				event.preventDefault();
			}
		})
	})
}