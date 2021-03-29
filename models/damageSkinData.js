var mongoose = require("mongoose");

var damageSkinSchema = new mongoose.Schema({
    // Basic Info
    isNewSkin: { type: Boolean, default: true },
    isKMSskin: { type: Boolean, default: true },
    isCustomSkin: Boolean,
    hasRegularSkin: { type: Boolean, default: true },
    hasUnitSkin: Boolean,
    name: String,
    shortName: { type: String, index: true },
    letterCategory: String,
    altNames: { type: [String], default: undefined },
    notes: String,

    // Regular Skin Info
    damageSkinId: { type: Number, index: true },
    itemId: String,
    
    // Unit Skin Info
    unitDamageSkinId: Number,
    unitItemId: String,

    // Custom Skin Info
    numAssetsToLoad: Number,

    // Damage Skin Details
    hasEffect: { type: Boolean, default: true },
    hasCounter: { type: Boolean, default: false },
    hasShot: { type: Boolean, default: false },
    hasCri0Nums: { type: Boolean, default: true },
    hasCri1Nums: { type: Boolean, default: true },
    hasRed1Nums: { type: Boolean, default: true },

    // Damage Skin Shared Image Assets
    // For skins that use repeated image assets for certain digits by pulling from other image assets within itself
    diffCri0Nums: { type: [String], default: undefined },
    diffCri1Nums: { type: [String], default: undefined },
    diffRed0Nums: { type: [String], default: undefined },
    diffRed1Nums: { type: [String], default: undefined },
});

module.exports = mongoose.model("Damage Skin", damageSkinSchema);