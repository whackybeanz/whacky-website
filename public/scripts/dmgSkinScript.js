const MAX_SELECTIONS_ALLOWED = 20;

document.addEventListener("DOMContentLoaded", function(event) { 
	// Retrieve localstorage list of damage skins and highlight all eligible damage skins on page when page loads
	// Also load list of selected damage skins into "cart"
	let currSelectedSkins = JSON.parse(localStorage.getItem("selectedSkins")) || {};
	
	Object.keys(currSelectedSkins).forEach(function(skinNum) {
		if(parseInt(skinNum) !== NaN) {
			let elem = document.getElementById(`skin-num-${skinNum}`);

			if(elem) {
				elem.classList.add("active");
			}
		}
	})

	updateCartDisplay(currSelectedSkins);
	addListListeners();
	addModalListeners();
});

function addListListeners() {
	const dmgSkinList = Array.from(document.querySelectorAll(".single-dmg-skin"));

	dmgSkinList.forEach(function(skin) {
		skin.addEventListener("click", function() {
			let currSelectedSkins = JSON.parse(localStorage.getItem("selectedSkins")) || {};
			const activeSkins = document.querySelectorAll(".single-dmg-skin.active");
			const selectedSkinNum = this.dataset.skinNum;

			if(this.classList.contains("active")) {
				this.classList.remove("active");

				// Remove selected damage skin from localstorage, remove from cart list, update displays
				delete currSelectedSkins[selectedSkinNum];
				localStorage.setItem("selectedSkins", JSON.stringify(currSelectedSkins));
				document.getElementById(`selected-skin-${selectedSkinNum}`).remove();
				updateCartDisplay(currSelectedSkins);
			} else {
				// If addition doesn't exceed allowed maximum, activate item, add to current selected skins object and save to localstorage
				// then update displays
				if(Object.keys(currSelectedSkins).length + 1 <= MAX_SELECTIONS_ALLOWED) {
					this.classList.add("active");
					currSelectedSkins[selectedSkinNum] = { name: this.dataset.skinName };
					localStorage.setItem("selectedSkins", JSON.stringify(currSelectedSkins));
					updateCartDisplay(currSelectedSkins);
				}
			}
		})
	})
}

function addModalListeners() {
	document.addEventListener('click', function(event) {
		let currSelectedSkins = JSON.parse(localStorage.getItem("selectedSkins")) || {};

		// Remove/deactivate damage skins when clicked within "cart"
		if(event.target && event.target.classList.contains("single-selected-skin")) {
			const listItemToRemove = document.getElementById(event.target.parentNode.id);
			const listItemSkinNum = listItemToRemove.dataset.skinNum;
			const dmgSkinToDeactivate = document.getElementById(`skin-num-${listItemSkinNum}`);

			if(dmgSkinToDeactivate) {
				dmgSkinToDeactivate.classList.remove("active");
			}

			delete currSelectedSkins[listItemSkinNum];
			localStorage.setItem("selectedSkins", JSON.stringify(currSelectedSkins));
			listItemToRemove.remove();
			updateCartDisplay(currSelectedSkins);
		}
	})

	// Remove all selected from cart, deactivate all elements
	document.getElementById("btn-remove-all-selected").addEventListener("click", function() {
		// Remove from cart
		document.getElementById("selected-skins-list").textContent = '';

		// Remove from localstorage
		localStorage.setItem("selectedSkins", JSON.stringify({}));
		updateCartDisplay({});

		// Deactivate all elements on currently viewed page
		const activeSkins = document.querySelectorAll(".single-dmg-skin.active");
		activeSkins.forEach(function(node) {
			node.classList.remove("active");
		})
	})
}

function updateCartDisplay(currSelectedSkins) {
	document.querySelector(".num-selected-skins").textContent = Object.keys(currSelectedSkins).length;
	document.getElementById("selected-skins-list").textContent = '';

	if(Object.keys(currSelectedSkins).length > 0) {
		document.getElementById("no-selected-skin-msg").style.display = "none";
		document.getElementById("has-selected-skin-msg").style.display = "block";
		document.getElementById("selected-skin-options").style.display = "block";
		sortDamageSkinList(currSelectedSkins);
	} else {
		document.getElementById("no-selected-skin-msg").style.display = "block";
		document.getElementById("has-selected-skin-msg").style.display = "none";
		document.getElementById("selected-skin-options").style.display = "none";
	}
}

function sortDamageSkinList(currSelectedSkins) {
	let skinsByName = [];

	Object.keys(currSelectedSkins).forEach(function(skinNum) {
		if(parseInt(skinNum) !== NaN) {
			let skinName = currSelectedSkins[skinNum].name;

			if(skinName === "???") {
				skinName = ` ${skinName}`;
			}
			skinsByName.push({ skinNum: skinNum, name: skinName });
		}
	});

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
	}
}

function displaySortedSkinList(skinsByName) {
	let numSkinsLoaded = 0;
	const dmgSkinModal = document.getElementById("selected-skins-list");

	skinsByName.forEach(function(skin) {
		if(numSkinsLoaded <= MAX_SELECTIONS_ALLOWED) {
			let imgHtml = "";

			if(skin.skinNum !== '1338' && skin.skinNum !== '1344') {
				imgHtml = `<img src="https://damage-skins.s3-ap-southeast-1.amazonaws.com/${skin.skinNum}/${skin.skinNum}.icon.png" class="mr-1">`;
			} else {
				imgHtml = `<div class="empty-box rounded-lg mr-1"></div>`
			}

			let html = `<div class="single-selected-skin-div flex-grow-1 col-12 col-sm-6 px-0 px-sm-1 mb-2" id="selected-skin-${skin.skinNum}" data-skin-num="${skin.skinNum}">
				<div class="single-selected-skin h-100 w-100 d-flex align-items-center rounded-sm py-1 px-2 cursor-pointer">
					${imgHtml} ${skin.name}
				</div>
			</div>`;
			dmgSkinModal.insertAdjacentHTML('beforeend', html);

			numSkinsLoaded++;
		}
	})
}