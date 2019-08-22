$(".toggle-mode").on("click", function() {
	var modeType = $(this).data("mode");

	if(modeType === "dark-mode") {
		$("body, .table-bordered, .sidebar, .single-info-page").addClass("dark-mode");
		$(".toggle-dark").removeClass("d-flex").addClass("d-none");
		$(".toggle-light").removeClass("d-none").addClass("d-flex");
	} else {
		$("body, .table-bordered, .sidebar, .single-info-page").removeClass("dark-mode");
		$(".toggle-light").removeClass("d-flex").addClass("d-none");
		$(".toggle-dark").removeClass("d-none").addClass("d-flex");
	}
})