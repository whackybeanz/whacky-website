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
	res.locals.currNav = { main: "index", branch: "flames" };
	res.render("beginner/flameIndex", {url: req.originalUrl});
})

module.exports = router;