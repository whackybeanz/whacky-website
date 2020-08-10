var archerSetItems = [
	// HAT
	{ jobType: "archer", setType: "acs", equipType: "hat", id: "acs-archer-hat", level: 200 },
	{ jobType: "archer", setType: "abs", equipType: "hat", id: "abs-archer-hat", level: 160 },
	{ jobType: "archer", setType: "faf", equipType: "hat", id: "faf-archer-hat", level: 150 },

	// FACE
	{ jobType: "archer", setType: "none", equipType: "face", id: "meister-symbol", name: "Shiny Red Archer Meister Symbol", level: 130 },

	// TOP
	{ jobType: "archer", setType: "acs", equipType: "top", id: "acs-archer-overall", level: 200, isOverall: true },
	{ jobType: "archer", setType: "abs", equipType: "top", id: "abs-archer-overall", level: 160, isOverall: true },
	{ jobType: "archer", setType: "faf", equipType: "top", id: "faf-archer-top", level: 150 },

	// BOTTOM
	{ jobType: "archer", setType: "faf", equipType: "bottom", id: "faf-archer-bottom", level: 150 },

	// SHOES
	{ jobType: "archer", setType: "acs", equipType: "shoes", id: "acs-shoes", name: "Arcaneshade Archer Shoes", level: 200 },
	{ jobType: "archer", setType: "abs", equipType: "shoes", id: "abs-shoes", name: "Absolabs Trueshot Boots", level: 160 },
	{ jobType: "archer", setType: "none", equipType: "shoes", id: "tyrant-shoes", name: "Tyrant Charon Boots", level: 150 },

	// GLOVES
	{ jobType: "archer", setType: "acs", equipType: "gloves", id: "acs-gloves", name: "Arcaneshade Archer Mitts", level: 200 },
	{ jobType: "archer", setType: "abs", equipType: "gloves", id: "abs-gloves", name: "Absolabs Trueshot Gloves", level: 160 },
	{ jobType: "archer", setType: "none", equipType: "gloves", id: "tyrant-gloves", name: "Tyrant Charon Gloves", level: 150 },

	// CAPE
	{ jobType: "archer", setType: "acs", equipType: "cape", id: "acs-cape", name: "Arcaneshade Archer Cape", level: 200 },
	{ jobType: "archer", setType: "abs", equipType: "cape", id: "abs-cape", name: "Absolabs Trueshot Cloak", level: 160 },
	{ jobType: "archer", setType: "none", equipType: "cape", id: "tyrant-cape", name: "Tyrant Charon Cloak", level: 150 },

	// SHOULDER
	{ jobType: "archer", setType: "acs", equipType: "shoulder", id: "acs-shoulder", name: "Arcaneshade Archer Shoulder", level: 200 },
	{ jobType: "archer", setType: "abs", equipType: "shoulder", id: "abs-shoulder", name: "Absolabs Trueshot Pauldron", level: 160 },

	// WEAPON
	{ jobType: "archer", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 0, id: "genesis-abow", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "archer", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 1, id: "genesis-bow", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "archer", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 2, id: "genesis-dbg", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "archer", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 3, id: "genesis-xbow", level: 200, isLuckyItem: true, itemPriority: 100 },

	{ jobType: "archer", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 0, id: "acs-abow", level: 200 },
	{ jobType: "archer", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 1, id: "acs-bow", level: 200 },
	{ jobType: "archer", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 2, id: "acs-dbg", level: 200 },
	{ jobType: "archer", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 3, id: "acs-xbow", level: 200 },

	{ jobType: "archer", setType: "abs", equipType: "weapon", subgroupId: 0, id: "abs-abow", level: 160 },
	{ jobType: "archer", setType: "abs", equipType: "weapon", subgroupId: 1, id: "abs-bow", level: 160 },
	{ jobType: "archer", setType: "abs", equipType: "weapon", subgroupId: 2, id: "abs-dbg", level: 160 },
	{ jobType: "archer", setType: "abs", equipType: "weapon", subgroupId: 3, id: "abs-xbow", level: 160 },

	{ jobType: "archer", setType: "faf", equipType: "weapon", subgroupId: 0, id: "faf-abow", level: 150 },
	{ jobType: "archer", setType: "faf", equipType: "weapon", subgroupId: 1, id: "faf-bow", level: 150 },
	{ jobType: "archer", setType: "faf", equipType: "weapon", subgroupId: 2, id: "faf-dbg", level: 150 },
	{ jobType: "archer", setType: "faf", equipType: "weapon", subgroupId: 3, id: "faf-xbow", level: 150 },

	{ jobType: "archer", setType: "none", equipType: "weapon", subgroupId: 0, id: "scarlet-bow", level: 145, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "archer", setType: "none", equipType: "weapon", subgroupId: 1, id: "scarlet-dbg", level: 145, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "archer", setType: "none", equipType: "weapon", subgroupId: 2, id: "scarlet-xbow", level: 145, isLuckyItem: true, itemPriority: 100 },

	// SECONDARY
	{ jobType: "archer", setType: "none", equipType: "secondary", subgroupId: 0, id: "pnou-feather", level: 140 },
	{ jobType: "archer", setType: "none", equipType: "secondary", subgroupId: 1, id: "pnou-wreath", level: 140 },
	{ jobType: "archer", setType: "none", equipType: "secondary", subgroupId: 2, id: "pnou-relic", level: 140 },
	{ jobType: "archer", setType: "none", equipType: "secondary", subgroupId: 3, id: "pnou-floral-jewel", level: 140 },
	{ jobType: "archer", setType: "none", equipType: "secondary", subgroupId: 4, id: "pnou-arrowhead", level: 140 },
	{ jobType: "archer", setType: "none", equipType: "secondary", subgroupId: 5, id: "pnou-arrow", level: 140 },

	// BELT
	{ jobType: "archer", setType: "none", equipType: "belt", id: "tyrant-belt", name: "Tyrant Charon Belt", level: 150 },

	// EMBLEM
	{ jobType: "archer", setType: "none", equipType: "emblem", subgroupId: 0, id: "gold-maple-leaf-emblem", level: 100 },
	{ jobType: "archer", setType: "none", equipType: "emblem", subgroupId: 1, id: "gold-cygnus-emblem", level: 100 },
	{ jobType: "archer", setType: "none", equipType: "emblem", subgroupId: 2, id: "gold-resistance-emblem", level: 100 },
	{ jobType: "archer", setType: "none", equipType: "emblem", subgroupId: 3, id: "gold-merc-emblem", level: 100 },
];

module.exports = archerSetItems;