const soulGaugeEffect = "+20 WA/MA above 500 souls";

const tier3SoulList = [
	// Arkarium
	{
		soulId: "arkarium", tier: 3, soulGaugeEffect: soulGaugeEffect, bossName: "Arkarium", orderPriority: 1,
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
		regular: {
			stats: [
				{ soulPrefix: "Mighty", amount: "STR +18" },
				{ soulPrefix: "Deft", amount: "DEX +18" },
				{ soulPrefix: "Enlightened", amount: "INT +18" },
				{ soulPrefix: "Lucky", amount: "LUK +18" },
				{ soulPrefix: "Glamorous", amount: "All Stats +10" },
				{ soulPrefix: "Sharp", amount: "Weapon ATT +4" },
				{ soulPrefix: "Runic", amount: "Magic ATT +4" },
				{ soulPrefix: "Robust", amount: "HP +700" }
			],
			skill: {
				name: "Snake Attack",
				img: ["./public/images/skills/soul-arkarium.png"],
				desc: "Arkarium's eyes are always fixed on enemies. Like the devil from somewhere... Arkarium, summoned by the power of the Soul Weapon, deals powerful poisoning attack to nearby monsters.",
				effect: "Soul cost: 200. Attacks up to 10 (12) enemies at 350% (450%) damage 1 time. Deals 350% (450%) damage every 1 second for 10 seconds. Cooldown: 120 seconds."
			}
		},
		augmented: {
			stats: [
				"Boss Damage +4%", "Magic ATT +8", "Weapon ATT +8", 
				"Ignore DEF +4%", "Critical Rate +8%", "All Stats +17", 
				"HP +1300", "All Skill Levels +1"
			],
			skill: {
				name: "Arkarium Stun",
				img: ["./public/images/skills/soul-arkarium.png"],
				desc: "The appearance of Arkarium is shocking enough to stun everyone nearby. Arkarium, summoned by the power of the Soul Weapon, delivers stun damage to nearby enemies with his powerful eyes.",
				effect: "Soul cost: 200. Attacks up to 15 enemies at 2500% (3000%) damage 1 time. Stuns the hit enemies for 3 seconds. Cooldown: 120 seconds."
			}
		}
	},
	// Black Knight
	{
		soulId: "black-knight", tier: 3, soulGaugeEffect: soulGaugeEffect, bossName: "Black Knight Mokadin", orderPriority: 2,
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
		regular: {
			stats: [
				{ soulPrefix: "Mighty", amount: "STR +20" },
				{ soulPrefix: "Deft", amount: "DEX +18" },
				{ soulPrefix: "Enlightened", amount: "INT +18" },
				{ soulPrefix: "Lucky", amount: "LUK +18" },
				{ soulPrefix: "Glamorous", amount: "All Stats +10" },
				{ soulPrefix: "Sharp", amount: "Weapon ATT +4" },
				{ soulPrefix: "Runic", amount: "Magic ATT +4" },
				{ soulPrefix: "Robust", amount: "HP +700" }
			],
			skill: {
				name: "Black Knight",
				img: ["./public/images/skills/soul-black-knight.png"],
				desc: "Summons Black Knight Mokadin to fight together. The Soul Weapon's power temporarily summons Mokadin to attack nearby monsters.",
				effect: "Soul cost: 250. Summons Mokadin with 500% (600%) damage for 60 seconds. Hits 5 (6) enemies once per attack. Cooldown: 300 seconds."
			}
		},
		augmented: {
			stats: [
				"Boss Damage +4%", "Magic ATT +8", "Weapon ATT +10", 
				"Ignore DEF +4%", "Critical Rate +8%", "All Stats +17", 
				"HP +1300", "All Skill Levels +1"
			],
			skill: {
				name: "Pitch Black Knight",
				img: ["./public/images/skills/soul-black-knight.png"],
				desc: "Summons a stronger Black Knight Mokadin to fight together. The Soul Weapon's power temporarily summons Mokadin to attack nearby monsters.",
				effect: "Soul cost: 250. Summons Mokadin with 750% (900%) damage for 60 seconds. Hits 5 (6) enemies once per attack. Cooldown: 300 seconds."
			}
		}
	},
	// Mad Mage
	{
		soulId: "mad-mage", tier: 3, soulGaugeEffect: soulGaugeEffect, bossName: "Mad Mage Kariaine", orderPriority: 3,
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
		regular: {
			stats: [
				{ soulPrefix: "Mighty", amount: "STR +18" },
				{ soulPrefix: "Deft", amount: "DEX +18" },
				{ soulPrefix: "Enlightened", amount: "INT +20" },
				{ soulPrefix: "Lucky", amount: "LUK +18" },
				{ soulPrefix: "Glamorous", amount: "All Stats +10" },
				{ soulPrefix: "Sharp", amount: "Weapon ATT +4" },
				{ soulPrefix: "Runic", amount: "Magic ATT +4" },
				{ soulPrefix: "Robust", amount: "HP +700" }
			],
			skill: {
				name: "Mad Mage",
				img: ["./public/images/skills/soul-mad-mage.png"],
				desc: "Summons Mad Mage Kariaine to fight together. The Soul Weapon's power temporarily summons Kariaine to attack nearby monsters.",
				effect: "Soul cost: 250. Summons Kariaine with 500% (600%) damage for 60 seconds. Hits 5 (6) enemies once per attack. Cooldown: 300 seconds."
			}
		},
		augmented: {
			stats: [
				"Boss Damage +4%", "Magic ATT +10", "Weapon ATT +8", 
				"Ignore DEF +4%", "Critical Rate +8%", "All Stats +17", 
				"HP +1300", "All Skill Levels +1"
			],
			skill: {
				name: "Completely Mad Mage",
				img: ["./public/images/skills/soul-mad-mage.png"],
				desc: "Summons a stronger Mad Mage Kariaine to fight together. The Soul Weapon's power temporarily summons Kariaine to attack nearby monsters.",
				effect: "Soul cost: 250. Summons Kariaine with 750% (900%) damage for 60 seconds. Hits 5 (6) enemies once per attack. Cooldown: 300 seconds."
			}
		}
	},
	// Vicious Hunter
	{
		soulId: "vicious-hunter", tier: 3, soulGaugeEffect: soulGaugeEffect, bossName: "Vicious Hunter July", orderPriority: 4,
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
		regular: {
			stats: [
				{ soulPrefix: "Mighty", amount: "STR +18" },
				{ soulPrefix: "Deft", amount: "DEX +20" },
				{ soulPrefix: "Enlightened", amount: "INT +18" },
				{ soulPrefix: "Lucky", amount: "LUK +18" },
				{ soulPrefix: "Glamorous", amount: "All Stats +10" },
				{ soulPrefix: "Sharp", amount: "Weapon ATT +4" },
				{ soulPrefix: "Runic", amount: "Magic ATT +4" },
				{ soulPrefix: "Robust", amount: "HP +700" }
			],
			skill: {
				name: "Vicious Hunter",
				img: ["./public/images/skills/soul-vicious-hunter.png"],
				desc: "Summons Vicious Hunter July to fight together. The Soul Weapon's power temporarily summons July to attack nearby monsters.",
				effect: "Soul cost: 250. Summons July with 500% (600%) damage for 60 seconds. Hits 5 (6) enemies once per attack. Cooldown: 300 seconds."
			}
		},
		augmented: {
			stats: [
				"Boss Damage +4%", "Magic ATT +8", "Weapon ATT +8", 
				"Ignore DEF +4%", "Critical Rate +8%", "All Stats +17", 
				"HP +1500", "All Skill Levels +1"
			],
			skill: {
				name: "Utterly Vicious Hunter",
				img: ["./public/images/skills/soul-vicious-hunter.png"],
				desc: "Summons a stronger Vicious Hunter July to fight together. The Soul Weapon's power temporarily summons July to attack nearby monsters.",
				effect: "Soul cost: 250. Summons July with 750% (900%) damage for 60 seconds. Hits 5 (6) enemies once per attack. Cooldown: 300 seconds."
			}
		}
	},
	// Rampant Cyborg
	{
		soulId: "rampant-cyborg", tier: 3, soulGaugeEffect: soulGaugeEffect, bossName: "Rampant Cyborg CQ57", orderPriority: 5,
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
		regular: {
			stats: [
				{ soulPrefix: "Mighty", amount: "STR +18" },
				{ soulPrefix: "Deft", amount: "DEX +18" },
				{ soulPrefix: "Enlightened", amount: "INT +18" },
				{ soulPrefix: "Lucky", amount: "LUK +20" },
				{ soulPrefix: "Glamorous", amount: "All Stats +10" },
				{ soulPrefix: "Sharp", amount: "Weapon ATT +4" },
				{ soulPrefix: "Runic", amount: "Magic ATT +4" },
				{ soulPrefix: "Robust", amount: "HP +700" }
			],
			skill: {
				name: "Rampant Cyborg",
				img: ["./public/images/skills/soul-rampant-cyborg.png"],
				desc: "Summons Rampant Cyborg CQ57 to fight together. The Soul Weapon's power temporarily summons CQ57 to attack nearby monsters.",
				effect: "Soul cost: 250. Summons CQ57 with 500% (600%) damage for 60 seconds. Hits 5 (6) enemies once per attack. Cooldown: 300 seconds."
			}
		},
		augmented: {
			stats: [
				"Boss Damage +4%", "Magic ATT +8", "Weapon ATT +8", 
				"Ignore DEF +4%", "Critical Rate +10%", "All Stats +17", 
				"HP +1300", "All Skill Levels +1"
			],
			skill: {
				name: "Fully Rampant Cyborg",
				img: ["./public/images/skills/soul-rampant-cyborg.png"],
				desc: "Summons a stronger Rampant Cyborg CQ57 to fight together. The Soul Weapon's power temporarily summons CQ57 to attack nearby monsters.",
				effect: "Soul cost: 250. Summons CQ57 with 750% (900%) damage for 60 seconds. Hits 5 (6) enemies once per attack. Cooldown: 300 seconds."
			}
		}
	},
	// Bad Brawler
	{
		soulId: "bad-brawler", tier: 3, soulGaugeEffect: soulGaugeEffect, bossName: "Fighter Plaid", orderPriority: 6,
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
		regular: {
			stats: [
				{ soulPrefix: "Mighty", amount: "STR +18" },
				{ soulPrefix: "Deft", amount: "DEX +18" },
				{ soulPrefix: "Enlightened", amount: "INT +18" },
				{ soulPrefix: "Lucky", amount: "LUK +18" },
				{ soulPrefix: "Glamorous", amount: "All Stats +12" },
				{ soulPrefix: "Sharp", amount: "Weapon ATT +4" },
				{ soulPrefix: "Runic", amount: "Magic ATT +4" },
				{ soulPrefix: "Robust", amount: "HP +700" }
			],
			skill: {
				name: "Bad Brawler",
				img: ["./public/images/skills/soul-bad-brawler.png"],
				desc: "Summons Fighter Plaid to fight together. The Soul Weapon's power temporarily summons Plaid to attack nearby monsters.",
				effect: "Soul cost: 250. Summons Plaid with 500% (600%) damage for 60 seconds. Hits 5 (6) enemies once per attack. Cooldown: 300 seconds."
			}
		},
		augmented: {
			stats: [
				"Boss Damage +4%", "Magic ATT +8", "Weapon ATT +8", 
				"Ignore DEF +4%", "Critical Rate +8%", "All Stats +20", 
				"HP +1300", "All Skill Levels +1"
			],
			skill: {
				name: "Real Bad Brawler",
				img: ["./public/images/skills/soul-bad-brawler.png"],
				desc: "Summons a stronger Fighter Plaid to aid in combat. The Soul Weapon's power temporarily summons Plaid to attack nearby monsters.",
				effect: "Soul cost: 250. Summons Plaid with 750% (900%) damage for 60 seconds. Hits 5 (6) enemies once per attack. Cooldown: 300 seconds."
			}
		}
	}
];

module.exports = tier3SoulList;