function calculateGeneralContentsEXP(expTableSelected, charLevel) {
    const expToLevel = calculateEXPRequired(expTableSelected, charLevel);

    let expPotions = {};
    let monsterParkEXP = {};
    let dojoEXP = {};

    if(charLevel >= 200) {
        expPotions = calculatePotionEXP(expTableSelected, charLevel, expToLevel);
    }

    if(charLevel >= 105) {
        dojoEXP = calculateDojoEXP(expTableSelected, charLevel, expToLevel);
        monsterParkEXP = calculateMonsterParkEXP(expTableSelected, charLevel, expToLevel);
    }

    return { expToLevel: expToLevel, monsterPark: monsterParkEXP, expPotions: expPotions, dojo: dojoEXP };
}

function calculateMonsterParkEXP(expTableSelected, charLevel, expToLevel) {
    const monsterPark = {
        leftDoor: {
            minLevel: 105, maxLevel: 115,
            content: [
                { name: "Auto Security Zone", recMinLevel: 105, recMaxLevel: 114, rawEXP: 3517411 },
            ]
        },
        midDoor: {
            minLevel: 115, maxLevel: 160,
            content: [
                { name: "Mossy Tree Forest", recMinLevel: 115, recMaxLevel: 124, rawEXP: 5989675 },
                { name: "Sky Forest Training Center", recMinLevel: 120, recMaxLevel: 129, rawEXP: 7311630 },
                { name: "Pirates' Secret Base", recMinLevel: 125, recMaxLevel: 134, rawEXP: 8129820 },
                { name: "Otherworldly Battleground", recMinLevel: 135, recMaxLevel: 144, rawEXP: 11524015 },
                { name: "Dangerously Isolated Forest", recMinLevel: 140, recMaxLevel: 149, rawEXP: 11953470 },
                { name: "Forbidden Time", recMinLevel: 145, recMaxLevel: 154, rawEXP: 13378390 },
                { name: "Clandestine Ruins", recMinLevel: 150, recMaxLevel: 159, rawEXP: 15311670 },
            ]
        },
        rightDoor: {
            minLevel: 160, maxLevel: 300,
            content: [
                { name: "Ruined City", recMinLevel: 160, recMaxLevel: 169, rawEXP: 19790735 },
                { name: "Dead Tree Forest", recMinLevel: 170, recMaxLevel: 179, rawEXP: 26950030 },
                { name: "Watchman's Tower", recMinLevel: 175, recMaxLevel: 184, rawEXP: 27953565 },
                { name: "Dragon Nest", recMinLevel: 180, recMaxLevel: 189, rawEXP: 33576980 },
                { name: "Temple of Oblivion", recMinLevel: 185, recMaxLevel: 194, rawEXP: 35340485 },
                { name: "Knight Stronghold", recMinLevel: 190, recMaxLevel: 199, rawEXP: 39187305,
                    notes: "May get 39,775,800 EXP instead if final boss is Oz (summons 1 extra Ifrit minion)." },
                { name: "Spirit Valley", recMinLevel: 200, recMaxLevel: 209, rawEXP: 40650435 },
                { name: "Road to Extinction", recMinLevel: 200, recMaxLevel: 209, isEnforceMinLevel: true, rawEXP: 154248920,
                    notes: "Uses NEO patch values. Old EXP value: 128,541,100 EXP." },
                { name: "Chew Chew Island", recMinLevel: 210, recMaxLevel: 219, isEnforceMinLevel: true, rawEXP: 642539340 },
                { name: "Lacheln", recMinLevel: 220, recMaxLevel: 229, isEnforceMinLevel: true, rawEXP: 1007394250 },
            ]
        }
    };

    let matchingContent = [];

    if(charLevel >= 200) {
        matchingContent = monsterPark.rightDoor.content.filter(content => (content.isEnforceMinLevel && charLevel >= content.recMinLevel) || (!content.isEnforceMinLevel && content.recMinLevel >= charLevel - 20));
    } else {
        let matchingDoors = Object.keys(monsterPark).filter(door => charLevel >= monsterPark[door].minLevel && charLevel <= monsterPark[door].maxLevel);
        
        matchingDoors.forEach(function(door) {
            matchingContent.push(monsterPark[door].content.filter(content => (!content.isEnforceMinLevel && content.recMinLevel >= charLevel - 20 && content.recMaxLevel <= charLevel + 20)));
        })
        matchingContent = [].concat(...matchingContent);
    }

    matchingContent.forEach(function(content) {
        content.percentEXP = (content.rawEXP / expToLevel * 100).toFixed(3);
    })
    
    return matchingContent;
}

