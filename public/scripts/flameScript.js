$(".equip-type-input").on("click", function() {
	$(".equip-type-input").removeClass("active");
	$(this).addClass("active");
})

$("#flame-submit-btn").on("click", function(event) {
	event.preventDefault();

	var normalWAMA = [1, 2.2, 3.65, 5.35, 7.3, 8.8, 10.25];
	var bossWAMA = [0, 0, 3, 4.4, 6.05, 8, 10.25];

	var itemLevel = Number($("#gear-level").val());
	var weaponWAMA = Number($("#base-wa-ma").val());

	var pureStatsFactor = Math.floor(itemLevel/20) + 1; // Pure stats, def stats
	var mixedStatsFactor = Math.floor(itemLevel/40) + 1; // Mixed stats

	var hpMpFactor;
	if(itemLevel/10 <= 1) {
		hpMpFactor = 1;
	} else {
		hpMpFactor = Math.floor(itemLevel/10);
	}

	for(var i = 1; i <= 7; i++) {
		// Pure Stats
		$(`.pure-stats-output.flame-tier-${i}`).text(pureStatsFactor * i);

		// Mixed Stats
		$(`.mixed-stats-output.flame-tier-${i}`).text(mixedStatsFactor * i);

		// HP/MP
		$(`.hp-mp-output.flame-tier-${i}`).text(hpMpFactor * i * 30);

		// Others
		if(weaponWAMA === 0) {
			$(`.weapon-wa-ma-output.flame-tier-${i}`).text("-");
			$(`.boss-dmg-output.flame-tier-${i}`).text("-");
		} else {
			var calculatedWAMA = Math.ceil(weaponWAMA * (bossWAMA[i-1] * mixedStatsFactor / 100));

			if(calculatedWAMA === 0) {
				$(`.weapon-wa-ma-output.flame-tier-${i}`).text("-");
			} else {
				$(`.weapon-wa-ma-output.flame-tier-${i}`).text(calculatedWAMA);
			}
			
			$(`.boss-dmg-output.flame-tier-${i}`).text(`${2 * i}%`);
		}
		
		$(`.all-stats-output.flame-tier-${i}`).text(`${i}%`);
		$(`.damage-output.flame-tier-${i}`).text(`${i}%`);
		$(`.armor-wa-ma-output.flame-tier-${i}`).text(i);
		$(`.speed-jump-output.flame-tier-${i}`).text(i);
		$(`.defense-output.flame-tier-${i}`).text(pureStatsFactor * i)
		$(`.level-reduce-output.flame-tier-${i}`).text(-5 * i);
	}
})