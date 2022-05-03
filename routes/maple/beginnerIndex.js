var IconHelper = require("../helpers/iconHelpers");

var express = require("express");
var router  = express.Router();
var Icon    = require("../../models/iconData");

router.get("/", function(req, res) {
    res.render("beginner/index");
})

router.get("/spell-trace", function(req, res) {
    Icon.find({usedInSections: "spell-trace"}, function(err, allIcons) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            const compiledIcons = IconHelper.compileIcons(allIcons);
            res.locals.section = "newbies";
            res.locals.branch = "spell-trace";
            res.locals.title = "About Spell Trace";
            res.render("beginner/spell-trace/spellTraceIndex", {icons: compiledIcons});
        }
    })
})

router.get("/star-force", function(req, res) {
    Icon.find({usedInSections: "star-force"}, function(err, allIcons) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            const compiledIcons = IconHelper.compileIcons(allIcons);
            res.locals.section = "newbies";
            res.locals.branch = "star-force";
            res.locals.title = "About Star Force";
            res.render("beginner/star-force/starForceIndex", {icons: compiledIcons});
        }
    })
})

router.get("/potentials", function(req, res) {
    Icon.find({usedInSections: "potentials"}, function(err, allIcons) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            const compiledIcons = IconHelper.compileIcons(allIcons);
            res.locals.section = "newbies";
            res.locals.branch = "potentials";
            res.locals.title = "About Potentials";
            res.render("beginner/potentials/potentialsIndex", {icons: compiledIcons});
        }
    })
})

router.get("/flames", function(req, res) {
    Icon.find({usedInSections: "flames"}, function(err, allIcons) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            const compiledIcons = IconHelper.compileIcons(allIcons);
            res.locals.section = "newbies";
            res.locals.branch = "flames";
            res.locals.title = "About Flames";
            res.render("beginner/flames/flameIndex", {icons: compiledIcons});
        }
    })
})

router.get("/soul-weapons", function(req, res) {
    Icon.find({usedInSections: "soul-weapons"}, function(err, allIcons) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            const compiledIcons = IconHelper.compileIcons(allIcons);
            res.locals.section = "newbies";
            res.locals.branch = "soul-weapons";
            res.locals.title = "About Soul Weapons";
            res.render("beginner/soul-weapons/soulWeaponIndex", {icons: compiledIcons});
        }
    })
})

router.get("/set-effects", function(req, res) {
    Icon.find({usedInSections: "set-effects"}, function(err, allIcons) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            const compiledIcons = IconHelper.compileIcons(allIcons);
            res.locals.section = "newbies";
            res.locals.branch = "set-effects";
            res.locals.title = "About Set Effects";
            res.render("beginner/set-effects/setEffectIndex", {icons: compiledIcons});
        }
    })
})

router.get("/todd-hammer", function(req, res) {
    Icon.find({usedInSections: "todd"}, function(err, allIcons) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            const compiledIcons = IconHelper.compileIcons(allIcons);
            res.locals.section = "newbies";
            res.locals.branch = "todd-hammer";
            res.locals.title = "About Todd's Hammer";
            res.render("beginner/todd-hammer/toddIndex", {icons: compiledIcons});
        }
    })
})

module.exports = router;