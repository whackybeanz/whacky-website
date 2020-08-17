var mongoose = require("mongoose");

var damageSkinSchema = new mongoose.Schema({
	itemId: String,
	damageSkinId: Number,
	name: String,
	hasCounter: { type: Boolean, default: false },
	hasShot: { type: Boolean, default: false },
	hasEffect: { type: Boolean, default: true },
	hasCri0Nums: { type: Boolean, default: true },
	hasCri1Nums: { type: Boolean, default: true },
	hasRed1Nums: { type: Boolean, default: true },
	isCustomSkin: { type: Boolean, default: false },
	isUnitSkin: { type: Boolean, defualt: false},
	altNames: [String],
});

module.exports = mongoose.model("Damage Skin", damageSkinSchema);