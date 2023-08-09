var IconHelper = require("../helpers/iconHelpers");

var express = require("express");
var router  = express.Router();
var Icon    = require("../../models/iconData");

router.get("/", function(req, res) {
    res.render("beginner/index");
})

router.get("/spell-trace", function(req, res) {
    Icon.find({usedInSections: "spell-trace"})
        .then(allIcons => {
            const compiledIcons = IconHelper.compileIcons(allIcons);
            res.locals.section = "guides";
            res.locals.branch = "spell-trace";
            res.locals.title = "About Spell Trace";
            res.render("beginner/spell-trace/spellTraceIndex", {icons: compiledIcons});
        })
        .catch(err => {
            console.log(err);
            res.redirect("back");
        })
})

router.get("/star-force", function(req, res) {
    Icon.find({usedInSections: "star-force"})
        .then(allIcons => {
            const compiledIcons = IconHelper.compileIcons(allIcons);
            res.locals.section = "guides";
            res.locals.branch = "star-force";
            res.locals.title = "About Star Force";
            res.render("beginner/star-force/starForceIndex", {icons: compiledIcons});
        })
        .catch(err => {
            console.log(err);
            res.redirect("back");
        })
})

router.get("/potentials", function(req, res) {
    Icon.find({usedInSections: "potentials"})
        .then(allIcons => {
            const compiledIcons = IconHelper.compileIcons(allIcons);
            res.locals.section = "guides";
            res.locals.branch = "potentials";
            res.locals.title = "About Potentials";
            res.render("beginner/potentials/potentialsIndex", {icons: compiledIcons});
        })
        .catch(err => {
            console.log(err);
            res.redirect("back");
        })
})

router.get("/flames", function(req, res) {
    Icon.find({usedInSections: "flames"})
        .then(allIcons => {
            const compiledIcons = IconHelper.compileIcons(allIcons);
            res.locals.section = "guides";
            res.locals.branch = "flames";
            res.locals.title = "About Flames";
            res.render("beginner/flames/flameIndex", {icons: compiledIcons});
        })
        .catch(err => {
            console.log(err);
            res.redirect("back");
        })
})

router.get("/soul-weapons", function(req, res) {
    Icon.find({usedInSections: "soul-weapons"})
        .then(allIcons => {
            const compiledIcons = IconHelper.compileIcons(allIcons);
            res.locals.section = "guides";
            res.locals.branch = "soul-weapons";
            res.locals.title = "About Soul Weapons";
            res.render("beginner/soul-weapons/soulWeaponIndex", {icons: compiledIcons});
        })
        .catch(err => {
            console.log(err);
            res.redirect("back");
        })
})

router.get("/set-effects", function(req, res) {
    Icon.find({usedInSections: "set-effects"})
        .then(allIcons => {
            const compiledIcons = IconHelper.compileIcons(allIcons);
            res.locals.section = "guides";
            res.locals.branch = "set-effects";
            res.locals.title = "About Set Effects";
            res.render("beginner/set-effects/setEffectIndex", {icons: compiledIcons});
        })
        .catch(err => {
            console.log(err);
            res.redirect("back");
        })
})

router.get("/todd-hammer", function(req, res) {
    Icon.find({usedInSections: "todd"})
        .then(allIcons => {
            const compiledIcons = IconHelper.compileIcons(allIcons);
            res.locals.section = "guides";
            res.locals.branch = "todd-hammer";
            res.locals.title = "About Todd's Hammer";
            res.render("beginner/todd-hammer/toddIndex", {icons: compiledIcons});
        })
        .catch(err => {
            console.log(err);
            res.redirect("back");
        })
})

module.exports = router;