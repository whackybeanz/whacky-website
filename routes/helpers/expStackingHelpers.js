function getEXPContentsValues() {
    let expContents = {
        monsterPark: [
            // minLevel: 105, maxLevel: 139,
            { iconId: "map-magatia", name: "Auto Security Zone", baseMinLevel: 105, recMinLevel: 105, recMaxLevel: 114, rawEXP: 3908220 },
            { iconId: "map-ellin-forest", name: "Mossy Tree Forest", baseMinLevel: 115, recMinLevel: 115, recMaxLevel: 124, rawEXP: 5989675 },
            { iconId: "map-mulung", name: "Sky Forest Training Center", baseMinLevel: 115, recMinLevel: 120, recMaxLevel: 129, rawEXP: 7311630 },
            { iconId: "map-herb-town", name: "Pirates' Secret Base", baseMinLevel: 115, recMinLevel: 125, recMaxLevel: 134, rawEXP: 8129820 },
            { iconId: "map-heliseum", name: "Otherworldly Battleground", baseMinLevel: 115, recMinLevel: 135, recMaxLevel: 144, rawEXP: 11524015 },

            // minLevel: 140, maxLevel: 179,
            { iconId: "map-leafre", name: "Dangerously Isolated Forest", baseMinLevel: 115, recMinLevel: 140, recMaxLevel: 149, rawEXP: 11953470 },
            { iconId: "map-ludibrium", name: "Forbidden Time", baseMinLevel: 115, recMinLevel: 145, recMaxLevel: 154, rawEXP: 13378390 },
            { iconId: "map-golden-temple", name: "Clandestine Ruins", baseMinLevel: 115, recMinLevel: 150, recMaxLevel: 159, rawEXP: 15311670 },
            { iconId: "map-tera-forest", name: "Ruined City", baseMinLevel: 160, recMinLevel: 160, recMaxLevel: 169, rawEXP: 19790735 },
            { iconId: "map-elnath-dungeon", name: "Dead Tree Forest", baseMinLevel: 160, recMinLevel: 170, recMaxLevel: 179, rawEXP: 26950030 },
            { iconId: "map-lkc", name: "Watchman's Tower", baseMinLevel: 160, recMinLevel: 175, recMaxLevel: 184, rawEXP: 27953565 },

            // minLevel: 180, maxLevel: 300,
            { iconId: "map-leafre-2", name: "Dragon Nest", baseMinLevel: 160, recMinLevel: 180, recMaxLevel: 189, rawEXP: 33576980 },
            { iconId: "map-tot", name: "Temple of Oblivion", baseMinLevel: 160, recMinLevel: 185, recMaxLevel: 194, rawEXP: 35340485 },
            { iconId: "map-future-henesys", name: "Knight Stronghold", baseMinLevel: 160, recMinLevel: 190, recMaxLevel: 199, rawEXP: 39187305,
                notes: "May get 39,775,800 EXP instead if final boss is Oz (summons 1 extra Ifrit minion)." },
            { iconId: "map-twilight-perion", name: "Spirit Valley", baseMinLevel: 160, recMinLevel: 200, recMaxLevel: 209, rawEXP: 40650435 },
            { iconId: "map-rte", name: "Road to Extinction", baseMinLevel: 200, recMinLevel: 200, recMaxLevel: 209, isEnforceMinLevel: true, rawEXP: 179957540 }, // 154248920
            { iconId: "map-chew-chew", name: "Chew Chew Island", baseMinLevel: 210, recMinLevel: 210, recMaxLevel: 219, isEnforceMinLevel: true, rawEXP: 642539340 },
            { iconId: "map-lacheln", name: "Lacheln", baseMinLevel: 220, recMinLevel: 220, recMaxLevel: 229, isEnforceMinLevel: true, rawEXP: 1608830495 }, // 1007394250, 1237561920
            { iconId: "map-arcana", name: "Arcana", baseMinLevel: 225, recMinLevel: 230, recMaxLevel: 239, isEnforceMinLevel: true, rawEXP: 2353786685 }, // 2241701605
            { iconId: "map-moras", name: "Moras", baseMinLevel: 230, recMinLevel: 235, recMaxLevel: 245, isEnforceMinLevel: true, rawEXP: 2996755520 },
            { iconId: "map-esfera", name: "Esfera", baseMinLevel: 235, recMinLevel: 240, recMaxLevel: 250, isEnforceMinLevel: true, rawEXP: 3459833685 },
            { iconId: "map-sellas", name: "Sellas / Celestars", baseMinLevel: 240, recMinLevel: 245, recMaxLevel: 250, isEnforceMinLevel: true, rawEXP: 4356407460 },
            { iconId: "map-moonbridge", name: "Moonbridge", baseMinLevel: 245, recMinLevel: 250, recMaxLevel: 255, isEnforceMinLevel: true, rawEXP: 5858308250 },
            { iconId: "map-labyrinth", name: "Labyrinth of Pain", baseMinLevel: 250, recMinLevel: 250, recMaxLevel: 260, isEnforceMinLevel: true, rawEXP: 7029450500 },
            { iconId: "map-limen", name: "Limen", baseMinLevel: 255, recMinLevel: 255, recMaxLevel: 260, isEnforceMinLevel: true, rawEXP: 7776278700 },
        ],
        symbolContent: [
            { iconId: "symbol-rte", name: "Road to Extinction", recMinLevel: 200, isEnforceMinLevel: true, dailyRawEXP: 732132258, hasWeekly: true, weeklyName: "Erda Spectrum", weeklyRawEXP: 187726220 },
            { iconId: "symbol-cci", name: "Chew Chew Island", recMinLevel: 210, isEnforceMinLevel: true, dailyRawEXP: 2141658246, hasWeekly: true, weeklyName: "Hungry Muto", weeklyRawEXP: 549143140 },
            { iconId: "symbol-lacheln", name: "Lacheln", recMinLevel: 220, isEnforceMinLevel: true, dailyRawEXP: 3189098250, hasWeekly: true, weeklyName: "Midnight Chaser", weeklyRawEXP: 817717500 },
            { iconId: "symbol-arcana", name: "Arcana", recMinLevel: 225, isEnforceMinLevel: true, dailyRawEXP: 3305187639, hasWeekly: true, weeklyName: "Spirit Savior", weeklyRawEXP: 847484010 },
            { iconId: "symbol-moras", name: "Moras", recMinLevel: 230, isEnforceMinLevel: true, dailyRawEXP: 4398266165, hasWeekly: true, weeklyName: "Enheim Defense", weeklyRawEXP: 1127760555 },
            { iconId: "symbol-esfera", name: "Esfera", recMinLevel: 235, isEnforceMinLevel: true, dailyRawEXP: 4530843954, hasWeekly: true, weeklyName: "Protect Esfera", weeklyRawEXP: 1161754860 },
            { iconId: "map-moonbridge", name: "Moonbridge", recMinLevel: 245, isEnforceMinLevel: true, dailyRawEXP: 8397548775 },
            { iconId: "map-labyrinth", name: "Labyrinth of Suffering", recMinLevel: 250, isEnforceMinLevel: true, dailyRawEXP: 9057690000 },
            { iconId: "map-limen", name: "Limen", recMinLevel: 255, isEnforceMinLevel: true, dailyRawEXP: 10225741680 },
            { iconId: "symbol-cernium", name: "Cernium", recMinLevel: 260, isEnforceMinLevel: true, dailyRawEXP: 16455682080 },
            { iconId: "symbol-hotel-arcs", name: "Hotel Arcs", recMinLevel: 265, isEnforceMinLevel: true, dailyRawEXP: 19372782409 },
            { iconId: "symbol-odium", name: "Odium", recMinLevel: 270, isEnforceMinLevel: true, dailyRawEXP: 23246151120 },
            { iconId: "symbol-dwk", name: "Shangri-La", recMinLevel: 275, isEnforceMinLevel: true, dailyRawEXP: 32127015480 },
            { iconId: "symbol-arteria", name: "Arteria", recMinLevel: 280, isEnforceMinLevel: true, dailyRawEXP: 38593455264 },
            { iconId: "symbol-carcion", name: "Carcion", recMinLevel: 285, isEnforceMinLevel: true, dailyRawEXP: 45635222880 },
        ],
    }

    return expContents;
}

