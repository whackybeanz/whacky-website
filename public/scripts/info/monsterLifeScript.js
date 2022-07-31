document.addEventListener("DOMContentLoaded", function(event) {
    loadSavedData();
    searchFarmsListener();
    toggleFarmViewListener();
    bookmarkListener();
    searchMonstersListener();
    relatedSearchListener();
})

const activeSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-pulse" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01L8 2.748ZM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5Zm8.252-6.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162l-1.874-4.686Z"/>
</svg>`;
const expiredSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hourglass" viewBox="0 0 16 16">
  <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702c0 .7-.478 1.235-1.011 1.491A3.5 3.5 0 0 0 4.5 13v1h7v-1a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351v-.702c0-.7.478-1.235 1.011-1.491A3.5 3.5 0 0 0 11.5 3V2h-7z"/>
</svg>`;
const bookmarkFillSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
</svg>`;
const searchingSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>`;

// Loads saved data from localStorage
// If category has at least one monster/farm, populate the respective list
function loadSavedData() {
    let savedData = JSON.parse(localStorage.getItem("monsterLife"));    

    if(savedData !== null) {
        Object.keys(savedData).forEach(category => {
            if(savedData[category] !== undefined && savedData[category].length > 0) {
                populateBookmarks(category, savedData);    
            }
        })
    }
}

function populateBookmarks(category, savedData) {
    let bookmarkElem = document.getElementById(`bookmarked-${category}`);
    bookmarkElem.innerHTML = "";

    if(category === "monsters") {
        savedData.monsters.sort((a, b) => {
            let nameA = a.name.toUpperCase();
            let nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }

            if (nameA > nameB) {
                return 1;
            }

            return 0;
        });

        savedData.monsters.forEach(({ name, id }) => {
            let html = "";

            html += `<div class="single-monster-container mlife-container col-12 col-sm-6 col-md-4 col-lg-3 px-1 my-1 position-relative" data-mlife-name="${name}" data-mlife-id="${id}" id="bookmarked-monsters-${id}">`;
                html += `<div class="single-monster mlife-container-div h-100 cursor-pointer d-flex justify-content-between align-items-center rounded-sm px-3 py-2">`
                    html += `<div class="searching-icon text-custom">${searchingSvg}</div>`;
                    html += `<div class="w-100 monster-name mlife-container-header text-center mb-0">${name}</div>`;
                    html += `<div class="searching-icon text-custom">${searchingSvg}</div>`;
                html += `</div>`;
            html += `</div>`;

            bookmarkElem.insertAdjacentHTML("beforeend", html);

            document.querySelectorAll(`.monster-${id}`).forEach(elem => {
                elem.querySelector(".bookmark-selected").classList.remove("d-none");
            })
        })
    }

    if(category === "farms") {
        savedData.farms.forEach(({ name }) => {
            let html = "";

            html += `<div class="single-farm-container mlife-container col-12 col-sm-6 col-md-4 col-xl-3 px-1 my-1 position-relative" data-mlife-name="${name}" data-mlife-type="farms" id="bookmarked-farms-${name}">`;
                html += `<div class="single-farm mlife-container-div h-100 cursor-pointer d-flex justify-content-center rounded-sm py-2">`
                    html += `<div class="farm-name mlife-container-header text-left font-weight-bold mb-0">${name}</div>`;
                html += `</div>`;
                html += `<div class="bookmark-selected text-custom position-absolute">${bookmarkFillSvg}</div>`;
            html += `</div>`;

            bookmarkElem.insertAdjacentHTML("beforeend", html);
        })
    }
}

/************************
 * Adds two event listeners to the search box (searches for farms)
 * 1) On click, highlight all text inside search box
 * 2) On input, check if input was done through selection from datalist element (inputType differs based on browser)
 * (event.detail.inputType is a CustomEvent fired from selecting a bookmarked monster)
 * - Fetch data through GET
 * - Populate farm list for view
 * - Display icon for all previously bookmarked farms
 * **********************/
