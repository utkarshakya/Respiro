// Mobile Navigation Menu
const closeMenu = document.querySelector("#closeMenu");
const mobileMenu = document.querySelector("#mobileMenu");
const openMenu = document.querySelector("#openMenu");
closeMenu.addEventListener("click", (e)=>{
    e.preventDefault();
    mobileMenu.classList.toggle("-translate-x-full");
})
openMenu.addEventListener("click", (e)=>{
    e.preventDefault();
    mobileMenu.classList.toggle("-translate-x-full");
})