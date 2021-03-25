var AdminHelper = require("./helpers/adminHelpers");

var express = require("express");
var router  = express.Router();
var Icon    = require("../models/iconData");
var DamageSkin  = require("../models/damageSkinData");

router.get("/", function(req, res) {
    res.render("admin/index");
})

router.get("/icons", function(req, res) {
    const iconCategories = AdminHelper.getIconCategories();
    const pageSections = AdminHelper.getPageSections();
    res.locals.extraStylesheet = "adminStyles";
    res.render("admin/icons", {iconCategories: iconCategories, pageSections: pageSections});
})

router.post("/icons", function(req, res) {
    const iconData = AdminHelper.compileIconData(req.body);

    Icon.create(iconData, function(err, newIcon) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            const iconCategories = AdminHelper.getIconCategories();
            const pageSections = AdminHelper.getPageSections();
            res.locals.extraStylesheet = "adminStyles";
            console.log(`Created new icon: ${newIcon.name}`);
            res.render("admin/icons", {iconCategories: iconCategories, pageSections: pageSections});
        }
    })
})

router.get("/icons/:category", function(req, res) {
    const selectedCategory = req.params.category;

    Icon.find({ itemType: selectedCategory }, function(err, foundIcons) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            const iconCategories = AdminHelper.getIconCategories();
            const pageSections = AdminHelper.getPageSections();

            res.locals.extraStylesheet = "adminStyles";
            res.render("admin/icons", {selectedCategory: selectedCategory, iconCategories: iconCategories, pageSections: pageSections, icons: foundIcons})
        }
    })
})

router.get("/icon/:id", function(req, res) {
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
            res.render("admin/iconData", {iconCategories: iconCategories, pageSections: pageSections, prevUrl: prevUrl, iconData: icon, iconImgUrl: iconImgUrlSplit });
        }
    })
})

router.post("/icon/:id", function(req, res) {
    const newIconData = AdminHelper.compileIconData(req.body); 

    Icon.findOneAndUpdate({ _id: req.params.id }, newIconData, { new: true }, function(err, updatedIcon) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            console.log("Icon updated");
            res.redirect("back");
        }
    })
})

router.post("/icon/:id/delete", function(req, res) {
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

router.get("/damage-skins", function(req, res) {
    const damageSkinCategories = AdminHelper.getDamageSkinCategories();
    res.locals.extraStylesheet = "adminStyles";
    res.render("admin/damage-skins", {damageSkinCategories: damageSkinCategories});
})

router.post("/damage-skins", function(req, res) {
    const damageSkinData = AdminHelper.compileDamageSkinData(req.body);

    DamageSkin.create(damageSkinData, function(err, newDamageSkin) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            const damageSkinCategories = AdminHelper.getDamageSkinCategories();
            res.locals.extraStylesheet = "adminStyles";
            console.log(`Created new damage skin: ${newDamageSkin.name}`);
            res.render("admin/damage-skins", {damageSkinCategories: damageSkinCategories});
        }
    })
})

module.exports = router;