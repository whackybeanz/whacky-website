var thiefSetEffects = {
	acs: {
		title: "Arcaneshade Set",
		items: {
			hat: [{ id: "acs-thief-hat", image: "/images/equips/hat/acs-bandit-hat.png", name: "Arcaneshade Bandit Hat" }],
			top: [{ id: "acs-bandit-suit", image: "/images/equips/overall/acs-bandit-suit.png", name: "Arcaneshade Bandit Suit" }],
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
			top: [{ id: "abs-thief-overall", image: "/images/equips/overall/abs-thief-overall.png", name: "Absolabs Shadow Suit" }],
			shoes: [{ id: "abs-thief-shoes", image: "/images/equips/shoes/abs-shoes.png", name: "Absolabs Shadow Boots" }],
			gloves: [{ id: "abs-thief-glove", image: "/images/equips/gloves/abs-glove.png", name: "Absolabs Shadow Vambracers" }],
			cape: [{ id: "abs-thief-cape", image: "/images/equips/cape/abs-cape.png", name: "Absolabs Shadow Cloak" }], 
			shoulder: [{ id: "abs-thief-shoulder", image: "/images/equips/shoulder/abs-shoulder.png", name: "Absolabs Shadow Pauldron" }],
			weapon: [{ id: "abs-dagger", image: "/images/equips/weapon/abs-dagger.png", name: "Absolabs Shredder" },
					{ id: "abs-cane", image: "/images/equips/weapon/abs-cane.png", name: "Absolabs Sceptre" },
					{ id: "abs-claw", image: "/images/equips/weapon/abs-claw.png", name: "Absolabs Tarantula" },
					{ id: "abs-energy-sword", image: "/images/equips/weapon/abs-energy-sword.png", name: "Absolabs Electro Saber" },
					{ id: "abs-energy-chain", image: "/images/equips/weapon/abs-energy-chain.png", name: "Absolabs Energy Chain" }]
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
			hat: [{ id: "faf-thief-hat", image: "/images/equips/hat/faf-thief-hat.png", name: "Highness Assassin Bonnet" }],
			top: [{ id: "faf-thief-top", image: "/images/equips/top/faf-thief-top.png", name: "Eagle Eye Assassin Shirt" }],
			bottom: [{ id: "faf-thief-bottom", image: "/images/equips/bottom/faf-thief-bottom.png", name: "Trickster Assassin Pants" }],
			weapon: [{ id: "faf-dagger", image: "/images/equips/weapon/faf-dagger.png", name: "Fafnir Damascus" },
					{ id: "faf-cane", image: "/images/equips/weapon/faf-cane.png", name: "Fafnir Clair Ciel" },
					{ id: "faf-claw", image: "/images/equips/weapon/faf-claw.png", name: "Fafnir Risk Holder" },
					{ id: "faf-energy-sword", image: "/images/equips/weapon/faf-energy-sword.png", name: "Fafnir Split Edge" },
					{ id: "faf-energy-chain", image: "/images/equips/weapon/faf-energy-chain.png", name: "Fafnir Energy Chain" }],
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