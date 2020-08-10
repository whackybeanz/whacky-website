var mongoose = require("mongoose");

var soulSchema = new mongoose.Schema({
	soulId: String,	hasAugSoulIcon: { type: Boolean, default: false },
	tier: Number, soulGaugeEffect: String, bossName: String, 
	hasAugmented: { type: Boolean, default: true }, orderPriority: Number,
	caption: {
		regular: {
			img: String,
			text: String,
		},
		hidden: {
			img: String,
			text: String,
		}
	},
	regular: {
		stats: [{ soulPrefix: String, amount: String }],
		skill: {
			name: String,
			img: [String],
			desc: String,
			effect: String
		}
	},
	augmented: {
		type: {
			stats: [String],
			skill: {
				name: String,
				img: { type: [String], required: false },
				desc: String,
				effect: String
			}	
		},
		required: false
	}
});

module.exports = mongoose.model("Boss Soul", soulSchema);