function getPotionList() {
    let potionList = {
        extreme: { id: "extreme-growth-potion", name: "Extreme Growth Potion", minLevel: 141, maxLevel: 199 },
        potion1: { id: "growth-potion-1", name: "Growth Potion 1", minLevel: 200, maxLevel: 209 },
        potion2: { id: "growth-potion-2", name: "Growth Potion 2", minLevel: 200, maxLevel: 219 },
        potion3: { id: "growth-potion-3", name: "Growth Potion 3", minLevel: 200, maxLevel: 229 },
        typhoon: { id: "typhoon-growth-potion", name: "Typhoon Growth Potion", minLevel: 200, maxLevel: 239 },
        maximum: { id: "maximum-growth-potion", name: "Maximum Growth Potion", minLevel: 200, maxLevel: 249 },
    }

    return potionList;
}

function groupMonstersByMap(icons, monsterList) {
    const allMaps = [...new Set(monsterList.map(monster => monster.mapId))];
    let monstersByMap = {};

    allMaps.forEach(mapIconId => {
        let matchingMapIconData = icons.find(icon => icon.id === mapIconId);

        monstersByMap[mapIconId] = {
            mapIconImgUrl: matchingMapIconData.imgUrl,
            mapIconName: matchingMapIconData.name,
            monsterList: [],
        }
    })

    monsterList.forEach(monster => {
        monstersByMap[monster.mapId].monsterList.push(monster);
    })

    return monstersByMap;
}

module.exports = { getEXPContentsValues, getPotionList, groupMonstersByMap };