function calculatePotionEXP(expTableSelected, charLevel, expToLevel) {
    let expPotions = {
        potion1: {
            name: "Potion 1",
            maxLevel: 209,
            rawEXP: 0,
            percentEXP: 0,
        },
        potion2: {
            name: "Potion 2",
            maxLevel: 219,
            rawEXP: 0,
            percentEXP: 0,
        },
        potion3: {
            name: "Potion 3",
            maxLevel: 229,
            rawEXP: 0,
            percentEXP: 0,
        },
        typhoon: {
            name: "Typhoon Growth Potion",
            maxLevel: 239,
            rawEXP: 0,
            percentEXP: 0,
        },
        maximum: {
            name: "Maximum Growth Potion",
            maxLevel: 249,
            rawEXP: 0,
            percentEXP: 0,
        },
    };

    Object.keys(expPotions).forEach(function(potionType) {
        expPotions[potionType].rawEXP = calculateEXPRequired(expTableSelected, expPotions[potionType].maxLevel);

        if(charLevel <= expPotions[potionType].maxLevel) {
            expPotions[potionType].percentEXP = 100.000;
        } else {
            expPotions[potionType].percentEXP = (expPotions[potionType].rawEXP / expToLevel * 100).toFixed(3);
        }
    })

    return expPotions;
}

function calculateDojoEXP(expTableSelected, charLevel, expToLevel) {
    const expPerTick = [3190, 3307, 3425, 3520, 3640, 4518, 4668, 4785, 4938, 5092,
                        5247, 5405, 5565, 5690, 5850, 6013, 6180, 6347, 6517, 6687,
                        6857, 7087, 7263, 7613, 7968, 8327, 8687, 9053, 9475, 9852,
                        10230, 10615, 11005, 11393, 11852, 12253, 12657, 13065, 13545, 13963,
                        14385, 14880, 15310, 15742, 16253, 16698, 17143, 18018, 18823, 19720,
                        20542, 21465, 22302, 23247, 24103, 25068, 25940, 26930, 27932, 28830,
                        29850, 30763, 31807, 32862, 33800, 34878, 35965, 37063, 38038, 39158,
                        40288, 41432, 42585, 43598, 44773, 45957, 48000, 50075, 52168, 54282,
                        56425, 58582, 60768, 62972, 65207, 67452, 69727, 72018, 74333, 76670,
                        79030, 81413, 83812, 86475, 88928, 91397, 93878, 96390, 99190, 101747,
                        104317, 106917, 109813, 112457, 115113, 118097, 120797, 123832, 126575, 129343,
                        132447, 135258, 138418, 144473, 147367];

    // For character levels eligible for dojo, execute some calculations
    let dojoEXPData = {};

    if(charLevel >= 105) {
        if(charLevel < 200) {
            // For characters below 200, also calculate EXP to reach 200 from input level
            let expToLevel, numTicks;
            let totalNumTicks = 0;
            let levelDiff = 200 - charLevel;

            for(let i = 0; i < levelDiff; i++) {
                expToLevel = calculateEXPRequired(expTableSelected, charLevel+i);
                numTicks = expToLevel / expPerTick[charLevel+i - 105];
                totalNumTicks += numTicks;

                // Calculate EXP to next immediate level
                if(i === 0) {
                    dojoEXPData = getDojoEXPData(charLevel, expToLevel, numTicks, expPerTick);
                }
            }
            
            totalNumTicks = Math.ceil(totalNumTicks);
            const totalMins = Math.ceil(totalNumTicks * 5 / 60);
            const totalHrs = Math.trunc(totalMins / 60);
            dojoEXPData.to200 = `${totalHrs}hrs ${totalMins - totalHrs * 60}mins`;
        } else if (charLevel < 220) {
            // For characters below 220, only calculate EXP to next immediate level
            let expToLevel = calculateEXPRequired(expTableSelected, charLevel);
            let numTicks = expToLevel / expPerTick[charLevel - 105];

            dojoEXPData = getDojoEXPData(charLevel, expToLevel, numTicks, expPerTick);
            dojoEXPData.to200 = "";
        } else {
            // For characters 220+
            dojoEXPData.per5sRaw = expPerTick[expPerTick.length - 1];
            dojoEXPData.per5sPercent = (expPerTick[expPerTick.length - 1] / expToLevel * 100).toFixed(3);
            dojoEXPData.perHrRaw = expPerTick[expPerTick.length - 1] * 12 * 60;
            dojoEXPData.perHrPercent = (expPerTick[expPerTick.length - 1] * 12 * 60 / expToLevel * 100).toFixed(3);
            dojoEXPData.toLevel = `Not worth it`;
            dojoEXPData.to200 = "";
        }
    }

    return dojoEXPData;
}

