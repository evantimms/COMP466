<?php include 'shared/auth.php';?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../shared/main.css">
    <link rel="stylesheet" href="ms.css">
    <script type="text/javascript" src="js/manage.js"></script>
    <title>Assignment 2</title>
</head>
<body>
    <div class="main">
        <div class="navbar">
            <div class="title">Learning Management System</div>
            <div class="links">
                <a class="link" href="../tma2.php">Home</a>
                <a class="link" href="../bookmark_service/">Bookmark Service</a>
            </div>
        </div>
        <div class="sub-nav">
            <div class="links">
                <a class="link sublink" href="index.php">Home</a>
                <a class="link sublink" href="upload.php">Upload</a>
                <a  class="link sublink active" href="manage.php">Manage Courses</a>
            </div>
        </div>
        <div class="content">
            <div class="course-list-container">
                <h2>Manage Courses</h2>
                <div><i>Click on a course to view it. Clicking on a course will load a seperate window.</i></div>
                <ul class="course-list">
                    <!-- <li class="course-manager">
                        <h4>Course 1</h4>
                        <div class="course-controls">
                            <button id="assign-user">Assign to User</button>
                            <select>
                                <option>fuckknuckles</option>
                            </select>
                            <button id="delete">Delete</button>
                        </div>
                    </li>
                    <li class="course-manager">
                        <h4>Course 2</h4>
                        <div class="course-controls">
                            <button id="assign-user">Assign to User</button>
                            <select>
                                <option>fuckknuckles</option>
                            </select>
                            <button id="delete">Delete</button>
                        </div>
                    </li> -->
                </ul>
            </div>
        </div>
    </div>
</body>
</html>