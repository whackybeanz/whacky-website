// On DOM load, retrieve localstorage list of damage skins and highlight all eligible damage skins on page when page loads
// Also load list of selected damage skins into "cart"
document.addEventListener("DOMContentLoaded", function(event) { 
	let currSelectedSkins = JSON.parse(localStorage.getItem("selectedSkins")) || {};
	
	Object.keys(currSelectedSkins).forEach(function(skinNum) {
		if(parseInt(skinNum) !== NaN) {
			let elem = document.getElementById(`skin-num-${skinNum}`);

			if(elem) {
				elem.classList.add("active");
				elem.querySelector(".add-dmg-skin-btn").classList.remove("d-flex");
				elem.querySelector(".remove-dmg-skin-btn").classList.add("d-flex");
			}
		}
	})

	updateCartDisplay(currSelectedSkins);
	addListListeners();
	addModalListeners();
});

// To every damage skin present on page, add listeners to view/add/remove buttons
function addListListeners() {
	const addDmgSkinButtonList = Array.from(document.querySelectorAll(".single-dmg-skin .add-dmg-skin-btn"));
	const removeDmgSkinButtonList = Array.from(document.querySelectorAll(".single-dmg-skin .remove-dmg-skin-btn"));
	const MAX_SELECTIONS_ALLOWED = 20;

	addDmgSkinButtonList.forEach(function(addSkinButton) {
		addSkinButton.addEventListener("click", function() {
			const skinElem = this.parentNode.parentNode.parentNode.parentNode;
			let currSelectedSkins = JSON.parse(localStorage.getItem("selectedSkins")) || {};
			const selectedSkinNum = skinElem.dataset.skinNum;

			// If addition doesn't exceed allowed maximum, activate item, add to current selected skins object and save to localstorage
			// then update displays
			if(Object.keys(currSelectedSkins).length + 1 <= MAX_SELECTIONS_ALLOWED) {
				// Activate skin on page
				skinElem.classList.add("active");

				// Add skin to localstorage
				currSelectedSkins[selectedSkinNum] = { 
					name: skinElem.dataset.skinName, 
					hasRegularSkin: skinElem.dataset.hasRegularSkin === "true", 
					hasUnitSkin: skinElem.dataset.hasUnitSkin === "true", 
					unitSkinNum: skinElem.dataset.unitSkinNum 
				};
				localStorage.setItem("selectedSkins", JSON.stringify(currSelectedSkins));
				
				// Toggle displays for add/remove buttons
				this.classList.remove("d-flex");
				this.nextSibling.nextSibling.classList.add("d-flex");

				// Flash modal button for attention
				let skinModal = document.querySelector(".btn-dmg-skin-modal");
				skinModal.classList.add("flash");
				window.setTimeout(function(){
					skinModal.classList.remove("flash");
				}, 500)

				updateCartDisplay(currSelectedSkins);
			} else {
				// Flash modal button red for attention
				let skinModal = document.querySelector(".btn-dmg-skin-modal");
				skinModal.classList.add("flash-danger");
				window.setTimeout(function(){
					skinModal.classList.remove("flash-danger");
				}, 500)
			}
		})
	})

	removeDmgSkinButtonList.forEach(function(removeSkinButton) {
		removeSkinButton.addEventListener("click", function() {
			const skinElem = this.parentNode.parentNode.parentNode.parentNode;
			let currSelectedSkins = JSON.parse(localStorage.getItem("selectedSkins")) || {};
			const selectedSkinNum = skinElem.dataset.skinNum;

			if(skinElem.classList.contains("active")) {
				// Deactivate skin on page
				skinElem.classList.remove("active");

				// Remove selected damage skin from localstorage, remove from cart list
				delete currSelectedSkins[selectedSkinNum];
				localStorage.setItem("selectedSkins", JSON.stringify(currSelectedSkins));
				document.getElementById(`selected-skin-${selectedSkinNum}`).remove();

				// Toggle displays for add/remove buttons
				this.classList.remove("d-flex");
				this.previousSibling.previousSibling.classList.add("d-flex");
				updateCartDisplay(currSelectedSkins);
			}
		})
	})
}

function addModalListeners() {
	document.addEventListener('click', function(event) {
		let currSelectedSkins = JSON.parse(localStorage.getItem("selectedSkins")) || {};

		// Due to dynamic element nature, check if event.target matches delete button inside modal
		if(event.target && event.target.classList.contains("remove-selected-dmg-skin-btn")) {
			const listItemToRemove = document.getElementById(event.target.parentNode.parentNode.id);
			const listItemSkinNum = listItemToRemove.dataset.skinNum;
			const dmgSkinToDeactivate = document.getElementById(`skin-num-${listItemSkinNum}`);

			// If skin exists on current page, deactivate skin and toggle add/remove button displays
			if(dmgSkinToDeactivate) {
				dmgSkinToDeactivate.classList.remove("active");
				dmgSkinToDeactivate.querySelector(".add-dmg-skin-btn").classList.add("d-flex");
				dmgSkinToDeactivate.querySelector(".remove-dmg-skin-btn").classList.remove("d-flex");
			}

			// Remove skin from localstorage and save, then remove element from modal
			delete currSelectedSkins[listItemSkinNum];
			localStorage.setItem("selectedSkins", JSON.stringify(currSelectedSkins));
			listItemToRemove.remove();
			updateCartDisplay(currSelectedSkins);
		}
	})

	// Remove all selected from cart, deactivate all elements
	document.getElementById("btn-remove-all-selected").addEventListener("click", function() {
		// Replace cart contents with empty content
		document.getElementById("selected-skins-list").textContent = '';

		// Remove all selected items from localstorage
		localStorage.setItem("selectedSkins", JSON.stringify({}));
		updateCartDisplay({});

		// Deactivate all elements on currently viewed page
		const activeSkins = document.querySelectorAll(".single-dmg-skin.active");
		activeSkins.forEach(function(node) {
			node.classList.remove("active");
			node.querySelector(".add-dmg-skin-btn").classList.add("d-flex");
			node.querySelector(".remove-dmg-skin-btn").classList.remove("d-flex");
		})
	})
}

