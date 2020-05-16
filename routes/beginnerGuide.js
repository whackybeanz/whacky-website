var express = require("express");
var router 	= express.Router();

router.get("/", function(req, res) {
	res.render("beginner/index");
})

router.get("/equip-guide", function(req, res) {
	res.redirect("/equip-guide/flames");
})

router.get("/equip-guide/spell-trace", function(req, res) {
	res.locals.section = "newbies";
	res.locals.branch = "spell-trace";
	res.render("beginner/spell-trace/spellTraceIndex");
})

router.get("/equip-guide/star-force", function(req, res) {
	//res.locals.extraStylesheet = "setItemStyles";
	res.locals.section = "newbies";
	res.locals.branch = "star-force";
	res.render("beginner/star-force/starForceIndex");
})

router.get("/equip-guide/flames", function(req, res) {
	res.locals.extraStylesheet = "flameStyles";
	res.locals.section = "newbies";
	res.locals.branch = "flames";
	res.render("beginner/flames/flameIndex");
})

router.get("/equip-guide/soul-weapons", function(req, res) {
	//res.locals.extraStylesheet = "flameStyles";
	res.locals.section = "newbies";
	res.locals.branch = "soul-weapons";
	res.render("beginner/soul-weapons/soulWeaponIndex");
})

router.get("/equip-guide/set-effects", function(req, res) {
	res.locals.extraStylesheet = "setItemStyles";
	res.locals.section = "newbies";
	res.locals.branch = "set-effects";
	res.render("beginner/set-effects/setEffectIndex");
})

module.exports = router;