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
            coinIds: req.body.coinIds,
            hasMesosShop: req.body.hasMesosShop === "yes"
        }
    }

    // Update event currencies to be tagged to event
    let query = [];
    req.body.coinIds.forEach(coinId => query.push({ id: coinId }));
    if(newCoinEvent.coinDetails.hasMesosShop) {
        query.push({ id: "mesos" });
    }

    let updateIconData = Icon.updateMany({ $or: query }, { $push: { usedInEvents: newCoinEvent.eventId }}, { new: true });
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

router.post("/coin-event/:id/addShop", middleware.isAdmin, function(req, res) {
    const coinShop = {
        shopName: req.body.shopName, 
        defaultCurrency: req.body.defaultCurrency, 
        defaultTradability: req.body.defaultTradability, 
        shopNotes: req.body.shopNotes, 
    }

    CoinEvent.findOneAndUpdate({ _id: req.params.id }, { $push: { shops: coinShop } }, { new: true })
        .then(updatedCoinEvent => {
            req.flash("success", "Coin shop added.");
            res.redirect(`/admin/coin-event/${updatedCoinEvent.eventId}/shop/${updatedCoinEvent.shops.length-1}`)
        })
        .catch(err => {
            req.flash("error", `Error: ${err}`);
            res.redirect("back");
        })
})

router.get("/coin-event/:id/shop/:shopNum", middleware.isAdmin, function(req, res) {
    let findIconsInEvent = Icon.find({ usedInEvents: req.params.id });
    let findCoinEvent = CoinEvent.findOne({ eventId: req.params.id });

    Promise.all([findIconsInEvent, findCoinEvent])
        .then(([allIcons, coinEventData]) => {
            const shopNum = parseInt(req.params.shopNum);

            if(!isNaN(shopNum) && shopNum < coinEventData.shops.length) {
                const iconsById = IconHelper.compileIconsById(allIcons);
                const coinShopData = coinEventData.shops[shopNum];
                res.locals.extraStylesheet = "adminStyles";
                res.locals.branch = "coin-events";
                res.render("admin/coin-events/coinShopDetails", { icons: iconsById, coinEventData: coinEventData, coinShopData: coinShopData });
            } else {
                throw new Error("Invalid shop number received");
            }
        })
        .catch(err => {
            req.flash("error", `Error: ${err}`);
            res.redirect("back");
        })
})

router.post("/coin-event/:id/shop/:shopId", middleware.isAdmin, function(req, res) {
    const coinShop = {
        'shops.$.shopName': req.body.shopName, 
        'shops.$.defaultCurrency': req.body.defaultCurrency, 
        'shops.$.defaultTradability': req.body.defaultTradability, 
        'shops.$.shopNotes': req.body.shopNotes, 
    }

    CoinEvent.findOneAndUpdate({"shops._id": req.params.shopId}, { $set: coinShop }, { new: true })
        .then(updatedCoinEvent => {
            req.flash("success", "Coin shop added.");
            res.redirect("back")
        })
        .catch(err => {
            req.flash("error", `Error: ${err}`);
            res.redirect("back");
        })
})

router.post("/coin-event/:id/shop/:shopId/delete", middleware.isAdmin, function(req, res) {
    CoinEvent.findOneAndUpdate({ _id: req.params.id }, { $pull: { shops: { _id: req.params.shopId } } }, { new: true })
        .then(updatedCoinEvent => {
            req.flash("success", 'Coin shop deletion successful.');
            res.redirect(`/admin/coin-event/${updatedCoinEvent.eventId}`);
        })
        .catch(err => {
            console.log(err);
            req.flash("error", `Error: ${err}`);
            res.redirect("back");
        })
})

router.post("/coin-event/:id/shop/:shopId/addItem", middleware.isAdmin, function(req, res) {
    const newCoinShopItem = {
        iconId: req.body.itemId,
        price: parseInt(req.body.price),
        quantity: parseInt(req.body.quantity),
        coinType: req.body.coinType,
        limits: req.body.itemLimits,
        tradability: req.body.itemTradability,
        itemNotes: req.body.itemNotes
    }

    CoinEvent.findOneAndUpdate({ _id: req.params.id, "shops._id": req.params.shopId }, { $push: { "shops.$.items": newCoinShopItem } }, { new: true })
        .then(updatedCoinEvent => {
            return Icon.updateOne({ id: req.body.itemId }, { $push: { usedInEvents: updatedCoinEvent.eventId }}, { new: true });
        })
        .then(updatedIcon => {
            console.log(updatedIcon);
            req.flash("success", "Coin shop added.");
            res.redirect("/coin-event/:id/shop/:shopId")
        })
        .catch(err => {
            console.log(err);
            req.flash("error", `Error: ${err}`);
            res.redirect("back");
        })    
})

module.exports = router;