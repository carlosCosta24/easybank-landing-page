const menuButton = document.getElementById("open");
const headerMenu = document.querySelector(".header__menu");
const header = document.querySelector(".header");
const dropDownMenu = document.querySelector(".dropdown");

menuButton.addEventListener("click", function changeStatus() {
    if (header.classList.contains("open")) {
        header.classList.remove("open");
        dropDownMenu.classList.remove("fade-in");
        dropDownMenu.classList.add("fade-out");
        window.removeEventListener('scroll', prevent);

    } else {
        header.classList.add("open");
        headerMenu.style.visibility = "visible"
        dropDownMenu.classList.add("fade-in");
        dropDownMenu.classList.remove("fade-out");
        window.addEventListener('scroll', prevent);
    }


});
const prevent = () => {
    window.scrollTo(0, 0)
}
//hover effect on social links
const img = document.querySelectorAll('.footer__logo')
console.log(img)

