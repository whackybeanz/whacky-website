const patchDetails = {
    neo: {
        details: ["Released in KMS in December 2020", "Level cap raised to 300", "Level 210 to 250 EXP reductions"],
        maxLevel: 300,
        expStages: {
            at70: 342029,
            at100: 2365603,
            at140: 22777494,
            at200: 2207026470,
            at250: 1313764762354
        },
        multiplierToUse: {
            to100: "v",
            to140: "v",
            to200: "rise",
            to250: "neo",
            to300: "neo",
        }
    },
    rise: {
        details: ["Released in KMS in December 2020", "Level 170 to 199 EXP reductions"],
        maxLevel: 275,
        expStages: {
            at70: 342029,
            at100: 2365603,
            at140: 22777494,
            at200: 2207026470,
            at250: 1313764762354
        },
        multiplierToUse: {
            to100: "v",
            to140: "v",
            to200: "rise",
            to250: "glory",
            to300: "black",
        }
    },
    glory: {
        details: ["Released in KMS in July 2019", "Level 220 to 234 EXP reductions"],
        maxLevel: 275,
        expStages: {
            at70: 342029,
            at100: 2365603,
            at140: 22777494,
            at200: 2207026470,
            at250: 1313764762354
        },
        multiplierToUse: {
            to100: "v",
            to140: "v",
            to200: "v",
            to250: "glory",
            to300: "black",
        }
    },
    black: {
        details: ["Released in KMS in June 2018", "Level 201 to 220 EXP reductions", "Level cap raised to 275"],
        maxLevel: 275,
        expStages: {
            at70: 342029,
            at100: 2365603,
            at140: 22777494,
            at200: 2207026470,
            at250: 1313764762354,
        },
        multiplierToUse: {
            to100: "v",
            to140: "v",
            to200: "v",
            to250: "black",
            to300: "black",
        }
    },
    v: {
        details: ["Released in KMS in July 2016", "Level 66 to 200 EXP reductions", "Level cap raised to 250"],
        maxLevel: 250,
        expStages: {
            at70: 342029,
            at100: 2365603,
            at140: 22777494,
            at200: 2207026470
        },
        multiplierToUse: {
            to100: "v",
            to140: "v",
            to200: "v",
            to250: "bigbang",
        }
    },
    bigbang: {
        details: ["Released in KMS in July 2010", "EXP reduced across all levels"],
        maxLevel: 250,
        expStages: {
            at70: 351686,
            at100: 2596787,
            at140: 29665473,
            at200: 2207026470
        },
        multiplierToUse: {
            to100: "bigbang",
            to140: "bigbang",
            to200: "bigbang",
            to250: "bigbang",
        }
    }
}

