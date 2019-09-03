var allSetEffects = {
	acs: {
		items: {
			hat: {
				warrior: "Arcaneshade Knight Hat",
				mage: "Arcaneshade Mage Hat",
				archer: "Arcaneshade Archer Hat",
				thief: "Arcaneshade Bandit Hat",
				pirate: "Arcaneshade Pirate Hat"
			}
		},
		effects: {
			1: {
				warrior: "STR +40",
				mage: "INT +40",
				archer: "DEX +40",
				thief: "LUK +40",
				pirate: "STR +20\nDEX +20"	
			}
		}
	},
	abs: {
		items: {
			hat: {
				warrior: "Absolabs Bastion Helm",
				mage: "Absolabs Cabalist Crown",
				archer: "Absolabs Trueshot Hood",
				thief: "Absolabs Shadow Beret",
				pirate: "Absolabs Brigadier Fedora"
			}
		},
		effects: {
			1: {
				warrior: "STR +40",
				mage: "INT +40",
				archer: "DEX +40",
				thief: "LUK +40",
				pirate: "STR +20\nDEX +20"	
			}
		}
	},
	hardBossAcc: {
		items: {
			face: {
				all: "Loose Control Machine Mark"
			},
			eye: {
				all: "Magical Eye Patch"
			}
		},
		effects: {
			1: {
				warrior: "STR +40",
				mage: "INT +40",
				archer: "DEX +40",
				thief: "LUK +40",
				pirate: "STR +20\nDEX +20"	
			}
		}
	},
	bossAcc: {
		items: {
			face: {
				all: "Condensed Strength Crystalline"
			},
			eye: {
				all: ["Papulatus Mark", "Black Bean Mark", "Aqua Letter Eye Decoration"]
			}
		},
		effects: {
			1: {
				warrior: "STR +40",
				mage: "INT +40",
				archer: "DEX +40",
				thief: "LUK +40",
				pirate: "STR +20\nDEX +20"	
			}
		}
	}
}

module.exports = allSetEffects;