var mongoose = require("mongoose");

var coinEventData = new mongoose.Schema({
    addedOrUpdatedOn: Date,
    isPublic: { type: Boolean, default: true },
    eventId: String,
    eventDetails: {
        name: String,
        startDate: Date,
        endDate: Date,
        bannerImg: String,
    },
    coinDetails: [{
        iconId: String,
        coinNotes: String,
        mainSource: {
            dailyMaxCapByWeek: [Number],
            sundayMultiplierByWeek: [Number],
        },
        extraSources: [{
            sourceName: String,
            sourceDesc: String,
            coinAmount: Number,
            timeframe: String,
        }]
    }],
    rankUpCosts: {
        details: String,
        ranks: [{
            rankName: String,
            totalCost: Number
        }]
    },
    shops: [{ 
        shopName: String, 
        defaultCurrency: String, 
        defaultTradability: String, 
        shopNotes: String, 
        items: [{
            iconId: String,
            price: Number,
            quantity: Number,
            coinType: String,
            purchaseLimit: String,
            timeframeLimit: String,
            tradability: String,
            itemNotes: String
        }]
    }],
    hasMesosShop: Boolean,
});

module.exports = mongoose.model("Coin Event", coinEventData);