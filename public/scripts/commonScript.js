$(function() {
	$('[data-toggle="tooltip"]').tooltip();
})

$(".sidebar-btn").on("click", function() {
	var tabToShow = $(this).data("tab");

	$(".sidebar-btn").removeClass("active");
	$(this).addClass("active");

	$(".single-info-page").fadeOut();
	$(`#${tabToShow}`).css({"display": "flex"}).hide().fadeIn();
})