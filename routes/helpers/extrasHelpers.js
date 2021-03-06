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
    var difficulties = ["easy", "normal", "hard", "chaos"];

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
    const allPotentialRanks = [...new Set(potentialList.map(singleList => singleList.potRankName))];
    const allCubeTypes = ["red", "black", "additional"];

    let potentialsByRank = {
        regular: [],
        additional: [],
    };

    potentialList.forEach(listItem => {
        potentialsByRank[listItem.potType].push({ potRankName: listItem.potRankName, potentials: listItem.potentials })
    });

    return potentialsByRank;
}

module.exports = { compileSoulsByTier, compileSetItemsBySetName, compileSetItemsByItemPart, sortByPrice, groupByRank };