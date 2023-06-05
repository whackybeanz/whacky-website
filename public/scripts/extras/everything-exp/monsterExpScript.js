// On button click, hide button and display cooldown message + retrieve monster list
function addRefreshMonsterListListener() {
    let refreshBtn = document.getElementById("btn-refresh-monster-list");
    let refreshCdMessage = document.getElementById("refresh-cd");

    refreshBtn.addEventListener("click", () => {
        refreshBtn.classList.add("d-none");
        refreshCdMessage.classList.remove("d-none");

        window.setTimeout(() => {
            refreshBtn.classList.remove("d-none");
            refreshCdMessage.classList.add("d-none");
        }, 10000)

        retrieveMonsterData();
    })
}

// If charLevel is within valid input ranges (61 to max level), proceed to retrieve monster list, else display error message
// Erase any previously generated tables, and also retrieve + display the EXP Buff multiplier from EXP Multipliers tab
function retrieveMonsterData() {
    let charLevel = getCharLevel();
    let container = document.getElementById("monster-list-container");

    if(!isNaN(charLevel) && charLevel >= 61 && charLevel <= 300) {
        container.innerHTML = "";

        fetch(`/calc/everything-exp/monster-list/${charLevel}`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => {
            let expMultiplier = parseFloat(document.getElementById("total-exp-mult").textContent);
            
            if(data.err) {
                container.insertAdjacentHTML('beforeend', `<p class="text-danger text-center">An error occurred while retrieving data [${data.err}]</p>`);
            } else {
                container.insertAdjacentHTML('beforeend', `<p class="font-subsubheader font-weight-bold mt-4 mb-3" id="monster-list-exp-mult" data-exp-mult="${expMultiplier}">Current EXP Buffs Multiplier: <span class="text-custom">x${expMultiplier.toFixed(2)}</span></p>`)

                Object.keys(data.monsterListByMap).forEach((mapId, mapIndex) => {
                    container.insertAdjacentHTML('beforeend', createRegionHeader(mapId, data.monsterListByMap[mapId]))

                    let monsterExpList = document.getElementById(`${mapId}-monster-exp-list`);

                    data.monsterListByMap[mapId].monsterList.forEach((monster, monsterIndex) => {
                        monsterExpList.insertAdjacentHTML('beforeend', populateMonsterList(charLevel, mapIndex, monster, monsterIndex, expMultiplier));
                    })
                })
            }
        })
        .catch(error => {
            container.insertAdjacentHTML('beforeend', `<p class="text-danger text-center">An error occurred while retrieving data [${error}]</p>`);
        })
    } else {
        if(isNaN(charLevel)) {
            container.insertAdjacentHTML('beforeend', `<p class="text-danger text-center">Invalid character level input.</p>`);
        }

        if(charLevel < 61 || charLevel > 300) {
            container.insertAdjacentHTML('beforeend', `<p class="text-danger text-center">Only character levels between 61 and 300 are accepted. Please try again.</p>`);
        }
    }
}

// Generate base HTML for monster list (already split into respective map regions)
function createRegionHeader(mapId, mapData) {
    return `<div class="single-region size-720 w-100 d-flex flex-column justify-content-center align-items-center mb-5">
        <div class="w-100 region-subheader font-subsubheader font-weight-bold text-center py-1 mb-2"><img src="${mapData.mapIconImgUrl}" class="mr-2"> ${mapData.mapIconName}</div>
        <div class="w-100" id='${mapId}-monster-exp-list'></div>
    </div>`
}

