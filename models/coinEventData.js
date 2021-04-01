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
    coinDetails: {
        coinIds: [String],
        hasMesosShop: Boolean,
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
            limits: String,
            tradability: String,
            itemNotes: String
        }]
    }]
});

module.exports = mongoose.model("Coin Event", coinEventData);