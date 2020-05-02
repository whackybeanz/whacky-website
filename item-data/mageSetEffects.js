var mageSetEffects = {
	acs: {
		title: "Arcaneshade Set",
		items: {
			hat: [{ id: "acs-mage-hat", image: "./public/images/equips/hat/acs-mage-hat.png", name: "Arcaneshade Mage Hat" }],
			top: [{ id: "acs-mage-suit", image: "./public/images/equips/overall/acs-mage-suit.png", name: "Arcaneshade Mage Suit" }],
			shoes: [{ id: "acs-mage-shoes", image: "./public/images/equips/shoes/acs-shoes.png", name: "Arcaneshade Mage Shoes" }],
			gloves: [{ id: "acs-mage-glove", image: "./public/images/equips/gloves/acs-glove.png", name: "Arcaneshade Mage Mitts" }],
			cape: [{ id: "acs-mage-cape", image: "./public/images/equips/cape/acs-cape.png", name: "Arcaneshade Mage Cape" }], 
			shoulder: [{ id: "acs-mage-shoulder", image: "./public/images/equips/shoulder/acs-shoulder.png", name: "Arcaneshade Mage Shoulder" }],
			weapon: [{ id: "acs-staff", image: "./public/images/equips/weapon/acs-staff.png", name: "Arcaneshade Staff" },
					{ id: "acs-wand", image: "./public/images/equips/weapon/acs-wand.png", name: "Arcaneshade Wand" },
					{ id: "acs-shining-rod", image: "./public/images/equips/weapon/acs-shining-rod.png", name: "Arcaneshade Shining Rod" },
					{ id: "acs-psy-limiter", image: "./public/images/equips/weapon/acs-psy-limiter.png", name: "Arcaneshade Psy-Limiter" },
					{ id: "acs-magic-gauntlet", image: "./public/images/equips/weapon/acs-magic-gauntlet.png", name: "Arcaneshade Magic Gauntlet" },
					{ id: "acs-fan", image: "./public/images/equips/weapon/acs-fan.png", name: "Arcaneshade Fan" }]
		},
		effects: {
			2: [{ statId: "wama", statName: "ATT/MATT", val: "30" }, 
				{ statId: "maxHpMp", statName: "Max HP/MP", val: "2000" }],
			3: [{ statId: "wama", statName: "ATT/MATT", val: "35" }, 
				{ statId: "allStats", statName: "All Stats", val: "50" }],
			4: [{ statId: "wama", statName: "ATT/MATT", val: "40" }, 
				{ statId: "iedPercent", statName: "Ignore Enemy DEF %", val: "10", symbol: "%" }, 
				{ statId: "def", statName: "DEF", val: "400" }],
			5: [{ statId: "wama", statName: "ATT/MATT", val: "30" }, 
				{ statId: "bossPercent", statName: "Boss Damage %", val: "30", symbol: "%" }],
			6: [{ statId: "wama", statName: "ATT/MATT", val: "30" }, 
				{ statId: "maxHpMpPercent", statName: "Max HP/MP %", val: "30", symbol: "%" }],
			7: [{ statId: "wama", statName: "ATT/MATT", val: "30" }, 
				{ statId: "iedPercent", statName: "Ignore Enemy DEF %", val: "10", symbol: "%" }],
		}
	},
	abs: {
		title: "Absolabs Set",
		items: {
			hat: [{ id: "abs-mage-hat", image: "./public/images/equips/hat/abs-cabalist-crown.png", name: "Absolabs Cabalist Crown" }],
			top: [{ id: "abs-mage-overall", image: "./public/images/equips/overall/abs-mage-overall.png", name: "Absolabs Cabalist Gown" }],
			shoes: [{ id: "abs-mage-shoes", image: "./public/images/equips/shoes/abs-shoes.png", name: "Absolabs Cabalist Shoes" }],
			gloves: [{ id: "abs-mage-glove", image: "./public/images/equips/gloves/abs-glove.png", name: "Absolabs Cabalist Gloves" }],
			cape: [{ id: "abs-mage-cape", image: "./public/images/equips/cape/abs-cape.png", name: "Absolabs Cabalist Cloak" }], 
			shoulder: [{ id: "abs-mage-shoulder", image: "./public/images/equips/shoulder/abs-shoulder.png", name: "Absolabs Cabalist Pauldron" }],
			weapon: [{ id: "abs-staff", image: "./public/images/equips/weapon/abs-staff.png", name: "Absolabs Sage Staff" },
					{ id: "abs-wand", image: "./public/images/equips/weapon/abs-wand.png", name: "Absolabs Force Wand" },
					{ id: "abs-shining-rod", image: "./public/images/equips/weapon/abs-shining-rod.png", name: "Absolabs Aether Rod" },
					{ id: "abs-psy-limiter", image: "./public/images/equips/weapon/abs-psy-limiter.png", name: "Absolabs Psy-Limiter" },
					{ id: "abs-magic-gauntlet", image: "./public/images/equips/weapon/abs-magic-gauntlet.png", name: "Absolabs Magic Gauntlet" },
					{ id: "abs-fan", image: "./public/images/equips/weapon/abs-fan.png", name: "Absolabs Incarnadine" }]
		},
		effects: {
			2: [{ statId: "wama", statName: "ATT/MATT", val: "20" }, 
				{ statId: "maxHpMp", statName: "Max HP/MP", val: "1500" }],
			3: [{ statId: "wama", statName: "ATT/MATT", val: "25" }, 
				{ statId: "allStats", statName: "All Stats", val: "30" }],
			4: [{ statId: "wama", statName: "ATT/MATT", val: "30" }, 
				{ statId: "iedPercent", statName: "Ignore Enemy DEF %", val: "10", symbol: "%" }, 
				{ statId: "def", statName: "DEF", val: "200" }],
			5: [{ statId: "wama", statName: "ATT/MATT", val: "20" }, 
				{ statId: "bossPercent", statName: "Boss Damage %", val: "30", symbol: "%" }],
			6: [{ statId: "wama", statName: "ATT/MATT", val: "20" }, 
				{ statId: "maxHpMpPercent", statName: "Max HP/MP %", val: "20", symbol: "%" }],
			7: [{ statId: "wama", statName: "ATT/MATT", val: "20" }, 
				{ statId: "iedPercent", statName: "Ignore Enemy DEF %", val: "10", symbol: "%" }],
		}
	},
	faf: {
		title: "Root Abyss Set",
		items: {
			hat: [{ id: "faf-mage-hat", image: "./public/images/equips/hat/faf-mage-hat.png", name: "Highness Dunwitch Hat" }],
			top: [{ id: "faf-mage-top", image: "./public/images/equips/top/faf-mage-top.png", name: "Eagle Eye Dunwitch Robe" }],
			bottom: [{ id: "faf-mage-bottom", image: "./public/images/equips/bottom/faf-mage-bottom.png", name: "Trickster Dunwitch Pants" }],
			weapon: [{ id: "faf-staff", image: "./public/images/equips/weapon/faf-staff.png", name: "Fafnir Mana Crown" },
					{ id: "faf-wand", image: "./public/images/equips/weapon/faf-wand.png", name: "Fafnir Mana Taker" },
					{ id: "faf-shining-rod", image: "./public/images/equips/weapon/faf-shining-rod.png", name: "Fafnir Mana Cradle" },
					{ id: "faf-psy-limiter", image: "./public/images/equips/weapon/faf-psy-limiter.png", name: "Fafnir Psy-Limiter" },
					{ id: "faf-magic-gauntlet", image: "./public/images/equips/weapon/faf-magic-gauntlet.png", name: "Fafnir Magic Gauntlet" },
					{ id: "faf-fan", image: "./public/images/equips/weapon/faf-fan.png", name: "Fafnir Indigo Flash" }],
		},
		effects: {
			2: [{ statId: "int", statName: "INT", val: 20 },
				{ statId: "luk", statName: "LUK", val: 20 },
				{ statId: "maxHpMp", statName: "Max HP/MP", val: 1000 }],
			3: [{ statId: "ma", statName: "MATT", val: 50 },
				{ statId: "maxHpMpPercent", statName: "Max HP/MP %", val: 10, symbol: "%" }],
			4: [{ statId: "bossPercent", statName: "Boss Damage %", val: 30, symbol: "%" }],
		}
	}
};

module.exports = mageSetEffects;