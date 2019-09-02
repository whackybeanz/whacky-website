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

	var equipsPerJobType = {
		hat: {
			warrior: [
				{image: "/images/equips/acs-knight-hat.png", name: "Arcaneshade Knight Hat", setType: "acs"},
				{image: "/images/equips/abs-bastion-helm.png", name: "Absolabs Bastion Helm", setType: "abs"},
			],
			mage: [
				{image: "/images/equips/acs-mage-hat.png", name: "Arcaneshade Mage Hat", setType: "acs"},
				{image: "/images/equips/abs-cabalist-crown.png", name: "Absolabs Cabalist Crown", setType: "abs"},
			],
			archer: [
				{image: "/images/equips/acs-archer-hat.png", name: "Arcaneshade Archer Hat", setType: "acs"},
				{image: "/images/equips/abs-trueshot-hood.png", name: "Absolabs Trueshot Hood", setType: "abs"},
			],
			thief: [
				{image: "/images/equips/acs-bandit-hat.png", name: "Arcaneshade Bandit Hat", setType: "acs"},
				{image: "/images/equips/abs-shadow-beret.png", name: "Absolabs Shadow Beret", setType: "abs"},
			],
			pirate: [
				{image: "/images/equips/acs-pirate-hat.png", name: "Arcaneshade Pirate Hat", setType: "acs"},
				{image: "/images/equips/abs-brigadier-fedora.png", name: "Absolabs Brigadier Fedora", setType: "abs"},
			]
		},
		face: {
			all: [
				{image: "/images/equips/meister-symbol.png", name: "Meister Symbol", setType: "none"},
				{image: "/images/equips/condensed-crystal.png", name: "Condensed Strength Crystalline", setType: "bossAcc"},
			]
		},
		eye: {
			all: [
				{image: "/images/equips/papulatus-mark.png", name: "Papulatus Mark", setType: "bossAcc"},
				{image: "/images/equips/black-bean-mark.png", name: "Black Bean Mark", setType: "bossAcc"},
				{image: "/images/equips/aqua-letter.png", name: "Aqua Letter Eye Decoration", setType: "bossAcc"},
			]
		}
	}

	res.render("setItemIndex", {equipTypes: equipTypes, jobTypes: jobTypes, equipsPerJobType: equipsPerJobType});
})

module.exports = router;