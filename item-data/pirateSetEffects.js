var pirateSetEffects = {
	acs: {
		title: "Arcaneshade Set",
		items: {
			hat: [{ id: "acs-pirate-hat", image: "/images/equips/hat/acs-pirate-hat.png", name: "Arcaneshade Pirate Hat" }],
			overall: [{ id: "acs-pirate-suit", image: "/images/equips/overall/acs-pirate-suit.png", name: "Arcaneshade Pirate Suit" }],
			shoes: [{ id: "acs-pirate-shoes", image: "/images/equips/shoes/acs-shoes.png", name: "Arcaneshade Pirate Shoes" }],
			gloves: [{ id: "acs-pirate-glove", image: "/images/equips/gloves/acs-glove.png", name: "Arcaneshade Pirate Mitts" }],
			cape: [{ id: "acs-pirate-cape", image: "/images/equips/cape/acs-cape.png", name: "Arcaneshade Pirate Cape" }], 
			shoulder: [{ id: "acs-pirate-shoulder", image: "/images/equips/shoulder/acs-shoulder.png", name: "Arcaneshade Pirate Shoulder" }],
			weapon: [{ id: "acs-guards", image: "/images/equips/weapon/acs-guards.png", name: "Arcaneshade Guards" },
					{ id: "acs-pistol", image: "/images/equips/weapon/acs-pistol.png", name: "Arcaneshade Pistol" },
					{ id: "acs-energy-sword", image: "/images/equips/weapon/acs-energy-sword.png", name: "Arcaneshade Energy Sword" },
					{ id: "acs-siege-gun", image: "/images/equips/weapon/acs-siege-gun.png", name: "Arcaneshade Siege Gun" },
					{ id: "acs-soul-shooter", image: "/images/equips/weapon/acs-soul-shooter.png", name: "Arcaneshade Soul Shooter" }]
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
			hat: [{ id: "abs-pirate-hat", image: "/images/equips/hat/abs-brigadier-fedora.png", name: "Absolabs Brigadier Fedora" }],
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
			2: [{ statId: "str", statName: "STR", val: 20 },
				{ statId: "dex", statName: "DEX", val: 20 },
				{ statId: "maxHpMp", statName: "Max HP/MP", val: 1000 }],
			3: [{ statId: "wa", statName: "ATT", val: 50 },
				{ statId: "maxHpMpPercent", statName: "Max HP/MP %", val: 10, symbol: "%" }],
			4: [{ statId: "bossPercent", statName: "Boss Damage %", val: 30, symbol: "%" }],
		}
	}
};

module.exports = pirateSetEffects;