var pirateSetEffects = {
	acs: {
		title: "Arcaneshade Set",
		items: {
			hat: [{ id: "acs-pirate-hat", image: "/images/equips/hat/acs-pirate-hat.png", name: "Arcaneshade Pirate Hat" }],
			overall: [{ id: "", image: "", name: "" }],
			shoes: [{ id: "", image: "", name: "" }],
			gloves: [{ id: "", image: "", name: "" }],
			cape: [{ id: "", image: "", name: "" }], 
			shoulder: [{ id: "", image: "", name: "" }],
			weapon: [{ id: "", image: "", name: "" }]
		},
		effects: {
			1: [{ statId: "str", statName: "STR", val: 20 }, { statId: "dex", statName: "DEX", val: 20 }],
			2: [{ statId: "str", statName: "STR", val: 40 }, { statId: "dex", statName: "DEX", val: 40 }]
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
			1: [{ statId: "str", statName: "STR", val: 20 },
				{ statId: "dex", statName: "DEX", val: 20 }],
			2: [{ statId: "str", statName: "STR", val: 40 },
				{ statId: "dex", statName: "DEX", val: 40 }]
		}
	}
};

module.exports = pirateSetEffects;