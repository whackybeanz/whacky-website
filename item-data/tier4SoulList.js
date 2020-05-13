let tier4SoulList = new Map();

const soulGaugeEffect = "+20 WA/MA above 500 souls";

const stats = [
	{ prefix: "Mighty", amount: "STR +15" },
	{ prefix: "Deft", amount: "DEX +15" },
	{ prefix: "Enlightened", amount: "INT +15" },
	{ prefix: "Lucky", amount: "LUK +15" },
	{ prefix: "Glamorous", amount: "All Stats +10" },
	{ prefix: "Sharp", amount: "Weapon ATT +4" },
	{ prefix: "Runic", amount: "Magic ATT +4" },
	{ prefix: "Robust", amount: "HP +600" }
];

// Hilla
tier4SoulList.set("hilla", {
	bossName: "Hilla", 
	soulImg: {
		regular: "./public/images/souls/soul-hilla.png"
	},
	soulGaugeEffect: soulGaugeEffect,
	caption: {
		regular: {
			img: "./public/images/souls/img-hilla-1.png",
			text: "Azwan? It was sacrificed for my eternal youth.",
		},
		hidden: {
			img: "./public/images/souls/img-hilla-2.png",
			text: "Need iodine?"
		}
	},
	stats: stats,
	augStats: [
		"Boss Damage +4%", "Magic ATT +8", "Weapon ATT +8", 
		"Ignore DEF +4%", "Critical Rate +8%", "All Stats +17", 
		"HP +1300", "All Skill Levels +1"
	],
	skill: {
		regular: {
			name: "Blue Lightning Attack",
			img: ["./public/images/skills/soul-hilla.png"],
			desc: "Beautiful Hilla summons lightning, scattering unforgiving lightning everywhere and damages monsters in the vicinity.",
			effect: "Soul cost: 250. Summons Hilla with 400% (500%) damage for 90 seconds. Hits 5 (6) enemies once per attack. Cooldown: 150 seconds."
		},
		augmented: {
			name: "Blue Lightning Attack",
			img: ["./public/images/skills/soul-hilla-aug.png"],
			desc: "Beautiful Hilla summons lightning, scattering unforgiving lightning everywhere and damages monsters in the vicinity.",
			effect: "Soul cost: 250. Summons Hilla with 600% (750%) damage for 180 seconds. Hits 7 (8) enemies once per attack. Cooldown: 300 seconds."
		}
	},
});

// Von Leon
tier4SoulList.set("von-leon", {
	bossName: "Von Leon", 
	soulImg: {
		regular: "./public/images/souls/soul-von-leon.png"
	},
	soulGaugeEffect: soulGaugeEffect,
	caption: {
		regular: {
			img: "./public/images/souls/img-von-leon-1.png",
			text: "My people, my followers, my queen... They're all gone...",
		},
		hidden: {
			img: "./public/images/souls/img-von-leon-2.png",
			text: "I shall seek revenge against the world that took everything away from me."
		}
	},
	stats: stats,
	augStats: [
		"Boss Damage +4%", "Magic ATT +7", "Weapon ATT +7", 
		"Ignore DEF +4%", "Critical Rate +7%", "All Stats +15", 
		"HP +1200", "All Skill Levels +1"
	],
	skill: {
		regular: {
			name: "Martial Arts: Claw Basic",
			img: ["./public/images/skills/soul-von-leon.png"],
			desc: "Kitty Martial Arts can be performed by lions which is the vertex of a cat class. The power of the Soul Weapon summons Von Leon who performs Claw Basic, specific to one-on-one matches in Kitty Martial Arts.",
			effect: "Soul cost: 200. Attacks up to 1 enemy at 3000% (3500%) damage 1 time. Cooldown: 120 seconds."
		},
		augmented: {
			name: "Martial Arts: Slap Attack",
			img: ["./public/images/skills/soul-von-leon.png"],
			desc: "Kitty Martial Arts can be performed by lions which is the vertex of a cat class. Von Leon summoned by the power of the Soul Weapon performs Cross Slap Attack, specific to one-on-one matches in Kitty Martial Arts.",
			effect: "Soul cost: 250. Attacks up to 1 enemy at 5000% (6000%) damage 1 time. Cooldown: 120 seconds."
		}
	},
});

// Papulatus
tier4SoulList.set("papulatus", {
	bossName: "Papulatus", 
	soulImg: {
		regular: "./public/images/souls/soul-papulatus.png",
		augmented: "./public/images/souls/soul-papulatus-aug.png",
	},
	soulGaugeEffect: soulGaugeEffect,
	caption: {
		regular: {
			img: "./public/images/souls/img-papulatus-1.png",
			text: "Ruler of Dimensions!",
		},
		hidden: {
			img: "./public/images/souls/img-papulatus-2.png",
			text: "Missing you..."
		}
	},
	stats: stats,
	augStats: [
		"Boss Damage +4%", "Magic ATT +7", "Weapon ATT +7", 
		"Ignore DEF +4%", "Critical Rate +7%", "All Stats +15", 
		"HP +1200", "All Skill Levels +1"
	],
	skill: {
		regular: {
			name: "Ruler of Space",
			img: ["./public/images/skills/soul-papulatus.png"],
			desc: "Swing Papulatus' mechanical hand to strike a nearby space. The Soul Weapon's power summons Papulatus to make it attack nearby monsters.",
			effect: "Soul cost: 200. Attacks up to 5 (6) enemies at 1000% (1200%) damage 1 time. Cooldown: 120 seconds."
		},
		augmented: {
			name: "Ruler of Time",
			img: ["./public/images/skills/soul-papulatus-aug.png"],
			desc: "Papulatus creates a crack in time. The Soul Weapon's power summons Papulatus that attacks nearby monsters.",
			effect: "Soul cost: 200. Attacks up to 15 enemies at 2000% (2400%) damage 1 time. Cooldown: 120 seconds."
		}
	},
});

module.exports = tier4SoulList;