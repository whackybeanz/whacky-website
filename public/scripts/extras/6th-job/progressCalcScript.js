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
        let timeRequired = getTimeRequired(currHolding, gainFromDailies, gainFromBosses, materialsRequired);
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

            if(currSkillLevel < targetSkillLevel) {
                for(let i = currSkillLevel; i < targetSkillLevel; i++) {
                    solErdaEnergyReq += parseInt(allTableElems[skillType].solErdaEnergyElems[i].dataset.qty) * 1000;
                    fragReq += parseInt(allTableElems[skillType].fragElems[i].dataset.qty);
                }    
            }            

            materialsRequired.solErdaEnergy[skillType].push(solErdaEnergyReq);
            materialsRequired.solErdaEnergy.grandTotal += solErdaEnergyReq;
            materialsRequired.frags[skillType].push(fragReq);
            materialsRequired.frags.grandTotal += fragReq;
        })
    })

    return materialsRequired;
}

// Calculates the number of days required to achieve targets
// Returns 1) number of days, 2) expected date of achievement and 3) any additional notes (e.g. which material is the bottleneck)
function getTimeRequired(currHolding, gainFromDailies, gainFromBosses, materialsRequired) {
    let currDateMs = Date.now();
    let finalDateMs = Date.now();
    let numDays = 0;
    const milestones = {
        first: { material: "", numDays: 0, reachedOn: "" },
        second: { material: "", numDays: 0, reachedOn: "" },
    };
    let firstMilestoneReached = false;
    let counter = 0;

    while(currHolding.numSolErdaEnergy < materialsRequired.solErdaEnergy.grandTotal || 
        currHolding.numFrags < materialsRequired.frags.grandTotal) {
        // When the first milestone is reached, indicate the current date and number of days to achieve it
        if(!firstMilestoneReached && currHolding.numSolErdaEnergy > materialsRequired.solErdaEnergy.grandTotal) {
            milestones.first.material = "solErdaEnergy";
            milestones.first.numDays = numDays;
            milestones.first.reachedOn = new Date(finalDateMs).toLocaleDateString('en-SG', { day: "2-digit", month: "short", year: "numeric" });
            firstMilestoneReached = true;
        }

        if(!firstMilestoneReached && currHolding.numSolErdaEnergy > materialsRequired.solErdaEnergy.grandTotal) {
            milestones.first.material = "frags";
            milestones.first.numDays = numDays;
            milestones.first.reachedOn = new Date(finalDateMs).toLocaleDateString('en-SG', { day: "2-digit", month: "short", year: "numeric" });
            firstMilestoneReached = true;
        }

        let currDate = new Date(finalDateMs);

        // Add daily gain
        currHolding.numSolErdaEnergy += gainFromDailies.numSolErdaEnergy;
        currHolding.numFrags += gainFromDailies.numFrags;

        // Check if day is 1st of the month, or a Thursday
        // Add monthly/weekly boss Sol Erda Energy quantity if that is the case
        if(currDate.getDate() === 1) {
            currHolding.numSolErdaEnergy += gainFromBosses.monthlyTotal;
        }

        if(currDate.getDay() === 4) {
            currHolding.numSolErdaEnergy += gainFromBosses.weeklyTotal;
        }

        // Advance date by 1 day
        finalDateMs += 24 * 60 * 60 * 1000;
        numDays++;

        // Crash prevention
        counter++;

        if(counter > 3000) {
            break;
        }
    }

    milestones.first.material === "solErdaEnergy" ? milestones.second.material = "frags" : milestones.second.material = "solErdaEnergy";
    milestones.second.numDays = numDays;
    milestones.second.reachedOn = new Date(finalDateMs).toLocaleDateString('en-SG', { day: "2-digit", month: "short", year: "numeric" });
    milestones.second.dailyQtyRequired = (materialsRequired[milestones.second.material].grandTotal / milestones.first.numDays) || 0;

    return milestones;
}