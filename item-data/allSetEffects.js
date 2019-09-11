var warriorSetEffects = require("./warriorSetEffects");
var mageSetEffects = require("./mageSetEffects");
var archerSetEffects = require("./archerSetEffects");
var thiefSetEffects = require("./thiefSetEffects");
var pirateSetEffects = require("./pirateSetEffects");
var commonSetEffects = require("./commonSetEffects");

var allSetEffects = {};
allSetEffects.warrior = warriorSetEffects;
allSetEffects.mage = mageSetEffects;
allSetEffects.archer = archerSetEffects;
allSetEffects.thief = thiefSetEffects;
allSetEffects.pirate = pirateSetEffects;
allSetEffects.common = commonSetEffects;

module.exports = allSetEffects;