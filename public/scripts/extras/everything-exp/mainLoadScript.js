/***********************
 * 
 * Basic getters
 * 
 * *********************/
function getCharLevel() {
    return parseInt(document.getElementById("char-level").value);
}

function getExpTNL(charLevel, patchType) {
    return parseInt(document.getElementById(`${charLevel}-exp-tnl`).dataset.rawExpTnl);
}

/***********************
 * 
 * Language setting
 * 
 * *********************/
function setLanguage() {
    let selectedLang = document.getElementById("lang-select").value;
    document.querySelectorAll(".lang").forEach(elem => {
        elem.classList.add("d-none");
    });
    document.querySelectorAll(`.lang.${selectedLang}`).forEach(elem => {
        elem.classList.remove("d-none");
    });
}

function languageSelectListener() {
    let selectElem = document.getElementById("lang-select");
    const langText = {
        "lang-en": {
            weeklies: ["I do weeklies on...", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            minigame: "- Select event type -",
            ticket: "Qty",
            punchKing: "Score",
            grinding: ["Qty", "Per monster EXP"],
            burning: ["No Hyper Burn", "Hyper Burning"],
            potions: "Qty",
            potionsTable: ["Extreme Growth Potion", "Growth Potion 1", "Growth Potion 2", "Growth Potion 3", "Typhoon Growth Potion", "Maximum Growth Potion", "Transcendent Growth Potion"],
            rune: ["N/A", "Averaged across up/downtime", "+20% EXP (No Evan link skill)", "+26% EXP (Evan link skill level 1)", "+30% EXP (Evan link skill level 2)",
                    "Averaged, 100% EXP events", "+40% EXP (No Evan link skill)", "+52% EXP (Evan link skill level 1)", "+60% EXP (Evan link skill level 2)",
                    "Averaged, Haste event benefits", "+60% EXP (No Evan link skill)", "+78% EXP (Evan link skill level 1)", "+90% EXP (Evan link skill level 2)",
                    "Full uptime", "+100% EXP", "+150% EXP (Events)", "+200% EXP (Events)"],
            ringOfClanTooltip: "Player MUST be wearing the Ring of Clan for the EXP buff to take effect at all",
            ringOfClan: ["N/A", "+10% EXP (Player wears ring)", "+15% EXP (1 extra ring wearer in party)", "+20% EXP (2 extra ring wearers in party)", "+25% EXP (3 extra ring wearers in party)", "+30% EXP (4 extra ring wearers in party)"],
            unionBoardTooltip: "+0.25% per square / Max +10.00%",
            hyperStatsTooltip: "+0.50% to +10% depending on level",
            holySymbolTooltip: "(Decent Holy Symbol) +20% to +35% based on skill level / (Holy Symbol) +25% to +70%",
            solJanusTooltip: "+10% to 100% depending on level",
        },
        "lang-tw": {
            weeklies: ["每周任務在这一天做", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
            minigame: "選擇",
            ticket: "数量",
            punchKing: "積分",
            grinding: ["数量", "每個怪物經驗值"],
            burning: ["非燃燒角色", "燃燒角色"],
            potions: "数量",
            potionsTable: ["終極成長秘藥", "成長秘藥1", "成長秘藥2", "成長秘藥3", "颱風成長秘藥", "極限成長秘藥", "超凡成長秘藥"],
            rune: ["N/A", "無符文經驗加成活動", "+20% EXP (沒有龍魔導士LINK技能)", "+26% EXP (龍魔導士LINK技能等級1)", "+30% EXP (龍魔導士LINK技能等級2)",
                    "伺服器活動：符文經驗增加100%", "+40% EXP (沒有龍魔導士LINK技能)", "+52% EXP (龍魔導士LINK技能等級1)", "+60% EXP (龍魔導士LINK技能等級2)",
                    "伺服器活動：符文冷却10分鐘且增加100%經驗", "+60% EXP (沒有龍魔導士LINK技能)", "+78% EXP (龍魔導士LINK技能等級1)", "+90% EXP (龍魔導士LINK技能等級2)",
                    "只在解開符文BUFF時打怪", "+100% EXP", "+150% EXP (活動)", "+200% EXP (活動)"],
            ringOfClanTooltip: "玩家必須戴著血盟之戒，經驗buff才能生效",
            ringOfClan: ["N/A", "+10% EXP (玩家戴戒指)", "+15% EXP (額外1名玩家戴戒指)", "+20% EXP (額外2名玩家戴戒指)", "+25% EXP (額外3名玩家戴戒指)", "+30% EXP (額外4名玩家戴戒指)"],
            unionBoardTooltip: "每格+0.25% /最大+10.00%",
            hyperStatsTooltip: "+0.50%至+10%，视等级而定",
            holySymbolTooltip: "根据技能等级+20%至+35% /(正版神圣祈禱)+25%至+70%",
            solJanusTooltip: "根据等级+10%到+100%",
        }
    }

    selectElem.addEventListener("change", () => {
        let lang = selectElem.value;

        setLanguage();
        Array.from(document.getElementById("weeklies-when-select").options)
            .forEach((elem, index) => elem.text = langText[lang].weeklies[index])

        Array.from(document.getElementById("exp-minigame-select").options)[0].text = langText[lang].minigame;
        document.getElementById("num-exp-tickets").placeholder = langText[lang].ticket;
        document.getElementById("exp-pk-points").placeholder = langText[lang].punchKing;

        [1, 2, 3].forEach(i => {
            document.getElementById(`qty-monster-${i}`).placeholder = langText[lang].grinding[0];
            document.getElementById(`per-monster-exp-${i}`).placeholder = langText[lang].grinding[1];
        })
            
        Array.from(document.getElementById("burning-select").options)
            .forEach((elem, index) => elem.text = langText[lang].burning[index]);

        Array.from(document.querySelectorAll(".single-potion-add-input"))
            .forEach(elem => elem.placeholder = langText[lang].potions);

        Array.from(document.getElementById("potion-exp-table-select").options)
            .forEach((elem, index) => elem.text = langText[lang].potionsTable[index]);

        Array.from(document.getElementById("rune-exp").options)
            .forEach((elem, index) => elem.text = langText[lang].rune[index]);

        document.getElementById("ring-of-clan-tooltip").dataset.originalTitle = langText[lang].ringOfClanTooltip;

        Array.from(document.getElementById("ring-of-clan").options)
            .forEach((elem, index) => elem.text = langText[lang].ringOfClan[index]);

        document.getElementById("union-board-tooltip").dataset.originalTitle = langText[lang].unionBoardTooltip;
        document.getElementById("hyper-stats-tooltip").dataset.originalTitle = langText[lang].hyperStatsTooltip;
        document.getElementById("holy-symbol-tooltip").dataset.originalTitle = langText[lang].holySymbolTooltip;
        document.getElementById("sol-janus-tooltip").dataset.originalTitle = langText[lang].solJanusTooltip;
    })
}

/***********************
 * 
 * Core loading functions - Creates EXP table for information retrieval
 * 
 * *********************/
function loadEXPTableHistory() {
    EXP_TABLE_HISTORY.forEach(history => {
        document
                .getElementById(`exp-table-history`)
                .insertAdjacentHTML('beforeend', `<tr>
                    <th scope="row" class="align-middle text-center">${history.name}</th>
                    <td class="py-2 px-2">${history.details.join("<br/>")}</td>
                    <td class="align-middle text-center"><a class="text-custom" href="${history.url}" target="_blank">Click me!</a></td>
                </tr>`);
    })
}

function loadCurrentEXPTable() {
    let prevEXP = -1;

    CURR_EXP_TABLE.forEach((levelRange, index) => {
        let html = `<div class="w-100 col-12 col-sm-6 col-xl-4 d-flex flex-column align-items-center mb-4"><h2 class="font-subsubheader font-weight-bold text-underline mb-2"><span class="lang lang-en">${levelRange.name}</span><span class="lang lang-tw">${levelRange.nameTw}</span></h2>

        <table class='font-table size-350 table table-sm table-bordered table-hover'>
            <thead>
                <tr>
                    <th scope="col" class="text-center">
                        <span class="lang lang-en">Level</span>
                        <span class="lang lang-tw">等級</span>
                    </th>
                    <th scope="col" class="text-center">
                        <span class="lang lang-en">EXP To Next Level</span>
                        <span class="lang lang-tw">下一等級所需EXP</span>
                    </th>
                    <th scope="col" class="text-center">
                        <span class="lang lang-en">% increase</span>
                        <span class="lang lang-tw">% 增加</span>
                    </th>
                </tr>
            </thead>
            <tbody id='exp-table-${index}'>
            </tbody>
        </table></div>`;

        document.getElementById("curr-exp-tables").insertAdjacentHTML('beforeend', html);

        levelRange.values.forEach((rawEXP, arrayNum) => {
            document
                .getElementById(`exp-table-${index}`)
                .insertAdjacentHTML('beforeend', `<tr>
                    <th scope="row" class="text-center">${levelRange.startLevel+arrayNum} > ${levelRange.startLevel+arrayNum+1}</th>
                    <td class="text-center" id="${levelRange.startLevel+arrayNum}-exp-tnl" data-raw-exp-tnl="${rawEXP}">${rawEXP.toLocaleString('en-SG')}</td>
                    <td class="text-center">${prevEXP === -1 ? "-" : (rawEXP / prevEXP * 100 - 100).toFixed(1).replace(/[.,]0$/, "") + "%" }</td>
                </tr>`);

            prevEXP = rawEXP;
        })
    })
}

/***********************
 * 
 * Validation functions
 * 
 * *********************/
function validateDateInput(elemIds) {
    let startDateInput = document.getElementById(elemIds.startDateId);
    let endDateInput = document.getElementById(elemIds.endDateId);

    [startDateInput, endDateInput].forEach(input => {
        input.addEventListener("change", () => {
            let startDate = Date.parse(new Date(startDateInput.value));
            let endDate = Date.parse(new Date(endDateInput.value))

            if(startDate > endDate) {
                document.getElementById(elemIds.dateErrorMsgId).classList.remove("d-none");
                document.getElementById(elemIds.dateErrorMsgId).classList.add("active");
                document.getElementById(elemIds.dateErrorMsgId).textContent = "Start date cannot be later than end date.";
            } else {
                let totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);

                if(totalDays > 1825) {
                    document.getElementById(elemIds.dateErrorMsgId).classList.remove("d-none");
                    document.getElementById(elemIds.dateErrorMsgId).classList.add("active");
                    document.getElementById(elemIds.dateErrorMsgId).textContent = "You can only calculate up to 1,825 days (5 years) of dailies. Please adjust the date range.";
                } else {
                    document.getElementById(elemIds.dateErrorMsgId).classList.add("d-none");
                    document.getElementById(elemIds.dateErrorMsgId).classList.remove("active");
                }
            }

            checkAnyActiveErrors(elemIds.parentContainerId, elemIds.calcBtnId);
        })
    })
}

function validateCurrLevelInput(elemIds) {
    let levelInput = document.getElementById(elemIds.charLevelInputId);

    levelInput.addEventListener("change", () => {
        let levelInputValue = parseInt(levelInput.value)
        let currExpPercentInput = document.getElementById(elemIds.currExpPercentInputId);
        let currExpRawInput = document.getElementById(elemIds.currExpRawInputId);

        currExpPercentInput.value = 0.000;
        currExpRawInput.value = 0;
        document.getElementById(elemIds.currExpRawErrorMsgId).classList.add("d-none");
        document.getElementById(elemIds.currExpRawErrorMsgId).classList.remove("active");

        if(isNaN(levelInputValue) || levelInputValue < 200) {
            levelInput.value = 200;
        }

        if(levelInputValue > 299) {
            levelInput.value = 299;
        }

        checkAnyActiveErrors(elemIds.parentContainerId, elemIds.calcBtnId);
    })
}

function validateTargetLevelInput(elemIds) {
    let levelInput = document.getElementById(elemIds.targetLevelInputId);

    levelInput.addEventListener("change", () => {
        let levelInputValue = parseInt(levelInput.value)

        if(isNaN(levelInputValue) || levelInputValue < 200) {
            levelInput.value = 200;
        }

        if(levelInputValue > 300) {
            levelInput.value = 300;
        }

        checkAnyActiveErrors(elemIds.parentContainerId, elemIds.calcBtnId);
    })
}

function validateCurrExpPercentInput(elemIds){
    let expPercentInput = document.getElementById(elemIds.currExpPercentInputId);

    expPercentInput.addEventListener("change", () => {
        let expRawInput = document.getElementById(elemIds.currExpRawInputId);
        let levelInputValue = parseInt(document.getElementById(elemIds.charLevelInputId).value);
        let expPercentInputValue = parseFloat(expPercentInput.value);

        if(isNaN(expPercentInputValue) || expPercentInputValue < 0) {
            expPercentInput.value = 0.000;
            expRawInput.value = 0;
        }

        if(expPercentInputValue > 100) {
            expPercentInput.value = 100.000;
            expRawInput.value = parseInt(document.getElementById(`${levelInputValue}-exp-tnl`).dataset.rawExpTnl).toLocaleString("en-SG");
        } else if(expPercentInputValue > 0) {
            expRawInput.value = parseInt(document.getElementById(`${levelInputValue}-exp-tnl`).dataset.rawExpTnl * expPercentInputValue / 100.00).toLocaleString("en-SG");
        }

        document.getElementById(elemIds.currExpRawErrorMsgId).classList.add("d-none");
        document.getElementById(elemIds.currExpRawErrorMsgId).classList.remove("active");

        checkAnyActiveErrors(elemIds.parentContainerId, elemIds.calcBtnId);
    })
}

function validateCurrExpRawInput(elemIds) {
    let expRawInput = document.getElementById(elemIds.currExpRawInputId);

    expRawInput.addEventListener("change", () => {
        let expPercentInput = document.getElementById(elemIds.currExpPercentInputId);
        let levelInputValue = parseInt(document.getElementById(elemIds.charLevelInputId).value);
        let expRawInputStr = expRawInput.value.match(/\d/g);
        let expRawInputValue;

        if(!expRawInputStr) {
            expRawInputValue = 0;
            expRawInput.value = 0;
            expPercentInput.value = 0.000;
        } else {
            expRawInputValue = parseInt(expRawInputStr.join(""));

            if(expRawInputValue === 0) {
                expRawInput.value = 0;
                expPercentInput.value = 0.000;
            }
        }

        let expTnl = document.getElementById(`${levelInputValue}-exp-tnl`).dataset.rawExpTnl;

        if(expRawInputValue > expTnl) {
            document.getElementById(elemIds.currExpRawErrorMsgId).classList.remove("d-none");
            document.getElementById(elemIds.currExpRawErrorMsgId).classList.add("active");
            document.getElementById(elemIds.errorMaxExpTnlId).textContent = parseInt(expTnl).toLocaleString("en-SG");
        } else if(expRawInputValue >= 0) {            
            document.getElementById(elemIds.currExpRawErrorMsgId).classList.add("d-none");
            document.getElementById(elemIds.currExpRawErrorMsgId).classList.remove("active");
            expPercentInput.value = (expRawInputValue / getExpTNL(levelInputValue) * 100).toFixed(3);
            expRawInput.value = expRawInputValue.toLocaleString("en-SG");
        }

        checkAnyActiveErrors(elemIds.parentContainerId, elemIds.calcBtnId);
    })
}

function checkAnyActiveErrors(parentContainerId, btnId) {
    let parentContainer = document.getElementById(parentContainerId);
    let activeErrors = parentContainer.querySelectorAll(".text-danger.active");

    if(activeErrors.length > 0) {
        document.getElementById(btnId).classList.add("d-none");
        document.getElementById(btnId).classList.remove("d-flex");
    } else {
        document.getElementById(btnId).classList.add("d-flex");
        document.getElementById(btnId).classList.remove("d-none");
    }
}