$(document).ready(function() {
    $("#button").click(function() {
        $("#map").toggleClass("addMargins", 0.1);
        $("#controls").toggleClass("removeMargins", 0.1);
        $("#locationField").toggleClass("removeMargins", 0.1);
        $("#listing").toggleClass("removeMargins", 0.1);
    });
});