var archerSetEffects = {
	acs: {
		title: "Arcaneshade Set",
		items: {
			hat: [{ id: "acs-archer-hat", image: "/images/equips/hat/acs-archer-hat.png", name: "Arcaneshade Archer Hat" }],
			overall: [{ id: "acs-archer-suit", image: "/images/equips/top/acs-archer-suit.png", name: "Arcaneshade Archer Suit" }],
			shoes: [{ id: "acs-archer-shoes", image: "/images/equips/shoes/acs-archer-shoes.png", name: "Arcaneshade Archer Shoes" }],
			gloves: [{ id: "acs-archer-glove", image: "/images/equips/gloves/acs-archer-glove.png", name: "Arcaneshade Archer Mitts" }],
			cape: [{ id: "acs-archer-cape", image: "/images/equips/cape/acs-archer-cape.png", name: "Arcaneshade Archer Cape" }], 
			shoulder: [{ id: "acs-archer-shoulder", image: "/images/equips/shoulder/acs-archer-shoulder.png", name: "Arcaneshade Archer Shoulder" }],
			weapon: [{ id: "acs-bow", image: "/images/equips/weapon/acs-bow.png", name: "Arcaneshade Bow" }]
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
			overall: [{ id: "", image: "", name: "" }],
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
	}
};

module.exports = archerSetEffects;