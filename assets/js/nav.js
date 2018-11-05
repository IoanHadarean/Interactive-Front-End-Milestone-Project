// Function for resizing the menu on toggle when viewed in mobile
// Adds necessary margins for controls, locationField, listing and 
// places when the menu is toggled

$(document).ready(function() {
    $("#button").click(function() {
        $("#controls").toggleClass("newMargins", 0.1);
        $("#locationField").toggleClass("newMargins", 0.1);
        $("#listing").toggleClass("newMargins", 0.1);
        $("#placestoggle").toggleClass("placesMargins", 0.1);
    });
});