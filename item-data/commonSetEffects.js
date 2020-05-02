var commonSetEffects = {
	hardBossAcc: {
		title: "Hard Boss Accessory Set",
		items: {
			face: [{ id: "lotus-mark", image: "./public/images/equips/face/lotus-mark.png", name: "Loose Control Machine Mark" }],
			eye: [{ id: "damien-eye", id: "damien-eye", image: "./public/images/equips/eye/damien-eye.png", name: "Magical Eye Patch" }],
			heart: [{ id: "black-heart", image: "./public/images/equips/heart/black-heart.png", name: "Black Heart" }],
			belt: [{ id: "fantasy-belt", image: "./public/images/equips/belt/fantasy-belt.png", name: "Fantasy Belt" }],
			pendant: [{ id: "hilla-pendant", image: "./public/images/equips/pendant/hilla-pendant.png", name: "Source of Pain" }],
			pocket: [{ id: "will-red-book", image: "./public/images/equips/pocket/will-red-book.png", name: "Cursed Enemy Magic Book" },
					{ id: "will-blue-book", image: "./public/images/equips/pocket/will-blue-book.png", name: "Cursed Blue Magic Book" },
					{ id: "will-green-book", image: "./public/images/equips/pocket/will-green-book.png", name: "Cursed Green Magic Book" },
					{ id: "will-yellow-book", image: "./public/images/equips/pocket/will-yellow-book.png", name: "Cursed Yellow Magic Book" }],
			badge: [{ id: "genesis-badge", image: "./public/images/equips/badge/genesis-badge.png", name: "Badge of Beginning" }]
		},
		effects: { 
			2: [{ statId: "wama", statName: "ATT/MATT", val: "10" }, 
				{ statId: "bossPercent", statName: "Boss Damage %", val: "10", symbol: "%" }, 
				{ statId: "maxHp", statName: "Max HP", val: "250" }, 
				{ statId: "allStats", statName: "All Stats", val: "10" }],
			3: [{ statId: "wama", statName: "ATT/MATT", val: "10" }, 
				{ statId: "iedPercent", statName: "Ignore Enemy DEF %", val: "10", symbol: "%" }, 
				{ statId: "maxHp", statName: "Max HP", val: "250" }, 
				{ statId: "allStats", statName: "All Stats", val: "10" },
				{ statId: "def", statName: "DEF", val: "250" }],
			4: [{ statId: "wama", statName: "ATT/MATT", val: "15" }, 
				{ statId: "critDmgPercent", statName: "Critical Damage %", val: "5", symbol: "%" }, 
				{ statId: "maxHp", statName: "Max HP", val: "375" }, 
				{ statId: "allStats", statName: "All Stats", val: "15" }],
			5: [{ statId: "wama", statName: "ATT/MATT", val: "15" }, 
				{ statId: "bossPercent", statName: "Boss Damage %", val: "10", symbol: "%" },  
				{ statId: "maxHp", statName: "Max HP", val: "375" }, 
				{ statId: "allStats", statName: "All Stats", val: "15" }],
		}
	},
	bossAcc: {
		title: "Boss Accessory Set",
		items: {
			face: [{ id: "condense-crystal", image: "./public/images/equips/face/condensed-crystal.png", name: "Condensed Strength Crystalline" }],
			eye: [{ id: "bbm", image: "./public/images/equips/eye/black-bean-mark.png", name: "Black Bean Mark" },
				{ id: "aqua-eye", image: "./public/images/equips/eye/aqua-letter.png", name: "Aqua Letter Eye Decoration" },
				{ id: "papu-mark", image: "./public/images/equips/eye/papulatus-mark.png", name: "Papulatus Mark" }],
			earring: [{ id: "will-o-wisps", image: "./public/images/equips/earring/will-o-wisps.png", name: "Will o' the Wisps" },
					{ id: "dea-sidus", image: "./public/images/equips/earring/dea-sidus.png", name: "Dea Sidus Earrings" }],
			ring: [{ id: "sbr", image: "./public/images/equips/ring/sbr.png", name: "Silver Blossom Ring" },
					{ id: "elegant-ifia-ring", image: "./public/images/equips/ring/elegant-ifia-ring.png", name: "Elegant Ifia Ring" }],
			belt: [{ id: "angry-zakum-belt", image: "./public/images/equips/belt/angry-zakum-belt.png", name: "Angry Zakum's Belt" },
					{ id: "golden-clover-belt", image: "./public/images/equips/belt/golden-clover-belt.png", name: "Golden Clover Belt" }],
			pendant: [{ id: "ht-pendant", image: "./public/images/equips/pendant/ht-pendant.png", name: "Horned Tail Necklace" },
					{ id: "cht-pendant", image: "./public/images/equips/pendant/cht-pendant.png", name: "Chaos Horntail Necklace" },
					{ id: "mach-pendant", image: "./public/images/equips/pendant/machinator-pendant.png", name: "Machinator Pendant" },
					{ id: "dom-pendant", image: "./public/images/equips/pendant/dom-pendant.png", name: "Dominator Pendant" }],
			shoulder: [{ id: "magnus-shoulder", image: "./public/images/equips/shoulder/magnus-shoulder.png", name: "Royal Black Metal Shoulder" }],
			pocket: [{ id: "phg", image: "./public/images/equips/pocket/phg.png", name: "Pink Holy Grail" },
					{ id: "hilla-stone", image: "", name: "Stone of Eternal Life" }],
			badge: [{ id: "ventus-badge", image: "./public/images/equips/badge/ventus-badge.png", name: "Crystal Ventus Badge" }],
		},
		effects: { 
			3: [{ statId: "wama", statName: "ATT/MATT", val: "5" }, 
				{ statId: "maxHpMpPercent", statName: "Max HP/MP %", val: "5", symbol: "%" }, 
				{ statId: "allStats", statName: "All Stats", val: "10" }],
			5: [{ statId: "wama", statName: "ATT/MATT", val: "5" },
				{ statId: "maxHpMpPercent", statName: "Max HP/MP %", val: "5", symbol: "%" }, 
				{ statId: "allStats", statName: "All Stats", val: "10" }],
			7: [{ statId: "wama", statName: "ATT/MATT", val: "10" }, 
				{ statId: "iedPercent", statName: "Ignore Enemy DEF %", val: "10", symbol: "%" }, 
				{ statId: "allStats", statName: "All Stats", val: "10" },
				{ statId: "def", statName: "DEF", val: "80" }],
			9: [{ statId: "wama", statName: "ATT/MATT", val: "10" }, 
				{ statId: "bossPercent", statName: "Boss Damage %", val: "10", symbol: "%" }, 
				{ statId: "allStats", statName: "All Stats", val: "15" },
				{ statId: "def", statName: "DEF", val: "100" }],
		}
	},
	meister: {
		title: "Meister Set",
		items: {
			earring: [{ id: "meister-studs", image: "./public/images/equips/earring/meister-studs.png", name: "Meister Ear Studs" }],
			ring: [{ id: "meister-signet", image: "./public/images/equips/ring/meister-signet.png", name: "Meister Signet" }],
			shoulder: [{ id: "meister-spaulders", image: "./public/images/equips/shoulder/meister-spaulders.png", name: "Meister Spaulders" }],
			weapon: [{ }],
		},
		effects: {
			2: [{ statId: "maxHpMpPercent", statName: "Max HP/MP %", val: "10", symbol: "%" }],
			3: [{ statId: "wama", statName: "ATT/MATT", val: "40" }],
			4: [{ statId: "bossPercent", statName: "Boss Damage %", val: "20", symbol: "%" }],
		}
	},
	sengoku: {
		title: "Sengoku Treasure Set",
		items: {
			shoulder: [{ id: "hayato-shoulder", image: "./public/images/equips/shoulder/hayato-shoulder.png", name: "Hayato's Treasure" }],
			ring: [{ id: "kanna-ring", image: "./public/images/equips/ring/kanna-ring.png", name: "Kanna's Treasure" }],
			belt: [{ id: "ayame-belt", image: "./public/images/equips/belt/ayame-belt.png", name: "Ayame's Treasure" }],
		},
		effects: {
			2: [{ statId: "wama", statName: "ATT/MATT", val: "3" }, 
				{ statId: "damagePercent", statName: "Damage %", val: "3", symbol: "%" },
				{ statId: "allStats", statName: "All Stats", val: "2" }, 
				{ statId: "def", statName: "DEF", val: "20" }],
			3: [{ statId: "wama", statName: "ATT/MATT", val: "12" }, 
				{ statId: "damagePercent", statName: "Damage %", val: "6", symbol: "%"},
				{ statId: "allStats", statName: "All Stats", val: "8" }, 
				{ statId: "def", statName: "DEF", val: "80" }],
		}
	},
	inverse: {
		title: "Kritias Set",
		items: {
			earring: [{ id: "inverse-earrings", image: "./public/images/equips/earring/inverse-jewel-earring.png", name: "Inverse Jewel Earring" }],
			shoulder: [{ id: "inverse-shoulder", image: "./public/images/equips/shoulder/inverse-shoulder.png", name: "Inverse Metal Shoulders" }],
			pocket: [{ id: "inverse-codex", image: "./public/images/equips/pocket/inverse-codex.png", name: "Inverse Codex" }],
		},
		effects: {
			3: [{ statId: "wama", statName: "ATT/MATT", val: "20" }, 
				{ statId: "bossPercent", statName: "Boss Damage %", val: "20", symbol: "%" }],
		}
	}
};

module.exports = commonSetEffects;