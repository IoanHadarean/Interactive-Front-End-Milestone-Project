$(document).ready(function() {
    $("button").click(function() {
        $("#map").toggleClass("addMargins");
        $("#controls").toggleClass("removeMargins");
        $("#locationField").toggleClass("removeMargins");
        $("#listing").toggleClass("removeMargins");
    });
});