const multipliers = {
    neo: {
        to250: [1.12, 1.12, 1.12, 1.12, 1.12, 1.12, 1.12, 1.12, 1.12, 
                1.6, 1.11, 1.11, 1.11, 1.11, 1.3, 1.09, 1.09, 1.09, 1.09,
                1.6, 1.07, 1.07, 1.07, 1.07, 1.3, 1.05, 1.05, 1.05, 1.05,
                1.6, 1.03, 1.03, 1.03, 1.03, 1.3, 1.03, 1.03, 1.03, 1.03,
                1.6, 1.03, 1.03, 1.03, 1.03, 1.3, 1.03, 1.03, 1.03, 1.03],
        to300: [1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01,
                2.02, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01,
                2.02, 1.01, 1.01, 1.01, 1.01, 2.02, 1.1, 1.1, 1.1, 1.1,
                2.02, 1.1, 1.1, 1.1, 1.1, 2.02, 1.1, 1.1, 1.1, 1.1,
                2.02, 1.1, 1.1, 1.1, 1.1, 2.02, 1.1, 1.1, 1.1, 1.5]
    },
    rise: {
        to200: [1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625,
                1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625,
                1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625,
                1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 
                1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 
                1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 1.05]
    },
    glory: {
        to250: [1.12, 1.12, 1.12, 1.12, 1.12, 1.12, 1.12, 1.12, 1.12,
                2.75, 1.08, 1.08, 1.08, 1.08, 1.08, 1.08, 1.08, 1.08, 1.08,
                1.7, 1.05, 1.05, 1.05, 1.05, 1.35, 1.03, 1.03, 1.03, 1.03,
                1.65, 1.02, 1.02, 1.02, 1.02, 1.441558145, 1.02, 1.02, 1.02, 1.02,
                2.02, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01]
    },
    black: {
        to250: [1.12, 1.12, 1.12, 1.12, 1.12, 1.12, 1.12, 1.12, 1.12, 
                2.75, 1.08, 1.08, 1.08, 1.08, 1.08, 1.08, 1.08, 1.08, 1.08, 
                2.52159015761, 1.04, 1.04, 1.04, 1.04, 1.04, 1.04, 1.04, 1.04, 1.04,
                2.04, 1.02, 1.02, 1.02, 1.02, 1.02, 1.02, 1.02, 1.02, 1.02, 
                2.02, 1.02, 1.02, 1.02, 1.02, 1.02, 1.02, 1.02, 1.02, 1.02],
        to300: [1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01,
                2.02, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01,
                2.02, 1.01, 1.01, 1.01, 1.01]
    },
    v: {
        to100: [1.075, 1.075, 1.075, 1.075, 1.07, 1.07, 1.07, 1.07, 1.07,
                1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 
                1.065, 1.065, 1.065, 1.065, 1.065, 1.065, 1.065, 1.065, 1.065, 1.065],
        to140: [1, 1, 1, 1, 1.065, 1.065, 1.065, 1.065, 1.065,
                1.065, 1.065, 1.065, 1.065, 1.065, 1.065, 1.065, 1.065, 1.065, 1.065,
                1.065, 1.065, 1.065, 1.065, 1.065, 1.065, 1.065, 1.065, 1.065, 1.065,
                1.065, 1.065, 1.065, 1.065, 1.065, 1.065, 1.065, 1.065, 1.065, 1.065,],
        to200: [1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 
                1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 
                1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 
                1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 1.0625, 
                1.06, 1.06, 1.06, 1.06, 1.06, 1.06, 1.06, 1.06, 1.06, 1.06, 
                1.06, 1.06, 1.06, 1.06, 1.06, 1.06, 1.06, 1.06, 1.06, 1.06],
    },
    bigbang: {
        // Multipliers start from level 70
        to100: [1.08, 1.08, 1.08, 1.08, 1.07, 1.07, 1.07, 1.07, 1.07, 
                1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 
                1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 1.07],
        to140: [1, 1, 1, 1, 1.07, 1.07, 1.07, 1.07, 1.07,
                1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 1.07,
                1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 1.07,
                1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 1.07],
        to200: [1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 1.07,
                1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 1.07, 1.07,
                1.06, 1.06, 1.06, 1.06, 1.06, 1.06, 1.06, 1.06, 1.06, 1.06, 
                1.06, 1.06, 1.06, 1.06, 1.06, 1.06, 1.06, 1.06, 1.06, 1.06,
                1.06, 1.06, 1.06, 1.06, 1.06, 1.06, 1.06, 1.06, 1.06, 1.06,
                1.06, 1.06, 1.06, 1.06, 1.06, 1.06, 1.06, 1.06, 1.06, 1.06],
        to250: [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2,
                2.12, 1.06, 1.06, 1.06, 1.06, 1.06, 1.06, 1.06, 1.06, 1.06,
                2.08, 1.04, 1.04, 1.04, 1.04, 1.04, 1.04, 1.04, 1.04, 1.04,
                2.04, 1.02, 1.02, 1.02, 1.02, 1.02, 1.02, 1.02, 1.02, 1.02,
                2.02, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01]
    }
}

function getMaxLevel(expTableSelected) {
    return patchDetails[expTableSelected].maxLevel;
}

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
        let levelDiff;

        if(charLevel < 220) {
            // For character levels with scaling dojo EXP, calculate expected duration
            if(charLevel < 200) {
                levelDiff = 200 - charLevel;
            } else {
                levelDiff = 220 - charLevel;    
            }

            let totalNumTicks = 0;

            for(let i = 0; i < levelDiff; i++) {
                let expToLevel = calculateEXPRequired(expTableSelected, charLevel+i);
                let numTicks = expToLevel / expPerTick[charLevel+i - 105];
                totalNumTicks += numTicks;

                if(i === 0) {
                    const oneLevelMins = Math.ceil(totalNumTicks * 5 / 60);
                    const oneLevelHrs = Math.trunc(oneLevelMins / 60);

                    dojoEXPData.per5sRaw = expPerTick[charLevel - 105];
                    dojoEXPData.per5sPercent = (expPerTick[charLevel-105] / expToLevel * 100).toFixed(3);
                    dojoEXPData.perHrRaw = expPerTick[charLevel - 105] * 60;
                    dojoEXPData.perHrPercent = (expPerTick[charLevel-105] * 60 / expToLevel * 100).toFixed(3);
                    dojoEXPData.toLevel = `~${oneLevelHrs}hrs ${oneLevelMins - oneLevelHrs * 60}mins`
                }
            }

            if(charLevel < 200) {
                totalNumTicks = Math.ceil(totalNumTicks);
                const totalMins = Math.ceil(totalNumTicks * 5 / 60);
                const totalHrs = Math.trunc(totalMins / 60);

                dojoEXPData.to200 = `${totalHrs}hrs ${totalMins - totalHrs * 60}mins`;
            } else {
                dojoEXPData.to200 = "";
            }
        } else {
            // For characters 220 and beyond, retrieve standard values and return
            dojoEXPData.per5sRaw = expPerTick[expPerTick.length - 1];
            dojoEXPData.per5sPercent = (expPerTick[expPerTick.length - 1] / expToLevel * 100).toFixed(3);
            dojoEXPData.perHrRaw = expPerTick[expPerTick.length - 1] * 60;
            dojoEXPData.perHrPercent = (expPerTick[expPerTick.length - 1] * 60 / expToLevel * 100).toFixed(3);
            dojoEXPData.toLevel = `Not worth it`;
            dojoEXPData.to200 = "";
        }
    }

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

module.exports = { getMaxLevel, calculateGeneralContentsEXP };