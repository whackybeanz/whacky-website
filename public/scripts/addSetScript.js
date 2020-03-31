var numEquippedCount = 1;

$(".add-count-btn").on("click", function() {
	numEquippedCount++;

	var html = `<div class="form-group row set-effect-input-div" data-num-equipped="${numEquippedCount}">
					<label for="set-effects" class="col-sm-3 col-form-label">${numEquippedCount} pieces equipped</label>
					<div class="set-effect-container col-sm-9 px-0 d-flex align-items-start flex-wrap">
						<div class="w-50 d-flex px-3 mb-2">
							<div class="add-set-effect-btn btn btn-small btn-outline-secondary col-10 d-flex justify-content-center align-items-center py-1 px-0">
								<i class="fas fa-plus"></i>
							</div>
						</div>
					</div>
				</div>`;

	$(".num-equipped-container").append(html);
})

$(".num-equipped-container").on("click", ".add-set-effect-btn", function() {
	var html = `<div class="w-50 d-flex px-3 mb-2">
					<select class="font-small form-control select-dropdown col-6">
						<option data-stat-type="str">STR</option>
						<option data-stat-type="dex">DEX</option>
						<option data-stat-type="int">INT</option>
						<option data-stat-type="luk">LUK</option>
						<option data-stat-type="allStats">All Stats</option>
						<option data-stat-type="maxHp">Max HP</option>
						<option data-stat-type="maxMp">Max MP</option>
						<option data-stat-type="maxHpMp">Max HP/MP</option>
						<option data-stat-type="maxHpMpPercent">Max HP/MP %</option>
						<option data-stat-type="def">DEF</option>
						<option data-stat-type="acc">Accuracy</option>
						<option data-stat-type="avoid">Avoidability</option>
						<option data-stat-type="wa">WA</option>
						<option data-stat-type="ma">MA</option>
						<option data-stat-type="wama">WA/MA</option>
						<option data-stat-type="damagePercent">Damage %</option>
						<option data-stat-type="bossPercent">Boss %</option>
						<option data-stat-type="iedPercent">IED %</option>
						<option data-stat-type="critDmgPercent">Crit Damage %</option>
					</select>
					<div class="col-4">
						<input type="number" class="font-small form-control" placeholder="value">
					</div>
				</div>`;

	$(html).insertBefore($(this).parent());
})