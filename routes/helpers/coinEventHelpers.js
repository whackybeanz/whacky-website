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
            { iconId: "inno-scroll-60", price: 50, quantity: 20, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "stamp-golden", price: 20, quantity: 20, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "stamp-add-adv", price: 30, quantity: 20, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "cube-sus-add", price: 100, quantity: 30, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "pet-att-scroll-100", price: 700, quantity: 10, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "pet-matt-scroll-100", price: 700, quantity: 10, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "karma-crf", price: 50, quantity: 30, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "karma-rrf", price: 150, quantity: 30, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "karma-black-flame", price: 250, quantity: 20, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "karma-yc", price: 100, quantity: 20, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "karma-pc", price: 150, quantity: 20, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "event-ring-pc", price: 100, quantity: 100, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "event-ring-lps", price: 5000, quantity: 1, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "karma-17-star-scroll", price: 7000, quantity: 1, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "tenebris-ring-scroll", price: 500, quantity: 3, coinType: currency, purchaseLimit: "character", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "awake-ring-scroll", price: 500, quantity: 3, coinType: currency, purchaseLimit: "character", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
        ],
        growth: [
            { iconId: "2x-exp-coupon", price: 30, quantity: 2, coinType: currency, purchaseLimit: "character", timeframeLimit: "day", tradability: "untradable", itemNotes: "", sectionHeader: "Growth" },
            { iconId: "mysterious-momon", price: 200, quantity: 3, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "monster-life-7-gem", price: 20, quantity: 10, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "power-elixir-100", price: 5, quantity: -1, coinType: currency, purchaseLimit: "character", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "world-map-teleport-1-day", price: 15, quantity: 1, coinType: currency, purchaseLimit: "character", timeframeLimit: "day", tradability: "untradable", itemNotes: "" },
            { iconId: "pendant-slot-coupon-7", price: 60, quantity: 1, coinType: currency, purchaseLimit: "character", timeframeLimit: "week", tradability: "untradable", itemNotes: "" },
            { iconId: "trait-boost-potion", price: 300, quantity: 2, coinType: currency, purchaseLimit: "character", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "select-tab-8-slot-coupon", price: 100, quantity: 4, coinType: currency, purchaseLimit: "character", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "ap-reset-scroll", price: 50, quantity: 1, coinType: currency, purchaseLimit: "character", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "sp-reset-scroll", price: 50, quantity: 1, coinType: currency, purchaseLimit: "character", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "fatigue-recovery-potion", price: 10, quantity: 1, coinType: currency, purchaseLimit: "character", timeframeLimit: "day", tradability: "untradable", itemNotes: "" },
            { iconId: "char-slot-expand-coupon", price: 200, quantity: 3, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "8-slot-recipe-bag", price: 80, quantity: 1, coinType: currency, purchaseLimit: "character", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "8-slot-crafting-item-bag", price: 80, quantity: 1, coinType: currency, purchaseLimit: "character", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "20-slot-scroll-bag", price: 200, quantity: 1, coinType: currency, purchaseLimit: "character", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "40-slot-soul-bag", price: 500, quantity: 1, coinType: currency, purchaseLimit: "character", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "core-gemstone", price: 70, quantity: 50, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "exp-core-gemstone", price: 1000, quantity: 5, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "special-honor-medal", price: 100, quantity: 15, coinType: currency, purchaseLimit: "character", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "chaos-circulator", price: 800, quantity: 5, coinType: currency, purchaseLimit: "character", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "black-circulator", price: 1500, quantity: 3, coinType: currency, purchaseLimit: "character", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "legendary-circulator", price: 4000, quantity: 1, coinType: currency, purchaseLimit: "character", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "symbol-rte", price: 20, quantity: 100, coinType: currency, purchaseLimit: "character", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "symbol-cci", price: 20, quantity: 100, coinType: currency, purchaseLimit: "character", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "symbol-lacheln", price: 40, quantity: 100, coinType: currency, purchaseLimit: "character", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "symbol-arcana", price: 40, quantity: 100, coinType: currency, purchaseLimit: "character", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "symbol-moras", price: 60, quantity: 100, coinType: currency, purchaseLimit: "character", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "symbol-esfera", price: 60, quantity: 100, coinType: currency, purchaseLimit: "character", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "select-1-auth-symbol-coupon", price: 150, quantity: 100, coinType: currency, purchaseLimit: "character", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
        ],
        regReboot: [
            { iconId: "reboot-meso-pouch", price: 100, quantity: 8, coinType: currency, purchaseLimit: "character", timeframeLimit: "none", tradability: "untradable", itemNotes: "", sectionHeader: "Reboot-only Items" },
            { iconId: "arcane-river-water-drop-stone", price: 150, quantity: 10, coinType: currency, purchaseLimit: "character", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "sea-of-beginnings-water-drop-stone", price: 150, quantity: 10, coinType: currency, purchaseLimit: "character", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
        ],
        bossing: [
            { iconId: "apc-voucher", price: 40, quantity: 15, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "karma-icsog-60", price: 10, quantity: 50, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "karma-crf", price: 5, quantity: 30, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "karma-rrf", price: 15, quantity: 30, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "karma-black-flame", price: 25, quantity: 50, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "karma-prem-pet-wa-scroll-100", price: 500, quantity: 8, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "karma-prem-pet-ma-scroll-100", price: 500, quantity: 8, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "karma-prem-acc-wa-scroll-100", price: 500, quantity: 5, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "karma-prem-acc-ma-scroll-100", price: 500, quantity: 5, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "black-circulator", price: 150, quantity: 5, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "arcane-river-water-drop-stone", price: 15, quantity: 50, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "", sectionHeader: "Reboot-only Items" },
            { iconId: "sea-of-beginnings-water-drop-stone", price: 15, quantity: 50, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
        ],
        meso: [
            { iconId: "karma-crf", price: 15000000, quantity: 30, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "karma-rrf", price: 45000000, quantity: 30, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "karma-black-flame", price: 75000000, quantity: 50, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "karma-icsog-60", price: 35000000, quantity: 50, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "karma-prem-acc-wa-scroll-100", price: 1000000000, quantity: 5, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "karma-prem-acc-ma-scroll-100", price: 800000000, quantity: 5, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "fairy-heart", price: 2000000000, quantity: 1, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "karma-prem-pet-wa-scroll-100", price: 1000000000, quantity: 10, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "karma-prem-pet-ma-scroll-100", price: 800000000, quantity: 10, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "blush-petal-skin-android-coupon", price: 800000000, quantity: 1, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "soft-petal-skin-android-coupon", price: 800000000, quantity: 1, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "android-ear-sensor-clip", price: 600000000, quantity: 1, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "untradable", itemNotes: "" },
            { iconId: "karma-rrf", price: 250000000, quantity: 30, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "", sectionHeader: "Reboot-only Items" },
            { iconId: "karma-black-flame", price: 375000000, quantity: 30, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
            { iconId: "cube-suspicious", price: 500000, quantity: 100, coinType: currency, purchaseLimit: "world", timeframeLimit: "none", tradability: "inter-acct", itemNotes: "" },
        ],
    }

    return itemList[listType] || [];
}

module.exports = { sortByCategory, getCoinGainsAndCosts, getAllItemMaxQty, retrieveItemList };