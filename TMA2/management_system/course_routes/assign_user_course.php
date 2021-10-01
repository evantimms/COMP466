<?php
    $conn = new mysqli("localhost:3306","root","password","comp466");
    if ($conn -> connect_errno) {
        echo "Failed to connect to MySQL: " . $conn->connect_error;
        exit();
    }

    $course_id = intval($_GET['cid']);
    $user_id = intval($_GET['uid']);

    $stmt = $conn->prepare("SELECT * FROM assigned_users WHERE user_id = ? AND course_id = ?");
    $stmt->bind_param("ii", $user_id, $course_id);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows) {
        echo "User already assigned to this course";
        return;
    }


    $stmt = $conn->prepare("INSERT INTO assigned_users (user_id, course_id) VALUES (?,?)");
    $stmt->bind_param("ii", $user_id, $course_id);
    $stmt->execute();
    
    echo "User assigned to course"
?>