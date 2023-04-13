function compileSoulsByTier(allSouls) {
    const allSoulTiers = [...new Set(allSouls.map(soul => soul.tier))];
    let soulsByTier = {};

    // Create keys for each tier
    // Assign items to their respective tiers
    // For each item within their tiers, sort by order priority
    allSoulTiers.forEach(tier => soulsByTier[tier] = []);
    allSouls.forEach(soul => soulsByTier[soul.tier].push(soul));
    Object.keys(soulsByTier).forEach(key => soulsByTier[key].sort((a, b) => a.orderPriority - b.orderPriority));

    // Count number of souls in each tier
    // Assign a summed value of souls as starting count for carousel
    let currSummedSoulCount = 0;
    allSoulTiers.forEach(tier => {
        soulsByTier[tier].currSummedSoulCount = currSummedSoulCount;
        currSummedSoulCount += soulsByTier[tier].length;
    });

    return soulsByTier;
}

function compileSetItemsByItemPart(equips) {
    const allEquipTypes = [...new Set(equips.map(equip => equip.equipType))];
    let setItemsByItemPart = {};
    
    // Create keys for each item part
    // Assign items to their respective item parts
    // For each item within their item parts, sort first by level (descending order), then by groupId (descending order), then by subgroupId (ascending order)
    allEquipTypes.forEach(type => setItemsByItemPart[type] = []);
    equips.forEach(equip => setItemsByItemPart[equip.equipType].push(equip));
    Object.keys(setItemsByItemPart).forEach(key => setItemsByItemPart[key].sort((a, b) => b.level - a.level || b.groupId - a.groupId || a.subgroupId - b.subgroupId));

    return setItemsByItemPart;
}

function compileSetItemsBySetName(equips) {
    const allSetNames = [...new Set(equips.map(equip => equip.setType))];
    const displayPriority = {
        hat: 1, top: 2, bottom: 3, shoes: 4, gloves: 5, cape: 6, face: 7, eye: 8, earring: 9, ring: 10, 
        belt: 11, pendant: 12, shoulder: 13, pocket: 14, badge: 15, heart: 16, emblem: 17, weapon: 18, secondary: 19, medal: 1000, android: 1001
    }

    let setItemsBySetName = {};

    // Create keys for each set name
    allSetNames.forEach(setName => {
        if(setName !== "none") {
            setItemsBySetName[setName] = [];
        }
    });

    // Assign items to their respective sets
    equips.forEach(equip => {
        if(equip.setType !== "none") {
            setItemsBySetName[equip.setType].push(equip);
        }
    });

    // For each item within their set names
    // Sort first by item part priority (ascending order), then by item level (ascending order), then by subgroupId (ascending order)
    Object.keys(setItemsBySetName).forEach(key => setItemsBySetName[key].sort((a, b) => displayPriority[a.equipType] - displayPriority[b.equipType] || a.level - b.level || a.subgroupId - b.subgroupId));

    return setItemsBySetName;
}

function sortByPrice(bossList) {
    var bossPriceArr = [];
    var difficulties = ["easy", "normal", "hard", "chaos", "extreme"];

    bossList.forEach(function(boss) {
        difficulties.forEach(function(mode) {
            if(boss[mode] !== 0) {
                bossPriceArr.push({ id: boss.id, difficulty: `(${mode.charAt(0).toUpperCase() + mode.slice(1)})`, crystalPrice: boss[mode]});
            }
        })
    })

    bossPriceArr.sort((boss1, boss2) => {
        return boss1.crystalPrice - boss2.crystalPrice;
    })

    return bossPriceArr;
}

function groupByRank(potentialList) {
    const allPotentialTypes = ["regular", "additional"];
    const allPotentialRanks = [...new Set(potentialList.map(singleList => singleList.potRankName.toLowerCase()))];
    const allCubeTypes = ["red", "black", "additional"];

    let potentialsByRank = {
        regular: {},
        additional: {},
    };

    allPotentialRanks.forEach(function(rank) {
        potentialsByRank.regular[rank] = { totalWeight: 0, list: [] };
        potentialsByRank.additional[rank] = { totalWeight: 0, list: [] };
    })

    potentialList.forEach(listItem => {
        let affectedRankObj = potentialsByRank[listItem.potType][listItem.potRankName.toLowerCase()];

        listItem.potentials.forEach(statType => {
            affectedRankObj.totalWeight += statType.weight;
            affectedRankObj.list.push({ desc: statType.desc, weight: statType.weight });
        })
    });

    return potentialsByRank;
}

