var modal = document.querySelector(".modal");
var modalTrigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

var toggledFromDrawer = false;


function toggleModalFromDrawer() {
    if(checkAuthState()){
    modal.classList.remove("show-modal")
    } else {
    ui.start('#fb-login-ui', uiConfig);
    modal.classList.toggle("show-modal");
    drawer.open = !drawer.open;
    toggledFromDrawer = !toggleModalFromDrawer;
    }
}

function toggleModal() {
    if(checkAuthState()){
    modal.classList.remove("show-modal")
    } else {
    modal.classList.toggle("show-modal");
    toggledFromDrawer = false;
    }
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