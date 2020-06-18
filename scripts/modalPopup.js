var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModalFromDrawer() {
    modal.classList.toggle("show-modal");
    drawer.open = !drawer.open;
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModalFromDrawer);
closeButton.addEventListener("click", toggleModalFromDrawer);
window.addEventListener("click", windowOnClick);