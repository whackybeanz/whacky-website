var express = require("express");
var router 	= express.Router();

router.get("/", function(req, res) {
	res.render("beginner/index");
})

router.get("/equip-guide", function(req, res) {
	res.redirect("/equip-guide/flames");
})

router.get("/equip-guide/flames", function(req, res) {
	res.locals.extraStylesheet = "flameStyles";
	res.locals.section = "newbies";
	res.locals.branch = "flames";
	res.render("beginner/flameIndex");
})

router.get("/equip-guide/set-effects", function(req, res) {
	res.locals.extraStylesheet = "setItemStyles";
	res.locals.section = "newbies";
	res.locals.branch = "set-effects";
	res.render("beginner/setEffectIndex");
})

module.exports = router;