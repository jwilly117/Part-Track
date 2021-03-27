var firebaseConfig = {
    apiKey: "AIzaSyCNgQru6L-VJT5C9y8Cl47GtVH2DNmo2Yk",
    authDomain: "part-track-demo.firebaseapp.com",
    projectId: "part-track-demo",
    storageBucket: "part-track-demo.appspot.com",
    messagingSenderId: "497244549101",
    appId: "1:497244549101:web:afb5f178b7f25ff2dc81e4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//  ===================================================================
// Here we capture the counters
var database = firebase.database();


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
    database.ref("/downtime").push("Tip Change");

})



// Modals for Help

