
// Create a test to see if you can increment a number when 
// the button is clicked

var downtimecount = 0;
var incidents = 0;
var minutes = 0
var seconds = 0
var difference = 0;

$(".dt").on("click", function(){
    console.log("Testing");
    incidents = incidents + 45;
    seconds = incidents % 60;
    minutes = incidents - seconds;
    difference = minutes / 60;
    // minutes = incidents / 60;
    console.log(difference + " " + seconds);
    $("#time").text(difference + " M " + seconds + " S");
})

// Modals for Help

