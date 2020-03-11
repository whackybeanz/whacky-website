$(function() {
	var pageDisplayType = localStorage.getItem("pageDisplayType");

	if(pageDisplayType !== null) {
		setMode(pageDisplayType);
	}
})

$(".toggle-mode").on("click", function() {
	var modeType = $(this).data("mode");

	if(modeType === "dark-mode") {
		localStorage.setItem("pageDisplayType", "dark");
		setMode("dark");
	} else {
		localStorage.setItem("pageDisplayType", "light");
		setMode("light");
	}
})

function setMode(displayType) {
	if(displayType === "dark") {
		$(`body`).addClass("dark-mode");
		$(".navbar").removeClass("navbar-light bg-light").addClass("navbar-dark bg-dark");
		$(".table-bordered").addClass("table-dark");
		$(".toggle-dark").removeClass("d-flex").addClass("d-none");
		$(".toggle-light").removeClass("d-none").addClass("d-flex");
	} else {
		$(`body`).removeClass("dark-mode");
		$(".navbar").removeClass("navbar-dark bg-dark").addClass("navbar-light bg-light");
		$(".table-bordered").removeClass("table-dark");
		$(".toggle-light").removeClass("d-flex").addClass("d-none");
		$(".toggle-dark").removeClass("d-none").addClass("d-flex");
	}
}