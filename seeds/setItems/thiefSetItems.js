var thiefSetItems = [
	// HAT
	{ jobType: "thief", setType: "acs", equipType: "hat", id: "acs-thief-hat", level: 200 },
	{ jobType: "thief", setType: "abs", equipType: "hat", id: "abs-thief-hat", level: 160 },
	{ jobType: "thief", setType: "faf", equipType: "hat", id: "faf-thief-hat", level: 150 },

	// FACE
	{ jobType: "thief", setType: "none", equipType: "face", id: "meister-symbol", name: "Shiny Red Thief Meister Symbol", level: 130 },

	// TOP
	{ jobType: "thief", setType: "acs", equipType: "top", id: "acs-thief-overall", level: 200, isOverall: true },
	{ jobType: "thief", setType: "abs", equipType: "top", id: "abs-thief-overall", level: 160, isOverall: true },
	{ jobType: "thief", setType: "faf", equipType: "top", id: "faf-thief-top", level: 150 },

	// BOTTOM
	{ jobType: "thief", setType: "faf", equipType: "bottom", id: "faf-thief-bottom", level: 150 },

	// SHOES
	{ jobType: "thief", setType: "acs", equipType: "shoes", id: "acs-shoes", name: "Arcaneshade Bandit Shoes", level: 200 },
	{ jobType: "thief", setType: "abs", equipType: "shoes", id: "abs-shoes", name: "Absolabs Shadow Boots", level: 160 },
	{ jobType: "thief", setType: "none", equipType: "shoes", id: "tyrant-shoes", name: "Tyrant Lycaon Boots", level: 150 },

	// GLOVES
	{ jobType: "thief", setType: "acs", equipType: "gloves", id: "acs-gloves", name: "Arcaneshade Bandit Mitts", level: 200 },
	{ jobType: "thief", setType: "abs", equipType: "gloves", id: "abs-gloves", name: "Absolabs Shadow Vambracers", level: 160 },
	{ jobType: "thief", setType: "none", equipType: "gloves", id: "tyrant-gloves", name: "Tyrant Lycaon Gloves", level: 150 },

	// CAPE
	{ jobType: "thief", setType: "acs", equipType: "cape", id: "acs-cape", name: "Arcaneshade Bandit Cape", level: 200 },
	{ jobType: "thief", setType: "abs", equipType: "cape", id: "abs-cape", name: "Absolabs Shadow Cloak", level: 160 },
	{ jobType: "thief", setType: "none", equipType: "cape", id: "tyrant-cape", name: "Tyrant Lycaon Cloak", level: 150 },

	// SHOULDER
	{ jobType: "thief", setType: "acs", equipType: "shoulder", id: "acs-shoulder", name: "Arcaneshade Bandit Shoulder", level: 200 },
	{ jobType: "thief", setType: "abs", equipType: "shoulder", id: "abs-shoulder", name: "Absolabs Shadow Pauldron", level: 160 },

	// WEAPON
	{ jobType: "thief", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 0, id: "genesis-dagger", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "thief", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 1, id: "genesis-cane", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "thief", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 2, id: "genesis-claw", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "thief", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 3, id: "genesis-energy-sword", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "thief", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 4, id: "genesis-energy-chain", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "thief", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 5, id: "genesis-buchae", level: 200, isLuckyItem: true, itemPriority: 100 },

	{ jobType: "thief", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 0, id: "acs-dagger", level: 200 },
	{ jobType: "thief", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 1, id: "acs-cane", level: 200 },
	{ jobType: "thief", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 2, id: "acs-claw", level: 200 },
	{ jobType: "thief", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 3, id: "acs-energy-sword", level: 200 },
	{ jobType: "thief", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 4, id: "acs-energy-chain", level: 200 },
	{ jobType: "thief", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 5, id: "acs-buchae", level: 200 },

	{ jobType: "thief", setType: "abs", equipType: "weapon", subgroupId: 0, id: "abs-dagger", level: 160 },
	{ jobType: "thief", setType: "abs", equipType: "weapon", subgroupId: 1, id: "abs-cane", level: 160 },
	{ jobType: "thief", setType: "abs", equipType: "weapon", subgroupId: 2, id: "abs-claw", level: 160 },
	{ jobType: "thief", setType: "abs", equipType: "weapon", subgroupId: 3, id: "abs-energy-sword", level: 160 },
	{ jobType: "thief", setType: "abs", equipType: "weapon", subgroupId: 4, id: "abs-energy-chain", level: 160 },
	{ jobType: "thief", setType: "abs", equipType: "weapon", subgroupId: 5, id: "abs-buchae", level: 160 },

	{ jobType: "thief", setType: "faf", equipType: "weapon", subgroupId: 0, id: "faf-dagger", level: 150 },
	{ jobType: "thief", setType: "faf", equipType: "weapon", subgroupId: 1, id: "faf-cane", level: 150 },
	{ jobType: "thief", setType: "faf", equipType: "weapon", subgroupId: 2, id: "faf-claw", level: 150 },
	{ jobType: "thief", setType: "faf", equipType: "weapon", subgroupId: 3, id: "faf-energy-sword", level: 150 },
	{ jobType: "thief", setType: "faf", equipType: "weapon", subgroupId: 4, id: "faf-energy-chain", level: 150 },
	{ jobType: "thief", setType: "faf", equipType: "weapon", subgroupId: 5, id: "faf-buchae", level: 150 },

	{ jobType: "thief", setType: "none", equipType: "weapon", subgroupdId: 0, id: "scarlet-dagger", level: 145, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "thief", setType: "none", equipType: "weapon", subgroupdId: 1, id: "scarlet-cane", level: 145, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "thief", setType: "none", equipType: "weapon", subgroupdId: 2, id: "scarlet-claw", level: 145, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "thief", setType: "none", equipType: "weapon", subgroupdId: 3, id: "scarlet-energy-sword", level: 145, isLuckyItem: true, itemPriority: 100 },

	// SECONDARY
	{ jobType: "thief", setType: "none", equipType: "secondary", groupId: 2001, subgroupId: 0, id: "genesis-katara", level: 200 },
	{ jobType: "thief", setType: "none", equipType: "secondary", groupId: 2000, subgroupId: 0, id: "acs-katara", level: 200 },
	{ jobType: "thief", setType: "none", equipType: "secondary", id: "abs-katara", level: 160 },
	{ jobType: "thief", setType: "none", equipType: "secondary", id: "faf-katara", level: 150 },
	{ jobType: "thief", setType: "none", equipType: "secondary", id: "scarlet-katara", level: 145 },
	{ jobType: "thief", setType: "none", equipType: "secondary", subgroupId: 0, id: "deimos-darkness-shield", level: 140 },
	{ jobType: "thief", setType: "none", equipType: "secondary", subgroupId: 1, id: "pnou-purple-shadow", level: 140 },
	{ jobType: "thief", setType: "none", equipType: "secondary", subgroupId: 2, id: "pnou-charm", level: 140 },
	{ jobType: "thief", setType: "none", equipType: "secondary", subgroupId: 3, id: "pnou-katara", level: 140 },
	{ jobType: "thief", setType: "none", equipType: "secondary", subgroupId: 4, id: "pnou-floral-jewel", level: 140 },
	{ jobType: "thief", setType: "none", equipType: "secondary", subgroupId: 5, id: "pnou-controller", level: 140 },
	{ jobType: "thief", setType: "none", equipType: "secondary", subgroupId: 6, id: "pnou-carte", level: 140 },
	{ jobType: "thief", setType: "none", equipType: "secondary", subgroupId: 7, id: "pnou-transmitter", level: 140 },
	{ jobType: "thief", setType: "none", equipType: "secondary", subgroupId: 8, id: "pnou-tassel", level: 140 },

	// BELT
	{ jobType: "thief", setType: "none", equipType: "belt", id: "tyrant-belt", name: "Tyrant Lycaon Belt", level: 150 },

	// EMBLEM
	{ jobType: "thief", setType: "none", equipType: "emblem", subgroupId: 0, id: "gold-maple-leaf-emblem", level: 100 },
	{ jobType: "thief", setType: "none", equipType: "emblem", subgroupId: 1, id: "gold-cygnus-emblem", level: 100 },
	{ jobType: "thief", setType: "none", equipType: "emblem", subgroupId: 2, id: "gold-resistance-emblem", level: 100 },
	{ jobType: "thief", setType: "none", equipType: "emblem", subgroupId: 3, id: "gold-phantom-emblem", level: 100 },
	{ jobType: "thief", setType: "none", equipType: "emblem", subgroupId: 4, id: "gold-agent-emblem", level: 100 },
	{ jobType: "thief", setType: "none", equipType: "emblem", subgroupId: 5, id: "gold-heh-emblem", level: 100 },
];

module.exports = thiefSetItems;