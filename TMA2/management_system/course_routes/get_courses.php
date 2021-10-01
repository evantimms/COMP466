<?php
    $conn = new mysqli("localhost:3306","root","password","comp466");
    if ($conn -> connect_errno) {
        echo "Failed to connect to MySQL: " . $conn->connect_error;
        exit();
    }

    session_start();

    $user_id = intval($_SESSION["user"]);
    $stmt = $conn->prepare("SELECT c.id, course_title FROM courses As c JOIN assigned_users AS u WHERE c.id = u.course_id AND u.user_id = ?");

    $stmt->bind_param("i", $user_id);
    $stmt->execute();
    $result = $stmt->get_result();

    while ($row = $result->fetch_assoc()) {
        echo $row['id'] . '-' . $row['course_title'],',';
    }
?>