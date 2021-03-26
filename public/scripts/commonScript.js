document.addEventListener("DOMContentLoaded", function(event) { 
	$('[data-toggle="tooltip"]').tooltip();
    addCheckboxListener();
    addRadioListener();
    addSearchListener();
    addDeleteDbItemListener();
});

function addCheckboxListener() {
	const checkboxes = document.querySelectorAll(".single-checkbox");

	checkboxes.forEach(function(checkbox) {
		checkbox.addEventListener("click", function() {
			this.classList.toggle("active");
		})
	})
}

function addRadioListener() {
	const radios = document.querySelectorAll(".radio-select");

	radios.forEach(function(radio) {
		radio.addEventListener("click", function() {
			if(!this.classList.contains("active")) {
				const radioGroupId = this.parentNode.parentNode.id;
				const currActiveRadio = document.querySelector(`#${radioGroupId} .radio-select.active`)
				const affectedRadios = document.querySelectorAll(`#${radioGroupId} .radio-select`);

				currActiveRadio.classList.remove("active")
				this.classList.add("active");
			}
		})
	})
}

function addSearchListener() {
    const searchForm = document.getElementById("search-form");
    const searchInputField = document.getElementById("search-field");

    if(searchForm && searchInputField) {
        searchForm.addEventListener("submit", function(event) {
            event.preventDefault();
        })

        searchInputField.addEventListener("keyup", function(event) {
            const searchTerm = this.value.toLowerCase();

            // Search for input as long as above 3 characters
            // If any match, display row
            if(searchTerm.length >= 3) {
                const allSearchRows = document.querySelectorAll(".single-search-row");

                allSearchRows.forEach(function(row) {
                    const searchTerms = JSON.parse(row.dataset.searchTerms);
                    const matchingSearch = searchTerms.filter(text => text.includes(searchTerm));

                    if(matchingSearch.length > 0) {
                        row.classList.remove("d-none");
                    } else {
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

function addDeleteDbItemListener() {
    const deleteBtns = document.querySelectorAll(".delete-database-item-btn");

    deleteBtns.forEach(function(btn) {
        btn.addEventListener("click", function(event) {
            if(confirm(`Do you really wish to delete [${this.dataset.name}]?`)) {
                return true;
            } else {
                event.preventDefault();
            }
        })
    })
}