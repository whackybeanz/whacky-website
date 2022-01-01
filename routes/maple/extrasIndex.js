var IconHelper = require("../helpers/iconHelpers");
var Helper = require("../helpers/extrasHelpers");
var EXPStackingHelper = require("../helpers/expStackingHelpers");
var middleware  = require("../middleware");

var express = require("express");
var router  = express.Router();
var Icon    = require("../../models/iconData");
var Equip   = require("../../models/equipData");
var Effect  = require("../../models/setEffectData");
var Soul    = require("../../models/bossSoulData");
var DamageSkin  = require("../../models/damageSkinData");
var MapLocations = require("../../models/mapData");
var Monster = require("../../models/monsterData");
var Potentials = require("../../models/potentialsData");
var LatestUpdate = require("../../models/latestUpdateData");

router.get("/", function(req, res) {
    res.redirect("/flames");
})

router.get("/flames", function(req, res) {
    Icon.find({usedInSections: "flames"}, function(err, allIcons) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            const compiledIcons = IconHelper.compileIcons(allIcons);
            res.locals.extraStylesheet = "extras/extrasStyles";
            res.locals.section = "extras";
            res.locals.branch = "calc-flames";
            res.locals.title = "Flame Stats Calculator";
            res.render("extras/flameCalc", {icons: compiledIcons});
        }
    })
})

router.get("/soul-tier-list", function(req, res) {
    let getIcons = Icon.find({itemType: "boss-soul"});
    let getSouls = Soul.find();

    Promise.all([getIcons, getSouls])
        .then(([allIcons, allSouls]) => {
            const compiledIcons = IconHelper.compileIcons(allIcons);
            const soulsByTier = Helper.compileSoulsByTier(allSouls);
            res.locals.extraStylesheet = "extras/soulListStyles";
            res.locals.section = "extras";
            res.locals.branch = "soul-tier-list";
            res.locals.title = "Soul Tier List";
            res.render("extras/soulTierList", {soulList: soulsByTier, icons: compiledIcons});
        })
        .catch(err => {
            console.log(err);
            res.redirect("back");
        })
})

router.get("/set-effects", function(req, res) {
    res.locals.extraStylesheet = "extras/setItemStyles";
    res.locals.section = "extras";
    res.locals.branch = "calc-set-effects";
    res.locals.title = "Set Effects Calculator";
    res.render("extras/setEffectCalc");
})

router.get("/set-effects/:jobType", function(req, res) {
    const jobType = req.params.jobType.toLowerCase();
    let getIcons = Icon.find({itemType: "equip"});
    let getEquips = Equip.find().or([{ jobType: jobType }, { jobType: "common" }]);
    let getSetEffects = Effect.find().or([{ jobType: jobType }, { jobType: "common" }]);

    Promise.all([getIcons, getEquips, getSetEffects])
        .then(([allIcons, equips, setEffects]) => {
            const compiledIcons = IconHelper.compileIconsByClass(allIcons, equips);
            const setItemsByItemPart = Helper.compileSetItemsByItemPart(equips);
            const setItemsBySetName = Helper.compileSetItemsBySetName(equips);

            const allEquipTypes = ["ring", "pocket", "pendant", "weapon", "belt",
                                    "hat", "face", "eye", "top", "bottom", "shoes",
                                    "earring", "shoulder", "gloves", "android",
                                    "emblem", "badge", "medal", "secondary", "cape", "heart"];

            const possibleStatTypes = [{ key: "str", name: "STR" }, { key: "dex", name: "DEX" }, { key: "int", name: "INT" }, { key: "luk", name: "LUK" }, { key: "allStats", name: "All Stats" }, 
                            { key: "maxHp", name: "Max HP"}, { key: "maxHpMp", name: "Max HP/MP" }, { key: "maxHpMpPercent", name: "Max HP/MP %", symbol: "%" }, 
                            { key: "def", name: "DEF" }, { key: "acc", name: "Accuracy" }, { key: "avoid", name: "Avoidability" }, 
                            { key: "wa", name: "ATT" }, { key: "ma", name: "MATT" }, { key: "wama", name: "ATT/MATT" }, 
                            { key: "damagePercent", name: "Damage %", symbol: "%" }, { key: "bossPercent", name: "Boss Damage %", symbol: "%" }, { key: "iedPercent", name: "Ignore Enemy DEF %", symbol: "%" }, 
                            { key: "critDmgPercent", name: "Critical Damage %", symbol: "%" }, { key: "speed", name: "Speed" }, { key: "jump", name: "Jump" }];

            res.locals.extraStylesheet = "extras/setItemStyles";
            res.locals.section = "extras";
            res.locals.branch = `calc-set-effects`;
            res.locals.title = `Set Effects Calculator (${jobType.charAt(0).toUpperCase() + jobType.slice(1)})`;
            res.render("extras/setEffectCalcActive", {allEquipTypes: allEquipTypes, setItemsByItemPart: setItemsByItemPart, setItemsBySetName: setItemsBySetName, allSetEffects: setEffects, jobType: jobType, statTypes: possibleStatTypes, icons: compiledIcons });
        })
        .catch(err => {
            console.log(err);
            res.redirect("back");
        });
})

