var archerSetItems = [
	// HAT
	{ jobType: "archer", setType: "acs", equipType: "hat", id: "acs-archer-hat", imgUrl: "./public/images/equips/hat/acs-archer-hat.png", name: "Arcaneshade Archer Hat", level: 200 },
	{ jobType: "archer", setType: "abs", equipType: "hat", id: "abs-archer-hat", imgUrl: "./public/images/equips/hat/abs-trueshot-hood.png", name: "Absolabs Trueshot Hood", level: 160 },
	{ jobType: "archer", setType: "faf", equipType: "hat", id: "faf-archer-hat", imgUrl: "./public/images/equips/hat/faf-archer-hat.png", name: "Highness Ranger Beret", level: 150 },

	// FACE
	{ jobType: "archer", setType: "none", equipType: "face", id: "meister-symbol", imgUrl: "./public/images/equips/face/meister-symbol.png", name: "Shiny Red Archer Meister Symbol", level: 130 },

	// TOP
	{ jobType: "archer", setType: "acs", equipType: "top", id: "acs-archer-overall", imgUrl: "./public/images/equips/overall/acs-archer-suit.png", name: "Arcaneshade Archer Suit", level: 200, isOverall: true },
	{ jobType: "archer", setType: "abs", equipType: "top", id: "abs-archer-overall", imgUrl: "./public/images/equips/overall/abs-archer-overall.png", name: "Absolabs Trueshot Coat", level: 160, isOverall: true },
	{ jobType: "archer", setType: "faf", equipType: "top", id: "faf-archer-top", imgUrl: "./public/images/equips/top/faf-archer-top.png", name: "Eagle Eye Ranger Hood", level: 150 },

	// BOTTOM
	{ jobType: "archer", setType: "faf", equipType: "bottom", id: "faf-archer-bottom", imgUrl: "./public/images/equips/bottom/faf-archer-bottom.png", name: "Trickster Ranger Pants", level: 150 },

	// SHOES
	{ jobType: "archer", setType: "acs", equipType: "shoes", id: "acs-archer-shoes", imgUrl: "./public/images/equips/shoes/acs-shoes.png", name: "Arcaneshade Archer Shoes", level: 200 },
	{ jobType: "archer", setType: "abs", equipType: "shoes", id: "abs-archer-shoes", imgUrl: "./public/images/equips/shoes/abs-shoes.png", name: "Absolabs Trueshot Boots", level: 160 },
	{ jobType: "archer", setType: "none", equipType: "shoes", id: "tyrant-shoes", imgUrl: "./public/images/equips/shoes/tyrant-shoes.png", name: "Tyrant Charon Boots", level: 150 },

	// GLOVES
	{ jobType: "archer", setType: "acs", equipType: "gloves", id: "acs-archer-glove", imgUrl: "./public/images/equips/gloves/acs-glove.png", name: "Arcaneshade Archer Mitts", level: 200 },
	{ jobType: "archer", setType: "abs", equipType: "gloves", id: "abs-archer-glove", imgUrl: "./public/images/equips/gloves/abs-glove.png", name: "Absolabs Trueshot Gloves", level: 160 },
	{ jobType: "archer", setType: "none", equipType: "gloves", id: "tyrant-gloves", imgUrl: "./public/images/equips/gloves/tyrant-gloves.png", name: "Tyrant Charon Gloves", level: 150 },

	// CAPE
	{ jobType: "archer", setType: "acs", equipType: "cape", id: "acs-archer-cape", imgUrl: "./public/images/equips/cape/acs-cape.png", name: "Arcaneshade Archer Cape", level: 200 },
	{ jobType: "archer", setType: "abs", equipType: "cape", id: "abs-archer-cape", imgUrl: "./public/images/equips/cape/abs-cape.png", name: "Absolabs Trueshot Cloak", level: 160 },
	{ jobType: "archer", setType: "none", equipType: "cape", id: "tyrant-cape", imgUrl: "./public/images/equips/cape/tyrant-cape.png", name: "Tyrant Charon Cloak", level: 150 },

	// SHOULDER
	{ jobType: "archer", setType: "acs", equipType: "shoulder", id: "acs-archer-shoulder", imgUrl: "./public/images/equips/shoulder/acs-shoulder.png", name: "Arcaneshade Archer Shoulder", level: 200 },
	{ jobType: "archer", setType: "abs", equipType: "shoulder", id: "abs-archer-shoulder", imgUrl: "./public/images/equips/shoulder/abs-shoulder.png", name: "Absolabs Trueshot Pauldron", level: 160 },

	// WEAPON
	{ jobType: "archer", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 0, id: "genesis-abow", imgUrl: "./public/images/equips/weapon/genesis-abow.png", name: "Genesis Ancient Bow", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "archer", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 1, id: "genesis-bow", imgUrl: "./public/images/equips/weapon/genesis-bow.png", name: "Genesis Bow", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "archer", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 2, id: "genesis-dbg", imgUrl: "./public/images/equips/weapon/genesis-dbg.png", name: "Genesis Dual Bowgun", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "archer", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 3, id: "genesis-xbow", imgUrl: "./public/images/equips/weapon/genesis-xbow.png", name: "Genesis Crossbow", level: 200, isLuckyItem: true, itemPriority: 100 },

	{ jobType: "archer", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 0, id: "acs-abow", imgUrl: "./public/images/equips/weapon/acs-abow.png", name: "Arcaneshade Ancient Bow", level: 200 },
	{ jobType: "archer", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 1, id: "acs-bow", imgUrl: "./public/images/equips/weapon/acs-bow.png", name: "Arcaneshade Bow", level: 200 },
	{ jobType: "archer", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 2, id: "acs-dbg", imgUrl: "./public/images/equips/weapon/acs-dbg.png", name: "Arcaneshade Dual Bowgun", level: 200 },
	{ jobType: "archer", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 3, id: "acs-xbow", imgUrl: "./public/images/equips/weapon/acs-xbow.png", name: "Arcaneshade Crossbow", level: 200 },

	{ jobType: "archer", setType: "abs", equipType: "weapon", subgroupId: 0, id: "abs-abow", imgUrl: "./public/images/equips/weapon/abs-abow.png", name: "Absolabs Ancient Bow", level: 160 },
	{ jobType: "archer", setType: "abs", equipType: "weapon", subgroupId: 1, id: "abs-bow", imgUrl: "./public/images/equips/weapon/abs-bow.png", name: "Absolabs Ichaival", level: 160 },
	{ jobType: "archer", setType: "abs", equipType: "weapon", subgroupId: 2, id: "abs-dbg", imgUrl: "./public/images/equips/weapon/abs-dbg.png", name: "Absolabs Twin Astras", level: 160 },
	{ jobType: "archer", setType: "abs", equipType: "weapon", subgroupId: 3, id: "abs-xbow", imgUrl: "./public/images/equips/weapon/abs-xbow.png", name: "Absolabs Astra Wing", level: 160 },

	{ jobType: "archer", setType: "faf", equipType: "weapon", subgroupId: 0, id: "faf-abow", imgUrl: "./public/images/equips/weapon/faf-abow.png", name: "Fafnir Ancient Bow", level: 150 },
	{ jobType: "archer", setType: "faf", equipType: "weapon", subgroupId: 1, id: "faf-bow", imgUrl: "./public/images/equips/weapon/faf-bow.png", name: "Fafnir Bow", level: 150 },
	{ jobType: "archer", setType: "faf", equipType: "weapon", subgroupId: 2, id: "faf-dbg", imgUrl: "./public/images/equips/weapon/faf-dbg.png", name: "Fafnir Dual Bowguns", level: 150 },
	{ jobType: "archer", setType: "faf", equipType: "weapon", subgroupId: 3, id: "faf-xbow", imgUrl: "./public/images/equips/weapon/faf-xbow.png", name: "Fafnir Crossbow", level: 150 },

	{ jobType: "archer", setType: "none", equipType: "weapon", subgroupId: 0, id: "scarlet-bow", imgUrl: "./public/images/equips/weapon/scarlet-bow.png", name: "Scarlet Battle Bow", level: 145, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "archer", setType: "none", equipType: "weapon", subgroupId: 1, id: "scarlet-dbg", imgUrl: "./public/images/equips/weapon/scarlet-dbg.png", name: "Scarlet Eagle Wing", level: 145, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "archer", setType: "none", equipType: "weapon", subgroupId: 2, id: "scarlet-xbow", imgUrl: "./public/images/equips/weapon/scarlet-xbow.png", name: "Scarlet Crossbow", level: 145, isLuckyItem: true, itemPriority: 100 },

	// SECONDARY
	{ jobType: "archer", setType: "none", equipType: "secondary", subgroupId: 0, id: "pnou-feather", imgUrl: "./public/images/equips/secondary/pnou-feather.png", name: "Princess Nou's Feather (Bowmaster)", level: 140 },
	{ jobType: "archer", setType: "none", equipType: "secondary", subgroupId: 1, id: "pnou-wreath", imgUrl: "./public/images/equips/secondary/pnou-wreath.png", name: "Princess Nou's Wreath (Crossbow Master)", level: 140 },
	{ jobType: "archer", setType: "none", equipType: "secondary", subgroupId: 2, id: "pnou-relic", imgUrl: "./public/images/equips/secondary/pnou-relic.png", name: "Princess Nou's Relic (Pathfinder)", level: 140 },
	{ jobType: "archer", setType: "none", equipType: "secondary", subgroupId: 3, id: "pnou-floral-jewel", imgUrl: "./public/images/equips/secondary/pnou-floral-jewel.png", name: "Princess Nou's Floral Jewel (Cygnus Knights)", level: 140 },
	{ jobType: "archer", setType: "none", equipType: "secondary", subgroupId: 4, id: "pnou-arrowhead", imgUrl: "./public/images/equips/secondary/pnou-arrowhead.png", name: "Princess Nou's Relic (Wild Hunter)", level: 140 },
	{ jobType: "archer", setType: "none", equipType: "secondary", subgroupId: 5, id: "pnou-arrow", imgUrl: "./public/images/equips/secondary/pnou-arrow.png", name: "Princess Nou's Black Magic Arrow (Mercedes)", level: 140 },

	// BELT
	{ jobType: "archer", setType: "none", equipType: "belt", id: "tyrant-belt", imgUrl: "./public/images/equips/belt/tyrant-belt.png", name: "Tyrant Charon Belt", level: 150 },

	// EMBLEM
	{ jobType: "archer", setType: "none", equipType: "emblem", subgroupId: 0, id: "gold-maple-leaf-emblem", imgUrl: "./public/images/equips/emblem/gold-maple-leaf-emblem.png", name: "Gold Maple Leaf Emblem (Explorers)", level: 100 },
	{ jobType: "archer", setType: "none", equipType: "emblem", subgroupId: 1, id: "gold-cygnus-emblem", imgUrl: "./public/images/equips/emblem/gold-cygnus-emblem.png", name: "Gold Cygnus Emblem (Cygnus Knights)", level: 100 },
	{ jobType: "archer", setType: "none", equipType: "emblem", subgroupId: 2, id: "gold-resistance-emblem", imgUrl: "./public/images/equips/emblem/gold-resistance-emblem.png", name: "Gold Resistance Emblem (Resistance)", level: 100 },
	{ jobType: "archer", setType: "none", equipType: "emblem", subgroupId: 3, id: "gold-merc-emblem", imgUrl: "./public/images/equips/emblem/gold-merc-emblem.png", name: "Gold Heroic Emblem (Mercedes)", level: 100 },
];

module.exports = archerSetItems;