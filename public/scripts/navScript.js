document.addEventListener("DOMContentLoaded", function(event) {
    const toggleBtns = document.querySelectorAll(".toggle-mode");
    const pageDisplayType = localStorage.getItem("pageDisplayType");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    updateButtonDisplay(pageDisplayType);

    // Overrides system preferences when clicked
    // Toggle the opposing theme and set the appropriate theme based on presence/absence of toggled theme
    toggleBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            if (prefersDarkScheme.matches) {
                document.documentElement.classList.toggle("light-mode");
                document.body.classList.toggle("light-mode");
                var theme = document.body.classList.contains("light-mode") ? "light" : "dark";
            } else {
                document.documentElement.classList.toggle("dark-mode");
                document.body.classList.toggle("dark-mode");
                var theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
            }

            updateButtonDisplay(theme);
            localStorage.setItem("pageDisplayType", theme);
        })
    })

    function updateButtonDisplay(displayType) {
        let toggleDarkBtn = document.querySelector(".toggle-dark");
        let toggleLightBtn = document.querySelector(".toggle-light");
        let navBar = document.querySelector(".navbar");
        let tableBordered = document.querySelector(".table-bordered");

        if(displayType === "dark" || displayType === null) {
            document.documentElement.classList.remove("light-mode");
            document.documentElement.classList.add("dark-mode");
            document.body.classList.remove("light-mode");
            document.body.classList.add("dark-mode");
            toggleDarkBtn.classList.remove("d-flex");
            toggleDarkBtn.classList.add("d-none");
            toggleLightBtn.classList.remove("d-none");
            toggleLightBtn.classList.add("d-flex");
            navBar.classList.remove("navbar-light", "bg-light");
            navBar.classList.add("navbar-dark", "bg-dark")
        } else {
            document.documentElement.classList.add("light-mode");
            document.documentElement.classList.remove("dark-mode");
            document.body.classList.add("light-mode");
            document.body.classList.remove("dark-mode");
            toggleLightBtn.classList.remove("d-flex");
            toggleLightBtn.classList.add("d-none");
            toggleDarkBtn.classList.remove("d-none");
            toggleDarkBtn.classList.add("d-flex");
            navBar.classList.remove("navbar-dark", "bg-dark");
            navBar.classList.add("navbar-light", "bg-light");
        }
    }
})