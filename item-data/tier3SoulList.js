let tier3SoulList = new Map();

const soulGaugeEffect = "+20 WA/MA above 500 souls";

// Arkarium
tier3SoulList.set("arkarium", {
	bossName: "Arkarium", 
	soulImg: {
		regular: "./public/images/souls/soul-arkarium.png"
	},
	soulGaugeEffect: soulGaugeEffect,
	caption: {
		regular: {
			img: "./public/images/souls/img-arkarium-1.png",
			text: "Everything is as She wishes...",
		},
		hidden: {
			img: "./public/images/souls/img-arkarium-2.png",
			text: "My Goddess... Hah hah... Hm."
		}
	},
	stats: [
		{ prefix: "Mighty", amount: "STR +18" },
		{ prefix: "Deft", amount: "DEX +18" },
		{ prefix: "Enlightened", amount: "INT +18" },
		{ prefix: "Lucky", amount: "LUK +18" },
		{ prefix: "Glamorous", amount: "All Stats +10" },
		{ prefix: "Sharp", amount: "Weapon ATT +4" },
		{ prefix: "Runic", amount: "Magic ATT +4" },
		{ prefix: "Robust", amount: "HP +700" }
	],
	augStats: [
		"Boss Damage +4%", "Magic ATT +8", "Weapon ATT +8", 
		"Ignore DEF +4%", "Critical Rate +8%", "All Stats +17", 
		"HP +1300", "All Skill Levels +1"
	],
	skill: {
		regular: {
			name: "Snake Attack",
			img: ["./public/images/skills/soul-arkarium.png"],
			desc: "Arkarium's eyes are always fixed on enemies. Like the devil from somewhere... Arkarium, summoned by the power of the Soul Weapon, deals powerful poisoning attack to nearby monsters.",
			effect: "Soul cost: 200. Attacks up to 10 (12) enemies at 350% (450%) damage 1 time. Deals 350% (450%) damage every 1 second for 10 seconds. Cooldown: 120 seconds."
		},
		augmented: {
			name: "Arkarium Stun",
			img: ["./public/images/skills/soul-arkarium.png"],
			desc: "The appearance of Arkarium is shocking enough to stun everyone nearby. Arkarium, summoned by the power of the Soul Weapon, delivers stun damage to nearby enemies with his powerful eyes.",
			effect: "Soul cost: 200. Attacks up to 15 enemies 1 time at 2500% (3000%) damage. Stuns the hit enemies for 3 seconds. Cooldown: 120 seconds."
		}
	},
});

// Black Knight
tier3SoulList.set("black-knight", {
	bossName: "Black Knight Mokadin", 
	soulImg: {
		regular: "./public/images/souls/soul-black-knight.png"
	},
	soulGaugeEffect: soulGaugeEffect,
	caption: {
		regular: {
			img: "./public/images/souls/img-black-knight-1.png",
			text: "For the Great One!",
		},
		hidden: {
			img: "./public/images/souls/img-black-knight-2.png",
			text: "We're not individuals - we're a family."
		}
	},
	stats: [
		{ prefix: "Mighty", amount: "STR +20" },
		{ prefix: "Deft", amount: "DEX +18" },
		{ prefix: "Enlightened", amount: "INT +18" },
		{ prefix: "Lucky", amount: "LUK +18" },
		{ prefix: "Glamorous", amount: "All Stats +10" },
		{ prefix: "Sharp", amount: "Weapon ATT +4" },
		{ prefix: "Runic", amount: "Magic ATT +4" },
		{ prefix: "Robust", amount: "HP +700" }
	],
	augStats: [
		"Boss Damage +4%", "Magic ATT +8", "Weapon ATT +10", 
		"Ignore DEF +4%", "Critical Rate +8%", "All Stats +17", 
		"HP +1300", "All Skill Levels +1"
	],
	skill: {
		regular: {
			name: "Black Knight",
			img: ["./public/images/skills/soul-black-knight.png"],
			desc: "Summons Black Knight Mokadin to fight together. The Soul Weapon's power temporarily summons Mokadin to attack nearby monsters.",
			effect: "Soul cost: 250. Summons Mokadin with 500% (600%) damage for 60 seconds. Hits 5 (6) enemies once per attack. Cooldown: 300 seconds."
		},
		augmented: {
			name: "Pitch Black Knight",
			img: ["./public/images/skills/soul-black-knight.png"],
			desc: "Summons a stronger Black Knight Mokadin to fight together. The Soul Weapon's power temporarily summons Mokadin to attack nearby monsters.",
			effect: "Soul cost: 250. Summons Mokadin with 750% (900%) damage for 60 seconds. Hits 5 (6) enemies once per attack. Cooldown: 300 seconds."
		}
	},
});

