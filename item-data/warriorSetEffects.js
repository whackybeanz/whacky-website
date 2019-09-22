var warriorSetEffects = {
	acs: {
		title: "Arcaneshade Set",
		items: {
			hat: [{ id: "acs-warrior-hat", image: "/images/equips/hat/acs-knight-hat.png", name: "Arcaneshade Knight Hat" }],
			overall: [{ id: "acs-knight-suit", image: "/images/equips/overall/acs-knight-suit.png", name: "Arcaneshade Knight Suit" }],
			shoes: [{ id: "acs-warrior-shoes", image: "/images/equips/shoes/acs-shoes.png", name: "Arcaneshade Knight Shoes" }],
			gloves: [{ id: "acs-warrior-glove", image: "/images/equips/gloves/acs-glove.png", name: "Arcaneshade Knight Mitts" }],
			cape: [{ id: "acs-warrior-cape", image: "/images/equips/cape/acs-cape.png", name: "Arcaneshade Knight Cape" }], 
			shoulder: [{ id: "acs-warrior-shoulder", image: "/images/equips/shoulder/acs-shoulder.png", name: "Arcaneshade Knight Shoulder" }],
			weapon: [{ id: "acs-saber", image: "/images/equips/weapon/acs-saber.png", name: "Arcaneshade Saber" },
					{ id: "acs-2h-sword", image: "/images/equips/weapon/acs-2h-sword.png", name: "Arcaneshade 2-Handed Sword" },
					{ id: "acs-axe", image: "/images/equips/weapon/acs-axe.png", name: "Arcaneshade Axe" },
					{ id: "acs-2h-axe", image: "/images/equips/weapon/acs-2h-axe.png", name: "Arcaneshade 2-Handed Axe" },
					{ id: "acs-hammer", image: "/images/equips/weapon/acs-hammer.png", name: "Arcaneshade Hammer" },
					{ id: "acs-2h-hammer", image: "/images/equips/weapon/acs-2h-hammer.png", name: "Arcaneshade 2-Handed Hammer" },
					{ id: "acs-spear", image: "/images/equips/weapon/acs-spear.png", name: "Arcaneshade Spear" },
					{ id: "acs-polearm", image: "/images/equips/weapon/acs-polearm.png", name: "Arcaneshade Polearm" },
					{ id: "acs-desperado", image: "/images/equips/weapon/acs-desperado.png", name: "Arcaneshade Desperado" },
					{ id: "acs-elaha", image: "/images/equips/weapon/acs-elaha.png", name: "Arcaneshade Elaha" },
					{ id: "acs-lapis", image: "/images/equips/weapon/acs-lapis.png", name: "Lapis Type 9" },
					{ id: "acs-katana", image: "/images/equips/weapon/acs-katana.png", name: "Arcaneshade Katana" }]
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
			hat: [{ id: "abs-warrior-hat", image: "/images/equips/hat/abs-bastion-helm.png", name: "Absolabs Bastion Helm" }],
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

module.exports = warriorSetEffects;