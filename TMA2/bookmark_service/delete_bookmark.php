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
        "DELETE FROM bookmarks WHERE user_id = ? AND url = ?"
    );

    $stmt->bind_param("ss",$username, $url);
    $stmt->execute();
?>