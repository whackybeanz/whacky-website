var allSetEffects = {
	acs: {
		title: "Arcaneshade Set",
		items: {
			hat: {
				warrior: [{ id: "acs-warrior-hat", image: "/images/equips/acs-knight-hat.png", name: "Arcaneshade Knight Hat" }],
				mage: [{ id: "acs-mage-hat", image: "/images/equips/acs-mage-hat.png", name: "Arcaneshade Mage Hat" }],
				archer: [{ id: "acs-archer-hat", image: "/images/equips/acs-archer-hat.png", name: "Arcaneshade Archer Hat" },
						{ id: "acs-archer-suit", image: "/images/equips/acs-archer-hat.png", name: "Arcaneshade Archer Suit" },
						{ id: "acs-archer-shoes", image: "/images/equips/acs-archer-hat.png", name: "Arcaneshade Archer Shoes" },
						{ id: "acs-archer-mitts", image: "/images/equips/acs-archer-hat.png", name: "Arcaneshade Archer Mitts" },
						{ id: "acs-archer-cape", image: "/images/equips/acs-archer-hat.png", name: "Arcaneshade Archer Cape" },
						{ id: "acs-archer-shoulder", image: "/images/equips/acs-archer-hat.png", name: "Arcaneshade Archer Shoulder" },
						{ id: "acs-archer-weapon", image: "/images/equips/acs-archer-hat.png", name: "Arcaneshade Archer Weapon" },],
				thief: [{ id: "acs-thief-hat", image: "/images/equips/acs-bandit-hat.png", name: "Arcaneshade Bandit Hat" }],
				pirate: [{ id: "acs-pirate-hat", image: "/images/equips/acs-pirate-hat.png", name: "Arcaneshade Pirate Hat" }],
			}
		},
		effects: { 
			warrior: {
				1: [{ statId: "str", statName: "STR", val: "40" }],
				2: [{ statId: "str", statName: "STR", val: "80" }],
			},
			mage: {
				1: [{ statId: "int", statName: "INT", val: "40" }],
				2: [{ statId: "int", statName: "INT", val: "80" }]
			},
			archer: {
				1: [{ statId: "wa", statName: "ATT", val: "30" }, { statId: "ma", statName: "MATT", val: "30" }, 
					{ statId: "maxHpMp", statName: "Max HP / Max MP", val: "2000" }],
				2: [{ statId: "wa", statName: "ATT", val: "35" }, { statId: "ma", statName: "MATT", val: "35" },
					{ statId: "allStats", statName: "All Stats", val: "50" }],
				3: [{ statId: "wa", statName: "ATT", val: "40" }, { statId: "ma", statName: "MATT", val: "40" },
					{ statId: "ied", statName: "Ignore DEF %", val: "10%" }, { statId: "def", statName: "DEF", val: "400" }],
				4: [{ statId: "wa", statName: "ATT", val: "30" }, { statId: "ma", statName: "MATT", val: "30" },
					{ statId: "boss", statName: "Boss Damage %", val: "30%" }],
				5: [{ statId: "wa", statName: "ATT", val: "30" }, { statId: "ma", statName: "MATT", val: "30" },
					{ statId: "boss", statName: "Max HP / Max MP", val: "30%" }],
				6: [{ statId: "wa", statName: "ATT", val: "30" }, { statId: "ma", statName: "MATT", val: "30" },
					{ statId: "ied", statName: "Ignore DEF %", val: "10%" }],
			},
			thief: {
				1: [{ statId: "luk", statName: "LUK", val: 40 }],
				2: [{ statId: "luk", statName: "LUK", val: 80 }]
			},
			pirate: {
				1: [{ statId: "str", statName: "STR", val: 20 }, { statId: "dex", statName: "DEX", val: 20 }],
				2: [{ statId: "str", statName: "STR", val: 40 }, { statId: "dex", statName: "DEX", val: 40 }]
			}
		}
	},
	abs: {
		title: "Absolabs Set",
		items: {
			hat: {
				warrior: [{ id: "abs-warrior-hat", image: "/images/equips/abs-bastion-helm.png", name: "Absolabs Bastion Helm" }],
				mage: [{ id: "abs-mage-hat", image: "/images/equips/abs-cabalist-crown.png", name: "Absolabs Cabalist Crown" }],
				archer: [{ id: "abs-archer-hat", image: "/images/equips/abs-trueshot-hood.png", name: "Absolabs Trueshot Hood" }],
				thief: [{ id: "abs-thief-hat", image: "/images/equips/abs-shadow-beret.png", name: "Absolabs Shadow Beret" }],
				pirate: [{ id: "abs-pirate-hat", image: "/images/equips/abs-brigadier-fedora.png", name: "Absolabs Brigadier Fedora" }],
			}
		},
		effects: { 
			warrior: {
				1: [{ statId: "str", statName: "STR", val: 40 }],
				2: [{ statId: "str", statName: "STR", val: 80 }],
			},
			mage: {
				1: [{ statId: "int", statName: "INT", val: 40 }],
				2: [{ statId: "int", statName: "INT", val: 80 }]
			},
			archer: {
				1: [{ statId: "dex", statName: "DEX", val: 40 }],
				2: [{ statId: "dex", statName: "DEX", val: 80 }]
			},
			thief: {
				1: [{ statId: "luk", statName: "LUK", val: 40 }],
				2: [{ statId: "luk", statName: "LUK", val: 80 }]
			},
			pirate: {
				1: [{ statId: "str", statName: "STR", val: 20 },
					{ statId: "dex", statName: "DEX", val: 20 }],
				2: [{ statId: "str", statName: "STR", val: 40 },
					{ statId: "dex", statName: "DEX", val: 40 }]
			}
		}
	},
	hardBossAcc: {
		title: "Hard Boss Accessory Set",
		items: {
			face: {
				common: [{ id: "lotus-mark", image: "", name: "Loose Control Machine Mark" }]
			},
			eye: {
				common: [{ id: "damien-mask", image: "", name: "Magical Eye Patch" }]
			}
		},
		effects: { 
			common: {
				1: [{ statId: "str", statName: "STR", val: 40 }],
				2: [{ statId: "int", statName: "INT", val: 40 }]
			}
		}
	},
	bossAcc: {
		title: "Boss Accessory Set",
		items: {
			face: {
				common: [{ id: "bossAcc-face-1", image: "/images/equips/condensed-crystal.png", name: "Condensed Strength Crystalline" }],
			},
			eye: {
				common: [{ id: "bossAcc-eye-1", image: "/images/equips/papulatus-mark.png", name: "Papulatus Mark" },
						{ id: "bossAcc-eye-2", image: "/images/equips/black-bean-mark.png", name: "Black Bean Mark" },
						{ id: "bossAcc-eye-3", image: "/images/equips/aqua-letter.png", name: "Aqua Letter Eye Decoration" }]
			}
		},
		effects: { 
			common: {
				1: [{ statId: "str", statName: "STR", val: 40 }],
				2: [{ statId: "int", statName: "INT", val: 40 }]
			}
		}
	}
}

module.exports = allSetEffects;