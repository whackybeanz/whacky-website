var commonSetItems = [
	// HAT
	{ jobType: "common", setType: "none", equipType: "hat", id: "chaos-vellum-hat", name: "Chaos Vellum Helm", level: 140, isLuckyItem: true, itemPriority: 0 },

	// GLOVES
	{ jobType: "common", setType: "none", equipType: "gloves", subgroupId: 0, id: "hero-gloves", name: "Hero's Gloves", level: 120, isLuckyItem: true, itemPriority: 20 },
	{ jobType: "common", setType: "none", equipType: "gloves", subgroupId: 1, id: "mu-gong-gloves", name: "Mu Gong's Gloves", level: 120, isLuckyItem: true, itemPriority: 20 },
	{ jobType: "common", setType: "none", equipType: "gloves", subgroupId: 2, id: "so-gong-gloves", name: "So Gong's Gloves", level: 120, isLuckyItem: true, itemPriority: 20 },
	{ jobType: "common", setType: "none", equipType: "gloves", subgroupId: 0, id: "expert-gloves", name: "Expert's Gloves", level: 105, isLuckyItem: true, itemPriority: 20 },
	{ jobType: "common", setType: "none", equipType: "gloves", subgroupId: 1, id: "expert-apprentice-gloves", name: "Expert Apprentice's Gloves", level: 105, isLuckyItem: true, itemPriority: 20 },

	// FACE
	{ jobType: "common", setType: "hardBossAcc", equipType: "face", id: "lotus-mark", name: "Loose Control Machine Mark", level: 160 },
	{ jobType: "common", setType: "none", equipType: "face", id: "frontier-b-chicle", name: "Frontier B Black Chicle", level: 140 },
	{ jobType: "common", setType: "bossAcc", equipType: "face", id: "condensed-crystal", name: "Condensed Strength Crystalline", level: 110 },

	// EYE
	{ jobType: "common", setType: "hardBossAcc", equipType: "eye", id: "damien-eye", name: "Magical Eye Patch", level: 160 },
	{ jobType: "common", setType: "bossAcc", equipType: "eye", id: "papulatus-mark", name: "Papulatus Mark", level: 145 },
	{ jobType: "common", setType: "bossAcc", equipType: "eye", id: "black-bean-mark", name: "Black Bean Mark", level: 135 },
	{ jobType: "common", setType: "bossAcc", equipType: "eye", id: "aqua-letter", name: "Aqua Letter Eye Decoration", level: 100 },

	// BADGE
	{ jobType: "common", setType: "hardBossAcc", equipType: "badge", id: "genesis-badge", name: "Badge in the Beginning", level: 200 },
	{ jobType: "common", setType: "bossAcc", equipType: "badge", id: "ventus-badge", name: "Crystal Ventus Badge", level: 130 },
	{ jobType: "common", setType: "none", equipType: "badge", id: "lord-skull-badge", name: "Lord Skull Badge", level: 100 },
	{ jobType: "common", setType: "none", equipType: "badge", id: "lania-badge", name: "Lania's Triple Lunch Box", level: 0 },
	{ jobType: "common", setType: "none", equipType: "badge", id: "hospital-director-badge", name: "Hospital Director's Badge", level: 30 },

	// EARRING
	{ jobType: "common", setType: "hardBossAcc", equipType: "earring", id: "commander-force-earrings", name: "Commander Force Earrings", level: 200 },
	{ jobType: "common", setType: "none", equipType: "earring", id: "ocean-glow-earrings", name: "Ocean Glow Earrings", level: 150 },
	{ jobType: "common", setType: "inverse", equipType: "earring", id: "inverse-jewel-earrings", name: "Inverse Jewel Earring", level: 150 },
	{ jobType: "common", setType: "meister", equipType: "earring", id: "meister-studs", name: "Meister Ear Studs", level: 140 },
	{ jobType: "common", setType: "none", equipType: "earring", id: "scarlet-earrings", name: "Scarlet Earring", level: 135, isLuckyItem: true, itemPriority: 10 },
	{ jobType: "common", setType: "bossAcc", equipType: "earring", id: "dea-sidus", name: "Dea Sidus Earrings", level: 130 },
	{ jobType: "common", setType: "bossAcc", equipType: "earring", id: "will-o-the-wisps", name: "Will o' the Wisps", level: 130 },

	// PENDANT
	{ jobType: "common", setType: "hardBossAcc", equipType: "pendant", id: "hilla-pendant", name: "Source of Pain", level: 160 },
	{ jobType: "common", setType: "none", equipType: "pendant", id: "frontier-c-pendant", name: "Frontier C White Pendant", level: 145 },
	{ jobType: "common", setType: "bossAcc", equipType: "pendant", id: "dom-pendant", name: "Dominator Pendant", level: 140 },
	{ jobType: "common", setType: "none", equipType: "pendant", id: "frontier-b-pendant", name: "Frontier B Black Pendant", level: 140 },
	{ jobType: "common", setType: "none", equipType: "pendant", id: "rising-sun-pendant", name: "Rising Sun Pendant", level: 130 },
	{ jobType: "common", setType: "bossAcc", equipType: "pendant", id: "machinator-pendant", name: "Machinator Pendant", level: 120 },
	{ jobType: "common", setType: "bossAcc", equipType: "pendant", id: "cht-pendant", name: "Chaos Horntail Necklace", level: 120 },
	{ jobType: "common", setType: "bossAcc", equipType: "pendant", id: "ht-pendant", name: "Horned Tail Necklace", level: 120 },

	// RING
	{ jobType: "common", setType: "hardBossAcc", equipType: "ring", id: "giant-fear", name: "Giant Fear", level: 200 },
	{ jobType: "common", setType: "none", equipType: "ring", id: "breath-of-divinity", name: "Breath of Divinity", level: 150 },
	{ jobType: "common", setType: "meister", equipType: "ring", id: "meister-signet", name: "Meister Signet", level: 140 },
	{ jobType: "common", setType: "sengoku", equipType: "ring", id: "kanna-ring", name: "Kanna's Treasure", level: 140 },
	{ jobType: "common", setType: "none", equipType: "ring", id: "hekaton-signet", name: "Hekaton Signet", level: 130 },
	{ jobType: "common", setType: "none", equipType: "ring", id: "scarlet-ring", name: "Scarlet Ring", level: 135, isLuckyItem: true, itemPriority: 30 },
	{ jobType: "common", setType: "bossAcc", equipType: "ring", id: "elegant-ifia-ring", name: "Elegant Ifia's Ring", level: 120 },
	{ jobType: "common", setType: "bossAcc", equipType: "ring", id: "sbr", name: "Silver Blossom Ring", level: 110 },
	{ jobType: "common", setType: "none", equipType: "ring", id: "magnus-fury", name: "Magnus' Fury", level: 100 },
	{ jobType: "common", setType: "none", equipType: "ring", id: "hilla-fury", name: "Hilla's Fury", level: 100 },
	{ jobType: "common", setType: "none", equipType: "ring", id: "fighter-ring", name: "Fighter's Ring", level: 70, isLuckyItem: true, itemPriority: 31 },

	// BELT
	{ jobType: "common", setType: "hardBossAcc", equipType: "belt", id: "fantasy-belt", name: "Fantasy Belt", level: 200 },
	{ jobType: "common", setType: "bossAcc", equipType: "belt", id: "angry-zakum-belt", name: "Angry Zakum's Belt", level: 150 },
	{ jobType: "common", setType: "sengoku", equipType: "belt", id: "ayame-belt", name: "Ayame's Treasure", level: 140 },
	{ jobType: "common", setType: "bossAcc", equipType: "belt", id: "golden-clover-belt", name: "Golden Clover Belt", level: 140 },

	// POCKET
	{ jobType: "common", setType: "hardBossAcc", equipType: "pocket", id: "will-red-book", name: "Cursed Enemy Magic Book", level: 160 },
	{ jobType: "common", setType: "hardBossAcc", equipType: "pocket", id: "will-blue-book", name: "Cursed Blue Magic Book", level: 160 },
	{ jobType: "common", setType: "hardBossAcc", equipType: "pocket", id: "will-green-book", name: "Cursed Green Magic Book", level: 160 },
	{ jobType: "common", setType: "hardBossAcc", equipType: "pocket", id: "will-yellow-book", name: "Cursed Yellow Magic Book", level: 160 },
	{ jobType: "common", setType: "inverse", equipType: "pocket", id: "inverse-codex", name: "Inverse Codex", level: 150 },
	{ jobType: "common", setType: "bossAcc", equipType: "pocket", id: "phg", name: "Pink Holy Grail", level: 140 },
	{ jobType: "common", setType: "bossAcc", equipType: "pocket", id: "hilla-stone", name: "Stone of Eternal Life", level: 0 },
	{ jobType: "common", setType: "none", equipType: "pocket", id: "gold-richie-handkerchief", name: "Gold Richie's Handkerchief", level: 140 },

	// SHOULDER
	{ jobType: "common", setType: "inverse", equipType: "shoulder", id: "inverse-shoulder", name: "Inverse Metal Shoulders", level: 150 },
	{ jobType: "common", setType: "meister", equipType: "shoulder", id: "meister-spaulders", name: "Meister Spaulders", level: 140 },
	{ jobType: "common", setType: "sengoku", equipType: "shoulder", id: "hayato-shoulder", name: "Hayato's Treasure", level: 140 },
	{ jobType: "common", setType: "none", equipType: "shoulder", id: "scarlet-shoulder", name: "Scarlet Shoulderpads", level: 135, isLuckyItem: true, itemPriority: 50 },
	{ jobType: "common", setType: "none", equipType: "shoulder", id: "masteria-shoulder", name: "Masteria Shoulderpads", level: 130, isLuckyItem: true, itemPriority: 50 },
	{ jobType: "common", setType: "bossAcc", equipType: "shoulder", id: "magnus-shoulder", name: "Royal Black Metal Shoulder", level: 120 },

	// HEART
	{ jobType: "common", setType: "none", equipType: "heart", id: "outlaw-heart", name: "Outlaw Heart", level: 150 },
	{ jobType: "common", setType: "hardBossAcc", equipType: "heart", id: "black-heart", name: "Black Heart", level: 120 },
	{ jobType: "common", setType: "none", equipType: "heart", id: "liquid-metal-heart", name: "Liquid Metal Heart", level: 120 },
	{ jobType: "common", setType: "none", equipType: "heart", id: "beautyroid-heart", name: "Sincere Beautyroid Heart", level: 120 },
	{ jobType: "common", setType: "none", equipType: "heart", id: "titanium-heart", name: "Titanium Heart", level: 100 },

	// ANDROID
	{ jobType: "common", setType: "none", equipType: "android", id: "broid", name: "Battle-Roid", level: 10 },

	// EMBLEM
	{ jobType: "common", setType: "none", equipType: "emblem", subgroupId: 0, id: "seed-legend-emblem", name: "The Seed Legend Emblem", level: 140 },
	{ jobType: "common", setType: "none", equipType: "emblem", subgroupId: 1, id: "seed-master-emblem", name: "The Seed Master Emblem", level: 140 },
	{ jobType: "common", setType: "none", equipType: "emblem", subgroupId: 2, id: "seed-expert-emblem", name: "The Seed Expert Emblem", level: 140 },

	// MEDAL
	{ jobType: "common", setType: "none", equipType: "medal", id: "chef-medal", name: "Absolute Palate Legendary Chef Medal", level: 33 },
	{ jobType: "common", setType: "none", equipType: "medal", id: "monster-park-medal", name: "7-Day Monster Parker", level: 100 },
];

module.exports = commonSetItems;