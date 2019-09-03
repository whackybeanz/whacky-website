var allSetEffects = {
	acs: {
		title: "Arcaneshade Set",
		items: {
			hat: {
				warrior: [{ id: "acs-warrior-hat", image: "/images/equips/acs-knight-hat.png", name: "Arcaneshade Knight Hat" }],
				mage: [{ id: "acs-mage-hat", image: "/images/equips/acs-mage-hat.png", name: "Arcaneshade Mage Hat" }],
				archer: [{ id: "acs-archer-hat", image: "/images/equips/acs-archer-hat.png", name: "Arcaneshade Archer Hat" }],
				thief: [{ id: "acs-thief-hat", image: "/images/equips/acs-bandit-hat.png", name: "Arcaneshade Bandit Hat" }],
				pirate: [{ id: "acs-pirate-hat", image: "/images/equips/acs-pirate-hat.png", name: "Arcaneshade Pirate Hat" }],
			}
		},
		effects: { 
			warrior: {
				1: "STR +40" 
			},
			mage: {
				1: "INT +40"
			},
			archer: {
				1: "DEX +40"
			},
			thief: {
				1: "LUK +40"
			},
			pirate: {
				1: "STR +20\nDEX +20"
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
				1: "STR +40" 
			},
			mage: {
				1: "INT +40"
			},
			archer: {
				1: "DEX +40"
			},
			thief: {
				1: "LUK +40"
			},
			pirate: {
				1: "STR +20\nDEX +20"
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
				1: "STR +40",
				2: "INT +40" 
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
				1: "STR +40", 
				2: "INT +40"
			}
		}
	}
}

module.exports = allSetEffects;