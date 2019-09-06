$(".toggle-mode").on("click", function() {
	var modeType = $(this).data("mode");

	if(modeType === "dark-mode") {
		$(`body, .sidebar, .single-info-page, .modal, 
			.table-bordered, .form-control, .radio-select, .job-choice-div, .set-item-effect-div`).addClass("dark-mode");
		$(".navbar").removeClass("navbar-light bg-light").addClass("navbar-dark bg-dark");
		$(".table-bordered").addClass("table-dark");
		$(".toggle-dark").removeClass("d-flex").addClass("d-none");
		$(".toggle-light").removeClass("d-none").addClass("d-flex");
	} else {
		$(`body, .sidebar, .single-info-page, .modal,
			.table-bordered, .form-control, .radio-select, .job-choice-div, .set-item-effect-div`).removeClass("dark-mode");
		$(".navbar").removeClass("navbar-dark bg-dark").addClass("navbar-light bg-light");
		$(".table-bordered").removeClass("table-dark");
		$(".toggle-light").removeClass("d-flex").addClass("d-none");
		$(".toggle-dark").removeClass("d-none").addClass("d-flex");
	}
})