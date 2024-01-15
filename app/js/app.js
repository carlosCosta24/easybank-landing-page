const menuButton = document.getElementById("open");
const headerMenu = document.getElementsByClassName("header__menu")[0];
const heder = document.getElementsByClassName("header")[0];
const dropDownMenu = document.getElementsByClassName("dropdown")[0];
menuButton.addEventListener("click", function changeStatus() {
    if (heder.classList.contains("open")) {
        heder.classList.remove("open");
        dropDownMenu.classList.remove("fade-in");
        dropDownMenu.classList.add("fade-out");
        headerMenu.style.visibility = "hidden"
    } else {
        heder.classList.add("open");
        headerMenu.style.visibility = "visible"
        dropDownMenu.classList.add("fade-in");
        dropDownMenu.classList.remove("fade-out");
    }
});
dropDownMenu.addEventListener('click', () => {
    if ("fade-in") {
        heder.classList.remove("open");
        dropDownMenu.classList.remove("fade-in");
        headerMenu.style.visibility = "hidden";
        dropDownMenu.classList.add("fade-out");
    }
});

window.addEventListener("scroll", () => {
    if ("fade-in") {
        heder.classList.remove("open");
        dropDownMenu.classList.remove("fade-in");
        headerMenu.style.visibility = "hidden";
        dropDownMenu.classList.add("fade-out");
    }
})


