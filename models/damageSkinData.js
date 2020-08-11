var mongoose = require("mongoose");

var damageSkinSchema = new mongoose.Schema({
	itemId: String,
	damageSkinId: Number,
	name: String,
});

module.exports = mongoose.model("Damage Skin", damageSkinSchema);