router.get("/boss-crystal", function(req, res) {
    let bossList = [
        { id: "akechi", easy: 0, normal: 28800000, hard: 0, chaos: 0 },
        { id: "arkarium", easy: 1152000, normal: 2520000, hard: 0, chaos: 0 },
        { id: "bm", easy: 0, normal: 0, hard: 500000000, chaos: 0 },
        { id: "crimson-queen", easy: 0, normal: 968000, hard: 0, chaos: 16200000 },
        { id: "cygnus", easy: 9112500, normal: 14450000, hard: 0, chaos: 0 },
        { id: "damien", easy: 0, normal: 33800000, hard: 70312500, chaos: 0 },
        { id: "djunkel", easy: 0, normal: 52812500, hard: 0, chaos: 96800000 },
        { id: "dusk", easy: 0, normal: 49612500, hard: 0, chaos: 92450000 },
        { id: "ga-slime", easy: 0, normal: 34322000, hard: 0, chaos: 90312500 },
        { id: "heretic-hilla", easy: 0, normal: 139668296, hard: 110450000, chaos: 0 },
        { id: "hilla", easy: 0, normal: 800000, hard: 11250000, chaos: 0 },
        { id: "horntail", easy: 882000, normal: 1012500, hard: 0, chaos: 1352000 },
        { id: "julieta", easy: 0, normal: 1200000, hard: 0, chaos: 0 },
        { id: "kawoong", easy: 0, normal: 1250000, hard: 0, chaos: 0 },
        { id: "lotus", easy: 0, normal: 32512500, hard: 74112500, chaos: 0 },
        { id: "lucid", easy: 35112500, normal: 40612500, hard: 80000000, chaos: 0 },
        { id: "magnus", easy: 722000, normal: 2592000, hard: 19012500, chaos: 0 },
        { id: "papulatus", easy: 684500, normal: 2664500, hard: 0, chaos: 26450000 },
        { id: "pierre", easy: 0, normal: 968000, hard: 0, chaos: 16200000 },
        { id: "pink-bean", easy: 0, normal: 1404500, hard: 0, chaos: 12800000 },
        { id: "pnou", easy: 0, normal: 15312500, hard: 0, chaos: 0 },
        { id: "ranmaru", easy: 0, normal: 648000, hard: 2664500, chaos: 0 },
        { id: "seren", easy: 0, normal: 181116193, hard: 151250000, chaos: 0 },
        { id: "vellum", easy: 0, normal: 968000, hard: 0, chaos: 21012500 },
        { id: "von-bon", easy: 0, normal: 968000, hard: 0, chaos: 16200000 },
        { id: "von-leon", easy: 1058000, normal: 1458000, hard: 2450000, chaos: 0 },
        { id: "will", easy: 51138596, normal: 46512500, hard: 88200000, chaos: 0 },
        { id: "zakum", easy: 200000, normal: 612500, hard: 0, chaos: 16200000 },
    ];

    Icon.find({usedInSections: "boss-crystal"}, function(err, allIcons) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            const compiledIcons = IconHelper.compileIcons(allIcons);
            res.locals.extraStylesheet = "extras/extrasStyles";
            res.locals.section = "extras";
            res.locals.branch = "boss-crystal";
            const pricePerCrystalList = Helper.sortByPrice(bossList);
            res.locals.title = "Boss Crystal Prices";
            res.render("extras/bossCrystal", {bossList: bossList, crystalList: pricePerCrystalList, icons: compiledIcons});
        }
    })
})

router.get("/todd-sequence", function(req, res) {
    Icon.find({usedInSections: "todd-sequence"}, function(err, allIcons) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            const compiledIcons = IconHelper.compileIcons(allIcons);
            res.locals.extraStylesheet = "extras/extrasStyles";
            res.locals.section = "extras";
            res.locals.branch = "todd-sequence";
            res.locals.title = "Todding Sequence";
            res.render("extras/toddSequence", {icons: compiledIcons});
        }
    })
})

router.get("/damage-skins", function(req, res) {
    res.redirect("./damage-skins/new");
})

