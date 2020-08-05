const mongoose = require("mongoose");
const Soul = require("../models/bossSoulData");

const tier1Souls = require("./souls/tier1SoulList");
const tier2Souls = require("./souls/tier2SoulList");
const tier3Souls = require("./souls/tier3SoulList");
const tier4Souls = require("./souls/tier4SoulList");
const tier5Souls = require("./souls/tier5SoulList");
const tier6Souls = require("./souls/tier6SoulList");
const tier7Souls = require("./souls/tier7SoulList");

const soulSeeds = tier1Souls.concat(tier2Souls, tier3Souls, tier4Souls, tier5Souls, tier6Souls, tier7Souls);

function seedSouls() {
	Soul.deleteMany({}, function(err) {
		console.log("All boss souls in DB deleted");

		soulSeeds.forEach(function(seed) {
			Soul.create(seed, function(err, newBossSoul) {
				if(err) {
					console.log(err);
				} else {
					console.log(`Added new data (${newBossSoul.bossName}).`);
				}
			})
		})
	})
}

module.exports = seedSouls;