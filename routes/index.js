var express = require("express");
var router 	= express.Router();

router.get("/", function(req, res) {
	res.render("index", {extraStylesheet: "indexStyles", currNav: { main: "index" }});
})

router.get("/bonus-stats", function(req, res) {
	res.render("flameIndex", {extraStylesheet: "flameStyles", currNav: { main: "index", branch: "flames" }});
})

router.get("/set-items", function(req, res) {
	res.render("setItemIndex", {extraStylesheet: "setItemStyles", currNav: { main: "index", branch: "set-items" }});
})

router.get("/set-items/:jobType", function(req, res) {
	var jobType = req.params.jobType;
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

	res.render("setItemIndexActive", {allEquipTypes: allEquipTypes, allSetItems: compiledSetItems, allSetEffects: compiledSetEffects, jobType: jobType, statTypes: possibleStatTypes, extraStylesheet: "setItemStyles", currNav: { main: "index", branch: "set-items" }});
})

router.get("/xwrdpzl", function(req, res) {
	res.render("xword", {extraStylesheet: "xwordStyles", currNav: { main: "xword" }});
})

router.post("/xwrdpzl/answers", function(req, res) {
	var submittedAnswers = req.body.allAnswers;
	var correctAnswers = ["colossus", "kritias", "lilynouch", "skelosaurus", "magatia", "velderoth", "dolphin", "esfera", "twilight", "nine", "muto", "asteria", "karupa", "creation", "areda", "verdel", "nanuke", "taeng", "maya", "thanatos"]
	var wrongAnswers = []

	submittedAnswers.forEach((answer, index) => {
		if(answer !== correctAnswers[index]) {
			wrongAnswers.push(index+1);
		}
	});

	if(wrongAnswers.length) {
		res.send({isAnswerCorrect: false, wrongAnswers: wrongAnswers})
	} else {
		res.send({isAnswerCorrect: true})
	}
})

router.get("/relay", function(req, res) {
	var missionList = ["300 level-range mobs", "100 combo kills", "Defeat 1 daily boss",
						"300 star force mobs", "Monster Park once", "Activate 1 Rune",
						"3 Elite Monsters", "100 Multi-kills", "300 Arcane River mobs"];

	var classSelect = ["pirate", "warrior", "mage", "archer", "thief"];

	res.render("relay", {missionList: missionList, classSelect: classSelect, extraStylesheet: "relayStyles", currNav: { main: "relay" }});
})

module.exports = router;