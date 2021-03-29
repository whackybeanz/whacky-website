var mongoose = require("mongoose");

var latestSchema = new mongoose.Schema ({
	servers: {
		kms: { 
			serverName: {type: String, default: "KMS(T)"},
			currPatch: String,
		},
		msea: { 
			serverName: {type: String, default: "MSEA"},
			currPatch: String, 
		}
	},
	lastUpdatedDate: {
		damageSkins: String,
	},
});

module.exports = mongoose.model("Latest Update", latestSchema)