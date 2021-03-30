var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
	username: String,
	isAdmin: { type: Boolean, default: false },
	createdOn: { type: Date, default: Date.now },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);