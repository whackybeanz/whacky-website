var mageSetItems = [
	// HAT
	{ jobType: "mage", setType: "acs", equipType: "hat", id: "acs-mage-hat", level: 200 },
	{ jobType: "mage", setType: "abs", equipType: "hat", id: "abs-mage-hat", level: 160 },
	{ jobType: "mage", setType: "faf", equipType: "hat", id: "faf-mage-hat", level: 150 },

	// FACE
	{ jobType: "mage", setType: "none", equipType: "face", id: "meister-symbol", name: "Shiny Red Magician Meister Symbol", level: 130 },

	// TOP
	{ jobType: "mage", setType: "acs", equipType: "top", id: "acs-mage-overall", level: 200, isOverall: true },
	{ jobType: "mage", setType: "abs", equipType: "top", id: "abs-mage-overall", level: 160, isOverall: true },
	{ jobType: "mage", setType: "faf", equipType: "top", id: "faf-mage-top", level: 150 },

	// BOTTOM
	{ jobType: "mage", setType: "faf", equipType: "bottom", id: "faf-mage-bottom", level: 150 },

	// SHOES
	{ jobType: "mage", setType: "acs", equipType: "shoes", id: "acs-shoes", name: "Arcaneshade Mage Shoes", level: 200 },
	{ jobType: "mage", setType: "abs", equipType: "shoes", id: "abs-shoes", name: "Absolabs Cabalist Shoes", level: 160 },
	{ jobType: "mage", setType: "none", equipType: "shoes", id: "tyrant-shoes", name: "Tyrant Hermes Boots", level: 150 },

	// GLOVES
	{ jobType: "mage", setType: "acs", equipType: "gloves", id: "acs-gloves", name: "Arcaneshade Mage Mitts", level: 200 },
	{ jobType: "mage", setType: "abs", equipType: "gloves", id: "abs-gloves", name: "Absolabs Cabalist Gloves", level: 160 },
	{ jobType: "mage", setType: "none", equipType: "gloves", id: "tyrant-gloves", name: "Tyrant Hermes Gloves", level: 150 },

	// CAPE
	{ jobType: "mage", setType: "acs", equipType: "cape", id: "acs-cape", name: "Arcaneshade Mage Cape", level: 200 },
	{ jobType: "mage", setType: "abs", equipType: "cape", id: "abs-cape", name: "Absolabs Cabalist Cloak", level: 160 },
	{ jobType: "mage", setType: "none", equipType: "cape", id: "tyrant-cape", name: "Tyrant Hermes Cloak", level: 150 },

	// SHOULDER
	{ jobType: "mage", setType: "acs", equipType: "shoulder", id: "acs-shoulder", name: "Arcaneshade Mage Shoulder", level: 200 },
	{ jobType: "mage", setType: "abs", equipType: "shoulder", id: "abs-shoulder", name: "Absolabs Cabalist Pauldron", level: 160 },

	// WEAPON
	{ jobType: "mage", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 0, id: "genesis-staff", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "mage", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 1, id: "genesis-wand", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "mage", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 2, id: "genesis-shining-rod", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "mage", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 3, id: "genesis-psy-limiter", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "mage", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 4, id: "genesis-magic-gauntlet", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "mage", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 5, id: "genesis-fan", level: 200, isLuckyItem: true, itemPriority: 100 },

	{ jobType: "mage", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 0, id: "acs-staff", level: 200 },
	{ jobType: "mage", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 1, id: "acs-wand", level: 200 },
	{ jobType: "mage", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 2, id: "acs-shining-rod", level: 200 },
	{ jobType: "mage", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 3, id: "acs-psy-limiter", level: 200 },
	{ jobType: "mage", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 4, id: "acs-magic-gauntlet", level: 200 },
	{ jobType: "mage", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 5, id: "acs-fan", level: 200 },

	{ jobType: "mage", setType: "abs", equipType: "weapon", subgroupId: 0, id: "abs-staff", level: 160 },
	{ jobType: "mage", setType: "abs", equipType: "weapon", subgroupId: 1, id: "abs-wand", level: 160 },
	{ jobType: "mage", setType: "abs", equipType: "weapon", subgroupId: 2, id: "abs-shining-rod", level: 160 },
	{ jobType: "mage", setType: "abs", equipType: "weapon", subgroupId: 3, id: "abs-psy-limiter", level: 160 },
	{ jobType: "mage", setType: "abs", equipType: "weapon", subgroupId: 4, id: "abs-magic-gauntlet", level: 160 },
	{ jobType: "mage", setType: "abs", equipType: "weapon", subgroupId: 5, id: "abs-fan", level: 160 },

	{ jobType: "mage", setType: "faf", equipType: "weapon", subgroupId: 0, id: "faf-staff", level: 150 },
	{ jobType: "mage", setType: "faf", equipType: "weapon", subgroupId: 1, id: "faf-wand", level: 150 },
	{ jobType: "mage", setType: "faf", equipType: "weapon", subgroupId: 2, id: "faf-shining-rod", level: 150 },
	{ jobType: "mage", setType: "faf", equipType: "weapon", subgroupId: 3, id: "faf-psy-limiter", level: 150 },
	{ jobType: "mage", setType: "faf", equipType: "weapon", subgroupId: 4, id: "faf-magic-gauntlet", level: 150 },
	{ jobType: "mage", setType: "faf", equipType: "weapon", subgroupId: 5, id: "faf-fan", level: 150 },

	{ jobType: "mage", setType: "none", equipType: "weapon", subgroupId: 0, id: "scarlet-staff", level: 145, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "mage", setType: "none", equipType: "weapon", subgroupId: 1, id: "scarlet-wand", level: 145, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "mage", setType: "none", equipType: "weapon", subgroupId: 2, id: "scarlet-shining-rod", level: 145, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "mage", setType: "none", equipType: "weapon", subgroupId: 3, id: "scarlet-fan", level: 145, isLuckyItem: true, itemPriority: 100 },

	// SECONDARY
	{ jobType: "mage", setType: "none", equipType: "secondary", subgroupId: 0, id: "deimos-sage-shield", level: 140 },
	{ jobType: "mage", setType: "none", equipType: "secondary", subgroupId: 1, id: "pnou-flaming-book", level: 140 },
	{ jobType: "mage", setType: "none", equipType: "secondary", subgroupId: 2, id: "pnou-damp-book", level: 140 },
	{ jobType: "mage", setType: "none", equipType: "secondary", subgroupId: 3, id: "pnou-golden-book", level: 140 },
	{ jobType: "mage", setType: "none", equipType: "secondary", subgroupId: 4, id: "pnou-floral-jewel", level: 140 },
	{ jobType: "mage", setType: "none", equipType: "secondary", subgroupId: 5, id: "pnou-accursed-marble", level: 140 },
	{ jobType: "mage", setType: "none", equipType: "secondary", subgroupId: 6, id: "pnou-dragon-legacy", level: 140 },
	{ jobType: "mage", setType: "none", equipType: "secondary", subgroupId: 7, id: "pnou-soul-orb", level: 140 },
	{ jobType: "mage", setType: "none", equipType: "secondary", subgroupId: 8, id: "pnou-lucent-wings", level: 140 },
	{ jobType: "mage", setType: "none", equipType: "secondary", subgroupId: 9, id: "pnou-kinesis", level: 140 },

	// BELT
	{ jobType: "mage", setType: "none", equipType: "belt", id: "tyrant-belt", name: "Tyrant Hermes Belt", level: 150 },

	// EMBLEM
	{ jobType: "mage", setType: "none", equipType: "emblem", subgroupId: 0, id: "gold-maple-leaf-emblem", level: 100 },
	{ jobType: "mage", setType: "none", equipType: "emblem", subgroupId: 1, id: "gold-cygnus-emblem", level: 100 },
	{ jobType: "mage", setType: "none", equipType: "emblem", subgroupId: 2, id: "gold-resistance-emblem", level: 100 },
	{ jobType: "mage", setType: "none", equipType: "emblem", subgroupId: 3, id: "gold-evan-emblem", level: 100 },
	{ jobType: "mage", setType: "none", equipType: "emblem", subgroupId: 4, id: "gold-lumi-emblem", level: 100 },
	{ jobType: "mage", setType: "none", equipType: "emblem", subgroupId: 5, id: "gold-crystal-emblem", level: 100 },
	{ jobType: "mage", setType: "none", equipType: "emblem", subgroupId: 6, id: "gold-kinesis-emblem", level: 100 },
	{ jobType: "mage", setType: "none", equipType: "emblem", subgroupId: 7, id: "gold-blossom-emblem", level: 100 },
]

module.exports = mageSetItems;