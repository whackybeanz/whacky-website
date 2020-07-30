var mongoose = require("mongoose");
var Homepage = require("./models/homepageData");

var homepageSeeds = [
	{ category: "beginner", name: "Spell Trace / Scrolls", imgUrl: "./public/images/items/spell-trace.png", pageUrl: "./maple/newbies/equip-guide/spell-trace" },
	{ category: "beginner", name: "Star Force", imgUrl: "./public/images/items/star-chair.png", pageUrl: "./maple/newbies/equip-guide/star-force" },
	{ category: "beginner", name: "Potentials / Cubes", imgUrl: "./public/images/items/cube-pc.png", pageUrl: "./maple/newbies/equip-guide/potentials" },
	{ category: "beginner", name: "Bonus Stats / Flames", imgUrl: "./public/images/flames/flame-crimson.png", pageUrl: "./maple/newbies/equip-guide/flames" },
	{ category: "beginner", name: "Soul Weapons", imgUrl: "./public/images/souls/soul-magnus.png", pageUrl: "./maple/newbies/equip-guide/soul-weapons" },
	{ category: "beginner", name: "Set Effects / Lucky Items", imgUrl: "./public/images/equips/hat/chaos-bellum.png", pageUrl: "./maple/newbies/equip-guide/set-effects" },
	{ category: "beginner", name: "Todd's Hammer", imgUrl: "./public/images/guide/todd-icon.png" , pageUrl: "./maple/newbies/equip-guide/todd-hammer"},

	{ category: "extras", name: "Flame Stats", imgUrl: "./public/images/flames/flame-crimson.png", pageUrl: "./maple/extras/flames", isCalculator: true },
	{ category: "extras", name: "Set Effects", imgUrl: "./public/images/equips/hat/chaos-bellum.png", pageUrl: "./maple/extras/set-effects", isCalculator: true },
	{ category: "extras", name: "Boss Crystal Prices", imgUrl: "./public/images/items/boss-crystal.png", pageUrl: "./maple/extras/boss-crystal", isInfoSheet: true },
	{ category: "extras", name: "Soul Tier List", imgUrl: "./public/images/souls/soul-magnus.png", pageUrl: "./maple/extras/soul-tier-list", isInfoSheet: true },
	{ category: "extras", name: "Todding Sequence", imgUrl: "./public/images/guide/todd-icon.png", pageUrl: "./maple/extras/todd-sequence", isInfoSheet: true },

	{ category: "moreMaple", name: "Tactical Relay", imgUrl: "./public/images/items/tactical-relay-v1.png", pageUrl: "./maple/events/tactical-relay", isEvent: true },
	{ category: "moreMaple", name: "Crossword", pageUrl: "./maple/fun/crossword", isFunCorner: true },

	{ category: "others", name: "StrategyWiki", pageUrl: "https://strategywiki.org/wiki/MapleStory", isNewTab: true },
	{ category: "others", name: "MapleWiki", pageUrl: "https://maplestory.fandom.com/wiki/MapleStory", isNewTab: true },
	{ category: "others", name: "Dexless.com", pageUrl: "https://dexless.com/", isNewTab: true },
	{ category: "others", name: "Maplestory Reddit", pageUrl: "https://www.reddit.com/r/Maplestory/", isNewTab: true },
	{ category: "others", name: "Maplestory Inven", pageUrl: "http://m.inven.co.kr/maple/", isNewTab: true },
	{ category: "others", name: "Namu Wiki", pageUrl: "https://namu.wiki/w/%EB%B6%84%EB%A5%98:%EB%A9%94%EC%9D%B4%ED%94%8C%EC%8A%A4%ED%86%A0%EB%A6%AC", isNewTab: true },

	{ category: "quicklinks", name: "Maplestory Korea (KMS)", imgUrl: "./public/images/logos/kms.png", pageUrl: "https://maplestory.nexon.com/", isNewTab: true },
	{ category: "quicklinks", name: "Maplestory Korea Test Server (KMST)", imgUrl: "./public/images/logos/kms.png", pageUrl: "https://maplestory.nexon.com/Testworld/Main", isNewTab: true },
	{ category: "quicklinks", name: "Maplestory Japan (JMS)", imgUrl: "./public/images/logos/jms.png", pageUrl: "https://maplestory.nexon.co.jp/", isNewTab: true },
	{ category: "quicklinks", name: "Maplestory Taiwan (TMS)", imgUrl: "./public/images/logos/tms.png", pageUrl: "https://tw.beanfun.com/maplestory/main.aspx", isNewTab: true },
	{ category: "quicklinks", name: "Maplestory China (CMS)", imgUrl: "./public/images/logos/cms.png", pageUrl: "http://mxd.sdo.com/", isNewTab: true },
	{ category: "quicklinks", name: "Maplestory Global (GMS)", imgUrl: "./public/images/logos/gms.png", pageUrl: "http://maplestory.nexon.net/", isNewTab: true },
	{ category: "quicklinks", name: "Maplestory SEA (MSEA)", imgUrl: "./public/images/logos/msea.png", pageUrl: "http://www.maplesea.com/", isNewTab: true },

	{ category: "default", name: "Default Image", imgUrl: "./public/images/items/leaf-book.png" },
];

function seedHomepage() {
	homepageSeeds.forEach(function(seed) {
		Homepage.create(seed, function(err, newHomepageData) {
			if(err) {
				console.log(err);
			} else {
				console.log(`Added new data (${newHomepageData.name}).`);
			}
		})
	})
}

function seedData() {
	Homepage.deleteMany({}, function(err) {
		console.log("All items in DB deleted");
		seedHomepage();
	})
}

module.exports = seedData;