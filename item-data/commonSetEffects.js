var commonSetEffects = {
	hardBossAcc: {
		title: "Hard Boss Accessory Set",
		items: {
			face: [{ id: "lotus-mark", image: "/images/equips/face/lotus-mark.png", name: "Loose Control Machine Mark" }],
			eye: [{ id: "damien-eye", id: "damien-eye", image: "/images/equips/eye/damien-eye.png", name: "Magical Eye Patch" }],
			heart: [{ id: "black-heart", image: "/images/equips/heart/black-heart.png", name: "Black Heart" }],
			belt: [{ id: "fantasy-belt", image: "/images/equips/belt/fantasy-belt.png", name: "Fantasy Belt" }],
			pendant: [{ id: "hilla-pendant", image: "/images/equips/pendant/hilla-pendant.png", name: "Source of Pain" }],
			pocket: [{ id: "will-red-book", image: "/images/equips/pocket/will-red-book.png", name: "Cursed Enemy Magic Book" },
					{ id: "will-blue-book", image: "/images/equips/pocket/will-blue-book.png", name: "Cursed Blue Magic Book" },
					{ id: "will-green-book", image: "/images/equips/pocket/will-green-book.png", name: "Cursed Green Magic Book" },
					{ id: "will-yellow-book", image: "/images/equips/pocket/will-yellow-book.png", name: "Cursed Yellow Magic Book" }],
			badge: [{ id: "genesis-badge", image: "/images/equips/badge/genesis-badge.png", name: "Badge of Beginning" }]
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
			face: [{ id: "condense-crystal", image: "/images/equips/face/condensed-crystal.png", name: "Condensed Strength Crystalline" }],
			eye: [{ id: "bbm", image: "/images/equips/eye/black-bean-mark.png", name: "Black Bean Mark" },
				{ id: "aqua-eye", image: "/images/equips/eye/aqua-letter.png", name: "Aqua Letter Eye Decoration" }],
			earring: [{ id: "will-o-wisp", image: "", name: "Will o' the Wisps" },
					{ id: "dea-sidus", image: "/images/equips/earring/dea-sidus.png", name: "Dea Sidus Earrings" }],
			ring: [{ id: "sbr", image: "/images/equips/ring/sbr.png", name: "Silver Blossom Ring" },
					{ id: "elegant-ifia-ring", image: "/images/equips/ring/elegant-ifia-ring.png", name: "Elegant Ifia Ring" }],
			belt: [{ id: "zakum-belt", image: "", name: "Angry Zakum's Belt" },
					{ id: "clover-belt", image: "", name: "Golden Clover Belt" }],
			pendant: [{ id: "ht-pendant", image: "/images/equips/pendant/ht-pendant.png", name: "Horned Tail Necklace" },
					{ id: "cht-pendant", image: "/images/equips/pendant/cht-pendant.png", name: "Chaos Horntail Necklace" },
					{ id: "mach-pendant", image: "", name: "Machinator Necklace" },
					{ id: "dom-pendant", image: "", name: "Dominator Necklace" }],
			shoulder: [{ id: "magnus-shoulder", image: "/images/equips/shoulder/magnus-shoulder.png", name: "Royal Black Metal Shoulder" }],
			pocket: [{ id: "phg", image: "/images/equips/pocket/phg.png", name: "Pink Holy Grail" },
					{ id: "hilla-stone", image: "", name: "Stone of Eternal Life" }],
			badge: [{ id: "ventus-badge", image: "/images/equips/badge/ventus-badge.png", name: "Crystal Ventus Badge" }],
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
			earring: [{ id: "meister-studs", image: "/images/equips/earring/meister-studs.png", name: "Meister Ear Studs" }],
			ring: [{ id: "meister-signet", image: "/images/equips/ring/meister-signet.png", name: "Meister Signet" }],
			shoulder: [{ id: "meister-spaulders", image: "/images/equips/shoulder/meister-spaulders.png", name: "Meister Spaulders" }],
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
			shoulder: [{ id: "hayato-shoulder", image: "/images/equips/shoulder/hayato-shoulder.png", name: "Hayato's Treasure" }],
			ring: [{ id: "kanna-ring", image: "/images/equips/ring/kanna-ring.png", name: "Kanna's Treasure" }],
			belt: [{ }],
		},
		effects: {
			2: [{ statId: "wama", statName: "ATT/MATT", val: "3" }, {statId: "damagePercent", statName: "Damage %", val: "3", symbol: "%"},
				{ statId: "allStats", statName: "All Stats", val: "2" }, {statId: "def", statName: "DEF", val: "20"}],
			3: [{ statId: "wama", statName: "ATT/MATT", val: "12" }, {statId: "damagePercent", statName: "Damage %", val: "6", symbol: "%"},
				{ statId: "allStats", statName: "All Stats", val: "8" }, {statId: "def", statName: "DEF", val: "80"}],
		}
	}
};

module.exports = commonSetEffects;