var AdminHelper = require("./helpers/adminHelpers");

var express = require("express");
var router  = express.Router();
var Icon    = require("../models/iconData");
var DamageSkin  = require("../models/damageSkinData");
var LatestUpdate = require("../models/latestUpdateData");

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
            res.redirect("/admin/icons");
        }
    })
})

// Retrieves group of icons based on sorted category.
// Valid req.params.category values can be found in adminHelpers, getIconCategories() function
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

// Retrieves specific icon based on database ID
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
    res.redirect("/damage-skins/kms");
})

// Retrieves damage skins based on category.
// Valid req.params.category values: kms, non-kms
router.get("/damage-skins/:category", function(req, res) {
    const selectedCategory = req.params.category;

    let latestUpdate = LatestUpdate.findOne({});
    let findDamageSkin = DamageSkin.find({ isKMSskin: selectedCategory === "kms" });

    Promise.all([latestUpdate, findDamageSkin])
        .then(([latestData, foundDamageSkins]) => {
            const damageSkinCategories = AdminHelper.getDamageSkinCategories();
            res.locals.extraStylesheet = "adminStyles";
            res.render("admin/damageSkins", {selectedCategory: selectedCategory, damageSkinCategories: damageSkinCategories, damageSkins: foundDamageSkins, latestData: latestData});
        })
        .catch(err => {
            console.log(err);
            res.redirect("back");
        })
})

// On addition of damage skin, execute these two steps:
// 1) Compile damage skin data for creation of new skin
// 2) Also compile data for addition to "newest released skins" and set today's date as date of update
router.post("/damage-skins", function(req, res) {
    const damageSkinData = AdminHelper.compileDamageSkinData(req.body);
    const latestSkinData = {
        skinServerType: req.body.isKMSskin === "yes" ? "kms" : "msea",
        damageSkinId: parseInt(req.body.damageSkinId),
        name: req.body.name,
        isUnitSkin: req.body.hasUnitSkin === "yes",
    };
    const date = new Date(Date.now()).toLocaleDateString('en-SG', {day: "2-digit", month: "short", year: "numeric"});

    let createDamageSkin = DamageSkin.create(damageSkinData);
    let updateLatestSkins = LatestUpdate.findOneAndUpdate({}, { $set: { 'damageSkins.dateUpdated': date }, $push: { 'damageSkins.list' : latestSkinData } }, { new: true });

    Promise.all([createDamageSkin, updateLatestSkins])
        .then(([newDamageSkin, latestData]) => {
            const damageSkinCategories = AdminHelper.getDamageSkinCategories();
            res.locals.extraStylesheet = "adminStyles";
            console.log(`Created new damage skin: ${newDamageSkin.name}`);
            res.redirect(`/admin/damage-skins/${req.body.isKMSskin ? "kms" : "non-kms"}`);
        })
        .catch(err => {
            console.log(err);
            res.redirect("back");
        })
})

router.get("/damage-skin/:id", function(req, res) {
    DamageSkin.findOne({ _id: req.params.id }, function(err, damageSkin) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            const prevUrl = `/admin/damage-skins/${damageSkin.isKMSskin ? "kms" : "non-kms"}`;
            res.locals.extraStylesheet = "adminStyles";
            res.render("admin/damageSkinData", {prevUrl: prevUrl, damageSkinData: damageSkin });
        }
    })
})

router.post("/damage-skin/:id", function(req, res) {
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

router.post("/damage-skin/:id/delete", function(req, res) {
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

router.post("/system/updateLatestDamageSkins", function(req, res) {
    const date = new Date(Date.now()).toLocaleDateString('en-SG', {day: "2-digit", month: "short", year: "numeric"});

    LatestUpdate.findOne({}, function(err, latestData) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            latestData.servers.kms.currPatch = req.body.kmsPatchDetails;
            latestData.servers.msea.currPatch = req.body.mseaPatchDetails;
            latestData.damageSkins.dateUpdated = date;

            let dbList = latestData.damageSkins.list;
            let remainingSkins = req.body.damageSkinId.map(elem => parseInt(elem));
            latestData.damageSkins.list = dbList.filter(skin => remainingSkins.includes(skin.damageSkinId));

            latestData.save();

            console.log("Latest damage skin list updated.");
            res.redirect('/admin/damage-skins/kms')
        }
    })
})

module.exports = router;