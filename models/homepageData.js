var mongoose = require("mongoose");

var homepageSchema = new mongoose.Schema({
	category: String,
	name: String,
	imgUrl: String,
	pageUrl: String,
	isCalculator: Boolean, isInfoSheet: Boolean,
	isEvent: Boolean, isFunCorner: Boolean,
});

module.exports = mongoose.model("Homepage", homepageSchema);