<?php
    $conn = new mysqli("localhost:3306","root","password","comp466");
    if ($conn -> connect_errno) {
        echo "Failed to connect to MySQL: " . $conn->connect_error;
        exit();
    }

    session_start();

    $user_id = intval($_SESSION['user']);
    $filename = $_FILES['file']['name'];
    $contents = file_get_contents($_FILES['file']['tmp_name']);

    try {
        $xml = simplexml_load_string($contents);
        $course_name = $xml['name'];
        $stmt = $conn->prepare("INSERT INTO courses (course_title, content) VALUES (?, ?)");
        $stmt->bind_param("ss", $course_name, $contents);
        $stmt->execute();
        $course_id = $conn->insert_id;
        $stmt = $conn->prepare("INSERT INTO assigned_users (course_id, user_id) VALUES (?, ?)");
        $stmt->bind_param("ii", $course_id, $user_id);
        $stmt->execute();

        echo "File successfully Uploaded";
    } catch (Error $e) {
        echo $e;
    } catch (Exception $e) {
        echo $e;
    }
?>