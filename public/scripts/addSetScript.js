var numEquippedCount = 1;

$(".add-count-btn").on("click", function() {
	numEquippedCount++;

	var html = `<div class="form-group row set-effect-input-div" data-num-equipped="${numEquippedCount}">
					<label for="set-effects" class="col-sm-3 col-form-label">${numEquippedCount} pieces equipped</label>
					<div class="set-effect-container col-sm-9 px-0 d-flex align-items-center flex-wrap" data-num-equipped=${numEquippedCount}>
						<div class="w-50 d-flex px-3">
							<div class="add-set-effect-btn btn btn-small btn-outline-secondary col-10 d-flex justify-content-center align-items-center cursor-pointer py-1 px-0" data-num-equipped=${numEquippedCount}>
								<i class="fas fa-plus"></i>
							</div>
						</div>
					</div>
				</div>`;

	$(".num-equipped-container").append(html);
	$("#num-set-effects").val(numEquippedCount);
})

$(".num-equipped-container").on("click", ".add-set-effect-btn", function() {
	var numEquippedCount = $(this).data("numEquipped");

	var html = `<div class="single-effect w-50 d-flex px-3 mb-2">
					<select class="font-small form-control select-dropdown col-6" name="${numEquippedCount}SetEffectType">
						<option value="str">STR</option>
						<option value="dex">DEX</option>
						<option value="int">INT</option>
						<option value="luk">LUK</option>
						<option value="allStats">All Stats</option>
						<option value="maxHp">Max HP</option>
						<option value="maxMp">Max MP</option>
						<option value="maxHpMp">Max HP/MP</option>
						<option value="maxHpMpPercent">Max HP/MP %</option>
						<option value="def">DEF</option>
						<option value="acc">Accuracy</option>
						<option value="avoid">Avoidability</option>
						<option value="wa">WA</option>
						<option value="ma">MA</option>
						<option value="wama">WA/MA</option>
						<option value="damagePercent">Damage %</option>
						<option value="bossPercent">Boss %</option>
						<option value="iedPercent">IED %</option>
						<option value="critDmgPercent">Crit Damage %</option>
					</select>
					<div class="col-4">
						<input type="number" class="font-small form-control" placeholder="value" name="${numEquippedCount}SetEffectValue">
					</div>
				</div>`;

	$(html).insertBefore($(this).parent());
})