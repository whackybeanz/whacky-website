function sortByCategory(allEvents) {
    let eventsByCategory = {
        ongoing: [],
        upcoming: [],
        ended: []
    };

    allEvents.forEach(event => {
        if(event.category) {
            eventsByCategory[event.category].push(event);
        } else {
            eventsByCategory['ended'].push(event);
        }
    })

    return eventsByCategory;
}

function getCoinGainsAndCosts(coinEventData) {
    let coinGainsAndCosts = {};

    coinEventData.coinDetails.forEach((coinData, coinNum) => {
        coinGainsAndCosts[coinData.iconId] = { mainSourceCoins: 0, extraSourceCoins: 0, rankCosts: 0 };
        let numEventWeeks = coinData.mainSource.coinCapValues.length;
        let coinCapType = coinData.mainSource.coinCapType;

        // First add all main source coin amounts together
        for(let i = 0; i < numEventWeeks; i++) {
            let coinCapValue = coinData.mainSource.coinCapValues[i];
            let sundayMapleMultiplier = coinData.mainSource.sundayMultiplierByWeek[i];

            // Coin cap type is either daily or weekly
            // If daily, factor in sunday maple values in calculations
            // If weekly, set value as retrieved
            if(coinCapType === "daily") {
                coinGainsAndCosts[coinData.iconId].mainSourceCoins += coinCapValue * 6 + sundayMapleMultiplier * coinCapValue;
            } else {
                coinGainsAndCosts[coinData.iconId].mainSourceCoins += coinCapValue;
            }
        }

        // Add any extra sources of coins into total coin amount
        coinData.extraSources.forEach(source => {
            // Possible timeframes: day, week, event
            if(source.timeframe === "day") {
                coinGainsAndCosts[coinData.iconId].extraSourceCoins += source.coinAmount * 7 * numEventWeeks;
            } else if(source.timeframe === "week") {
                coinGainsAndCosts[coinData.iconId].extraSourceCoins += source.coinAmount * numEventWeeks;
            } else {
                coinGainsAndCosts[coinData.iconId].extraSourceCoins += source.coinAmount;
            }
        })

        if(coinData.isUsedForRankUp) {
            coinGainsAndCosts[coinData.iconId].rankCosts = coinData.rankUpCosts.ranks.reduce((currTotal, rankDetails) => currTotal + rankDetails.totalCost, 0);
        }
    })

    return coinGainsAndCosts;
}

function getAllItemMaxQty(coinEventData, durationWeeks) {
    let itemMaxQtys = {};

    coinEventData.shops.forEach((shop, shopIndex) => {
        shop.items.forEach((item, itemIndex) => {
            if(item.timeframeLimit === "day") {
                itemMaxQtys[`shop-${shopIndex}-item-${itemIndex}`] = item.quantity * (durationWeeks * 7 + 5);
            } else if(item.timeframeLimit === "week") {
                itemMaxQtys[`shop-${shopIndex}-item-${itemIndex}`] = item.quantity * (durationWeeks + 1);
            } else {
                itemMaxQtys[`shop-${shopIndex}-item-${itemIndex}`] = item.quantity;
            }
        })
    })

    return itemMaxQtys;
}