function getCubeRates() {
    const cubeRates = {
        red: {
            line1: { 
                legendary: { prime: 100, secondary: 0 }, 
                unique: { prime: 100, secondary: 0 }, 
                epic: { prime: 100, secondary: 0 }, 
                rare: { prime: 100, secondary: 0 } 
            },
            line2: { 
                legendary: { prime: 10, secondary: 90 },
                unique: { prime: 10, secondary: 90 },
                epic: { prime: 10, secondary: 90 },
                rare: { prime: 10, secondary: 90 } 
            },
            line3: { 
                legendary: { prime: 1, secondary: 99 },
                unique: { prime: 1, secondary: 99 },
                epic: { prime: 1, secondary: 99 },
                rare: { prime: 1, secondary: 99 } 
            }, 
        },
        black: {
            line1: { 
                legendary: { prime: 100, secondary: 0 }, 
                unique: { prime: 100, secondary: 0 }, 
                epic: { prime: 100, secondary: 0 }, 
                rare: { prime: 100, secondary: 0 } 
            },
            line2: { 
                legendary: { prime: 20, secondary: 80 },
                unique: { prime: 20, secondary: 80 },
                epic: { prime: 20, secondary: 80 },
                rare: { prime: 20, secondary: 80 } 
            },
            line3: { 
                legendary: { prime: 5, secondary: 95 },
                unique: { prime: 5, secondary: 95 },
                epic: { prime: 5, secondary: 95 },
                rare: { prime: 5, secondary: 95 } 
            },
        },
        addPot: {
            line1: { 
                legendary: { prime: 100, secondary: 0 }, 
                unique: { prime: 100, secondary: 0 }, 
                epic: { prime: 100, secondary: 0 }, 
                rare: { prime: 100, secondary: 0 } 
            },
            line2: { 
                legendary: { prime: 0.4975, secondary: 99.5025 },
                unique: { prime: 1.9608, secondary: 98.0392 },
                epic: { prime: 4.7619, secondary: 95.2381 },
                rare: { prime: 1.9608, secondary: 98.0392 } 
            },
            line3: { 
                legendary: { prime: 0.4975, secondary: 99.5025 },
                unique: { prime: 1.9608, secondary: 98.0392 },
                epic: { prime: 4.7619, secondary: 95.2381 },
                rare: { prime: 1.9608, secondary: 98.0392 } 
            },
        }
    };

    return cubeRates;
}

function sortMonsterLifeList(list) {
    return list.sort((a, b) => {
        const effectA = a.effectRaw.toUpperCase();
        const effectB = b.effectRaw.toUpperCase();

        if(effectA < effectB) { 
            return -1; 
        }

        if(effectA > effectB) { 
            return 1; 
        }

        return a.priorityValue - b.priorityValue || a.rank - b.rank;
    })
}

