// Function for resizing the menu on toggle when viewed in mobile
// Added necessary margins for places when the menu is toggled

window.onload = function() {
    let button = document.getElementById('button');
    let places = document.getElementById('places');
    button.addEventListener('click', function() {
        places.classList.toggle("placesMargins", 0.1);
    });
};