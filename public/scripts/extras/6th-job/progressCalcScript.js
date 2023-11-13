document.addEventListener("DOMContentLoaded", function(event) {
    weeklyBossBtnListener();
    calcBtnListener();
})

function weeklyBossBtnListener() {
    const allBtns = document.querySelectorAll(".single-boss-btn");

    allBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            btn.classList.toggle("active");
        })
    })
}

// On click of "Re(Calculate) button, retrieve all input data, calculate time required and present summary"
function calcBtnListener() {
    const calcBtn = document.getElementById("btn-calc-result");

    calcBtn.addEventListener("click", function() {
        let [currHolding, currProgress, targetGoal, gainFromDailies, gainFromBosses] = compileData();
        let materialsRequired = getMaterialsRequired(currProgress, targetGoal);
    })
}

// Compiles all input fields
function compileData() {
    let currHolding = { 
        numSolErdaEnergy: (parseInt(document.getElementById("num-held-sol-erda").value) || 0) * 1000 + (parseInt(document.getElementById("num-held-energy").value) || 0), 
        numFrags: (parseInt(document.getElementById("num-held-frags").value) || 0),
    };

    let gainFromDailies = {
        numSolErdaEnergy: (parseInt(document.getElementById("num-daily-energy").value) || 0),
        numFrags: (parseInt(document.getElementById("num-daily-frags").value) || 0),
    }

    let gainFromBosses = { weekly: [], monthly: [], weeklyTotal: 0, monthlyTotal: 0 };
    let selectedBosses = document.querySelectorAll(".single-boss-btn.active");

    selectedBosses.forEach(boss => {
        gainFromBosses[boss.dataset.clearType].push({ bossName: boss.dataset.boss, numSolErdaEnergy: (parseInt(boss.dataset.energyValue) || 0) });
        gainFromBosses[`${boss.dataset.clearType}Total`] += (parseInt(boss.dataset.energyValue) || 0);
    })

    let currMatrix = { origin: [], enhance: [], mastery: [] };
    let currLevelSelects = document.querySelectorAll(".curr-level-select");

    currLevelSelects.forEach(select => {
        currMatrix[select.dataset.skillType].push(parseInt(select.value));
    })

    let targetMatrix = { origin: [], enhance: [], mastery: [] };
    let targetLevelSelects = document.querySelectorAll(".target-level-select");

    targetLevelSelects.forEach(select => {
        targetMatrix[select.dataset.skillType].push(parseInt(select.value) || -1);
    })

    return [currHolding, currMatrix, targetMatrix, gainFromDailies, gainFromBosses];
}

// Returns the quantity of sol erda energy + fragments required based on current level and target level for each skill
function getMaterialsRequired(currProgress, targetGoal) {
    let allTableElems = { 
        origin: { solErdaEnergyElems: document.querySelectorAll(".origin-sol-erda"), fragElems: document.querySelectorAll(".origin-frags") }, 
        enhance: { solErdaEnergyElems: document.querySelectorAll(".enhance-sol-erda"), fragElems: document.querySelectorAll(".enhance-frags") }, 
        mastery: { solErdaEnergyElems: document.querySelectorAll(".mastery-sol-erda"), fragElems: document.querySelectorAll(".mastery-frags") },
    }
    let materialsRequired = { 
        solErdaEnergy: { origin: [], enhance: [], mastery: [], grandTotal: 0 },
        frags: { origin: [], enhance: [], mastery: [], grandTotal: 0 },
    };

    // For each individual HEXA skill, first get the current/target levels
    // Add each level's upgrade material quantities to a total
    // Put all totaled quantities into a single object and return it
    Object.keys(currProgress).forEach(skillType => {
        currProgress[skillType].forEach((skillLevel, index) => {
            let currSkillLevel = skillLevel;
            let targetSkillLevel = targetGoal[skillType][index];
            let solErdaEnergyReq = 0;
            let fragReq = 0;

            for(let i = currSkillLevel; i < targetSkillLevel; i++) {
                solErdaEnergyReq += parseInt(allTableElems[skillType].solErdaEnergyElems[i].dataset.qty);
                fragReq += parseInt(allTableElems[skillType].fragElems[i].dataset.qty);
            }

            materialsRequired.solErdaEnergy[skillType].push(solErdaEnergyReq);
            materialsRequired.solErdaEnergy.grandTotal += solErdaEnergyReq;
            materialsRequired.frags[skillType].push(fragReq);
            materialsRequired.frags.grandTotal += fragReq;
        })
    })

    return materialsRequired;
}