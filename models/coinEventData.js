var mongoose = require("mongoose");

var coinEventData = new mongoose.Schema({
    addedOn: Date,
    eventDetails: {
        id: String,
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