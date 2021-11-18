var express = require("express");
var router  = express.Router();
var middleware = require("../middleware");

var iconRoutes = require("./adminIcons");
var damageSkinRoutes = require("./adminDamageSkins");
var coinEventRoutes = require("./adminCoinEvents");

router
    .get("/", middleware.isAdmin, function(req, res) {
        res.locals.title = "Admin Panel (Home)"
        res.render("admin/index");
    })
    .use("/", iconRoutes)
    .use("/", damageSkinRoutes)
    .use("/", coinEventRoutes);

module.exports = router;