var express = require("express");
var router 	= express.Router();

router.get("/", function(req, res) {
	res.render("admin/equipList", {pageView: "equip-list"});
})

router.get("/addSet", function(req, res) {
	res.render("admin/addSet", {pageView: "add-set"});
})

router.get("/addItem", function(req, res) {
	res.render("admin/addItem", {pageView: "add-item"});
})

module.exports = router;