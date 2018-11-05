//Function for filtering the radio buttons by type checked

$(document).ready(function() {
    var $radio = $('input[name="option"]');
    //Output the value of each input of type radio
    console.log($radio);
    $radio.change(function() {
        var $checked = $radio.filter(function() {
            return $(this).prop('checked');
        });
        // Output the value of the checked radio
        console.log($checked.val());
    });
});
