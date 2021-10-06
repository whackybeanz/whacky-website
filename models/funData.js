var mongoose = require("mongoose");

var funSchema = new mongoose.Schema({
    name: String,
    timeCreated: Date,
})

module.exports = mongoose.model("Fun", funSchema);