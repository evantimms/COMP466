<?php include 'shared/auth.php';?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="shared/main.css">
    <link rel="stylesheet" href="ms.css">
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
                <a class="link sublink active" href="upload.php">Upload</a>
                <a  class="link sublink" href="manage.php">Manage Courses</a>
            </div>
        </div>
        <div class="content">
            <div class="upload-container">
                <h2>Upload a New Course</h2>
                <div><i>Courses should be a single EML file. View the EML structure in the documentation section.</i></div>
                <div class="file-upload">
                    <input type="file">
                    <input type="button" value="Upload" id="file-upload-submit">
                </div>
            </div>
        </div>
    </div>
</body>
</html>