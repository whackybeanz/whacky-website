var CoinEventHelper = require("../helpers/coinEventHelpers");
var IconHelper = require("../helpers/iconHelpers");

var express = require("express");
var router  = express.Router();

var Icon    = require("../../models/iconData");
var CoinEvent = require("../../models/coinEventData");
var Fun     = require("../../models/funData");

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
    res.locals.title = "Tactical Relay";
    res.render("more-maple/tactical-relay", {missionList: missionList, classSelect: classSelect});
})

router.get("/events/coin-events", function(req, res) {
    CoinEvent.find({isPublic: true})
        .then(allEvents => {
            let eventsByCategory = CoinEventHelper.sortByCategory(allEvents);

            res.locals.section = "more-maple";
            res.locals.branch = "coin-events";
            res.locals.extraStylesheet = "more-maple/coinEventStyles";
            res.locals.title = "Coin Events / Shops";
            res.render("more-maple/coin-events/coinEventsLanding", { eventsByCategory: eventsByCategory });
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
            res.locals.title = `Coin Event Details (${coinEventData.eventDetails.name})`
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
    res.locals.title = "Crossword Puzzle";
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

router.get("/fun/word-search", function(req, res) {
    res.locals.extraStylesheet = "more-maple/wordSearchStyles";
    res.locals.section = "more-maple";
    res.locals.branch = "word-search";
    res.locals.title = "Word Search";

    let board = [['A', 'N', 'I', 'N', 'S', 'Q', 'J', 'A', 'C', 'T', 'S', 'C', 'M', 'D', 'G'],
                ['R', 'R', 'A', 'H', 'E', 'T', 'U', 'Z', 'R', 'L', 'A', 'E', 'E', 'I', 'R'],
                ['E', 'E', 'D', 'V', 'L', 'E', 'A', 'A', 'V', 'R', 'D', 'R', 'I', 'O', 'I'],
                ['S', 'W', 'B', 'E', 'E', 'M', 'E', 'R', 'C', 'Z', 'R', 'N', 'S', 'R', 'N'],
                ['I', 'F', 'Z', 'Z', 'N', 'H', 'N', 'A', 'F', 'O', 'E', 'I', 'T', 'Y', 'D'],
                ['A', 'V', 'V', 'Z', 'E', 'T', 'N', 'N', 'Y', 'O', 'J', 'U', 'E', 'T', 'I'],
                ['K', 'K', 'G', 'N', 'P', 'E', 'M', 'A', 'A', 'Z', 'R', 'M', 'R', 'U', 'N'],
                ['J', 'W', 'I', 'L', 'S', 'G', 'L', 'I', 'T', 'E', 'Y', 'C', 'U', 'A', 'G'],
                ['G', 'N', 'T', 'H', 'O', 'S', 'J', 'Q', 'L', 'I', 'B', 'N', 'E', 'E', 'S'],
                ['E', 'I', 'A', 'R', 'T', 'E', 'G', 'J', 'Z', 'L', 'G', 'K', 'G', 'B', 'Q'],
                ['J', 'D', 'L', 'Y', 'E', 'F', 'I', 'L', 'R', 'E', 'T', 'S', 'N', 'O', 'M'],
                ['E', 'A', 'L', 'M', 'A', 'P', 'L', 'E', 'S', 'T', 'O', 'R', 'Y', 'I', 'B'],
                ['B', 'E', 'P', 'A', 'P', 'U', 'L', 'A', 'T', 'U', 'S', 'N', 'X', 'T', 'P'],
                ['R', 'I', 'X', 'I', 'L', 'E', 'R', 'E', 'W', 'O', 'P', 'H', 'B', 'O', 'C'],
                ['D', 'O', 'M', 'I', 'N', 'A', 'T', 'O', 'R', 'E', 'B', 'X', 'T', 'R', 'V']];

    let wordList = ["Arcaneshade", "Ardentmill", "Balrog", "Beautyroid", "Cernium", 
                    "Dominator", "Erdas", "Evan", "Grinding", "Kaiser", "Meister", 
                    "Maplestory", "Monster Life", "Nineheart", "Papulatus", "Pink Bean", 
                    "Power Elixir", "Royal Style", "Star Force", "Yeti"];

    res.render("more-maple/word-search", { board: board, wordList: wordList });
})

module.exports = router;