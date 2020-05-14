let tier5SoulList = new Map();

const soulGaugeEffect = "+20 WA/MA above 500 souls";

const stats = [
	{ prefix: "Mighty", amount: "STR +12" },
	{ prefix: "Deft", amount: "DEX +12" },
	{ prefix: "Enlightened", amount: "INT +12" },
	{ prefix: "Lucky", amount: "LUK +12" },
	{ prefix: "Glamorous", amount: "All Stats +8" },
	{ prefix: "Sharp", amount: "Weapon ATT +3" },
	{ prefix: "Runic", amount: "Magic ATT +3" },
	{ prefix: "Robust", amount: "HP +500" }
];

const augStats = [
	"Boss Damage +3%", "Magic ATT +6", "Weapon ATT +6", 
	"Ignore DEF +3%", "Critical Rate +6%", "All Stats +12", 
	"HP +1100", "All Skill Levels +1"
];

// Zakum
tier5SoulList.set("zakum", {
	bossName: "Zakum", 
	soulImg: {
		regular: "./public/images/souls/soul-zakum.png"
	},
	soulGaugeEffect: soulGaugeEffect,
	caption: {
		regular: {
			img: "./public/images/souls/img-zakum-1.png",
			text: "Assalamu alaikum!",
		},
		hidden: {
			img: "./public/images/souls/img-zakum-2.png",
			text: "I cook, kum! Kum, kum!"
		}
	},
	stats: stats,
	augStats: augStats,
	skill: {
		regular: {
			name: "Hot Totem Drop",
			img: ["./public/images/skills/soul-zakum.png"],
			desc: "Zakum drops hot totems everywhere. The power of Soul Weapon summons Zakum who gives hot totems to monsters in the vicinity.",
			effect: "Soul cost: 200. Attacks up to 10 enemies at 1000% (1200%) damage 1 time. Deals 300% damage every 1 second for 10 seconds. Cooldown: 120 seconds."
		},
		augmented: {
			name: "Burning Totem Drop",
			img: ["./public/images/skills/soul-zakum.png"],
			desc: "Zakum drops burning totems everywhere. Zakum summoned by the power of Soul Weapon gives burning totems to monsters in the vicinity.",
			effect: "Soul cost: 200. Attacks up to 15 enemies at 2000% (2400%) damage 1 time. Deals 500% damage every 1 second for 10 seconds. Cooldown: 120 seconds."
		}
	},
});

// Gold Dragon
tier5SoulList.set("gold-dragon", {
	bossName: "Gold Dragon", 
	soulImg: {
		regular: "./public/images/souls/soul-gold-dragon.png"
	},
	soulGaugeEffect: soulGaugeEffect,
	caption: {
		regular: {
			img: "./public/images/souls/img-gold-dragon-1.png",
			text: "No Soul Collector entry so here's a random statue instead.",
		},
		hidden: {
			img: "./public/images/souls/img-gold-dragon-2.png",
			text: "The Gold Dragon, one of two Dojo masters."
		}
	},
	stats: stats,
	augStats: augStats,
	skill: {
		regular: {
			name: "Beast of Fury",
			img: ["./public/images/skills/soul-gold-dragon.png"],
			desc: "This attack skill shows off the Gold Dragon techniques you have trained up for so long. The summoned Gold Dragon strikes the ground to send out powerful shockwaves.",
			effect: "Soul cost: 200. Attacks up to 8 enemies at 2000% damage 1 time. Cooldown: 60 seconds. (Author's Note: This skill only has 1 level, and applies to both regular and augmented souls)"
		}
	},
});

// Red Tiger
tier5SoulList.set("red-tiger", {
	bossName: "Red Tiger", 
	soulImg: {
		regular: "./public/images/souls/soul-red-tiger.png"
	},
	soulGaugeEffect: soulGaugeEffect,
	caption: {
		regular: {
			img: "./public/images/souls/img-red-tiger-1.png",
			text: "No Soul Collector entry so here's a random statue instead.",
		},
		hidden: {
			img: "./public/images/souls/img-red-tiger-2.png",
			text: "The Red Tiger, one of two Dojo masters."
		}
	},
	stats: stats,
	augStats: augStats,
	skill: {
		regular: {
			name: "Tiger's Teeth",
			img: ["./public/images/skills/soul-red-tiger.png"],
			desc: "This attack skill shows off the Red Tiger techniques you have trained up for so long. The summoned Red Tiger lashes out with a whirlwind kick.",
			effect: "Soul cost: 200. Attacks up to 8 enemies at 2000% damage 1 time. Cooldown: 60 seconds. (Author's Note: This skill only has 1 level, and applies to both regular and augmented souls)."
		}
	},
});

module.exports = tier5SoulList;