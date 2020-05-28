let tier6SoulList = new Map();

const soulGaugeEffect = "+20 WA/MA above 500 souls";

const stats = [
	{ prefix: "Mighty", amount: "STR +10" },
	{ prefix: "Deft", amount: "DEX +10" },
	{ prefix: "Enlightened", amount: "INT +10" },
	{ prefix: "Lucky", amount: "LUK +10" },
	{ prefix: "Glamorous", amount: "All Stats +7" },
	{ prefix: "Sharp", amount: "Weapon ATT +3" },
	{ prefix: "Runic", amount: "Magic ATT +3" },
	{ prefix: "Robust", amount: "HP +400" }
];

const augStats = [
	"Boss Damage +3%", "Magic ATT +5", "Weapon ATT +5", 
	"Ignore DEF +3%", "Critical Rate +5%", "All Stats +10", 
	"HP +1000", "All Skill Levels +1"
];

// Balrog
tier6SoulList.set("balrog", {
	bossName: "Balrog", 
	soulImg: {
		regular: "./public/images/souls/soul-balrog.png"
	},
	soulGaugeEffect: soulGaugeEffect,
	caption: {
		regular: {
			img: "./public/images/souls/img-balrog-1.png",
			text: "I'll get my power back and destroy all!",
		},
		hidden: {
			img: "./public/images/souls/img-balrog-2.png",
			text: "My schemes of world domination begin from this ring!"
		}
	},
	stats: stats,
	augStats: augStats,
	skill: {
		regular: {
			name: "Hellfire Burp",
			img: ["./public/images/skills/soul-balrog.png"],
			desc: "Even Demon Balrog's burp is fearsome. The power of Soul Weapon summons Balrog who deals powerful damage to monsters on the screen.",
			effect: "Soul cost: 200. Attacks up to 12 enemies at 1500% (1800%) damage 1 time. Cooldown: 120 seconds."
		},
		augmented: {
			name: "Hellfire Sneezing",
			img: ["./public/images/skills/soul-balrog.png"],
			desc: "Even Devil Balrog's sneezing is fearsome. Balrog summoned with the power of Soul Weapon deals powerful damage to monsters on the screen.",
			effect: "Soul cost: 200. Attacks up to 15 enemies at 2500% (3000%) damage 1 time. Cooldown: 120 seconds."
		}
	},
});

// Nene
tier6SoulList.set("nene", {
	bossName: "Nene", 
	soulImg: {
		regular: "./public/images/souls/soul-nene.png"
	},
	soulGaugeEffect: soulGaugeEffect,
	caption: {
		regular: {
			img: "./public/images/souls/img-nene-1.png",
			text: "No Soul Collector entry; here's a mutated Nene clone floating in liquid.",
		},
		hidden: {
			img: "./public/images/souls/img-nene-2.png",
			text: "Nene shrunken down 1.5x (it's huge)."
		}
	},
	stats: stats,
	augStats: augStats,
	skill: {
		regular: {
			name: "Nene's Soul",
			img: ["./public/images/skills/soul-nene.png"],
			desc: "This Soul Weapon's power summons Omega Nene to fight with you.",
			effect: "Soul cost: 250. Summons Omega Nene with 500% damage for 60 seconds. Hits 5 enemies once per attack. Cooldown: 300 seconds. (Author's Note: This skill only has 1 level, and applies to both regular and augmented souls)"
		}
	},
});

