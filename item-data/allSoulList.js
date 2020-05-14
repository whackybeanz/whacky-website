const tier1SoulList = require("./tier1SoulList");
const tier2SoulList = require("./tier2SoulList");
const tier3SoulList = require("./tier3SoulList");
const tier4SoulList = require("./tier4SoulList");
const tier5SoulList = require("./tier5SoulList");
const tier6SoulList = require("./tier6SoulList");
const tier7SoulList = require("./tier7SoulList");

const fullSoulList = new Map([...tier1SoulList, ...tier2SoulList, ...tier3SoulList, ...tier4SoulList, ...tier5SoulList, ...tier6SoulList, ...tier7SoulList]);
module.exports = fullSoulList;