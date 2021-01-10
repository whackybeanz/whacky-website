const uiElemArr = Array.from(document.querySelectorAll(".soul-ui"));

uiElemArr.forEach(function(elem) {
    elem.addEventListener("click", function() {
        if(!this.classList.contains("active")) {
            swapDisplay(this.parentNode.parentNode);    
        }
    })
})

function swapDisplay(parentNode) {
    const uiElemArrToUpdate = document.querySelectorAll(`#${parentNode.id} .soul-ui-div .soul-ui`);
    const captionElemArrToUpdate = document.querySelectorAll(`#${parentNode.id} .soul-caption-img`)

    // Swap display of highlighted UI and image
    uiElemArrToUpdate.forEach(function(elem) {
        elem.classList.toggle("active");
    });

    captionElemArrToUpdate.forEach(function(elem) {
        elem.classList.toggle("d-none");
    })
}