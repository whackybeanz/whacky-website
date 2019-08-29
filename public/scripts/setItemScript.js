$(".equip-choice").on("click", function() {
	$(".hat-choice").removeClass("active");
	$(this).addClass("active");

	var choiceImage = $(this).data("choiceImg");

	$("#hat-slot").css("background-image", `url("/images/equips/${choiceImage}.png")`);
})