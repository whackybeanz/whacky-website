var pirateSetItems = [
	// HAT
	{ jobType: "pirate", setType: "acs", equipType: "hat", id: "acs-pirate-hat", imgUrl: "./public/images/equips/hat/acs-pirate-hat.png", name: "Arcaneshade Pirate Hat", level: 200 },
	{ jobType: "pirate", setType: "abs", equipType: "hat", id: "abs-pirate-hat", imgUrl: "./public/images/equips/hat/abs-brigadier-fedora.png", name: "Absolabs Brigadier Fedora", level: 160 },
	{ jobType: "pirate", setType: "faf", equipType: "hat", id: "faf-pirate-hat", imgUrl: "./public/images/equips/hat/faf-pirate-hat.png", name: "Highness Wanderer Hat", level: 150 },

	// FACE
	{ jobType: "pirate", setType: "none", equipType: "face", id: "meister-symbol", imgUrl: "./public/images/equips/face/meister-symbol.png", name: "Shiny Red Pirate Meister Symbol", level: 130 },

	// TOP
	{ jobType: "pirate", setType: "acs", equipType: "top", id: "acs-pirate-suit", imgUrl: "./public/images/equips/overall/acs-pirate-suit.png", name: "Arcaneshade Pirate Suit", level: 200, isOverall: true },
	{ jobType: "pirate", setType: "abs", equipType: "top", id: "abs-pirate-overall", imgUrl: "./public/images/equips/overall/abs-pirate-overall.png", name: "Absolabs Brigadier Cuirass", level: 160, isOverall: true },
	{ jobType: "pirate", setType: "faf", equipType: "top", id: "faf-pirate-top", imgUrl: "./public/images/equips/top/faf-pirate-top.png", name: "Eagle Eye Wanderer Coat", level: 150 },

	// BOTTOM
	{ jobType: "pirate", setType: "faf", equipType: "bottom", id: "faf-pirate-bottom", imgUrl: "./public/images/equips/bottom/faf-pirate-bottom.png", name: "Trickster Wanderer Pants", level: 150 },

	// SHOES
	{ jobType: "pirate", setType: "acs", equipType: "shoes", id: "acs-pirate-shoes", imgUrl: "./public/images/equips/shoes/acs-shoes.png", name: "Arcaneshade Pirate Shoes", level: 200 },
	{ jobType: "pirate", setType: "abs", equipType: "shoes", id: "abs-pirate-shoes", imgUrl: "./public/images/equips/shoes/abs-shoes.png", name: "Absolabs Brigadier Sabatons", level: 160 },
	{ jobType: "pirate", setType: "none", equipType: "shoes", id: "tyrant-shoes", imgUrl: "./public/images/equips/shoes/tyrant-shoes.png", name: "Tyrant Lycaon Boots", level: 150 },

	// GLOVES
	{ jobType: "pirate", setType: "acs", equipType: "gloves", id: "acs-pirate-glove", imgUrl: "./public/images/equips/gloves/acs-glove.png", name: "Arcaneshade Pirate Mitts", level: 200 },
	{ jobType: "pirate", setType: "abs", equipType: "gloves", id: "abs-pirate-glove", imgUrl: "./public/images/equips/gloves/abs-glove.png", name: "Absolabs Brigadier Clench", level: 160 },
	{ jobType: "pirate", setType: "none", equipType: "gloves", id: "tyrant-gloves", imgUrl: "./public/images/equips/gloves/tyrant-gloves.png", name: "Tyrant Altair Gloves", level: 150 },

	// CAPE
	{ jobType: "pirate", setType: "acs", equipType: "cape", id: "acs-pirate-cape", imgUrl: "./public/images/equips/cape/acs-cape.png", name: "Arcaneshade Pirate Cape", level: 200 },
	{ jobType: "pirate", setType: "abs", equipType: "cape", id: "abs-pirate-cape", imgUrl: "./public/images/equips/cape/abs-cape.png", name: "Absolabs Brigadier Cloak", level: 160 },
	{ jobType: "pirate", setType: "none", equipType: "cape", id: "tyrant-cape", imgUrl: "./public/images/equips/cape/tyrant-cape.png", name: "Tyrant Altair Cloak", level: 150 },

	// SHOULDER
	{ jobType: "pirate", setType: "acs", equipType: "shoulder", id: "acs-pirate-shoulder", imgUrl: "./public/images/equips/shoulder/acs-shoulder.png", name: "Arcaneshade Pirate Shoulder", level: 200 },
	{ jobType: "pirate", setType: "abs", equipType: "shoulder", id: "abs-pirate-shoulder", imgUrl: "./public/images/equips/shoulder/abs-shoulder.png", name: "Absolabs Brigadier Pauldron", level: 160 },

	// WEAPON
	{ jobType: "pirate", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 0, id: "genesis-knuckle", imgUrl: "./public/images/equips/weapon/genesis-knuckle.png", name: "Genesis Claw", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "pirate", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 1, id: "genesis-pistol", imgUrl: "./public/images/equips/weapon/genesis-pistol.png", name: "Genesis Pistol", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "pirate", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 2, id: "genesis-energy-sword", imgUrl: "./public/images/equips/weapon/genesis-energy-chain.png", name: "Genesis Energy Chain", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "pirate", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 3, id: "genesis-siege-gun", imgUrl: "./public/images/equips/weapon/genesis-siege-gun.png", name: "Genesis Siege Gun", level: 200, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "pirate", setType: "none", equipType: "weapon", groupId: 2001, subgroupId: 4, id: "genesis-soul-shooter", imgUrl: "./public/images/equips/weapon/genesis-soul-shooter.png", name: "Genesis Soul Shooter", level: 200, isLuckyItem: true, itemPriority: 100 },

	{ jobType: "pirate", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 0, id: "acs-knuckle", imgUrl: "./public/images/equips/weapon/acs-knuckle.png", name: "Arcaneshade Baghnakhs", level: 200 },
	{ jobType: "pirate", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 1, id: "acs-pistol", imgUrl: "./public/images/equips/weapon/acs-pistol.png", name: "Arcaneshade Pistol", level: 200 },
	{ jobType: "pirate", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 2, id: "acs-energy-sword", imgUrl: "./public/images/equips/weapon/acs-energy-sword.png", name: "Arcaneshade Energy Sword", level: 200 },
	{ jobType: "pirate", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 3, id: "acs-siege-gun", imgUrl: "./public/images/equips/weapon/acs-siege-gun.png", name: "Arcaneshade Siege Gun", level: 200 },
	{ jobType: "pirate", setType: "acs", equipType: "weapon", groupId: 2000, subgroupId: 4, id: "acs-soul-shooter", imgUrl: "./public/images/equips/weapon/acs-soul-shooter.png", name: "Arcaneshade Soul Shooter", level: 200 },

	{ jobType: "pirate", setType: "abs", equipType: "weapon", subgroupId: 0, id: "abs-knuckle", imgUrl: "./public/images/equips/weapon/abs-knuckle.png", name: "Absolabs Ashen Fist", level: 160 },
	{ jobType: "pirate", setType: "abs", equipType: "weapon", subgroupId: 1, id: "abs-pistol", imgUrl: "./public/images/equips/weapon/abs-pistol.png", name: "Absolabs Elite Magnum", level:160  },
	{ jobType: "pirate", setType: "abs", equipType: "weapon", subgroupId: 2, id: "abs-energy-sword", imgUrl: "./public/images/equips/weapon/abs-energy-sword.png", name: "Absolabs Electro Saber", level: 160 },
	{ jobType: "pirate", setType: "abs", equipType: "weapon", subgroupId: 3, id: "abs-siege-gun", imgUrl: "./public/images/equips/weapon/abs-siege-gun.png", name: "Absolabs Blast Cannon", level: 160 },
	{ jobType: "pirate", setType: "abs", equipType: "weapon", subgroupId: 4, id: "abs-soul-shooter", imgUrl: "./public/images/equips/weapon/abs-soul-shooter.png", name: "Absolabs Draconic Arm", level: 160 },

	{ jobType: "pirate", setType: "faf", equipType: "weapon", subgroupId: 0, id: "faf-knuckle", imgUrl: "./public/images/equips/weapon/faf-knuckle.png", name: "Fafnir Fenrir Talon", level: 150 },
	{ jobType: "pirate", setType: "faf", equipType: "weapon", subgroupId: 1, id: "faf-pistol", imgUrl: "./public/images/equips/weapon/faf-pistol.png", name: "Fafnir Zeliska", level: 150 },
	{ jobType: "pirate", setType: "faf", equipType: "weapon", subgroupId: 2, id: "faf-energy-sword", imgUrl: "./public/images/equips/weapon/faf-energy-sword.png", name: "Fafnir Split Edge", level: 150 },
	{ jobType: "pirate", setType: "faf", equipType: "weapon", subgroupId: 3, id: "faf-siege-gun", imgUrl: "./public/images/equips/weapon/faf-siege-gun.png", name: "Fafnir Luster Cannon", level: 150 },
	{ jobType: "pirate", setType: "faf", equipType: "weapon", subgroupId: 4, id: "faf-soul-shooter", imgUrl: "./public/images/equips/weapon/faf-soul-shooter.png", name: "Fafnir Angelic Shooter", level: 150 },

	{ jobType: "pirate", setType: "none", equipType: "weapon", subgroupId: 0, id: "scarlet-knuckle", imgUrl: "./public/images/equips/weapon/scarlet-knuckle.png", name: "Scarlet Gryphon Claw", level: 145, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "pirate", setType: "none", equipType: "weapon", subgroupId: 1, id: "scarlet-pistol", imgUrl: "./public/images/equips/weapon/scarlet-pistol.png", name: "Scarlet Infinity", level: 145, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "pirate", setType: "none", equipType: "weapon", subgroupId: 2, id: "scarlet-energy-sword", imgUrl: "./public/images/equips/weapon/scarlet-energy-sword.png", name: "Scarlet Split Edge", level: 145, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "pirate", setType: "none", equipType: "weapon", subgroupId: 3, id: "scarlet-siege-gun", imgUrl: "./public/images/equips/weapon/scarlet-siege-gun.png", name: "Scarlet Crash", level: 145, isLuckyItem: true, itemPriority: 100 },
	{ jobType: "pirate", setType: "none", equipType: "weapon", subgroupId: 4, id: "scarlet-soul-shooter", imgUrl: "./public/images/equips/weapon/scarlet-soul-shooter.png", name: "Scarlet Angelic Shooter", level: 145, isLuckyItem: true, itemPriority: 100 },

	// SECONDARY
	{ jobType: "pirate", setType: "none", equipType: "secondary", subgroupId: 0, id: "pnou-skull-armor", imgUrl: "./public/images/equips/secondary/pnou-skull-armor.png", name: "Princess Nou's Skull Armor (Viper)", level: 140 },
	{ jobType: "pirate", setType: "none", equipType: "secondary", subgroupId: 1, id: "pnou-falcon-eye", imgUrl: "./public/images/equips/secondary/pnou-falcon-eye.png", name: "Princess Nou's Falcon Eye (Captain)", level: 140 },
	{ jobType: "pirate", setType: "none", equipType: "secondary", subgroupId: 2, id: "pnou-fire-bomb", imgUrl: "./public/images/equips/secondary/pnou-fire-bomb.png", name: "Princess Nou's Fire Bomb (Cannon Shooter)", level: 140 },
	{ jobType: "pirate", setType: "none", equipType: "secondary", subgroupId: 3, id: "pnou-floral-jewel", imgUrl: "./public/images/equips/secondary/pnou-floral-jewel.png", name: "Princess Nou's Floral Jewel (Cygnus Knights)", level: 140 },
	{ jobType: "pirate", setType: "none", equipType: "secondary", subgroupId: 4, id: "pnou-magnum", imgUrl: "./public/images/equips/secondary/pnou-magnum.png", name: "Princess Nou's Magnum (Mechanic)", level: 140 },
	{ jobType: "pirate", setType: "none", equipType: "secondary", subgroupId: 5, id: "pnou-controller", imgUrl: "./public/images/equips/secondary/pnou-controller.png", name: "Princess Nou's Controller (Xenon)", level: 140 },
	{ jobType: "pirate", setType: "none", equipType: "secondary", subgroupId: 6, id: "pnou-fox-marble", imgUrl: "./public/images/equips/secondary/pnou-fox-marble.png", name: "Princess Nou's Fox Marble (Eunwol)", level: 140 },
	{ jobType: "pirate", setType: "none", equipType: "secondary", subgroupId: 7, id: "pnou-soul-ring", imgUrl: "./public/images/equips/secondary/pnou-soul-ring.png", name: "Princess Nou's Soul Ring (Angelic Buster)", level: 140 },
	{ jobType: "pirate", setType: "none", equipType: "secondary", subgroupId: 8, id: "pnou-path", imgUrl: "./public/images/equips/secondary/pnou-path.png", name: "Princess Nou's Path (Ark)", level: 140 },

	// BELT
	{ jobType: "pirate", setType: "none", equipType: "belt", id: "tyrant-belt", imgUrl: "./public/images/equips/belt/tyrant-belt.png", name: "Tyrant Altair Belt", level: 150 },

	// EMBLEM
	{ jobType: "pirate", setType: "none", equipType: "emblem", id: "gold-maple-leaf-emblem", imgUrl: "./public/images/equips/emblem/gold-maple-leaf-emblem.png", name: "Gold Maple Leaf Emblem (Explorers)", level: 100 },
	{ jobType: "pirate", setType: "none", equipType: "emblem", id: "gold-cygnus-emblem", imgUrl: "./public/images/equips/emblem/gold-cygnus-emblem.png", name: "Gold Cygnus Emblem (Cygnus Knights)", level: 100 },
	{ jobType: "pirate", setType: "none", equipType: "emblem", id: "gold-resistance-emblem", imgUrl: "./public/images/equips/emblem/gold-resistance-emblem.png", name: "Gold Resistance Emblem (Resistance)", level: 100 },
	{ jobType: "pirate", setType: "none", equipType: "emblem", id: "gold-eunwol-emblem", imgUrl: "./public/images/equips/emblem/gold-eunwol-emblem.png", name: "Gold Heroic Emblem (Eunwol)", level: 100 },
	{ jobType: "pirate", setType: "none", equipType: "emblem", id: "angel-emblem", imgUrl: "./public/images/equips/emblem/angel-emblem.png", name: "Angel Emblem (Angelic Buster)", level: 100 },
	{ jobType: "pirate", setType: "none", equipType: "emblem", id: "gold-abyss-emblem", imgUrl: "./public/images/equips/emblem/gold-abyss-emblem.png", name: "Gold Abyss Emblem (Ark)", level: 100 },
	{ jobType: "pirate", setType: "none", equipType: "emblem", id: "gold-aura-emblem", imgUrl: "./public/images/equips/emblem/gold-aura-emblem.png", name: "Gold Aura Emblem (Zen)", level: 100 },
];

module.exports = pirateSetItems;