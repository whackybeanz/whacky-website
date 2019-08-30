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
	var jobTypes = ["warrior", "mage", "archer", "thief", "pirate"];

	var equipsPerJobType = {
		hat: {
			warrior: [
				{image: "/images/equips/acs-warrior-hat.png", name: "Arcaneshade Warrior Hat"},
				{image: "/images/equips/abs-mage-hat.png", name: "Absolabs Warrior Hat"},
			],
			mage: [
				{image: "/images/equips/acs-warrior-hat.png", name: "Arcaneshade Mage Hat"},
				{image: "/images/equips/abs-mage-hat.png", name: "Absolabs Mage Hat"},
			],
			archer: [
				{image: "/images/equips/acs-warrior-hat.png", name: "Arcaneshade Mage Hat"},
			],
			thief: [
				{image: "/images/equips/acs-warrior-hat.png", name: "Arcaneshade Mage Hat"},
			],
			pirate: [
				{image: "/images/equips/acs-warrior-hat.png", name: "Arcaneshade Mage Hat"},
			]
		},
		face: {
			warrior: [
				{image: "/images/equips/acs-warrior-hat.png", name: "Arcaneshade Warrior Hat"},
			],
			mage: [
				{image: "/images/equips/acs-warrior-hat.png", name: "Arcaneshade Mage Hat"},
			],
			archer: [
				{image: "/images/equips/acs-warrior-hat.png", name: "Arcaneshade Mage Hat"},
			],
			thief: [			],
			pirate: [			]
		},
		eye: {
			warrior: [
				{image: "/images/equips/acs-warrior-hat.png", name: "Arcaneshade Warrior Hat"},
			],
			mage: [
				{image: "/images/equips/acs-warrior-hat.png", name: "Arcaneshade Mage Hat"},
			],
			archer: [			],
			thief: [			],
			pirate: [			]
		}
	}

	res.render("setItemIndex", {equipTypes: equipTypes, jobTypes: jobTypes, equipsPerJobType: equipsPerJobType});
})

module.exports = router;