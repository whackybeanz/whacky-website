var warriorSetItems = [
	// HAT
	{ jobType: "warrior", setType: "acs", equipType: "hat", id: "acs-warrior-hat", imgUrl: "./public/images/equips/hat/acs-knight-hat.png", name: "Arcaneshade Knight Hat", level: 200 },
	{ jobType: "warrior", setType: "abs", equipType: "hat", id: "abs-warrior-hat", imgUrl: "./public/images/equips/hat/abs-bastion-helm.png", name: "Absolabs Bastion Helm", level: 160 },
	{ jobType: "warrior", setType: "faf", equipType: "hat", id: "faf-warrior-hat", imgUrl: "./public/images/equips/hat/faf-warrior-hat.png", name: "Highness Warrior Helm", level: 150},

	// FACE
	{ jobType: "warrior", setType: "none", equipType: "face", id: "meister-symbol", imgUrl: "./public/images/equips/face/meister-symbol.png", name: "Shiny Red Warrior Meister Symbol", level: 130 },

	// OVERALL & TOP
	{ jobType: "warrior", setType: "acs", equipType: "top", id: "acs-knight-overall", imgUrl: "./public/images/equips/overall/acs-knight-suit.png", name: "Arcaneshade Knight Suit", level: 200, isOverall: true },
	{ jobType: "warrior", setType: "abs", equipType: "top", id: "abs-warrior-overall", imgUrl: "./public/images/equips/overall/abs-warrior-overall.png", name: "Absolabs Bastion Hauberk", level: 160, isOverall: true },
	{ jobType: "warrior", setType: "faf", equipType: "top", id: "faf-warrior-top", imgUrl: "./public/images/equips/top/faf-warrior-top.png", name: "Eagle Eye Warrior Armor", level: 150 },

	// BOTTOM
	{ jobType: "warrior", setType: "faf", equipType: "bottom", id: "faf-warrior-bottom", imgUrl: "./public/images/equips/bottom/faf-warrior-bottom.png", name: "Trickster Warrior Pants", level: 150 },

	// SHOES
	{ jobType: "warrior", setType: "acs", equipType: "shoes", id: "acs-warrior-shoes", imgUrl: "./public/images/equips/shoes/acs-shoes.png", name: "Arcaneshade Knight Shoes", level: 200 },
	{ jobType: "warrior", setType: "abs", equipType: "shoes", id: "abs-warrior-shoes", imgUrl: "./public/images/equips/shoes/abs-shoes.png", name: "Absolabs Bastion Greaves", level: 160 },
	{ jobType: "warrior", setType: "none", equipType: "shoes", id: "tyrant-shoes", imgUrl: "./public/images/equips/shoes/tyrant-shoes.png", name: "Tyrant Hyades Boots", level: 150 },

	// GLOVES
	{ jobType: "warrior", setType: "acs", equipType: "gloves", id: "acs-warrior-glove", imgUrl: "./public/images/equips/gloves/acs-glove.png", name: "Arcaneshade Knight Mitts", level: 200 },
	{ jobType: "warrior", setType: "abs", equipType: "gloves", id: "abs-warrior-glove", imgUrl: "./public/images/equips/gloves/abs-glove.png", name: "Absolabs Bastion Gauntlets", level: 160 },
	{ jobType: "warrior", setType: "none", equipType: "gloves", id: "tyrant-gloves", imgUrl: "./public/images/equips/gloves/tyrant-gloves.png", name: "Tyrant Hyades Gloves", level: 150 },

	// CAPE
	{ jobType: "warrior", setType: "acs", equipType: "cape", id: "acs-warrior-cape", imgUrl: "./public/images/equips/cape/acs-cape.png", name: "Arcaneshade Knight Cape", level: 200 },
	{ jobType: "warrior", setType: "abs", equipType: "cape", id: "abs-warrior-cape", imgUrl: "./public/images/equips/cape/abs-cape.png", name: "Absolabs Bastion Cloak", level: 160 },
	{ jobType: "warrior", setType: "none", equipType: "cape", id: "tyrant-cape", imgUrl: "./public/images/equips/cape/tyrant-cape.png", name: "Tyrant Hyades Cloak", level: 150 },

	// SHOULDER
	{ jobType: "warrior", setType: "acs", equipType: "shoulder", id: "acs-warrior-shoulder", imgUrl: "./public/images/equips/shoulder/acs-shoulder.png", name: "Arcaneshade Knight Shoulder", level: 200 },
	{ jobType: "warrior", setType: "abs", equipType: "shoulder", id: "abs-warrior-shoulder", imgUrl: "./public/images/equips/shoulder/abs-shoulder.png", name: "Absolabs Bastion Pauldron", level: 160 },

	// WEAPON
	{ jobType: "warrior", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 0, id: "genesis-1h-sword", imgUrl: "./public/images/equips/weapon/genesis-1h-sword.png", name: "Genesis Sabre", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "warrior", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 1, id: "genesis-2h-sword", imgUrl: "./public/images/equips/weapon/genesis-2h-sword.png", name: "Genesis Two-handed Sword", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "warrior", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 2, id: "genesis-1h-axe", imgUrl: "./public/images/equips/weapon/genesis-1h-axe.png", name: "Genesis Axe", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "warrior", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 3, id: "genesis-2h-axe", imgUrl: "./public/images/equips/weapon/genesis-2h-axe.png", name: "Genesis Two-handed Axe", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "warrior", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 4, id: "genesis-1h-hammer", imgUrl: "./public/images/equips/weapon/genesis-1h-hammer.png", name: "Genesis Hammer", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "warrior", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 5, id: "genesis-2h-hammer", imgUrl: "./public/images/equips/weapon/genesis-2h-hammer.png", name: "Genesis Two-handed Hammer", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "warrior", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 6, id: "genesis-spear", imgUrl: "./public/images/equips/weapon/genesis-spear.png", name: "Genesis Spear", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "warrior", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 7, id: "genesis-polearm", imgUrl: "./public/images/equips/weapon/genesis-polearm.png", name: "Genesis Pole Arm", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "warrior", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 8, id: "genesis-desperado", imgUrl: "./public/images/equips/weapon/genesis-desperado.png", name: "Genesis Desperado", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "warrior", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 9, id: "genesis-elaha", imgUrl: "./public/images/equips/weapon/genesis-elaha.png", name: "Genesis Elaha", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "warrior", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 10, id: "genesis-lapis", imgUrl: "./public/images/equips/weapon/genesis-lapis.png", name: "Lapis Type 10", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "warrior", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 11, id: "genesis-katana", imgUrl: "./public/images/equips/weapon/genesis-katana.png", name: "Genesis Katana", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "warrior", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 12, id: "genesis-tuner", imgUrl: "./public/images/equips/weapon/genesis-tuner.png", name: "Genesis Tuner", level: 200, isLuckyItem: true, itemPriority: 100 },

	{ jobType: "warrior", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 0, id: "acs-1h-sword", imgUrl: "./public/images/equips/weapon/acs-1h-sword.png", name: "Arcaneshade Saber", level: 200 },
	{ jobType: "warrior", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 1, id: "acs-2h-sword", imgUrl: "./public/images/equips/weapon/acs-2h-sword.png", name: "Arcaneshade Two-handed Sword", level: 200 },
	{ jobType: "warrior", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 2, d: "acs-1h-axe", imgUrl: "./public/images/equips/weapon/acs-1h-axe.png", name: "Arcaneshade Axe", level: 200 },
	{ jobType: "warrior", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 3, id: "acs-2h-axe", imgUrl: "./public/images/equips/weapon/acs-2h-axe.png", name: "Arcaneshade Two-handed Axe", level: 200 },
	{ jobType: "warrior", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 4, id: "acs-1h-hammer", imgUrl: "./public/images/equips/weapon/acs-1h-hammer.png", name: "Arcaneshade Hammer", level: 200 },
	{ jobType: "warrior", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 5, id: "acs-2h-hammer", imgUrl: "./public/images/equips/weapon/acs-2h-hammer.png", name: "Arcaneshade Two-handed Hammer", level: 200 },
	{ jobType: "warrior", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 6, id: "acs-spear", imgUrl: "./public/images/equips/weapon/acs-spear.png", name: "Arcaneshade Spear", level: 200 },
	{ jobType: "warrior", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 7, id: "acs-polearm", imgUrl: "./public/images/equips/weapon/acs-polearm.png", name: "Arcaneshade Pole Arm", level: 200 },
	{ jobType: "warrior", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 8, id: "acs-desperado", imgUrl: "./public/images/equips/weapon/acs-desperado.png", name: "Arcaneshade Desperado", level: 200 },
	{ jobType: "warrior", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 9, id: "acs-elaha", imgUrl: "./public/images/equips/weapon/acs-elaha.png", name: "Arcaneshade Elaha", level: 200 },
	{ jobType: "warrior", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 10, id: "acs-lapis", imgUrl: "./public/images/equips/weapon/acs-lapis.png", name: "Lapis Type 9", level: 200 },
	{ jobType: "warrior", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 11, id: "acs-katana", imgUrl: "./public/images/equips/weapon/acs-katana.png", name: "Arcaneshade Katana", level: 200 },
	{ jobType: "warrior", setType: "abs", equipType: "weapon", groupId: 2000, subgroupId: 12, id: "acs-tuner", imgUrl: "./public/images/equips/weapon/acs-tuner.png", name: "Arcaneshade Tuner", level: 200 },

	{ jobType: "warrior", setType: "abs", equipType: "weapon", subgroupId: 0, id: "abs-1h-sword", imgUrl: "./public/images/equips/weapon/abs-1h-sword.png", name: "Absolabs Durandal", level: 160 },
	{ jobType: "warrior", setType: "abs", equipType: "weapon", subgroupId: 1, id: "abs-2h-sword", imgUrl: "./public/images/equips/weapon/abs-2h-sword.png", name: "Absolabs Balmung", level: 160 },
	{ jobType: "warrior", setType: "abs", equipType: "weapon", subgroupId: 2, id: "abs-1h-axe", imgUrl: "./public/images/equips/weapon/abs-1h-axe.png", name: "Absolabs Rampage", level: 160 },
	{ jobType: "warrior", setType: "abs", equipType: "weapon", subgroupId: 3, id: "abs-2h-axe", imgUrl: "./public/images/equips/weapon/abs-2h-axe.png", name: "Absolabs Onslaught", level: 160 },
	{ jobType: "warrior", setType: "abs", equipType: "weapon", subgroupId: 4, id: "abs-1h-hammer", imgUrl: "./public/images/equips/weapon/abs-1h-hammer.png", name: "Absolabs Gavel", level: 160 },
	{ jobType: "warrior", setType: "abs", equipType: "weapon", subgroupId: 5, id: "abs-2h-hammer", imgUrl: "./public/images/equips/weapon/abs-2h-hammer.png", name: "Absolabs Truncheon", level: 160 },
	{ jobType: "warrior", setType: "abs", equipType: "weapon", subgroupId: 6, id: "abs-spear", imgUrl: "./public/images/equips/weapon/abs-spear.png", name: "Absolabs Assagai", level: 160 },
	{ jobType: "warrior", setType: "abs", equipType: "weapon", subgroupId: 7, id: "abs-polearm", imgUrl: "./public/images/equips/weapon/abs-polearm.png", name: "Absolabs Lochaber", level: 160 },
	{ jobType: "warrior", setType: "abs", equipType: "weapon", subgroupId: 8, id: "abs-desperado", imgUrl: "./public/images/equips/weapon/abs-desperado.png", name: "Absolabs Blood Seeker", level: 160 },
	{ jobType: "warrior", setType: "abs", equipType: "weapon", subgroupId: 9, id: "abs-elaha", imgUrl: "./public/images/equips/weapon/abs-elaha.png", name: "Absolabs Kusanagi", level: 160 },
	{ jobType: "warrior", setType: "abs", equipType: "weapon", subgroupId: 10, id: "abs-lapis", imgUrl: "./public/images/equips/weapon/abs-lapis.png", name: "Lapis Type 8", level: 160 },
	{ jobType: "warrior", setType: "abs", equipType: "weapon", subgroupId: 11, id: "abs-katana", imgUrl: "./public/images/equips/weapon/abs-katana.png", name: "Absolabs Kogarasumaru", level: 160 },
	{ jobType: "warrior", setType: "abs", equipType: "weapon", subgroupId: 12, id: "abs-tuner", imgUrl: "./public/images/equips/weapon/abs-tuner.png", name: "Absolabs Tuner", level: 160 },

	{ jobType: "warrior", setType: "faf", equipType: "weapon", subgroupId: 0, id: "faf-1h-sword", imgUrl: "./public/images/equips/weapon/faf-1h-sword.png", name: "Fafnir Mystletainn", level: 150 },
	{ jobType: "warrior", setType: "faf", equipType: "weapon", subgroupId: 1, id: "faf-2h-sword", imgUrl: "./public/images/equips/weapon/faf-2h-sword.png", name: "Fafnir Penitencia", level: 150 },
	{ jobType: "warrior", setType: "faf", equipType: "weapon", subgroupId: 2, id: "faf-1h-axe", imgUrl: "./public/images/equips/weapon/faf-1h-axe.png", name: "Fafnir Twin Cleaver", level: 150 },
	{ jobType: "warrior", setType: "faf", equipType: "weapon", subgroupId: 3, id: "faf-2h-axe", imgUrl: "./public/images/equips/weapon/faf-2h-axe.png", name: "Fafnir Battle Cleaver", level: 150 },
	{ jobType: "warrior", setType: "faf", equipType: "weapon", subgroupId: 4, id: "faf-1h-hammer", imgUrl: "./public/images/equips/weapon/faf-1h-hammer.png", name: "Fafnir Golden Hammer", level: 150 },
	{ jobType: "warrior", setType: "faf", equipType: "weapon", subgroupId: 5, id: "faf-2h-hammer", imgUrl: "./public/images/equips/weapon/faf-2h-hammer.png", name: "Fafnir Lightninger", level: 150 },
	{ jobType: "warrior", setType: "faf", equipType: "weapon", subgroupId: 6, id: "faf-spear", imgUrl: "./public/images/equips/weapon/faf-spear.png", name: "Fafnir Bionarc", level: 150 },
	{ jobType: "warrior", setType: "faf", equipType: "weapon", subgroupId: 7, id: "faf-polearm", imgUrl: "./public/images/equips/weapon/faf-polearm.png", name: "Fafnir Moon Glaive", level: 150 },
	{ jobType: "warrior", setType: "faf", equipType: "weapon", subgroupId: 8, id: "faf-desperado", imgUrl: "./public/images/equips/weapon/faf-desperado.png", name: "Fafnir Death Bringer", level: 150 },
	{ jobType: "warrior", setType: "faf", equipType: "weapon", subgroupId: 9, id: "faf-elaha", imgUrl: "./public/images/equips/weapon/faf-elaha.png", name: "Fafnir Gigastein", level: 150 },
	{ jobType: "warrior", setType: "faf", equipType: "weapon", subgroupId: 10, id: "faf-lapis", imgUrl: "./public/images/equips/weapon/faf-lapis.png", name: "Lapis Type 7", level: 150 },
	{ jobType: "warrior", setType: "faf", equipType: "weapon", subgroupId: 11, id: "faf-katana", imgUrl: "./public/images/equips/weapon/faf-katana.png", name: "Fafnir Raven Ring", level: 150 },
	{ jobType: "warrior", setType: "faf", equipType: "weapon", subgroupId: 12, id: "faf-tuner", imgUrl: "./public/images/equips/weapon/faf-tuner.png", name: "Fafnir Forgiveness", level: 150 },

	{ jobType: "warrior", setType: "none", equipType: "weapon", subgroupId: 0, id: "scarlet-1h-sword", imgUrl: "./public/images/equips/weapon/scarlet-1h-sword.png", name: "Scarlet Gladius", level: 145, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "warrior", setType: "none", equipType: "weapon", subgroupId: 1, id: "scarlet-2h-sword", imgUrl: "./public/images/equips/weapon/scarlet-2h-sword.png", name: "Scarlet Claymore", level: 145, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "warrior", setType: "none", equipType: "weapon", subgroupId: 2, id: "scarlet-1h-axe", imgUrl: "./public/images/equips/weapon/scarlet-1h-axe.png", name: "Scarlet War Cleaver", level: 145, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "warrior", setType: "none", equipType: "weapon", subgroupId: 3, id: "scarlet-2h-axe", imgUrl: "./public/images/equips/weapon/scarlet-2h-axe.png", name: "Scarlet Battle Axe", level: 145, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "warrior", setType: "none", equipType: "weapon", subgroupId: 4, id: "scarlet-1h-hammer", imgUrl: "./public/images/equips/weapon/scarlet-1h-hammer.png", name: "Scarlet War Hammer", level: 145, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "warrior", setType: "none", equipType: "weapon", subgroupId: 5, id: "scarlet-2h-hammer", imgUrl: "./public/images/equips/weapon/scarlet-2h-hammer.png", name: "Scarlet Battle Hammer", level: 145, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "warrior", setType: "none", equipType: "weapon", subgroupId: 6, id: "scarlet-spear", imgUrl: "./public/images/equips/weapon/scarlet-spear.png", name: "Scarlet Battle Spear", level: 145, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "warrior", setType: "none", equipType: "weapon", subgroupId: 7, id: "scarlet-polearm", imgUrl: "./public/images/equips/weapon/scarlet-polearm.png", name: "Scarlet Halberd", level: 145, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "warrior", setType: "none", equipType: "weapon", subgroupId: 8, id: "scarlet-desperado", imgUrl: "./public/images/equips/weapon/scarlet-desperado.png", name: "Scarlet Death Bringer", level: 145, isLuckyItem: true, itemPriority: 100 },		
	{ jobType: "warrior", setType: "none", equipType: "weapon", subgroupId: 9, id: "scarlet-katana", imgUrl: "./public/images/equips/weapon/scarlet-katana.png", name: "Scarlet Katana", level: 145, isLuckyItem: true, itemPriority: 100 },

	// SECONDARY
	{ jobType: "warrior", setType: "none", equipType: "secondary", id: "ruin-force-shield", imgUrl: "./public/images/equips/secondary/ruin-force-shield.png", name: "Ruin Force Shield", level: 100 },
	{ jobType: "warrior", setType: "none", equipType: "secondary", subgroupId: 0, id: "deimos-warrior-shield", imgUrl: "./public/images/equips/secondary/deimos-warrior-shield.png", name: "Deimos Warrior Shield", level: 140 },
	{ jobType: "warrior", setType: "none", equipType: "secondary", subgroupId: 1, id: "pnou-medal", imgUrl: "./public/images/equips/secondary/pnou-medal.png", name: "Princess Nou's Medal (Hero)", level: 140 },
	{ jobType: "warrior", setType: "none", equipType: "secondary", subgroupId: 2, id: "pnou-rosario", imgUrl: "./public/images/equips/secondary/pnou-rosario.png", name: "Princess Nou's Rosario (Paladin)", level: 140 },
	{ jobType: "warrior", setType: "none", equipType: "secondary", subgroupId: 3, id: "pnou-flower-chain", imgUrl: "./public/images/equips/secondary/pnou-flower-chain.png", name: "Princess Nou's Flower Chain (Dark Knight)", level: 140 },
	{ jobType: "warrior", setType: "none", equipType: "secondary", subgroupId: 4, id: "pnou-floral-jewel", imgUrl: "./public/images/equips/secondary/pnou-floral-jewel.png", name: "Princess Nou's Floral Jewel (Cygnus Knights)", level: 140 },
	{ jobType: "warrior", setType: "none", equipType: "secondary", subgroupId: 5, id: "pnou-soul-shield", imgUrl: "./public/images/equips/secondary/pnou-soul-shield.png", name: "Princess Nou's Soul Shield (Mihile)", level: 140 },
	{ jobType: "warrior", setType: "none", equipType: "secondary", subgroupId: 6, id: "pnou-megaton-charges", imgUrl: "./public/images/equips/secondary/pnou-megaton-charges.png", name: "Princess Nou's Megaton Charges (Blaster)", level: 140 },
	{ jobType: "warrior", setType: "none", equipType: "secondary", subgroupId: 7, id: "pnou-demon-aegis", imgUrl: "./public/images/equips/secondary/pnou-demon-aegis.png", name: "Princess Nou's Demon Aegis (Demon)", level: 140 },
	{ jobType: "warrior", setType: "none", equipType: "secondary", subgroupId: 9, id: "pnou-pendulum", imgUrl: "./public/images/equips/secondary/pnou-pendulum.png", name: "Princess Nou's Pendulum (Aran)", level: 140 },
	{ jobType: "warrior", setType: "none", equipType: "secondary", subgroupId: 9, id: "pnou-dragon-essence", imgUrl: "./public/images/equips/secondary/pnou-dragon-essence.png", name: "Princess Nou's Dragon Essence (Kaiser)", level: 140 },
	{ jobType: "warrior", setType: "none", equipType: "secondary", subgroupId: 10, id: "pnou-wakizashi", imgUrl: "./public/images/equips/secondary/pnou-wakizashi.png", name: "Princess Nou's Wakizashi (Hayato)", level: 140 },
	{ jobType: "warrior", setType: "none", equipType: "secondary", subgroupId: 11, id: "pnou-bracelet", imgUrl: "./public/images/equips/secondary/pnou-bracelet.png", name: "Princess Nou's Bracelet (Adele)", level: 140 },

	// BELT
	{ jobType: "warrior", setType: "none", equipType: "belt", id: "tyrant-belt", imgUrl: "./public/images/equips/belt/tyrant-belt.png", name: "Tyrant Hyades Belt", level: 150 },

	// EMBLEM
	{ jobType: "warrior", setType: "none", equipType: "emblem", subgroupId: 0, id: "gold-maple-leaf-emblem", imgUrl: "./public/images/equips/emblem/gold-maple-leaf-emblem.png", name: "Gold Maple Leaf Emblem (Explorers)", level: 100 },
	{ jobType: "warrior", setType: "none", equipType: "emblem", subgroupId: 1, id: "gold-cygnus-emblem", imgUrl: "./public/images/equips/emblem/gold-cygnus-emblem.png", name: "Gold Cygnus Emblem (Cygnus Knights)", level: 100 },
	{ jobType: "warrior", setType: "none", equipType: "emblem", subgroupId: 2, id: "gold-resistance-emblem", imgUrl: "./public/images/equips/emblem/gold-resistance-emblem.png", name: "Gold Resistance Emblem (Resistance)", level: 100 },
	{ jobType: "warrior", setType: "none", equipType: "emblem", subgroupId: 3, id: "gold-demon-emblem", imgUrl: "./public/images/equips/emblem/gold-demon-emblem.png", name: "Gold Demon Emblem (Demon)", level: 100 },
	{ jobType: "warrior", setType: "none", equipType: "emblem", subgroupId: 4, id: "gold-aran-emblem", imgUrl: "./public/images/equips/emblem/gold-aran-emblem.png", name: "Gold Heroic Emblem (Aran)", level: 100 },
	{ jobType: "warrior", setType: "none", equipType: "emblem", subgroupId: 5, id: "dragon-emblem", imgUrl: "./public/images/equips/emblem/dragon-emblem.png", name: "Dragon Emblem (Kaiser)", level: 100 },
	{ jobType: "warrior", setType: "none", equipType: "emblem", subgroupId: 6, id: "eternal-time-emblem", imgUrl: "./public/images/equips/emblem/eternal-time-emblem.png", name: "Eternal Time Emblem (Zero)", level: 100 },
	{ jobType: "warrior", setType: "none", equipType: "emblem", subgroupId: 7, id: "gold-crescent-emblem", imgUrl: "./public/images/equips/emblem/gold-crescent-emblem.png", name: "Gold Crescent Emblem (Hayato)", level: 100 },
	{ jobType: "warrior", setType: "none", equipType: "emblem", subgroupId: 8, id: "gold-knight-emblem", imgUrl: "./public/images/equips/emblem/gold-knight-emblem.png", name: "Gold Knight Emblem (Adele)", level: 100 },
];

module.exports = warriorSetItems;