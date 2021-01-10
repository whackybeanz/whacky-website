var mongoose = require("mongoose");

var setEffectSchema = new mongoose.Schema({
    jobType: String,
    setType: String,
    setName: String,
    effects: [{ 
        numEquipped: Number, 
        list: [{ statId: String, val: Number }]
    }]
});

module.exports = mongoose.model("Set Effect", setEffectSchema);