function getDojoEXPData(charLevel, expToLevel, numTicks, expPerTick) {
    const oneLevelMins = Math.ceil(numTicks * 5 / 60);
    const oneLevelHrs = Math.trunc(oneLevelMins / 60);

    let dojoEXPData = {};
    dojoEXPData.per5sRaw = expPerTick[charLevel - 105];
    dojoEXPData.per5sPercent = (expPerTick[charLevel-105] / expToLevel * 100).toFixed(3);
    dojoEXPData.perHrRaw = expPerTick[charLevel - 105] * 12 * 60; // Per tick = 5 seconds
    dojoEXPData.perHrPercent = (expPerTick[charLevel-105] * 12 * 60 / expToLevel * 100).toFixed(3);
    dojoEXPData.toLevel = `~${oneLevelHrs}hrs ${oneLevelMins - oneLevelHrs * 60}mins`;

    return dojoEXPData;
}

// Calculates the expected EXP required to next level, split into multiple tiers
// Extracts the required multipliers to use for calculation
// Current assumption: input is between 160 and 300
function calculateEXPRequired(expTableSelected, charLevel) {
    let startingValue, count, multiplierToUse, multiplierType;

    if(charLevel < 100) {
        startingValue = patchDetails[expTableSelected].expStages.at70;
        count = charLevel - 70;
        multiplierToUse = patchDetails[expTableSelected].multiplierToUse.to100;
        multiplierType = "to100";
    } else if (charLevel < 140) {
        startingValue = patchDetails[expTableSelected].expStages.at100;
        count = charLevel - 100;
        multiplierToUse = patchDetails[expTableSelected].multiplierToUse.to140;
        multiplierType = "to140";
    } else if (charLevel < 200) {
        startingValue = patchDetails[expTableSelected].expStages.at140;
        count = charLevel - 140;
        multiplierToUse = patchDetails[expTableSelected].multiplierToUse.to200;
        multiplierType = "to200";
    } else if (charLevel < 250) {
        startingValue = patchDetails[expTableSelected].expStages.at200;
        count = charLevel - 200;
        multiplierToUse = patchDetails[expTableSelected].multiplierToUse.to250;
        multiplierType = "to250";
    } else {
        startingValue = patchDetails[expTableSelected].expStages.at250;
        count = charLevel - 250;
        multiplierToUse = patchDetails[expTableSelected].multiplierToUse.to300;
        multiplierType = "to300";
    }

    let finalEXPValue = startingValue;

    for(let i = 0; i < count; i++) {
        finalEXPValue = Math.trunc(finalEXPValue * multipliers[multiplierToUse][multiplierType][i]);
    }

    return finalEXPValue;
}

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
            { iconId: "map-rte", name: "Road to Extinction", baseMinLevel: 200, recMinLevel: 200, recMaxLevel: 209, isEnforceMinLevel: true, rawEXP: 154248920 },
            { iconId: "map-chew-chew", name: "Chew Chew Island", baseMinLevel: 210, recMinLevel: 210, recMaxLevel: 219, isEnforceMinLevel: true, rawEXP: 642539340 },
            { iconId: "map-lacheln", name: "Lacheln", baseMinLevel: 220, recMinLevel: 220, recMaxLevel: 229, isEnforceMinLevel: true, rawEXP: 1007394250 },
            { iconId: "map-arcana", name: "Arcana", baseMinLevel: 225, recMinLevel: 230, recMaxLevel: 239, isEnforceMinLevel: true, rawEXP: 1007394250 },
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