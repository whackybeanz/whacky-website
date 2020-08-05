var commonSetEffects = [
	{
		jobType: "common",
		setType: "hardBossAcc",
		setName: "Hard Boss Accessory Set",
		effects: [
			{ numEquipped: 2, list: [{ statId: "allStats", val: "10" }, { statId: "maxHp", val: "250" }, { statId: "wama", val: "10" }, { statId: "bossPercent", val: "10" }] },
			{ numEquipped: 3, list: [{ statId: "allStats", val: "10" }, { statId: "maxHp", val: "250" }, { statId: "wama", val: "10" }, { statId: "def", val: "250" }, { statId: "iedPercent", val: "10" }] },
			{ numEquipped: 4, list: [{ statId: "allStats", val: "15" }, { statId: "maxHp", val: "375" }, { statId: "wama", val: "15" }, { statId: "critDmgPercent", val: "5" }] },
			{ numEquipped: 5, list: [{ statId: "allStats", val: "15" }, { statId: "maxHp", val: "375" }, { statId: "wama", val: "15" }, { statId: "bossPercent", val: "10" }] },
			{ numEquipped: 6, list: [{ statId: "allStats", val: "15" }, { statId: "maxHp", val: "375" }, { statId: "wama", val: "15" }] },
			{ numEquipped: 7, list: [{ statId: "allStats", val: "15" }, { statId: "maxHp", val: "375" }, { statId: "wama", val: "15" }, { statId: "critDmgPercent", val: "5", symbol: "%" }] },
		]
	},
	{
		jobType: "common",
		setType: "bossAcc",
		setName: "Boss Accessory Set",
		effects: [
			{ numEquipped: 3, list: [{ statId: "allStats", val: "10" }, { statId: "maxHpMpPercent", val: "5" }, { statId: "wama", val: "5" }] },
			{ numEquipped: 5, list: [{ statId: "allStats", val: "10" }, { statId: "maxHpMpPercent", val: "5" }, { statId: "wama", val: "5" }] },
			{ numEquipped: 7, list: [{ statId: "allStats", val: "10" }, { statId: "wama", val: "10" }, { statId: "def",  val: "80" }, { statId: "iedPercent", val: "10" }] },
			{ numEquipped: 9, list: [{ statId: "allStats", val: "15" }, { statId: "wama", val: "10" }, { statId: "def", val: "100" }, { statId: "bossPercent", val: "10" }] },
		]
	},
	{
		jobType: "common",
		setType: "meister",
		setName: "Meister Set",
		effects: [
			{ numEquipped: 2, list: [{ statId: "maxHpMpPercent", statName: "Max HP/MP %", val: "10", symbol: "%" }] },
			{ numEquipped: 3, list: [{ statId: "wama", statName: "ATT/MATT", val: "40" }] },
			{ numEquipped: 4, list: [{ statId: "bossPercent", statName: "Boss Damage %", val: "20", symbol: "%" }] },
		]
	},
	{
		jobType: "common",
		setType: "sengoku",
		setName: "Sengoku Treasure Set",
		effects: [
			{ numEquipped: 2, list: [{ statId: "allStats", val: "2" }, { statId: "wama", val: "3" }, { statId: "def", val: "20" }, { statId: "damagePercent", val: "3" }] },
			{ numEquipped: 3, list: [{ statId: "allStats", val: "8" }, { statId: "wama", val: "12" }, { statId: "def", val: "80" }, { statId: "damagePercent", val: "6" }] },
		]
	},
	{
		jobType: "common",
		setType: "inverse",
		setName: "Kritias Set",
		effects: [
			{ numEquipped: 3, list: [{ statId: "wama", val: "20" }, { statId: "bossPercent", val: "20" }] },
		]
	}
];

module.exports = commonSetEffects;