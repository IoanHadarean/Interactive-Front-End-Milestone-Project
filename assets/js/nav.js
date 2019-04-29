// Function for resizing the menu on toggle when viewed in mobile
// Added necessary margins for places when the menu is toggled

window.onload = function() {
    let button = document.getElementById('button');
    let places = document.getElementById('places');
    let navbar = document.getElementById('navbar');
    button.addEventListener('click', function() {
        if (!navbar.classList.contains('in')) {
            places.style.marginTop = '45px';
        }
        else {
            places.style.marginTop = '0px';
        }
    });
};
