var thiefSetEffects = {
	acs: {
		title: "Arcaneshade Set",
		items: {
			hat: [{ id: "acs-thief-hat", image: "/images/equips/acs-bandit-hat.png", name: "Arcaneshade Bandit Hat" }],
			overall: [{ id: "", image: "", name: "" }],
			shoes: [{ id: "", image: "", name: "" }],
			gloves: [{ id: "", image: "", name: "" }],
			cape: [{ id: "", image: "", name: "" }], 
			shoulder: [{ id: "", image: "", name: "" }],
			weapon: [{ id: "", image: "", name: "" }]
		},
		effects: {
			1: [{ statId: "luk", statName: "LUK", val: 40 }],
			2: [{ statId: "luk", statName: "LUK", val: 80 }]
		}
	},
	abs: {
		title: "Absolabs Set",
		items: {
			hat: [{ id: "abs-thief-hat", image: "/images/equips/abs-shadow-beret.png", name: "Absolabs Shadow Beret" }],
			overall: [{ id: "", image: "", name: "" }],
			shoes: [{ id: "", image: "", name: "" }],
			gloves: [{ id: "", image: "", name: "" }],
			cape: [{ id: "", image: "", name: "" }], 
			shoulder: [{ id: "", image: "", name: "" }],
			weapon: [{ id: "", image: "", name: "" }]
		},
		effects: {
			1: [{ statId: "luk", statName: "LUK", val: 40 }],
			2: [{ statId: "luk", statName: "LUK", val: 80 }]
		}
	}
};

module.exports = thiefSetEffects;