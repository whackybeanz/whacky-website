var Helper = require("./Helpers/extrasHelpers");

var express = require("express");
var router 	= express.Router();
var Equip 	= require("../models/equipData");
var Effect 	= require("../models/setEffectData");
var Soul 	= require("../models/bossSoulData");

router.get("/", function(req, res) {
	res.redirect("/flames");
})

router.get("/flames", function(req, res) {
	res.locals.extraStylesheet = "flameStyles";
	res.locals.section = "extras";
	res.locals.branch = "calc-flames";
	res.render("extras/flameCalc");
})

router.get("/soul-tier-list", function(req, res) {
	Soul.find({}, function(err, allSouls) {
		if(err) {
			console.log(err);
			res.redirect("back");
		} else {
			const soulsByTier = Helper.compileSoulsByTier(allSouls);
			res.locals.extraStylesheet = "soulListStyles";
			res.locals.section = "extras";
			res.locals.branch = "soul-tier-list";
			res.render("extras/soulTierList", {soulList: soulsByTier});
		}
	})
})

router.get("/set-effects", function(req, res) {
	res.locals.extraStylesheet = "setItemStyles";
	res.locals.section = "extras";
	res.locals.branch = "calc-set-effects";
	res.render("extras/setEffectCalc");
})

router.get("/set-effects/:jobType", function(req, res) {
	const jobType = req.params.jobType.toLowerCase();
	let getEquips = Equip.find().or([{ jobType: jobType }, { jobType: "common" }]);
	let getSetEffects = Effect.find().or([{ jobType: jobType }, { jobType: "common" }]);

	Promise.all([getEquips, getSetEffects])
		.then(([equips, setEffects]) => {
			const setItemsByItemPart = Helper.compileSetItemsByItemPart(equips);
			const setItemsBySetName = Helper.compileSetItemsBySetName(equips);

			const possibleStatTypes = [{ key: "str", name: "STR" }, { key: "dex", name: "DEX" }, { key: "int", name: "INT" }, { key: "luk", name: "LUK" }, { key: "allStats", name: "All Stats" }, 
							{ key: "maxHp", name: "Max HP"}, { key: "maxHpMp", name: "Max HP/MP" }, { key: "maxHpMpPercent", name: "Max HP/MP %", symbol: "%" }, 
							{ key: "def", name: "DEF" }, { key: "acc", name: "Accuracy" }, { key: "avoid", name: "Avoidability" }, 
							{ key: "wa", name: "ATT" }, { key: "ma", name: "MATT" }, { key: "wama", name: "ATT/MATT" }, 
							{ key: "damagePercent", name: "Damage %", symbol: "%" }, { key: "bossPercent", name: "Boss Damage %", symbol: "%" }, { key: "iedPercent", name: "Ignore Enemy DEF %", symbol: "%" }, 
							{ key: "critDmgPercent", name: "Critical Damage %", symbol: "%" }];

			res.locals.extraStylesheet = "setItemStyles";
			res.locals.section = "extras";
			res.locals.branch = `calc-set-effects-${jobType}`;
			res.render("extras/setEffectCalcActive", {setItemsByItemPart: setItemsByItemPart, setItemsBySetName: setItemsBySetName, allSetEffects: setEffects, jobType: jobType, statTypes: possibleStatTypes});
		})
		.catch(err => {
		 	console.log(err);
			res.redirect("back");
		});
})

