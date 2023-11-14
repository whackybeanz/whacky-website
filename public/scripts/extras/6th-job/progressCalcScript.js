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
        let [currHolding, currProgress, targetGoal, gainFromDailies, gainFromBosses, gainFromCashShop] = compileData();
        let materialsRequired = getMaterialsRequired(currProgress, targetGoal);
        let milestones = { origin: [], enhance: [], mastery: [], overall: {} };

        ["origin", "enhance", "mastery"].forEach(skillType => {
            materialsRequired[skillType].nextLevel.forEach(skillMaterialsRequired => {
                milestones[skillType].push(getMilestone(currHolding, gainFromDailies, gainFromBosses, gainFromCashShop, skillMaterialsRequired));
            })
        })

        milestones.overall = getMilestone(currHolding, gainFromDailies, gainFromBosses, gainFromCashShop, materialsRequired.grandTotal)

        displaySummary(gainFromDailies, gainFromBosses, gainFromCashShop, milestones, materialsRequired);
    })
}

// Compiles all input fields
// All Sol Erda is converted to Sol Erda Energy equivalent (i.e. *1000 of indicated quantity)
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

    let gainFromCashShop = {
        solErda: (parseInt(document.getElementById("monthly-cash-shop-sol-erda").value) || 0) * 1000,
        isBoosterPurchased: document.getElementById("booster-purchased-select").value === "yes",
        boosterWeeklyReward: document.getElementById("booster-weekly-reward-select").value
    }

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

    return [currHolding, currMatrix, targetMatrix, gainFromDailies, gainFromBosses, gainFromCashShop];
}

// Returns the quantity of sol erda energy + fragments required based on current level and target level for each skill
function getMaterialsRequired(currProgress, targetGoal) {
    let allTableElems = { 
        origin: { solErdaEnergyElems: document.querySelectorAll(".origin-sol-erda"), fragElems: document.querySelectorAll(".origin-frags") }, 
        enhance: { solErdaEnergyElems: document.querySelectorAll(".enhance-sol-erda"), fragElems: document.querySelectorAll(".enhance-frags") }, 
        mastery: { solErdaEnergyElems: document.querySelectorAll(".mastery-sol-erda"), fragElems: document.querySelectorAll(".mastery-frags") },
    }

    let materialsRequired = { 
        origin: { nextLevel: [], allLevels: [] }, enhance: { nextLevel: [], allLevels: [] }, mastery: { nextLevel: [], allLevels: [] },
        grandTotal: { solErdaEnergy: 0, frags: 0 } 
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

                    if(i === currSkillLevel) {
                        materialsRequired[skillType].nextLevel.push({ solErdaEnergy: solErdaEnergyReq, frags: fragReq });
                    }
                }    
            }

            materialsRequired[skillType].allLevels.push({ solErdaEnergy: solErdaEnergyReq, frags: fragReq });
            materialsRequired.grandTotal.solErdaEnergy += solErdaEnergyReq;
            materialsRequired.grandTotal.frags += fragReq;
        })
    })

    return materialsRequired;
}

