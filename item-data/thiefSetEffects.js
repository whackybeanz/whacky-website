var thiefSetEffects = {
	acs: {
		title: "Arcaneshade Set",
		items: {
			hat: [{ id: "acs-thief-hat", image: "/images/equips/hat/acs-bandit-hat.png", name: "Arcaneshade Bandit Hat" }],
			overall: [{ id: "acs-bandit-suit", image: "/images/equips/overall/acs-bandit-suit.png", name: "Arcaneshade Bandit Suit" }],
			shoes: [{ id: "acs-bandit-shoes", image: "/images/equips/shoes/acs-shoes.png", name: "Arcaneshade Bandit Shoes" }],
			gloves: [{ id: "acs-bandit-glove", image: "/images/equips/gloves/acs-glove.png", name: "Arcaneshade Bandit Mitts" }],
			cape: [{ id: "acs-bandit-cape", image: "/images/equips/cape/acs-cape.png", name: "Arcaneshade Bandit Cape" }], 
			shoulder: [{ id: "acs-bandit-shoulder", image: "/images/equips/shoulder/acs-shoulder.png", name: "Arcaneshade Bandit Shoulder" }],
			weapon: [{ id: "acs-dagger", image: "/images/equips/weapon/acs-dagger.png", name: "Arcaneshade Dagger" },
					{ id: "acs-cane", image: "/images/equips/weapon/acs-cane.png", name: "Arcaneshade Cane" },
					{ id: "acs-baghnakhs", image: "/images/equips/weapon/acs-baghnakhs.png", name: "Arcaneshade Baghnakhs" },
					{ id: "acs-energy-sword", image: "/images/equips/weapon/acs-energy-sword.png", name: "Arcaneshade Energy Sword" },
					{ id: "acs-energy-chain", image: "/images/equips/weapon/acs-energy-chain.png", name: "Arcaneshade Energy Chain" }]
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
			hat: [{ id: "abs-thief-hat", image: "/images/equips/hat/abs-shadow-beret.png", name: "Absolabs Shadow Beret" }],
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
			2: [{ statId: "dex", statName: "DEX", val: 20 },
				{ statId: "luk", statName: "LUK", val: 20 },
				{ statId: "maxHpMp", statName: "Max HP/MP", val: 1000 }],
			3: [{ statId: "wa", statName: "ATT", val: 50 },
				{ statId: "maxHpMpPercent", statName: "Max HP/MP %", val: 10, symbol: "%" }],
			4: [{ statId: "bossPercent", statName: "Boss Damage %", val: 30, symbol: "%" }],
		}
	}
};

module.exports = thiefSetEffects;