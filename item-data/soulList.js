var soulList = new Map();

var tier1SoulGauge = "+20 WA/MA above 500 souls";
var tier2SoulGauge = "+15 WA/MA above 500 souls";

var tier1Stats = [
	{ prefix: "Mighty", amount: "STR +24" },
	{ prefix: "Deft", amount: "DEX +24" },
	{ prefix: "Enlightened", amount: "INT +24" },
	{ prefix: "Lucky", amount: "LUK +24" },
	{ prefix: "Glamorous", amount: "All Stats +15" },
	{ prefix: "Sharp", amount: "Weapon ATT +6" },
	{ prefix: "Runic", amount: "Magic ATT +6" },
	{ prefix: "Robust", amount: "HP +960" }
];

var tier1AugStats = [
	"Boss Damage +7%", "Magic ATT +3%", "Weapon ATT +3%", 
	"Ignore DEF +7%", "Critical Rate +12%", "All Stats +5%", 
	"HP +2000", "All Skill Levels +2"
];

// Magnus
soulList.set("magnus", {
	bossName: "Magnus", 
	soulImg: {
		regular: "./public/images/souls/soul-magnus.png"
	},
	soulGaugeEffect: tier1SoulGauge,
	caption: {
		regular: {
			img: "./public/images/souls/img-magnus-1.png",
			text: "That's me!",
		},
		hidden: {
			img: "./public/images/souls/img-magnus-2.png",
			text: "The lonely gentleman at Shinsoo High School. That's me."
		}
	},
	stats: tier1Stats,
	augStats: tier1AugStats,
	skill: {
		regular: {
			name: "Advance! That is me.",
			img: ["./public/images/skills/soul-magnus.png"],
			desc: "Magnus, with unmatched confidence, advances after his sword. Magnus, summoned by the power of soul weapon, pushes forward and attacks with his large sword.",
			effect: "Soul cost: 150. Attacks up to 7 (8) enemies at 3000% (3600%) damage 1 times. Cooldown: 60 seconds."
		},
		augmented: {
			name: "Bombing! That is me.",
			img: ["./public/images/skills/soul-magnus.png"],
			desc: "Summons the Traitor Magnus to fight together. (Be careful not to get betrayed...) The Soul Weapon's power temporarily summons Magnus to attack nearby monsters.",
			effect: "Soul cost: 250. Summons Magnus with 1500% (1800%) damage for 120 seconds. Hits 8 (10) enemies once per attack. Cooldown: 180 seconds."
		}
	},
});

// Cygnus
soulList.set("cygnus", {
	bossName: "Cygnus", 
	soulImg: {
		regular: "./public/images/souls/soul-cygnus.png"
	},
	soulGaugeEffect: tier1SoulGauge,
	caption: {
		regular: {
			img: "./public/images/souls/img-cygnus-1.png",
			text: "Peace to Maple World...",
		},
		hidden: {
			img: "./public/images/souls/img-cygnus-2.png",
			text: "Sometimes I wonder what other teachers are like."
		}
	},
	stats: tier1Stats,
	augStats: tier1AugStats,
	skill: {
		regular: {
			name: "Flame Empress",
			img: ["./public/images/skills/soul-cygnus.png"],
			desc: "The grandeur of Cygnus unfolds like a flame. Cygnus summoned by the power of Soul Weapon starts hot attacks to the monsters in the vicinity.",
			effect: "Soul cost: 250. Summons Cygnus with 1000% (1200%) damage for 90 seconds. Hits 6 (7) enemies once per attack. Cooldown: 150 seconds."
		},
		augmented: {
			name: "Storm Empress",
			img: ["./public/images/skills/soul-cygnus.png"],
			desc: "The grandeur of Cygnus unfolds like a storm. Cygnus summoned by the power of Soul Weapon starts storm attacks to the monsters in the vicinity.",
			effect: "Soul cost: 250. Summons Cygnus with 1500% (1800%) damage for 120 seconds. Hits 8 (10) enemies once per attack. Cooldown: 150 seconds."
		}
	},
});

module.exports = soulList;