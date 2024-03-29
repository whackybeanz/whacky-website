var mongoose = require("mongoose");

var mapSchema = new mongoose.Schema({
    mapIcon: String,
    worldRegion: String,
    subregion: String,
    regionStartLevel: Number,
    firstMonsterLevel: Number,
    lastMonsterLevel: Number,
    isEnforceStartLevel: Boolean,
    mapLocations: [{
        mapName: String,
        monsters: [{
            monsterId: Number,
            monsterName: String,
            monsterLevel: Number,
            monsterEXP: Number,
            monsterHP: Number,
            isBoss: Boolean,
        }]
    }]
});

module.exports = mongoose.model("Map", mapSchema)