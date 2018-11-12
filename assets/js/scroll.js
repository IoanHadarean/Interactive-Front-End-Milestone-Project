window.onscroll = function() {scroll()};
var navbar = document.getElementById("navbar");
var navbarFixed = navbar.offsetTop;

function scroll() {
    if(window.pageYOffset >= navbarFixed) {
       navbar.classList.add("navbarFixed");
       $("#places").removeClass("placesMargins");
    } else {
       navbar.classList.remove("navbarFixed");
    }
}