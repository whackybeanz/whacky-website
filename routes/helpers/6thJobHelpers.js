function getTables() {
    const HEXA_SKILL_MATERIAL_TABLE = [
        { origin: { solErda: 5, frag: 100 }, enhancement: { solErda: 4, frag: 75 }, mastery: { solErda: 3, frag: 50 }, common: { solErda: 0, frag: 0 } },
        { origin: { solErda: 1, frag: 30 }, enhancement: { solErda: 1, frag: 23 }, mastery: { solErda: 1, frag: 15 }, common: { solErda: 0, frag: 0 } },
        { origin: { solErda: 1, frag: 35 }, enhancement: { solErda: 1, frag: 27 }, mastery: { solErda: 1, frag: 18 }, common: { solErda: 0, frag: 0 } },
        { origin: { solErda: 1, frag: 40 }, enhancement: { solErda: 1, frag: 30 }, mastery: { solErda: 1, frag: 20 }, common: { solErda: 0, frag: 0 } },
        { origin: { solErda: 2, frag: 45 }, enhancement: { solErda: 2, frag: 34 }, mastery: { solErda: 1, frag: 23 }, common: { solErda: 0, frag: 0 } },

        { origin: { solErda: 2, frag: 50 }, enhancement: { solErda: 2, frag: 38 }, mastery: { solErda: 1, frag: 25 }, common: { solErda: 0, frag: 0 } },
        { origin: { solErda: 2, frag: 55 }, enhancement: { solErda: 2, frag: 42 }, mastery: { solErda: 1, frag: 28 }, common: { solErda: 0, frag: 0 } },
        { origin: { solErda: 3, frag: 60 }, enhancement: { solErda: 3, frag: 45 }, mastery: { solErda: 1, frag: 30 }, common: { solErda: 0, frag: 0 } },
        { origin: { solErda: 3, frag: 65 }, enhancement: { solErda: 3, frag: 49 }, mastery: { solErda: 2, frag: 33 }, common: { solErda: 0, frag: 0 } },
        { origin: { solErda: 10, frag: 200 }, enhancement: { solErda: 8, frag: 150 }, mastery: { solErda: 5, frag: 100 }, common: { solErda: 0, frag: 0 } },

        { origin: { solErda: 3, frag: 80 }, enhancement: { solErda: 3, frag: 60 }, mastery: { solErda: 2, frag: 40 }, common: { solErda: 0, frag: 0 } },
        { origin: { solErda: 3, frag: 90 }, enhancement: { solErda: 3, frag: 68 }, mastery: { solErda: 2, frag: 45 }, common: { solErda: 0, frag: 0 } },
        { origin: { solErda: 4, frag: 100 }, enhancement: { solErda: 3, frag: 75 }, mastery: { solErda: 2, frag: 50 }, common: { solErda: 0, frag: 0 } },
        { origin: { solErda: 4, frag: 110 }, enhancement: { solErda: 3, frag: 83 }, mastery: { solErda: 2, frag: 55 }, common: { solErda: 0, frag: 0 } },
        { origin: { solErda: 4, frag: 120 }, enhancement: { solErda: 3, frag: 90 }, mastery: { solErda: 2, frag: 60 }, common: { solErda: 0, frag: 0 } },

        { origin: { solErda: 4, frag: 130 }, enhancement: { solErda: 3, frag: 98 }, mastery: { solErda: 2, frag: 65 }, common: { solErda: 0, frag: 0 } },
        { origin: { solErda: 4, frag: 140 }, enhancement: { solErda: 3, frag: 105 }, mastery: { solErda: 2, frag: 70 }, common: { solErda: 0, frag: 0 } },
        { origin: { solErda: 4, frag: 150 }, enhancement: { solErda: 3, frag: 113 }, mastery: { solErda: 2, frag: 75 }, common: { solErda: 0, frag: 0 } },
        { origin: { solErda: 5, frag: 160 }, enhancement: { solErda: 4, frag: 120 }, mastery: { solErda: 2, frag: 80 }, common: { solErda: 0, frag: 0 } },
        { origin: { solErda: 15, frag: 350 }, enhancement: { solErda: 12, frag: 263 }, mastery: { solErda: 8, frag: 175 }, common: { solErda: 0, frag: 0 } },

        { origin: { solErda: 5, frag: 170 }, enhancement: { solErda: 4, frag: 128 }, mastery: { solErda: 3, frag: 85 }, common: { solErda: 0, frag: 0 } },
        { origin: { solErda: 5, frag: 180 }, enhancement: { solErda: 4, frag: 135 }, mastery: { solErda: 3, frag: 90 }, common: { solErda: 0, frag: 0 } },
        { origin: { solErda: 5, frag: 190 }, enhancement: { solErda: 4, frag: 143 }, mastery: { solErda: 3, frag: 95 }, common: { solErda: 0, frag: 0 } },
        { origin: { solErda: 5, frag: 200 }, enhancement: { solErda: 4, frag: 150 }, mastery: { solErda: 3, frag: 100 }, common: { solErda: 0, frag: 0 } },
        { origin: { solErda: 5, frag: 210 }, enhancement: { solErda: 4, frag: 158 }, mastery: { solErda: 3, frag: 105 }, common: { solErda: 0, frag: 0 } },

        { origin: { solErda: 6, frag: 220 }, enhancement: { solErda: 5, frag: 165 }, mastery: { solErda: 3, frag: 110 }, common: { solErda: 0, frag: 0 } },
        { origin: { solErda: 6, frag: 230 }, enhancement: { solErda: 5, frag: 173 }, mastery: { solErda: 3, frag: 115 }, common: { solErda: 0, frag: 0 } },
        { origin: { solErda: 6, frag: 240 }, enhancement: { solErda: 5, frag: 180 }, mastery: { solErda: 3, frag: 120 }, common: { solErda: 0, frag: 0 } },
        { origin: { solErda: 7, frag: 250 }, enhancement: { solErda: 6, frag: 188 }, mastery: { solErda: 3, frag: 125 }, common: { solErda: 0, frag: 0 } },
        { origin: { solErda: 20, frag: 500 }, enhancement: { solErda: 15, frag: 375 }, mastery: { solErda: 10, frag: 250 }, common: { solErda: 0, frag: 0 } },
    ];

    const HEXA_STAT_MATERIAL_TABLE = [
        { successChance: 100, solErda: 5, frag: 10 },
        { successChance: 35, solErda: 0, frag: 10 },
        { successChance: 35, solErda: 0, frag: 10 },
        { successChance: 35, solErda: 0, frag: 10 },
        { successChance: 20, solErda: 0, frag: 20 },
        { successChance: 20, solErda: 0, frag: 20 },
        { successChance: 20, solErda: 0, frag: 20 },
        { successChance: 20, solErda: 0, frag: 20 },
        { successChance: 15, solErda: 0, frag: 30 },
        { successChance: 10, solErda: 0, frag: 30 },
        { successChance: 5, solErda: 0, frag: 50 },
    ];
    
    return {
        hexaSkill: HEXA_SKILL_MATERIAL_TABLE,
        hexaStat: HEXA_STAT_MATERIAL_TABLE
    }
}

module.exports = { getTables };