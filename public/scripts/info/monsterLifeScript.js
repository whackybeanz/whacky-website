let searchBox = document.getElementById("search-monster");

searchBox.addEventListener("click", () => {
    searchBox.select();
})

searchBox.addEventListener("input", (event) => {
    if(event.inputType === "insertReplacementText" || event.inputType === undefined) {
        fetch(`https://whacky-website.s3.ap-southeast-1.amazonaws.com/monster-life/${searchBox.value}.json`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => {
            let searchResultsDiv = document.getElementById("search-results");
            let sortedFarms = sortFarms(data);

            searchResultsDiv.innerHTML = "";

            Object.keys(sortedFarms).forEach(farmStatus => {
                let html = `<h3 class="font-subheader">${farmStatus}</h3>`;
                html += `<div class="farm-list d-flex flex-wrap justify-content-around">`;

                sortedFarms[farmStatus].forEach(farm => {
                    let [activeColor, inactiveColor] = ["text-custom", "inactive-text"];

                    if(farmStatus === "Expired") {
                        [activeColor, inactiveColor] = ["inactive-text", "text-danger"];
                    }

                    html += `<div class="single-farm-result col-4 col-md-3 d-flex flex-column align-items-center rounded-sm px-2 py-1 my-1">`;
                        html += `<p class="font-weight-bold mb-1">${farm.farmName}</p>`;
                        html += `<div class="font-form d-flex justify-content-around">`;
                            html += `<p class="${activeColor} text-center mb-0 mx-2"><span class="font-weight-bold">${farm.numActive}</span><br>Active</p>`;
                            html += `<p class="${inactiveColor} text-center mb-0 mx-2"><span class="font-weight-bold">${farm.numInactive}</span><br>Expired</p>`;
                        html += `</div>`;
                    html += `</div>`
                })

                html += `</div>`;

                searchResultsDiv.insertAdjacentHTML('beforeend', `<div class="single-search-list d-flex flex-wrap justify-content-around">${html}</div>`)
            })
        })
        .catch(err => {
            console.log(err);
            console.log("File does not exist");

            document.getElementById("search-results").textContent = `Data is not available for this monster!`;
        })
    }
})

function sortFarms(data) {
    const NOW = Date.now();
    const TWO_DAYS = 48 * 60 * 60 * 1000;
    let farmList = [];
    let sortedList = {
        "Active": [],
        "Expired": [],
    }

    data.forEach(farmData => {
        // Check if farm has already been created previously
        let foundFarmIndex = farmList.findIndex(searchedFarm => searchedFarm.farmName === farmData.farmName);

        // If foundFarmIndex is -1, farm is new in the list to populate
        if(foundFarmIndex === -1) {
            farmList.push({ 
                farmName: farmData.farmName, 
                earliestExpiry: farmData.expires, 
                earliestUpdatedOn: farmData.updatedOn, 
                numActive: Date.parse(farmData.expires) > NOW ? 1 : 0,
                numInactive: Date.parse(farmData.expires) < NOW ? 1 : 0,
            })
        } else {
            let foundFarm = farmList[foundFarmIndex];

            if(foundFarm.earliestExpiry > farmData.expires) { foundFarm.earliestExpiry = farmData.expires; }
            if(foundFarm.earliestUpdatedOn > farmData.updatedOn) { foundFarm.earliestUpdatedOn = farmData.updatedOn; }
            if(Date.parse(farmData.expires) > NOW) { foundFarm.numActive += 1; }
            if(Date.parse(farmData.expires) < NOW) { foundFarm.numInactive += 1; }

            farmList[foundFarmIndex] = foundFarm;
        }
    })

    // Sort list first by number of active, then number of inactive, then by farm name
    // Since farms are unique, there will not be a case where two farm names are equal (0 is omitted in sort)
    farmList.sort((farmA, farmB) => {
        let farmAName = farmA.farmName.toUpperCase();
        let farmBName = farmB.farmName.toUpperCase();

        return farmB.numActive - farmA.numActive || 
                farmB.numInactive - farmA.numInactive || 
                (farmAName < farmBName ? -1 : 1)
    })

    // Filter list into active (has at least one active monster) and inactive (no active monsters)
    sortedList.Active = farmList.filter(farm => farm.numActive > 0);
    sortedList.Expired = farmList.filter(farm => farm.numActive === 0);

    return sortedList;
}