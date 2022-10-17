var CoinEventHelper = require("../helpers/coinEventHelpers");
var IconHelper = require("../helpers/iconHelpers");
var RelayHelper = require("../helpers/relayHelpers");

var express = require("express");
var router  = express.Router();

var Icon    = require("../../models/iconData");
var CoinEvent = require("../../models/coinEventData");
var Fun     = require("../../models/funData");

router.get("/", function(req, res) {
    res.redirect("/calc/tactical-relay/v4");
})

router.get("/tactical-relay", function(req, res) {
    const versions = RelayHelper.getRelayMissions();

    res.locals.extraStylesheet = "more-maple/relayStyles";
    res.locals.section = "calc";
    res.locals.branch = "tactical-relay";
    res.locals.title = "Tactical Relay";
    res.render("calc/tactical-relay-index", { versions: versions });
})

router.get("/tactical-relay/:version", function(req, res) {
    const version = req.params.version;
    const event = RelayHelper.getRelayMissions(version);

    if(event === undefined) {
        res.flash("error", "Invalid version.");
        res.redirect("/events/tactical-relay");
    } else {
        var rotation = ["pirate", "warrior", "mage", "archer", "thief"];
        var classTypeList = [{ id: "warrior", name: "Warriors" }, { id: "mage", name: "Mages" }, 
                            { id: "archer", name: "Archers" }, { id: "thief", name: "Thieves" }, 
                            { id: "pirate", name: "Pirates" }, { id: "xenon", name: "Xenons" }];

        res.locals.extraStylesheet = "more-maple/relayStyles";
        res.locals.section = "calc";
        res.locals.branch = "tactical-relay";
        res.locals.title = "Tactical Relay";
        res.render("calc/tactical-relay", {event: event, classTypeList: classTypeList, rotation: rotation, version: version});
    }
})

router.get("/coin-events", function(req, res) {
    CoinEvent.find({isPublic: true})
        .then(allEvents => {
            let eventsByCategory = CoinEventHelper.sortByCategory(allEvents);

            res.locals.section = "calc";
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

router.get("/coin-events/:eventId", function(req, res) {
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
            res.locals.section = "calc";
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

module.exports = router;