// Tutu
tier6SoulList.set("tutu", {
	bossName: "Tutu", 
	soulImg: {
		regular: "./public/images/souls/soul-tutu.png"
	},
	soulGaugeEffect: soulGaugeEffect,
	caption: {
		regular: {
			img: "./public/images/souls/img-tutu-1.png",
			text: "No Soul Collector entry; here's a mutated Tutu clone floating in liquid.",
		},
		hidden: {
			img: "./public/images/souls/img-tutu-2.png",
			text: "Tutu shrunken down 1.5x (it's also huge)."
		}
	},
	stats: stats,
	augStats: augStats,
	skill: {
		regular: {
			name: "Tutu's Soul",
			img: ["./public/images/skills/soul-tutu.png"],
			desc: "This Soul Weapon's power summons Omega Tutu to fight by your side.",
			effect: "Soul cost: 250. Summons Omega Tutu with 500% damage for 60 seconds. Hits 5 enemies once per attack. Cooldown: 300 seconds. (Author's Note: This skill only has 1 level, and applies to both regular and augmented souls)"
		}
	},
});

// Pig Bar
tier6SoulList.set("pig-bar", {
	bossName: "Pig Bar", 
	soulImg: {
		regular: "./public/images/souls/soul-pig-bar.png"
	},
	soulGaugeEffect: soulGaugeEffect,
	caption: {
		regular: {
			img: "./public/images/souls/img-pig-bar-1.png",
			text: "No Soul Collector entry. Here's one frame of Pig Bar Swing!",
		},
		hidden: {
			img: "./public/images/souls/img-pig-bar-2.png",
			text: "The Pig Bar souls have never been released outside of KMS."
		}
	},
	stats: stats,
	augStats: augStats,
	skill: {
		regular: {
			name: "Pig Bar Swing!",
			img: ["./public/images/skills/soul-pig-bar.png"],
			desc: "Delicious Pig Bar Swing! The Soul Weapon's power summons a Giant Pig Bar which inflicts delicious damage to monsters in front.",
			effect: "Soul cost: 100. Attacks up to 10 enemies at 500% damage 1 time. Cooldown: 60 seconds. (Author's Note: This skill only has 1 level)"
		},
		augmented: {
			name: "Delicious Pig Bar Drop!",
			img: ["./public/images/skills/soul-pig-bar.png"],
			desc: "Delicious Pig Bar Drop! The Soul Weapon's power summons a Giant Pig Bar from the sky which inflicts damage to nearby monsters.",
			effect: "Soul cost: 100. Attacks up to 10 enemies at 500% damage 1 time. Cooldown: 60 seconds. (Author's Note: This skill only has 1 level)"
		}
	},
});

// Premium Internet Cafe
tier6SoulList.set("icafe", {
	bossName: "Premium Internet Cafe", 
	soulImg: {
		regular: "./public/images/souls/soul-icafe.png"
	},
	soulGaugeEffect: soulGaugeEffect,
	caption: {
		regular: {
			img: "./public/images/souls/img-icafe-1.png",
			text: "No Soul Collector entry. Here's one frame of the regular soul attack!",
		},
		hidden: {
			img: "./public/images/souls/img-icafe-2.png",
			text: "No Soul Collector entry. Here's one frame of the augmented soul attack!"
		}
	},
	stats: stats,
	augStats: augStats,
	skill: {
		regular: {
			name: "Started Maple at the Internet Cafe!",
			img: ["./public/images/skills/soul-icafe.png"],
			desc: "Take advantage of the benefits of Premium Internet Cafes! A premium computer summoned by the power of your Soul Weapon falls from the sky, inflicting immeasurable damage on monsters around you.",
			effect: "Soul cost: 100. Attacks up to 10 enemies at 500% damage 1 time. Cooldown: 60 seconds. (Author's Note: This skill only has 1 level)"
		},
		augmented: {
			name: "Premium Internet Cafes Are the Best",
			img: ["./public/images/skills/soul-icafe.png"],
			desc: "Maple Internet Cafes are the best! A giant premium computer summoned by the power of your Soul Weapon inflicts unbeatable damage on monsters in front.",
			effect: "Soul cost: 100. Attacks up to 10 enemies at 500% damage 1 time. Cooldown: 60 seconds. (Author's Note: This skill only has 1 level)"
		}
	},
});

module.exports = tier6SoulList;