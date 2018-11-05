$(document).ready(function() {
    $("#button").click(function() {
        $("#controls").toggleClass("newMargins", 0.1);
        $("#locationField").toggleClass("newMargins", 0.1);
        $("#listing").toggleClass("newMargins", 0.1);
        $("#placestoggle").toggleClass("placesMargins", 0.1);
    });
});