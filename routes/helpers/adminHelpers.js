function getIconCategories() {
    const validIconCategories = [{ id: "equip", name: "Equips" }, { id: "use", name: "Use" }, { id: "setup", name: "Setup" }, 
    { id: "etc", name: "ETC" }, { id: "cash", name: "Cash Item" }, { id: "map", name: "Maps" }, { id: "boss", name: "Boss Monsters" }, 
    { id: "boss-soul", name: "Boss Souls" }]

    return validIconCategories;
}

function getPageSections() {
    const pageSections = [{ id: "homepage", name: "Homepage" }, { id: "spell-trace", name: "Spell Trace" }, { id: "flames", name: "Flames" }, 
    { id: "potentials", name: "Potentials" }, { id: "todd", name: "Todd's Hammer" }, { id: "star-force", name: "Star Force" }, 
    { id: "soul-weapons", name: "Soul Weapons" }, { id: "exp-stacking", name: "EXP Stacking" }, { id: "boss-crystal", name: "Boss Crystals" },
    { id: "event-items", name: "Event Items" }];

    pageSections.sort(function(a, b) {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();

        if(nameA < nameB) { return -1; }
        if(nameB < nameA) { return 1; }
        return 0;
    });

    return pageSections;
}

function compileIconData(body) {
    const iconData = {
        id: body.itemID,
        itemType: body.itemType,
        name: body.itemName,
        imgUrl: body.imgPath,
    }

    if(body.itemType === "equip") {
        iconData.category = body.equipType;
    }

    if(typeof body.sections === "string") {
        iconData.usedInSections = [body.sections];
    } else {
        iconData.usedInSections = body.sections;
    }
    iconData.imgUrl = body.imgPath.join("/");

    return iconData;
}

function getDamageSkinCategories() {
    const damageSkinCategories = [{id: "new", name: "Newly Added skins"}, { id: "kms", name: "KMS skins" }, { id: "non-kms", name: "Non-KMS skins" }];
    return damageSkinCategories;
}

function compileDamageSkinData(body) {
    const damageSkinData = {
        isNewSkin: body.isNewSkin === "yes",
        isKMSskin: body.isKMSskin === "yes",
        hasRegularSkin: body.hasRegularSkin === "yes",
        name: body.name,
        shortName: body.name.replace(/(Damage Skin \- | Damage Skin)/, ""),

        damageSkinId: parseInt(body.damageSkinId),
        itemId: body.itemId,

        hasEffect: body.hasEffect === "yes",
        hasCounter: body.hasCounter === "yes",
        hasShot: body.hasShot === "yes",
        hasCri1Nums: body.hasCri1Nums === "yes",
        hasRed1Nums: body.hasRed1Nums === "yes",
    }

    if(body.altNames !== "") {
        damageSkinData.altNames = body.altNames.split(" / ");
    }

    if(body.notes) {
        damageSkinData.notes = body.notes;
    }

    if(body.isCustomSkin === "yes") {
        damageSkinData.isCustomSkin = true;
        damageSkinData.numAssetsToLoad = parseInt(body.numAssetsToLoad);
    }

    if(body.hasUnitSkin === "yes") {
        damageSkinData.hasUnitSkin = true;
        damageSkinData.unitDamageSkinId = parseInt(body.unitDamageSkinId);
        damageSkinData.unitItemId = body.unitItemId;
    }

    if(body.diffCri0Nums.filter(elem => elem === "").length < 10) {
        damageSkinData.diffCri0Nums = body.diffCri0Nums;
    }

    if(body.diffCri1Nums.filter(elem => elem === "").length < 10) {
        damageSkinData.diffCri1Nums = body.diffCri1Nums;
    }

    if(body.diffRed0Nums.filter(elem => elem === "").length < 10) {
        damageSkinData.diffRed0Nums = body.diffRed0Nums;
    }

    if(body.diffRed1Nums.filter(elem => elem === "").length < 10) {
        damageSkinData.diffRed1Nums = body.diffRed1Nums;
    }

    const startingLetter = damageSkinData.shortName.charAt(0);
    
    if(startingLetter === "?") {
        damageSkinData.letterCategory = " ??? (Unknown)"; // Starting space is intentional to be sorted first
    } else {
        if(parseInt(startingLetter)) {
            // If starting letter is a number
            damageSkinData.letterCategory = "0-9"
        } else {
            // If starting letter is a letter
            if(startingLetter === "[") {
                damageSkinData.letterCategory = shortName.charAt(1);
            } else {
                damageSkinData.letterCategory = startingLetter;
            }
        }
    }

    return damageSkinData;
}

function retrieveShopNum(coinEvent, shopId) {
    return coinEvent.shops.findIndex(shop => shop._id.toString() === shopId);
}

module.exports = { getIconCategories, getPageSections, compileIconData, getDamageSkinCategories, compileDamageSkinData, retrieveShopNum };