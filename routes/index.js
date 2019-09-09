var express = require("express");
var router 	= express.Router();

router.get("/", function(req, res) {
	res.render("index");
})

router.get("/bonus-stats", function(req, res) {
	res.render("flameIndex");
})

router.get("/set-items", function(req, res) {
	var allSetItems = require("./allSetItems");
	var allSetEffects = require("./allSetEffects");
	var possibleStatTypes = [{ key: "str", name: "STR" }, { key: "dex", name: "DEX" }, { key: "int", name: "INT" }, { key: "luk", name: "LUK" }, 
							{ key: "allStats", name: "All Stats" }, { key: "maxHpMp", name: "Max HP/MP" }, { key: "maxHpMpPercent", name: "Max HP/MP %", symbol: "%" }, 
							{ key: "def", name: "DEF" }, { key: "acc", name: "Accuracy" }, { key: "avoid", name: "Avoidability" },
							{ key: "wa", name: "ATT" }, { key: "ma", name: "MATT" }, { key: "bossPercent", name: "Boss Damage %", symbol: "%" }, { key: "iedPercent", name: "Ignore Enemy DEF %", symbol: "%" }];

	res.render("setItemIndex", {allSetItems: allSetItems, allSetEffects: allSetEffects, statTypes: possibleStatTypes});
})

module.exports = router;