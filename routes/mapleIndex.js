var express = require("express");
var router 	= express.Router();

router.get("/", function(req, res) {
	res.locals.extraStylesheet = "indexStyles";
	res.render("mapleIndex");
})

module.exports = router;