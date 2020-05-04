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
	res.render("beginner/flameIndex");
})

module.exports = router;