function searchFarmsListener() {
    let searchBox = document.getElementById("search-matching-farms");

    searchBox.addEventListener("click", () => {
        searchBox.select();
    })

    searchBox.addEventListener("input", (event) => {
        if(event.inputType === "insertReplacementText" || event.inputType === undefined || 
            (event.detail && event.detail.inputType === "insertReplacementText")) {
            const searchValue = searchBox.value;
            const monsterDatalist = document.getElementById("monster-list");
            const monsterId = monsterDatalist.querySelector(`option[value="${searchValue}"]`).dataset.id;

            fetch(`/info/monster-life/search/${monsterId}`, {
                method: "GET"
            })
            .then(response => response.json())
            .then(data => {
                if(!data.isErr && data.farmCount !== 0) {
                    populateFarms(data.farms);
                    showBookmarksOnFarmSearch();

                    document.getElementById("btn-toggle-farm-view").classList.remove("d-none");
                    document.getElementById("btn-toggle-farm-view").classList.add("d-flex");
                } else {
                    throw Error(`No known farms that have [${searchValue}]!`)
                }
            })
            .catch(err => {
                document.getElementById("search-results").innerHTML = `<span class="text-danger">- ${err} -</span>`;
            })
        }
    })
}

/******************
 *  Displays sorted farm list (by expiry and quantity of active monsters) on page
 * - Empty the search results container to prepare for re-population of data
 * - Sort all farms and populate all farm data based on active/expired status (differing colors for displayed icons based on detected status)
 * - Hide expiry/last updated date by default for compact view
 * - Display button to toggle on/off farm details
 * - Based on saved data, show any bookmarked farms that have appeared in the searched results 
 * **********************/
function populateFarms(farms) {
    let searchResultsDiv = document.getElementById("search-results");
    let sortedFarms = sortFarms(farms);

    searchResultsDiv.innerHTML = "";

    Object.keys(sortedFarms).forEach(farmStatus => {
        let html = `<h3 class="font-subheader">${farmStatus} (${sortedFarms[farmStatus].length} Farms)</h3>`;
        html += `<p class="text-center">Click any container to copy the displayed farm name to your clipboard. Double-click to bookmark farm.</p>`;

        html += `<div class="farm-list w-100 d-flex flex-wrap justify-content-start">`;

        sortedFarms[farmStatus].forEach(farm => {
            let [activeColor, inactiveColor] = ["text-custom", "inactive-text"];

            if(farmStatus === "Expired") {
                [activeColor, inactiveColor] = ["inactive-text", "text-danger"];
            }

            let expireDate = new Intl.DateTimeFormat('en-SG', { year: '2-digit', month: 'short', day: '2-digit', hour: "2-digit", minute: "2-digit" }).format(Date.parse(farm.earliestExpiry) - 8 * 60 * 60 * 1000);
            let lastUpdatedDate = new Intl.DateTimeFormat('en-SG', { year: '2-digit', month: 'short', day: '2-digit', hour: "2-digit", minute: "2-digit" }).format(Date.parse(farm.earliestUpdatedOn) - 8 * 60 * 60 * 1000);

            html += `<div class="single-farm-container mlife-container col-12 col-sm-6 col-md-4 col-xl-3 px-1 my-1 position-relative" id="search-farms-${farm.farmName}" data-mlife-name="${farm.farmName}" data-mlife-type="farms">`;
                html += `<div class="single-farm mlife-container-div h-100 cursor-pointer d-flex flex-column align-items-center rounded-sm py-2">`
                    html += `<div class="w-100 d-flex align-items-center">`
                        html += `<div class="d-flex flex-column flex-grow-1 pl-3">`
                            html += `<div class="farm-name mlife-container-header text-left font-weight-bold mb-0">${farm.farmName}</div>`;
                            html += `<small class="farm-details expiry-date font-small text-muted d-none">Expires: ${expireDate}</small>`;
                            html += `<small class="farm-details last-updated-date font-small text-muted d-none">Updated: ${lastUpdatedDate}</small>`;
                        html += `</div>`;
                        html += `<div class="d-flex flex-column align-items-end pr-2">`;
                            html += `<div class="${activeColor} font-weight-bold mx-1 mb-0">${farm.numActive} ${activeSvg}</div>`;
                            html += `<div class="${inactiveColor} font-weight-bold mx-1 mb-0">${farm.numInactive} ${expiredSvg}</div>`;
                        html += `</div>`;
                    html += `</div>`;
                html += `</div>`;
                html += `<div class="bookmark-selected d-none text-custom position-absolute">${bookmarkFillSvg}</div>`;
            html += `</div>`
        })

        html += `</div>`;

        searchResultsDiv.insertAdjacentHTML('beforeend', `<div class="single-search-list w-100 d-flex flex-column align-items-center">${html}</div>`)
    })
}

// Sort farms based on whether at least one monster (that was searched from the above function) is active
// Compress farm data to remove duplicate farm names due to having multiple of the same monster
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