// Mad Mage
tier3SoulList.set("mad-mage", {
	bossName: "Mad Mage Kariaine", 
	soulImg: {
		regular: "./public/images/souls/soul-mad-mage.png"
	},
	soulGaugeEffect: soulGaugeEffect,
	caption: {
		regular: {
			img: "./public/images/souls/img-mad-mage-1.png",
			text: "You lowlifes, I'll put you in your place!",
		},
		hidden: {
			img: "./public/images/souls/img-mad-mage-2.png",
			text: "Do you think you can leave alive after seeing my face?"
		}
	},
	stats: [
		{ prefix: "Mighty", amount: "STR +18" },
		{ prefix: "Deft", amount: "DEX +18" },
		{ prefix: "Enlightened", amount: "INT +20" },
		{ prefix: "Lucky", amount: "LUK +18" },
		{ prefix: "Glamorous", amount: "All Stats +10" },
		{ prefix: "Sharp", amount: "Weapon ATT +4" },
		{ prefix: "Runic", amount: "Magic ATT +4" },
		{ prefix: "Robust", amount: "HP +700" }
	],
	augStats: [
		"Boss Damage +4%", "Magic ATT +10", "Weapon ATT +8", 
		"Ignore DEF +4%", "Critical Rate +8%", "All Stats +17", 
		"HP +1300", "All Skill Levels +1"
	],
	skill: {
		regular: {
			name: "Mad Mage",
			img: ["./public/images/skills/soul-mad-mage.png"],
			desc: "Summons Mad Mage Kariaine to fight together. The Soul Weapon's power temporarily summons Kariaine to attack nearby monsters.",
			effect: "Soul cost: 250. Summons Kariaine with 500% (600%) damage for 60 seconds. Hits 5 (6) enemies once per attack. Cooldown: 300 seconds."
		},
		augmented: {
			name: "Completely Mad Mage",
			img: ["./public/images/skills/soul-mad-mage.png"],
			desc: "Summons a stronger Mad Mage Kariaine to fight together. The Soul Weapon's power temporarily summons Kariaine to attack nearby monsters.",
			effect: "Soul cost: 250. Summons Kariaine with 750% (900%) damage for 60 seconds. Hits 5 (6) enemies once per attack. Cooldown: 300 seconds."
		}
	},
});

// Vicious Hunter
tier3SoulList.set("vicious-hunter", {
	bossName: "Vicious Hunter July", 
	soulImg: {
		regular: "./public/images/souls/soul-vicious-hunter.png"
	},
	soulGaugeEffect: soulGaugeEffect,
	caption: {
		regular: {
			img: "./public/images/souls/img-vicious-hunter-1.png",
			text: "Let's commence hunting.",
		},
		hidden: {
			img: "./public/images/souls/img-vicious-hunter-2.png",
			text: "D-don't get me wrong! I just had a slip of the hand this time."
		}
	},
	stats: [
		{ prefix: "Mighty", amount: "STR +18" },
		{ prefix: "Deft", amount: "DEX +20" },
		{ prefix: "Enlightened", amount: "INT +18" },
		{ prefix: "Lucky", amount: "LUK +18" },
		{ prefix: "Glamorous", amount: "All Stats +10" },
		{ prefix: "Sharp", amount: "Weapon ATT +4" },
		{ prefix: "Runic", amount: "Magic ATT +4" },
		{ prefix: "Robust", amount: "HP +700" }
	],
	augStats: [
		"Boss Damage +4%", "Magic ATT +8", "Weapon ATT +8", 
		"Ignore DEF +4%", "Critical Rate +8%", "All Stats +17", 
		"HP +1500", "All Skill Levels +1"
	],
	skill: {
		regular: {
			name: "Vicious Hunter",
			img: ["./public/images/skills/soul-vicious-hunter.png"],
			desc: "Summons Vicious Hunter July to fight together. The Soul Weapon's power temporarily summons July to attack nearby monsters.",
			effect: "Soul cost: 250. Summons July with 500% (600%) damage for 60 seconds. Hits 5 (6) enemies once per attack. Cooldown: 300 seconds."
		},
		augmented: {
			name: "Utterly Vicious Hunter",
			img: ["./public/images/skills/soul-vicious-hunter.png"],
			desc: "Summons a stronger Vicious Hunter July to fight together. The Soul Weapon's power temporarily summons July to attack nearby monsters.",
			effect: "Soul cost: 250. Summons July with 750% (900%) damage for 60 seconds. Hits 5 (6) enemies once per attack. Cooldown: 300 seconds."
		}
	},
});

