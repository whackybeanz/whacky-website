var express = require("express");
var router  = express.Router();
var middleware = require("../middleware");

var CoinEvent    = require("../../models/coinEventData");
var Icon         = require("../../models/iconData");

router.get("/coin-events", middleware.isAdmin, function(req, res) {
    CoinEvent.find({}, function(err, allEvents) {
        if(err) {
            req.flash("error", `Error: ${err}`);
            res.redirect("back");
        } else {
            res.locals.extraStylesheet = "adminStyles";
            res.locals.branch = "coin-events";
            res.render("admin/coin-events/coinEvents", { allEvents: allEvents });
        }
    })
})

router.post("/coin-events", middleware.isAdmin, function(req, res) {
    const newCoinEvent = {
        addedOn: Date.now(),
        eventDetails: {
            id: req.body.eventId,
            name: req.body.eventName,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            bannerImg: req.body.bannerFileName,
        },
        coinDetails: {
            coinIds: req.body.coinIds
        }
    }

    // Update event currencies to be tagged to event
    let query = [];
    req.body.coinIds.forEach(coinId => query.push({ id: coinId }));
    let updateIconData = Icon.updateMany({ $or: query }, { $push: { usedInEvents: newCoinEvent.eventDetails.id }}, { new: true });
    let createCoinEvent = CoinEvent.create(newCoinEvent);

    Promise.all([updateIconData, createCoinEvent])
        .then(([updatedIcons, coinEvent]) => {
            req.flash("success", `Success: [${newCoinEvent.eventDetails.name}] coin event created.`);
            res.redirect("/admin/coin-events");
        })
        .catch(err => {
            req.flash("error", `Error: ${err}`);
            res.redirect("back");
        })
})

router.get("/coin-event/:id", middleware.isAdmin, function(req, res) {
    CoinEvent.findOne({ 'eventDetails.id': req.params.id }, function(err, event) {
        if(err) {
            req.flash("error", `Error: ${err}`);
            res.redirect("back");
        } else {
            res.locals.extraStylesheet = "adminStyles";
            res.locals.branch = "coin-events";
            res.render("admin/coin-events/coinEventDetails", { event: event });
        }
    })
})

module.exports = router;