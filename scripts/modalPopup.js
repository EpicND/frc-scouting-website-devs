var modal = document.querySelector(".modal");
var modalTrigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

var toggledFromDrawer = false;


function toggleModalFromDrawer() {
    modal.classList.toggle("show-modal");
    drawer.open = !drawer.open;
    toggledFromDrawer = !toggleModalFromDrawer;
}

function toggleModal() {
    modal.classList.toggle("show-modal");
    toggledFromDrawer = false;
}

function windowOnClick(event) {
    if (event.target === modal && toggleModalFromDrawer == false) {
        toggleModal();
    } else if(event.target === modal && toggleModalFromDrawer){
        toggleModalFromDrawer()
    }
}

modalTrigger.addEventListener("click", toggleModalFromDrawer);
closeButton.addEventListener("click", toggleModalFromDrawer);
window.addEventListener("click", windowOnClick);