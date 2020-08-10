const soulGaugeEffect = "+20 WA/MA above 500 souls";

const stats = [
	{ soulPrefix: "Mighty", amount: "STR +12" },
	{ soulPrefix: "Deft", amount: "DEX +12" },
	{ soulPrefix: "Enlightened", amount: "INT +12" },
	{ soulPrefix: "Lucky", amount: "LUK +12" },
	{ soulPrefix: "Glamorous", amount: "All Stats +8" },
	{ soulPrefix: "Sharp", amount: "Weapon ATT +3" },
	{ soulPrefix: "Runic", amount: "Magic ATT +3" },
	{ soulPrefix: "Robust", amount: "HP +500" }
];

const augStats = [
	"Boss Damage +3%", "Magic ATT +6", "Weapon ATT +6", 
	"Ignore DEF +3%", "Critical Rate +6%", "All Stats +12", 
	"HP +1100", "All Skill Levels +1"
];

const tier5SoulList = [
	// Zakum
	{
		soulId: "zakum", tier: 5, soulGaugeEffect: soulGaugeEffect, bossName: "Zakum", orderPriority: 1,
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
		regular: {
			stats: stats,
			skill: {
				name: "Hot Totem Drop",
				img: ["./public/images/skills/soul-zakum.png"],
				desc: "Zakum drops hot totems everywhere. The power of Soul Weapon summons Zakum who gives hot totems to monsters in the vicinity.",
				effect: "Soul cost: 200. Attacks up to 10 enemies at 1000% (1200%) damage 1 time. Deals 300% damage every 1 second for 10 seconds. Cooldown: 120 seconds."
			}
		},
		augmented: {
			stats: augStats,
			skill: {
				name: "Burning Totem Drop",
				img: ["./public/images/skills/soul-zakum.png"],
				desc: "Zakum drops burning totems everywhere. Zakum summoned by the power of Soul Weapon gives burning totems to monsters in the vicinity.",
				effect: "Soul cost: 200. Attacks up to 15 enemies at 2000% (2400%) damage 1 time. Deals 500% damage every 1 second for 10 seconds. Cooldown: 120 seconds."
			}
		}
	},
	// Gold Dragon
	{
		soulId: "gold-dragon", tier: 5, soulGaugeEffect: soulGaugeEffect, bossName: "Gold Dragon", orderPriority: 2,
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
		regular: {
			stats: stats,
			skill: {
				name: "Beast of Fury",
				img: ["./public/images/skills/soul-gold-dragon.png"],
				desc: "This attack skill shows off the Gold Dragon techniques you have trained up for so long. The summoned Gold Dragon strikes the ground to send out powerful shockwaves.",
				effect: "Soul cost: 200. Attacks up to 8 enemies at 2000% damage 1 time. Cooldown: 60 seconds. (Author's Note: This skill only has 1 level, and applies to both regular and augmented souls)"
			}
		},
		augmented: {
			stats: augStats
		}
	},
	// Red Tiger
	{
		soulId: "red-tiger", tier: 5, soulGaugeEffect: soulGaugeEffect, bossName: "Red Tiger", orderPriority: 3,
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
		regular: {
			stats: stats,
			skill: {
				name: "Tiger's Teeth",
				img: ["./public/images/skills/soul-red-tiger.png"],
				desc: "This attack skill shows off the Red Tiger techniques you have trained up for so long. The summoned Red Tiger lashes out with a whirlwind kick.",
				effect: "Soul cost: 200. Attacks up to 8 enemies at 2000% damage 1 time. Cooldown: 60 seconds. (Author's Note: This skill only has 1 level, and applies to both regular and augmented souls)."
			}
		},
		augmented: {
			stats: augStats
		}
	}
];

module.exports = tier5SoulList;