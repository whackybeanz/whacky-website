function compileIcons(icons) {
	let compiledIcons = {};

	icons.forEach(function(icon) {
		compiledIcons[icon.id] = { name: icon.name, imgUrl: icon.imgUrl };
	})

	return compiledIcons;
}

function compileIconsByClass(icons, equips) {
	let compiledIcons = {}

	equips.forEach(function(equip) {
		let matchingIconData = icons.find(icon => icon.id === equip.id);
		compiledIcons[equip.id] = { name: matchingIconData.name, imgUrl: matchingIconData.imgUrl };
	})

	return compiledIcons;
}

module.exports = { compileIcons, compileIconsByClass };