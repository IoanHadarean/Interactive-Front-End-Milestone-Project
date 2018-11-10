//Function for filtering the radio buttons by type checked

$(document).ready(function() {
    var $radio = $('input[name="option"]');
    //Output the value of each input of type radio
    console.log($(this).val());
    $radio.change(function() {
        var $checked = $radio.filter(function() {
            return $(this).prop('checked');
        });
        // Output the value of the checked radio
        console.log($checked.val());
    });
    
    // Function for clearing out the location field when a new country is selected
    const autoComplete = document.querySelector("#autocomplete");
    const country = document.querySelector('#country');
    country.addEventListener('change', () => {
        autoComplete.value = '';
    });
});
