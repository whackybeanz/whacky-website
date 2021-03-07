var mongoose = require("mongoose");

var potentialSchema = new mongoose.Schema({
    potType: String,
    potRankName: String,
    potRankNum: Number,
    itemType: [String],
    potentials: [
        {
            desc: String,
            weight: Number,
            notes: String,
        }
    ],
    serverType: { type: String, default: "kms" },
});

module.exports = mongoose.model("Potential", potentialSchema)