let navbar = document.querySelector('.header .navbar');
var oneCard = document.querySelector("#oneCard");
var twoCard = document.querySelector("#twoCard");
var threeCard = document.querySelector("#threeCard");
var fourCard = document.querySelector( "#fourCard"); 

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

oneCard.addEventListener("click", function() {
    oneCard.classList.toggle("is-flipped");
});

twoCard.addEventListener("click", function() {
    twoCard.classList.toggle("is-flipped");
});

threeCard.addEventListener("click", function() {
    threeCard.classList.toggle("is-flipped");
});

fourCard.addEventListener("click", function() {
    fourCard.classList.toggle("is-flipped");
});









