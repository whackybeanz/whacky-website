const mongoose = require("mongoose");
const Equip = require("../models/equipData");

const warriorSetItems = require("./warriorSetItems");
const mageSetItems = require("./mageSetItems");
const archerSetItems = require("./archerSetItems");
const thiefSetItems = require("./thiefSetItems");
const pirateSetItems = require("./pirateSetItems");
const commonSetItems = require("./commonSetItems");

const equipSeeds = warriorSetItems.concat(mageSetItems, archerSetItems, thiefSetItems, pirateSetItems, commonSetItems);

function seedEquips() {
	Equip.deleteMany({}, function(err) {
		console.log("All equips in DB deleted");

		equipSeeds.forEach(function(seed) {
			Equip.create(seed, function(err, newEquip) {
				if(err) {
					console.log(err);
				} else {
					console.log(`Added new data (${newEquip.name}).`);
				}
			})
		})
	})
}

module.exports = seedEquips;