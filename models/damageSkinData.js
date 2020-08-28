var mongoose = require("mongoose");

var damageSkinSchema = new mongoose.Schema({
	itemId: String,
	damageSkinId: { type: Number, index: true },
	name: String,
	shortName: { type: String, index: true },
	letterCategory: String,
	hasCounter: { type: Boolean, default: false },
	hasShot: { type: Boolean, default: false },
	hasEffect: { type: Boolean, default: true },
	hasCri0Nums: { type: Boolean, default: true },
	hasCri1Nums: { type: Boolean, default: true },
	hasRed1Nums: { type: Boolean, default: true },
	altNames: { type: [String], default: undefined },
	notes: String,

	// Unit Skins
	hasRegularSkin: { type: Boolean, default: true },
	hasUnitSkin: Boolean,
	unitDamageSkinId: Number,
	unitItemId: String,

	// For skins that use repeated image assets for certain digits by pulling from other image assets within itself
	diffCri0Nums: { type: [String], default: undefined },
	diffCri1Nums: { type: [String], default: undefined },
	diffRed0Nums: { type: [String], default: undefined },
	diffRed1Nums: { type: [String], default: undefined },

	// Only for truly custom skins
	isCustomSkin: Boolean,
	numAssetsToLoad: Number,
});

module.exports = mongoose.model("Damage Skin", damageSkinSchema);