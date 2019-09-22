var mageSetEffects = {
	acs: {
		title: "Arcaneshade Set",
		items: {
			hat: [{ id: "acs-mage-hat", image: "/images/equips/hat/acs-mage-hat.png", name: "Arcaneshade Mage Hat" }],
			overall: [{ id: "acs-mage-suit", image: "/images/equips/overall/acs-mage-suit.png", name: "Arcaneshade Mage Suit" }],
			shoes: [{ id: "acs-mage-shoes", image: "/images/equips/shoes/acs-shoes.png", name: "Arcaneshade Mage Shoes" }],
			gloves: [{ id: "acs-mage-glove", image: "/images/equips/gloves/acs-glove.png", name: "Arcaneshade Mage Mitts" }],
			cape: [{ id: "acs-mage-cape", image: "/images/equips/cape/acs-cape.png", name: "Arcaneshade Mage Cape" }], 
			shoulder: [{ id: "acs-mage-shoulder", image: "/images/equips/shoulder/acs-shoulder.png", name: "Arcaneshade Mage Shoulder" }],
			weapon: [{ id: "acs-staff", image: "/images/equips/weapon/acs-staff.png", name: "Arcaneshade Staff" },
					{ id: "acs-wand", image: "/images/equips/weapon/acs-wand.png", name: "Arcaneshade Wand" },
					{ id: "acs-shining-rod", image: "/images/equips/weapon/acs-shining-rod.png", name: "Arcaneshade Shining Rod" },
					{ id: "acs-psy-limiter", image: "/images/equips/weapon/acs-psy-limiter.png", name: "Arcaneshade Psy-Limiter" },
					{ id: "acs-magic-gauntlet", image: "/images/equips/weapon/acs-magic-gauntlet.png", name: "Arcaneshade Magic Gauntlet" },
					{ id: "acs-fan", image: "/images/equips/weapon/acs-fan.png", name: "Arcaneshade Fan" }]
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
			hat: [{ id: "abs-mage-hat", image: "/images/equips/hat/abs-cabalist-crown.png", name: "Absolabs Cabalist Crown" }],
			overall: [{ id: "", image: "", name: "" }],
			shoes: [{ id: "", image: "", name: "" }],
			gloves: [{ id: "", image: "", name: "" }],
			cape: [{ id: "", image: "", name: "" }], 
			shoulder: [{ id: "", image: "", name: "" }],
			weapon: [{ id: "", image: "", name: "" }]
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
			hat: [{ id: "", image: "", name: "" }],
			top: [{ id: "", image: "", name: "" }],
			bottom: [{ id: "", image: "", name: "" }],
			weapon: [{ id: "", image: "", name: "" }],
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