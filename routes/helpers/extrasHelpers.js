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

function getMonsterLifeList() {
    return [
        // SPECIAL
        { id: "desert-rabbit-f", name: "Desert Rabbit (F)", type: "Special", rank: "C", effect: "", isFuseMaterial: false },
        { id: "pumpkin-bats", name: "Pumpkin Bats", type: "Special", rank: "C", effect: "", isFuseMaterial: false },
        { id: "caterpillar", name: "Caterpillar", type: "Special", rank: "C", effect: "", isFuseMaterial: false },
        { id: "candy-bats", name: "Candy Bats", type: "Special", rank: "B", effect: "", isFuseMaterial: false },
        { id: "jr-seal", name: "Jr. Seal", type: "Special", rank: "B", effect: "", isFuseMaterial: false },
        { id: "desert-rabbit", name: "Desert Rabbit (M)", type: "Special", rank: "B", effect: "", isFuseMaterial: false },
        { id: "balloon-mouse", name: "Balloon Mouse", type: "Special", rank: "B", effect: "", isFuseMaterial: false },
        { id: "the-book-ghost", name: "The Book Ghost", type: "Special", rank: "B+", effect: "", isFuseMaterial: false },
        { id: "seruf", name: "Seruf", type: "Special", rank: "B+", effect: "", isFuseMaterial: false },
        { id: "spiderling", name: "Spiderling", type: "Special", rank: "B+", effect: "", isFuseMaterial: false },
        { id: "dodo", name: "Dodo", type: "Special", rank: "A", effect: "", isFuseMaterial: false },
        { id: "king-clang", name: "King Clang", type: "Special", rank: "A", effect: "", isFuseMaterial: false },
        { id: "snow-witch", name: "Snow Witch", type: "Special", rank: "A", effect: "", isFuseMaterial: false },
        { id: "pharoah-yeti", name: "Pharoah Yeti", type: "Special", rank: "A", effect: "", isFuseMaterial: false },
        { id: "iruvata", name: "Iruvata", type: "Special", rank: "A", effect: "", isFuseMaterial: false },
        { id: "moon-bunny", name: "Moon Bunny", type: "Special", rank: "A", effect: "", isFuseMaterial: false },
        { id: "dunas", name: "Dunas", type: "Special", rank: "A+", effect: "", isFuseMaterial: false },
        { id: "frankenroid", name: "Frankenroid", type: "Special", rank: "A+", effect: "", isFuseMaterial: false },
        { id: "aufheben", name: "Aufheben", type: "Special", rank: "A+", effect: "", isFuseMaterial: false },
        { id: "twin-halloween-bunnies", name: "Twin Halloween Bunnies", type: "Special", rank: "A+", effect: "", isFuseMaterial: false },
        { id: "papulatus-watch", name: "Papulatus's Watch", type: "Special", rank: "S", effect: "", isFuseMaterial: false },
        { id: "shinsoo", name: "Shinsoo", type: "Special", rank: "S", effect: "", isFuseMaterial: false },
        { id: "crimson-balrog", name: "Crimson Balrog", type: "Special", rank: "S", effect: "", isFuseMaterial: false },
        { id: "timer", name: "Timer", type: "Special", rank: "S", effect: "", isFuseMaterial: false },
        { id: "lilynouch", name: "Lilynouch", type: "Special", rank: "S", effect: "", isFuseMaterial: false },
        { id: "moon-bunny-thief", name: "Moon Bunny Thief", type: "Special", rank: "S", effect: "", isFuseMaterial: false },
        { id: "beryl", name: "Beryl", type: "Special", rank: "S", effect: "", isFuseMaterial: false },
        { id: "yeti-couple", name: "Yeti Couple in Love", type: "Special", rank: "S", effect: "", isFuseMaterial: false },
        { id: "mole-king", name: "Mole King", type: "Special", rank: "S", effect: "", isFuseMaterial: false },
        { id: "apsu", name: "Apsu", type: "Special", rank: "S", effect: "", isFuseMaterial: false },
        { id: "jr-balrog", name: "Jr. Balrog", type: "Special", rank: "S", effect: "", isFuseMaterial: false },
        { id: "georgi", name: "Georgi", type: "Special", rank: "S", effect: "", isFuseMaterial: false },
        { id: "oberon", name: "Oberon", type: "Special", rank: "S", effect: "", isFuseMaterial: false },
        { id: "viking-legion", name: "Viking Legion", type: "Special", rank: "S", effect: "", isFuseMaterial: false },
        { id: "petite-orchid", name: "Petit Orchid", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "petite-von-leon", name: "Petit Von Leon", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "mir", name: "Mirr", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "growing-mir", name: "Growing Mirr", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "petite-lumi-light", name: "Petite Luminous (Light)", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "petite-lumi-dark", name: "Petite Luminous (Darkness)", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "petite-lumi-equi", name: "Petite Luminous (Equilibrium)", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "grown-up-mir", name: "Grown-up Mirr", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "pierre", name: "Pierre", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "von-bon", name: "Von Bon", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "inner-rage", name: "Inner Rage", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "ephenia", name: "Ephenia", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "mu-gong-shadow", name: "Mu Gong's Shadow", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "reinforced-beryl", name: "Reinforced Beryl", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "giant-dark-soul", name: "Giant Dark Soul", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "petite-mercedes", name: "Petite Mercedes", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "pink-bean", name: "Pink Bean", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "romancist-king-slime", name: "Romancist King Slime", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "petite-phantom", name: "Petite Phantom", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "big-balloon", name: "Big Operator's Balloon", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "small-balloon", name: "Small Operator Balloon", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "petite-zakum", name: "Petit Zakum", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "master-margana", name: "Master Margana", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "master-rellik", name: "Master Rellik", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "master-hsalf", name: "Master Hsalf", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "master-jackson", name: "Master Jackson", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "master-red-nirg", name: "Master Red Nirg", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "typhon", name: "Typhon", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "tarantulos", name: "Tarantulos", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "petite-eunwol", name: "Petite Eunwol", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "petite-horntail", name: "Petit Horntail", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "petite-cygnus", name: "Petit Cygnus", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "commander-will", name: "Commander Will", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "petite-magnus", name: "Petit Magnus", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "king-castle-golem", name: "King Castle Golem", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "bully-jack", name: "Bully Jack", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "lapis", name: "Lapis", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "lazuli", name: "Lazuli", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "shadow-of-black-mage", name: "Shadow of Black Mage", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "lil-moonbeam", name: "Lil Moonbeam", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "petite-lania", name: "Petite Lania", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "cowardly-lion", name: "Cowardly Lion", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "giant-spider", name: "Giant Spider", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "petite-hilla", name: "Petit Hilla", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "scarecrow", name: "Scarecrow", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "tin-woodman", name: "Tin Woodman", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "toto", name: "Toto", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "petite-arkarium", name: "Petit Arkarium", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "black-viking", name: "Black Viking", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
        { id: "awakened-rock-spirit", name: "Awakened Rock Spirit", type: "Special", rank: "SS", effect: "", isFuseMaterial: false },
    ];
}

module.exports = { compileSoulsByTier, compileSetItemsBySetName, compileSetItemsByItemPart, sortByPrice, groupByRank, getCubeRates, getMonsterLifeList };