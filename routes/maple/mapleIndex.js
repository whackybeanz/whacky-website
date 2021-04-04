var CommonHelper    = require("../helpers/commonHelpers");
var IconHelper      = require("../helpers/iconHelpers");

var express     = require("express");
var router      = express.Router();

var beginnerRoutes = require("./beginnerGuide")
var extrasRoutes = require("./extrasIndex");
var moreMapleRoutes = require("./moreMaple");

var Icon        = require("../../models/iconData");
var Homepage    = require("../../models/homepageData");

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
            sections["moreMaple"].sort(CommonHelper.sortByName)

            res.locals.section = "maple-index";
            res.locals.extraStylesheet = "indexStyles";
            res.render("mapleIndex", {sections: sections, icons: compiledIcons});
        })
        .catch(err => {
            console.log(err);
            res.redirect("back");
        })
})
    .use("/newbies", beginnerRoutes)
    .use("/extras", extrasRoutes)
    .use("/", moreMapleRoutes)

module.exports = router;