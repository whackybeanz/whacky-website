var express = require("express");
var router 	= express.Router();

router.get("/", function(req, res) {
	res.redirect("/flames");
})

router.get("/flames", function(req, res) {
	res.locals.extraStylesheet = "flameStyles";
	res.locals.section = "extras";
	res.locals.branch = "calc-flames";
	res.render("extras/flameCalc");
})

router.get("/soul-tier-list", function(req, res) {
	var soulList = require("../item-data/soulList");
	res.locals.extraStylesheet = "soulListStyles";
	res.locals.section = "extras";
	res.locals.branch = "soul-tier-list";
	res.render("extras/soulTierList", {soulList: soulList});
})

router.get("/set-effects", function(req, res) {
	res.locals.extraStylesheet = "setItemStyles";
	res.locals.section = "extras";
	res.locals.branch = "calc-set-effects";
	res.render("extras/setEffectCalc");
})

router.get("/set-effects/:jobType", function(req, res) {
	var jobType = req.params.jobType.toLowerCase();
	var allEquipTypes = ["ring", "pocket", "pendant", "weapon", "belt", 
						"hat", "face", "eye", "top", "bottom", "shoes", 
						"earring", "shoulder", "gloves", "android",
						"emblem", "badge", "medal", "secondary", "cape", "heart"];
	var allSetItems = require("../item-data/allSetItems");
	var allSetEffects = require("../item-data/allSetEffects");

	var compiledSetItems = {};
	compiledSetItems[jobType] = allSetItems[jobType];
	compiledSetItems.common = allSetItems.common;

	var compiledSetEffects = {};
	compiledSetEffects[jobType] = allSetEffects[jobType];
	compiledSetEffects.common = allSetEffects.common;

	var possibleStatTypes = [{ key: "str", name: "STR" }, { key: "dex", name: "DEX" }, { key: "int", name: "INT" }, { key: "luk", name: "LUK" }, { key: "allStats", name: "All Stats" }, 
							{ key: "maxHp", name: "Max HP"}, { key: "maxHpMp", name: "Max HP/MP" }, { key: "maxHpMpPercent", name: "Max HP/MP %", symbol: "%" }, 
							{ key: "def", name: "DEF" }, { key: "acc", name: "Accuracy" }, { key: "avoid", name: "Avoidability" }, 
							{ key: "wa", name: "ATT" }, { key: "ma", name: "MATT" }, { key: "wama", name: "ATT/MATT" }, 
							{ key: "damagePercent", name: "Damage %", symbol: "%" }, { key: "bossPercent", name: "Boss Damage %", symbol: "%" }, { key: "iedPercent", name: "Ignore Enemy DEF %", symbol: "%" }, 
							{ key: "critDmgPercent", name: "Critical Damage %", symbol: "%" }];

	res.locals.extraStylesheet = "setItemStyles";
	res.locals.section = "extras";
	res.locals.branch = `calc-set-effects-${jobType}`;
	res.render("extras/setEffectCalcActive", {allEquipTypes: allEquipTypes, allSetItems: compiledSetItems, allSetEffects: compiledSetEffects, jobType: jobType, statTypes: possibleStatTypes});
})

module.exports = router;