var pirateSetEffects = {
	acs: {
		title: "Arcaneshade Set",
		items: {
			hat: [{ id: "acs-pirate-hat", image: "/images/equips/hat/acs-pirate-hat.png", name: "Arcaneshade Pirate Hat" }],
			top: [{ id: "acs-pirate-suit", image: "/images/equips/overall/acs-pirate-suit.png", name: "Arcaneshade Pirate Suit" }],
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
			top: [{ id: "abs-pirate-overall", image: "/images/equips/overall/abs-pirate-overall.png", name: "Absolabs Brigadier Cuirass" }],
			shoes: [{ id: "abs-pirate-shoes", image: "/images/equips/shoes/abs-shoes.png", name: "Absolabs Brigadier Sabatons" }],
			gloves: [{ id: "abs-pirate-glove", image: "/images/equips/gloves/abs-glove.png", name: "Absolabs Brigadier Clench" }],
			cape: [{ id: "abs-pirate-cape", image: "/images/equips/cape/abs-cape.png", name: "Absolabs Brigadier Cloak" }], 
			shoulder: [{ id: "abs-pirate-shoulder", image: "/images/equips/shoulder/abs-shoulder.png", name: "Absolabs Brigadier Pauldron" }],
			weapon: [{ id: "abs-knuckle", image: "/images/equips/weapon/abs-knuckle.png", name: "Arcaneshade Ashen Fist" },
					{ id: "abs-pistol", image: "/images/equips/weapon/abs-pistol.png", name: "Arcaneshade Elite Magnum" },
					{ id: "abs-energy-sword", image: "/images/equips/weapon/abs-energy-sword.png", name: "Arcaneshade Electro Saber" },
					{ id: "abs-siege-gun", image: "/images/equips/weapon/abs-siege-gun.png", name: "Arcaneshade Blast Cannon" },
					{ id: "abs-soul-shooter", image: "/images/equips/weapon/abs-soul-shooter.png", name: "Arcaneshade Draconic Arm" }]
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
			hat: [{ id: "faf-pirate-hat", image: "/images/equips/hat/faf-pirate-hat.png", name: "Highness Wanderer Hat" }],
			top: [{ id: "faf-pirate-top", image: "/images/equips/top/faf-pirate-top.png", name: "Eagle Eye Wanderer Coat" }],
			bottom: [{ id: "faf-pirate-bottom", image: "/images/equips/bottom/faf-pirate-bottom.png", name: "Trickster Wanderer Pants" }],
			weapon: [{ id: "faf-knuckle", image: "/images/equips/weapon/faf-knuckle.png", name: "Fafnir Fenrir Talon" },
					{ id: "faf-pistol", image: "/images/equips/weapon/faf-pistol.png", name: "Fafnir Zeliska" },
					{ id: "faf-energy-sword", image: "/images/equips/weapon/faf-energy-sword.png", name: "Fafnir Split Edge" },
					{ id: "faf-siege-gun", image: "/images/equips/weapon/faf-siege-gun.png", name: "Fafnir Luster Cannon" },
					{ id: "faf-soul-shooter", image: "/images/equips/weapon/faf-soul-shooter.png", name: "Fafnir Angelic Shooter" }],
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