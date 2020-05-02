var archerSetEffects = {
	acs: {
		title: "Arcaneshade Set",
		items: {
			hat: [{ id: "acs-archer-hat", image: "./public/images/equips/hat/acs-archer-hat.png", name: "Arcaneshade Archer Hat" }],
			top: [{ id: "acs-archer-suit", image: "./public/images/equips/top/acs-archer-suit.png", name: "Arcaneshade Archer Suit" }],
			shoes: [{ id: "acs-archer-shoes", image: "./public/images/equips/shoes/acs-archer-shoes.png", name: "Arcaneshade Archer Shoes" }],
			gloves: [{ id: "acs-archer-glove", image: "./public/images/equips/gloves/acs-archer-glove.png", name: "Arcaneshade Archer Mitts" }],
			cape: [{ id: "acs-archer-cape", image: "./public/images/equips/cape/acs-archer-cape.png", name: "Arcaneshade Archer Cape" }], 
			shoulder: [{ id: "acs-archer-shoulder", image: "./public/images/equips/shoulder/acs-archer-shoulder.png", name: "Arcaneshade Archer Shoulder" }],
			weapon: [{ id: "acs-abow", image: "./public/images/equips/weapon/acs-archer-abow.png", name: "Arcaneshade Ancient Bow" },
					{ id: "acs-bow", image: "./public/images/equips/weapon/acs-archer-bow.png", name: "Arcaneshade Bow" },
					{ id: "acs-dbg", image: "./public/images/equips/weapon/acs-archer-dbg.png", name: "Arcaneshade Dual Bowguns" },
					{ id: "acs-xbow", image: "./public/images/equips/weapon/acs-archer-xbow.png", name: "Arcaneshade Crossbow" }]
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
			hat: [{ id: "abs-archer-hat", image: "./public/images/equips/hat/abs-trueshot-hood.png", name: "Absolabs Trueshot Hood" }],
			top: [{ id: "abs-archer-overall", image: "./public/images/equips/overall/abs-archer-overall.png", name: "Absolabs Trueshot Coat" }],
			shoes: [{ id: "abs-archer-shoes", image: "./public/images/equips/shoes/abs-shoes.png", name: "Absolabs Trueshot Boots" }],
			gloves: [{ id: "abs-archer-glove", image: "./public/images/equips/gloves/abs-glove.png", name: "Absolabs Trueshot Gloves" }],
			cape: [{ id: "abs-archer-cape", image: "./public/images/equips/cape/abs-cape.png", name: "Absolabs Trueshot Cloak" }], 
			shoulder: [{ id: "abs-archer-shoulder", image: "./public/images/equips/shoulder/abs-shoulder.png", name: "Absolabs Trueshot Pauldron" }],
			weapon: [{ id: "abs-abow", image: "./public/images/equips/weapon/abs-abow.png", name: "Absolabs Ancient Bow" },
					{ id: "abs-bow", image: "./public/images/equips/weapon/abs-bow.png", name: "Absolabs Ichaival" },
					{ id: "abs-dbg", image: "./public/images/equips/weapon/abs-dbg.png", name: "Absolabs Twin Astras" },
					{ id: "abs-xbow", image: "./public/images/equips/weapon/abs-xbow.png", name: "Absolabs Astra Wing" }]
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
			hat: [{ id: "faf-archer-hat", image: "./public/images/equips/hat/faf-archer-hat.png", name: "Highness Ranger Beret" }],
			top: [{ id: "faf-archer-top", image: "./public/images/equips/top/faf-archer-top.png", name: "Eagle Eye Ranger Hood" }],
			bottom: [{ id: "faf-archer-bottom", image: "./public/images/equips/bottom/faf-archer-bottom.png", name: "Trickster Ranger Pants" }],
			weapon: [{ id: "faf-abow", image: "./public/images/equips/weapon/faf-archer-abow.png", name: "Fafnir Ancient Bow" },
					{ id: "faf-bow", image: "./public/images/equips/weapon/faf-archer-bow.png", name: "Fafnir Bow" },
					{ id: "faf-dbg", image: "./public/images/equips/weapon/faf-archer-dbg.png", name: "Fafnir Dual Bowguns" },
					{ id: "faf-xbow", image: "./public/images/equips/weapon/faf-archer-xbow.png", name: "Fafnir Crossbow" }],
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

module.exports = archerSetEffects;