router.get("/damage-skins/:page", function(req, res) {
    const page = req.params.page;
    const pageNum = parseInt(page);
    const pagesArr = ["???, 0-9, AB", "C", "DEF", "GHI", "JKL", "MNO", "PQR", "S", "TUVWXYZ"];
    let query = [];
    let isValidSearch = false;

    if(page === "new") {
        query.push({ isNewSkin: true });
        isValidSearch = true;
    }

    if(page === "unit") {
        query.push({ hasUnitSkin: true });
        isValidSearch = true;
    }

    if(page === "box") {
        query.push({ isInCurrentBox: true });
        isValidSearch = true;
    }

    if(page === "job") {
        query.push({ isJobSkin: true });
        isValidSearch = true;
    }

    if(!isNaN(pageNum) && pageNum >= 0 && pageNum-1 < pagesArr.length) {
        if(pageNum === 0) {
            query.push({ "letterCategory": " ??? (Unknown)"}, { "letterCategory": "0-9" }, { "letterCategory": "A" }, { "letterCategory": "B" });
        } else {
            const skinsToFind = pagesArr[pageNum];
            for(letter of skinsToFind) {
                query.push({ "letterCategory": letter });
            }
        }
        isValidSearch = true;
    }

    if(isValidSearch) {
        getMatchingDamageSkins(query, page, pagesArr, res);
    } else {
        console.log("Invalid page number");
        res.redirect("back");
    }
})

function getMatchingDamageSkins(query, page, pagesArr, res) {
    let getLatestUpdate = LatestUpdate.findOne({});
    let getDamageSkins = DamageSkin.find({$or: query}).sort({ letterCategory: 1, shortName: 1 });

    Promise.all([getLatestUpdate, getDamageSkins])
        .then(([latestUpdate, allSkins]) => {
            let sortedSkins = {};

            if(page === "new" || page === "unit" || page === "box" || page === "job") {
                sortedSkins.newSkins = [];
                allSkins.forEach(skin => sortedSkins.newSkins.push(skin))
            } else {
                const allCategories = [...new Set(allSkins.map(skin => skin.letterCategory))];
                allCategories.forEach(category => sortedSkins[category] = []);
                allSkins.forEach(skin => sortedSkins[skin.letterCategory].push(skin));
            }

            res.locals.extraStylesheet = "extras/extrasStyles";
            res.locals.section = "extras";
            res.locals.branch = "damage-skins";
            res.locals.title = "Damage Skins";
            res.render("extras/damage-skins/damageSkins", {sortedSkins: sortedSkins, page: page, pagesArr: pagesArr, dateUpdated: latestUpdate.lastUpdatedDate.damageSkins});
        })
        .catch(err => {
            console.log(err);
            res.redirect("back");
        })
}

router.get("/damage-skin-details", function(req, res) {
    res.redirect("back");
})

router.post("/damage-skin-details", function(req, res) {
    const prevUrl = req.header("Referer") || "./maple/extras/damage-skins";
    const selectedSkinNums = JSON.parse(req.body.selectedSkinNums);
    const MAX_NUM_SKINS = 20;
    let query = [];
    let totalLoadedSkins = 0;

    if(Array.isArray(selectedSkinNums)) {
        selectedSkinNums.forEach(function(skinNum) {
            if(parseInt(skinNum) && totalLoadedSkins < MAX_NUM_SKINS) {
                query.push({ "folderNum": parseInt(skinNum) });
                totalLoadedSkins++;
            }
        })

        let getDamageSkins = DamageSkin.find({$or: query}).sort({ letterCategory: 1, shortName: 1 });

        getDamageSkins.then(allSkins => {
            res.locals.extraStylesheet = "extras/extrasStyles";
            res.locals.section = "extras";
            res.locals.branch = "damage-skins";
            res.locals.title = "Damage Skins Details (Bulk)";
            res.render("extras/damage-skins/damageSkinDetails", {allSkins: allSkins, prevUrl: prevUrl});
        })
        .catch(err => {
            console.log(err);
            res.redirect("back");
        })
    } else {
        console.log("Invalid format received");
        res.redirect("back");
    }
})

router.get("/damage-skin-details/:skinNum", function(req, res) {
    const skinNum = req.params.skinNum;
    const prevUrl = req.header("Referer") || "./maple/extras/damage-skins";

    DamageSkin.find({folderNum: skinNum}, function(err, allSkins) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            res.locals.extraStylesheet = "extras/extrasStyles";
            res.locals.section = "extras";
            res.locals.branch = "damage-skins";
            res.locals.title = "Damage Skin Details (Single)";
            res.render("extras/damage-skins/damageSkinDetails", {allSkins: allSkins, prevUrl: prevUrl});
        }
    })
})

