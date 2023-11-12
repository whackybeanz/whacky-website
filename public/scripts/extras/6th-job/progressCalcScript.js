document.addEventListener("DOMContentLoaded", function(event) {
    weeklyBossBtnListener();
})

function weeklyBossBtnListener() {
    const allBtns = document.querySelectorAll(".single-boss-btn");

    allBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            btn.classList.toggle("active");
        })
    })
}