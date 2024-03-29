document.addEventListener("DOMContentLoaded", function(event) { 
    updateTable();
    addFieldInputListeners();
    addEquipTypeBtnListeners();
});

function addFieldInputListeners() {
    const gearLevelInput = document.getElementById("gear-level");
    const baseWaMaInput = document.getElementById("base-wa-ma");

    [gearLevelInput, baseWaMaInput].forEach(function(inputField) {
        inputField.addEventListener("click", function() {
            this.select();
        })

        inputField.addEventListener("input", function() {
            updateTable();
        })
    })
}

function addEquipTypeBtnListeners() {
    const equipTypeBtns = Array.from(document.querySelectorAll(".equip-type-input"));

    equipTypeBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            updateTable();
        })
    })
}

function updateTable() {
    var itemLevel = Number(document.getElementById("gear-level").value);
    var inputWAMA = Number(document.getElementById("base-wa-ma").value);
    let pureStatsFactor, hpMpFactor;

    if(itemLevel >= 250) {
        pureStatsFactor = 12; // Pure stats, def stats
        hpMpFactor = 233.333333;
    } else {
        pureStatsFactor = Math.floor(itemLevel/20) + 1; // Pure stats, def stats
        hpMpFactor = (itemLevel / 10) * 10;
    }
    
    var mixedStatsFactor = Math.floor(itemLevel/40) + 1; // Mixed stats

    displayOutput(inputWAMA, pureStatsFactor, mixedStatsFactor, hpMpFactor);
}

function displayOutput(inputWAMA, pureStatsFactor, mixedStatsFactor, hpMpFactor) {
    var equipType = document.querySelector(".equip-type-input.active").dataset.equipType;
    var itemLevel = Number(document.getElementById("gear-level").value);

    var minFlameTier = 0;
    var maxFlameTier = 0;

    if(equipType === "normal" || equipType === "eb") {
        minFlameTier = 1;
        maxFlameTier = 5;
        document.getElementById("crf-item-type-tiers").textContent = "1~4";
        document.getElementById("rrf-item-type-tiers").textContent = "2~5";
    } else if(equipType === "boss") {
        minFlameTier = 3;
        maxFlameTier = 7;
        document.getElementById("crf-item-type-tiers").textContent = "3~6";
        document.getElementById("rrf-item-type-tiers").textContent = "4~7";
    }

    for(var i = 1; i <= 7; i++) {
        if(i < minFlameTier || i > maxFlameTier) {
            document.querySelector(`.weapon-wa-ma-output.flame-tier-${i}`).textContent = "-";
            document.querySelector(`.boss-dmg-output.flame-tier-${i}`).textContent = "-";
            document.querySelector(`.pure-stats-output.flame-tier-${i}`).textContent = "-";
            document.querySelector(`.mixed-stats-output.flame-tier-${i}`).textContent = "-";
            document.querySelector(`.hp-mp-output.flame-tier-${i}`).textContent = "-";
            document.querySelector(`.all-stats-output.flame-tier-${i}`).textContent = "-";
            document.querySelector(`.damage-output.flame-tier-${i}`).textContent = "-";
            document.querySelector(`.armor-wa-ma-output.flame-tier-${i}`).textContent = "-";
            document.querySelector(`.speed-jump-output.flame-tier-${i}`).textContent = "-";
            document.querySelector(`.defense-output.flame-tier-${i}`).textContent = "-";
            document.querySelector(`.level-reduce-output.flame-tier-${i}`).textContent = "-";
        } else {
            if(inputWAMA === 0) {
                document.querySelector(`.weapon-wa-ma-output.flame-tier-${i}`).textContent = "-";
                document.querySelector(`.boss-dmg-output.flame-tier-${i}`).textContent = "-";
            } else {
                let calculatedWAMA;

                if(equipType === "normal" || equipType === "eb") {
                    let factor = [1, 2.2, 3.63, 5.324, 7.3205, 8.7846, 10.2487];
                    calculatedWAMA = Math.ceil((inputWAMA/100) * (Math.floor(itemLevel/40) + 1) * factor[i-1]);
                } else {
                    calculatedWAMA = Math.ceil((inputWAMA/100) * (Math.floor(itemLevel/40) + 1) * i * Math.pow(1.1, i-3));
                }

                if(calculatedWAMA === 0) {
                    document.querySelector(`.weapon-wa-ma-output.flame-tier-${i}`).textContent = "-";
                } else {
                    document.querySelector(`.weapon-wa-ma-output.flame-tier-${i}`).textContent = calculatedWAMA;
                }
                
                document.querySelector(`.boss-dmg-output.flame-tier-${i}`).textContent = `${2 * i}%`;
            }
            
            document.querySelector(`.pure-stats-output.flame-tier-${i}`).textContent = pureStatsFactor * i;
            document.querySelector(`.mixed-stats-output.flame-tier-${i}`).textContent = mixedStatsFactor * i;
            document.querySelector(`.hp-mp-output.flame-tier-${i}`).textContent = Math.round(hpMpFactor * 3 * i);
            document.querySelector(`.all-stats-output.flame-tier-${i}`).textContent = `${i}%`;
            document.querySelector(`.damage-output.flame-tier-${i}`).textContent = `${i}%`;
            document.querySelector(`.armor-wa-ma-output.flame-tier-${i}`).textContent = i;
            document.querySelector(`.speed-jump-output.flame-tier-${i}`).textContent = i;
            document.querySelector(`.defense-output.flame-tier-${i}`).textContent = pureStatsFactor * i;
            document.querySelector(`.level-reduce-output.flame-tier-${i}`).textContent = -5 * i;
        }
    }
}