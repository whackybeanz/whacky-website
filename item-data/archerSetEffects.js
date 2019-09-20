var archerSetEffects = {
	acs: {
		title: "Arcaneshade Set",
		items: {
			hat: [{ id: "acs-archer-hat", image: "/images/equips/hat/acs-archer-hat.png", name: "Arcaneshade Archer Hat" }],
			top: [{ id: "acs-archer-suit", image: "/images/equips/top/acs-archer-suit.png", name: "Arcaneshade Archer Suit" }],
			shoes: [{ id: "acs-archer-shoes", image: "/images/equips/shoes/acs-archer-shoes.png", name: "Arcaneshade Archer Shoes" }],
			gloves: [{ id: "acs-archer-glove", image: "/images/equips/gloves/acs-archer-glove.png", name: "Arcaneshade Archer Mitts" }],
			cape: [{ id: "acs-archer-cape", image: "/images/equips/cape/acs-archer-cape.png", name: "Arcaneshade Archer Cape" }], 
			shoulder: [{ id: "acs-archer-shoulder", image: "/images/equips/shoulder/acs-archer-shoulder.png", name: "Arcaneshade Archer Shoulder" }],
			weapon: [{ id: "acs-abow", image: "/images/equips/weapon/acs-archer-abow.png", name: "Arcaneshade Ancient Bow" },
					{ id: "acs-bow", image: "/images/equips/weapon/acs-archer-bow.png", name: "Arcaneshade Bow" },
					{ id: "acs-dbg", image: "/images/equips/weapon/acs-archer-dbg.png", name: "Arcaneshade Dual Bowguns" },
					{ id: "acs-xbow", image: "/images/equips/weapon/acs-archer-xbow.png", name: "Arcaneshade Crossbow" }]
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
			hat: [{ id: "abs-archer-hat", image: "/images/equips/hat/abs-trueshot-hood.png", name: "Absolabs Trueshot Hood" }],
			top: [{ id: "", image: "", name: "" }],
			shoes: [{ id: "", image: "", name: "" }],
			gloves: [{ id: "", image: "", name: "" }],
			cape: [{ id: "", image: "", name: "" }], 
			shoulder: [{ id: "", image: "", name: "" }],
			weapon: [{ id: "", image: "", name: "" }]
		},
		effects: {
			1: [{ statId: "dex", statName: "DEX", val: 40 }],
			2: [{ statId: "dex", statName: "DEX", val: 80 }]
		}
	},
	faf: {
		title: "Root Abyss Set",
		items: {
			hat: [{ id: "faf-archer-hat", image: "/images/equips/hat/faf-archer-hat.png", name: "Highness Ranger Beret" }],
			top: [{ id: "faf-archer-top", image: "/images/equips/top/faf-archer-top.png", name: "Eagle Eye Ranger Hood" }],
			bottom: [{ id: "faf-archer-bottom", image: "/images/equips/bottom/faf-archer-bottom.png", name: "Trickster Ranger Pants" }],
			weapon: [{ id: "faf-archer-abow", image: "/images/equips/weapon/faf-archer-abow.png", name: "Fafnir Ancient Bow" },
					{ id: "faf-archer-bow", image: "/images/equips/weapon/faf-archer-bow.png", name: "Fafnir Bow" },
					{ id: "faf-archer-dbg", image: "/images/equips/weapon/faf-archer-dbg.png", name: "Fafnir Dual Bowguns" },
					{ id: "faf-archer-xbow", image: "/images/equips/weapon/faf-archer-xbow.png", name: "Fafnir Crossbow" }],
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