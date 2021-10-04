<?php
    $host = getenv("mysqlhost");
    $password = getenv("mysqlpass");
    $conn = new mysqli($host,"comp466",$password,"comp466");

    if ($conn -> connect_errno) {
        echo "Failed to connect to MySQL: " . $conn->connect_error;
        exit();
    }

    session_start();

    $url = $_GET["url"];
    $username = intval($_SESSION["user"]);
    
    $stmt = $conn->prepare(
        "INSERT INTO bookmarks (url, user_id) VALUES (?, ?)"
    );

    $stmt->bind_param("si",$url, $username);
    $stmt->execute();

?>