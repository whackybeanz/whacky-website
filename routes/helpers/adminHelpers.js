function getIconCategories() {
	const validIconCategories = [{ id: "equip", name: "Equips" }, { id: "use", name: "Use" }, { id: "setup", name: "Setup" }, 
	{ id: "etc", name: "ETC" }, { id: "cash", name: "Cash Item" }, { id: "map", name: "Maps" }, { id: "boss", name: "Boss Monsters" }, 
	{ id: "boss-soul", name: "Boss Souls" }]

	return validIconCategories;
}

function getPageSections() {
	const pageSections = [{ id: "homepage", name: "Homepage" }, { id: "spell-trace", name: "Spell Trace" }, { id: "flames", name: "Flames" }, 
	{ id: "potentials", name: "Potentials" }, { id: "todd", name: "Todd's Hammer" }, { id: "star-force", name: "Star Force" }, 
	{ id: "soul-weapons", name: "Soul Weapons" }, { id: "exp-stacking", name: "EXP Stacking" }, { id: "boss-crystal", name: "Boss Crystals" }];

	pageSections.sort(function(a, b) {
		let nameA = a.name.toUpperCase();
		let nameB = b.name.toUpperCase();

		if(nameA < nameB) { return -1; }
		if(nameB < nameA) { return 1; }
		return 0;
	});

	return pageSections;
}

function compileIconData(body) {
	const iconData = {
		id: body.itemID,
		itemType: body.itemType,
		name: body.itemName,
		imgUrl: body.imgPath,
	}

	if(body.itemType === "equip") {
		iconData.category = body.equipType;
	}

	if(typeof body.sections === "string") {
		iconData.usedInSections = [body.sections];
	} else {
		iconData.usedInSections = body.sections;
	}
	iconData.imgUrl = body.imgPath.join("/");

	console.log(iconData);

	return iconData;
}

module.exports = { getIconCategories, getPageSections, compileIconData };