var AdminHelper = require("../helpers/adminHelpers");
var CoinEventHelper = require("../helpers/coinEventHelpers");
var IconHelper = require("../helpers/iconHelpers");

var express = require("express");
var mongoose = require("mongoose");
var router  = express.Router();
var middleware = require("../middleware");

var CoinEvent    = require("../../models/coinEventData");
var Icon         = require("../../models/iconData");
var Boss        = require("../../models/bossData");

// Coin Event List
router.get("/coin-events", middleware.isAdmin, function(req, res) {
    CoinEvent.find({})
        .then(allEvents => {
            let eventsByCategory = CoinEventHelper.sortByCategory(allEvents);
            
            res.locals.extraStylesheet = "adminStyles";
            res.locals.branch = "coin-events";
            res.locals.title = "Admin (Coin Events)";
            res.render("admin/coin-events/coinEvents", { eventsByCategory: eventsByCategory });
        })
        .catch(err => {
            req.flash("error", `Error: ${err}`);
            res.redirect("back");
        })
})

router.post("/coin-events", middleware.isAdmin, function(req, res) {
    let newCoinEvent = {
        category: req.body.category,
        isPublic: req.body.isPublic === "yes",
        addedOrUpdatedOn: Date.now(),
        eventId: req.body.eventId,
        eventDetails: {
            name: req.body.eventName,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            bannerImg: req.body.bannerFileName,
        },
        hasMesosShop: req.body.hasMesosShop === "yes",
    }

    if(typeof req.body.coinIconIds === "string") {
        req.body.coinIconIds = [req.body.coinIconIds];
    }

    req.body.coinIconIds.forEach(iconId => {
        if(!newCoinEvent.coinDetails) {
            newCoinEvent.coinDetails = [];
        }
        newCoinEvent.coinDetails.push({ iconId: iconId.trim() })
    })

    // Update event currencies to be tagged to event
    let query = [];
    req.body.coinIconIds.forEach(iconId => query.push({ id: iconId.trim() }));
    if(newCoinEvent.hasMesosShop) {
        query.push({ id: "mesos" });
    }

    let updateIconData = Icon.updateMany({ $or: query }, { $addToSet: { usedInEvents: newCoinEvent.eventId }}, { new: true });
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

// Specific Coin Event
router.get("/coin-event/:id", middleware.isAdmin, function(req, res) {
    let findIconsInEvent = Icon.find({ usedInEvents: req.params.id });
    let findCoinEvent = CoinEvent.findOne({ eventId: req.params.id });

    Promise.all([findIconsInEvent, findCoinEvent])
        .then(([allIcons, coinEventData]) => {
            const iconsById = IconHelper.compileIconsById(allIcons);
            // To calculate correct value, 1 extra day needs to be added to factor for end date (as event ends on selected date but 2359hrs)
            const durationWeeks = (Date.parse(coinEventData.eventDetails.endDate) - Date.parse(coinEventData.eventDetails.startDate) + 24 * 60 * 60 * 1000) / (7 * 24 * 60 * 60 * 1000);
            const coinGainsAndCosts = CoinEventHelper.getCoinGainsAndCosts(coinEventData);

            res.locals.extraStylesheet = "adminStyles";
            res.locals.branch = "coin-events";
            res.locals.title = "Admin (Coin Events)";
            res.render("admin/coin-events/coinEventDetails", { icons: iconsById, coinEventData: coinEventData, durationWeeks: durationWeeks, coinGainsAndCosts: coinGainsAndCosts });
        })
        .catch(err => {
            console.log(err);
            req.flash("error", `Error: ${err}`);
            res.redirect("/admin/coin-events");
        })
})

router.post("/coin-event/:id", middleware.isAdmin, function(req, res) {
    const updatedCoinEvent = {
        category: req.body.category,
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
    CoinEvent.findOneAndDelete({ _id: req.params.id })
        .then(() => {
            req.flash("success", 'Coin event deletion successful.');
            res.redirect("/admin/coin-events");
        })
        .catch(err => {
            req.flash("error", `Error: ${err}`);
            res.redirect("back");
        })
})

router.post("/coin-event/:id/addShop", middleware.isAdmin, function(req, res) {
    const coinShop = {
        shopName: req.body.shopName, 
        defaultCurrency: req.body.defaultCurrency,
        defaultPurchaseLimit: req.body.defaultPurchaseLimit,
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

// Specific Coin
router.get("/coin-event/:id/coin/:coinIconId", middleware.isAdmin, function(req, res) {
    let findIcon = Icon.findOne({ usedInEvents: req.params.id, id: req.params.coinIconId });
    let findCoinEvent = CoinEvent.findOne({ eventId: req.params.id });
    let findBosses = Boss.find({ mainRank: { $gte: 1 } }).sort({ mainRank: 1, subRank: 1, crystalValue: 1, bossName: 1 });

    Promise.all([findIcon, findCoinEvent, findBosses])
        .then(([icon, coinEventData, bossData]) => {
            const coinData = coinEventData.coinDetails.find(coin => coin.iconId === req.params.coinIconId);
            const durationWeeks = (Date.parse(coinEventData.eventDetails.endDate) - Date.parse(coinEventData.eventDetails.startDate) + 24 * 60 * 60 * 1000) / (7 * 24 * 60 * 60 * 1000);

            res.locals.extraStylesheet = "adminStyles";
            res.locals.branch = "coin-events";
            res.locals.title = "Admin (Coin Events)";
            res.render("admin/coin-events/coin/coinDetails", { icon: icon, coinEventData: coinEventData, coinData: coinData, durationWeeks: durationWeeks, bossData: bossData });
        })
        .catch(err => {
            req.flash("error", `Error: ${err}`);
            res.redirect("back");
        })
})

router.post("/coin-event/:id/coin/:coinId", middleware.isAdmin, function(req, res) {
    const maxTotal = parseInt(req.body.maxTotal);

    // First assign basic coin data
    // Includes notes about coin, main source cap + sunday maple multiplier, and whether it's used for ranking up
    let coin = {
        'coinDetails.$.coinNotes': req.body.coinNotes,
        'coinDetails.$.mainSource': {
            coinCapType: req.body.coinCapType,
            coinCapValues: req.body.coinCapValues,
            sundayMultiplierByWeek: req.body.sundayMaple,
            maxTotal: (!isNaN(maxTotal) && maxTotal > 0) ? maxTotal : 0
        },
        'coinDetails.$.isUsedForRankUp': req.body.isUsedForRankUp === "yes",
        'coinDetails.$.isFromWeeklyBoss': req.body.isFromWeeklyBoss === "yes",
    };

    // Add to coin data any extra sources for receiving this coin
    let extraSources = [];
    for(let i = 0; i < req.body.activityNames.length; i++) {
        let activityName = req.body.activityNames[i];

        if(activityName !== "") {
            extraSources.push({ 
                sourceName: activityName,
                sourceDesc: req.body.activityDescriptions[i],
                coinAmount: req.body.extraSourceCoinAmounts[i],
                timeframe: req.body.coinSourceTimeframes && req.body.coinSourceTimeframes[i] ? req.body.coinSourceTimeframes[i] : "", 
            })
        }
    }
    coin['coinDetails.$.extraSources'] = extraSources;

    // If the coin is also used for rank up costs, add the relevant ranks and costs
    if(req.body.isUsedForRankUp === "yes") {
        coin['coinDetails.$.rankUpCosts.details'] = req.body.rankUpNotes;

        let rankDetails = [];
        for(let i = 0; i < req.body.rankName.length; i++) {
            let rankName = req.body.rankName[i];
            let rankCost = req.body.totalRankUpCost[i];

            if(rankName !== "") {
                rankDetails.push({ rankName: rankName, totalCost: rankCost });
            }
        }

        coin['coinDetails.$.rankUpCosts.ranks'] = rankDetails;
    } else {
        coin['coinDetails.$.rankUpCosts.details'] = "";
        coin['coinDetails.$.rankUpCosts.ranks'] = [];
    }

    // If the coin is obtained from weekly bosses, add the relevant bosses and coin amounts
    if(req.body.isFromWeeklyBoss === "yes") {
        let bossCoinDetails = [];

        req.body.bossName.forEach((boss, index) => {
            let coinAmount = parseInt(req.body.bossCoinAmount[index]);

            if(isNaN(coinAmount)) {
                coinAmount = 0;
            }

            if(boss !== "" && coinAmount !== 0) {
                bossCoinDetails.push({ bossName: boss, difficulty: req.body.bossDifficulty[index], coinAmount: coinAmount });
            }
        })

        coin['coinDetails.$.bossCoinDetails'] = bossCoinDetails;
    }

    CoinEvent.findOneAndUpdate({"coinDetails._id": req.params.coinId}, { $set: coin }, { new: true })
        .then(updatedCoinEvent => {
            req.flash("success", "Coin shop details updated.");
            res.redirect(`/admin/coin-event/${updatedCoinEvent.eventId}`)
        })
        .catch(err => {
            console.log(err);
            req.flash("error", `Error: ${err}`);
            res.redirect("back");
        })
})

// Specific Coin Shop
router.get("/coin-event/:id/shop/:shopNum", middleware.isAdmin, function(req, res) {
    let findIconsInEvent = Icon.find({ $or: [{usedInEvents: req.params.id }, {usedInEvents: "common"}] });
    let findCoinEvent = CoinEvent.findOne({ eventId: req.params.id });

    Promise.all([findIconsInEvent, findCoinEvent])
        .then(([allIcons, coinEventData]) => {
            const shopNum = parseInt(req.params.shopNum);

            if(!isNaN(shopNum) && shopNum < coinEventData.shops.length) {
                const iconsById = IconHelper.compileIconsById(allIcons);
                const commonIcons = allIcons.filter(icon => icon.usedInEvents.includes("common"))
                                            .map(icon => { return { iconId: icon.id, iconName: icon.name, iconImg: icon.imgUrl } });

                const coinShopData = coinEventData.shops[shopNum];
                res.locals.extraStylesheet = "adminStyles";
                res.locals.branch = "coin-events";
                res.locals.title = "Admin (Coin Events)";
                res.render("admin/coin-events/coin-shop/coinShopDetails", { icons: iconsById, commonIcons: commonIcons, coinEventData: coinEventData, coinShopData: coinShopData, shopNum: req.params.shopNum });
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
        'shops.$.previewURL': req.body.previewURL,
        'shops.$.defaultCurrency': req.body.defaultCurrency, 
        'shops.$.defaultPurchaseLimit': req.body.defaultPurchaseLimit, 
        'shops.$.defaultTradability': req.body.defaultTradability, 
        'shops.$.shopNotes': req.body.shopNotes, 
    }

    CoinEvent.findOneAndUpdate({"shops._id": req.params.shopId}, { $set: coinShop }, { new: true })
        .then(updatedCoinEvent => {
            const shopNum = AdminHelper.retrieveShopNum(updatedCoinEvent, req.params.shopId);
            req.flash("success", "Coin shop details updated.");
            res.redirect(`/admin/coin-event/${updatedCoinEvent.eventId}/shop/${shopNum}`)
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
    let newCoinShopItem = {
        iconId: req.body.itemId.trim(),
        price: parseInt(req.body.price),
        quantity: req.body.quantity ? parseInt(req.body.quantity) : -1,
        coinType: req.body.coinType,
        purchaseLimit: req.body.purchaseLimit,
        timeframeLimit: req.body.timeframeLimit,
        tradability: req.body.itemTradability,
        itemNotes: req.body.itemNotes
    };

    if(req.body.sectionHeader !== "") {
        newCoinShopItem.sectionHeader = req.body.sectionHeader;
    }

    CoinEvent.findOneAndUpdate({ _id: req.params.id, "shops._id": req.params.shopId }, { $push: { "shops.$.items": newCoinShopItem } }, { new: true })
        .then(updatedCoinEvent => {
            const compiledData = Promise.resolve({
                coinEventId: updatedCoinEvent.eventId,
                shopNum: AdminHelper.retrieveShopNum(updatedCoinEvent, req.params.shopId)
            });
            let updateIcon = Icon.updateOne({ id: req.body.itemId.trim() }, { $addToSet: { usedInEvents: updatedCoinEvent.eventId }}, { new: true });

            return Promise.all([compiledData, updateIcon]);
        })
        .then(([compiledData, updatedIcon]) => {
            req.flash("success", "Coin shop added.");
            res.redirect(`/admin/coin-event/${compiledData.coinEventId}/shop/${compiledData.shopNum}`);
        })
        .catch(err => {
            req.flash("error", `Error: ${err}`);
            res.redirect("back");
        })    
})

router.post("/coin-event/:id/shop/:shopId/bulkAdd", middleware.isAdmin, function(req, res) {
    const itemIds = typeof req.body.itemId === "string" ? [req.body.itemId] : req.body.itemId;
    const prices = typeof req.body.price === "string" ? [req.body.price] : req.body.price;
    const quantities = typeof req.body.quantity === "string" ? [req.body.quantity] : req.body.quantity;
    const notes = typeof req.body.notes === "string" ? [req.body.notes] : req.body.notes;

    let itemList = [];

    itemIds.forEach((itemId, index) => {
        itemList.push({
            iconId: itemId,
            price: prices[index],
            quantity: quantities[index] === "" ? -1 : quantities[index],
            coinType: req.body.defaultCurrency,
            purchaseLimit: req.body.defaultPurchaseLimit,
            timeframeLimit: req.body.defaultTimeframe,
            tradability: req.body.defaultTradability,
            itemNotes: notes[index],
        })
    })

    addToCoinShop(req, res, itemList);
})

router.post("/coin-event/:id/shop/:shopId/bulkAddList", middleware.isAdmin, function(req, res) {
    let itemList = CoinEventHelper.retrieveItemList(req.body.listType, req.body.defaultCurrency);

    if(itemList.length !== 0) {
        addToCoinShop(req, res, itemList);
    } else {
        req.flash("error", "No items to add.");
        res.redirect("back");
    }
})

function addToCoinShop(req, res, itemList) {
    CoinEvent.findOneAndUpdate({ _id: req.params.id, "shops._id": req.params.shopId }, { $push: { "shops.$.items": { $each: itemList } } }, { new: true })
        .then(updatedCoinEvent => {
            const compiledData = Promise.resolve({
                coinEventId: updatedCoinEvent.eventId,
                shopNum: AdminHelper.retrieveShopNum(updatedCoinEvent, req.params.shopId)
            });

            let query = [];
            itemList.forEach(item => query.push({ id: item.iconId }));
            let updateIcon = Icon.updateMany({ $or: query }, { $addToSet: { usedInEvents: updatedCoinEvent.eventId }}, { new: true });

            return Promise.all([compiledData, updateIcon]);
        })
        .then(([compiledData, updatedIcon]) => {
            req.flash("success", "Coin shop added.");
            res.redirect(`/admin/coin-event/${compiledData.coinEventId}/shop/${compiledData.shopNum}`);
        })
        .catch(err => {
            req.flash("error", `Error: ${err}`);
            res.redirect("back");
        })    
}

router.post("/coin-event/:id/shop/:shopId/reorder", middleware.isAdmin, middleware.isValidOrdering, function(req, res) {
    CoinEvent.findOne({ _id: req.params.id })
        .then(coinEventData => {
            //const coinShopData = coinEventData.shops[shopNum];
            const shopData = coinEventData.shops.find(shop => shop._id.toString() === req.params.shopId);
            const shopItemData = shopData.items;
            let reorderedIndex = req.body.order.map(i => parseInt(i));
            let reorderedCoinShopItems = reorderedIndex.map(i => shopItemData[i]);

            return CoinEvent.findOneAndUpdate({ "shops._id": req.params.shopId }, { $set: { 'shops.$.items': reorderedCoinShopItems } }, { new: true })
        })
        .then(updatedCoinEvent => {
            const shopNum = AdminHelper.retrieveShopNum(updatedCoinEvent, req.params.shopId);
            req.flash("success", `Coin shop items reordered`);
            res.redirect(`/admin/coin-event/${updatedCoinEvent.eventId}/shop/${shopNum}`);
        })
        .catch(err => {
            console.log(err);
            req.flash("error", `Error: ${err}`);
            res.redirect("back");
        })
})

// Specific Coin Shop Item
router.get("/coin-event/:id/shop/:shopNum/item/:itemId", middleware.isAdmin, function(req, res) {
    CoinEvent.findOne({ eventId: req.params.id })
        .then(coinEventData => {
            const shopNum = parseInt(req.params.shopNum);

            // First check if shop number is valid
            if(!isNaN(shopNum) && shopNum < coinEventData.shops.length) {
                const coinShopData = coinEventData.shops[shopNum];
                const coinShopItemData = coinEventData.shops[shopNum].items.find(item => item._id.toString() === req.params.itemId);
                
                // Then check if requested item exists in shop
                if(coinShopItemData === undefined) {
                    throw new Error("Invalid item id received");
                } else {
                    // Compile coin event, shop, shop item data
                    const compiledData = Promise.resolve({
                        coinEventData: coinEventData,
                        coinShopData: coinShopData,
                        coinShopItemData: coinShopItemData,
                    })

                    // Execute a query to retrieve icons matching currencies and also item involved
                    let query = [];
                    coinEventData.coinDetails.forEach(coin => query.push({ id: coin.iconId }));
                    if(coinEventData.hasMesosShop) {
                        query.push({ id: "mesos" });
                    }
                    query.push({ id: coinShopItemData.iconId });

                    let findIconsInEvent = Icon.find({ $or: query });

                    // Return compiled data and query as a promise
                    return Promise.all([compiledData, findIconsInEvent]);
                }
            } else {
                throw new Error("Invalid shop number received");
            }
        })
        .then(([compiledData, allIcons]) => {
            const responseObj = {
                icons: IconHelper.compileIconsById(allIcons),
                coinEventData: compiledData.coinEventData,
                coinShopData: compiledData.coinShopData,
                coinShopItemData: compiledData.coinShopItemData,
                shopNum: req.params.shopNum,
            }
            res.locals.extraStylesheet = "adminStyles";
            res.locals.branch = "coin-events";
            res.locals.title = "Admin (Coin Events)";
            res.render("admin/coin-events/coin-shop-item/coinShopItemDetails", responseObj);
        })
        .catch(err => {
            console.log(err);
            req.flash("error", `Error: ${err}`);
            res.redirect("back");
        })
})

router.post("/coin-event/:id/shop/:shopId/item/:itemId", middleware.isAdmin, function(req, res) {
    let updatedItem = {
        'shops.$[outer].items.$[inner].sectionHeader': req.body.sectionHeader,
        'shops.$[outer].items.$[inner].price': parseInt(req.body.price),
        'shops.$[outer].items.$[inner].quantity': req.body.quantity ? parseInt(req.body.quantity) : -1,
        'shops.$[outer].items.$[inner].coinType': req.body.coinType,
        'shops.$[outer].items.$[inner].purchaseLimit': req.body.purchaseLimit,
        'shops.$[outer].items.$[inner].timeframeLimit': req.body.timeframeLimit,
        'shops.$[outer].items.$[inner].tradability': req.body.itemTradability,
        'shops.$[outer].items.$[inner].itemNotes': req.body.itemNotes
    };

    // Finds the matching coin event _id, and sets the above properties for changing
    // Filter the nested array by outer/inner variables corresponding to shop _id and item _id respectively to target the correct item
    CoinEvent.findOneAndUpdate(
        { _id: req.params.id }, 
        { $set: updatedItem }, 
        { 
            arrayFilters: [{ "outer._id": req.params.shopId }, { "inner._id": req.params.itemId }],
            new: true 
        })
        .then(updatedCoinEvent => {
            const shopNum = AdminHelper.retrieveShopNum(updatedCoinEvent, req.params.shopId);
            req.flash("success", "Item updated");
            res.redirect(`/admin/coin-event/${updatedCoinEvent.eventId}/shop/${shopNum}/item/${req.params.itemId}`);
        })
        .catch(err => {
            console.log(err);
            req.flash("error", `Error: ${err}`);
            res.redirect("back");
        })
})

router.post("/coin-event/:id/shop/:shopId/item/:itemId/delete", middleware.isAdmin, function(req, res) {
    let response = {};

    CoinEvent.findOneAndUpdate({ _id: req.params.id, "shops._id": req.params.shopId }, { $pull: { 'shops.$.items': { _id: req.params.itemId } } }, { new: true })
        .then(updatedCoinEvent => {
            const shopNum = AdminHelper.retrieveShopNum(updatedCoinEvent, req.params.shopId);
            response.isSuccess = true;
            res.send(response);
        })
        .catch(err => {
            console.log(err);
            response.isSuccess = false;
            response.message = err;
            res.send(response);
        })
})

module.exports = router;