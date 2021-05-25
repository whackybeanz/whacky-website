var mongoose = require("mongoose");

var bossSchema = new mongoose.Schema({
    iconId: String,
    bossName: String,
    imgUrl: String,
    mainRank: Number, // Grey (0), bronze (1), silver (2), gold (3) stars
    subRank: Number, // Number of stars
    difficulty: String,
    crystalValue: Number,
})

module.exports = mongoose.model("Boss", bossSchema);