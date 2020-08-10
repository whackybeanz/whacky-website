var mongoose = require("mongoose");

var equipmentSchema = new mongoose.Schema({
	jobType: String,
	setType: String,
	equipType: String,
	id: String,
	name: String,
	level: Number,
	isOverall: Boolean,
	isLuckyItem: Boolean,
	priority: Number,
	groupId: Number,
	subgroupId: Number,
});

module.exports = mongoose.model("Equip", equipmentSchema);