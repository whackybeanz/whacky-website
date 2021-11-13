var mongoose = require("mongoose");

var monsterSchema = new mongoose.Schema({
    monsterId: Number,
    mapId: String,
    monsterName: String,
    monsterLevel: Number,
    monsterEXP: Number,
    monsterHP: Number,
    isBoss: Boolean,
    minEncounterLevel: Number,
    imgUrl: String,
});

module.exports = mongoose.model("Monster", monsterSchema)