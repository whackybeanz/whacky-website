var AdminHelper = require("../helpers/adminHelpers");

var express = require("express");
var router  = express.Router();
var middleware = require("../middleware");

var Icon    = require("../../models/iconData");

router.get("/icons", middleware.isAdmin, function(req, res) {
    const iconCategories = AdminHelper.getIconCategories();
    const pageSections = AdminHelper.getPageSections();
    res.locals.extraStylesheet = "adminStyles";
    res.locals.branch = "icons";
    res.locals.title = "Admin (Icons)";
    res.render("admin/icons/icons", {iconCategories: iconCategories, pageSections: pageSections});
})

router.post("/icons", middleware.isAdmin, function(req, res) {
    let iconData = AdminHelper.compileIconData(req.body);
    let updatedDocument;

    if(req.body.isCommonCoinShopItem === "yes") {
        iconData.usedInEvents = ["common"];
    }

    Icon.create(iconData)
        .then(newIcon => {
            console.log(`Created new icon: ${newIcon.name}`);
            res.redirect("/admin/icons");
        })
        .catch(err => {
            console.log(err);
            res.redirect("back");
        })
})

// Retrieves group of icons based on sorted category.
// Valid req.params.category values can be found in adminHelpers, getIconCategories() function
router.get("/icons/:category", middleware.isAdmin, function(req, res) {
    const selectedCategory = req.params.category;

    Icon.find({ itemType: selectedCategory })
        .then(foundIcons => {
            const iconCategories = AdminHelper.getIconCategories();
            const pageSections = AdminHelper.getPageSections();

            res.locals.extraStylesheet = "adminStyles";
            res.locals.branch = "icons";
            res.locals.title = "Admin (Icons)";
            res.render("admin/icons/icons", {selectedCategory: selectedCategory, iconCategories: iconCategories, pageSections: pageSections, icons: foundIcons})
        })
        .catch(err => {
            console.log(err);
            res.redirect("back");
        })
})

// Retrieves specific icon based on database ID
router.get("/icon/:id", middleware.isAdmin, function(req, res) {
    Icon.findOne({ _id: req.params.id })
        .then(icon => {
            const prevUrl = `/admin/icons/${icon.itemType}`;
            const iconCategories = AdminHelper.getIconCategories();
            const pageSections = AdminHelper.getPageSections();

            const imgFolder = "/images";
            const urlIndex = icon.imgUrl.indexOf(imgFolder);
            const mainPath = icon.imgUrl.slice(0, urlIndex + imgFolder.length);

            const splitPath = icon.imgUrl.slice(mainPath.length+1).split("/");
            let mainFolder = splitPath[0];
            let [subFolder, fileName] = ["", ""];

            // Subfolder exists
            if(splitPath.length > 2) {
                subFolder = splitPath[1];
                fileName = splitPath.slice(2).join("/");
            } else {
                fileName = splitPath.slice(1).join("/");
            }

            let iconImgUrlSplit = {
                path: mainPath,
                mainFolder: mainFolder,
                subFolder: subFolder,
                fileName: fileName
            };

            res.locals.extraStylesheet = "adminStyles";
            res.locals.branch = "icons";
            res.locals.title = "Admin (Icons)";
            res.render("admin/icons/iconData", {iconCategories: iconCategories, pageSections: pageSections, prevUrl: prevUrl, iconData: icon, iconImgUrl: iconImgUrlSplit });
        })
        .catch(err => {
            console.log(err);
            res.redirect("back");
        })
})

router.post("/icon/:id", middleware.isAdmin, function(req, res) {
    const newIconData = AdminHelper.compileIconData(req.body); 
    let updatedDocument;

    if(req.body.isCommonCoinShopItem === "yes") {
        updatedDocument = { $set: newIconData, $addToSet: { usedInEvents: "common" } };
    } else {
        updatedDocument = { $set: newIconData, $pull: { usedInEvents: "common" } };
    }

    Icon.findOneAndUpdate({ _id: req.params.id }, updatedDocument, { new: true })
        .then(updatedIcon => {
            const path = updatedIcon.itemType;
            console.log("Icon updated");
            res.redirect(`/admin/icon/${req.params.id}`);
        })
        .catch(err => {
            console.log(err);
            res.redirect("back");
        })
})

router.post("/icon/:id/delete", middleware.isAdmin, function(req, res) {
    let response = {};

    Icon.findOneAndDelete({ _id: req.params.id })
        .then(() => {
            console.log("Icon deleted");
            response.isSuccess = true;
            res.send(response);
        })
        .catch(err => {
            console.log(err);
            response.isSuccess = false;
            response.message = err;
            res.send(response);
        })
})

module.exports = router;