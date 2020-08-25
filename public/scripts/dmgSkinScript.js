document.addEventListener("DOMContentLoaded", function(event) { 
	const MAX_SELECTIONS_ALLOWED = 3;
	const dmgSkinList = Array.from(document.querySelectorAll(".single-dmg-skin"));

	// Retrieve localstorage list of damage skins and highlight all eligible damage skins on page when page loads
	let currSelectedSkins = localStorage.getItem("selectedSkins") || "";
	const selectedSkinsArr = currSelectedSkins.split(",");

	if(selectedSkinsArr.length > 0) {
		selectedSkinsArr.forEach(function(skinNum) {
			let selectedSkinNum = parseInt(skinNum);

			if(selectedSkinNum !== NaN) {
				let elem = document.getElementById(`skin-num-${skinNum}`);

				if(elem) {
					elem.classList.add("active");
				}
			}
		})
	}

	dmgSkinList.forEach(function(skin) {
		skin.addEventListener("click", function() {
			const activeSkins = document.querySelectorAll(".single-dmg-skin.active");
			const selectedSkinNum = this.dataset.skinNum;

			if(this.classList.contains("active")) {
				this.classList.remove("active");

				// Remove selected damage skin from localstorage
				const indexToRemove = selectedSkinsArr.indexOf(selectedSkinNum);
				selectedSkinsArr.splice(indexToRemove, 1);
				localStorage.setItem("selectedSkins", selectedSkinsArr);
			} else {
				// If eligible, also add to localstorage list of selected damage skins
				if(activeSkins.length + 1 <= MAX_SELECTIONS_ALLOWED) {
					this.classList.add("active");
					selectedSkinsArr.push(selectedSkinNum);
					localStorage.setItem("selectedSkins", selectedSkinsArr);
				}
			}
		})
	})
});