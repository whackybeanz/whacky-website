var mongoose = require("mongoose");

var potentialSchema = new mongoose.Schema({
    potType: String,
    potRank: Number,
    displayPriority: Number,
    desc: String,
    weight: Number,
    cubeTypes: [String],
    itemTypes: [String],
    notes: String,
    itemLevelMin: Number,
    itemLevelMax: {type: Number, default: 300},
    serverType: {type: [String], default: ["kms", "gms"]},
});

module.exports = mongoose.model("Potential", potentialSchema)