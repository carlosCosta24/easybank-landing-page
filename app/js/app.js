
// if (document.readyState === 'loading'){
//     document.addEventListener('DOMContentLoaded', ready)
// }else{
//     ready();
// }


// function ready(){
//         const humbuggerButton = document.getElementById("humbuggerButton");
//         const body = document.getElementsByClassName('body')
//         humbuggerButton.addEventListener('click',()=>{
//         var menu = document.childNodes('div')
//         var dropDownMenu =`<div>
//             <span>a7a </span>
//             <span> a7ten</span>
//             <span>a7oooooooooooooo</span>
//             <span ? leeeh</span>
//             <div>`
//             menu.appendChild(dropDownMenu)
//         })
// }
const menuButton = document.getElementById("open");
const heder = document.getElementsByClassName("header")[0];
const dropDownMenu = document.getElementsByClassName("dropdown")[0];
menuButton.addEventListener("click", function changeStatus() {
    if (heder.classList.contains("open")) {
        heder.classList.remove("open");
        dropDownMenu.classList.remove("fade-in");
        dropDownMenu.classList.add("fade-out");
    } else {
        heder.classList.add("open");
        dropDownMenu.classList.remove("fade-out");
        dropDownMenu.classList.add("fade-in");


    }
});