router.get("/boss-crystal", function(req, res) {
	res.locals.extraStylesheet = "extrasStyles";
	res.locals.section = "extras";
	res.locals.branch = "boss-crystal";

	let bossList = [
		{ name: "Arkarium", img: "./public/images/boss/arkarium-sq.png", easy: 1152000, normal: 2520000, hard: 0, chaos: 0 },
		{ name: "Black Mage", img: "./public/images/boss/bm-sq.png", easy: 0, normal: 0, hard: 500000000, chaos: 0 },
		{ name: "Crimson Queen", img: "./public/images/boss/crimson-queen-sq.png", easy: 0, normal: 968000, hard: 0, chaos: 16200000 },
		{ name: "Cygnus", img: "./public/images/boss/cygnus-sq.png", easy: 9112500, normal: 14450000, hard: 0, chaos: 0 },
		{ name: "Damien", img: "./public/images/boss/damien-sq.png", easy: 0, normal: 33800000, hard: 70312500, chaos: 0 },
		{ name: "Djunkel", img: "./public/images/boss/djunkel-sq.png", easy: 0, normal: 52812500, hard: 0, chaos: 96800000 },
		{ name: "Dusk", img: "./public/images/boss/dusk-sq.png", easy: 0, normal: 49612500, hard: 0, chaos: 92450000 },
		{ name: "Heretic Hilla", img: "./public/images/boss/heretic-hilla-sq.png", easy: 0, normal: 0, hard: 110450000, chaos: 0 },
		{ name: "Hilla", img: "./public/images/boss/hilla-sq.png", easy: 0, normal: 800000, hard: 11250000, chaos: 0 },
		{ name: "Horntail", img: "./public/images/boss/horntail-sq.png", easy: 882000, normal: 1012500, hard: 0, chaos: 1352000 },
		{ name: "Julieta", img: "./public/images/boss/julieta-sq.png", easy: 0, normal: 1200000, hard: 0, chaos: 0 },
		{ name: "Kawoong", img: "./public/images/boss/kawoong-sq.png", easy: 0, normal: 1250000, hard: 0, chaos: 0 },
		{ name: "Lotus", img: "./public/images/boss/lotus-sq.png", easy: 0, normal: 32512500, hard: 74112500, chaos: 0 },
		{ name: "Lucid", img: "./public/images/boss/lucid-sq.png", easy: 35112500, normal: 40612500, hard: 80000000, chaos: 0 },
		{ name: "Magnus", img: "./public/images/boss/magnus-sq.png", easy: 722000, normal: 2592000, hard: 19012500, chaos: 0 },
		{ name: "Papulatus", img: "./public/images/boss/papulatus-sq.png", easy: 684500, normal: 2664500, hard: 0, chaos: 26450000 },
		{ name: "Pierre", img: "./public/images/boss/pierre-sq.png", easy: 0, normal: 968000, hard: 0, chaos: 16200000 },
		{ name: "Pink Bean", img: "./public/images/boss/pink-bean-sq.png", easy: 0, normal: 1404500, hard: 0, chaos: 12800000 },
		{ name: "Princess Nou", img: "./public/images/boss/pnou-sq.png", easy: 0, normal: 15312500, hard: 0, chaos: 0 },
		{ name: "Ranmaru", img: "./public/images/boss/ranmaru-sq.png", easy: 0, normal: 648000, hard: 2664500, chaos: 0 },
		{ name: "Vellum", img: "./public/images/boss/vellum-sq.png", easy: 0, normal: 968000, hard: 0, chaos: 21012500 },
		{ name: "Von Bon", img: "./public/images/boss/vonbon-sq.png", easy: 0, normal: 968000, hard: 0, chaos: 16200000 },
		{ name: "Von Leon", img: "./public/images/boss/von-leon-sq.png", easy: 1058000, normal: 1458000, hard: 2450000, chaos: 0 },
		{ name: "Will", img: "./public/images/boss/will-sq.png", easy: 0, normal: 46512500, hard: 88200000, chaos: 0 },
		{ name: "Zakum", img: "./public/images/boss/zakum-sq.png", easy: 200000, normal: 612500, hard: 0, chaos: 16200000 },
	];

	const pricePerCrystalList = Helper.sortByPrice(bossList);
	res.render("extras/bossCrystal", {bossList: bossList, crystalList: pricePerCrystalList});
})

router.get("/todd-sequence", function(req, res) {
	res.locals.extraStylesheet = "extrasStyles";
	res.locals.section = "extras";
	res.locals.branch = "todd-sequence";
	res.render("extras/toddSequence");
})

module.exports = router;