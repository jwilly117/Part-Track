
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PHP TEST</title>
</head>
<body>

<?php
        // Connect to the database
        $connection = mysqli_connect("localhost","root","Pringles117","downtime_report");

        if ($connection){
            echo "Connection Established! <br>";
        } else{
            die("Connection Failed. Reason: ".mysqli_connect_error());
        }
?>

</body>
</html>