// Cash items and its derivatives all go into this file, even if the derivative appears in the player's USE tab
// E.g. Cubes + cube pieces, Golden apples + golden apple pieces

var cashTabIcons = [
	{ itemType: "cash", id: "scroll-guardian", name: "Guardian / Recovery Scroll", imgUrl: "./public/images/items/cash/scroll-guardian.png", usedInSections: ["spell-trace", "todd"] },
	{ itemType: "cash", id: "scroll-lucky-day", name: "Lucky Day Scroll", imgUrl: "./public/images/items/cash/scroll-lucky-day.png", usedInSections: ["spell-trace"] },
	{ itemType: "cash", id: "scroll-protection", name: "Shielding Ward / Protection Scroll", imgUrl: "./public/images/items/cash/scroll-protection.png", usedInSections: ["spell-trace", "todd"] },
	{ itemType: "cash", id: "scroll-protection-superior", name: "Superior Shielding Ward", imgUrl: "./public/images/items/cash/scroll-protection-superior.png", usedInSections: ["spell-trace"] },
	{ itemType: "cash", id: "scroll-return", name: "Return Scroll", imgUrl: "./public/images/items/cash/scroll-return.png", usedInSections: ["spell-trace"] },
	{ itemType: "cash", id: "scroll-safety", name: "Safety Scroll", imgUrl: "./public/images/items/cash/scroll-safety.png" },
	{ itemType: "cash", id: "scroll-shield", name: "Shield Scroll", imgUrl: "./public/images/items/cash/scroll-shield.png", usedInSections: ["spell-trace", "todd"] },

	{ itemType: "cash", id: "cube-apc", name: "Additional Cube", imgUrl: "./public/images/items/cash/cube-apc.png", usedInSections: ["potentials"] },
	{ itemType: "cash", id: "cube-apc-frag", name: "Additional Cube Fragment", imgUrl: "./public/images/items/cash/cube-apc-frag.png", usedInSections: ["spell-trace", "potentials"] },
	{ itemType: "cash", id: "cube-bc", name: "Black Cube", imgUrl: "./public/images/items/cash/cube-bc.png", usedInSections: ["potentials"] },
	{ itemType: "cash", id: "cube-bc-frag", name: "Black Cube Fragment", imgUrl: "./public/images/items/cash/cube-bc-frag.png", usedInSections: ["spell-trace", "potentials"] },
	{ itemType: "cash", id: "cube-hexa", name: "Hexa Cube", imgUrl: "./public/images/items/cash/cube-hexa.png", usedInSections: ["potentials"] },
	{ itemType: "cash", id: "cube-hexa-frag", name: "Hexa Cube Fragment", imgUrl: "./public/images/items/cash/cube-hexa-frag.png", usedInSections: ["spell-trace", "potentials"] },
	{ itemType: "cash", id: "cube-rc", name: "Red Cube", imgUrl: "./public/images/items/cash/cube-rc.png", usedInSections: ["potentials"] },
	{ itemType: "cash", id: "cube-rc-frag", name: "Red Cube Fragment", imgUrl: "./public/images/items/cash/cube-rc-frag.png", usedInSections: ["potentials"] },
	{ itemType: "cash", id: "cube-smc", name: "Super Miracle Cube", imgUrl: "./public/images/items/cash/cube-smc.png", usedInSections: ["potentials"] },
	{ itemType: "cash", id: "cube-smc-frag", name: "Super Miracle Cube Fragment", imgUrl: "./public/images/items/cash/cube-smc-frag.png", usedInSections: ["spell-trace", "potentials"] },
	{ itemType: "cash", id: "cube-wapc", name: "White Additional Cube", imgUrl: "./public/images/items/cash/cube-wapc.png", usedInSections: ["potentials"] },
	{ itemType: "cash", id: "cube-wapc-frag", name: "White Additional Cube Fragment", imgUrl: "./public/images/items/cash/cube-wapc-frag.png", usedInSections: ["spell-trace", "potentials"] },
	{ itemType: "cash", id: "cube-selection", name: "Selection Miracle Cube", imgUrl: "./public/images/items/cash/cube-selection.png", usedInSections: ["potentials"] },
	
	{ itemType: "cash", id: "golden-apple", name: "Golden Apple", imgUrl: "./public/images/items/cash/golden-apple.png" },
	{ itemType: "cash", id: "golden-apple-piece", name: "Golden Apple Piece", imgUrl: "./public/images/items/cash/golden-apple-piece.png", usedInSections: ["spell-trace"] },

	{ itemType: "cash", id: "gacha-tix", name: "Ga-cha-pon Ticket", imgUrl: "./public/images/items/cash/gachapon.png", usedInSections: ["flames"] },
];

module.exports = cashTabIcons;