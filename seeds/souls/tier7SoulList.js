const soulGaugeEffect = "+15 WA/MA above 500 souls";

const tier7Astats = [
	{ soulPrefix: "Mighty", amount: "STR +7" },
	{ soulPrefix: "Deft", amount: "DEX +7" },
	{ soulPrefix: "Enlightened", amount: "INT +7" },
	{ soulPrefix: "Lucky", amount: "LUK +7" },
	{ soulPrefix: "Glamorous", amount: "All Stats +5" },
	{ soulPrefix: "Runic", amount: "MP +300" },
	{ soulPrefix: "Robust", amount: "HP +300" }
];

const tier7Bstats = [
	{ soulPrefix: "Mighty", amount: "STR +5" },
	{ soulPrefix: "Deft", amount: "DEX +5" },
	{ soulPrefix: "Enlightened", amount: "INT +5" },
	{ soulPrefix: "Lucky", amount: "LUK +5" },
	{ soulPrefix: "Glamorous", amount: "All Stats +3" },
	{ soulPrefix: "Runic", amount: "MP +200" },
	{ soulPrefix: "Robust", amount: "HP +200" }
];

const tier7Cstats = [
	{ soulPrefix: "Mighty", amount: "STR +4" },
	{ soulPrefix: "Deft", amount: "DEX +4" },
	{ soulPrefix: "Enlightened", amount: "INT +4" },
	{ soulPrefix: "Lucky", amount: "LUK +4" },
	{ soulPrefix: "Glamorous", amount: "All Stats +2" },
	{ soulPrefix: "Runic", amount: "MP +180" },
	{ soulPrefix: "Robust", amount: "HP +180" }
];

const tier7Dstats = [
	{ soulPrefix: "Mighty", amount: "STR +3" },
	{ soulPrefix: "Deft", amount: "DEX +3" },
	{ soulPrefix: "Enlightened", amount: "INT +3" },
	{ soulPrefix: "Lucky", amount: "LUK +3" },
	{ soulPrefix: "Glamorous", amount: "All Stats +2" },
	{ soulPrefix: "Runic", amount: "MP +150" },
	{ soulPrefix: "Robust", amount: "HP +150" }
];


