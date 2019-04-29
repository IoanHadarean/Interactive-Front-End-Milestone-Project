/* global clearMarkers */

window.onload = function() {
    // Declare HTML elements
    let autoComplete = document.querySelector("#autocomplete");
    let country = document.querySelector('#country');
    let radioButtons = document.querySelectorAll('input[type="radio"]');

    // Function for clearing out the location field when a new country is selected
    country.addEventListener('change', () => {
        autoComplete.value = '';
    });

    // Function for disabling radio buttons when the location field is empty
    autoComplete.addEventListener('input', function(e) {
        let radioButtonsArray = Array.from(radioButtons);
        if (autoComplete.value.length > 0) {
            for (var i = 0; i < radioButtonsArray.length; i++) {
                radioButtonsArray[i].disabled = false;
            }
        }
        else {
            for (var i = 0; i < radioButtonsArray.length; i++) {
                radioButtonsArray[i].disabled = true;
            }
        }
    });

    // Function for clearing markers when another country is selected

    country.addEventListener('click', function() {
        clearMarkers();
    });
};
