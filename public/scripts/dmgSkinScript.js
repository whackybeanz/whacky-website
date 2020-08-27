const MAX_SELECTIONS_ALLOWED = 10;

document.addEventListener("DOMContentLoaded", function(event) { 
	const dmgSkinList = Array.from(document.querySelectorAll(".single-dmg-skin"));

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

	if(Object.keys(currSelectedSkins).length > 0) {
		updateCartDisplay(currSelectedSkins);
	}

	dmgSkinList.forEach(function(skin) {
		skin.addEventListener("click", function() {
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
});

function updateCartDisplay(currSelectedSkins) {
	document.querySelector(".num-selected-skins").textContent = Object.keys(currSelectedSkins).length;

	if(Object.keys(currSelectedSkins).length > 0) {
		document.getElementById("no-selected-skin-msg").style.display = "none";
		document.getElementById("selected-skins-list").style.display = "block";
		sortDamageSkinList(currSelectedSkins);
	} else {
		document.getElementById("no-selected-skin-msg").style.display = "block";
		document.getElementById("selected-skins-list").style.display = "none";
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

	dmgSkinModal.textContent = '';

	skinsByName.forEach(function(skin) {
		if(numSkinsLoaded <= MAX_SELECTIONS_ALLOWED) {
			let html = `<div class="single-selected-skin mb-2" id="selected-skin-${skin.skinNum}">
					<img src="https://damage-skins.s3-ap-southeast-1.amazonaws.com/${skin.skinNum}/${skin.skinNum}.icon.png" class="mr-2"> ${skin.name}
				</div>`;
			dmgSkinModal.insertAdjacentHTML('beforeend', html);

			numSkinsLoaded++;
		}
	})
}