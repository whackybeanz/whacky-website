document.addEventListener("DOMContentLoaded", function(event) { 
	$('[data-toggle="tooltip"]').tooltip();
    addCheckboxListener();
    addRadioListener();
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