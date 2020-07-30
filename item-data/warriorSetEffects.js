var warriorSetEffects = {
	acs: {
		title: "Arcaneshade Set",
		items: {
			hat: [{ id: "acs-warrior-hat", image: "./public/images/equips/hat/acs-knight-hat.png", name: "Arcaneshade Knight Hat" }],
			top: [{ id: "acs-knight-suit", image: "./public/images/equips/overall/acs-knight-suit.png", name: "Arcaneshade Knight Suit" }],
			shoes: [{ id: "acs-warrior-shoes", image: "./public/images/equips/shoes/acs-shoes.png", name: "Arcaneshade Knight Shoes" }],
			gloves: [{ id: "acs-warrior-glove", image: "./public/images/equips/gloves/acs-glove.png", name: "Arcaneshade Knight Mitts" }],
			cape: [{ id: "acs-warrior-cape", image: "./public/images/equips/cape/acs-cape.png", name: "Arcaneshade Knight Cape" }], 
			shoulder: [{ id: "acs-warrior-shoulder", image: "./public/images/equips/shoulder/acs-shoulder.png", name: "Arcaneshade Knight Shoulder" }],
			weapon: [{ id: "acs-1h-sword", image: "./public/images/equips/weapon/acs-saber.png", name: "Arcaneshade Saber" },
					{ id: "acs-2h-sword", image: "./public/images/equips/weapon/acs-2h-sword.png", name: "Arcaneshade 2-Handed Sword" },
					{ id: "acs-axe", image: "./public/images/equips/weapon/acs-axe.png", name: "Arcaneshade Axe" },
					{ id: "acs-2h-axe", image: "./public/images/equips/weapon/acs-2h-axe.png", name: "Arcaneshade 2-Handed Axe" },
					{ id: "acs-hammer", image: "./public/images/equips/weapon/acs-hammer.png", name: "Arcaneshade Hammer" },
					{ id: "acs-2h-hammer", image: "./public/images/equips/weapon/acs-2h-hammer.png", name: "Arcaneshade 2-Handed Hammer" },
					{ id: "acs-spear", image: "./public/images/equips/weapon/acs-spear.png", name: "Arcaneshade Spear" },
					{ id: "acs-polearm", image: "./public/images/equips/weapon/acs-polearm.png", name: "Arcaneshade Polearm" },
					{ id: "acs-desperado", image: "./public/images/equips/weapon/acs-desperado.png", name: "Arcaneshade Desperado" },
					{ id: "acs-elaha", image: "./public/images/equips/weapon/acs-elaha.png", name: "Arcaneshade Elaha" },
					{ id: "acs-lapis", image: "./public/images/equips/weapon/acs-lapis.png", name: "Lapis Type 9" },
					{ id: "acs-katana", image: "./public/images/equips/weapon/acs-katana.png", name: "Arcaneshade Katana" },
					{ id: "acs-tuner", image: "./public/images/equips/weapon/acs-tuner.png", name: "Arcaneshade Tuner" }]
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
			hat: [{ id: "abs-warrior-hat", image: "./public/images/equips/hat/abs-bastion-helm.png", name: "Absolabs Bastion Helm" }],
			top: [{ id: "abs-warrior-overall", image: "./public/images/equips/overall/abs-warrior-overall.png", name: "Absolabs Bastion Hauberk" }],
			shoes: [{ id: "abs-warrior-shoes", image: "./public/images/equips/shoes/abs-shoes.png", name: "Absolabs Bastion Greaves" }],
			gloves: [{ id: "abs-warrior-glove", image: "./public/images/equips/gloves/abs-glove.png", name: "Absolabs Bastion Gauntlets" }],
			cape: [{ id: "abs-warrior-cape", image: "./public/images/equips/cape/abs-cape.png", name: "Absolabs Bastion Cloak" }], 
			shoulder: [{ id: "abs-warrior-shoulder", image: "./public/images/equips/shoulder/abs-shoulder.png", name: "Absolabs Bastion Pauldron" }],
			weapon: [{ id: "abs-1h-sword", image: "./public/images/equips/weapon/abs-1h-sword.png", name: "Absolabs Durandal" },
					{ id: "abs-2h-sword", image: "./public/images/equips/weapon/abs-2h-sword.png", name: "Absolabs Balmung" },
					{ id: "abs-1h-axe", image: "./public/images/equips/weapon/abs-1h-axe.png", name: "Absolabs Rampage" },
					{ id: "abs-2h-axe", image: "./public/images/equips/weapon/abs-2h-axe.png", name: "Absolabs Onslaught" },
					{ id: "abs-1h-hammer", image: "./public/images/equips/weapon/abs-1h-hammer.png", name: "Absolabs Gavel" },
					{ id: "abs-2h-hammer", image: "./public/images/equips/weapon/abs-2h-hammer.png", name: "Absolabs Truncheon" },
					{ id: "abs-spear", image: "./public/images/equips/weapon/abs-spear.png", name: "Absolabs Assagai" },
					{ id: "abs-polearm", image: "./public/images/equips/weapon/abs-polearm.png", name: "Absolabs Lochaber" },
					{ id: "abs-desperado", image: "./public/images/equips/weapon/abs-desperado.png", name: "Absolabs Blood Seeker" },
					{ id: "abs-elaha", image: "./public/images/equips/weapon/abs-elaha.png", name: "Absolabs Kusanagi" },
					{ id: "abs-lapis", image: "./public/images/equips/weapon/abs-lapis.png", name: "Lapis Type 8" },
					{ id: "abs-katana", image: "./public/images/equips/weapon/abs-katana.png", name: "Absolabs Kogarasumaru" },
					{ id: "abs-tuner", image: "./public/images/equips/weapon/abs-tuner.png", name: "Absolabs Tuner" }]
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
			hat: [{ id: "faf-warrior-hat", image: "./public/images/equips/hat/faf-warrior-hat.png", name: "Highness Warrior Helm" }],
			top: [{ id: "faf-warrior-top", image: "./public/images/equips/top/faf-warrior-top.png", name: "Eagle Eye Warrior Armor" }],
			bottom: [{ id: "faf-warrior-bottom", image: "./public/images/equips/bottom/faf-warrior-bottom.png", name: "Trickster Warrior Pants" }],
			weapon: [{ id: "faf-1h-sword", image: "./public/images/equips/weapon/faf-1h-sword.png", name: "Fafnir Mystletainn" },
					{ id: "faf-2h-sword", image: "./public/images/equips/weapon/faf-2h-sword.png", name: "Fafnir Penitencia" },
					{ id: "faf-1h-axe", image: "./public/images/equips/weapon/faf-1h-axe.png", name: "Fafnir Twin Cleaver" },
					{ id: "faf-2h-axe", image: "./public/images/equips/weapon/faf-2h-axe.png", name: "Fafnir Battle Cleaver" },
					{ id: "faf-1h-hammer", image: "./public/images/equips/weapon/faf-1h-hammer.png", name: "Fafnir Golden Hammer" },
					{ id: "faf-2h-hammer", image: "./public/images/equips/weapon/faf-2h-hammer.png", name: "Fafnir Lightninger" },
					{ id: "faf-spear", image: "./public/images/equips/weapon/faf-spear.png", name: "Fafnir Bionarc" },
					{ id: "faf-polearm", image: "./public/images/equips/weapon/faf-polearm.png", name: "Fafnir Moon Glaive" },
					{ id: "faf-desperado", image: "./public/images/equips/weapon/faf-desperado.png", name: "Fafnir Death Bringer" },
					{ id: "faf-elaha", image: "./public/images/equips/weapon/faf-elaha.png", name: "Fafnir Gigastein" },
					{ id: "faf-lapis", image: "./public/images/equips/weapon/faf-lapis.png", name: "Lapis Type 7" },
					{ id: "faf-katana", image: "./public/images/equips/weapon/faf-katana.png", name: "Fafnir Raven Ring" },
					{ id: "faf-tuner", image: "./public/images/equips/weapon/faf-forgiveness.png", name: "Fafnir Forgiveness" }]
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