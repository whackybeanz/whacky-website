const mongoose = require("mongoose");
const Effect = require("../models/setEffectData");

const warriorSetEffects = require("./warriorSetEffects");
const mageSetEffects = require("./mageSetEffects");
const archerSetEffects = require("./archerSetEffects");
const thiefSetEffects = require("./thiefSetEffects");
const pirateSetEffects = require("./pirateSetEffects");
const commonSetEffects = require("./commonSetEffects");

const setEffectSeeds = warriorSetEffects.concat(mageSetEffects, archerSetEffects, thiefSetEffects, pirateSetEffects, commonSetEffects);

function seedSetEffects() {
	Effect.deleteMany({}, function(err) {
		console.log("All set effects in DB deleted");

		setEffectSeeds.forEach(function(seed) {
			Effect.create(seed, function(err, newSetEffect) {
				if(err) {
					console.log(err);
				} else {
					console.log(`Added new data (${newSetEffect.setName} for ${newSetEffect.jobType}).`);
				}
			})
		})
	})
}

module.exports = seedSetEffects;