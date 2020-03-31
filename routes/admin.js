var express = require("express");
var router 	= express.Router();

router.get("/", function(req, res) {
	res.render("admin/equipList", {pageView: "equip-list"});
})

router.get("/addSet", function(req, res) {
	res.locals.extraStylesheet = "adminStyles";
	res.render("admin/addSet", {pageView: "add-set"});
})

router.post("/addSet", function(req, res) {
	var setData = req.body;
	console.log(setData)

	Object.values(setData).forEach(function(value) {
		//console.log(value.length);
		//console.log(typeof value)
	})
})

router.get("/addItem", function(req, res) {
	res.render("admin/addItem", {pageView: "add-item"});
})

module.exports = router;