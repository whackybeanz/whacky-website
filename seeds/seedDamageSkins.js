const mongoose = require("mongoose");
const DamageSkin = require("../models/damageSkinData");

const damageSkinSeeds = require("./damageSkins/damageSkins");

function seedDamageSkins() {
	DamageSkin.deleteMany({}, function(err) {
		console.log("All damage skins in DB deleted");

		damageSkinSeeds.forEach(function(seed) {
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