// Displays bookmark icons on farms within search results that have also been bookmarked and saved into localStorage
function showBookmarksOnFarmSearch() {
    let savedData = JSON.parse(localStorage.getItem("monsterLife")) || { };

    if(savedData["farms"] !== undefined && savedData["farms"].length >= 0 ) {
        savedData["farms"].forEach(farm => {
            let matchingSearchFarm = document.getElementById(`search-farms-${farm}`);

            if(matchingSearchFarm !== null) {
                matchingSearchFarm.querySelector(".bookmark-selected").classList.remove("d-none");
            }
        })
    }
}

// Shows/Hides the farm details (expiry date, last-updated date)
function toggleFarmViewListener() {
    let btn = document.getElementById("btn-toggle-farm-view");

    btn.addEventListener("click", () => {
        let isDetailedView = btn.querySelector(".bi-eye-slash-fill").classList.contains("d-none");

        if(isDetailedView) {
            document.querySelectorAll(".farm-details").forEach(detail => detail.classList.add("d-none"))
        } else {
            document.querySelectorAll(".farm-details").forEach(detail => detail.classList.remove("d-none"))
        }

        btn.querySelector(".bi-eye-fill").classList.toggle("d-none");
        btn.querySelector(".bi-eye-slash-fill").classList.toggle("d-none");
    })
}

// For all created farm elements within both search results and bookmarks section, add two event listeners
// 1) Click listener = copy farm name into clipboard
// 2) Double click listener = add/remove bookmark and update saved data
function bookmarkListener() {
    let allSearchResults = document.getElementById("search-results");
    let bookmarkedFarms = document.getElementById("bookmarked-farms");
    let bookmarkedMonsters = document.getElementById("bookmarked-monsters");
    let usefulMonsters = document.getElementById("useful-monsters");
    let timer = 0;

    // Single-click listener
    [allSearchResults, bookmarkedFarms].forEach(elem => {
        elem.addEventListener("click", function(event) {
            let closestParent = event.target.closest(".mlife-container-div");

            if(closestParent !== null) {
                navigator.clipboard.writeText(closestParent.parentElement.dataset.mlifeName).then(function() {
                    closestParent.classList.add("copied")
                }, function() {
                    
                });
            }
        })
    });

    bookmarkedMonsters.addEventListener("click", function(event) {
        let closestContainer = event.target.closest(".mlife-container");

        if(closestContainer !== null) {
            let mlifeName = closestContainer.dataset.mlifeName;
            let searchInput = document.getElementById("search-matching-farms");

            searchInput.value = mlifeName;
            searchInput.dispatchEvent(new CustomEvent('input', { detail: { inputType: "insertReplacementText" } }));

            let currSelected = document.getElementById("bookmarked-monsters").querySelector(".searching");
            if(currSelected !== null) {
                currSelected.classList.remove("searching");
            }
            closestContainer.querySelector(".mlife-container-div").classList.add("searching");
        }
    });

    // Double-click listener
    // Retrieve the name of the double-clicked element
    // Based on absence/presence of bookmark, add/remove bookmark icon and also update saved data
    [allSearchResults, bookmarkedFarms, usefulMonsters].forEach(elem => {
        elem.addEventListener("dblclick", function(event) {
            if(!event.target.classList.contains("mlife-container")) {
                let closestContainer = event.target.closest(".mlife-container");

                if(closestContainer !== null) {
                    // mlifeName is either be farm name or monster name
                    // mlifeType is either "farm" or "monster" 
                    // mlifeId applies to only monsters
                    let mlifeName = closestContainer.dataset.mlifeName;
                    let mlifeType = closestContainer.dataset.mlifeType;
                    let mlifeId = closestContainer.dataset.mlifeId;
                    let closestBookmark = closestContainer.querySelector(".bookmark-selected")

                    if(closestBookmark.classList.contains("d-none")) {
                        // Add bookmark
                        closestBookmark.classList.remove("d-none");

                        if(mlifeType === "monsters") {
                            document.querySelectorAll(`.monster-${mlifeId}`).forEach(elem => {
                                elem.querySelector(".bookmark-selected").classList.remove("d-none");
                            })
                        }
                        
                        updateMonsterLifeBookmarks("add", mlifeType, mlifeName, mlifeId);
                    } else {
                        // Remove bookmark
                        // For farms, removal may be done in one of two locations - from bookmarks, or from search results
                        // If search results matching the removed farm exists (regardless of how it was triggered), remove the bookmark icon
                        //
                        // For monsters, removal may be done from bookmarks or from Useful Monsters tab
                        //
                        // Also remove the bookmark icon from bookmarks section
                        // Update localStorage data based on latest removal
                        if(mlifeType === "farms") {
                            document.getElementById(`bookmarked-${mlifeType}-${mlifeName}`).querySelector(".bookmark-selected").classList.add("d-none");

                            let matchingElem = document.getElementById(`search-farms-${mlifeName}`);

                            if(matchingElem !== null) {
                                matchingElem.querySelector(".bookmark-selected").classList.add("d-none");
                            }
                        } else {
                            document.querySelectorAll(`.monster-${mlifeId}`).forEach(elem => {
                                elem.querySelector(".bookmark-selected").classList.add("d-none");
                            })
                        }

                        updateMonsterLifeBookmarks("remove", mlifeType, mlifeName, mlifeId);
                    }
                }
            }
        })
    })
}

