function getIconCategories() {
    const validIconCategories = [{ id: "equip", name: "Equips" }, { id: "use", name: "Use" }, { id: "setup", name: "Setup" }, 
    { id: "etc", name: "ETC" }, { id: "cash", name: "Cash Item" }, { id: "map", name: "Maps" }, { id: "boss", name: "Boss Monsters" }, 
    { id: "boss-soul", name: "Boss Souls" }, { id: "event-currency", name: "Event Currency" }];

    return validIconCategories;
}

function getPageSections() {
    const pageSections = [{ id: "homepage", name: "Homepage" }, { id: "spell-trace", name: "Spell Trace" }, { id: "flames", name: "Flames" }, 
    { id: "potentials", name: "Potentials" }, { id: "todd", name: "Todd's Hammer" }, { id: "todd-sequence", name: "Todd Sequence" }, { id: "star-force", name: "Star Force" }, 
    { id: "soul-weapons", name: "Soul Weapons" }, { id: "exp-stacking", name: "EXP Stacking" }, { id: "boss-crystal", name: "Boss Crystals" }, { id: "symbol-calc", name: "Symbols"}];

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
        isCommonCoinShopItem: body.isCommonCoinShopItem === "yes",
        imgUrl: body.imgPath,
    }

    if(body.itemType === "equip") {
        iconData.category = body.equipType;
    }

    if(body.sections) {
        if(typeof body.sections === "string") {
            iconData.usedInSections = [body.sections];
        } else {
            iconData.usedInSections = body.sections;
        }    
    } else {
        iconData.usedInSections = [];
    }
    
    iconData.imgUrl = body.imgPath.filter(path => path !== "").join("/");

    return iconData;
}

function getDamageSkinCategories() {
    const damageSkinCategories = [{id: "new", name: "Newly Added skins"}, { id: "kms", name: "KMS skins" }, { id: "non-kms", name: "Non-KMS skins" }];
    return damageSkinCategories;
}

function getDamageSkinProperties() {
    const unitTypes = [{ id: "kr", name: "Korean (억/만)" }, { id: "en", name: "English (B/M/K)" }];
    const combatMessages = [{ id: "Miss", name: "Miss" }, { id: "guard", name: "Guard" }, { id: "resist", name: "Resist" }, { id: "counter", name: "Counter" }, { id: "shot", name: "Shot" }];

    return { unitTypes: unitTypes, combatMessages: combatMessages };
}

function compileDamageSkinData(body) {
    let damageSkinData = {
        isNewSkin: body.isNewSkin === "yes",
        isKMSskin: body.isKMSskin === "yes",
        hasRegularSkin: body.hasRegularSkin === "yes",
        name: body.name,
        shortName: body.name.replace(/(Damage Skin \- | Damage Skin)/, ""),

        isAnimated: body.isAnimated === "yes",
        isInCurrentBox: body.isInCurrentBox === "yes",
        isJobSkin: body.isJobSkin === "yes",

        folderNum: parseInt(body.folderNum),
        regularItemId: body.regularItemId,
        screenshotTypes: body.screenshotTypes,
        screenshotCredits: body.screenshotCredits,
        
        digits: {
            combatMessages: body.combatMessages
        },
    }
    damageSkinData.letterCategory = getLetterCategory(damageSkinData.shortName);

    if(body.altNames !== "") { damageSkinData.altNames = body.altNames.split(" / "); }
    if(body.notes) { damageSkinData.notes = body.notes; }

    // Custom skin details
    if(body.isCustomSkin === "yes") {
        damageSkinData.isCustomSkin = true;
        damageSkinData.digits.customNumAssetsToLoad = parseInt(body.numAssetsToLoad);
    }

    // Unit skin details
    if(body.hasUnitSkin === "yes") {
        damageSkinData.hasUnitSkin = true;
        damageSkinData.unitFolderNum = parseInt(body.unitFolderNum);
        damageSkinData.unitItemId = body.unitItemId;
        damageSkinData.digits.unitTypes = body.unitTypes;
    }

    // Damage skin digit assets
    if(body.hasEffect) { damageSkinData.hasEffect = body.hasEffect; }

    if(body.cri1Assets && body.cri1Assets.some(elem => elem !== "")) { 
        if(!damageSkinData.digits.critical) { damageSkinData.digits.critical = {}; }
        damageSkinData.digits.critical.cri1Assets = body.cri1Assets; 
    }

    if(body.isLoadCri0) { damageSkinData.digits.critical.isLoadCri0 = body.isLoadCri0 === "yes"; }

    if(body.cri0Assets && body.cri0Assets.some(elem => elem !== "")) { 
        if(!damageSkinData.digits.critical) { damageSkinData.digits.critical = {}; }
        damageSkinData.digits.critical.cri0Assets = body.cri0Assets; 
    }

    if(body.red1Assets && body.red1Assets.some(elem => elem !== "")) { 
        if(!damageSkinData.digits.regular) { damageSkinData.digits.regular = {}; }
        damageSkinData.digits.regular.red1Assets = body.red1Assets; 
    }

    if(body.isLoadRed0) { damageSkinData.digits.regular.isLoadRed0 = body.isLoadRed0 === "yes"; }

    if(body.red0Assets && body.red0Assets.some(elem => elem !== "")) { 
        if(!damageSkinData.digits.regular) { damageSkinData.digits.regular = {}; }
        damageSkinData.digits.regular.red0Assets = body.red0Assets; 
    }

    return damageSkinData;
}

function getLetterCategory(shortName) {
    const startingLetter = shortName.charAt(0);
    
    if(startingLetter === "?") {
        return " ??? (Unknown)"; // Starting space is intentional to be sorted first
    } else {
        if(parseInt(startingLetter)) {
            // If starting letter is a number
            return "0-9";
        } else {
            // If starting letter is a letter
            if(startingLetter === "[") {
                return shortName.charAt(1);
            } else {
                return startingLetter;
            }
        }
    }
}

function retrieveShopNum(coinEvent, shopId) {
    return coinEvent.shops.findIndex(shop => shop._id.toString() === shopId);
}

module.exports = { getIconCategories, getPageSections, compileIconData, getDamageSkinCategories, getDamageSkinProperties, compileDamageSkinData, retrieveShopNum };