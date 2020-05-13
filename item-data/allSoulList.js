const tier1SoulList = require("./tier1SoulList");
const tier2SoulList = require("./tier2SoulList");
const tier3SoulList = require("./tier3SoulList");
const tier4SoulList = require("./tier4SoulList");

const fullSoulList = new Map([...tier1SoulList, ...tier2SoulList, ...tier3SoulList, ...tier4SoulList]);
module.exports = fullSoulList;