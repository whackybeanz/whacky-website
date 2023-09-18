var CommonHelper = require("../helpers/commonHelpers");
var IconHelper = require("../helpers/iconHelpers");
var Helper = require("../helpers/extrasHelpers");
var middleware  = require("../middleware");

var express = require("express");
var router  = express.Router();

var Icon    = require("../../models/iconData");
var Soul    = require("../../models/bossSoulData");
var DamageSkin  = require("../../models/damageSkinData");
var MapLocations = require("../../models/mapData");
var Potentials = require("../../models/potentialsData");
var LatestUpdate = require("../../models/latestUpdateData");
var MonsterLife = require("../../models/monsterLifeData");

router.get("/", function(req, res) {
    res.redirect("/flames");
})

router.get("/flames", function(req, res) {
    Icon.find({usedInSections: "flames"})
        .then(allIcons => {
            const compiledIcons = IconHelper.compileIcons(allIcons);
            res.locals.extraStylesheet = "extras/extrasStyles";
            res.locals.section = "info";
            res.locals.branch = "calc-flames";
            res.locals.title = "Flame Stats Calculator";
            res.render("extras/flameCalc", {icons: compiledIcons});
        })
        .catch(err => {
            console.log(err);
            res.redirect("back");
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
            res.locals.section = "info";
            res.locals.branch = "soul-tier-list";
            res.locals.title = "Soul Tier List";
            res.render("extras/soulTierList", {soulList: soulsByTier, icons: compiledIcons});
        })
        .catch(err => {
            console.log(err);
            res.redirect("back");
        })
})

router.get("/boss-crystal", function(req, res) {
    let bossList = [
        { id: "akechi", easy: 0, normal: 28800000, hard: 0, chaos: 0, extreme: 0 },
        { id: "arkarium", easy: 1152000, normal: 2520000, hard: 0, chaos: 0, extreme: 0 },
        { id: "bm", easy: 0, normal: 0, hard: 500000000, chaos: 0, extreme: 5675239428 },
        { id: "crimson-queen", easy: 0, normal: 968000, hard: 0, chaos: 16200000, extreme: 0 },
        { id: "cygnus", easy: 9112500, normal: 14450000, hard: 0, chaos: 0, extreme: 0 },
        { id: "damien", easy: 0, normal: 33800000, hard: 70312500, chaos: 0, extreme: 0 },
        { id: "djunkel", easy: 0, normal: 52812500, hard: 0, chaos: 96800000, extreme: 0 },
        { id: "dusk", easy: 0, normal: 49612500, hard: 0, chaos: 92450000, extreme: 0 },
        { id: "ga-slime", easy: 0, normal: 34322000, hard: 0, chaos: 90312500, extreme: 0 },
        { id: "heretic-hilla", easy: 0, normal: 139668296, hard: 110450000, chaos: 0, extreme: 0 },
        { id: "hilla", easy: 0, normal: 800000, hard: 11250000, chaos: 0, extreme: 0 },
        { id: "horntail", easy: 882000, normal: 1012500, hard: 0, chaos: 1352000, extreme: 0 },
        { id: "julieta", easy: 0, normal: 1200000, hard: 0, chaos: 0, extreme: 0 },
        { id: "kaling", easy: 0, normal: 350000000, hard: 700000000, chaos: 0, extreme: 1400000000 },
        { id: "kalos", easy: 0, normal: 300000000, hard: 0, chaos: 600000000, extreme: 1200000000 },
        { id: "kawoong", easy: 0, normal: 1250000, hard: 0, chaos: 0, extreme: 0 },
        { id: "lotus", easy: 0, normal: 32512500, hard: 74112500, chaos: 0, extreme: 0 },
        { id: "lucid", easy: 35112500, normal: 40612500, hard: 80000000, chaos: 0, extreme: 0 },
        { id: "magnus", easy: 722000, normal: 2592000, hard: 19012500, chaos: 0, extreme: 0 },
        { id: "papulatus", easy: 684500, normal: 2664500, hard: 0, chaos: 26450000, extreme: 0 },
        { id: "pierre", easy: 0, normal: 968000, hard: 0, chaos: 16200000, extreme: 0 },
        { id: "pink-bean", easy: 0, normal: 1404500, hard: 0, chaos: 12800000, extreme: 0 },
        { id: "pnou", easy: 0, normal: 15312500, hard: 0, chaos: 0, extreme: 0 },
        { id: "ranmaru", easy: 0, normal: 648000, hard: 2664500, chaos: 0, extreme: 0 },
        { id: "seren", easy: 0, normal: 181116193, hard: 151250000, chaos: 0, extreme: 1071302484 },
        { id: "vellum", easy: 0, normal: 968000, hard: 0, chaos: 21012500, extreme: 0 },
        { id: "von-bon", easy: 0, normal: 968000, hard: 0, chaos: 16200000, extreme: 0 },
        { id: "von-leon", easy: 1058000, normal: 1458000, hard: 2450000, chaos: 0, extreme: 0 },
        { id: "will", easy: 51138596, normal: 46512500, hard: 88200000, chaos: 0, extreme: 0 },
        { id: "zakum", easy: 200000, normal: 612500, hard: 0, chaos: 16200000, extreme: 0 },
    ];

    Icon.find({usedInSections: "boss-crystal"})
        .then(allIcons => {
            const compiledIcons = IconHelper.compileIcons(allIcons);
            res.locals.extraStylesheet = "extras/extrasStyles";
            res.locals.section = "info";
            res.locals.branch = "boss-crystal";
            const pricePerCrystalList = Helper.sortByPrice(bossList);
            res.locals.title = "Boss Crystal Prices";
            res.render("extras/bossCrystal", {bossList: bossList, crystalList: pricePerCrystalList, icons: compiledIcons});
        })
        .catch(err => {
            console.log(err);
            res.redirect("back");
        })
})

