var express = require("express");
var passport    = require("passport");
var router  = express.Router();

var User        = require("../models/users");

router.get("/", function(req, res) {
    res.redirect("/maple");
})

router.get("/about", function(req, res) {
    res.locals.extraStylesheet = "aboutStyles";
    res.locals.section = "about";
    res.locals.branch = "";
    res.render("about");
})

router.get("/login", function(req, res) {
    res.locals.section = "";
    res.render("login");
})

router.post("/login", passport.authenticate("local", {
    failureRedirect: "/maple/login",
    failureFlash: "Invalid username or password."
}), function(req, res) {
    const username = req.body.username;

    User.findOne({ username: username })
        .then(user => {
            if(user.isAdmin) {
                res.redirect("/admin");
            } else {
                req.flash("error", "User is not authorized to view this page.");
                res.redirect("/maple/login");
            }
        })
        .catch(err => {
            req.flash("error", "Error connecting to user database.");
            console.log(err);
            res.redirect("/maple/login");
        })
})

router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/maple");
})

module.exports = router;