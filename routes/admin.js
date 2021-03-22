var express = require("express");
var router  = express.Router();
var Icon    = require("../models/iconData");

router.get("/", function(req, res) {
    res.render("admin/index");
})

router.get("/icons", function(req, res) {
    Icon.find({}, function(err, icons) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            res.render("admin/icons");
        }
    })
})

module.exports = router;