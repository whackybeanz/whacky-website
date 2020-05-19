var express = require("express");
var router 	= express.Router();

router.get("/", function(req, res) {
	res.locals.section = "maple-index";
	res.locals.extraStylesheet = "indexStyles";
	res.render("mapleIndex");
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