const tier7SoulList = [
	// Spirit of Rock 
	{
		soulId: "rock-spirit", tier: 7, soulGaugeEffect: soulGaugeEffect, bossName: "Spirit of Rock", hasAugmented: false, orderPriority: 1,
		caption: {
			regular: {
				img: "./public/images/souls/img-rock-spirit-1.png",
				text: "Listen to the best song ever!",
			},
			hidden: {
				img: "./public/images/souls/img-rock-spirit-2.png",
				text: "I'll gift you with an amazing soul!"
			}
		},
		regular: {
			itemImg: "./public/images/souls/soul-rock-spirit.png",
			stats: tier7Dstats,
			skill: {
				name: "Rock n Roll Baby",
				img: ["./public/images/skills/soul-rock-spirit.png"],
				desc: "Summons Spirit of Rock by the power of Soul Weapon and listens to his passionate performance. For some reason, monsters suffer from Spirit of Rock's music.",
				effect: "Soul cost: 200. Summons Spirit of Rock with 300% (350%) damage for 30 seconds. Hits 5 (6) enemies once per attack. Cooldown: 120 seconds."
			}
		}
	},
	// Ephenia
	{
		soulId: "ephenia", tier: 7, soulGaugeEffect: soulGaugeEffect, bossName: "Ephenia", hasAugmented: false, orderPriority: 2,
		caption: {
			regular: {
				img: "./public/images/souls/img-ephenia-1.png",
				text: "I am Ephenia, the queen of Ellin Forest.",
			},
			hidden: {
				img: "./public/images/souls/img-ephenia-2.png",
				text: "Listen to the song of Ephenia, the lead vocalist of the Halloween band!"
			}
		},
		regular: {
			itemImg: "./public/images/souls/soul-ephenia.png",
			stats: tier7Cstats,
			skill: {
				name: "Queen's Scent of Ephenia",
				img: ["./public/images/skills/soul-ephenia.png"],
				desc: "Ephenia leaves the scents of a queen in her wake. Ephenia summoned by the power of Soul Weapon increases HP and MP for party members.",
				effect: "Soul cost: 200. Increases your party's Max HP/Max MP by 50% (60%) for 180 (210) seconds. Cooldown: 300 seconds."
			}
		}
	},
	// Ani
	{
		soulId: "ani", tier: 7, soulGaugeEffect: soulGaugeEffect, bossName: "Ani", hasAugmented: false, orderPriority: 3,
		caption: {
			regular: {
				img: "./public/images/souls/img-ani-1.png",
				text: "You can come in, but you can't get out.",
			},
			hidden: {
				img: "./public/images/souls/img-ani-2.png",
				text: "Have you heard of the Lion King's personal guitarist, Ani?"
			}
		},
		regular: {
			itemImg: "./public/images/souls/soul-ani.png",
			stats: tier7Dstats,
			skill: {
				name: "Striking One Dude",
				img: ["./public/images/skills/soul-ani.png"],
				desc: "I only strike one guy once. The power of Soul Weapon summons Ani who wields a mace to deal powerful damage to monsters.",
				effect: "Soul cost: 100. Attacks up to 1 enemy at 2000% (2400%) damage 1 time. Cooldown: 30 seconds."
			}
		}
	},
	// Mu Gong
	{
		soulId: "mu-gong", tier: 7, soulGaugeEffect: soulGaugeEffect, bossName: "Mu Gong", hasAugmented: false, orderPriority: 4,
		caption: {
			regular: {
				img: "./public/images/souls/img-mu-gong-1.png",
				text: "It's at least a hundred years early.",
			},
			hidden: {
				img: "./public/images/souls/img-mu-gong-2.png",
				text: "Playing is also part of training!"
			}
		},
		regular: {
			itemImg: "./public/images/souls/soul-mu-gong.png",
			stats: tier7Astats,
			skill: {
				name: "Rejuvenation Spell",
				img: ["./public/images/skills/soul-mu-gong.png"],
				desc: "Travels back in time to when a godly level was reached. The Soul Weapon's power summons Mu Gong who revisits his youth and provides a powerful buff.",
				effect: "Soul cost: 250. Increases ATT/MATT by 30% for 10 (20) seconds. Cooldown: 150 seconds."
			}
		}
	},
	// Black Slime
	{
		soulId: "black-slime", tier: 7, soulGaugeEffect: soulGaugeEffect, bossName: "Captain Black Slime", hasAugmented: false, orderPriority: 5,
		caption: {
			regular: {
				img: "./public/images/souls/img-black-slime-1.png",
				text: "Gold Beach is now isolated.",
			},
			hidden: {
				img: "./public/images/souls/img-black-slime-2.png",
				text: "My voice shall reach Gold Beach!"
			}
		},
		regular: {
			itemImg: "./public/images/souls/soul-black-slime.png",
			stats: tier7Dstats,
			skill: {
				name: "Pink Poison Mist",
				img: ["./public/images/skills/soul-black-slime.png"],
				desc: "The Soul Weapon's power summons Captain Black Slime who spews poisonous fog, dealing poison damage to nearby enemies.",
				effect: "Soul cost: 100. Attacks 10 enemies at 500% (600%) damage 1 time. Deals 200% damage every 2 seconds for 10 seconds. Cooldown: 120 seconds."
			}
		},
	},
	// Xerxes
	{
		soulId: "xerxes", tier: 7, soulGaugeEffect: soulGaugeEffect, bossName: "Xerxes", hasAugmented: false, orderPriority: 6,
		caption: {
			regular: {
				img: "./public/images/souls/img-xerxes-1.png",
				text: "Never underestimate pets again.",
			},
			hidden: {
				img: "./public/images/souls/img-xerxes-2.png",
				text: "I'm magnanimous."
			}
		},
		regular: {
			itemImg: "./public/images/souls/soul-xerxes.png",
			stats: tier7Dstats,
			skill: {
				name: "Goat Commando Attack",
				img: ["./public/images/skills/soul-xerxes.png"],
				desc: "The Soul Weapon's power summons Xerxes' Goat Commando who dashes and attacks the front.",
				effect: "Soul cost: 100. Attacks up to 5 (6) enemies at 700% (900%) damage 1 time. Cooldown: 30 seconds."
			}	
		}
	},
	// Rex
	{
		soulId: "rex", tier: 7, soulGaugeEffect: soulGaugeEffect, bossName: "Rex", hasAugmented: false, orderPriority: 7,
		caption: {
			regular: {
				img: "./public/images/souls/img-rex-1.png",
				text: "Onward!",
			},
			hidden: {
				img: "./public/images/souls/img-rex-2.png",
				text: "Yes, my name's Rex. I live for speed."
			}
		},
		regular: {
			itemImg: "./public/images/souls/soul-rex.png",
			stats: tier7Bstats,
			skill: {
				name: "Out of My Way",
				img: ["./public/images/skills/soul-rex.png"],
				desc: "Rex's instinct to dash is going out of control. The Soul Weapon's power summons Rex who deals powerful damage to the front.",
				effect: "Soul cost: 200. Attacks up to 10 (12) enemies at 1000% damage 1 time, ignoring 100% of monster defense. Cooldown: 60 seconds."
			}
		}
	},
	// Pianus
	{
		soulId: "pianus", tier: 7, soulGaugeEffect: soulGaugeEffect, bossName: "Pianus", hasAugmented: false, orderPriority: 8,
		caption: {
			regular: {
				img: "./public/images/souls/img-pianus-1.png",
				text: "I Want to Escape!",
			},
			hidden: {
				img: "./public/images/souls/img-pianus-2.png",
				text: "How dare you summon me?!"
			}
		},
		regular: {
			itemImg: "./public/images/souls/soul-pianus.png",
			stats: tier7Astats,
			skill: {
				name: "Forehead Fish of Horror",
				img: ["./public/images/skills/soul-pianus.png"],
				desc: "There is a scary scar on Pianus' forehead. The Soul Weapon's power summons Pianus who cries, inflicting a slow effect to nearby monsters.",
				effect: "Soul cost: 100. Slows down up to 10 enemies for 10 (15) seconds. Cooldown: 30 seconds."
			}
		}
	},
	// Dragon Rider
	{
		soulId: "dragon-rider", tier: 7, soulGaugeEffect: soulGaugeEffect, bossName: "Dragon Rider", hasAugmented: false, orderPriority: 9,
		caption: {
			regular: {
				img: "./public/images/souls/img-dragon-rider-1.png",
				text: "Revenge for Leafre...",
			},
			hidden: {
				img: "./public/images/souls/img-dragon-rider-2.png",
				text: "I may not look it, but I'm popular among the ladies of Leafre."
			}
		},
		regular: {
			itemImg: "./public/images/souls/soul-dragon-rider.png",
			stats: tier7Bstats,	
			skill: {
				name: "Palm Wind",
				img: ["./public/images/skills/soul-dragon-rider.png"],
				desc: "Dragon Rider shoots his palm energy to the front.",
				effect: "Soul cost: 100. Attacks up to 15 enemies at 1000% (1200%) damage 1 time. Deals 300% damage every 2 seconds for 10 seconds. Cooldown: 30 seconds."
			}
		}
	}
];

module.exports = tier7SoulList;