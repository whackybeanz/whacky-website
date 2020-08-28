var CommonHelper = require("./Helpers/commonHelpers");
var IconHelper = require("./Helpers/iconHelpers");

var express = require("express");
var router 	= express.Router();
var Icon 	= require("../models/iconData");
var Homepage 	= require("../models/homepageData");

router.get("/", function(req, res) {
	let getIcons = Icon.find({usedInSections: "homepage"});
	let getHomepageDetails = Homepage.find();

	Promise.all([getIcons, getHomepageDetails])
		.then(([allIcons, homepageDetails]) => {
			const compiledIcons = IconHelper.compileIcons(allIcons);
			const allSections = [...new Set(homepageDetails.map(item => item.category))];
			let sections = {};
			allSections.forEach(section => sections[section] = []);

			homepageDetails.forEach(function(item) {
				sections[item.category].push(item);
			});

			sections["extras"].sort(CommonHelper.sortByName);

			res.locals.section = "maple-index";
			res.locals.extraStylesheet = "indexStyles";
			res.render("mapleIndex", {sections: sections, icons: compiledIcons});
		})
		.catch(err => {
			console.log(err);
			res.redirect("back");
		})
})

router.get("/events", function(req, res) {
	res.redirect("/events/tactical-relay");
})

router.get("/events/tactical-relay", function(req, res) {
	var missionList = ["300 level-range mobs", "100 combo kills", "Defeat 1 daily boss",
						"300 star force mobs", "Monster Park once", "Activate 1 Rune",
						"3 Elite Monsters", "100 Multi-kills", "300 Arcane River mobs"];

	var classSelect = ["pirate", "warrior", "mage", "archer", "thief"];

	res.locals.extraStylesheet = "relayStyles";
	res.locals.section = "more-maple";
	res.locals.branch = "tactical-relay";
	res.render("more-maple/tactical-relay", {missionList: missionList, classSelect: classSelect});
})

router.get("/fun", function(req, res) {
	res.redirect("/fun/crossword");
})

router.get("/fun/crossword", function(req, res) {
	res.locals.extraStylesheet = "xwordStyles";
	res.locals.section = "more-maple";
	res.locals.branch = "crossword";
	res.render("more-maple/crossword");
})

router.post("/fun/crossword/answers", function(req, res) {
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

module.exports = router;