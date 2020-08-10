const mongoose = require("mongoose");
const Icon = require("../models/iconData");

const equipTabIcons = require("./icons/equipTabIcons");
const useTabIcons = require("./icons/useTabIcons");
const setupTabIcons = require("./icons/setupTabIcons");
const etcTabIcons = require("./icons/etcTabIcons");
const cashTabIcons = require("./icons/cashTabIcons");
const mapIcons = require("./icons/mapIcons");
const bossIcons = require("./icons/bossIcons");
const otherIcons = require("./icons/otherIcons");

const iconSeeds = equipTabIcons.concat(useTabIcons, setupTabIcons, etcTabIcons, cashTabIcons, mapIcons, bossIcons, otherIcons);

function seedIcons() {
	Icon.deleteMany({}, function(err) {
		console.log("All icons in DB deleted");

		iconSeeds.forEach(function(seed) {
			Icon.create(seed, function(err, newIcon) {
				if(err) {
					console.log(err);
				} else {
					console.log(`Added new data (${newIcon.name}).`);
				}
			})
		})
	})
}

module.exports = seedIcons;