// Generates single div (representing one monster) of data
// If monster is boss, assign custom color for highlight
// Create number input field for changing of no. monster kills
// Display base, after-base-bonus, and after-exp-buff-multiplier EXPs
function populateMonsterList(charLevel, mapIndex, monster, monsterIndex, expMultiplier) {
    let levelDiffModifier = getModifier(charLevel, monster.monsterLevel);
    let expTNL = getExpTNL(charLevel);

    return `<div class="single-monster-container ${monster.isBoss ? "text-custom font-weight-bold" : "" } align-middle position-relative py-2 mb-4">
        <div class="monster-list-img w-100 h-100 position-absolute py-2 pr-3" style="background-image: url('${monster.imgUrl}');"></div>
        <div class="d-flex flex-column flex-sm-row justify-content-center align-items-center align-items-sm-start">
            <div class="monster-list-details col-12 col-sm-6 mb-4 pl-3">
                <p class="font-weight-bold mb-0">[Lv. ${monster.monsterLevel}] ${monster.monsterName}</p>
                <p class="mb-0">Monster HP: ${monster.monsterHP.toLocaleString('en-SG')}</p>
                <p class="mb-0">Base EXP Bonus: <span id="map-${mapIndex}-monster-${monsterIndex}-level-diff-mod" data-level-diff-mod="${levelDiffModifier}">x${levelDiffModifier}</span></p>
            </div>
            <div class="col-12 col-sm-6 d-flex flex-column px-sm-0">
                <div class="d-flex">
                    <div class="col-6 col-sm-5 px-2 px-sm-1 text-right">Base EXP</div>
                    <div class="col-6 col-sm-7 px-2 text-left" id="map-${mapIndex}-monster-${monsterIndex}-base-exp" data-base-exp=${monster.monsterEXP}>${monster.monsterEXP.toLocaleString("en-SG")} EXP</div>
                </div>
                <div class="d-flex">
                    <div class="col-6 col-sm-5 px-2 px-sm-1 text-right">After Base Bonus</div>
                    <div class="col-6 col-sm-7 px-2 text-left">${Math.round(monster.monsterEXP * levelDiffModifier).toLocaleString("en-SG")} EXP</div>
                </div>
                <div class="d-flex">
                    <div class="col-6 col-sm-5 px-2 px-sm-1 text-right">After EXP Buffs</div>
                    <div class="col-6 col-sm-7 px-2 text-left">${Math.round(Math.round(monster.monsterEXP * levelDiffModifier) * expMultiplier).toLocaleString("en-SG")} EXP</div>
                </div>
                <div class="d-flex font-weight-bold">
                    <div class="col-6 col-sm-5 px-2 px-sm-1 text-right">
                        <div class="d-flex align-items-center justify-content-end form-group mb-0">
                            <input type="number" class="single-num-kills-input form-control text-center py-1 px-1 mr-2" value="1000" id="map-${mapIndex}-monster-${monsterIndex}-num-kills-input" data-map-index="${mapIndex}" data-monster-index="${monsterIndex}"> kill(s)
                        </div>
                    </div>
                    <div class="col-6 col-sm-7 px-2 text-left">
                        <p class="mb-0"><span id="map-${mapIndex}-monster-${monsterIndex}-total-kill-exp">${(Math.round(Math.round(monster.monsterEXP * levelDiffModifier) * expMultiplier) * 1000).toLocaleString("en-SG")}</span> EXP</p>
                        <p class="text-custom font-weight-normal mb-0">[<span id="map-${mapIndex}-monster-${monsterIndex}-percent-exp">${((Math.round(Math.round(monster.monsterEXP * levelDiffModifier) * expMultiplier) * 1000) / expTNL * 100).toFixed(3)}</span>%]</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}

// Retrieve the Base EXP bonus/penalty based on level difference between charLevel and monsterLevel
// If difference exceeds a threshold, take the maximum penalty possible (last element)
function getModifier(charLevel, monsterLevel) {
    let overleveledModifiers = [1.2, 1.2, 1.1, 1.1, 1.1, 1.05, 1.05, 1.05, 1.05, 1.05, 1,
                                0.99, 0.99, 0.98, 0.98, 0.97, 0.97, 0.96, 0.96, 0.95, 0.95,
                                0.89, 0.88, 0.87, 0.86, 0.85, 0.84, 0.83, 0.82, 0.81, 0.80,
                                0.79, 0.78, 0.77, 0.76, 0.75, 0.74, 0.73, 0.72, 0.71, 0.70];
    let underleveledModifiers = [1.2, 1.2, 1.1, 1.1, 1.1, 1.05, 1.05, 1.05, 1.05, 1.05, 1,
                                0.99, 0.98, 0.97, 0.96, 0.95, 0.94, 0.93, 0.92, 0.91, 0.90,
                                0.70, 0.66, 0.62, 0.58, 0.52, 0.50, 0.46, 0.42, 0.38, 0.34,
                                0.30, 0.26, 0.22, 0.18, 0.14, 0.10];

    // Meso, experience penalty is based on max level 284 as of Blooming Forest patch
    if(charLevel >= 290) {
        charLevel = 289;
    }
    
    if(charLevel >= monsterLevel) {
        if(charLevel - monsterLevel > 40) {
            return overleveledModifiers[overleveledModifiers.length - 1];
        } else {
            return overleveledModifiers[charLevel - monsterLevel];
        }
    } else {
        if(monsterLevel - charLevel > 36) {
            return underleveledModifiers[underleveledModifiers.length - 1];
        } else {
            return underleveledModifiers[monsterLevel - charLevel];
        }
    }
}

// Calculate total EXP obtained from monster based on no. kills input and update relevant values
// Valid kill amounts: 1 to 100,000
// Default to 1,000 if value is below 0 or invalid
// Default to 100,000 if value exceeds 100,000
function updateNumKillsInputListener() {
    let container = document.getElementById("monster-list-container");

    container.addEventListener("change", function(event) {
        if(event.target && event.target.classList.contains("single-num-kills-input")) {
            let mapIndex = parseInt(event.target.dataset.mapIndex);
            let monsterIndex = parseInt(event.target.dataset.monsterIndex);

            let baseExp = parseInt(document.getElementById(`map-${mapIndex}-monster-${monsterIndex}-base-exp`).dataset.baseExp);
            let levelDiffMod = parseFloat(document.getElementById(`map-${mapIndex}-monster-${monsterIndex}-level-diff-mod`).dataset.levelDiffMod);
            let expBuffMultiplier = parseFloat(document.getElementById(`monster-list-exp-mult`).dataset.expMult);
            let numKillsInput = parseInt(event.target.value);

            if(!isNaN(numKillsInput)) {
                if(numKillsInput > 100000) {
                    event.target.value = 100000;
                    numKillsInput = 100000;
                }

                if(numKillsInput < 1) {
                    event.target.value = 1000;
                    numKillsInput = 1000;
                }
            } else {
                event.target.value = 1000;
                numKillsInput = 1000;
            }

            let totalKillExp = Math.round(Math.round(baseExp * levelDiffMod) * expBuffMultiplier) * numKillsInput;
            let expTNL = getExpTNL(getCharLevel());
            document.getElementById(`map-${mapIndex}-monster-${monsterIndex}-total-kill-exp`).textContent = totalKillExp.toLocaleString('en-SG');
            document.getElementById(`map-${mapIndex}-monster-${monsterIndex}-percent-exp`).textContent = (totalKillExp / expTNL * 100).toFixed(3);
        }
    })
}