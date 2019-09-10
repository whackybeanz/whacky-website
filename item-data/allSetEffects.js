var warriorSetEffects = require("../item-data/warriorSetEffects");
var mageSetEffects = require("../item-data/mageSetEffects");
var archerSetEffects = require("../item-data/archerSetEffects");
var thiefSetEffects = require("../item-data/thiefSetEffects");
var pirateSetEffects = require("../item-data/pirateSetEffects");
var commonSetEffects = require("../item-data/commonSetEffects");

var allSetEffects = {};
allSetEffects.warrior = warriorSetEffects;
allSetEffects.mage = mageSetEffects;
allSetEffects.archer = archerSetEffects;
allSetEffects.thief = thiefSetEffects;
allSetEffects.pirate = pirateSetEffects;
allSetEffects.common = commonSetEffects;

module.exports = allSetEffects;