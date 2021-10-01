<?php
    $conn = new mysqli("localhost:3306","root","password","comp466");
    if ($conn -> connect_errno) {
        echo "Failed to connect to MySQL: " . $conn->connect_error;
        exit();
    }

    session_start();

    $user_id = intval($_SESSION["user"]);
    $stmt = $conn->prepare("SELECT id,username FROM users");

    $stmt->execute();
    $result = $stmt->get_result();

    while ($row = $result->fetch_assoc()) {
        if ($row['id'] !== $user_id) {
            echo $row['id'] . '-' . $row['username'],',';
        }
    }
?>