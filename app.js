function hamOpen() {
    const cross = document.querySelector(".closeMenu")
    const bars = document.querySelector(".hamburgerMenu")
    const resMenu = document.querySelector(".responsiveMenu")
    cross.style.display = "block";
    bars.style.display = "none";
    resMenu.style.display = "block";

}

function hamClose() {
    const cross = document.querySelector(".closeMenu")
    const bars = document.querySelector(".hamburgerMenu")
    const resMenu = document.querySelector(".responsiveMenu")
    cross.style.display = "none";
    bars.style.display = "block";
    resMenu.style.display = "none";

}