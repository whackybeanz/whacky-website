const mongoose = require("mongoose");
const Equip = require("../models/equipData");

const warriorSetItems = require("./setItems/warriorSetItems");
const mageSetItems = require("./setItems/mageSetItems");
const archerSetItems = require("./setItems/archerSetItems");
const thiefSetItems = require("./setItems/thiefSetItems");
const pirateSetItems = require("./setItems/pirateSetItems");
const commonSetItems = require("./setItems/commonSetItems");

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