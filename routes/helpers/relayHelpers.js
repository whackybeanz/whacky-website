function getRelayMissions(version = null) {
    const relayMissions = {
        v1: {
            startDate: "2018-11-29",
            missionList: ["300 level-range mobs", "100 combo kills", "3 Elite Monsters",
            "Defeat 1 Normal boss", "300 star force mobs", "Monster Park once", 
            "3 star force Elite Monsters", "Defeat 1 Hard/Chaos boss", "300 Arcane River mobs",
            "100 Multi-kills", "1 Elite Boss", "1 Chaos Root Abyss boss"],
        },
        v2: {
            startDate: "2019-11-07",
            missionList: ["300 level-range mobs", "100 combo kills", "Defeat 1 daily boss",
            "300 star force mobs", "Monster Park once", "Activate 1 Rune",
            "3 Elite Monsters", "100 Multi-kills", "300 Arcane River mobs"],
        },
        v3: {
            startDate: "2021-10-28",
            missionList: ["500 level-range mobs", "150 combo kills", "Defeat 1 daily boss",
            "1000 level-range mobs", "Monster Park once", "Activate 1 Rune",
            "3 Elite Monsters", "150 Multi-kills", "1000 Arcane River mobs"],
        },
        v4: {
            startDate: "2023-04-05", // 2022-09-29
            missionList: ["500 level-range mobs", "150 combo kills", "1000 level-range mobs",
            "Activate 1 Rune", "Monster Park once", "1000 level-range mobs",
            "Defeat 1 daily boss", "3 Elite Monsters", "1000 Arcane / Authentic Force mobs"],
        }
    }

    if(version === null) {
        return Object.keys(relayMissions);
    } else {
        return relayMissions[version];
    }
}

module.exports = { getRelayMissions };