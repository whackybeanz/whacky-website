var CommonHelper    = require("./helpers/commonHelpers");
var IconHelper      = require("./helpers/iconHelpers");

var express = require("express");
var passport    = require("passport");
var router  = express.Router();

var beginnerRoutes = require("./maple/beginnerIndex");
var calcRoutes = require("./maple/calcIndex");
var eventRoutes = require("./maple/eventIndex");
var funRoutes = require("./maple/funIndex");
var infoSheetRoutes = require("./maple/infoIndex");

var Icon        = require("../models/iconData");
var Homepage    = require("../models/homepageData");
var User        = require("../models/users");

router.get("/", function(req, res) {
    let getIcons = Icon.find({usedInSections: "homepage"});
    let getHomepageDetails = Homepage.find();

    Promise.all([getIcons, getHomepageDetails])
        .then(([allIcons, homepageDetails]) => {
            const compiledIcons = IconHelper.compileIcons(allIcons);
            const allSections = [...new Set(homepageDetails.map(item => item.category))];
            let sections = {};
            allSections.forEach(section => sections[section] = []);

            homepageDetails.forEach(function(item) {
                sections[item.category].push(item);
            });

            sections["extras"].sort(CommonHelper.sortByName);

            res.locals.section = "maple-index";
            res.locals.extraStylesheet = "indexStyles";
            res.render("mapleIndex", {sections: sections, icons: compiledIcons});
        })
        .catch(err => {
            console.log(err);
            res.redirect("back");
        })
})
    //.use("/guides", beginnerRoutes)
    .use("/calc", calcRoutes)
    //.use("/calc", eventRoutes)
    .use("/info", infoSheetRoutes)
    .use("/fun", funRoutes)

router.get("/about", function(req, res) {
    res.locals.extraStylesheet = "aboutStyles";
    res.locals.section = "about";
    res.locals.branch = "";
    res.locals.title = "About Me";
    res.render("about/about-landing");
})

router.get("/login", function(req, res) {
    res.locals.section = "maple-index";
    res.locals.title = "Login";
    res.render("login");
})

router.post("/login", passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: "Invalid username or password."
}), function(req, res) {
    const username = req.body.username;

    User.findOne({ username: username })
        .then(user => {
            if(user.isAdmin) {
                res.redirect("/admin");
            } else {
                req.flash("error", "User is not authorized to view this page.");
                res.redirect("/login");
            }
        })
        .catch(err => {
            req.flash("error", "Error connecting to user database.");
            console.log(err);
            res.redirect("/login");
        })
})

router.get("/logout", function(req, res) {
    req.logout(err => {
        if(err) {
            return next(err);
        }
        res.redirect("/");
    });
})

module.exports = router;