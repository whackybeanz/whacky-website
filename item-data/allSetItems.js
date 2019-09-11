var warriorSetItems = require("./warriorSetItems");
var mageSetItems = require("./mageSetItems");
var archerSetItems = require("./archerSetItems");
var thiefSetItems = require("./thiefSetItems");
var pirateSetItems = require("./pirateSetItems");
var commonSetItems = require("./commonSetItems");

var allSetItems = {};
allSetItems.warrior = warriorSetItems;
allSetItems.mage = mageSetItems;
allSetItems.archer = archerSetItems;
allSetItems.thief = thiefSetItems;
allSetItems.pirate = pirateSetItems;
allSetItems.common = commonSetItems;

module.exports = allSetItems;