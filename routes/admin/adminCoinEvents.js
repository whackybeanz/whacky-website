var AdminHelper = require("../helpers/adminHelpers");
var IconHelper = require("../helpers/iconHelpers");

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
        isPublic: req.body.isPublic === "yes",
        addedOrUpdatedOn: Date.now(),
        eventId: req.body.eventId,
        eventDetails: {
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
    let findIconsInEvent = Icon.find({ usedInEvents: req.params.id });
    let findCoinEvent = CoinEvent.findOne({ eventId: req.params.id });

    Promise.all([findIconsInEvent, findCoinEvent])
        .then(([allIcons, coinEventData]) => {
            const iconsById = IconHelper.compileIconsById(allIcons);
            res.locals.extraStylesheet = "adminStyles";
            res.locals.branch = "coin-events";
            res.render("admin/coin-events/coinEventDetails", { icons: iconsById, coinEventData: coinEventData });
        })
        .catch(err => {
            req.flash("error", `Error: ${err}`);
            res.redirect("/admin/coin-events");
        })
})

router.post("/coin-event/:id", middleware.isAdmin, function(req, res) {
    const updatedCoinEvent = {
        isPublic: req.body.isPublic === "yes",
        addedOrUpdatedOn: Date.now(),
        eventDetails: {
            name: req.body.eventName,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            bannerImg: req.body.bannerFileName,
        }
    }

    CoinEvent.findOneAndUpdate({ _id: req.params.id }, {$set: updatedCoinEvent}, { new: true })
        .then(updatedCoinEvent => {
            req.flash("success", `Success: [${updatedCoinEvent.eventDetails.name}] coin event details updated.`);
            res.redirect(`/admin/coin-event/${updatedCoinEvent.eventId}`);
        })
        .catch(err => {
            req.flash("error", `Error: ${err}`);
            res.redirect("back");
        })
})

router.post("/coin-event/:id/delete", middleware.isAdmin, function(req, res) {
    CoinEvent.findOneAndDelete({ _id: req.params.id }, function(err) {
        if(err) {
            req.flash("error", `Error: ${err}`);
            res.redirect("back");
        } else {
            req.flash("success", 'Coin event deletion successful.');
            res.redirect("/admin/coin-events");
        }
    })
})

module.exports = router;