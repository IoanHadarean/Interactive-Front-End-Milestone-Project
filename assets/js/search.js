/* global clearMarkers */


// Declare HTML elements
let autoComplete = document.getElementById('autocomplete');
let country = document.getElementById('country');
let radioButtons = document.querySelectorAll('input[type="radio"]');
let radioButtonsArray = Array.from(radioButtons);

// Function for clearing out the location field when a new country is selected
country.addEventListener('change', () => {
    autoComplete.value = '';
});

// Function for disabling radio buttons when the location field is empty
autoComplete.addEventListener('input', function() {
    if (autoComplete.value.length > 0 ) {
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
