var pirateSetItems = [
	// HAT
	{ jobType: "pirate", setType: "acs", equipType: "hat", id: "acs-pirate-hat", level: 200 },
	{ jobType: "pirate", setType: "abs", equipType: "hat", id: "abs-pirate-hat", level: 160 },
	{ jobType: "pirate", setType: "faf", equipType: "hat", id: "faf-pirate-hat", level: 150 },

	// FACE
	{ jobType: "pirate", setType: "none", equipType: "face", id: "meister-symbol", name: "Shiny Red Pirate Meister Symbol", level: 130 },

	// TOP
	{ jobType: "pirate", setType: "acs", equipType: "top", id: "acs-pirate-overall", level: 200, isOverall: true },
	{ jobType: "pirate", setType: "abs", equipType: "top", id: "abs-pirate-overall", level: 160, isOverall: true },
	{ jobType: "pirate", setType: "faf", equipType: "top", id: "faf-pirate-top", level: 150 },

	// BOTTOM
	{ jobType: "pirate", setType: "faf", equipType: "bottom", id: "faf-pirate-bottom", level: 150 },

	// SHOES
	{ jobType: "pirate", setType: "acs", equipType: "shoes", id: "acs-shoes", name: "Arcaneshade Pirate Shoes", level: 200 },
	{ jobType: "pirate", setType: "abs", equipType: "shoes", id: "abs-shoes", name: "Absolabs Brigadier Sabatons", level: 160 },
	{ jobType: "pirate", setType: "none", equipType: "shoes", id: "tyrant-shoes", name: "Tyrant Lycaon Boots", level: 150 },

	// GLOVES
	{ jobType: "pirate", setType: "acs", equipType: "gloves", id: "acs-gloves", name: "Arcaneshade Pirate Mitts", level: 200 },
	{ jobType: "pirate", setType: "abs", equipType: "gloves", id: "abs-gloves", name: "Absolabs Brigadier Clench", level: 160 },
	{ jobType: "pirate", setType: "none", equipType: "gloves", id: "tyrant-gloves", name: "Tyrant Altair Gloves", level: 150 },

	// CAPE
	{ jobType: "pirate", setType: "acs", equipType: "cape", id: "acs-cape", name: "Arcaneshade Pirate Cape", level: 200 },
	{ jobType: "pirate", setType: "abs", equipType: "cape", id: "abs-cape", name: "Absolabs Brigadier Cloak", level: 160 },
	{ jobType: "pirate", setType: "none", equipType: "cape", id: "tyrant-cape", name: "Tyrant Altair Cloak", level: 150 },

	// SHOULDER
	{ jobType: "pirate", setType: "acs", equipType: "shoulder", id: "acs-shoulder", name: "Arcaneshade Pirate Shoulder", level: 200 },
	{ jobType: "pirate", setType: "abs", equipType: "shoulder", id: "abs-shoulder", name: "Absolabs Brigadier Pauldron", level: 160 },

	// WEAPON
	{ jobType: "pirate", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 0, id: "genesis-knuckle", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "pirate", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 1, id: "genesis-pistol", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "pirate", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 2, id: "genesis-energy-sword", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "pirate", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 3, id: "genesis-siege-gun", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "pirate", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 4, id: "genesis-soul-shooter", level: 200, isLuckyItem: true, itemPriority: 100 },

	{ jobType: "pirate", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 0, id: "acs-knuckle", level: 200 },
	{ jobType: "pirate", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 1, id: "acs-pistol", level: 200 },
	{ jobType: "pirate", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 2, id: "acs-energy-sword", level: 200 },
	{ jobType: "pirate", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 3, id: "acs-siege-gun", level: 200 },
	{ jobType: "pirate", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 4, id: "acs-soul-shooter", level: 200 },

	{ jobType: "pirate", setType: "abs", equipType: "weapon", subgroupId: 0, id: "abs-knuckle", level: 160 },
	{ jobType: "pirate", setType: "abs", equipType: "weapon", subgroupId: 1, id: "abs-pistol", level:160  },
	{ jobType: "pirate", setType: "abs", equipType: "weapon", subgroupId: 2, id: "abs-energy-sword", level: 160 },
	{ jobType: "pirate", setType: "abs", equipType: "weapon", subgroupId: 3, id: "abs-siege-gun", level: 160 },
	{ jobType: "pirate", setType: "abs", equipType: "weapon", subgroupId: 4, id: "abs-soul-shooter", level: 160 },

	{ jobType: "pirate", setType: "faf", equipType: "weapon", subgroupId: 0, id: "faf-knuckle", level: 150 },
	{ jobType: "pirate", setType: "faf", equipType: "weapon", subgroupId: 1, id: "faf-pistol", level: 150 },
	{ jobType: "pirate", setType: "faf", equipType: "weapon", subgroupId: 2, id: "faf-energy-sword", level: 150 },
	{ jobType: "pirate", setType: "faf", equipType: "weapon", subgroupId: 3, id: "faf-siege-gun", level: 150 },
	{ jobType: "pirate", setType: "faf", equipType: "weapon", subgroupId: 4, id: "faf-soul-shooter", level: 150 },

	{ jobType: "pirate", setType: "none", equipType: "weapon", subgroupId: 0, id: "scarlet-knuckle", level: 145, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "pirate", setType: "none", equipType: "weapon", subgroupId: 1, id: "scarlet-pistol", level: 145, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "pirate", setType: "none", equipType: "weapon", subgroupId: 2, id: "scarlet-energy-sword", level: 145, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "pirate", setType: "none", equipType: "weapon", subgroupId: 3, id: "scarlet-siege-gun", level: 145, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "pirate", setType: "none", equipType: "weapon", subgroupId: 4, id: "scarlet-soul-shooter", level: 145, isLuckyItem: true, itemPriority: 100 },

	// SECONDARY
	{ jobType: "pirate", setType: "none", equipType: "secondary", subgroupId: 0, id: "pnou-skull-armor", level: 140 },
	{ jobType: "pirate", setType: "none", equipType: "secondary", subgroupId: 1, id: "pnou-falcon-eye", level: 140 },
	{ jobType: "pirate", setType: "none", equipType: "secondary", subgroupId: 2, id: "pnou-fire-bomb", level: 140 },
	{ jobType: "pirate", setType: "none", equipType: "secondary", subgroupId: 3, id: "pnou-floral-jewel", level: 140 },
	{ jobType: "pirate", setType: "none", equipType: "secondary", subgroupId: 4, id: "pnou-magnum", level: 140 },
	{ jobType: "pirate", setType: "none", equipType: "secondary", subgroupId: 5, id: "pnou-controller", level: 140 },
	{ jobType: "pirate", setType: "none", equipType: "secondary", subgroupId: 6, id: "pnou-fox-marble", level: 140 },
	{ jobType: "pirate", setType: "none", equipType: "secondary", subgroupId: 7, id: "pnou-soul-ring", level: 140 },
	{ jobType: "pirate", setType: "none", equipType: "secondary", subgroupId: 8, id: "pnou-path", level: 140 },

	// BELT
	{ jobType: "pirate", setType: "none", equipType: "belt", id: "tyrant-belt", name: "Tyrant Altair Belt", level: 150 },

	// EMBLEM
	{ jobType: "pirate", setType: "none", equipType: "emblem", id: "gold-maple-leaf-emblem", level: 100 },
	{ jobType: "pirate", setType: "none", equipType: "emblem", id: "gold-cygnus-emblem", level: 100 },
	{ jobType: "pirate", setType: "none", equipType: "emblem", id: "gold-resistance-emblem", level: 100 },
	{ jobType: "pirate", setType: "none", equipType: "emblem", id: "gold-eunwol-emblem", level: 100 },
	{ jobType: "pirate", setType: "none", equipType: "emblem", id: "angel-emblem", level: 100 },
	{ jobType: "pirate", setType: "none", equipType: "emblem", id: "gold-abyss-emblem", level: 100 },
	{ jobType: "pirate", setType: "none", equipType: "emblem", id: "gold-dragon-emblem", level: 100 },
];

module.exports = pirateSetItems;