// Add/remove bookmarks from localStorage data
// First retrieve any savedData (or assign an empty object) from localStorage
// If adding, check for existence of key -- push to array if exists; otherwise create new array, then repopulate the affected category
// If removing, check if array can continue to be removed -- filter out element to remove
function updateMonsterLifeBookmarks(statusType, category, name, id) {
    let savedData = JSON.parse(localStorage.getItem("monsterLife")) || { };

    if(statusType === "add") {
        if(savedData[category] !== undefined && savedData[category].length >= 0 ) {
            if(category === "farms") {
                savedData[category].push({ name: name });
            } else {
                savedData[category].push({ name: name, id: id });
            }
        } else {
            if(category === "farms") {
                savedData[category] = [{ name: name }];    
            } else {
                savedData[category] = [{ name: name, id: id }]
            }
        }

        populateBookmarks(category, savedData);
    }

    if(statusType === "remove") {
        let suffix;

        if(category === "farms") {
            suffix = `${name}`;
        } else {
            suffix = `${id}`;
        }

        if(savedData[category].length >= 0) {
            savedData[category] = savedData[category].filter(dataName => dataName.name !== name);

            let bookmarkedElem = document.getElementById(`bookmarked-${category}`);
            bookmarkedElem.querySelector(`#bookmarked-${category}-${suffix}`).classList.add("fade-out");

            setTimeout(function() {
                bookmarkedElem.querySelector(`#bookmarked-${category}-${suffix}`).remove();
                if(bookmarkedElem.innerHTML === "") {
                    bookmarkedElem.innerHTML = `<p class="w-100 text-center text-custom mb-0">- None bookmarked currently -</p>`;
                }
            }, 500)
        }
    }

    localStorage.setItem("monsterLife", JSON.stringify(savedData));
}

function searchMonstersListener() {
    let searchBox = document.getElementById("search-useful-monster");

    searchBox.addEventListener("click", () => {
        searchBox.select();
    })

    searchBox.addEventListener("keyup", (event) => {
        const searchTerm = searchBox.value.toLowerCase();

        if(searchTerm.length >= 1) {
            const allSearchRows = document.querySelectorAll(".single-search-row");

            allSearchRows.forEach(function(row) {
                if(row.dataset.searchTerms.includes(searchTerm)) {
                    row.classList.remove("d-none");
                    row.classList.add("d-flex");
                } else {
                    row.classList.add("d-none");
                    row.classList.remove("d-flex");
                }
            })
        } else {
            const allSearchRows = document.querySelectorAll(".single-search-row");

            allSearchRows.forEach(function(row) {
                row.classList.remove("d-none");
                row.classList.add("d-flex");
            })
        }
    })
}

function relatedSearchListener() {
    let allRelatedBtns = document.querySelectorAll(".related-btn");

    allRelatedBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            document.querySelectorAll(".single-monster-row").forEach(row => {
                row.classList.remove("d-flex");
                row.classList.add("d-none");
            })

            let relatedSearchKey = this.dataset.relatedSearch;
            let allRelated = [];

            displayRelated(allRelated, relatedSearchKey);
        })
    })
}

function displayRelated(allRelated, relatedSearchKey) {
    if(!allRelated.includes(relatedSearchKey)) {
        let foundRow = document.getElementById(`row-${relatedSearchKey}`);
        let otherRelated = JSON.parse(foundRow.dataset.related);
        foundRow.classList.remove("d-none");
        foundRow.classList.add("d-flex");

        allRelated.push(relatedSearchKey);
        
        for(let related of otherRelated) {
            if(related !== relatedSearchKey) {
                displayRelated(allRelated, related)
            }
        }
    }
}