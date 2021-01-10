var middlewareObj = {};
var EXPStackingHelper = require("./helpers/expStackingHelpers");

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

module.exports = middlewareObj;