// Possible purchase limits: "character", "world", "none"
// Possible timeframe limits: "day", "week", "none"
// Possible tradability: "untradable", "inter-acct", "tradable"
function retrieveItemList(listType, currency) {
    const itemList = {
        enhancement: [
            { iconId: "eps-100", price: 300, quantity: 5, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "", sectionHeader: "Enhancement" },
            { iconId: "special-add-pot-scroll-100", price: 300, quantity: 5, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "gold-hammer-100", price: 60, quantity: 20, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "inno-scroll-100", price: 100, quantity: 20, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "stamp-golden", price: 20, quantity: 20, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "stamp-add-adv", price: 30, quantity: 20, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "pet-eq-scroll-select", price: 500, quantity: 20, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "css-100", price: 200, quantity: 10, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
        ],
        growth: [
            { iconId: "vip-buff-select", price: 50, quantity: 5, coinType: currency, purchaseLimit: "world", timeframeLimit: "day", tradability: "inter-acct", itemNotes: "", sectionHeader: "Growth" },
            { iconId: "2x-exp-coupon", price: 30, quantity: 5, coinType: currency, purchaseLimit: "world", timeframeLimit: "day", tradability: "inter-acct", itemNotes: "" },
            { iconId: "3x-exp-coupon", price: 150, quantity: 2, coinType: currency, purchaseLimit: "world", timeframeLimit: "day", tradability: "inter-acct", itemNotes: "" },
            { iconId: "mysterious-momon", price: 200, quantity: 3, coinType: currency, purchaseLimit: "world", timeframeLimit: "week", tradability: "inter-acct", itemNotes: "" },
            { iconId: "power-elixir-100", price: 5, quantity: -1, coinType: currency, purchaseLimit: "character", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "world-map-teleport-1-day", price: 15, quantity: 1, coinType: currency, purchaseLimit: "character", timeframeLimit: "day", tradability: "inter-acct", itemNotes: "" },
            { iconId: "trait-boost-potion", price: 300, quantity: 10, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "select-tab-8-slot-coupon", price: 100, quantity: 15, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "ap-reset-scroll", price: 50, quantity: 3, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "sp-reset-scroll", price: 50, quantity: 3, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "fatigue-recovery-potion", price: 10, quantity: 5, coinType: currency, purchaseLimit: "world", timeframeLimit: "day", tradability: "inter-acct", itemNotes: "" },
            { iconId: "char-slot-expand-coupon", price: 200, quantity: 5, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "8-slot-recipe-bag", price: 80, quantity: 3, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "8-slot-crafting-item-bag", price: 80, quantity: 3, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "20-slot-scroll-bag", price: 200, quantity: 3, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "40-slot-soul-bag", price: 500, quantity: 3, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "40-slot-chair-bag", price: 1500, quantity: 3, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "chaos-circulator", price: 800, quantity: 15, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "black-circulator", price: 1500, quantity: 10, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "legendary-circulator", price: 2000, quantity: 3, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
        ],
        regReboot: [
            { iconId: "reboot-meso-pouch", price: 100, quantity: 8, coinType: currency, purchaseLimit: "character", timeframeLimit: "none", tradability: "untradable", itemNotes: "", sectionHeader: "Reboot-only Items" },
            { iconId: "arcane-river-water-drop-stone", price: 150, quantity: 10, coinType: currency, purchaseLimit: "character", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "sea-of-beginnings-water-drop-stone", price: 150, quantity: 10, coinType: currency, purchaseLimit: "character", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
        ],
        bossing: [
            { iconId: "vip-buff-select", price: 5, quantity: 10, coinType: currency, purchaseLimit: "world", timeframeLimit: "week", tradability: "inter-acct", itemNotes: "" },
            { iconId: "cube-wapc", price: 40, quantity: 30, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "karma-icsog-100", price: 10, quantity: 50, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "ark-inno-100", price: 20, quantity: 15, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "karma-crf", price: 5, quantity: 100, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "karma-rrf", price: 10, quantity: 200, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "karma-black-flame", price: 20, quantity: 250, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "karma-pet-scroll-select", price: 400, quantity: 30, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "special-honor-medal", price: 10, quantity: 300, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "chaos-circulator", price: 80, quantity: 30, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "black-circulator", price: 150, quantity: 30, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "symbol-cernium", price: 5, quantity: 250, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "symbol-hotel-arcs", price: 10, quantity: 150, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "symbol-odium", price: 15, quantity: 80, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "symbol-dwk", price: 20, quantity: 50, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "symbol-arteria", price: 25, quantity: 30, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "symbol-carcion", price: 30, quantity: 20, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "karma-acc-scroll-select", price: 400, quantity: 30, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "arcane-river-water-drop-stone", price: 15, quantity: 50, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "", sectionHeader: "Reboot-only Items" },
            { iconId: "sea-of-beginnings-water-drop-stone", price: 15, quantity: 50, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
        ],
        meso: [
            { iconId: "karma-crf", price: 4500000, quantity: 30, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "karma-rrf", price: 30000000, quantity: 30, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "karma-black-flame", price: 45000000, quantity: 200, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "karma-icsog-100", price: 45000000, quantity: 50, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "karma-acc-scroll-select", price: 550000000, quantity: 10, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "karma-pet-scroll-select", price: 550000000, quantity: 20, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "fairy-heart", price: 2000000000, quantity: 1, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "blush-petal-skin-android-coupon", price: 800000000, quantity: 1, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "soft-petal-skin-android-coupon", price: 800000000, quantity: 1, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "android-ear-sensor-clip", price: 600000000, quantity: 1, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "karma-rrf", price: 250000000, quantity: 30, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "", sectionHeader: "Reboot-only Items" },
            { iconId: "karma-black-flame", price: 375000000, quantity: 30, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "cube-suspicious", price: 500000, quantity: 100, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
        ],
    }

    return itemList[listType] || [];
}

function sortByBossName(coinDetails, weeklyBossList) {
    const bossByName = {};
    const coin = coinDetails.find(coin => coin.isFromWeeklyBoss);

    if(coin) {
        coin.bossCoinDetails.forEach(coinBoss => {
            if(!bossByName[coinBoss.bossName]) {
                let matchingBoss = weeklyBossList.find(weeklyBoss => weeklyBoss.bossName === coinBoss.bossName);
                bossByName[coinBoss.bossName] = { imgUrl: matchingBoss.imgUrl, difficulties: [] };
            }

            bossByName[coinBoss.bossName].difficulties.push({ mode: coinBoss.difficulty, coinAmount: coinBoss.coinAmount })
        })
    }

    return bossByName;
}

module.exports = { sortByCategory, getCoinGainsAndCosts, getAllItemMaxQty, retrieveItemList, sortByBossName };