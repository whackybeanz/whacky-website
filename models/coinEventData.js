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
        coinIds: [String]
    }
});

module.exports = mongoose.model("Coin Event", coinEventData);