router.get("/everything-exp", function(req, res) {
    res.locals.extraStylesheet = "extras/extrasStyles";
    res.locals.section = "extras";
    res.locals.branch = "calc-exp-stacking";
    res.locals.title = "Everything EXP";

    let getIcons = Icon.find({ usedInSections: "exp-stacking" });

    Promise.all([getIcons])
        .then(([foundIcons]) => {
            const compiledIcons = IconHelper.compileIcons(foundIcons);
            const expContents = EXPStackingHelper.getEXPContentsValues();

            res.render("extras/everything-exp/everything-exp-landing", { icons: compiledIcons, expContents: expContents });
        })
        .catch(err => {
            console.log(err);
            res.redirect("back");
        })
})

router.get("/everything-exp/monster-list/:charLevel", function(req, res) {
    let CURR_MAX_MONSTER_LEVEL = 275;
    let charLevel = parseInt(req.params.charLevel);
    let response = {};

    if(!isNaN(charLevel)) {
        if(charLevel >= 1 && charLevel < 300) {
            let minMonsterLevel, maxMonsterLevel;

            // Determine monster level range to query for
            // If charLevel is above (presently) 265, check if charLevel is above 275. If above, then limit range to 265~275.
            // Otherwise, set minMonsterLevel to -10 of charLevel, but fix max at 275.
            if(charLevel > CURR_MAX_MONSTER_LEVEL - 10) {
                minMonsterLevel = charLevel > CURR_MAX_MONSTER_LEVEL ? CURR_MAX_MONSTER_LEVEL - 10 : charLevel - 10;
                maxMonsterLevel = CURR_MAX_MONSTER_LEVEL;
            } else {
                minMonsterLevel = charLevel >= 71 ? charLevel - 10 : 71;
                maxMonsterLevel = charLevel + 10;
            }

            // Retrieve only monsters that are within the min/max levels, and match the required minimum encounter level (or are freely found)
            let getIcons = Icon.find({ usedInSections: "exp-stacking" });
            let getMonsters = Monster.find({ 
                $and: [
                    { monsterLevel: { $lte: maxMonsterLevel, $gte: minMonsterLevel } }, 
                    { $or: [{ minEncounterLevel : { $exists: false } }, { minEncounterLevel: { $lte: charLevel } }] }
                ]
            }).sort({ monsterLevel: 1, monsterEXP: 1 });

            Promise.all([getIcons, getMonsters])
                .then(([icons, monsterList]) => {
                    response.monsterListByMap = EXPStackingHelper.groupMonstersByMap(icons, monsterList);
                    res.send(response);
                })
                .catch(err => {
                    response.err = `Error encountered: ${err}`;
                    res.send(response);
                })
        } else {
            response.err = "Character level out of range";
            res.send(response);
        }
    } else {
        response.err = "Invalid character level"
        res.send(response);
    }
})

router.get("/potential-list", function(req, res) {
    let selectedPartType = req.query.itemType;

    if(selectedPartType) {
        const validItemParts = {
            hat: "Hat", top: "Top / Overall", bottom: "Bottom",
            weapon: "Weapon", secondary: "Secondary Weapon", emblem: "Emblem",
            gloves: "Gloves", shoes: "Shoes", cape: "Cape",
            ring: "Ring", pendant: "Pendant", belt: "Belt",
            eye: "Eye Accessory", face: "Face Accessory", earrings: "Earrings",
            shoulder: "Shoulder Decoration", heart: "Mechanical Heart"
        }

        const cubeRates = Helper.getCubeRates();

        let generalData = {
            selectedPartType: selectedPartType,
            selectedPartName: validItemParts[selectedPartType],
            cubeRates: cubeRates,
            ranks: [{ prime: "legendary", secondary: "unique" },
                    { prime: "unique", secondary: "epic" },
                    { prime: "epic", secondary: "rare" },
                    { prime: "rare", secondary: "normal" }]
        }

        let getIcons = Icon.find({ usedInSections: "potential-list" });
        let getPotentialList = Potentials.find({ itemType: { $in: [selectedPartType] } }).sort({ potRankNum: -1 })

        Promise.all([getPotentialList, getIcons])
            .then(([allPotentials, foundIcons]) => {
                const compiledIcons = IconHelper.compileIcons(foundIcons);
                const potentialsByRank = Helper.groupByRank(allPotentials);
                res.locals.extraStylesheet = "extras/potentialListStyles";
                res.locals.section = "extras";
                res.locals.branch = "potential-list";
                res.locals.title = `List of Potentials (${validItemParts[selectedPartType]})`;

                res.render("extras/potentialList", { icons: compiledIcons, potentialsByRank: potentialsByRank, generalData: generalData });
            })
            .catch(err => {
                console.log(err);
                res.redirect("back");
            })
    } else {
        res.locals.extraStylesheet = "extras/potentialListStyles";
        res.locals.section = "extras";
        res.locals.branch = "potential-list";
        res.locals.title = "List of Potentials";
        res.render("extras/potentialList");
    }
})

module.exports = router;