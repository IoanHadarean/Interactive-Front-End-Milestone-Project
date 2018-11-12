window.onscroll = function() {scroll()};
var nav = document.getElementById("nav");
var navbarFixed = navbar.offsetTop;

function scroll() {
    if(window.pageYOffset >= navbarFixed) {
       nav.classList.add("navbarFixed");
    } else {
       nav.classList.remove("navbarFixed");
    }
}