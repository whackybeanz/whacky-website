var AdminHelper = require("./helpers/adminHelpers");

var express = require("express");
var router  = express.Router();
var Icon    = require("../models/iconData");

const validIconCategories = [{ id: "equip", name: "Equips" }, { id: "use", name: "Use" }, { id: "setup", name: "Setup" }, 
	{ id: "etc", name: "ETC" }, { id: "cash", name: "Cash Item" }, { id: "map", name: "Maps" }, { id: "boss", name: "Boss Monsters" }, 
	{ id: "boss-soul", name: "Boss Souls" }]

router.get("/", function(req, res) {
    res.render("admin/index");
})

router.get("/icons", function(req, res) {
	res.locals.extraStylesheet = "adminStyles";
	res.render("admin/icons", {iconCategories: validIconCategories});
})

router.get("/icons/:category", function(req, res) {
	const selectedCategory = req.params.category;

	Icon.find({ itemType: selectedCategory }, function(err, foundIcons) {
		if(err) {
            console.log(err);
            res.redirect("back");
        } else {
        	res.locals.extraStylesheet = "adminStyles";
        	res.render("admin/icons", {selectedCategory: selectedCategory, iconCategories: validIconCategories, icons: foundIcons})
        }
	})
})

module.exports = router;