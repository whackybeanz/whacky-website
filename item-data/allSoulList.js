const tier1SoulList = require("./tier1SoulList");
const tier2SoulList = require("./tier2SoulList");
const tier3SoulList = require("./tier3SoulList");

const fullSoulList = new Map([...tier1SoulList, ...tier2SoulList, ...tier3SoulList]);
module.exports = fullSoulList;