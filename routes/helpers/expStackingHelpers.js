function getEXPContentsValues() {
    let expContents = {
        monsterPark: [
            // minLevel: 105, maxLevel: 115,
            { iconId: "map-magatia", name: "Auto Security Zone", baseMinLevel: 105, recMinLevel: 105, recMaxLevel: 114, rawEXP: 3517411 },

            // minLevel: 115, maxLevel: 160,
            { iconId: "map-ellin-forest", name: "Mossy Tree Forest", baseMinLevel: 115, recMinLevel: 115, recMaxLevel: 124, rawEXP: 5989675 },
            { iconId: "map-mulung", name: "Sky Forest Training Center", baseMinLevel: 115, recMinLevel: 120, recMaxLevel: 129, rawEXP: 7311630 },
            { iconId: "map-herb-town", name: "Pirates' Secret Base", baseMinLevel: 115, recMinLevel: 125, recMaxLevel: 134, rawEXP: 8129820 },
            { iconId: "map-heliseum", name: "Otherworldly Battleground", baseMinLevel: 115, recMinLevel: 135, recMaxLevel: 144, rawEXP: 11524015 },
            { iconId: "map-leafre", name: "Dangerously Isolated Forest", baseMinLevel: 115, recMinLevel: 140, recMaxLevel: 149, rawEXP: 11953470 },
            { iconId: "map-ludibrium", name: "Forbidden Time", baseMinLevel: 115, recMinLevel: 145, recMaxLevel: 154, rawEXP: 13378390 },
            { iconId: "map-golden-temple", name: "Clandestine Ruins", baseMinLevel: 115, recMinLevel: 150, recMaxLevel: 159, rawEXP: 15311670 },

            // minLevel: 160, maxLevel: 300,
            { iconId: "map-tera-forest", name: "Ruined City", baseMinLevel: 160, recMinLevel: 160, recMaxLevel: 169, rawEXP: 19790735 },
            { iconId: "map-elnath-dungeon", name: "Dead Tree Forest", baseMinLevel: 160, recMinLevel: 170, recMaxLevel: 179, rawEXP: 26950030 },
            { iconId: "map-lkc", name: "Watchman's Tower", baseMinLevel: 160, recMinLevel: 175, recMaxLevel: 184, rawEXP: 27953565 },
            { iconId: "map-leafre-2", name: "Dragon Nest", baseMinLevel: 160, recMinLevel: 180, recMaxLevel: 189, rawEXP: 33576980 },
            { iconId: "map-tot", name: "Temple of Oblivion", baseMinLevel: 160, recMinLevel: 185, recMaxLevel: 194, rawEXP: 35340485 },
            { iconId: "map-future-henesys", name: "Knight Stronghold", baseMinLevel: 160, recMinLevel: 190, recMaxLevel: 199, rawEXP: 39187305,
                notes: "May get 39,775,800 EXP instead if final boss is Oz (summons 1 extra Ifrit minion)." },
            { iconId: "map-twilight-perion", name: "Spirit Valley", baseMinLevel: 160, recMinLevel: 200, recMaxLevel: 209, rawEXP: 40650435 },
            { iconId: "map-rte", name: "Road to Extinction", baseMinLevel: 200, recMinLevel: 200, recMaxLevel: 209, isEnforceMinLevel: true, rawEXP: 179957540 }, // 154248920
            { iconId: "map-chew-chew", name: "Chew Chew Island", baseMinLevel: 210, recMinLevel: 210, recMaxLevel: 219, isEnforceMinLevel: true, rawEXP: 642539340 },
            { iconId: "map-lacheln", name: "Lacheln", baseMinLevel: 220, recMinLevel: 220, recMaxLevel: 229, isEnforceMinLevel: true, rawEXP: 1237561920 }, // 1007394250
            { iconId: "map-arcana", name: "Arcana", baseMinLevel: 225, recMinLevel: 230, recMaxLevel: 239, isEnforceMinLevel: true, rawEXP: 2241701605 },
        ],
        dailies: [
            { iconId: "symbol-rte", name: "Road to Extinction", recMinLevel: 200, isEnforceMinLevel: true, rawEXP: 372966000 },
            { iconId: "symbol-cci", name: "Chew Chew Island", recMinLevel: 210, isEnforceMinLevel: true, rawEXP: 910182000 },
            { iconId: "symbol-lacheln", name: "Lacheln", recMinLevel: 220, isEnforceMinLevel: true, rawEXP: 1635435000 },
            { iconId: "symbol-arcana", name: "Arcana", recMinLevel: 225, isEnforceMinLevel: true, rawEXP: 2118710025 },
            { iconId: "symbol-moras", name: "Moras", recMinLevel: 230, isEnforceMinLevel: true, rawEXP: 2333297700 },
            { iconId: "symbol-esfera", name: "Esfera", recMinLevel: 235, isEnforceMinLevel: true, rawEXP: 2489474700 },
            { iconId: "map-moonbridge", name: "Moonbridge", recMinLevel: 245, isEnforceMinLevel: true, rawEXP: 0 },
            { iconId: "map-labyrinth", name: "Labyrinth of Suffering", recMinLevel: 250, isEnforceMinLevel: true, rawEXP: 0 },
            { iconId: "map-limen", name: "Limen", recMinLevel: 255, isEnforceMinLevel: true, rawEXP: 0 },
            { iconId: "map-cernium", name: "Cernium", recMinLevel: 260, isEnforceMinLevel: true, rawEXP: 0 },
            { iconId: "map-cernium-2", name: "Burning Cernium", recMinLevel: 265, isEnforceMinLevel: true, rawEXP: 0 },
            { iconId: "map-hotel-arcs", name: "Hotel Arcs", recMinLevel: 270, isEnforceMinLevel: true, rawEXP: 0 },
        ]
    }

    return expContents;
}

module.exports = { calculateGeneralContentsEXP, getEXPContentsValues };