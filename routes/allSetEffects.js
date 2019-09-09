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
				1: [{ statId: "wama", statName: "ATT/MATT", val: "30" }, 
					{ statId: "maxHpMp", statName: "Max HP/MP", val: "2000" }],
				2: [{ statId: "wama", statName: "ATT/MATT", val: "35" }, 
					{ statId: "allStats", statName: "All Stats", val: "50" }],
				3: [{ statId: "wama", statName: "ATT/MATT", val: "40" }, 
					{ statId: "iedPercent", statName: "Ignore Enemy DEF %", val: "10", symbol: "%" }, 
					{ statId: "def", statName: "DEF", val: "400" }],
				4: [{ statId: "wama", statName: "ATT/MATT", val: "30" }, 
					{ statId: "bossPercent", statName: "Boss Damage %", val: "30", symbol: "%" }],
				5: [{ statId: "wama", statName: "ATT/MATT", val: "30" }, 
					{ statId: "maxHpMpPercent", statName: "Max HP/MP %", val: "30", symbol: "%" }],
				6: [{ statId: "wama", statName: "ATT/MATT", val: "30" }, 
					{ statId: "iedPercent", statName: "Ignore Enemy DEF %", val: "10", symbol: "%" }],
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
			},
			heart: {
				common: [{ id: "black-heart", image: "", name: "Black Heart" }]
			},
			belt: {
				common: [{ id: "fantasy-belt", image: "", name: "Fantasy Belt" }]
			},
			pendant: {
				common: [{ id: "hilla-pendant", image: "", name: "Source of Pain" }]
			},
			pocket: {
				common: [{ id: "will-book-red", image: "", name: "Cursed Enemy Magic Book" },
						{ id: "will-book-yellow", image: "", name: "Cursed Yellow Magic Book" },
						{ id: "will-book-green", image: "", name: "Cursed Green Magic Book" },
						{ id: "will-book-blue", image: "", name: "Cursed Blue Magic Book" }]
			},
			badge: {
				common: [{ id: "genesis-badge", image: "", name: "Genesis Badge" }]
			}
		},
		effects: { 
			common: {
				1: [{ statId: "wama", statName: "ATT/MATT", val: "10" }, 
					{ statId: "bossPercent", statName: "Boss Damage %", val: "10", symbol: "%" }, 
					{ statId: "maxHp", statName: "Max HP", val: "250" }, 
					{ statId: "allStats", statName: "All Stats", val: "10" }],
				2: [{ statId: "wama", statName: "ATT/MATT", val: "10" }, 
					{ statId: "iedPercent", statName: "Ignore Enemy DEF %", val: "10", symbol: "%" }, 
					{ statId: "maxHp", statName: "Max HP", val: "250" }, 
					{ statId: "allStats", statName: "All Stats", val: "10" },
					{ statId: "def", statName: "DEF", val: "250" }],
				3: [{ statId: "wama", statName: "ATT/MATT", val: "15" }, 
					{ statId: "critDmgPercent", statName: "Critical Damage %", val: "5", symbol: "%" }, 
					{ statId: "maxHp", statName: "Max HP", val: "375" }, 
					{ statId: "allStats", statName: "All Stats", val: "15" }],
				4: [{ statId: "wama", statName: "ATT/MATT", val: "15" }, 
					{ statId: "bossPercent", statName: "Boss Damage %", val: "10", symbol: "%" },  
					{ statId: "maxHp", statName: "Max HP", val: "375" }, 
					{ statId: "allStats", statName: "All Stats", val: "15" }],
			}
		}
	},
	bossAcc: {
		title: "Boss Accessory Set",
		items: {
			face: {
				common: [{ id: "condense-crystal", image: "/images/equips/condensed-crystal.png", name: "Condensed Strength Crystalline" }],
			},
			eye: {
				common: [{ id: "bbm", image: "/images/equips/black-bean-mark.png", name: "Black Bean Mark" },
						{ id: "aqua-eye", image: "/images/equips/aqua-letter.png", name: "Aqua Letter Eye Decoration" }]
			},
			earring: {
				common: [{ id: "will-o-wisp", image: "", name: "Will o' the Wisps" },
						{ id: "dea-sidus", image: "", name: "Dea Sidus Earrings" }]
			},
			ring: {
				common: [{ id: "sbr", image: "", name: "Silver Blossom Ring" },
						{ id: "ifia-ring", image: "", name: "Elegant Ifia's Ring" }]
			},
			belt: {
				common: [{ id: "zakum-belt", image: "", name: "Angry Zakum's Belt" },
						{ id: "clover-belt", image: "", name: "Golden Clover Belt" }],
			},
			pendant: {
				common: [{ id: "ht-pendant", image: "", name: "Horned Tail Necklace" },
						{ id: "cht-pendant", image: "", name: "Chaos Horntail Necklace" },
						{ id: "mach-pendant", image: "", name: "Machinator Necklace" },
						{ id: "dom-pendant", image: "", name: "Dominator Necklace" }]
			},
			shoulder: {
				common: [{ id: "magnus-shoulder", image: "", name: "Royal Black Metal Shoulder" }]
			},
			pocket: {
				common: [{ id: "phg", image: "", name: "Pink Holy Grail" },
						{ id: "hilla-stone", image: "", name: "Stone of Eternal Life" }],
			},
			badge: {
				common: [{ id: "ventus-badge", image: "", name: "Crystal Ventus Badge" }],
			}
		},
		effects: { 
			common: {
				1: [{ statId: "wama", statName: "ATT/MATT", val: "5" }, 
					{ statId: "maxHpMpPercent", statName: "Max HP/MP %", val: "5", symbol: "%" }, 
					{ statId: "allStats", statName: "All Stats", val: "10" }],
				2: [{ statId: "wama", statName: "ATT/MATT", val: "5" },
					{ statId: "maxHpMpPercent", statName: "Max HP/MP %", val: "5", symbol: "%" }, 
					{ statId: "allStats", statName: "All Stats", val: "10" }],
				3: [{ statId: "wama", statName: "ATT/MATT", val: "10" }, 
					{ statId: "iedPercent", statName: "Ignore Enemy DEF %", val: "10", symbol: "%" }, 
					{ statId: "allStats", statName: "All Stats", val: "10" },
					{ statId: "def", statName: "DEF", val: "80" }],
				4: [{ statId: "wama", statName: "ATT/MATT", val: "10" }, 
					{ statId: "bossPercent", statName: "Boss Damage %", val: "10", symbol: "%" }, 
					{ statId: "allStats", statName: "All Stats", val: "15" },
					{ statId: "def", statName: "DEF", val: "100" }],
			}
		}
	}
}

module.exports = allSetEffects;