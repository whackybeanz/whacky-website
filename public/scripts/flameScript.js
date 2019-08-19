$(function() {
	$('[data-toggle="tooltip"]').tooltip();
})

$(".sidebar-btn").on("click", function() {
	var tabToShow = $(this).data("tab");

	$(".sidebar-btn").removeClass("active");
	$(this).addClass("active");

	$(".single-info-page").fadeOut();
	$(`#flame-${tabToShow}`).css({"display": "flex"}).hide().fadeIn();
})

$(".equip-type-input").on("click", function() {
	$(".equip-type-input").removeClass("active");
	$(this).addClass("active");
})

$(".flame-type-input").on("click", function() {
	$(".flame-type-input").removeClass("active");
	$(this).addClass("active");
})

$(".stat-type-input").on("click", function() {
	$(".stat-type-input").removeClass("active");
	$(this).addClass("active");
})

$("#flame-submit-btn").on("click", function(event) {
	event.preventDefault();

	var itemLevel = Number($("#gear-level").val());
	var inputWAMA = Number($("#base-wa-ma").val());

	var pureStatsFactor = Math.floor(itemLevel/20) + 1; // Pure stats, def stats
	var mixedStatsFactor = Math.floor(itemLevel/40) + 1; // Mixed stats

	var hpMpFactor;
	if(itemLevel/10 <= 1) {
		hpMpFactor = 1;
	} else {
		hpMpFactor = Math.floor(itemLevel/10);
	}

	displayOutput(inputWAMA, pureStatsFactor, mixedStatsFactor, hpMpFactor);
})

function displayOutput(inputWAMA, pureStatsFactor, mixedStatsFactor, hpMpFactor) {
	var equipType = $(".equip-type-input.active").data("equipType");
	var flameType = $(".flame-type-input.active").data("flameType");
	var statType = $(".stat-type-input.active").data("statType");

	var normalWAMA = [1, 2.2, 3.625, 5.325, 7.3, 8.8, 10.25];
	var bossWAMA = [0, 0, 3, 4.4, 6.05, 8, 10.25];

	var typeOfWAMA;
	var minFlameTier = 0;
	var maxFlameTier = 0;

	if(equipType === "normal") {
		if(flameType === "crimson") {
			minFlameTier = 1;
			maxFlameTier = 4;
		} else if(flameType === "rainbow") {
			minFlameTier = 2;
			maxFlameTier = 5;
		}

		typeOfWAMA = normalWAMA;
	} else if(equipType === "boss") {
		if(flameType === "crimson") {
			minFlameTier = 3;
			maxFlameTier = 6;
		} else if(flameType === "rainbow") {
			minFlameTier = 4;
			maxFlameTier = 7;
		}

		typeOfWAMA = bossWAMA;
	}

	for(var i = 1; i <= 7; i++) {
		if(i < minFlameTier || i > maxFlameTier) {
			$(`.weapon-wa-ma-output.flame-tier-${i}`).text("-");
			$(`.boss-dmg-output.flame-tier-${i}`).text("-");
			$(`.pure-stats-output.flame-tier-${i}`).text("-");
			$(`.mixed-stats-output.flame-tier-${i}`).text("-");
			$(`.hp-mp-output.flame-tier-${i}`).text("-");
			$(`.all-stats-output.flame-tier-${i}`).text("-");
			$(`.damage-output.flame-tier-${i}`).text("-");
			$(`.armor-wa-ma-output.flame-tier-${i}`).text("-");
			$(`.speed-jump-output.flame-tier-${i}`).text("-");
			$(`.defense-output.flame-tier-${i}`).text("-")
			$(`.level-reduce-output.flame-tier-${i}`).text("-");
		} else {
			if(inputWAMA === 0) {
				$(`.weapon-wa-ma-output.flame-tier-${i}`).text("-");
				$(`.boss-dmg-output.flame-tier-${i}`).text("-");
			} else {
				var calculatedWAMA = Math.ceil(inputWAMA * (typeOfWAMA[i-1] * mixedStatsFactor / 100));

				if(calculatedWAMA === 0) {
					$(`.weapon-wa-ma-output.flame-tier-${i}`).text("-");
				} else {
					$(`.weapon-wa-ma-output.flame-tier-${i}`).text(calculatedWAMA);
				}
				
				$(`.boss-dmg-output.flame-tier-${i}`).text(`${2 * i}%`);
			}
			
			$(`.pure-stats-output.flame-tier-${i}`).text(pureStatsFactor * i);
			$(`.mixed-stats-output.flame-tier-${i}`).text(mixedStatsFactor * i);
			$(`.hp-mp-output.flame-tier-${i}`).text(hpMpFactor * i * 30);
			$(`.all-stats-output.flame-tier-${i}`).text(`${i}%`);
			$(`.damage-output.flame-tier-${i}`).text(`${i}%`);
			$(`.armor-wa-ma-output.flame-tier-${i}`).text(i);
			$(`.speed-jump-output.flame-tier-${i}`).text(i);
			$(`.defense-output.flame-tier-${i}`).text(pureStatsFactor * i)
			$(`.level-reduce-output.flame-tier-${i}`).text(-5 * i);
		}
	}
}