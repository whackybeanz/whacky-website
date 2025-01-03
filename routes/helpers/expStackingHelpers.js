function getEXPContentsValues() {
    let expContents = {
        monsterPark: [
            // minLevel: 105, maxLevel: 139,
            { iconId: "map-magatia", name: "Auto Security Zone", baseMinLevel: 105, recMinLevel: 105, recMaxLevel: 114, rawEXP: 7816440 },
            { iconId: "map-ellin-forest", name: "Mossy Tree Forest", baseMinLevel: 115, recMinLevel: 115, recMaxLevel: 124, rawEXP: 11979350 },
            { iconId: "map-mulung", name: "Sky Forest Training Center", baseMinLevel: 115, recMinLevel: 120, recMaxLevel: 129, rawEXP: 14623260 },
            { iconId: "map-herb-town", name: "Pirates' Secret Base", baseMinLevel: 115, recMinLevel: 125, recMaxLevel: 134, rawEXP: 16259640 },
            { iconId: "map-heliseum", name: "Otherworldly Battleground", baseMinLevel: 115, recMinLevel: 135, recMaxLevel: 144, rawEXP: 23048030 },

            // minLevel: 140, maxLevel: 179,
            { iconId: "map-leafre", name: "Dangerously Isolated Forest", baseMinLevel: 115, recMinLevel: 140, recMaxLevel: 149, rawEXP: 23906940 },
            { iconId: "map-ludibrium", name: "Forbidden Time", baseMinLevel: 115, recMinLevel: 145, recMaxLevel: 154, rawEXP: 26756780 },
            { iconId: "map-golden-temple", name: "Clandestine Ruins", baseMinLevel: 115, recMinLevel: 150, recMaxLevel: 159, rawEXP: 30623340 },
            { iconId: "map-tera-forest", name: "Ruined City", baseMinLevel: 160, recMinLevel: 160, recMaxLevel: 169, rawEXP: 39581470 },
            { iconId: "map-elnath-dungeon", name: "Dead Tree Forest", baseMinLevel: 160, recMinLevel: 170, recMaxLevel: 179, rawEXP: 53900060 },
            { iconId: "map-lkc", name: "Watchman's Tower", baseMinLevel: 160, recMinLevel: 175, recMaxLevel: 184, rawEXP: 55907130 },

            // minLevel: 180, maxLevel: 300,
            { iconId: "map-leafre-2", name: "Dragon Nest", baseMinLevel: 160, recMinLevel: 180, recMaxLevel: 189, rawEXP: 67153960 },
            { iconId: "map-tot", name: "Temple of Oblivion", baseMinLevel: 160, recMinLevel: 185, recMaxLevel: 194, rawEXP: 70680970 },
            { iconId: "map-future-henesys", name: "Knight Stronghold", baseMinLevel: 160, recMinLevel: 190, recMaxLevel: 199, rawEXP: 78374610,
                notes: "May get 39,775,800 EXP instead if final boss is Oz (summons 1 extra Ifrit minion)." },
            { iconId: "map-twilight-perion", name: "Spirit Valley", baseMinLevel: 160, recMinLevel: 200, recMaxLevel: 209, rawEXP: 81300870 },
            { iconId: "map-rte", name: "Road to Extinction", baseMinLevel: 200, recMinLevel: 200, recMaxLevel: 209, isEnforceMinLevel: true, rawEXP: 359915080 }, // 154248920
            { iconId: "map-chew-chew", name: "Chew Chew Island", baseMinLevel: 210, recMinLevel: 210, recMaxLevel: 219, isEnforceMinLevel: true, rawEXP: 1285078680 },
            { iconId: "map-lacheln", name: "Lacheln", baseMinLevel: 220, recMinLevel: 220, recMaxLevel: 229, isEnforceMinLevel: true, rawEXP: 3217660990 }, // 1007394250, 1237561920
            { iconId: "map-arcana", name: "Arcana", baseMinLevel: 225, recMinLevel: 230, recMaxLevel: 239, isEnforceMinLevel: true, rawEXP: 4707573370 }, // 2241701605
            { iconId: "map-moras", name: "Moras", baseMinLevel: 230, recMinLevel: 235, recMaxLevel: 245, isEnforceMinLevel: true, rawEXP: 5993511040 },
            { iconId: "map-esfera", name: "Esfera", baseMinLevel: 235, recMinLevel: 240, recMaxLevel: 250, isEnforceMinLevel: true, rawEXP: 6919667370 },
            { iconId: "map-sellas", name: "Sellas / Celestars", baseMinLevel: 240, recMinLevel: 245, recMaxLevel: 250, isEnforceMinLevel: true, rawEXP: 8712814920 },
            { iconId: "map-moonbridge", name: "Moonbridge", baseMinLevel: 245, recMinLevel: 250, recMaxLevel: 255, isEnforceMinLevel: true, rawEXP: 11716616500 },
            { iconId: "map-labyrinth", name: "Labyrinth of Pain", baseMinLevel: 250, recMinLevel: 250, recMaxLevel: 260, isEnforceMinLevel: true, rawEXP: 14058901000 },
            { iconId: "map-limen", name: "Limen", baseMinLevel: 255, recMinLevel: 255, recMaxLevel: 260, isEnforceMinLevel: true, rawEXP: 15552557400 },
        ],
        symbolContent: [
            { iconId: "symbol-rte", name: "Road to Extinction", nameTw: "消逝的旅途", recMinLevel: 200, isEnforceMinLevel: true, dailyRawEXP: 732132258, hasWeekly: true, weeklyName: "Erda Spectrum", weeklyNameTw: "艾爾達斯光譜", weeklyRawEXP: 187726220 },
            { iconId: "symbol-cci", name: "Chew Chew Island", nameTw: "啾啾愛爾蘭", recMinLevel: 210, isEnforceMinLevel: true, dailyRawEXP: 2141658246, hasWeekly: true, weeklyName: "Hungry Muto", weeklyNameTw: "肚子餓的武藤", weeklyRawEXP: 549143140 },
            { iconId: "symbol-lacheln", name: "Lacheln", nameTw: "拉契爾恩", recMinLevel: 220, isEnforceMinLevel: true, dailyRawEXP: 3189098250, hasWeekly: true, weeklyName: "Midnight Chaser", weeklyNameTw: "午夜追擊者", weeklyRawEXP: 817717500 },
            { iconId: "symbol-arcana", name: "Arcana", nameTw: "阿爾卡", recMinLevel: 225, isEnforceMinLevel: true, dailyRawEXP: 3305187639, hasWeekly: true, weeklyName: "Spirit Savior", weeklyNameTw: "精靈救助者", weeklyRawEXP: 847484010 },
            { iconId: "symbol-moras", name: "Moras", nameTw: "魔菈斯", recMinLevel: 230, isEnforceMinLevel: true, dailyRawEXP: 4398266165, hasWeekly: true, weeklyName: "Enheim Defense", weeklyNameTw: "防禦安哈林", weeklyRawEXP: 1127760555 },
            { iconId: "symbol-esfera", name: "Esfera", nameTw: "埃斯佩拉", recMinLevel: 235, isEnforceMinLevel: true, dailyRawEXP: 4530843954, hasWeekly: true, weeklyName: "Protect Esfera", weeklyNameTw: "保護艾斯佩拉", weeklyRawEXP: 1161754860 },
            { iconId: "map-moonbridge", name: "Moonbridge", nameTw: "月之橋", recMinLevel: 245, isEnforceMinLevel: true, dailyRawEXP: 8397548775 },
            { iconId: "map-labyrinth", name: "Labyrinth of Suffering", nameTw: "苦痛迷宮", recMinLevel: 250, isEnforceMinLevel: true, dailyRawEXP: 9057690000 },
            { iconId: "map-limen", name: "Limen", nameTw: "利曼", recMinLevel: 255, isEnforceMinLevel: true, dailyRawEXP: 10225741680 },
            { iconId: "symbol-cernium", name: "Cernium", nameTw: "賽爾尼溫", recMinLevel: 260, isEnforceMinLevel: true, dailyRawEXP: 16455682080 },
            { iconId: "symbol-hotel-arcs", name: "Hotel Arcs", nameTw: "阿爾克斯", recMinLevel: 265, isEnforceMinLevel: true, dailyRawEXP: 19372782409 },
            { iconId: "symbol-odium", name: "Odium", nameTw: "奧迪溫", recMinLevel: 270, isEnforceMinLevel: true, dailyRawEXP: 23246151120 },
            { iconId: "symbol-dwk", name: "Shangri-La", nameTw: "桃園境", recMinLevel: 275, isEnforceMinLevel: true, dailyRawEXP: 32127015480 },
            { iconId: "symbol-arteria", name: "Arteria", nameTw: "阿爾特利亞", recMinLevel: 280, isEnforceMinLevel: true, dailyRawEXP: 38593455264 },
            { iconId: "symbol-carcion", name: "Carcion", nameTw: "卡爾西溫", recMinLevel: 285, isEnforceMinLevel: true, dailyRawEXP: 45635222880 },
        ],
    }

    return expContents;
}

function getPotionList() {
    let potionList = {
        extreme: { id: "extreme-growth-potion", name: "Extreme Growth Potion", nameTw: "終極成長秘藥", minLevel: 141, maxLevel: 199 },
        potion1: { id: "growth-potion-1", name: "Growth Potion 1", nameTw: "成長秘藥1", minLevel: 200, maxLevel: 209 },
        potion2: { id: "growth-potion-2", name: "Growth Potion 2", nameTw: "成長秘藥2", minLevel: 200, maxLevel: 219 },
        potion3: { id: "growth-potion-3", name: "Growth Potion 3", nameTw: "成長秘藥3", minLevel: 200, maxLevel: 229 },
        typhoon: { id: "typhoon-growth-potion", name: "Typhoon Growth Potion", nameTw: "颱風成長秘藥", minLevel: 200, maxLevel: 239 },
        maximum: { id: "maximum-growth-potion", name: "Maximum Growth Potion", nameTw: "極限成長秘藥", minLevel: 200, maxLevel: 249 },
        transcendent: { id: "transcendent-growth-potion", name: "Transcendent Growth Potion", nameTw: "超凡成長秘藥", minLevel: 200, maxLevel: 269 },
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