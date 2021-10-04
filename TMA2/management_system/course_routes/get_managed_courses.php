<?php
    $host = getenv("mysqlhost");
    $password = getenv("mysqlpass");
    $conn = new mysqli($host,"comp466",$password,"comp466");
    if ($conn -> connect_errno) {
        echo "Failed to connect to MySQL: " . $conn->connect_error;
        exit();
    }

    session_start();

    $user_id = intval($_SESSION["user"]);
    $stmt = $conn->prepare("SELECT c.id, course_title FROM courses AS c WHERE c.creator_id = ?");

    $stmt->bind_param("i", $user_id);
    $stmt->execute();
    $result = $stmt->get_result();

    while ($row = $result->fetch_assoc()) {
        echo $row['id'] . '-' . $row['course_title'],',';
    }
?>