var mongoose = require("mongoose");

var damageSkinSchema = new mongoose.Schema({
    // Basic Info
    isNewSkin: { type: Boolean, default: false },
    isKMSskin: { type: Boolean, default: true },
    hasRegularSkin: { type: Boolean, default: true },
    hasUnitSkin: Boolean,
    isCustomSkin: Boolean,
    name: String,
    shortName: { type: String, index: true },
    letterCategory: String,
    altNames: { type: [String], default: undefined },
    notes: String,

    folderNum: { type: Number, index: true },
    regularItemId: String,
    unitFolderNum: Number,
    unitItemId: String,
    screenshotTypes: [String],
    screenshotCredits: String,

    // Critical hits, regular hits, unit displays, custom damage skin displays
    digits: {
        critical: {
            hasEffect: { type: Boolean, default: true },
            cri1Assets: [String],
            isLoadCri0: { type: Boolean, default: false },
            cri0Assets: [String],
        },
        regular: {
            red1Assets: [String],
            isLoadRed0: { type: Boolean, default: false },
            red0Assets: [String],
        },
        unitTypes: [String],
        customNumAssetsToLoad: Number,
        combatMessages: [String] // Guard, Miss, Resist, Counter, Shot
    },
});

module.exports = mongoose.model("Damage Skin", damageSkinSchema);