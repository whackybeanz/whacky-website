var archerSetEffects = [
	{
		jobType: "archer",
		setType: "acs",
		setName: "Arcaneshade Set",
		effects: [
			{ numEquipped: 2, list: [{ statId: "wama", val: "30" }, { statId: "maxHpMp", val: "2000" }] },
			{ numEquipped: 3, list: [{ statId: "wama", val: "35" }, { statId: "allStats", val: "50" }] },
			{ numEquipped: 4, list: [{ statId: "wama", val: "40" }, { statId: "iedPercent", val: "10" }, { statId: "def", val: "400" }] },
			{ numEquipped: 5, list: [{ statId: "wama", val: "30" }, { statId: "bossPercent", val: "30" }] },
			{ numEquipped: 6, list: [{ statId: "wama", val: "30" }, { statId: "maxHpMpPercent", val: "30" }] },
			{ numEquipped: 7, list: [{ statId: "wama", val: "30" }, { statId: "iedPercent", val: "10" }] },
		]
	},
	{
		jobType: "archer",
		setType: "abs",
		setName: "Absolabs Set",
		effects: [
			{ numEquipped: 2, list: [{ statId: "wama", val: "20" }, { statId: "maxHpMp", val: "1500" }] },
			{ numEquipped: 3, list: [{ statId: "wama", val: "25" }, { statId: "allStats", val: "30" }] },
			{ numEquipped: 4, list: [{ statId: "wama", val: "30" }, { statId: "iedPercent", val: "10" }, { statId: "def", val: "200" }] },
			{ numEquipped: 5, list: [{ statId: "wama", val: "20" }, { statId: "bossPercent", val: "30" }] },
			{ numEquipped: 6, list: [{ statId: "wama", val: "20" }, { statId: "maxHpMpPercent", val: "20" }] },
			{ numEquipped: 7, list: [{ statId: "wama", val: "20" }, { statId: "iedPercent", val: "10" }] },
		]
	},
	{
		jobType: "archer",
		setType: "faf",
		setName: "Root Abyss Set",
		effects: [
			{ numEquipped: 2, list: [{ statId: "str", val: 20 }, { statId: "dex", val: 20 }, { statId: "maxHpMp", val: 1000 }] },
			{ numEquipped: 3, list: [{ statId: "wa", val: 50 }, { statId: "maxHpMpPercent", val: 10 }] },
			{ numEquipped: 4, list: [{ statId: "bossPercent", val: 30 }] },
		]
	}
];

module.exports = archerSetEffects;