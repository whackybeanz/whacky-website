const mongoose = require("mongoose");
const DamageSkin = require("../models/damageSkinData");

const damageSkinSeeds = require("./damageSkins/damageSkins");

function seedDamageSkins() {
	DamageSkin.deleteMany({}, function(err) {
		console.log("All damage skins in DB deleted");

		damageSkinSeeds.forEach(function(seed) {
			var shortName = seed.name.replace(/(Damage Skin \- | Damage Skin)/, "");
			seed.shortName = shortName;

			const startingLetter = shortName.charAt(0);
			
			if(startingLetter === "?") {
				seed.letterCategory = " ??? (Unknown)"; // Starting space is intentional to be sorted first
			} else {
				if(parseInt(startingLetter)) {
					// If starting letter is a number
					seed.letterCategory = "0-9"
				} else {
					// If starting letter is a letter
					seed.letterCategory = startingLetter;
				}
			}

			DamageSkin.create(seed, function(err, newDamageSkin) {
				if(err) {
					console.log(err);
				} else {
					console.log(`Added new data (${newDamageSkin.name}).`);
				}
			})
		})
	})
}

module.exports = seedDamageSkins;