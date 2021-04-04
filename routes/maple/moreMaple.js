var IconHelper = require("../helpers/iconHelpers");

var express = require("express");
var router  = express.Router();

var Icon    = require("../../models/iconData");
var CoinEvent = require("../../models/coinEventData");

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

router.get("/events/coin-events", function(req, res) {
    CoinEvent.find({isPublic: true})
        .then(allEvents => {
            res.locals.section = "more-maple";
            res.locals.branch = "coin-events";
            res.render("more-maple/coin-events/coinEventsLanding", { allEvents: allEvents });
        })
        .catch(err => {
            req.flash("error", `Error: ${err}`);
            res.redirect("back");
        })
})

router.get("/events/coin-event/:eventId", function(req, res) {
    CoinEvent.findOne({ isPublic: true, eventId: req.params.eventId })
        .then(coinEventData => {
            res.locals.section = "more-maple";
            res.locals.branch = "coin-events";
            res.render("more-maple/coin-events/coinEventDetails", { coinEventData: coinEventData });
        })
        .catch(err => {
            req.flash("error", `Error: ${err}`);
            res.redirect("back");
        })
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