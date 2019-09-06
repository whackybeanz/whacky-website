var express = require("express");
var router 	= express.Router();

router.get("/", function(req, res) {
	res.render("index");
})

router.get("/bonus-stats", function(req, res) {
	res.render("flameIndex");
})

router.get("/set-items", function(req, res) {
	var equipTypes = ["hat", "face", "eye"];
	var jobTypes = ["warrior", "mage", "archer", "thief", "pirate", "all"];
	var allSetItems = require("./allSetItems");
	var allSetEffects = require("./allSetEffects");
	var possibleStatTypes = ["str", "dex", "int", "luk", "allStats", "maxHpMp", "maxHpMpPercent", "def", "acc", "avoid",
							"wa", "ma", "bossPercent", "iedPercent"];

	res.render("setItemIndex", {equipTypes: equipTypes, jobTypes: jobTypes, allSetItems: allSetItems, allSetEffects: allSetEffects});
})

module.exports = router;