<?php
    $host = getenv("mysqlhost");
    $password = getenv("mysqlpass");
    $conn = new mysqli($host,"comp466",$password,"comp466");

    if ($conn -> connect_errno) {
        echo "Failed to connect to MySQL: " . $conn->connect_error;
        exit();
    }

    $username = $_GET["username"];
    $password = $_GET["password"];

    $sql = "INSERT INTO users (username, password) VALUES (?, ?)"; // SQL with parameters
    $stmt = $conn->prepare($sql); 
    $stmt->bind_param("ss", $username, $password);

    $stmt->execute();

    $result = $stmt->get_result(); // get the     $host = getenv("mysqlhost");
    $user = $result->fetch_assoc(); // fetch data   

    session_start();
    $_SESSION["user"] = $user["id"];
    $_SESSION["loggedIn"] = true;

    echo "success";

    $conn->close();
    
?>