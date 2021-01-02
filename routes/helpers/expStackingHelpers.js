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
    const monsterParkEXP = calculateMonsterParkEXP(expTableSelected, charLevel);
    const expPotions = calculatePotionEXP(expTableSelected, charLevel);

    return { monsterPark: monsterParkEXP, expPotions: expPotions };
}

function calculateMonsterParkEXP() {
    
}

function calculatePotionEXP(expTableSelected, charLevel) {
    let expPotions = {
        potion1: {
            maxLevel: 209,
            rawEXP: 0,
            percentEXP: 0,
        },
        potion2: {
            maxLevel: 219,
            rawEXP: 0,
            percentEXP: 0,
        },
        potion3: {
            maxLevel: 229,
            rawEXP: 0,
            percentEXP: 0,
        },
        typhoon: {
            maxLevel: 239,
            rawEXP: 0,
            percentEXP: 0,
        },
        maximum: {
            maxLevel: 249,
            rawEXP: 0,
            percentEXP: 0,
        },
    };

    const expToLevel = calculateEXPRequired(expTableSelected, charLevel);

    Object.keys(expPotions).forEach(function(potionType) {
        expPotions[potionType].rawEXP = calculateEXPRequired(expTableSelected, expPotions[potionType].maxLevel);

        if(charLevel <= expPotions[potionType].maxLevel) {
            expPotions[potionType].percentEXP = 100.000;
        } else {
            expPotions[potionType].percentEXP = (expPotions[potionType].rawEXP / expToLevel * 100).toFixed(3);
        }

        //document.getElementById(`exp-${potionType}`).textContent = `${expPotions[potionType].percentEXP}%`;
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