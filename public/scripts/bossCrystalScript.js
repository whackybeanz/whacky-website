window.onload = function() {
	init();
}

const getCellValue = (tr, index) => tr.children[index].dataset.val;

// Takes two rows, passes in respective column values via IIFE and compares the two values to sort based on ascending/descending order
const comparer = (index, isAscending) => 
	(row1, row2) => 
		((val1, val2) => {
			if(val1 !== '' && val2 !== '' && !isNaN(val1) && !isNaN(val2)) {
				if(isAscending) {
					val1 == 0 ? val1 = Infinity : val1;
					val2 == 0 ? val2 = Infinity : val2;
				}

				return val1 - val2;
			} else {
				return val1.toString().localeCompare(val2);
			}
		})(getCellValue(isAscending ? row1 : row2, index), getCellValue(isAscending ? row2 : row1, index));
	
function init() {
	let isAscending = [true, true, true, true, true];

	document.querySelectorAll(".table-sort-header").forEach((th) => {
		const headerIndex = Array.from(th.parentNode.children).indexOf(th);

		th.addEventListener('click', () => {
			activateCaret(th.id, isAscending[headerIndex]);

			const table = th.closest("table");

			Array.from(table.querySelectorAll(".table-rows"))
				 .sort(comparer(headerIndex, isAscending[headerIndex] = !isAscending[headerIndex]))
				 .forEach(tr => table.appendChild(tr));
		})
	})

	document.querySelectorAll(".select-sort-type").forEach((selectElem) => {
		selectElem.addEventListener("click", () => {
			if(!selectElem.classList.contains("active")) {
				Array.from(document.querySelectorAll(".select-sort-type"))
				 .forEach((elem) => elem.classList.remove("active"));

				Array.from(document.querySelectorAll(".table-sort-div"))
					 .forEach((elem) => {
					 	if(elem.classList.contains("active")) {
					 		document.getElementById(elem.id).classList.remove("active");
					 		fadeOut(`${elem.id}`);
					 	}
					 })

				setTimeout(function() {
					document.getElementById(selectElem.id).classList.add("active");
					fadeIn(`${selectElem.id}-div`);
				}, 125)
			}
		})
	})
}

function fadeOut(elem) {
	let opacity = 1;

	function decrease() {
		opacity -= 0.05;

		if(opacity <= 0) {
			document.getElementById(elem).style.opacity = 0;
			document.getElementById(elem).style.display = "none";
			return true;
		}
		document.getElementById(elem).style.opacity = opacity;
		requestAnimationFrame(decrease)
	}
	decrease();
}

function fadeIn(elem) {
	let opacity = 0;
	document.getElementById(elem).style.display = "initial";

	function increase() {
		opacity += 0.05;

		if(opacity >= 1) {
			document.getElementById(elem).style.opacity = 1;
			document.getElementById(elem).classList.add("active");
			return true;
		}
		document.getElementById(elem).style.opacity = opacity;
		requestAnimationFrame(increase)
	}
	increase();
}

function activateCaret(elemId, isAscending) {
	const affectedTable = document.getElementById(elemId).closest("table").parentNode.id;

	Array.from(document.querySelectorAll(`#${affectedTable} .table-sort-icon`))
		 .forEach((icon) => {
		 	icon.classList.remove("active");
		 })

	if(isAscending) {
		document.getElementById(`${elemId}-descending`).classList.add("active");
	} else {
		document.getElementById(`${elemId}-ascending`).classList.add("active");
	}
}