function getUsefulFarmsList() {
    const usefulFarms = {
        dedicated: [{ name: "HentaiFarm02", types: ["Reptile"], ranks: ["S"], rankStrs: ["S reg"] }, { name: "HentaiFarm03", types: ["Bird"], ranks: ["B+"], rankStrs: ["B plus"] }, { name: "HentaiFarm04", types: ["Bird"], ranks: ["B+"], rankStrs: ["B plus"] }, 
                    { name: "HentaiMech", types: ["Bird", "Undead"], ranks: ["S"], rankStrs: ["S reg"] }, { name: "KishinLiaoLa", types: ["Reptile", "Toy", "Undead"], ranks: ["S"], rankStrs: ["S reg"] }, { name: "LAsttime", types: ["Cow"], ranks: ["A+", "S"], rankStrs: ["A plus", "S reg"] },
                    { name: "LuckyStar999", types: ["Demon"], ranks: ["S"], rankStrs: ["S reg"] }, { name: "Rendezvous", types: ["Cow"], ranks: ["A+"], rankStrs: ["A plus"] }, { name: "souiz", types: ["Demon"], ranks: ["A+"], rankStrs: ["A plus"] },
                    { name: "SwiftArrow", types: ["Demon"], ranks: ["A+"], rankStrs: ["A plus"] }, 
                    { name: "xArtificial", types: ["A.I."], ranks: ["C"], rankStrs: ["C reg"] }, { name: "xBird", types: ["Bird"], ranks: ["C"], rankStrs: ["C reg"] }, { name: "xCat", types: ["Cat"], ranks: ["C"], rankStrs: ["C reg"] }, 
                    { name: "xCow", types: ["Cow"], ranks: ["C"], rankStrs: ["C reg"] }, { name: "xDemihuman", types: ["Demihuman"], ranks: ["C"], rankStrs: ["C reg"] }, { name: "xDemon", types: ["Demon"], ranks: ["C"], rankStrs: ["C reg"] }, 
                    { name: "xDragons", types: ["Dragon"], ranks: ["C"], rankStrs: ["C reg"] }, { name: "xDog", types: ["Dog"], ranks: ["C"], rankStrs: ["C reg"] }, { name: "xErdas", types: ["Erdas"], ranks: ["C"], rankStrs: ["C reg"] }, 
                    { name: "xFairy", types: ["Fairy"], ranks: ["C"], rankStrs: ["C reg"] }, { name: "xFlora", types: ["Plant"], ranks: ["C"], rankStrs: ["C reg"] }, { name: "xGhost", types: ["Ghost"], ranks: ["C"], rankStrs: ["C reg"] },
                    { name: "xMonkey", types: ["Monkey & Bear"], ranks: ["C"], rankStrs: ["C reg"] }, { name: "xMushrooms", types: ["Mushroom"], ranks: ["C"], rankStrs: ["C reg"] }, { name: "xPig", types: ["Pig"], ranks: ["C"], rankStrs: ["C reg"] },
                    { name: "xReptile", types: ["Reptile"], ranks: ["C"], rankStrs: ["C reg"] }, { name: "xSlime", types: ["Slime & Snail"], ranks: ["C"], rankStrs: ["C reg"] }, { name: "xSoldier", types: ["Soldier"], ranks: ["C"], rankStrs: ["C reg"] },
                    { name: "xSpirit", types: ["Spirit"], ranks: ["C"], rankStrs: ["C reg"] }, { name: "xToy", types: ["Toy"], ranks: ["C"], rankStrs: ["C reg"] }, { name: "xUndead", types: ["Undead"], ranks: ["C"], rankStrs: ["C reg"] }, 
                    { name: "xYeti", types: ["Yeti & Pepe"], ranks: ["C"], rankStrs: ["C reg"] }],
        mixed: [{ name: "AA5ABC", types: ["A.I", "Bird", "Cat", "Cow", "Monkey & Bear"], ranks: ["C"], rankStrs: ["C reg"] }, { name: "AA5C", types: ["Cat", "Cow"], ranks: ["C"], rankStrs: ["C reg"] }, { name: "AA5D", types: ["Demihuman", "Demon", "Dog", "Dragon"], ranks: ["C"], rankStrs: ["C reg"] },
                { name: "AA5DD", types: ["Demihuman", "Demon", "Dog", "Dragon"], ranks: ["C"], rankStrs: ["C reg"] }, { name: "AA5E", types: ["Erdas", "Fairy"], ranks: ["C"], rankStrs: ["C reg"] }, { name: "AA5EY", types: ["Erdas", "Fairy", "Yeti & Pepe"], ranks: ["C"], rankStrs: ["C reg"] },
                { name: "AA5G", types: ["Ghost", "Golem"], ranks: ["C"], rankStrs: ["C reg"] }, { name: "AA5M", types: ["Monkey & Bear", "Mushroom"], ranks: ["C"], rankStrs: ["C reg"] }, { name: "AA5P", types: ["Plant", "Pig"], ranks: ["C"], rankStrs: ["C reg"] },
                { name: "AA5PRU", types: ["Plant", "Pig", "Reptile", "Undead"], ranks: ["C"], rankStrs: ["C reg"] }, { name: "AA5S", types: ["Slime & Snail", "Soldier", "Spirit"], ranks: ["C"], rankStrs: ["C reg"] }, 
                { name: "AA5ST", types: ["Slime & Snail", "Soldier", "Spirit", "Toy"], ranks: ["C"], rankStrs: ["C reg"] }, { name: "AA5Y", types: ["Yeti & Pepe"], ranks: ["C"], rankStrs: ["C reg"] },
                { name: "CrystCode02", types: ["A.I", "Mushroom", "Pig", "Slime & Snail", "Yeti & Pepe"], ranks: ["C"], rankStrs: ["C reg"] }, { name: "CrystCode03", types: ["Cat", "Dog", "Dragon", "Golem", "Plant"], ranks: ["C"], rankStrs: ["C reg"] }, 
                { name: "CrystCode04", types: ["Bird", "Cow", "Fairy", "Monkey & Bear", "Reptile"], ranks: ["C"], rankStrs: ["C reg"] }, { name: "CrystCode05", types: ["Demihuman", "Demon", "Soldier", "Toy"], ranks: ["C"], rankStrs: ["C reg"] }, 
                { name: "CrystCode06", types: ["Erdas", "Ghost", "Spirit", "Undead"], ranks: ["C"], rankStrs: ["C reg"] }],
        variety: [{ name: "Acee", ranks: ["S"], rankStrs: ["S reg"] }, { name: "AcePhoenix", ranks: ["C", "B", "B+"], rankStrs: ["C reg", "B reg", "B plus"] }, { name: "Amitofo", ranks: ["S"], rankStrs: ["S reg"] }, { name: "AYMON", ranks: ["A+", "S"], rankStrs: ["A plus", "S reg"] }, 
                  { name: "BeautyYZ", ranks: ["S"], rankStrs: ["S reg"] }, { name: "Cactus", ranks: ["S"], rankStrs: ["S reg"] }, { name: "ChibiMobs", ranks: ["B", "B+"], rankStrs: ["B reg", "B plus"] }, { name: "ciearsky", ranks: ["S"], rankStrs: ["S reg"] },
                  { name: "Cinta", ranks: ["A+"], rankStrs: ["A plus"] }, { name: "dreamrain", ranks: ["S"], rankStrs: ["S reg"] }, { name: "Crystal", ranks: ["S"], rankStrs: ["S reg"] }, { name: "ezzzzz", ranks: ["A+"], rankStrs: ["A plus"] },
                  { name: "FarmilyEd", ranks: ["A+"], rankStrs: ["A plus"] }, { name: "fragrance", ranks: ["S"], rankStrs: ["S reg"] }, { name: "freshview", ranks: ["S"], rankStrs: ["S reg"] }, { name: "Greenaria", ranks: ["A+"], rankStrs: ["A plus"] },
                  { name: "hearts2heart", ranks: ["A+", "S"], rankStrs: ["A plus", "S reg"] }, { name: "ivlystical", ranks: ["A+"], rankStrs: ["A plus"] }, { name: "Lov3L3ss", ranks: ["S"], rankStrs: ["S reg"] }, { name: "loonyfarm", ranks: ["B", "A+"], rankStrs: ["B reg", "A plus"] },
                  { name: "Mekdii", ranks: ["A+"], rankStrs: ["A plus"] }, { name: "NewWonder", ranks: ["A+"], rankStrs: ["A plus"] }, { name: "PeaceFarm", ranks: ["S"], rankStrs: ["S reg"] }, { name: "rainrave", ranks: ["S"], rankStrs: ["S reg"] },
                  { name: "redrain", ranks: ["S"], rankStrs: ["S reg"] }, { name: "Sayang", ranks: ["C"], rankStrs: ["C reg"] }, { name: "Seagull", ranks: ["C"], rankStrs: ["C reg"] }, { name: "Snozz", ranks: ["A+"], rankStrs: ["A plus"] },
                  { name: "SohJiongHao", ranks: ["B", "A+"], rankStrs: ["B reg", "A plus"] }, { name: "Solivagant", ranks: ["C", "B", "B+"], rankStrs: ["C reg", "B reg", "B plus"] }, { name: "TotoroEmpire", ranks: ["A+"], rankStrs: ["A plus"] }, { name: "tree", ranks: ["S"], rankStrs: ["S reg"] }, 
                  { name: "windysky", ranks: ["S"], rankStrs: ["S reg"] }, { name: "winxfarm", ranks: ["C"], rankStrs: ["C reg"] }, { name: "xAAx", ranks: ["C"], rankStrs: ["C reg"] }, { name: "xPPx", ranks: ["C", "B"], rankStrs: ["C reg", "B reg"] }],
    };

    return usefulFarms;
}

module.exports = { compileSoulsByTier, compileSetItemsBySetName, compileSetItemsByItemPart, sortByPrice, groupByRank, getCubeRates, sortMonsterLifeList, getUsefulFarmsList };