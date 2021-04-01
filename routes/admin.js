var express = require("express");
var router  = express.Router();
var middleware = require("./middleware");

var iconRoutes = require("./admin/adminIcons");
var damageSkinRoutes = require("./admin/adminDamageSkins");
var coinEventRoutes = require("./admin/adminCoinEvents");

router
    .get("/", middleware.isAdmin, function(req, res) {
        res.render("admin/index");
    })
    .use("/", iconRoutes)
    .use("/", damageSkinRoutes)
    .use("/", coinEventRoutes);

module.exports = router;