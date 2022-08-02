var mongoose = require("mongoose");

var farmSubSchema = new mongoose.Schema({
    farmName: String,
    expires: Date,
    updatedOn: Date,
}, { _id: false })

var monsterLifeSchema = new mongoose.Schema({
    id: String,
    name: String,
    type: String,
    rank: Number,
    effect: String,
    effectRaw: String,
    priorityValue: Number,
    isFusion: Boolean,
    fuseMaterials: [String],
    isSearchable: Boolean,
    farms: [farmSubSchema],
    source: [String],
});

module.exports = mongoose.model("Monster Life", monsterLifeSchema);