var commonSetItems = [
	// HAT
	{ jobType: "common", setType: "none", equipType: "hat", id: "cvell-hat", imgUrl: "./public/images/equips/hat/chaos-bellum.png", name: "Chaos Vellum Hat", level: 140, isLuckyItem: true, itemPriority: 0 },

	// GLOVES
	{ jobType: "common", setType: "none", equipType: "gloves", subgroupId: 0, id: "hero-gloves", imgUrl: "./public/images/equips/gloves/hero-gloves.png", name: "Hero's Gloves", level: 120, isLuckyItem: true, itemPriority: 20 },
	{ jobType: "common", setType: "none", equipType: "gloves", subgroupId: 1, id: "mu-gong-gloves", imgUrl: "./public/images/equips/gloves/mu-gong-gloves.png", name: "Mu Gong's Gloves", level: 120, isLuckyItem: true, itemPriority: 20 },
	{ jobType: "common", setType: "none", equipType: "gloves", subgroupId: 2, id: "so-gong-gloves", imgUrl: "./public/images/equips/gloves/so-gong-gloves.png", name: "So Gong's Gloves", level: 120, isLuckyItem: true, itemPriority: 20 },
	{ jobType: "common", setType: "none", equipType: "gloves", subgroupId: 0, id: "expert-gloves", imgUrl: "./public/images/equips/gloves/expert-gloves.png", name: "Expert's Gloves", level: 105, isLuckyItem: true, itemPriority: 20 },
	{ jobType: "common", setType: "none", equipType: "gloves", subgroupId: 1, id: "expert-apprentice-gloves", imgUrl: "./public/images/equips/gloves/expert-apprentice-gloves.png", name: "Expert Apprentice's Gloves", level: 105, isLuckyItem: true, itemPriority: 20 },

	// FACE
	{ jobType: "common", setType: "hardBossAcc", equipType: "face", id: "lotus-mark", imgUrl: "./public/images/equips/face/lotus-mark.png", name: "Loose Control Machine Mark", level: 160 },
	{ jobType: "common", setType: "none", equipType: "face", id: "frontier-b-chicle", imgUrl: "./public/images/equips/face/frontier-b-chicle.png", name: "Frontier B Black Chicle", level: 140 },
	{ jobType: "common", setType: "bossAcc", equipType: "face", id: "condense-crystal", imgUrl: "./public/images/equips/face/condensed-crystal.png", name: "Condensed Strength Crystalline", level: 110 },

	// EYE
	{ jobType: "common", setType: "hardBossAcc", equipType: "eye", id: "damien-eye", imgUrl: "./public/images/equips/eye/damien-eye.png", name: "Magical Eye Patch", level: 160 },
	{ jobType: "common", setType: "bossAcc", equipType: "eye", id: "papu-mark", imgUrl: "./public/images/equips/eye/papulatus-mark.png", name: "Papulatus Mark", level: 145 },
	{ jobType: "common", setType: "bossAcc", equipType: "eye", id: "bbm", imgUrl: "./public/images/equips/eye/black-bean-mark.png", name: "Black Bean Mark", level: 135 },
	{ jobType: "common", setType: "bossAcc", equipType: "eye", id: "aqua-eye", imgUrl: "./public/images/equips/eye/aqua-letter.png", name: "Aqua Letter Eye Decoration", level: 100 },

	// BADGE
	{ jobType: "common", setType: "hardBossAcc", equipType: "badge", id: "genesis-badge", imgUrl: "./public/images/equips/badge/genesis-badge.png", name: "Badge in the Beginning", level: 200 },
	{ jobType: "common", setType: "bossAcc", equipType: "badge", id: "ventus-badge", imgUrl: "./public/images/equips/badge/ventus-badge.png", name: "Crystal Ventus Badge", level: 130 },
	{ jobType: "common", setType: "none", equipType: "badge", id: "lord-skull-badge", imgUrl: "./public/images/equips/badge/lord-skull-badge.png", name: "Lord Skull Badge", level: 100 },
	{ jobType: "common", setType: "none", equipType: "badge", id: "lania-badge", imgUrl: "./public/images/equips/badge/lania-box.png", name: "Lania's Triple Lunch Box", level: 0 },
	{ jobType: "common", setType: "none", equipType: "badge", id: "hospital-badge", imgUrl: "./public/images/equips/badge/hospital-director-badge.png", name: "Hospital Director's Badge", level: 30 },

	// EARRING
	{ jobType: "common", setType: "hardBossAcc", equipType: "earring", id: "commander-force-earrings", imgUrl: "./public/images/equips/earring/commander-force-earrings.png", name: "Commander Force Earrings", level: 200 },
	{ jobType: "common", setType: "none", equipType: "earring", id: "ocean-glow-earring", imgUrl: "./public/images/equips/earring/ocean-glow-earring.png", name: "Ocean Glow Earrings", level: 150 },
	{ jobType: "common", setType: "inverse", equipType: "earring", id: "inverse-earrings", imgUrl: "./public/images/equips/earring/inverse-jewel-earring.png", name: "Inverse Jewel Earring", level: 150 },
	{ jobType: "common", setType: "meister", equipType: "earring", id: "meister-studs", imgUrl: "./public/images/equips/earring/meister-studs.png", name: "Meister Ear Studs", level: 140 },
	{ jobType: "common", setType: "none", equipType: "earring", id: "scarlet-earring", imgUrl: "./public/images/equips/earring/scarlet-earring.png", name: "Scarlet Earring", level: 135, isLuckyItem: true, itemPriority: 10 },
	{ jobType: "common", setType: "bossAcc", equipType: "earring", id: "dea-sidus", imgUrl: "./public/images/equips/earring/dea-sidus.png", name: "Dea Sidus Earrings", level: 130 },
	{ jobType: "common", setType: "bossAcc", equipType: "earring", id: "will-o-wisps", imgUrl: "./public/images/equips/earring/will-o-wisps.png", name: "Will o' the Wisps", level: 130 },

	// PENDANT
	{ jobType: "common", setType: "hardBossAcc", equipType: "pendant", id: "hilla-pendant", imgUrl: "./public/images/equips/pendant/hilla-pendant.png", name: "Source of Pain", level: 160 },
	{ jobType: "common", setType: "none", equipType: "pendant", id: "frontier-c-pendant", imgUrl: "./public/images/equips/pendant/frontier-c-pendant.png", name: "Frontier C White Pendant", level: 145 },
	{ jobType: "common", setType: "bossAcc", equipType: "pendant", id: "dom-pendant", imgUrl: "./public/images/equips/pendant/dom-pendant.png", name: "Dominator Pendant", level: 140 },
	{ jobType: "common", setType: "none", equipType: "pendant", id: "frontier-b-pendant", imgUrl: "./public/images/equips/pendant/frontier-b-pendant.png", name: "Frontier B Black Pendant", level: 140 },
	{ jobType: "common", setType: "none", equipType: "pendant", id: "rising-sun-pendant", imgUrl: "./public/images/equips/pendant/rising-sun-pendant.png", name: "Rising Sun Pendant", level: 130 },
	{ jobType: "common", setType: "bossAcc", equipType: "pendant", id: "mach-pendant", imgUrl: "./public/images/equips/pendant/machinator-pendant.png", name: "Machinator Pendant", level: 120 },
	{ jobType: "common", setType: "bossAcc", equipType: "pendant", id: "cht-pendant", imgUrl: "./public/images/equips/pendant/cht-pendant.png", name: "Chaos Horntail Necklace", level: 120 },
	{ jobType: "common", setType: "bossAcc", equipType: "pendant", id: "ht-pendant", imgUrl: "./public/images/equips/pendant/ht-pendant.png", name: "Horned Tail Necklace", level: 120 },

	// RING
	{ jobType: "common", setType: "hardBossAcc", equipType: "ring", id: "giant-fear", imgUrl: "./public/images/equips/ring/giant-fear.png", name: "Giant Fear", level: 200 },
	{ jobType: "common", setType: "none", equipType: "ring", id: "breath-of-divinity", imgUrl: "./public/images/equips/ring/breath-of-divinity.png", name: "Breath of Divinity", level: 150 },
	{ jobType: "common", setType: "meister", equipType: "ring", id: "meister-signet", imgUrl: "./public/images/equips/ring/meister-signet.png", name: "Meister Signet", level: 140 },
	{ jobType: "common", setType: "sengoku", equipType: "ring", id: "kanna-ring", imgUrl: "./public/images/equips/ring/kanna-ring.png", name: "Kanna's Treasure", level: 140 },
	{ jobType: "common", setType: "none", equipType: "ring", id: "hekaton-signet", imgUrl: "./public/images/equips/ring/hekaton-signet.png", name: "Hekaton Signet", level: 130 },
	{ jobType: "common", setType: "none", equipType: "ring", id: "scarlet-ring", imgUrl: "./public/images/equips/ring/scarlet-ring.png", name: "Scarlet Ring", level: 135, isLuckyItem: true, itemPriority: 30 },
	{ jobType: "common", setType: "bossAcc", equipType: "ring", id: "elegant-ifia-ring", imgUrl: "./public/images/equips/ring/elegant-ifia-ring.png", name: "Elegant Ifia's Ring", level: 120 },
	{ jobType: "common", setType: "bossAcc", equipType: "ring", id: "sbr", imgUrl: "./public/images/equips/ring/sbr.png", name: "Silver Blossom Ring", level: 110 },
	{ jobType: "common", setType: "none", equipType: "ring", id: "magnus-fury", imgUrl: "./public/images/equips/ring/magnus-fury.png", name: "Magnus' Fury", level: 100 },
	{ jobType: "common", setType: "none", equipType: "ring", id: "hilla-fury", imgUrl: "./public/images/equips/ring/hilla-fury.png", name: "Hilla's Fury", level: 100 },
	{ jobType: "common", setType: "none", equipType: "ring", id: "fighter-ring", imgUrl: "./public/images/equips/ring/fighter-ring.png", name: "Fighter's Ring", level: 70, isLuckyItem: true, itemPriority: 31 },

	// BELT
	{ jobType: "common", setType: "hardBossAcc", equipType: "belt", id: "fantasy-belt", imgUrl: "./public/images/equips/belt/fantasy-belt.png", name: "Fantasy Belt", level: 200 },
	{ jobType: "common", setType: "bossAcc", equipType: "belt", id: "angry-zakum-belt", imgUrl: "./public/images/equips/belt/angry-zakum-belt.png", name: "Angry Zakum's Belt", level: 150 },
	{ jobType: "common", setType: "sengoku", equipType: "belt", id: "ayame-belt", imgUrl: "./public/images/equips/belt/ayame-belt.png", name: "Ayame's Treasure", level: 140 },
	{ jobType: "common", setType: "bossAcc", equipType: "belt", id: "golden-clover-belt", imgUrl: "./public/images/equips/belt/golden-clover-belt.png", name: "Golden Clover Belt", level: 140 },

	// POCKET
	{ jobType: "common", setType: "hardBossAcc", equipType: "pocket", id: "will-red-book", imgUrl: "./public/images/equips/pocket/will-red-book.png", name: "Cursed Enemy Magic Book", level: 160 },
	{ jobType: "common", setType: "hardBossAcc", equipType: "pocket", id: "will-blue-book", imgUrl: "./public/images/equips/pocket/will-blue-book.png", name: "Cursed Blue Magic Book", level: 160 },
	{ jobType: "common", setType: "hardBossAcc", equipType: "pocket", id: "will-green-book", imgUrl: "./public/images/equips/pocket/will-green-book.png", name: "Cursed Green Magic Book", level: 160 },
	{ jobType: "common", setType: "hardBossAcc", equipType: "pocket", id: "will-yellow-book", imgUrl: "./public/images/equips/pocket/will-yellow-book.png", name: "Cursed Yellow Magic Book", level: 160 },
	{ jobType: "common", setType: "inverse", equipType: "pocket", id: "inverse-codex", imgUrl: "./public/images/equips/pocket/inverse-codex.png", name: "Inverse Codex", level: 150 },
	{ jobType: "common", setType: "bossAcc", equipType: "pocket", id: "phg", imgUrl: "./public/images/equips/pocket/phg.png", name: "Pink Holy Grail", level: 140 },
	{ jobType: "common", setType: "bossAcc", equipType: "pocket", id: "hilla-stone", imgUrl: "./public/images/equips/pocket/hilla-stone.png", name: "Stone of Eternal Life", level: 0 },
	{ jobType: "common", setType: "none", equipType: "pocket", id: "gold-richie-handkerchief", imgUrl: "./public/images/equips/pocket/gold-richie-handkerchief.png", name: "Gold Richie's Handkerchief", level: 140 },

	// SHOULDER
	{ jobType: "common", setType: "inverse", equipType: "shoulder", id: "inverse-shoulder", imgUrl: "./public/images/equips/shoulder/inverse-shoulder.png", name: "Inverse Metal Shoulders", level: 150 },
	{ jobType: "common", setType: "meister", equipType: "shoulder", id: "meister-spaulders", imgUrl: "./public/images/equips/shoulder/meister-spaulders.png", name: "Meister Spaulders", level: 140 },
	{ jobType: "common", setType: "sengoku", equipType: "shoulder", id: "hayato-shoulder", imgUrl: "./public/images/equips/shoulder/hayato-shoulder.png", name: "Hayato's Treasure", level: 140 },
	{ jobType: "common", setType: "none", equipType: "shoulder", id: "scarlet-pad", imgUrl: "./public/images/equips/shoulder/scarlet-pad.png", name: "Scarlet Shoulderpads", level: 135, isLuckyItem: true, itemPriority: 50 },
	{ jobType: "common", setType: "none", equipType: "shoulder", id: "masteria-shoulder", imgUrl: "./public/images/equips/shoulder/masteria-shoulder.png", name: "Masteria Shoulderpads", level: 130, isLuckyItem: true, itemPriority: 50 },
	{ jobType: "common", setType: "bossAcc", equipType: "shoulder", id: "magnus-shoulder", imgUrl: "./public/images/equips/shoulder/magnus-shoulder.png", name: "Royal Black Metal Shoulder", level: 120 },

	// HEART
	{ jobType: "common", setType: "none", equipType: "heart", id: "outlaw-heart", imgUrl: "./public/images/equips/heart/outlaw-heart.png", name: "Outlaw Heart", level: 150 },
	{ jobType: "common", setType: "hardBossAcc", equipType: "heart", id: "black-heart", imgUrl: "./public/images/equips/heart/black-heart.png", name: "Black Heart", level: 120 },
	{ jobType: "common", setType: "none", equipType: "heart", id: "liquid-metal-heart", imgUrl: "./public/images/equips/heart/liquid-metal-heart.png", name: "Liquid Metal Heart", level: 120 },
	{ jobType: "common", setType: "none", equipType: "heart", id: "beautyroid-heart", imgUrl: "./public/images/equips/heart/beautyroid-heart.png", name: "Sincere Beautyroid Heart", level: 120 },
	{ jobType: "common", setType: "none", equipType: "heart", id: "titanium-heart", imgUrl: "./public/images/equips/heart/titanium-heart.png", name: "Titanium Heart", level: 100 },

	// ANDROID
	{ jobType: "common", setType: "none", equipType: "android", id: "broid", imgUrl: "./public/images/equips/android/broid.png", name: "Battle-Roid", level: 10 },

	// EMBLEM
	{ jobType: "common", setType: "none", equipType: "emblem", subgroupId: 0, id: "seed-legend", imgUrl: "./public/images/equips/emblem/seed-legend-emblem.png", name: "The Seed Legend Emblem", level: 140 },
	{ jobType: "common", setType: "none", equipType: "emblem", subgroupId: 1, id: "seed-master", imgUrl: "./public/images/equips/emblem/seed-master-emblem.png", name: "The Seed Master Emblem", level: 140 },
	{ jobType: "common", setType: "none", equipType: "emblem", subgroupId: 2, id: "seed-expert", imgUrl: "./public/images/equips/emblem/seed-expert-emblem.png", name: "The Seed Expert Emblem", level: 140 },

	// MEDAL
	{ jobType: "common", setType: "none", equipType: "medal", id: "chef-medal", imgUrl: "./public/images/equips/medal/chef-medal.png", name: "Absolute Palate Legendary Chef Medal", level: 33 },
	{ jobType: "common", setType: "none", equipType: "medal", id: "monster-park-medal", imgUrl: "./public/images/equips/medal/monster-park-medal.png", name: "7-Day Monster Parker", level: 100 },
];

module.exports = commonSetItems;