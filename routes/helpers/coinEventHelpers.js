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

module.exports = { getCoinGainsAndCosts, getAllItemMaxQty };