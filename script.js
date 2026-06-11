// BACK TO TOP

const topBtn = document.getElementById("topBtn");

topBtn.onclick = function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// HAMBURGER MENU

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {

navLinks.classList.toggle("active");

});



// BACK TO TOP BUTTON

const topBtn = document.getElementById("topBtn");

topBtn.onclick = () => {

window.scrollTo({

top:0,

behavior:"smooth"

});

};