// Calculates the number of days required to achieve all targets
// Returns an object containing two milestones that contain 1) material that reached required quantity first/second, 2) number of days required, 3) date (string) that milestone was achieved
function getMilestone(currHolding, gainFromDailies, gainFromBosses, gainFromCashShop, materialsRequired) {
    let currDateMs = Date.now();
    let finalDateMs = Date.now();
    let [currSolErdaEnergy, currFrags] = [currHolding.numSolErdaEnergy, currHolding.numFrags];
    let numDays = 0;
    const milestones = {
        first: { material: "", numDays: 0, reachedOn: "" },
        second: { material: "", numDays: 0, reachedOn: "" },
    };
    let firstMilestoneReached = false;

    while(currSolErdaEnergy < materialsRequired.solErdaEnergy || currFrags < materialsRequired.frags) {
        // When the first milestone is reached, indicate the current date and number of days to achieve it
        if(!firstMilestoneReached && currSolErdaEnergy >= materialsRequired.solErdaEnergy) {
            milestones.first.material = "solErdaEnergy";
            milestones.first.numDays = numDays;
            milestones.first.reachedOn = new Date(finalDateMs).toLocaleDateString('en-SG', { day: "2-digit", month: "short", year: "numeric" });
            firstMilestoneReached = true;
        }

        if(!firstMilestoneReached && currFrags >= materialsRequired.frags) {
            milestones.first.material = "frags";
            milestones.first.numDays = numDays;
            milestones.first.reachedOn = new Date(finalDateMs).toLocaleDateString('en-SG', { day: "2-digit", month: "short", year: "numeric" });
            firstMilestoneReached = true;
        }

        // Advance date by 1 day
        finalDateMs += 24 * 60 * 60 * 1000;
        numDays++;

        let currDate = new Date(finalDateMs);

        // Add daily gain
        currSolErdaEnergy += gainFromDailies.numSolErdaEnergy;
        currFrags += gainFromDailies.numFrags;

        // Check if day is 1st of the month, or a Thursday
        // Add monthly/weekly boss Sol Erda Energy quantity if that is the case
        if(currDate.getDate() === 1) {
            currSolErdaEnergy += gainFromBosses.monthlyTotal;

            if(gainFromCashShop.solErda !== 0) {
                currSolErdaEnergy += gainFromCashShop;
            }
        }

        if(currDate.getDay() === 4) {
            currSolErdaEnergy += gainFromBosses.weeklyTotal;
        }

        // If Sol Erda Booster was purchased, add the daily reward quantity
        // Also, every 6th day, add the selected weekly reward
        if(gainFromCashShop.isBoosterPurchased) {
            currSolErdaEnergy += 200;
            currFrags += 4;

            if(numDays % 6 === 0) {
                gainFromCashShop.boosterWeeklyReward === "solErdaEnergy" ? currSolErdaEnergy += 1000 : currFrags += 20;
            }
        }

        // Crash prevention
        if(numDays > 3000) {
            break;
        }
    }

    // If there is no first milestone reached, it is likely both milestones were achieved within the same day
    // Assign Sol Erda Energy as the first milestone
    if(!firstMilestoneReached) {
        milestones.first.material = "solErdaEnergy";
        milestones.first.numDays = numDays;
        milestones.first.reachedOn = new Date(finalDateMs).toLocaleDateString('en-SG', { day: "2-digit", month: "short", year: "numeric" });
    }

    milestones.first.material === "solErdaEnergy" ? milestones.second.material = "frags" : milestones.second.material = "solErdaEnergy";
    milestones.second.numDays = numDays;
    milestones.second.reachedOn = new Date(finalDateMs).toLocaleDateString('en-SG', { day: "2-digit", month: "short", year: "numeric" });
    milestones.second.dailyQtyRequired = (materialsRequired[milestones.second.material] / milestones.first.numDays) || 0;

    return milestones;
}

