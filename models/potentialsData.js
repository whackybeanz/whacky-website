var mongoose = require("mongoose");

var potentialSchema = new mongoose.Schema({
    potType: String,
    potRankName: String,
    potRankNum: Number,
    itemType: String,
    potentials: [
        {
            desc: String,
            notes: String,
            rcPercentChance: { line1: Number, line2: Number, line3: Number },
            bcPercentChance: { line1: Number, line2: Number, line3: Number },
            apcPercentChance: { line1: Number, line2: Number, line3: Number },
        }
    ],
    serverType: { type: String, default: "kms" },
});

module.exports = mongoose.model("Potential", potentialSchema)