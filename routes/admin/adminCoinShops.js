var express = require("express");
var router  = express.Router();
var middleware = require("../middleware");

router.get("/coin-shops", middleware.isAdmin, function(req, res) {
    res.locals.extraStylesheet = "adminStyles";
    res.locals.branch = "coin-shops";
    res.render("admin/coin-shops/coinShops");
})

module.exports = router;