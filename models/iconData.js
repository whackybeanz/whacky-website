var mongoose = require("mongoose");

// category currently only used in equip icon seeds to split items by respective item part

var iconSchema = new mongoose.Schema({
	itemType: String,
	category: String,
	id: String,
	name: String,
	imgUrl: String,
	usedInSections: { type: [String], default: [] }
});

module.exports = mongoose.model("Icon", iconSchema);