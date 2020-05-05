var express = require("express");
var router 	= express.Router();

router.get("/", function(req, res) {
	res.redirect("/maple");
})

router.get("/about", function(req, res) {
	res.locals.extraStylesheet = "aboutStyles";
	res.locals.section = "about";
	res.locals.branch = "";
	res.render("about");
})

module.exports = router;