<?php
    $conn = new mysqli("localhost:3306","root","password","comp466");
    if ($conn -> connect_errno) {
        echo "Failed to connect to MySQL: " . $conn->connect_error;
        exit();
    }

    $course_id = intval($_GET['id']);

    $stmt = $conn->prepare("DELETE FROM courses WHERE id = ?");
    $stmt->bind_param("i", $course_id);

    $stmt->execute();
    
    echo "Course deleted!"
?>