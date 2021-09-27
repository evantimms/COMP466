<?php
    $conn = new mysqli("localhost:3306","root","password","comp466");
    if ($conn -> connect_errno) {
        echo "Failed to connect to MySQL: " . $conn->connect_error;
        exit();
    }

    session_start();

    $username = intval($_SESSION["user"]);
    $stmt = $conn->prepare(
        "SELECT url
        FROM bookmarks
        WHERE user_id = ?"
    );

    $stmt->bind_param("i", $username);
    $stmt->execute();
    $result = $stmt->get_result();
    
    while ($row = $result->fetch_assoc()) {
        echo $row['url'],',';
    }
?>