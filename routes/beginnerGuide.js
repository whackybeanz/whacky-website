var IconHelper = require("./Helpers/iconHelpers");

var express = require("express");
var router 	= express.Router();
var Icon 	= require("../models/iconData");

router.get("/", function(req, res) {
	res.render("beginner/index");
})

router.get("/equip-guide", function(req, res) {
	res.redirect("/equip-guide/flames");
})

router.get("/equip-guide/spell-trace", function(req, res) {
	Icon.find({usedInSections: "spell-trace"}, function(err, allIcons) {
		if(err) {
			console.log(err);
			res.redirect("back");
		} else {
			const compiledIcons = IconHelper.compileIcons(allIcons);
			res.locals.section = "newbies";
			res.locals.branch = "spell-trace";
			res.render("beginner/spell-trace/spellTraceIndex", {icons: compiledIcons});
		}
	})
})

router.get("/equip-guide/star-force", function(req, res) {
	Icon.find({usedInSections: "star-force"}, function(err, allIcons) {
		if(err) {
			console.log(err);
			res.redirect("back");
		} else {
			const compiledIcons = IconHelper.compileIcons(allIcons);
			res.locals.section = "newbies";
			res.locals.branch = "star-force";
			res.render("beginner/star-force/starForceIndex", {icons: compiledIcons});
		}
	})
})

router.get("/equip-guide/potentials", function(req, res) {
	Icon.find({usedInSections: "potentials"}, function(err, allIcons) {
		if(err) {
			console.log(err);
			res.redirect("back");
		} else {
			const compiledIcons = IconHelper.compileIcons(allIcons);
			res.locals.section = "newbies";
			res.locals.branch = "potentials";
			res.render("beginner/potentials/potentialsIndex", {icons: compiledIcons});
		}
	})
})

router.get("/equip-guide/flames", function(req, res) {
	Icon.find({usedInSections: "flames"}, function(err, allIcons) {
		if(err) {
			console.log(err);
			res.redirect("back");
		} else {
			const compiledIcons = IconHelper.compileIcons(allIcons);
			res.locals.section = "newbies";
			res.locals.branch = "flames";
			res.render("beginner/flames/flameIndex", {icons: compiledIcons});
		}
	})
})

router.get("/equip-guide/soul-weapons", function(req, res) {
	Icon.find({usedInSections: "soul-weapons"}, function(err, allIcons) {
		if(err) {
			console.log(err);
			res.redirect("back");
		} else {
			const compiledIcons = IconHelper.compileIcons(allIcons);
			res.locals.section = "newbies";
			res.locals.branch = "soul-weapons";
			res.render("beginner/soul-weapons/soulWeaponIndex", {icons: compiledIcons});
		}
	})
})

router.get("/equip-guide/set-effects", function(req, res) {
	Icon.find({usedInSections: "set-effects"}, function(err, allIcons) {
		if(err) {
			console.log(err);
			res.redirect("back");
		} else {
			const compiledIcons = IconHelper.compileIcons(allIcons);
			res.locals.section = "newbies";
			res.locals.branch = "set-effects";
			res.render("beginner/set-effects/setEffectIndex", {icons: compiledIcons});
		}
	})
})

router.get("/equip-guide/todd-hammer", function(req, res) {
	Icon.find({usedInSections: "todd"}, function(err, allIcons) {
		if(err) {
			console.log(err);
			res.redirect("back");
		} else {
			const compiledIcons = IconHelper.compileIcons(allIcons);
			res.locals.section = "newbies";
			res.locals.branch = "todd-hammer";
			res.render("beginner/todd-hammer/toddIndex", {icons: compiledIcons});
		}
	})
})

module.exports = router;