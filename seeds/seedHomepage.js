var mongoose = require("mongoose");
var Homepage = require("../models/homepageData");

var homepageSeeds = [
	{ category: "beginner", name: "Spell Trace / Scrolls", iconId: "spell-trace", pageUrl: "./maple/newbies/equip-guide/spell-trace" },
	{ category: "beginner", name: "Star Force", iconId: "chair-sf", pageUrl: "./maple/newbies/equip-guide/star-force" },
	{ category: "beginner", name: "Potentials / Cubes", iconId: "cube-pc", pageUrl: "./maple/newbies/equip-guide/potentials" },
	{ category: "beginner", name: "Bonus Stats / Flames", iconId: "flame-crimson", pageUrl: "./maple/newbies/equip-guide/flames" },
	{ category: "beginner", name: "Soul Weapons", iconId: "soul-magnus", imgUrl: "./public/images/souls/soul-magnus.png", pageUrl: "./maple/newbies/equip-guide/soul-weapons" },
	{ category: "beginner", name: "Set Effects / Lucky Items", iconId: "chaos-vellum-hat", imgUrl: "./public/images/equips/hat/chaos-bellum.png", pageUrl: "./maple/newbies/equip-guide/set-effects" },
	{ category: "beginner", name: "Todd's Hammer", iconId: "todd-icon", pageUrl: "./maple/newbies/equip-guide/todd-hammer"},

	{ category: "extras", name: "Flame Stats", iconId: "flame-crimson", pageUrl: "./maple/extras/flames", isCalculator: true },
	{ category: "extras", name: "Set Effects", iconId: "chaos-vellum-hat", imgUrl: "./public/images/equips/hat/chaos-vellum.png", pageUrl: "./maple/extras/set-effects", isCalculator: true },
	{ category: "extras", name: "Boss Crystal Prices", iconId: "boss-crystal", pageUrl: "./maple/extras/boss-crystal", isInfoSheet: true },
	{ category: "extras", name: "Soul Tier List", iconId: "soul-magnus", imgUrl: "./public/images/souls/soul-magnus.png", pageUrl: "./maple/extras/soul-tier-list", isInfoSheet: true },
	{ category: "extras", name: "Todding Sequence", iconId: "todd-icon", pageUrl: "./maple/extras/todd-sequence", isInfoSheet: true },

	{ category: "moreMaple", name: "Tactical Relay", iconId: "chair-tactical-v1", pageUrl: "./maple/events/tactical-relay", isEvent: true },
	{ category: "moreMaple", name: "Crossword", iconId: "default-icon", pageUrl: "./maple/fun/crossword", isFunCorner: true },

	{ category: "others", name: "StrategyWiki", iconId: "default-icon", pageUrl: "https://strategywiki.org/wiki/MapleStory", isNewTab: true },
	{ category: "others", name: "MapleWiki", iconId: "default-icon", pageUrl: "https://maplestory.fandom.com/wiki/MapleStory", isNewTab: true },
	{ category: "others", name: "Dexless.com", iconId: "default-icon", pageUrl: "https://dexless.com/", isNewTab: true },
	{ category: "others", name: "Maplestory Reddit", iconId: "default-icon", pageUrl: "https://www.reddit.com/r/Maplestory/", isNewTab: true },
	{ category: "others", name: "Maplestory Inven", iconId: "default-icon", pageUrl: "http://m.inven.co.kr/maple/", isNewTab: true },
	{ category: "others", name: "Namu Wiki", iconId: "default-icon", pageUrl: "https://namu.wiki/w/%EB%B6%84%EB%A5%98:%EB%A9%94%EC%9D%B4%ED%94%8C%EC%8A%A4%ED%86%A0%EB%A6%AC", isNewTab: true },

	{ category: "quicklinks", name: "Maplestory Korea (KMS)", iconId: "kms", pageUrl: "https://maplestory.nexon.com/", isNewTab: true },
	{ category: "quicklinks", name: "Maplestory Korea Test Server (KMST)", iconId: "kms", pageUrl: "https://maplestory.nexon.com/Testworld/Main", isNewTab: true },
	{ category: "quicklinks", name: "Maplestory Japan (JMS)", iconId: "jms", pageUrl: "https://maplestory.nexon.co.jp/", isNewTab: true },
	{ category: "quicklinks", name: "Maplestory Taiwan (TMS)", iconId: "tms", pageUrl: "https://tw.beanfun.com/maplestory/main.aspx", isNewTab: true },
	{ category: "quicklinks", name: "Maplestory China (CMS)", iconId: "cms", pageUrl: "http://mxd.sdo.com/", isNewTab: true },
	{ category: "quicklinks", name: "Maplestory Global (GMS)", iconId: "gms", pageUrl: "http://maplestory.nexon.net/", isNewTab: true },
	{ category: "quicklinks", name: "Maplestory SEA (MSEA)", iconId: "msea", pageUrl: "http://www.maplesea.com/", isNewTab: true },
];

function seedHomepage() {
	Homepage.deleteMany({}, function(err) {
		console.log("All items in DB deleted");

		homepageSeeds.forEach(function(seed) {
			Homepage.create(seed, function(err, newHomepageData) {
				if(err) {
					console.log(err);
				} else {
					console.log(`Added new data (${newHomepageData.name}).`);
				}
			})
		})
	})
}

module.exports = seedHomepage;