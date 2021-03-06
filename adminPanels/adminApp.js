

// Database read Code
// var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Pringles117",
  database: "downtime_report"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
  });

  function afterConnection() {
    connection.query("SELECT * FROM downtime", function(err, res) {
      if (err) throw err;
      console.log(res);
      connection.end();
    });
  }


  // Now we just need to write this stuff to a webpage

