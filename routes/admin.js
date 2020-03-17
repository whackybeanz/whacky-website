var express = require("express");
var router 	= express.Router();

router.get("/", function(req, res) {
	res.render("adminIndex");
})

router.get("/addSet", function(req, res) {
	res.render("addSet");
})

router.get("/addItem", function(req, res) {
	res.render("addItem");
})

module.exports = router;