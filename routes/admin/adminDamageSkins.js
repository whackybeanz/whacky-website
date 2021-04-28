var AdminHelper = require("../helpers/adminHelpers");

var express = require("express");
var router  = express.Router();
var middleware = require("../middleware");

var DamageSkin  = require("../../models/damageSkinData");
var LatestUpdate = require("../../models/latestUpdateData");

router.get("/damage-skins", middleware.isAdmin, function(req, res) {
    res.redirect("/admin/damage-skins/new");
})

// Retrieves damage skins based on category.
// Also retrieve damage skins marked as 'new'
// Valid req.params.category values: new, kms, non-kms
router.get("/damage-skins/:category", function(req, res) {
    const selectedCategory = req.params.category;
    const skinProperties = AdminHelper.getDamageSkinProperties();

    //let latestUpdate = LatestUpdate.findOne({});
    let findDamageSkins;
    if(selectedCategory === "new") {
        findDamageSkins = DamageSkin.find({ isNewSkin: true });
    } else {
        findDamageSkins = DamageSkin.find({ isKMSskin: selectedCategory === "kms" });
    }
    
    Promise.all([findDamageSkins])
        .then(([foundDamageSkins]) => {
            const damageSkinCategories = AdminHelper.getDamageSkinCategories();
            res.locals.extraStylesheet = "adminStyles";
            res.locals.branch = "damage-skins";
            res.render("admin/damage-skins/damageSkins", {selectedCategory: selectedCategory, damageSkinCategories: damageSkinCategories, skinProperties: skinProperties, damageSkins: foundDamageSkins});
        })
        .catch(err => {
            console.log(err);
            res.redirect("back");
        })
})

// On addition of damage skin, execute these two steps:
// 1) Compile damage skin data for creation of new skin
// 2) Set last updated date for damage skin page as date of new skin creation
router.post("/damage-skins", middleware.isAdmin, function(req, res) {
    const damageSkinData = AdminHelper.compileDamageSkinData(req.body);
    const date = new Date(Date.now()).toLocaleDateString('en-SG', {day: "2-digit", month: "short", year: "numeric"});

    let findLatestUpdate = LatestUpdate.findOneAndUpdate({}, { $set: { 'lastUpdatedDate.damageSkins': date }});
    let createDamageSkin = DamageSkin.create(damageSkinData);

    Promise.all([findLatestUpdate, createDamageSkin])
        .then(([latestUpdate, newDamageSkin]) => {
            console.log(`Created new damage skin: ${newDamageSkin.name}`);
            res.redirect(`/admin/damage-skins/new`);
        })
        .catch(err => {
            console.log(err);
            res.redirect("back");
        })
})

router.get("/damage-skin/:id", middleware.isAdmin, function(req, res) {
    const skinProperties = AdminHelper.getDamageSkinProperties();

    DamageSkin.findOne({ _id: req.params.id }, function(err, damageSkin) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            const prevUrl = `/admin/damage-skins/${damageSkin.isKMSskin ? "kms" : "non-kms"}`;
            res.locals.extraStylesheet = "adminStyles";
            res.locals.branch = "damage-skins";
            res.render("admin/damage-skins/damageSkinData", { prevUrl: prevUrl, damageSkinData: damageSkin, skinProperties: skinProperties });
        }
    })
})

router.post("/damage-skin/:id", middleware.isAdmin, function(req, res) {
    const newDamageSkinData = AdminHelper.compileDamageSkinData(req.body);

    DamageSkin.findOneAndUpdate({ _id: req.params.id }, { $set: newDamageSkinData }, { new: true }, function(err, updatedSkin) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            console.log("Damage skin updated");
            res.redirect(`/admin/damage-skin/${req.params.id}`);
        }
    })
})

router.post("/damage-skin/:id/delete", middleware.isAdmin, function(req, res) {
    DamageSkin.findOneAndDelete({ _id: req.params.id }, function(err) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            console.log("Damage skin deleted");
            res.redirect("back");
        }
    })
})

module.exports = router;