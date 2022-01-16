/***********************
 * 
 * Basic getters
 * 
 * *********************/
function getCharLevel() {
    return parseInt(document.getElementById("char-level").value);
}

function getExpTNL(charLevel) {
    return parseInt(document.getElementById(`${charLevel}-exp-tnl`).dataset.rawExpTnl);
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
        let html = `<div class="w-100 col-12 col-sm-6 col-xl-4 d-flex flex-column align-items-center mb-4"><h2 class="font-subsubheader font-weight-bold text-underline mb-2">${levelRange.name}</h2>

        <table class='font-table size-350 table table-sm table-bordered table-hover'>
            <thead>
                <tr>
                    <th scope="col" class="text-center">Level</th>
                    <th scope="col" class="text-center">EXP To Next Level</th>
                    <th scope="col" class="text-center">% increase</th>
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