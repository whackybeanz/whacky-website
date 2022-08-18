var express = require("express");
var router  = express.Router();

var Helper = require("../helpers/extrasHelpers");
var IconHelper = require("../helpers/iconHelpers");
var EXPStackingHelper = require("../helpers/expStackingHelpers");

var Equip   = require("../../models/equipData");
var Effect  = require("../../models/setEffectData");
var Icon    = require("../../models/iconData");
var Monster = require("../../models/monsterData");

router.get("/", function(req, res) {
    res.redirect("/flames");
})

router.get("/everything-exp", function(req, res) {
    res.locals.extraStylesheet = "extras/extrasStyles";
    res.locals.section = "calc";
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
    let CURR_MAX_MONSTER_LEVEL = 280;
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

router.get("/symbols", function(req, res) {
    res.locals.extraStylesheet = "extras/extrasStyles";
    res.locals.section = "calc";
    res.locals.branch = "calc-symbol-calc";
    res.locals.title = "Everything Symbols";

    Icon.find({ usedInSections: "symbol-calc" })
        .then(foundIcons => {
            const symbolData = {
                arc: {
                    name: "Arcane Force",
                    maxLevel: 20,
                    list: [{ id: 'rte', name: "Road to Extinction", baseSymbolGain: 22, notes: "16 (Daily quest; Reverse City questline complete) + 6 (Erda Spectrum)" }, 
                           { id: 'cci', name: "Chew Chew Island", baseSymbolGain: 23, notes: "8 (Daily quest; Yum Yum Island questline complete) + 15 (Chew Chew PQ hard mode)" }, 
                           { id: 'lacheln', name: "Lacheln", baseSymbolGain: 19, notes: "8 (Daily quest) + 10 (Dreambreaker 100F) + 1 (NPC statues)" }, 
                           { id: 'arcana', name: "Arcana", baseSymbolGain: 18, notes: "8 (Daily quest) + 10 (Spirit Savior, 10,000 points per run)" },
                           { id: 'moras', name: "Moras", baseSymbolGain: 14, notes: "8 (Daily quest) + 6 (Enheim Defense)" }, 
                           { id: 'esfera', name: "Esfera", baseSymbolGain: 14, notes: "8 (Daily quest) + 6 (Protect Esfera)" }],
                },
                aut: {
                    name: "Authentic Force",
                    maxLevel: 11,
                    list: [{ id: 'cernium', name: "Cernium", baseSymbolGain: 10, notes: "10 (Daily quest; Burning Cernium unlocked)" }, 
                           { id: 'hotel-arcs', name: "Hotel Arcs", baseSymbolGain: 5, notes: "5 (Daily quest)" },
                           { id: 'odium', name: "Odium", baseSymbolGain: 5, notes: "5 (Daily quest)" }],
                }
            }
            const compiledIcons = IconHelper.compileIcons(foundIcons);
            res.render("extras/symbol-calc/symbol-calc-landing", { icons: compiledIcons, symbolData: symbolData });
        })
        .catch(err => {
            console.log(err);
            res.redirect("back");
        })
})

router.get("/flames", function(req, res) {
    Icon.find({usedInSections: "flames"}, function(err, allIcons) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            const compiledIcons = IconHelper.compileIcons(allIcons);
            res.locals.extraStylesheet = "extras/extrasStyles";
            res.locals.section = "calc";
            res.locals.branch = "calc-flames";
            res.locals.title = "Flame Stats Calculator";
            res.render("extras/flameCalc", {icons: compiledIcons});
        }
    })
})

router.get("/set-effects", function(req, res) {
    res.locals.extraStylesheet = "extras/setItemStyles";
    res.locals.section = "calc";
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
            res.locals.section = "calc";
            res.locals.branch = `calc-set-effects`;
            res.locals.title = `Set Effects Calculator (${jobType.charAt(0).toUpperCase() + jobType.slice(1)})`;
            res.render("extras/setEffectCalcActive", {allEquipTypes: allEquipTypes, setItemsByItemPart: setItemsByItemPart, setItemsBySetName: setItemsBySetName, allSetEffects: setEffects, jobType: jobType, statTypes: possibleStatTypes, icons: compiledIcons });
        })
        .catch(err => {
            console.log(err);
            res.redirect("back");
        });
})

module.exports = router;