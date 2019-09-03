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

	res.render("setItemIndex", {equipTypes: equipTypes, jobTypes: jobTypes, allSetItems: allSetItems, allSetEffects: allSetEffects});
})

module.exports = router;