// Rampant Cyborg
tier3SoulList.set("rampant-cyborg", {
	bossName: "Rampant Cyborg CQ57", 
	soulImg: {
		regular: "./public/images/souls/soul-rampant-cyborg.png"
	},
	soulGaugeEffect: soulGaugeEffect,
	caption: {
		regular: {
			img: "./public/images/souls/img-rampant-cyborg-1.png",
			text: "Locked on the target. Eliminating...",
		},
		hidden: {
			img: "./public/images/souls/img-rampant-cyborg-2.png",
			text: "Secured the target. Tastes sweet."
		}
	},
	stats: [
		{ prefix: "Mighty", amount: "STR +18" },
		{ prefix: "Deft", amount: "DEX +18" },
		{ prefix: "Enlightened", amount: "INT +18" },
		{ prefix: "Lucky", amount: "LUK +20" },
		{ prefix: "Glamorous", amount: "All Stats +10" },
		{ prefix: "Sharp", amount: "Weapon ATT +4" },
		{ prefix: "Runic", amount: "Magic ATT +4" },
		{ prefix: "Robust", amount: "HP +700" }
	],
	augStats: [
		"Boss Damage +4%", "Magic ATT +8", "Weapon ATT +8", 
		"Ignore DEF +4%", "Critical Rate +10%", "All Stats +17", 
		"HP +1300", "All Skill Levels +1"
	],
	skill: {
		regular: {
			name: "Rampant Cyborg",
			img: ["./public/images/skills/soul-rampant-cyborg.png"],
			desc: "Summons Rampant Cyborg CQ57 to fight together. The Soul Weapon's power temporarily summons CQ57 to attack nearby monsters.",
			effect: "Soul cost: 250. Summons CQ57 with 500% (600%) damage for 60 seconds. Hits 5 (6) enemies once per attack. Cooldown: 300 seconds."
		},
		augmented: {
			name: "Fully Rampant Cyborg",
			img: ["./public/images/skills/soul-rampant-cyborg.png"],
			desc: "Summons a stronger Rampant Cyborg CQ57 to fight together. The Soul Weapon's power temporarily summons CQ57 to attack nearby monsters.",
			effect: "Soul cost: 250. Summons CQ57 with 750% (900%) damage for 60 seconds. Hits 5 (6) enemies once per attack. Cooldown: 300 seconds."
		}
	},
});

// Bad Brawler
tier3SoulList.set("bad-brawler", {
	bossName: "Fighter Plaid", 
	soulImg: {
		regular: "./public/images/souls/soul-bad-brawler.png"
	},
	soulGaugeEffect: soulGaugeEffect,
	caption: {
		regular: {
			img: "./public/images/souls/img-bad-brawler-1.png",
			text: "Let's play.",
		},
		hidden: {
			img: "./public/images/souls/img-bad-brawler-2.png",
			text: "You can't get away from me."
		}
	},
	stats: [
		{ prefix: "Mighty", amount: "STR +18" },
		{ prefix: "Deft", amount: "DEX +18" },
		{ prefix: "Enlightened", amount: "INT +18" },
		{ prefix: "Lucky", amount: "LUK +18" },
		{ prefix: "Glamorous", amount: "All Stats +12" },
		{ prefix: "Sharp", amount: "Weapon ATT +4" },
		{ prefix: "Runic", amount: "Magic ATT +4" },
		{ prefix: "Robust", amount: "HP +700" }
	],
	augStats: [
		"Boss Damage +4%", "Magic ATT +8", "Weapon ATT +8", 
		"Ignore DEF +4%", "Critical Rate +8%", "All Stats +20", 
		"HP +1300", "All Skill Levels +1"
	],
	skill: {
		regular: {
			name: "Bad Brawler",
			img: ["./public/images/skills/soul-bad-brawler.png"],
			desc: "Summons Fighter Plaid to fight together. The Soul Weapon's power temporarily summons Plaid to attack nearby monsters.",
			effect: "Soul cost: 250. Summons Plaid with 500% (600%) damage for 60 seconds. Hits 5 (6) enemies once per attack. Cooldown: 300 seconds."
		},
		augmented: {
			name: "Real Bad Brawler",
			img: ["./public/images/skills/soul-bad-brawler.png"],
			desc: "Summons a stronger Fighter Plaid to aid in combat. The Soul Weapon's power temporarily summons Plaid to attack nearby monsters.",
			effect: "Soul cost: 250. Summons Plaid with 750% (900%) damage for 60 seconds. Hits 5 (6) enemies once per attack. Cooldown: 300 seconds."
		}
	},
});

module.exports = tier3SoulList;