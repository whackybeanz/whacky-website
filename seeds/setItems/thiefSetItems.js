var thiefSetItems = [
	// HAT
	{ jobType: "thief", setType: "acs", equipType: "hat", id: "acs-thief-hat", imgUrl: "./public/images/equips/hat/acs-bandit-hat.png", name: "Arcaneshade Bandit Hat", level: 200 },
	{ jobType: "thief", setType: "abs", equipType: "hat", id: "abs-thief-hat", imgUrl: "./public/images/equips/hat/abs-shadow-beret.png", name: "Absolabs Shadow Beret", level: 160 },
	{ jobType: "thief", setType: "faf", equipType: "hat", id: "faf-thief-hat", imgUrl: "./public/images/equips/hat/faf-thief-hat.png", name: "Highness Assassin Bonnet", level: 150 },

	// FACE
	{ jobType: "thief", setType: "none", equipType: "face", id: "meister-symbol", imgUrl: "./public/images/equips/face/meister-symbol.png", name: "Shiny Red Thief Meister Symbol", level: 130 },

	// TOP
	{ jobType: "thief", setType: "acs", equipType: "top", id: "acs-bandit-overall", imgUrl: "./public/images/equips/overall/acs-bandit-suit.png", name: "Arcaneshade Bandit Suit", level: 200, isOverall: true },
	{ jobType: "thief", setType: "abs", equipType: "top", id: "abs-thief-overall", imgUrl: "./public/images/equips/overall/abs-thief-overall.png", name: "Absolabs Shadow Suit", level: 160, isOverall: true },
	{ jobType: "thief", setType: "faf", equipType: "top", id: "faf-thief-top", imgUrl: "./public/images/equips/top/faf-thief-top.png", name: "Eagle Eye Assassin Shirt", level: 150 },

	// BOTTOM
	{ jobType: "thief", setType: "faf", equipType: "bottom", id: "faf-thief-bottom", imgUrl: "./public/images/equips/bottom/faf-thief-bottom.png", name: "Trickster Assassin Pants", level: 150 },

	// SHOES
	{ jobType: "thief", setType: "acs", equipType: "shoes", id: "acs-bandit-shoes", imgUrl: "./public/images/equips/shoes/acs-shoes.png", name: "Arcaneshade Bandit Shoes", level: 200 },
	{ jobType: "thief", setType: "abs", equipType: "shoes", id: "abs-thief-shoes", imgUrl: "./public/images/equips/shoes/abs-shoes.png", name: "Absolabs Shadow Boots", level: 160 },
	{ jobType: "thief", setType: "none", equipType: "shoes", id: "tyrant-shoes", imgUrl: "./public/images/equips/shoes/tyrant-shoes.png", name: "Tyrant Lycaon Boots", level: 150 },

	// GLOVES
	{ jobType: "thief", setType: "acs", equipType: "gloves", id: "acs-bandit-glove", imgUrl: "./public/images/equips/gloves/acs-glove.png", name: "Arcaneshade Bandit Mitts", level: 200 },
	{ jobType: "thief", setType: "abs", equipType: "gloves", id: "abs-thief-glove", imgUrl: "./public/images/equips/gloves/abs-glove.png", name: "Absolabs Shadow Vambracers", level: 160 },
	{ jobType: "thief", setType: "none", equipType: "gloves", id: "tyrant-gloves", imgUrl: "./public/images/equips/gloves/tyrant-gloves.png", name: "Tyrant Lycaon Gloves", level: 150 },

	// CAPE
	{ jobType: "thief", setType: "acs", equipType: "cape", id: "acs-bandit-cape", imgUrl: "./public/images/equips/cape/acs-cape.png", name: "Arcaneshade Bandit Cape", level: 200 },
	{ jobType: "thief", setType: "abs", equipType: "cape", id: "abs-thief-cape", imgUrl: "./public/images/equips/cape/abs-cape.png", name: "Absolabs Shadow Cloak", level: 160 },
	{ jobType: "thief", setType: "none", equipType: "cape", id: "tyrant-cape", imgUrl: "./public/images/equips/cape/tyrant-cape.png", name: "Tyrant Lycaon Cloak", level: 150 },

	// SHOULDER
	{ jobType: "thief", setType: "acs", equipType: "shoulder", id: "acs-bandit-shoulder", imgUrl: "./public/images/equips/shoulder/acs-shoulder.png", name: "Arcaneshade Bandit Shoulder", level: 200 },
	{ jobType: "thief", setType: "abs", equipType: "shoulder", id: "abs-thief-shoulder", imgUrl: "./public/images/equips/shoulder/abs-shoulder.png", name: "Absolabs Shadow Pauldron", level: 160 },

	// WEAPON
	{ jobType: "thief", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 0, id: "genesis-dagger", imgUrl: "./public/images/equips/weapon/genesis-dagger.png", name: "Genesis Dagger", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "thief", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 1, id: "genesis-cane", imgUrl: "./public/images/equips/weapon/genesis-cane.png", name: "Genesis Cane", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "thief", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 2, id: "genesis-claw", imgUrl: "./public/images/equips/weapon/genesis-claw.png", name: "Genesis Guards", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "thief", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 3, id: "genesis-energy-sword", imgUrl: "./public/images/equips/weapon/genesis-energy-sword.png", name: "Genesis Energy Chain", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "thief", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 4, id: "genesis-energy-chain", imgUrl: "./public/images/equips/weapon/genesis-energy-chain.png", name: "Genesis Chain", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "thief", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 5, id: "genesis-buchae", imgUrl: "./public/images/equips/weapon/genesis-buchae.png", name: "Genesis Buchae", level: 200, isLuckyItem: true, itemPriority: 100 },

	{ jobType: "thief", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 0, id: "acs-dagger", imgUrl: "./public/images/equips/weapon/acs-dagger.png", name: "Arcaneshade Dagger", level: 200 },
	{ jobType: "thief", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 1, id: "acs-cane", imgUrl: "./public/images/equips/weapon/acs-cane.png", name: "Arcaneshade Cane", level: 200 },
	{ jobType: "thief", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 2, id: "acs-claw", imgUrl: "./public/images/equips/weapon/acs-claw.png", name: "Arcaneshade Guards", level: 200 },
	{ jobType: "thief", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 3, id: "acs-energy-sword", imgUrl: "./public/images/equips/weapon/acs-energy-sword.png", name: "Arcaneshade Energy Sword", level: 200 },
	{ jobType: "thief", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 4, id: "acs-energy-chain", imgUrl: "./public/images/equips/weapon/acs-energy-chain.png", name: "Arcaneshade Energy Chain", level: 200 },
	{ jobType: "thief", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 5, id: "acs-buchae", imgUrl: "./public/images/equips/weapon/acs-buchae.png", name: "Arcaneshade Transcendence Buchae", level: 200 },

	{ jobType: "thief", setType: "abs", equipType: "weapon", subgroupId: 0, id: "abs-dagger", imgUrl: "./public/images/equips/weapon/abs-dagger.png", name: "Absolabs Shredder", level: 160 },
	{ jobType: "thief", setType: "abs", equipType: "weapon", subgroupId: 1, id: "abs-cane", imgUrl: "./public/images/equips/weapon/abs-cane.png", name: "Absolabs Sceptre", level: 160 },
	{ jobType: "thief", setType: "abs", equipType: "weapon", subgroupId: 2, id: "abs-claw", imgUrl: "./public/images/equips/weapon/abs-claw.png", name: "Absolabs Tarantula", level: 160 },
	{ jobType: "thief", setType: "abs", equipType: "weapon", subgroupId: 3, id: "abs-energy-sword", imgUrl: "./public/images/equips/weapon/abs-energy-sword.png", name: "Absolabs Electro Saber", level: 160 },
	{ jobType: "thief", setType: "abs", equipType: "weapon", subgroupId: 4, id: "abs-energy-chain", imgUrl: "./public/images/equips/weapon/abs-energy-chain.png", name: "Absolabs Energy Chain", level: 160 },
	{ jobType: "thief", setType: "abs", equipType: "weapon", subgroupId: 5, id: "abs-buchae", imgUrl: "./public/images/equips/weapon/abs-buchae.png", name: "Absolabs Monster Buchae", level: 160 },

	{ jobType: "thief", setType: "faf", equipType: "weapon", subgroupId: 0, id: "faf-dagger", imgUrl: "./public/images/equips/weapon/faf-dagger.png", name: "Fafnir Damascus", level: 150 },
	{ jobType: "thief", setType: "faf", equipType: "weapon", subgroupId: 1, id: "faf-cane", imgUrl: "./public/images/equips/weapon/faf-cane.png", name: "Fafnir Clair Ciel", level: 150 },
	{ jobType: "thief", setType: "faf", equipType: "weapon", subgroupId: 2, id: "faf-claw", imgUrl: "./public/images/equips/weapon/faf-claw.png", name: "Fafnir Risk Holder", level: 150 },
	{ jobType: "thief", setType: "faf", equipType: "weapon", subgroupId: 3, id: "faf-energy-sword", imgUrl: "./public/images/equips/weapon/faf-energy-sword.png", name: "Fafnir Split Edge", level: 150 },
	{ jobType: "thief", setType: "faf", equipType: "weapon", subgroupId: 4, id: "faf-energy-chain", imgUrl: "./public/images/equips/weapon/faf-energy-chain.png", name: "Fafnir Energy Chain", level: 150 },
	{ jobType: "thief", setType: "faf", equipType: "weapon", subgroupId: 5, id: "faf-buchae", imgUrl: "./public/images/equips/weapon/faf-buchae.png", name: "Fafnir Dragon Buchae", level: 150 },

	{ jobType: "thief", setType: "none", equipType: "weapon", subgroupdId: 0, id: "scarlet-dagger", imgUrl: "./public/images/equips/weapon/scarlet-dagger.png", name: "Scarlet Qatar", level: 145, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "thief", setType: "none", equipType: "weapon", subgroupdId: 1, id: "scarlet-cane", imgUrl: "./public/images/equips/weapon/scarlet-cane.png", name: "Scarlet Persona", level: 145, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "thief", setType: "none", equipType: "weapon", subgroupdId: 2, id: "scarlet-claw", imgUrl: "./public/images/equips/weapon/scarlet-claw.png", name: "Scarlet Dark Slane", level: 145, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "thief", setType: "none", equipType: "weapon", subgroupdId: 3, id: "scarlet-energy-sword", imgUrl: "./public/images/equips/weapon/scarlet-energy-sword.png", name: "Scarlet Split Edge", level: 145, isLuckyItem: true, itemPriority: 100 },

	// SECONDARY
	{ jobType: "thief", setType: "none", equipType: "secondary", groupId: 2001, subgroupId: 0, id: "genesis-katara", imgUrl: "./public/images/equips/weapon/genesis-katara.png", name: "Genesis Blade", level: 200 },
	{ jobType: "thief", setType: "none", equipType: "secondary", groupId: 2000, subgroupId: 0, id: "acs-katara", imgUrl: "./public/images/equips/weapon/acs-katara.png", name: "Arcaneshade Blade", level: 200 },
	{ jobType: "thief", setType: "none", equipType: "secondary", id: "abs-katara", imgUrl: "./public/images/equips/weapon/abs-katara.png", name: "Absolabs Katara", level: 160 },
	{ jobType: "thief", setType: "none", equipType: "secondary", id: "faf-katara", imgUrl: "./public/images/equips/weapon/faf-katara.png", name: "Fafnir Rapid Edge", level: 150 },
	{ jobType: "thief", setType: "none", equipType: "secondary", id: "scarlet-katara", imgUrl: "./public/images/equips/weapon/scarlet-katara.png", name: "Scarlet Blade", level: 145 },
	{ jobType: "thief", setType: "none", equipType: "secondary", subgroupId: 0, id: "deimos-darkness-shield", imgUrl: "./public/images/equips/secondary/deimos-darkness-shield.png", name: "Deimos Darkness Shield", level: 140 },
	{ jobType: "thief", setType: "none", equipType: "secondary", subgroupId: 1, id: "pnou-purple-shadow", imgUrl: "./public/images/equips/secondary/pnou-purple-shadow.png", name: "Princess Nou's Purple Shadow (Shadower)", level: 140 },
	{ jobType: "thief", setType: "none", equipType: "secondary", subgroupId: 2, id: "pnou-charm", imgUrl: "./public/images/equips/secondary/pnou-charm.png", name: "Princess Nou's Charm (Night Lord)", level: 140 },
	{ jobType: "thief", setType: "none", equipType: "secondary", subgroupId: 3, id: "pnou-katara", imgUrl: "./public/images/equips/secondary/pnou-katara.png", name: "Princess Nou's Poisoned Sword (Dual Blade)", level: 140 },
	{ jobType: "thief", setType: "none", equipType: "secondary", subgroupId: 4, id: "pnou-floral-jewel", imgUrl: "./public/images/equips/secondary/pnou-floral-jewel.png", name: "Princess Nou's Floral Jewel (Cygnus Knights)", level: 140 },
	{ jobType: "thief", setType: "none", equipType: "secondary", subgroupId: 5, id: "pnou-controller", imgUrl: "./public/images/equips/secondary/pnou-controller.png", name: "Princess Nou's Controller (Xenon)", level: 140 },
	{ jobType: "thief", setType: "none", equipType: "secondary", subgroupId: 6, id: "pnou-carte", imgUrl: "./public/images/equips/secondary/pnou-carte.png", name: "Princess Nou's Carte (Phantom)", level: 140 },
	{ jobType: "thief", setType: "none", equipType: "secondary", subgroupId: 7, id: "pnou-transmitter", imgUrl: "./public/images/equips/secondary/pnou-transmitter.png", name: "Princess Nou's Transmitter (Cadena)", level: 140 },
	{ jobType: "thief", setType: "none", equipType: "secondary", subgroupId: 8, id: "pnou-tassel", imgUrl: "./public/images/equips/secondary/pnou-tassel.png", name: "Princess Nou's Buchae Tassel (Ho Young)", level: 140 },

	// BELT
	{ jobType: "thief", setType: "none", equipType: "belt", id: "tyrant-belt", imgUrl: "./public/images/equips/belt/tyrant-belt.png", name: "Tyrant Lycaon Belt", level: 150 },

	// EMBLEM
	{ jobType: "thief", setType: "none", equipType: "emblem", subgroupId: 0, id: "gold-maple-leaf-emblem", imgUrl: "./public/images/equips/emblem/gold-maple-leaf-emblem.png", name: "Gold Maple Leaf Emblem (Explorers)", level: 100 },
	{ jobType: "thief", setType: "none", equipType: "emblem", subgroupId: 1, id: "gold-cygnus-emblem", imgUrl: "./public/images/equips/emblem/gold-cygnus-emblem.png", name: "Gold Cygnus Emblem (Cygnus Knights)", level: 100 },
	{ jobType: "thief", setType: "none", equipType: "emblem", subgroupId: 2, id: "gold-resistance-emblem", imgUrl: "./public/images/equips/emblem/gold-resistance-emblem.png", name: "Gold Resistance Emblem (Resistance)", level: 100 },
	{ jobType: "thief", setType: "none", equipType: "emblem", subgroupId: 3, id: "gold-phantom-emblem", imgUrl: "./public/images/equips/emblem/gold-phantom-emblem.png", name: "Gold Heroic Emblem (Phantom)", level: 100 },
	{ jobType: "thief", setType: "none", equipType: "emblem", subgroupId: 4, id: "gold-agent-emblem", imgUrl: "./public/images/equips/emblem/gold-agent-emblem.png", name: "Gold Agent Emblem (Cadena)", level: 100 },
	{ jobType: "thief", setType: "none", equipType: "emblem", subgroupId: 5, id: "gold-heh-emblem", imgUrl: "./public/images/equips/emblem/gold-heh-emblem.png", name: "Gold Heaven, Earth and Human Emblem (Ho Young)", level: 100 },
];

module.exports = thiefSetItems;