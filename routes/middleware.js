var middlewareObj = {};
var EXPStackingHelper = require("./helpers/expStackingHelpers");
const User = require("../models/users");

middlewareObj.isValidEXPFormInput = function(req, res, next) {
    const selectedExpTable = req.body.expTable;
    const charLevel = parseInt(req.body.charLevel);
    const viewType = req.body.viewTypeRadio;
    const validEXPTables = ["neo", "rise", "glory", "black", "v", "bigbang"];

    let isValidEXPTable = false;

    if(validEXPTables.includes(selectedExpTable)) {
        isValidEXPTable = true;
    }

    if(!isValidEXPTable || isNaN(charLevel) || (viewType !== "Simplified" && viewType !== "Detailed")) {
        console.log("Invalid EXP stack page step 1 values received.");
        res.redirect("back");
    } else {
        if(charLevel >= EXPStackingHelper.getMaxLevel(selectedExpTable)) {
            console.log("Invalid level for selected EXP table.");
            res.redirect("back");
        } else {
            return next();
        }
    }
}

middlewareObj.isValidPotentialListFormInput = function(req, res, next) {
    const validItemParts = ["hat", "top", "bottom", "weapon", "secondary", "emblem",
                            "gloves", "shoes", "cape", "ring", "pendant", "belt",
                            "eye", "face", "earring", "shoulder", "heart"];
    const itemLevel = parseInt(req.body.itemLevel);
    const serverType = req.body.serverType;

    let isValidItemPart = false;

    if(validItemParts.includes(req.body.itemPart)) {
        isValidItemPart = true;
    }

    if(!isValidItemPart || isNaN(itemLevel) || itemLevel < 0 || itemLevel > 300 || (serverType !== "kms" && serverType !== "gms")) {
        console.log("Invalid fields received for potential list form");
        res.redirect("back");
    } else {
        return next();
    }
}

middlewareObj.isAdmin = function(req, res, next) {
    if(res.locals.currentUser) {
        const username = res.locals.currentUser.username;

        User.findOne({ username: username })
            .then(user => {
                if(user.isAdmin) {
                    return next();
                } else {
                    req.flash("error", "You are not authorized to access this page.");
                    res.redirect("back");
                }
            })
            .catch(err => {
                req.flash("error", "Error retrieving user information.");
                res.redirect("back");
            })
    } else {
        req.flash("error", "You are not authorized to access this page.");
        res.redirect("back");
    }
}

middlewareObj.isValidOrdering = function(req, res, next) {
    try {
        let toValidate = req.body.order;
        let hasNaN = req.body.order.filter(i => isNaN(parseInt(i)));

        if(hasNaN.length > 0) {
            throw new Error("Invalid item order number");
        }

        if(new Set(toValidate).size !== toValidate.length) {
            throw new Error("Duplicate item order numbers");
        }

        let hasOutOfRangeNumbers = toValidate.filter(orderNum => (parseInt(orderNum) > toValidate.length-1 || orderNum < 0));

        if(hasOutOfRangeNumbers.length > 0) {
            throw new Error("Has out-of-range item order numbers");
        }

        next();
    } catch (err) {
        req.flash("error", `Error: ${err}`);
        res.redirect("back");
    }
}

module.exports = middlewareObj;