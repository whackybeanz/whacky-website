const soulGaugeEffect = "+20 WA/MA above 500 souls";

const stats = [
	{ soulPrefix: "Mighty", amount: "STR +15" },
	{ soulPrefix: "Deft", amount: "DEX +15" },
	{ soulPrefix: "Enlightened", amount: "INT +15" },
	{ soulPrefix: "Lucky", amount: "LUK +15" },
	{ soulPrefix: "Glamorous", amount: "All Stats +10" },
	{ soulPrefix: "Sharp", amount: "Weapon ATT +4" },
	{ soulPrefix: "Runic", amount: "Magic ATT +4" },
	{ soulPrefix: "Robust", amount: "HP +600" }
];

const augHillaStats = [
	"Boss Damage +4%", "Magic ATT +8", "Weapon ATT +8", 
	"Ignore DEF +4%", "Critical Rate +8%", "All Stats +17", 
	"HP +1300", "All Skill Levels +1"
];

const augOtherStats = [
	"Boss Damage +4%", "Magic ATT +7", "Weapon ATT +7", 
	"Ignore DEF +4%", "Critical Rate +7%", "All Stats +15", 
	"HP +1200", "All Skill Levels +1"
];

const tier4SoulList = [
	// Hilla
	{
		soulId: "hilla", tier: 4, soulGaugeEffect: soulGaugeEffect, bossName: "Hilla", orderPriority: 1,
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
		regular: {
			stats: stats,
			skill: {
				name: "Blue Lightning Attack",
				img: ["./public/images/skills/soul-hilla.png"],
				desc: "Beautiful Hilla summons lightning, scattering unforgiving lightning everywhere and damages monsters in the vicinity.",
				effect: "Soul cost: 250. Summons Hilla with 400% (500%) damage for 90 seconds. Hits 5 (6) enemies once per attack. Cooldown: 150 seconds."
			}
		},
		augmented: {
			stats: augHillaStats,
			skill: {
				name: "Blue Lightning Attack",
				img: ["./public/images/skills/soul-hilla-aug.png"],
				desc: "Beautiful Hilla summons lightning, scattering unforgiving lightning everywhere and damages monsters in the vicinity.",
				effect: "Soul cost: 250. Summons Hilla with 600% (750%) damage for 180 seconds. Hits 7 (8) enemies once per attack. Cooldown: 300 seconds."
			}
		}
	},
	// Von Leon
	{
		soulId: "von-leon", tier: 4, soulGaugeEffect: soulGaugeEffect, bossName: "Von Leon", orderPriority: 2,
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
		regular: {
			stats: stats,
			skill: {
				name: "Martial Arts: Claw Basic",
				img: ["./public/images/skills/soul-von-leon.png"],
				desc: "Kitty Martial Arts can be performed by lions which is the vertex of a cat class. The power of the Soul Weapon summons Von Leon who performs Claw Basic, specific to one-on-one matches in Kitty Martial Arts.",
				effect: "Soul cost: 200. Attacks up to 1 enemy at 3000% (3500%) damage 1 time. Cooldown: 120 seconds."
			}
		},
		augmented: {
			stats: augOtherStats,
			skill: {
				name: "Martial Arts: Slap Attack",
				img: ["./public/images/skills/soul-von-leon.png"],
				desc: "Kitty Martial Arts can be performed by lions which is the vertex of a cat class. Von Leon summoned by the power of the Soul Weapon performs Cross Slap Attack, specific to one-on-one matches in Kitty Martial Arts.",
				effect: "Soul cost: 250. Attacks up to 1 enemy at 5000% (6000%) damage 1 time. Cooldown: 120 seconds."
			}
		}
	},
	// Papulatus
	{
		soulId: "papulatus", hasAugSoulIcon: true, tier: 4, soulGaugeEffect: soulGaugeEffect, bossName: "Papulatus", orderPriority: 3,
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
		regular: {
			stats: stats,
			skill: {
				name: "Ruler of Space",
				img: ["./public/images/skills/soul-papulatus.png"],
				desc: "Swing Papulatus' mechanical hand to strike a nearby space. The Soul Weapon's power summons Papulatus to make it attack nearby monsters.",
				effect: "Soul cost: 200. Attacks up to 5 (6) enemies at 1000% (1200%) damage 1 time. Cooldown: 120 seconds."
			}
		},
		augmented: {
			stats: augOtherStats,
			skill: {
				name: "Ruler of Time",
				img: ["./public/images/skills/soul-papulatus-aug.png"],
				desc: "Papulatus creates a crack in time. The Soul Weapon's power summons Papulatus that attacks nearby monsters.",
				effect: "Soul cost: 200. Attacks up to 15 enemies at 2000% (2400%) damage 1 time. Cooldown: 120 seconds."
			}
		}
	},
	// Weight of Soul
	{
		soulId: "weight-of-soul", hasAugSoulIcon: true, tier: 4, soulGaugeEffect: soulGaugeEffect, bossName: "Weight of Soul", orderPriority: 4,
		caption: {
			regular: {
				img: "./public/images/souls/img-weight-of-soul-1.png",
				text: "No Soul Collector entry, so have some Eluna memories instead!",
			},
			hidden: {
				img: "./public/images/souls/img-weight-of-soul-2.png",
				text: "No Soul Collector entry, so have some Eluna memories instead!"
			}
		},
		regular: {
			stats: stats,
			skill: {
				name: "Press",
				img: ["./public/images/skills/soul-weight-of-soul.png"],
				desc: "The Weight of Soul is with you. The Weight of Soul, summoned with the power of the Soul Weapon, summons its right arm from Eluna and does damage to surrounding monsters.",
				effect: "Soul cost: 200. Summons Weight of Soul with 400% (500%) damage for 40 seconds. Hits 8 (9) enemies once per attack. Cooldown: 150 seconds."
			}
		},
		augmented: {
			stats: augOtherStats,
			skill: {
				name: "Soul Twister",
				img: ["./public/images/skills/soul-weight-of-soul-aug.png"],
				desc: "The Weight of Soul is with you. The Weight of Soul, summoned with the power of the Soul Weapon, creates a big twister that does damage to surrounding monsters.",
				effect: "Soul cost: 250. Summons Weight of Soul with 600% (800%) damage for 80 seconds. Hits 10 (12) enemies once per attack. Cooldown: 150 seconds."
			}
		}
	}
];

module.exports = tier4SoulList;