document.addEventListener("DOMContentLoaded", () => {
    loadSymbolEXPTables();
});

function loadSymbolEXPTables() {
    let totalSymbolEXP;

    SYMBOL_EXP_TABLE.forEach((symbolType, index) => {
        totalSymbolEXP = 0;
        let html = `<div class="w-100 col-12 col-sm-6 col-xl-4 d-flex flex-column align-items-center mb-4"><h2 class="font-subsubheader font-weight-bold text-underline mb-2">${symbolType.name}</h2>

        <table class='font-table size-350 table table-sm table-bordered table-hover'>
            <thead>
                <tr>
                    <th scope="col" class="text-center">Level</th>
                    <th scope="col" class="text-center">EXP To Next Level</th>
                    <th scope="col" class="text-center">Total Symbols</th>
                </tr>
            </thead>
            <tbody id='symbol-exp-table-${index}'>
            </tbody>
        </table></div>`;

        document.getElementById("symbol-exp-tables").insertAdjacentHTML('beforeend', html);

        symbolType.values.forEach((rawEXP, arrayNum) => {
            totalSymbolEXP += rawEXP;

            document
                .getElementById(`symbol-exp-table-${index}`)
                .insertAdjacentHTML('beforeend', `<tr>
                    <th scope="row" class="text-center">${symbolType.startLevel+arrayNum} > ${symbolType.startLevel+arrayNum+1}</th>
                    <td class="text-center" id="${symbolType.startLevel+arrayNum}-exp-tnl" data-raw-exp-tnl="${rawEXP}">${rawEXP.toLocaleString('en-SG')}</td>
                    <td class="text-center">${totalSymbolEXP.toLocaleString('en-SG')}</td>
                </tr>`);
        })
    })
}