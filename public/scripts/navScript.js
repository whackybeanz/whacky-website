$(".toggle-mode").on("click", function() {
	var modeType = $(this).data("mode");

	if(modeType === "dark-mode") {
		$("body, .form-control, .table-bordered, .sidebar, .single-info-page, .radio-select").addClass("dark-mode");
		$(".navbar").removeClass("navbar-light bg-light").addClass("navbar-dark bg-dark");
		$(".table-bordered").addClass("table-dark");
		$(".toggle-dark").removeClass("d-flex").addClass("d-none");
		$(".toggle-light").removeClass("d-none").addClass("d-flex");
	} else {
		$("body, .form-control, .table-bordered, .sidebar, .single-info-page, .radio-select").removeClass("dark-mode");
		$(".navbar").removeClass("navbar-dark bg-dark").addClass("navbar-light bg-light");
		$(".table-bordered").removeClass("table-dark");
		$(".toggle-light").removeClass("d-flex").addClass("d-none");
		$(".toggle-dark").removeClass("d-none").addClass("d-flex");
	}
})