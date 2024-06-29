function loadDojoEXPTable() {
    let startingLevel = 105;
    let expTNL = 0;

    DOJO_EXP_TABLE.forEach((expValue, index) => {
        expTNL = parseInt(document.getElementById(`${startingLevel + index}-exp-tnl`).dataset.rawExpTnl);

        document
                .getElementById(`dojo-exp-table`)
                .insertAdjacentHTML('beforeend', `<tr>
                    <th scope="row" class="text-center align-middle">${startingLevel + index} > ${startingLevel + index + 1}</th>
                    <td class="text-center align-middle">
                        ${expValue.toLocaleString('en-SG')} EXP / <span class="lang lang-en">tick</span> <span class="lang lang-tw d-none">每次增加</span><br/>
                        ${(expValue*12*60).toLocaleString('en-SG')} EXP / <span class="lang lang-en">hour</span> <span class="lang lang-tw d-none">每小時</span>
                    </td>
                    <td class="text-center align-middle text-custom font-weight-bold">
                        ${(expValue / expTNL*100).toFixed(3) + "%"} / <span class="lang lang-en">tick</span> <span class="lang lang-tw d-none">每次增加</span><br/>
                        ${(expValue*12*60 / expTNL*100).toFixed(3) + "%"} / <span class="lang lang-en">hour</span> <span class="lang lang-tw d-none">每小時</span>
                    </td>
                </tr>`);

        document
                .getElementById(`exp-pouch-table`)
                .insertAdjacentHTML('beforeend', `<tr>
                    <th scope="row" class="text-center align-middle">${startingLevel + index} > ${startingLevel + index + 1}</th>
                    <td class="text-center align-middle">
                        ${Math.round(expValue*0.8).toLocaleString('en-SG')} EXP / <span class="lang lang-en">tick online</span> <span class="lang lang-tw d-none">在線每次增加</span><br/>
                        ${Math.round(expValue*0.8*6*60).toLocaleString('en-SG')} EXP / <span class="lang lang-en">hour online</span> <span class="lang lang-tw d-none">在線每小時</span>
                    </td>
                    <td class="text-center align-middle text-custom font-weight-bold">
                        ${(Math.round(expValue*0.8) / expTNL*100).toFixed(3) + "%"} / <span class="lang lang-en">tick online</span> <span class="lang lang-tw d-none">在線每次增加</span><br/>
                        ${(Math.round(expValue*0.8*6*60) / expTNL*100).toFixed(3) + "%"} / <span class="lang lang-en">hour online</span> <span class="lang lang-tw d-none">在線每小時</span>
                    </td>
                </tr>`);
    })

    document
        .getElementById(`dojo-exp-table`)
        .insertAdjacentHTML('beforeend', `<tr>
            <th scope="row" class="text-center align-middle">220+</th>
            <td class="text-center align-middle" colspan="2">
                <span class="lang lang-en">EXP per tick is same as 219 > 220. It's not worth AFK-ing for EXP beyond this point f3</span>
                <span class="lang lang-tw d-none">经验值每次增加与等级219 > 220一样</span>
            </td>
        </tr>`);

    document
        .getElementById(`exp-pouch-table`)
        .insertAdjacentHTML('beforeend', `<tr>
            <th scope="row" class="text-center align-middle">220+</th>
            <td class="text-center align-middle" colspan="2">
                <span class="lang lang-en">EXP per tick is same as 219 > 220. Just... collect the pouch whenever you can~</span>
                <span class="lang lang-tw d-none">经验值每次增加与等级219 > 220一样</span>
            </td>
        </tr>`);
}