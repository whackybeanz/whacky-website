function getTables() {
    const HEXA_SKILL_MATERIAL_TABLE = [
        { origin: { solErda: 5, frags: 100 }, enhance: { solErda: 4, frags: 75 }, mastery: { solErda: 3, frags: 50 }, common: { solErda: 0, frags: 0 } },
        { origin: { solErda: 1, frags: 30 }, enhance: { solErda: 1, frags: 23 }, mastery: { solErda: 1, frags: 15 }, common: { solErda: 0, frags: 0 } },
        { origin: { solErda: 1, frags: 35 }, enhance: { solErda: 1, frags: 27 }, mastery: { solErda: 1, frags: 18 }, common: { solErda: 0, frags: 0 } },
        { origin: { solErda: 1, frags: 40 }, enhance: { solErda: 1, frags: 30 }, mastery: { solErda: 1, frags: 20 }, common: { solErda: 0, frags: 0 } },
        { origin: { solErda: 2, frags: 45 }, enhance: { solErda: 2, frags: 34 }, mastery: { solErda: 1, frags: 23 }, common: { solErda: 0, frags: 0 } },

        { origin: { solErda: 2, frags: 50 }, enhance: { solErda: 2, frags: 38 }, mastery: { solErda: 1, frags: 25 }, common: { solErda: 0, frags: 0 } },
        { origin: { solErda: 2, frags: 55 }, enhance: { solErda: 2, frags: 42 }, mastery: { solErda: 1, frags: 28 }, common: { solErda: 0, frags: 0 } },
        { origin: { solErda: 3, frags: 60 }, enhance: { solErda: 3, frags: 45 }, mastery: { solErda: 1, frags: 30 }, common: { solErda: 0, frags: 0 } },
        { origin: { solErda: 3, frags: 65 }, enhance: { solErda: 3, frags: 49 }, mastery: { solErda: 2, frags: 33 }, common: { solErda: 0, frags: 0 } },
        { origin: { solErda: 10, frags: 200 }, enhance: { solErda: 8, frags: 150 }, mastery: { solErda: 5, frags: 100 }, common: { solErda: 0, frags: 0 } },

        { origin: { solErda: 3, frags: 80 }, enhance: { solErda: 3, frags: 60 }, mastery: { solErda: 2, frags: 40 }, common: { solErda: 0, frags: 0 } },
        { origin: { solErda: 3, frags: 90 }, enhance: { solErda: 3, frags: 68 }, mastery: { solErda: 2, frags: 45 }, common: { solErda: 0, frags: 0 } },
        { origin: { solErda: 4, frags: 100 }, enhance: { solErda: 3, frags: 75 }, mastery: { solErda: 2, frags: 50 }, common: { solErda: 0, frags: 0 } },
        { origin: { solErda: 4, frags: 110 }, enhance: { solErda: 3, frags: 83 }, mastery: { solErda: 2, frags: 55 }, common: { solErda: 0, frags: 0 } },
        { origin: { solErda: 4, frags: 120 }, enhance: { solErda: 3, frags: 90 }, mastery: { solErda: 2, frags: 60 }, common: { solErda: 0, frags: 0 } },

        { origin: { solErda: 4, frags: 130 }, enhance: { solErda: 3, frags: 98 }, mastery: { solErda: 2, frags: 65 }, common: { solErda: 0, frags: 0 } },
        { origin: { solErda: 4, frags: 140 }, enhance: { solErda: 3, frags: 105 }, mastery: { solErda: 2, frags: 70 }, common: { solErda: 0, frags: 0 } },
        { origin: { solErda: 4, frags: 150 }, enhance: { solErda: 3, frags: 113 }, mastery: { solErda: 2, frags: 75 }, common: { solErda: 0, frags: 0 } },
        { origin: { solErda: 5, frags: 160 }, enhance: { solErda: 4, frags: 120 }, mastery: { solErda: 2, frags: 80 }, common: { solErda: 0, frags: 0 } },
        { origin: { solErda: 15, frags: 350 }, enhance: { solErda: 12, frags: 263 }, mastery: { solErda: 8, frags: 175 }, common: { solErda: 0, frags: 0 } },

        { origin: { solErda: 5, frags: 170 }, enhance: { solErda: 4, frags: 128 }, mastery: { solErda: 3, frags: 85 }, common: { solErda: 0, frags: 0 } },
        { origin: { solErda: 5, frags: 180 }, enhance: { solErda: 4, frags: 135 }, mastery: { solErda: 3, frags: 90 }, common: { solErda: 0, frags: 0 } },
        { origin: { solErda: 5, frags: 190 }, enhance: { solErda: 4, frags: 143 }, mastery: { solErda: 3, frags: 95 }, common: { solErda: 0, frags: 0 } },
        { origin: { solErda: 5, frags: 200 }, enhance: { solErda: 4, frags: 150 }, mastery: { solErda: 3, frags: 100 }, common: { solErda: 0, frags: 0 } },
        { origin: { solErda: 5, frags: 210 }, enhance: { solErda: 4, frags: 158 }, mastery: { solErda: 3, frags: 105 }, common: { solErda: 0, frags: 0 } },

        { origin: { solErda: 6, frags: 220 }, enhance: { solErda: 5, frags: 165 }, mastery: { solErda: 3, frags: 110 }, common: { solErda: 0, frags: 0 } },
        { origin: { solErda: 6, frags: 230 }, enhance: { solErda: 5, frags: 173 }, mastery: { solErda: 3, frags: 115 }, common: { solErda: 0, frags: 0 } },
        { origin: { solErda: 6, frags: 240 }, enhance: { solErda: 5, frags: 180 }, mastery: { solErda: 3, frags: 120 }, common: { solErda: 0, frags: 0 } },
        { origin: { solErda: 7, frags: 250 }, enhance: { solErda: 6, frags: 188 }, mastery: { solErda: 3, frags: 125 }, common: { solErda: 0, frags: 0 } },
        { origin: { solErda: 20, frags: 500 }, enhance: { solErda: 15, frags: 375 }, mastery: { solErda: 10, frags: 250 }, common: { solErda: 0, frags: 0 } },
    ];

    const HEXA_STAT_MATERIAL_TABLE = [
        { successChance: 100, solErda: 5, frags: 10 },
        { successChance: 35, solErda: 0, frags: 10 },
        { successChance: 35, solErda: 0, frags: 10 },
        { successChance: 35, solErda: 0, frags: 10 },
        { successChance: 20, solErda: 0, frags: 20 },
        { successChance: 20, solErda: 0, frags: 20 },
        { successChance: 20, solErda: 0, frags: 20 },
        { successChance: 20, solErda: 0, frags: 20 },
        { successChance: 15, solErda: 0, frags: 30 },
        { successChance: 10, solErda: 0, frags: 30 },
        { successChance: 5, solErda: 0, frags: 50 },
    ];
    
    return {
        hexaSkill: HEXA_SKILL_MATERIAL_TABLE,
        hexaStat: HEXA_STAT_MATERIAL_TABLE
    }
}

module.exports = { getTables };