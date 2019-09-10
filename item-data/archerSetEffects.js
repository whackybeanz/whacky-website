var archerSetEffects = {
	acs: {
		title: "Arcaneshade Set",
		items: {
			hat: [{ id: "acs-archer-hat", image: "/images/equips/acs-archer-hat.png", name: "Arcaneshade Archer Hat" }],
			overall: [{ id: "acs-archer-suit", image: "", name: "Arcaneshade Archer Suit" }],
			shoes: [{ id: "acs-archer-shoes", image: "", name: "Arcaneshade Archer Shoes" }],
			gloves: [{ id: "acs-archer-mitts", image: "", name: "Arcaneshade Archer Mitts" }],
			cape: [{ id: "acs-archer-cape", image: "", name: "Arcaneshade Archer Cape" }], 
			shoulder: [{ id: "acs-archer-shoulder", image: "", name: "Arcaneshade Archer Shoulder" }],
			weapon: [{ id: "acs-archer-weapon", image: "", name: "Arcaneshade Archer Weapon" }]
		},
		effects: {
			1: [{ statId: "wama", statName: "ATT/MATT", val: "30" }, 
				{ statId: "maxHpMp", statName: "Max HP/MP", val: "2000" }],
			2: [{ statId: "wama", statName: "ATT/MATT", val: "35" }, 
				{ statId: "allStats", statName: "All Stats", val: "50" }],
			3: [{ statId: "wama", statName: "ATT/MATT", val: "40" }, 
				{ statId: "iedPercent", statName: "Ignore Enemy DEF %", val: "10", symbol: "%" }, 
				{ statId: "def", statName: "DEF", val: "400" }],
			4: [{ statId: "wama", statName: "ATT/MATT", val: "30" }, 
				{ statId: "bossPercent", statName: "Boss Damage %", val: "30", symbol: "%" }],
			5: [{ statId: "wama", statName: "ATT/MATT", val: "30" }, 
				{ statId: "maxHpMpPercent", statName: "Max HP/MP %", val: "30", symbol: "%" }],
			6: [{ statId: "wama", statName: "ATT/MATT", val: "30" }, 
				{ statId: "iedPercent", statName: "Ignore Enemy DEF %", val: "10", symbol: "%" }],
		}
	},
	abs: {
		title: "Absolabs Set",
		items: {
			hat: [{ id: "abs-archer-hat", image: "/images/equips/abs-trueshot-hood.png", name: "Absolabs Trueshot Hood" }],
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