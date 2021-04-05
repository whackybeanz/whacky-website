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
            coinCapType: String,
            coinCapValues: [Number],
            sundayMultiplierByWeek: [Number],
            maxTotal: { type: Number, default: 0 },
        },
        extraSources: [{
            sourceName: String,
            sourceDesc: String,
            coinAmount: Number,
            timeframe: String,
        }],
        isUsedForRankUp: Boolean,
        rankUpCosts: {
            details: String,
            ranks: [{
                rankName: String,
                totalCost: Number
            }]
        },
    }],
    shops: [{ 
        shopName: String, 
        defaultCurrency: String,
        defaultPurchaseLimit: String,
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