router.get("/todd-sequence", function(req, res) {
    Icon.find({usedInSections: "todd-sequence"})
        .then(allIcons => {
            const compiledIcons = IconHelper.compileIcons(allIcons);
            res.locals.extraStylesheet = "extras/extrasStyles";
            res.locals.section = "info";
            res.locals.branch = "todd-sequence";
            res.locals.title = "Todding Sequence";
            res.render("extras/toddSequence", {icons: compiledIcons});
        })
        .catch(err => {
            console.log(err);
            res.redirect("back");
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
            res.locals.section = "info";
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
    const prevUrl = req.header("Referer") || "/info/damage-skins";
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
            res.locals.section = "info";
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

    DamageSkin.find({folderNum: skinNum})
        .then(allSkins => {
            res.locals.extraStylesheet = "extras/extrasStyles";
            res.locals.section = "info";
            res.locals.branch = "damage-skins";
            res.locals.title = "Damage Skin Details (Single)";
            res.render("extras/damage-skins/damageSkinDetails", {allSkins: allSkins, prevUrl: prevUrl});
        })
        .catch(err => {
            console.log(err);
            res.redirect("back");
        })
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
                res.locals.section = "info";
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
        res.locals.section = "info";
        res.locals.branch = "potential-list";
        res.locals.title = "List of Potentials";

        let generalData = {
            cubeRates: Helper.getCubeRates(),
        };

        res.render("extras/potentialList", { generalData: generalData });
    }
})

router.get("/monster-life", function(req, res) {
    const getIcons = Icon.find({ usedInSections: "monster-life" }); 
    const getMonsterLifeList = MonsterLife.find({ }, { _id: 0, farms: 0 })

    Promise.all([getIcons, getMonsterLifeList])
        .then(([foundIcons, monsterLifeList]) => {
            const compiledIcons = IconHelper.compileIcons(foundIcons);
            const searchableList = CommonHelper.sortListByStringValue(monsterLifeList.filter(monster => monster.isSearchable === true), "name");
            const sortedListByEffect = Helper.sortMonsterLifeList(monsterLifeList.slice());
            const sortedListByName = CommonHelper.sortListByStringValue(monsterLifeList.slice(), "name");
            const usefulFarmList = Helper.getUsefulFarmsList();
            
            res.locals.extraStylesheet = "extras/extrasStyles";
            res.locals.section = "info";
            res.locals.branch = "monster-life";
            res.locals.title = "Monster Life";

            res.render("info/monster-life/mlife-landing", { icons: compiledIcons, allMonsters: monsterLifeList, searchableList: searchableList, usefulFarms: usefulFarmList, 
                                                            sortedListByEffect: sortedListByEffect, sortedListByName: sortedListByName });
        })
        .catch(err => {
            console.log(err);
            res.redirect("/");
        })})

router.get("/monster-life/search/:monster", function(req, res) {
    const monsterId = req.params.monster;

    MonsterLife.findOne({ id: monsterId })
        .then(monsterData => {
            res.send({
                isErr: false,
                farms: monsterData.farms,
                farmCount: monsterData.farms.length,
            })
        })
        .catch(err => {
            res.send({ 
                isErr: true,
                error: err,
            })
        })
})

module.exports = router;