function updateCartDisplay(currSelectedSkins) {
	const numSelectedSkins = Object.keys(currSelectedSkins).length;

	// Updates the displayed numerical value on the cart
	// Empty cart temporarily (for sorting purposes)
	document.getElementById("num-selected-skins").textContent = numSelectedSkins;
	document.getElementById("selected-skins-list").textContent = '';

	if(numSelectedSkins > 0) {
		// If there is at least 1 skin in cart, remove all displays related to "no damage skin in cart"
		// Display messages on how to use cart functions
		document.getElementById("no-selected-skin-msg").style.display = "none";
		document.getElementById("has-selected-skin-msg").style.display = "block";
		document.getElementById("selected-skin-options").style.display = "flex";

		// Depending on number of selected skins, toggle red font display (for max skins selected)
		if(numSelectedSkins === 20) {
			document.getElementById("num-selected-skins").classList.add("text-danger", "font-weight-bold");
		} else {
			document.getElementById("num-selected-skins").classList.remove("text-danger", "font-weight-bold");
		}

		sortDamageSkinList(currSelectedSkins);
	} else {
		document.getElementById("no-selected-skin-msg").style.display = "block";
		document.getElementById("has-selected-skin-msg").style.display = "none";
		document.getElementById("selected-skin-options").style.display = "none";
		document.getElementById("num-selected-skins").classList.remove("text-danger", "font-weight-bold");
	}
}

function sortDamageSkinList(currSelectedSkins) {
	let skinsByName = [];
	let skinsByNum = [];

	Object.keys(currSelectedSkins).forEach(function(skinNum) {
		if(parseInt(skinNum) !== NaN) {
			let currSkin = currSelectedSkins[skinNum];
			let skinName = currSkin.name;

			// Extra spacing for accurate ASCII sorting (spaces take priority)
			if(skinName === "???") {
				skinName = ` ${skinName}`;
			}

			if(currSkin.hasUnitSkin) {
				skinsByName.push({ skinNum: skinNum, name: skinName, hasRegularSkin: currSkin.hasRegularSkin, hasUnitSkin: currSkin.hasUnitSkin, unitSkinNum: currSkin.unitSkinNum });
			} else {
				skinsByName.push({ skinNum: skinNum, name: skinName, hasRegularSkin: currSkin.hasRegularSkin });
			}
			skinsByNum.push(skinNum);
		}
	});

	// Sort skins alphabetically (by ASCII value) and update cart display with sorted list
	// Fill hidden input field with selected skin numbers
	if(skinsByName.length > 0) {
		skinsByName.sort((a, b) => {
			let nameA = a.name.toUpperCase();
			let nameB = b.name.toUpperCase();

			if (nameA < nameB) {
				return -1;
			}

			if (nameA > nameB) {
				return 1;
			}

			return 0;
		})

		displaySortedSkinList(skinsByName);
		document.getElementById("skin-num-input").value = JSON.stringify(skinsByNum);
	}
}

function displaySortedSkinList(skinsByName) {
	const dmgSkinModal = document.getElementById("selected-skins-list");

	skinsByName.forEach(function(skin) {
		let imgHtml = "";

		if(skin.hasRegularSkin) {
			imgHtml = `<img src="https://whacky-website.s3-ap-southeast-1.amazonaws.com/images/damage-skins/${skin.skinNum}/${skin.skinNum}.icon.png" class="mr-1">`;
		}

		if(skin.hasUnitSkin) {
			imgHtml += `<img src="https://whacky-website.s3-ap-southeast-1.amazonaws.com/images/damage-skins/${skin.skinNum}/${skin.unitSkinNum}-unit.icon.png" class="mr-1">`;
		}

		let html = `<div class="single-selected-skin-div flex-grow-1 col-12 col-sm-6 px-0 px-sm-1 mb-2" id="selected-skin-${skin.skinNum}" data-skin-num="${skin.skinNum}">
			<div class="single-selected-skin h-100 w-100 d-flex align-items-center rounded-sm py-1 px-2 position-relative">
				<div>${imgHtml} ${skin.name}</div>
				<div class="btn btn-sm btn-outline-danger remove-selected-dmg-skin-btn d-flex justify-content-center align-items-center rounded-sm position-absolute" data-toggle="tooltip" data-placement="bottom" title="Remove from cart">
					<i class="fas fa-minus pointer-events-none"></i>
				</div>
			</div>
		</div>`;
		dmgSkinModal.insertAdjacentHTML('beforeend', html);
	})
}