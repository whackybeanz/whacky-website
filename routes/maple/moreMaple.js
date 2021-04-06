var CoinEventHelper = require("../helpers/coinEventHelpers");
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

    res.locals.extraStylesheet = "more-maple/relayStyles";
    res.locals.section = "more-maple";
    res.locals.branch = "tactical-relay";
    res.render("more-maple/tactical-relay", {missionList: missionList, classSelect: classSelect});
})

router.get("/events/coin-events", function(req, res) {
    CoinEvent.find({isPublic: true})
        .then(allEvents => {
            res.locals.section = "more-maple";
            res.locals.branch = "coin-events";
            res.locals.extraStylesheet = "more-maple/coinEventStyles";
            res.render("more-maple/coin-events/coinEventsLanding", { allEvents: allEvents });
        })
        .catch(err => {
            req.flash("error", `Error: ${err}`);
            res.redirect("back");
        })
})

router.get("/events/coin-event/:eventId", function(req, res) {
    let findIconsInEvent = Icon.find({ usedInEvents: req.params.eventId });
    let findCoinEvent = CoinEvent.findOne({ isPublic: true, eventId: req.params.eventId });

    Promise.all([findIconsInEvent, findCoinEvent])
        .then(([allIcons, coinEventData]) => {
            const iconsById = IconHelper.compileIconsById(allIcons);
            // To calculate correct value, 1 extra day needs to be added to factor for end date (as event ends on selected date but 2359hrs)
            const durationWeeks = (Date.parse(coinEventData.eventDetails.endDate) - Date.parse(coinEventData.eventDetails.startDate) + 24 * 60 * 60 * 1000) / (7 * 24 * 60 * 60 * 1000);
            const coinGainsAndCosts = CoinEventHelper.getCoinGainsAndCosts(coinEventData);
            const allItemMaxQty = CoinEventHelper.getAllItemMaxQty(coinEventData, durationWeeks);

            const responseObj = {
                icons: iconsById,
                coinEventData: coinEventData,
                durationWeeks: durationWeeks,
                coinGainsAndCosts: coinGainsAndCosts,
                allItemMaxQty: allItemMaxQty,
            }

            res.locals.extraStylesheet = "more-maple/coinEventStyles";
            res.locals.section = "more-maple";
            res.locals.branch = "coin-events";
            res.render("more-maple/coin-events/coinEventDetails", responseObj);
        })
        .catch(err => {
            console.log(err);
            req.flash("error", `Error: ${err}`);
            res.redirect("back");
        })
})

router.get("/fun", function(req, res) {
    res.redirect("/fun/crossword");
})

router.get("/fun/crossword", function(req, res) {
    res.locals.extraStylesheet = "more-maple/xwordStyles";
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