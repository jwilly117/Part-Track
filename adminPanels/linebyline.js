// Robot 1 
var mysql = require("mysql");

// Get database connection
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Pringles117",
    database: "parttracktest"
  });

connection.connect(function(err) {
    if(err) throw err;
    console.log("Connected to PartTrack as " + connection.threadId);
})

$("#r1").on("click", function(){

    

    $("#letsgo").html("");

    var hello = "<h1> Hello test </h1>";
    $("#letsgo").append(hello);



})