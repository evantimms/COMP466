<?php include '../../shared/auth.php';?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../shared/main.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet">
    <title>Assignment 1</title>
</head>
<body>
    <div class="main">
        <div class="navbar">
            <div class="title">COMP 466 Assignment 2</div>
            <div class="links">
                <a class="link" href="bookmark_service/">Bookmark Service</a>
                <a class="link" href="management_system/">Management System</a>
                <a class="link" href="shared/logout.php">Logout</a>
            </div>
        </div>
        <?php
            include '../parser.php';
            $conn = new mysqli("localhost:3306","root","password","comp466");
            if ($conn -> connect_errno) {
                echo "Failed to connect to MySQL: " . $conn->connect_error;
                exit();
            }
        
            $user_id = intval($_SESSION["user"]);
            $course_id = $_GET["id"];

            $stmt = $conn->prepare("SELECT content FROM courses As c JOIN assigned_users AS u WHERE c.id = u.course_id AND u.user_id = ? AND c.id = ?");

            $stmt->bind_param("ii", $user_id, $course_id);
            try {
                $stmt->execute();
                $res = $stmt->get_result();
                if ($res) {
                    $xml_string = $res->fetch_assoc()["content"];
                    parse($xml_string);
                } else {
                    echo "This course does not exist or you may not have access to it";
                }
            } catch (Error $e) {
                echo "Unable to load course. Error has occured.";
            }
            
        ?>
    </div>
</body>
</html>