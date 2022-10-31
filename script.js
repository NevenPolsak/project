const hamburger = document.querySelector(".burger");
const navMenu = document.querySelector("nav");
const logo = document.querySelector("nav .logo");
const list = document.querySelector("nav ul");

hamburger.addEventListener("click",mobileMenu)

function mobileMenu(){ 
  navMenu.classList.toggle("beforeNav")
  list.classList.toggle("invisible");
  logo.classList.toggle("invisible");
  
}


 