function displaySummary(gainFromDailies, gainFromBosses, gainFromCashShop, milestones, materialsRequired) {
    // Erase and rebuild output for overview summary
    let overviewSummary = document.getElementById("overview-summary");
    overviewSummary.textContent = "";

    // If calculation reached a maximum cycle (3000 days), display error message
    if(milestones.overall.first.numDays >= 3000) {
        overviewSummary.insertAdjacentHTML('beforeend', `<p class="text-custom mb-2">Calculator reached max-allowed threshold; invalid results expected</p>`)
    }

    overviewSummary.insertAdjacentHTML('beforeend', `<ul class="pl-3 mb-0">
        <li>You require a grand total of <span class="text-custom font-weight-bold">${(materialsRequired.grandTotal.solErdaEnergy / 1000).toLocaleString("en-SG")}</span> Sol Erda and <span class="text-custom font-weight-bold">${materialsRequired.grandTotal.frags.toLocaleString("en-SG")}</span> Fragments to achieve all targets.</li>
        <li>You need <span class="text-custom font-weight-bold">${milestones.overall.first.numDays.toLocaleString("en-SG")}</span> days to get enough ${milestones.overall.first.material === "solErdaEnergy" ? "Sol Erda" : "Fragments"}.</li>
        <li>You need <span class="text-custom font-weight-bold">${milestones.overall.second.numDays.toLocaleString("en-SG")}</span> days to get enough ${milestones.overall.second.material === "solErdaEnergy" ? "Sol Erda" : "Fragments"}.</li>
        <li>Without additional farming, you achieve all targets on <span class="text-custom font-weight-bold">${milestones.overall.second.reachedOn}</span>.</li>
        <li>If you get <span class="text-custom font-weight-bold">${milestones.overall.second.dailyQtyRequired.toFixed(2)} ${milestones.overall.second.material === "solErdaEnergy" ? "Sol Erda" : "Fragments"} a day</span> (farming + dailies), you will achieve all targets on <span class="text-custom font-weight-bold">${milestones.overall.first.reachedOn}</span> instead.
    </ul>`);

    // Update dates for next level summary
    // First erase any previous dates written then repopulate dates
    document.querySelectorAll(".summary-slot-dates").forEach(elem => {
        elem.textContent = "";
    });

    ["origin", "enhance", "mastery"].forEach(skillType => {
        milestones[skillType].forEach((skill, index) => {
            let elem = document.getElementById(`summary-${skillType}-slot-${index+1}`);
            elem.textContent = `${milestones[skillType][index].second.reachedOn.slice(0, -4)}`;
        })
    })
    
    // Update daily gains
    document.getElementById("summary-daily-energy").textContent = gainFromDailies.numSolErdaEnergy.toLocaleString("en-SG");
    document.getElementById("summary-daily-frags").textContent = gainFromDailies.numFrags.toLocaleString("en-SG");

    // Erase and rebuild output for bosses summary
    let bossesSummary = document.getElementById("boss-summary");
    bossesSummary.textContent = "";

    if(gainFromBosses.weeklyTotal === 0 && gainFromBosses.monthlyTotal === 0) {
        bossesSummary.insertAdjacentHTML('beforeend', `<p class="text-center mb-0">No bosses selected</p>`);
    } else {
        if(gainFromBosses.weeklyTotal !== 0) {
            bossesSummary.insertAdjacentHTML('beforeend', `<p class="col-12 text-center mb-1 px-0"><span class="text-custom font-weight-bold">${gainFromBosses.weeklyTotal.toLocaleString("en-SG")}</span> <img src="https://whacky-website.s3-ap-southeast-1.amazonaws.com/images/items/use/sol-erda-energy-10.png" alt="Sol Erda Energy"> Energy (Weekly)</p>`);
        }

        if(gainFromBosses.monthlyTotal !== 0) {
            bossesSummary.insertAdjacentHTML('beforeend', `<p class="col-12 text-center mb-0 px-0"><span class="text-custom font-weight-bold">${gainFromBosses.monthlyTotal.toLocaleString("en-SG")}</span> <img src="https://whacky-website.s3-ap-southeast-1.amazonaws.com/images/items/use/sol-erda-energy-10.png" alt="Sol Erda Energy"> Energy (Monthly)</p>`);
        }
    }

    // Update Cash Shop gains
    let cashShopSummary = document.getElementById("cash-shop-summary");
    cashShopSummary.textContent = "";

    if(gainFromCashShop.solErda > 0) {
        cashShopSummary.insertAdjacentHTML('beforeend', `<p class="text-center mb-0"><span class="text-custom font-weight-bold">${gainFromCashShop.solErda / 1000}</span> <img src="https://whacky-website.s3-ap-southeast-1.amazonaws.com/images/items/use/sol-erda.png" alt="Sol Erda"> Sol Erda (monthly)</p>`);
    } else {
        cashShopSummary.insertAdjacentHTML('beforeend', `<p class="text-center mb-0">No Sol Erda purchased</p>`);
    }

    if(gainFromCashShop.isBoosterPurchased) {        
        if(gainFromCashShop.boosterWeeklyReward === "solErdaEnergy") {
            cashShopSummary.insertAdjacentHTML('beforeend', `<p class="text-center mb-0">
                <span class="text-custom font-weight-bold">Booster on</span>
                <img src="https://whacky-website.s3-ap-southeast-1.amazonaws.com/images/items/cash/sol-erda-booster.png" alt="Sol Erda Booster"> 
                <img src="https://whacky-website.s3-ap-southeast-1.amazonaws.com/images/items/use/sol-erda-energy-500.png" alt="Sol Erda Energy"> 
                </p>`);
        } else {
            cashShopSummary.insertAdjacentHTML('beforeend', `<p class="text-center mb-0">
                <span class="text-custom font-weight-bold">Booster on</span>
                <img src="https://whacky-website.s3-ap-southeast-1.amazonaws.com/images/items/cash/sol-erda-booster.png" alt="Sol Erda Booster"> 
                <img src="https://whacky-website.s3-ap-southeast-1.amazonaws.com/images/items/etc/sol-erda-fragment.png" alt="Sol Erda Fragment"> 
                </p>`);
        }
    } else {
        cashShopSummary.insertAdjacentHTML('beforeend', `<p class="text-center mb-0">No Booster purchased</p>`);
    }

    // Display div
    $("#progress-summary-modal").modal();
}