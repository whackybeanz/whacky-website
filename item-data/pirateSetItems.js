var pirateSetItems = {
	hat: [
		{ setType: "acs", id: "acs-pirate-hat", image: "./public/images/equips/hat/acs-pirate-hat.png", name: "Arcaneshade Pirate Hat" },
		{ setType: "abs", id: "abs-pirate-hat", image: "./public/images/equips/hat/abs-brigadier-fedora.png", name: "Absolabs Brigadier Fedora" },
		{ setType: "faf", id: "faf-pirate-hat", image: "./public/images/equips/hat/faf-pirate-hat.png", name: "Highness Wanderer Hat" },
	],
	face: [
		{ setType: "none", id: "meister-symbol", image: "./public/images/equips/face/meister-symbol.png", name: "Shiny Red Pirate Meister Symbol" },
	],
	top: [
		{ setType: "acs", id: "acs-pirate-suit", image: "./public/images/equips/overall/acs-pirate-suit.png", name: "Arcaneshade Pirate Suit", isOverall: true },
		{ setType: "abs", id: "abs-pirate-overall", image: "./public/images/equips/overall/abs-pirate-overall.png", name: "Absolabs Brigadier Cuirass", isOverall: true },
		{ setType: "faf", id: "faf-pirate-top", image: "./public/images/equips/top/faf-pirate-top.png", name: "Eagle Eye Wanderer Coat" },
	],
	bottom: [
		{ setType: "faf", id: "faf-pirate-bottom", image: "./public/images/equips/bottom/faf-pirate-bottom.png", name: "Trickster Wanderer Pants" },
	],
	shoes: [
		{ setType: "acs", id: "acs-pirate-shoes", image: "./public/images/equips/shoes/acs-shoes.png", name: "Arcaneshade Pirate Shoes" },
		{ setType: "abs", id: "abs-pirate-shoes", image: "./public/images/equips/shoes/abs-shoes.png", name: "Absolabs Brigadier Sabatons" },
		{ setType: "none", id: "tyrant-shoes", image: "./public/images/equips/shoes/tyrant-shoes.png", name: "Tyrant Lycaon Boots" },
	],
	gloves: [
		{ setType: "acs", id: "acs-pirate-glove", image: "./public/images/equips/gloves/acs-glove.png", name: "Arcaneshade Pirate Mitts" },
		{ setType: "abs", id: "abs-pirate-glove", image: "./public/images/equips/gloves/abs-glove.png", name: "Absolabs Brigadier Clench" },
		{ setType: "none", id: "tyrant-gloves", image: "./public/images/equips/gloves/tyrant-gloves.png", name: "Tyrant Altair Gloves" },
	],
	cape: [
		{ setType: "acs", id: "acs-pirate-cape", image: "./public/images/equips/cape/acs-cape.png", name: "Arcaneshade Pirate Cape" },
		{ setType: "abs", id: "abs-pirate-cape", image: "./public/images/equips/cape/abs-cape.png", name: "Absolabs Brigadier Cloak" },
		{ setType: "none", id: "tyrant-cape", image: "./public/images/equips/cape/tyrant-cape.png", name: "Tyrant Altair Cloak" },
	],
	shoulder: [
		{ setType: "acs", id: "acs-pirate-shoulder", image: "./public/images/equips/shoulder/acs-shoulder.png", name: "Arcaneshade Pirate Shoulder" },
		{ setType: "abs", id: "abs-pirate-shoulder", image: "./public/images/equips/shoulder/abs-shoulder.png", name: "Absolabs Brigadier Pauldron" },
	],
	weapon: [
		{ setType: "none", id: "genesis-knuckle", image: "./public/images/equips/weapon/genesis-knuckle.png", name: "Genesis Claw", isLuckyItem: true, itemPriority: 100 },
		{ setType: "none", id: "genesis-pistol", image: "./public/images/equips/weapon/genesis-pistol.png", name: "Genesis Pistol", isLuckyItem: true, itemPriority: 100 },
		{ setType: "none", id: "genesis-energy-sword", image: "./public/images/equips/weapon/genesis-energy-chain.png", name: "Genesis Energy Chain", isLuckyItem: true, itemPriority: 100 },
		{ setType: "none", id: "genesis-siege-gun", image: "./public/images/equips/weapon/genesis-siege-gun.png", name: "Genesis Siege Gun", isLuckyItem: true, itemPriority: 100 },
		{ setType: "none", id: "genesis-soul-shooter", image: "./public/images/equips/weapon/genesis-soul-shooter.png", name: "Genesis Soul Shooter", isLuckyItem: true, itemPriority: 100 },

		{ setType: "acs", id: "acs-knuckle", image: "./public/images/equips/weapon/acs-knuckle.png", name: "Arcaneshade Baghnakhs" },
		{ setType: "acs", id: "acs-pistol", image: "./public/images/equips/weapon/acs-pistol.png", name: "Arcaneshade Pistol" },
		{ setType: "acs", id: "acs-energy-sword", image: "./public/images/equips/weapon/acs-energy-sword.png", name: "Arcaneshade Energy Sword" },
		{ setType: "acs", id: "acs-siege-gun", image: "./public/images/equips/weapon/acs-siege-gun.png", name: "Arcaneshade Siege Gun" },
		{ setType: "acs", id: "acs-soul-shooter", image: "./public/images/equips/weapon/acs-soul-shooter.png", name: "Arcaneshade Soul Shooter" },

		{ setType: "abs", id: "abs-knuckle", image: "./public/images/equips/weapon/abs-knuckle.png", name: "Absolabs Ashen Fist" },
		{ setType: "abs", id: "abs-pistol", image: "./public/images/equips/weapon/abs-pistol.png", name: "Absolabs Elite Magnum" },
		{ setType: "abs", id: "abs-energy-sword", image: "./public/images/equips/weapon/abs-energy-sword.png", name: "Absolabs Electro Saber" },
		{ setType: "abs", id: "abs-siege-gun", image: "./public/images/equips/weapon/abs-siege-gun.png", name: "Absolabs Blast Cannon" },
		{ setType: "abs", id: "abs-soul-shooter", image: "./public/images/equips/weapon/abs-soul-shooter.png", name: "Absolabs Draconic Arm" },

		{ setType: "faf", id: "faf-knuckle", image: "./public/images/equips/weapon/faf-knuckle.png", name: "Fafnir Fenrir Talon" },
		{ setType: "faf", id: "faf-pistol", image: "./public/images/equips/weapon/faf-pistol.png", name: "Fafnir Zeliska" },
		{ setType: "faf", id: "faf-energy-sword", image: "./public/images/equips/weapon/faf-energy-sword.png", name: "Fafnir Split Edge" },
		{ setType: "faf", id: "faf-siege-gun", image: "./public/images/equips/weapon/faf-siege-gun.png", name: "Fafnir Luster Cannon" },
		{ setType: "faf", id: "faf-soul-shooter", image: "./public/images/equips/weapon/faf-soul-shooter.png", name: "Fafnir Angelic Shooter" },

		{ setType: "none", id: "scarlet-knuckle", image: "./public/images/equips/weapon/scarlet-knuckle.png", name: "Scarlet Gryphon Claw", isLuckyItem: true, itemPriority: 100 },
		{ setType: "none", id: "scarlet-pistol", image: "./public/images/equips/weapon/scarlet-pistol.png", name: "Scarlet Infinity", isLuckyItem: true, itemPriority: 100 },
		{ setType: "none", id: "scarlet-energy-sword", image: "./public/images/equips/weapon/scarlet-energy-sword.png", name: "Scarlet Split Edge", isLuckyItem: true, itemPriority: 100 },
		{ setType: "none", id: "scarlet-siege-gun", image: "./public/images/equips/weapon/scarlet-siege-gun.png", name: "Scarlet Crash", isLuckyItem: true, itemPriority: 100 },
		{ setType: "none", id: "scarlet-soul-shooter", image: "./public/images/equips/weapon/scarlet-soul-shooter.png", name: "Scarlet Angelic Shooter", isLuckyItem: true, itemPriority: 100 },		
	],
	secondary: [
		{ setType: "none", id: "pnou-skull-armor", image: "./public/images/equips/secondary/pnou-skull-armor.png", name: "Princess Nou's Skull Armor (Viper)" },
		{ setType: "none", id: "pnou-falcon-eye", image: "./public/images/equips/secondary/pnou-falcon-eye.png", name: "Princess Nou's Falcon Eye (Captain)" },
		{ setType: "none", id: "pnou-fire-bomb", image: "./public/images/equips/secondary/pnou-fire-bomb.png", name: "Princess Nou's Fire Bomb (Cannon Shooter)" },
		{ setType: "none", id: "pnou-floral-jewel", image: "./public/images/equips/secondary/pnou-floral-jewel.png", name: "Princess Nou's Floral Jewel (Cygnus Knights)" },
		{ setType: "none", id: "pnou-magnum", image: "./public/images/equips/secondary/pnou-magnum.png", name: "Princess Nou's Magnum (Mechanic)" },
		{ setType: "none", id: "pnou-controller", image: "./public/images/equips/secondary/pnou-controller.png", name: "Princess Nou's Controller (Xenon)" },
		{ setType: "none", id: "pnou-fox-marble", image: "./public/images/equips/secondary/pnou-fox-marble.png", name: "Princess Nou's Fox Marble (Eunwol)" },
		{ setType: "none", id: "pnou-soul-ring", image: "./public/images/equips/secondary/pnou-soul-ring.png", name: "Princess Nou's Soul Ring (Angelic Buster)" },
		{ setType: "none", id: "pnou-path", image: "./public/images/equips/secondary/pnou-path.png", name: "Princess Nou's Path (Ark)" },
	],
	belt: [
		{ setType: "none", id: "tyrant-belt", image: "./public/images/equips/belt/tyrant-belt.png", name: "Tyrant Altair Belt" },
	],
	emblem: [
		{ setType: "none", id: "gold-maple-leaf-emblem", image: "./public/images/equips/emblem/gold-maple-leaf-emblem.png", name: "Gold Maple Leaf Emblem (Explorers)" },
		{ setType: "none", id: "gold-cygnus-emblem", image: "./public/images/equips/emblem/gold-cygnus-emblem.png", name: "Gold Cygnus Emblem (Cygnus Knights)" },
		{ setType: "none", id: "gold-resistance-emblem", image: "./public/images/equips/emblem/gold-resistance-emblem.png", name: "Gold Resistance Emblem (Resistance)" },
		{ setType: "none", id: "gold-eunwol-emblem", image: "./public/images/equips/emblem/gold-eunwol-emblem.png", name: "Gold Heroic Emblem (Eunwol)" },
		{ setType: "none", id: "angel-emblem", image: "./public/images/equips/emblem/angel-emblem.png", name: "Angel Emblem (Angelic Buster)" },
		{ setType: "none", id: "gold-abyss-emblem", image: "./public/images/equips/emblem/gold-abyss-emblem.png", name: "Gold Abyss Emblem (Ark)" },
		{ setType: "none", id: "gold-aura-emblem", image: "./public/images/equips/emblem/gold-aura-emblem.png", name: "Gold Aura Emblem (Zen)" },
	],
}

module.exports = pirateSetItems;