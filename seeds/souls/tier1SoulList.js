const soulGaugeEffect = "+20 WA/MA above 500 souls";

const stats = [
	{ soulPrefix: "Mighty", amount: "STR +24" },
	{ soulPrefix: "Deft", amount: "DEX +24" },
	{ soulPrefix: "Enlightened", amount: "INT +24" },
	{ soulPrefix: "Lucky", amount: "LUK +24" },
	{ soulPrefix: "Glamorous", amount: "All Stats +15" },
	{ soulPrefix: "Sharp", amount: "Weapon ATT +6" },
	{ soulPrefix: "Runic", amount: "Magic ATT +6" },
	{ soulPrefix: "Robust", amount: "HP +960" }
];

const augStats = [
	"Boss Damage +7%", "Magic ATT +3%", "Weapon ATT +3%", 
	"Ignore DEF +7%", "Critical Rate +12%", "All Stats +5%", 
	"HP +2000", "All Skill Levels +2"
];

const tier1SoulList = [
	// Cygnus
	{
		soulId: "cygnus", tier: 1, soulGaugeEffect: soulGaugeEffect, bossName: "Cygnus", orderPriority: 1,
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
		regular: {
			itemImg: "./public/images/souls/soul-cygnus.png",
			stats: stats,
			skill: {
				name: "Flame Empress",
				img: ["./public/images/skills/soul-cygnus.png"],
				desc: "The grandeur of Cygnus unfolds like a flame. Cygnus summoned by the power of Soul Weapon starts hot attacks to the monsters in the vicinity.",
				effect: "Soul cost: 250. Summons Cygnus with 1000% (1200%) damage for 90 seconds. Hits 6 (7) enemies once per attack. Cooldown: 150 seconds."
			}
		},
		augmented: {
			stats: augStats,
			skill: {
				name: "Storm Empress",
				img: ["./public/images/skills/soul-cygnus.png"],
				desc: "The grandeur of Cygnus unfolds like a storm. Cygnus summoned by the power of Soul Weapon starts storm attacks to the monsters in the vicinity.",
				effect: "Soul cost: 250. Summons Cygnus with 1500% (1800%) damage for 120 seconds. Hits 8 (10) enemies once per attack. Cooldown: 150 seconds."
			}
		}
	},
	// Magnus
	{
		soulId: "magnus", tier: 1, soulGaugeEffect: soulGaugeEffect, bossName: "Magnus", orderPriority: 2,
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
		regular: {
			itemImg: "./public/images/souls/soul-magnus.png",
			stats: stats,
			skill: {
				name: "Advance! That is me.",
				img: ["./public/images/skills/soul-magnus.png"],
				desc: "Magnus, with unmatched confidence, advances after his sword. Magnus, summoned by the power of the Soul Weapon, pushes forward and attacks with his large sword.",
				effect: "Soul cost: 150. Attacks up to 7 (8) enemies at 3000% (3600%) damage 1 time. Cooldown: 60 seconds."
			}
		},
		augmented: {
			stats: augStats,
			skill: {
				name: "Bombing! That is me.",
				img: ["./public/images/skills/soul-magnus.png"],
				desc: "Summons the Traitor Magnus to fight together. (Be careful not to get betrayed...) The Soul Weapon's power temporarily summons Magnus to attack nearby monsters.",
				effect: "Soul cost: 250. Summons Magnus with 1500% (1800%) damage for 120 seconds. Hits 8 (10) enemies once per attack. Cooldown: 180 seconds."
			}
		}
	},
	// Lotus
	{
		soulId: "lotus", tier: 1, soulGaugeEffect: soulGaugeEffect, bossName: "Lotus", orderPriority: 3,
		caption: {
			regular: {
				img: "./public/images/souls/img-lotus-1.png",
				text: "...Intruders identified. Eliminating the targets...",
			},
			hidden: {
				img: "./public/images/souls/img-lotus-2.png",
				text: "Sigh, if it weren't for Orchid..."
			}
		},
		regular: {
			itemImg: "./public/images/souls/soul-lotus.png",
			stats: stats,
			skill: {
				name: "Hit Lotus",
				img: ["./public/images/skills/soul-lotus.png"],
				desc: "Lotus' soul stays with you. The Soul Weapon's power temporarily summons Lotus to attack nearby monsters.",
				effect: "Soul cost: 250. Summons Lotus with 1500% (1800%) damage for 120 seconds. Hits 8 (9) enemies once per attack. Cooldown: 180 seconds."
			}
		},
		augmented: {
			itemImg: "./public/images/souls/soul-lotus-aug.png",
			stats: augStats,
			skill: {
				name: "Angry Lotus",
				img: ["./public/images/skills/soul-lotus-aug.png"],
				desc: "Lotus' soul stays with you. Must be furious about something. The Soul Weapon's power temporarily summons Lotus to attack nearby monsters.",
				effect: "Soul cost: 250. Summons Burnup Lotus with 1800% (2200%) damage for 120 seconds. Hits 10 (12) enemies once per attack. Cooldown: 180 seconds."
			}
		}
	},
	// Damien
	{
		soulId: "damien", tier: 1, soulGaugeEffect: soulGaugeEffect, bossName: "Damien", orderPriority: 4,
		caption: {
			regular: {
				img: "./public/images/souls/img-damien-1.png",
				text: "I'll show you hell.",
			},
			hidden: {
				img: "./public/images/souls/img-damien-2.png",
				text: "Please remember the great memories we created together..."
			}
		},
		regular: {
			itemImg: "./public/images/souls/soul-damien.png",
			stats: stats,
			skill: {
				name: "Commence Hunting",
				img: ["./public/images/skills/soul-damien.png"],
				desc: "Damien's soul stays with you. The Soul Weapon's power temporarily summons Damien to attack nearby monsters.",
				effect: "Soul cost: 250. Summons Damien with 1500% (1800%) damage for 120 seconds. Hits 8 (9) enemies once per attack. Cooldown: 180 seconds."
			}
		},
		augmented: {
			itemImg: "./public/images/souls/soul-damien-aug.png",
			stats: augStats,
			skill: {
				name: "Sword of Destruction",
				img: ["./public/images/skills/soul-damien-aug.png"],
				desc: "Damien's soul stays with you. A Damien awakened by the power of the Fallen World Tree. The Soul Weapon's power temporarily summons Damien to attack nearby monsters.",
				effect: "Soul cost: 250. Summons Awakened Damien with 1800% (2200%) damage for 120 seconds. Hits 10 (12) enemies once per attack. Cooldown: 180 seconds."
			}
		}
	},
	// Crimson Queen
	{
		soulId: "queen", tier: 1, soulGaugeEffect: soulGaugeEffect, bossName: "Crimson Queen", orderPriority: 5,
		caption: {
			regular: {
				img: "./public/images/souls/img-queen-1.png",
				text: "Oh, I have cute guests.",
			},
			hidden: {
				img: "./public/images/souls/img-queen-2.png",
				text: "*Smacking lips* I need my beauty sleep."
			}
		},
		regular: {
			itemImg: "./public/images/souls/soul-queen.png",
			stats: stats,
			skill: {
				name: "Queen's Mood Swing",
				img: [
					"./public/images/skills/soul-queen-wink.png",
					"./public/images/skills/soul-queen-evil.png",
					"./public/images/skills/soul-queen-normal.png",
					"./public/images/skills/soul-queen-cry.png",
				],
				desc: `<p class="mb-1">The stats of Crimson Queen change depending on her mood.</p>
						<ul class="mb-0">
							<li class="mb-1"><span class="font-weight-bold">[Temptation]</span> The Soul Weapon's power summons the Crimson Queen, and she provides vampiric effects with her bloody blessings.</li>
							<li class="mb-1"><span class="font-weight-bold">[Joy]</span> The queen summoned by the power of your Soul Weapon increases your Attack Speed with her joyful blessings.</li>
							<li class="mb-1"><span class="font-weight-bold">[Anger]</span> The queen summoned by the power of your Soul Weapon increases your Weapon/Magic Attack with her fearsome blessings.</li>
							<li class="mb-1"><span class="font-weight-bold">[Sadness]</span> The queen summoned by the power of your Soul Weapon increases your Defense and Max HP with her tearful blessings.</li>
						</ul>`,
				effect: `<p class="mb-1">Soul cost: 200. Cooldown: 150 seconds.</p>
						<ul class="mb-0">
							<li class="mb-1"><span class="font-weight-bold">[Temptation]</span> Absorbs 10% damage as HP for 100 (120) seconds. Cannot absorb more than 10% of the character's max HP or the max HP of the target monster.</li>
							<li class="mb-1"><span class="font-weight-bold">[Joy]</span> Increases ASPD by 1 level for 100 (120) seconds.</li>
							<li class="mb-1"><span class="font-weight-bold">[Anger]</span> Increases ATT/MATT by 30 for 100 (120) seconds).</li>
							<li class="mb-0"><span class="font-weight-bold">[Sadness]</span> Increases DEF by 50 and Max HP by 10% for 100 (120) seconds).</li>
						</ul>`
			}
		},
		augmented: {
			stats: augStats,
			skill: {
				name: "Sanguis Regina",
				img: [
					"./public/images/skills/soul-queen-wink.png",
					"./public/images/skills/soul-queen-evil.png",
					"./public/images/skills/soul-queen-normal.png",
					"./public/images/skills/soul-queen-cry.png",
				],
				desc: "The finicky Crimson Queen changes her looks according to her mood. The Soul Weapon's power temporarily summons the Seductive / Joyful / Raging / Sorrowful Bloody Queen to attack nearby monsters. (Author's note: The different faces summoned are purely cosmetic)",
				effect: "Soul cost: 250. Summons Crimson Queen with 1500% (1800%) damage for 90 seconds. Hits 8 (10) enemies once per attack. Cooldown: 150 seconds."
			}
		}
	},
	// Vellum
	{
		soulId: "vellum", tier: 1, soulGaugeEffect: soulGaugeEffect, bossName: "Vellum", orderPriority: 6,
		caption: {
			regular: {
				img: "./public/images/souls/img-vellum-1.png",
				text: "You've returned against my warning. No more mercy for you!",
			},
			hidden: {
				img: "./public/images/souls/img-vellum-2.png",
				text: "I love bathing in the lava under the altar!"
			}
		},
		regular: {
			itemImg: "./public/images/souls/soul-vellum.png",
			stats: stats,
			skill: {
				name: "Vellum Giga Laser",
				img: ["./public/images/skills/soul-vellum.png"],
				desc: "Vellum roars with sky-shattering force. It's like he is breathing out lasers. The Soul Weapon's power summons Vellum and Vellum attacks monsters in front.",
				effect: "Soul cost: 200. Attacks up to 15 enemies at 3000% (3600%) damage 1 time. Cooldown: 120 seconds."
			}
		},
		augmented: {
			stats: augStats,
			skill: {
				name: "Summon Vellum Jr.!",
				img: ["./public/images/skills/soul-vellum.png"],
				desc: "Summons a small Vellum and lets it tag along. Don't underestimate him because of his small build. The Soul Weapon's power temporarily summons Vellum to attack nearby monsters.",
				effect: "Soul cost: 250. Summons Vellum Jr. with 1500% (1800%) damage for 120 seconds. Hits 8 (10) enemies once per attack. Cooldown: 180 seconds."
			}
		}
	},
	// Lucid
	{
		soulId: "lucid", tier: 1, soulGaugeEffect: soulGaugeEffect, bossName: "Lucid", orderPriority: 7,
		caption: {
			regular: {
				img: "./public/images/souls/img-lucid-1.png",
				text: "Your nightmares already have begun.",
			},
			hidden: {
				img: "./public/images/souls/img-lucid-2.png",
				text: "Any Elf from Elluel can do this."
			}
		},
		regular: {
			itemImg: "./public/images/souls/soul-lucid.png",
			stats: stats,
			skills: {
				name: "Invitation to Nightmares",
				img: ["./public/images/skills/soul-lucid.png"],
				desc: "Lucid's soul stays with you. The Soul Weapon's power temporarily summons Lucid to attack nearby enemies.",
				effect: "Soul cost: 150. Summons Lucid with 1500% (1800%) damage for 40 seconds. Hits 8 (9) enemies once per attack. Cooldown: 60 seconds."
			}
		},
		augmented: {
			itemImg: "./public/images/souls/soul-lucid-aug.png",
			stats: augStats,
			skills: {
				name: "Master of Nightmares",
				img: ["./public/images/skills/soul-lucid-aug.png"],
				desc: "Lucid's soul stays with you. A Lucid who has fully recovered her strength. The Soul Weapon's power temporarily summons Lucid to attack nearby enemies.",
				effect: "Soul cost: 250. Summons Lucid with 1800% (2200%) damage for 120 seconds. Hits 10 (12) enemies once per attack. Cooldown: 150 seconds."
			}
		}
	},
	// Will
	{
		soulId: "will", tier: 1, soulGaugeEffect: soulGaugeEffect, bossName: "Will", orderPriority: 8,
		caption: {
			regular: {
				img: "./public/images/souls/img-will-1.png",
				text: "The true value of a person is revealed from their choice.",
			},
			hidden: {
				img: "./public/images/souls/img-will-2.png",
				text: "Ah, what?! I didn't make this choice!"
			}
		},
		regular: {
			itemImg: "./public/images/souls/soul-will.png",
			stats: stats,
			skill: {
				name: "Grasp of Destruction",
				img: ["./public/images/skills/soul-will.png"],
				desc: "Will transforms into a spider to deliver a powerful blow. The Soul Weapon's power summons Will to attack nearby monsters.",
				effect: "Soul cost: 300. Attacks up to 15 enemies at 1000% (1200%) damage 4 times. Cooldown: 120 seconds."
			}
		},
		augmented: {
			itemImg: "./public/images/souls/soul-will-aug.png",
			stats: augStats,
			skill: {
				name: "King of Spiders",
				img: ["./public/images/skills/soul-will-aug.png"],
				desc: "Summons the soul of Will, the King of Spiders. The Soul Weapon's power temporarily summons Will to attack nearby monsters.",
				effect: "Soul cost: 250. Summons Will with 1800% (2200%) damage for 120 seconds. Hits 10 (12) enemies once per attack. Cooldown: 150 seconds."
			}
		}
	},
	// Heretic Hilla
	{
		soulId: "heretic-hilla", tier: 1, soulGaugeEffect: soulGaugeEffect, bossName: "Heretic Hilla", orderPriority: 9,
		caption: {
			regular: {
				img: "./public/images/souls/img-heretic-hilla-1.png",
				text: "Sinking deeper into the swamp and wandering for eternity. It's your destiny now.",
			},
			hidden: {
				img: "./public/images/souls/img-heretic-hilla-2.png",
				text: "My dear, I'll always stay by your side!"
			}
		},
		regular: {
			itemImg: "./public/images/souls/soul-heretic-hilla.png",
			stats: stats,
			skill: {
				name: "Soul Rip",
				img: ["./public/images/skills/soul-heretic-hilla.png"],
				desc: "Heretic Hilla, summoned by the power of Soul Weapon, targets an enemy in the front and lands a powerful blow.",
				effect: "Soul cost: 250. Attacks up to 1 enemy at 8000% (10000%) damage 1 time. Heretic Hilla's attack penetrates Ignore Attacks and Damage Reflection effects. Cooldown: 40 seconds."
			}
		},
		augmented: {
			itemImg: "./public/images/souls/soul-heretic-hilla-aug.png",
			stats: augStats,
			skill: {
				name: "Red Witch",
				img: ["./public/images/skills/soul-heretic-hilla-aug.png"],
				desc: "Summons the spirit of Heretic Hilla the Red Witch. The Soul Weapon's power temporarily summons Heretic Hilla to attack nearby monsters.",
				effect: "Soul cost: 250. Summons Heretic Hilla with 1800% (2200%) damage for 120 seconds. Hits 10 (12) enemies once per attack. Cooldown: 150 seconds."
			}
		}
	},
	// Djunkel
	{
		soulId: "djunkel", tier: 1, soulGaugeEffect: soulGaugeEffect, bossName: "Djunkel", orderPriority: 10,
		caption: {
			regular: {
				img: "./public/images/souls/img-djunkel-1.png",
				text: "For the Great One.",
			},
			hidden: {
				img: "./public/images/souls/img-djunkel-2.png",
				text: "You all have greatly disappointed your Guard Captain here."
			}
		},
		regular: {
			itemImg: "./public/images/souls/soul-djunkel.png",
			stats: stats,
			skill: {
				name: "Ground Slash",
				img: ["./public/images/skills/soul-djunkel.png"],
				desc: "Djunkel, summoned by the power of Soul Weapon, targets an enemy in the front and lands a powerful blow.",
				effect: "Soul cost: 200. Attacks up to 15 enemies at 1000% (1200%) damage 4 times. Cooldown: 30 seconds."
			}
		},
		augmented: {
			itemImg: "./public/images/souls/soul-djunkel-aug.png",
			stats: augStats,
			skill: {
				name: "Ground Blast",
				img: ["./public/images/skills/soul-djunkel-aug.png"],
				desc: "Summons the soul of Captain of the Guard Djunkel. The Soul Weapon's power temporarily summons Djunkel to attack nearby monsters.",
				effect: "Soul cost: 250. Summons Djunkel with 1800% (2200%) damage for 120 seconds. Hits 10 (12) enemies once per attack. Cooldown: 150 seconds."
			}
		}
	},
	// Murr Murr
	{
		soulId: "murrmurr", tier: 1, soulGaugeEffect: soulGaugeEffect, bossName: "Murr Murr", orderPriority: 100,
		caption: {
			regular: {
				img: "./public/images/souls/img-murrmurr-1.png",
				text: "Not in Soul Collector; here's some Murr Murr's Dungeon memories instead!",
			},
			hidden: {
				img: "./public/images/souls/img-murrmurr-2.png",
				text: "BOO!"
			}
		},
		regular: {
			itemImg: "./public/images/souls/soul-murrmurr.png",
			stats: stats,
			skill: {
				name: "Murr Murr's Strange Company",
				img: ["./public/images/skills/soul-murrmurr.png"],
				desc: "Summon's Soul Researcher Murr Murr to fight together. The Soul Weapon's power temporarily summons Murr Murr to attack nearby monsters.",
				effect: "Soul cost: 250. Summons Murr Murr with 1500% damage for 120 seconds. Hits 8 enemies once per attack. Cooldown: 300 seconds. (Author's Note: This skill only has 1 level)"
			}
		},
		augmented: {
			stats: augStats,
			skill: {
				name: "Murr Murr's Suspicious Company",
				img: ["./public/images/skills/soul-murrmurr.png"],
				desc: "Summon's Soul Researcher Murr Murr to fight together. The Soul Weapon's power temporarily summons Murr Murr to attack nearby monsters.",
				effect: "Soul cost: 250. Summons Murr Murr with 1500% damage for 180 seconds. Hits 8 enemies once per attack. Cooldown: 300 seconds. (Author's Note: This skill only has 1 level)"
			}
		}
	},
];

module.exports = tier1SoulList;