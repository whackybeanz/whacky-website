const patchDetails = {
	neo: {
		details: ["Released in KMS in December 2020", "Level cap raised to 300", "Level 210 to 250 EXP reductions"]
	},
	rise: {
		details: ["Released in KMS in December 2020", "Level 170 to 200 EXP reductions"]
	},
	glory: {
		details: ["Released in KMS in July 2019", "Level 220 to 234 EXP reductions"]
	}
}

const expTableSelectField = document.getElementById("exp-table-used");

expTableSelectField.addEventListener("change", (event) => {
	const selectedField = event.target.value;
	let patchDetailsField = document.getElementById("patch-details");
	patchDetailsField.innerHTML = "";

	patchDetails[selectedField].details.forEach(function(detail) {
		patchDetailsField.appendChild(document.createTextNode(`- ${detail}`));
		patchDetailsField.appendChild(document.createElement('br'));
	})
})