function loadDojoEXPTable() {
    let startingLevel = 105;
    let expTNL = 0;

    DOJO_EXP_TABLE.forEach((expValue, index) => {
        expTNL = parseInt(document.getElementById(`${startingLevel + index}-exp-tnl`).dataset.rawExpTnl);

        document
                .getElementById(`dojo-exp-table`)
                .insertAdjacentHTML('beforeend', `<tr>
                    <th scope="row" class="text-center align-middle">${startingLevel + index} > ${startingLevel + index + 1}</th>
                    <td class="text-center align-middle">${expValue.toLocaleString('en-SG')} / tick<br/>${(expValue*12*60).toLocaleString('en-SG')} / hour</td>
                    <td class="text-center align-middle text-custom font-weight-bold">${(expValue / expTNL*100).toFixed(3) + "%"} / tick<br/>${(expValue*12*60 / expTNL*100).toFixed(3) + "%"} / hour</td>
                </tr>`);
    })

    document
        .getElementById(`dojo-exp-table`)
        .insertAdjacentHTML('beforeend', `<tr>
            <th scope="row" class="text-center align-middle">220+</th>
            <td class="text-center align-middle" colspan="2">EXP per tick is same as 219 > 220. It's not worth AFK-ing for EXP beyond this point f3</td>
        </tr>`);
}