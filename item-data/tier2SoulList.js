let tier2SoulList = new Map();

const soulGaugeEffect = "+20 WA/MA above 500 souls";

const stats = [
	{ prefix: "Mighty", amount: "STR +20" },
	{ prefix: "Deft", amount: "DEX +20" },
	{ prefix: "Enlightened", amount: "INT +20" },
	{ prefix: "Lucky", amount: "LUK +20" },
	{ prefix: "Glamorous", amount: "All Stats +12" },
	{ prefix: "Sharp", amount: "Weapon ATT +5" },
	{ prefix: "Runic", amount: "Magic ATT +5" },
	{ prefix: "Robust", amount: "HP +800" }
];

const augStats = [
	"Boss Damage +5%", "Magic ATT +10", "Weapon ATT +10", 
	"Ignore DEF +5%", "Critical Rate +10%", "All Stats +20", 
	"HP +1500", "All Skill Levels +1"
];

// Ursus
tier2SoulList.set("ursus", {
	bossName: "Ursus", 
	soulImg: {
		regular: "./public/images/souls/soul-ursus.png"
	},
	soulGaugeEffect: soulGaugeEffect,
	caption: {
		regular: {
			img: "./public/images/souls/img-ursus-1.png",
			text: "Grr!",
		},
		hidden: {
			img: "./public/images/souls/img-ursus-2.png",
			text: "Grr... Grr..."
		}
	},
	stats: stats,
	augStats: augStats,
	skill: {
		regular: {
			name: "King's Roar",
			img: ["./public/images/skills/soul-ursus.png"],
			desc: "It's the King of Destruction! The power of Soul Weapon summons Ursus who deals powerful damage to the front.",
			effect: "Soul cost: 250. Summons Ursus with 500% (600%) damage for 60 seconds. Hits 5 (6) enemies once per attack. Cooldown: 150 seconds."
		},
		augmented: {
			name: "King's Raging Roar",
			img: ["./public/images/skills/soul-ursus.png"],
			desc: "It's the King of Destruction! The power of Soul Weapon summons Ursus who lets out a raging roar and deals powerful damage to the front.",
			effect: "Soul cost: 200. Summons Ursus with 1000% (1200%) damage for 60 seconds. Hits 5 (6) enemies once per attack. Cooldown: 150 seconds."
		}
	},
});

// Pink Bean
tier2SoulList.set("pink-bean", {
	bossName: "Pink Bean", 
	soulImg: {
		regular: "./public/images/souls/soul-pink-bean.png"
	},
	soulGaugeEffect: soulGaugeEffect,
	caption: {
		regular: {
			img: "./public/images/souls/img-pink-bean-1.png",
			text: "This song is Angelic Buster's!",
		},
		hidden: {
			img: "./public/images/souls/img-pink-bean-2.png",
			text: "Busy delivering gifts!"
		}
	},
	stats: stats,
	augStats: augStats,
	skill: {
		regular: {
			name: "Prickly Cuteness",
			img: ["./public/images/skills/soul-pink-bean.png"],
			desc: "Pink Bean does not like something. The power of Soul Weapon summons Pink Bean who shows its prickly charm to monsters in the vicinity.",
			effect: "Soul cost: 250. Summons Pink Bean with 500% (600%) damage for 60 seconds. Hits 5 (6) enemies once per attack. Cooldown: 150 seconds."
		},
		augmented: {
			name: "Fatal Cuteness",
			img: ["./public/images/skills/soul-pink-bean.png"],
			desc: "Pink Bean does not like something. Pink Bean summoned by the power of Soul Weapon shows its fatal charm to monsters in the vicinity.",
			effect: "Soul cost: 250. Summons Pink Bean with 1000% (1200%) damage for 60 seconds. Hits 5 (6) enemies once per attack. Cooldown: 150 seconds."
		}
	},
});

// Von Bon
tier2SoulList.set("von-bon", {
	bossName: "Von Bon", 
	soulImg: {
		regular: "./public/images/souls/soul-von-bon.png"
	},
	soulGaugeEffect: soulGaugeEffect,
	caption: {
		regular: {
			img: "./public/images/souls/img-von-bon-1.png",
			text: "I'm Time Master Von Bon.",
		},
		hidden: {
			img: "./public/images/souls/img-von-bon-2.png",
			text: "*Groan* This watch is too complex."
		}
	},
	stats: stats,
	augStats: augStats,
	skill: {
		regular: {
			name: "Spicy Chicken's Spice",
			img: ["./public/images/skills/soul-von-bon.png"],
			desc: "Don't underestimate him just because he looks like a chicken. Von Bon is a powerful monster. The power of a Soul Weapon summons him and he stuns monsters with powerful attacks.",
			effect: "Soul cost: 100. Attacks up to 1 enemy at 1000% (1200%) damage 1 time. Stuns the hit enemy for 3 seconds. Cooldown: 10 seconds."
		},
		augmented: {
			name: "Flying Chicken!",
			img: ["./public/images/skills/soul-von-bon.png"],
			desc: "Von Bon's rage is uncontrollable. The Soul Weapon's power temporarily summons Von Bon to attack nearby monsters.",
			effect: "Soul cost: 250. Summons Von Bon with 1500% (1800%) damage for 60 seconds. Hits 8 (10) enemies once per attack. Cooldown: 120 seconds."
		}
	},
});

// Pierre
tier2SoulList.set("pierre", {
	bossName: "Pierre", 
	soulImg: {
		regular: "./public/images/souls/soul-pierre.png"
	},
	soulGaugeEffect: soulGaugeEffect,
	caption: {
		regular: {
			img: "./public/images/souls/img-pierre-1.png",
			text: "How'd you like to come over for tea?",
		},
		hidden: {
			img: "./public/images/souls/img-pierre-2.png",
			text: "What's my hotdog made of? A sausage between sesame bread. Want a bite?"
		}
	},
	stats: stats,
	augStats: augStats,
	skill: {
		regular: {
			name: "Pierre's Hat",
			img: ["./public/images/skills/soul-pierre.png"],
			desc: "Pierre the Weird Monster throws his hat in all directions. The power of a Soul Weapon summons Pierre and Pierre throws his hat to stun nearby enemies.",
			effect: "Soul cost: 200. Attacks up to 15 enemies at 2000% (2400%) damage 1 time. Stuns the hit enemies for 3 seconds. Cooldown: 120 seconds."
		},
		augmented: {
			name: "Pierre's Surprise!",
			img: [
				"./public/images/skills/soul-pierre-aug-red.png",
				"./public/images/skills/soul-pierre-aug-blue.png",
				"./public/images/skills/soul-pierre-aug-purple.png",
			],
			desc: "Pierre is here! Which Pierre is it this time? The Soul Weapon's power temporarily summons Pierre to attack nearby monsters.",
			effect: `<p class="mb-1">Soul cost: 250. Cooldown: 200 seconds.</p>
					<ul class="mb-0">
						<li class="mb-1"><span class="font-weight-bold">[Red]</span> Summons Pierre with 1500% (1800%) damage for 120 (140) seconds. Hits 1 enemy once per attack.</li>
						<li class="mb-1"><span class="font-weight-bold">[Blue]</span> Summons Pierre with 300% (400%) damage for 120 (140) seconds. Hits 10 enemies once per attack.</li>
						<li class="mb-0"><span class="font-weight-bold">[Purple]</span> Summons Pierre with 800% (1000%) damage for 120 (140) seconds. Hits 5 enemies once per attack.</li>
					</ul>`
		}
	},
});

module.exports = tier2SoulList;