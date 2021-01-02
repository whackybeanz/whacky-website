const patchDetails = {
    neo: {
        details: ["Released in KMS in December 2020", "Level cap raised to 300", "Level 210 to 250 EXP reductions"],
        maxLevel: 300,
        expStages: {
            at160: 76574580,
            at200: 2207026470,
            at250: 1313764762354
        },
        multiplierToUse: {
            to200: "rise",
            to250: "neo",
            to300: "neo",
        }
    },
    rise: {
        details: ["Released in KMS in December 2020", "Level 170 to 199 EXP reductions"],
        maxLevel: 275,
        expStages: {
            at160: 76574580,
            at200: 2207026470,
            at250: 1313764762354
        },
        multiplierToUse: {
            to200: "rise",
            to250: "glory",
            to300: "black",
        }
    },
    glory: {
        details: ["Released in KMS in July 2019", "Level 220 to 234 EXP reductions"],
        maxLevel: 275,
        expStages: {
            at160: 76574580,
            at200: 2207026470,
            at250: 1313764762354
        },
        multiplierToUse: {
            to200: "default",
            to250: "glory",
            to300: "black",
        }
    },
    black: {
        details: ["Released in KMS in June 2018", "Level 201 to 220 EXP reductions", "Level cap raised to 275"],
        maxLevel: 275,
        expStages: {
            at160: 76574580,
            at200: 2207026470,
            at250: 1313764762354,
        },
        multiplierToUse: {
            to200: "default",
            to250: "black",
            to300: "black",
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
    }
}

function calculateGeneralContentsEXP(expTableSelected, charLevel) {
    const expToLevel = calculateEXPRequired(expTableSelected, charLevel);
    const monsterParkEXP = calculateMonsterParkEXP(expTableSelected, charLevel, expToLevel);
    const expPotions = calculatePotionEXP(expTableSelected, charLevel, expToLevel);

    return { monsterPark: monsterParkEXP, expPotions: expPotions };
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
                { name: "Road to Extinction", recMinLevel: 200, recMaxLevel: 209, isEnforceMinLevel: true, rawEXP: 0,
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

// Calculates the expected EXP required to next level, split into multiple tiers
// Extracts the required multipliers to use for calculation
// Current assumption: input is between 160 and 300
function calculateEXPRequired(expTableSelected, charLevel) {
    let startingValue, count, multiplierToUse, multiplierType;

    if(charLevel < 200) {
        startingValue = patchDetails[expTableSelected].expStages.at160;
        count = charLevel - 160;
        multiplierToUse = patchDetails[expTableSelected].multiplierToUse.to200;
        multiplierType = "to200";
    } else if(charLevel < 250) {
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

module.exports = { calculateGeneralContentsEXP };