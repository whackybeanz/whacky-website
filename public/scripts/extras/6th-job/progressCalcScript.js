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
        [currHolding, currProgress, targetGoal, gainFromDailies, gainFromBosses] = compileData();
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
        currMatrix[select.dataset.skillType].push(parseInt(select.value) || -1);
    })

    let targetMatrix = { origin: [], enhance: [], mastery: [] };
    let targetLevelSelects = document.querySelectorAll(".target-level-select");

    targetLevelSelects.forEach(select => {
        targetMatrix[select.dataset.skillType].push(parseInt(select.value) || -1);
    })

    return [currHolding, currMatrix, targetMatrix, gainFromDailies, gainFromBosses];
}