var AdminHelper = require("./helpers/adminHelpers");

var express = require("express");
var router  = express.Router();
var middleware = require("./middleware");

var Icon    = require("../models/iconData");
var DamageSkin  = require("../models/damageSkinData");
var LatestUpdate = require("../models/latestUpdateData");

router.get("/", middleware.isAdmin, function(req, res) {
    res.render("admin/index");
})

router.get("/icons", middleware.isAdmin, function(req, res) {
    const iconCategories = AdminHelper.getIconCategories();
    const pageSections = AdminHelper.getPageSections();
    res.locals.extraStylesheet = "adminStyles";
    res.locals.branch = "icons";
    res.render("admin/icons", {iconCategories: iconCategories, pageSections: pageSections});
})

router.post("/icons", middleware.isAdmin, function(req, res) {
    const iconData = AdminHelper.compileIconData(req.body);

    Icon.create(iconData, function(err, newIcon) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            console.log(`Created new icon: ${newIcon.name}`);
            res.redirect("/admin/icons");
        }
    })
})

// Retrieves group of icons based on sorted category.
// Valid req.params.category values can be found in adminHelpers, getIconCategories() function
router.get("/icons/:category", middleware.isAdmin, function(req, res) {
    const selectedCategory = req.params.category;

    Icon.find({ itemType: selectedCategory }, function(err, foundIcons) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            const iconCategories = AdminHelper.getIconCategories();
            const pageSections = AdminHelper.getPageSections();

            res.locals.extraStylesheet = "adminStyles";
            res.locals.branch = "icons";
            res.render("admin/icons", {selectedCategory: selectedCategory, iconCategories: iconCategories, pageSections: pageSections, icons: foundIcons})
        }
    })
})

// Retrieves specific icon based on database ID
router.get("/icon/:id", middleware.isAdmin, function(req, res) {
    Icon.findOne({ _id: req.params.id }, function(err, icon) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            const prevUrl = `/admin/icons/${icon.itemType}`;
            const iconCategories = AdminHelper.getIconCategories();
            const pageSections = AdminHelper.getPageSections();

            const imgFolder = "/images";
            const urlIndex = icon.imgUrl.indexOf(imgFolder);
            const mainPath = icon.imgUrl.slice(0, urlIndex + imgFolder.length);
            const [mainFolder, subFolder, fileName] = icon.imgUrl.slice(mainPath.length+1).split("/");

            let iconImgUrlSplit = {
                path: mainPath,
                mainFolder: mainFolder,
                subFolder: subFolder,
                fileName: fileName
            };

            res.locals.extraStylesheet = "adminStyles";
            res.locals.branch = "icons";
            res.render("admin/iconData", {iconCategories: iconCategories, pageSections: pageSections, prevUrl: prevUrl, iconData: icon, iconImgUrl: iconImgUrlSplit });
        }
    })
})

router.post("/icon/:id", middleware.isAdmin, function(req, res) {
    const newIconData = AdminHelper.compileIconData(req.body); 

    Icon.findOneAndUpdate({ _id: req.params.id }, newIconData, { new: true, overwrite: true }, function(err, updatedIcon) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            const path = updatedIcon.itemType;
            console.log("Icon updated");
            res.redirect(`/admin/icons/${path}`);
        }
    })
})

router.post("/icon/:id/delete", middleware.isAdmin, function(req, res) {
    Icon.findOneAndDelete({ _id: req.params.id }, function(err) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            console.log("Icon deleted");
            res.redirect("back");
        }
    })
})

router.get("/damage-skins", middleware.isAdmin, function(req, res) {
    res.redirect("/admin/damage-skins/new");
})

// Retrieves damage skins based on category.
// Also retrieve damage skins marked as 'new'
// Valid req.params.category values: new, kms, non-kms
router.get("/damage-skins/:category", function(req, res) {
    const selectedCategory = req.params.category;

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
            res.render("admin/damageSkins", {selectedCategory: selectedCategory, damageSkinCategories: damageSkinCategories, damageSkins: foundDamageSkins});
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
    DamageSkin.findOne({ _id: req.params.id }, function(err, damageSkin) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            const prevUrl = `/admin/damage-skins/${damageSkin.isKMSskin ? "kms" : "non-kms"}`;
            res.locals.extraStylesheet = "adminStyles";
            res.locals.branch = "damage-skins";
            res.render("admin/damageSkinData", {prevUrl: prevUrl, damageSkinData: damageSkin });
        }
    })
})

router.post("/damage-skin/:id", middleware.isAdmin, function(req, res) {
    const newDamageSkinData = AdminHelper.compileDamageSkinData(req.body);

    DamageSkin.findOneAndUpdate({ _id: req.params.id }, newDamageSkinData, { new: true, overwrite: true }, function(err, updatedSkin) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            const path = updatedSkin.isKMSskin ? "kms" : "non-kms";
            console.log("Damage skin updated");
            res.redirect(`/admin/damage-skins/${path}`);
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