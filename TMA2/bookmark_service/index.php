<?php include 'shared/auth.php';?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../shared/main.css">
    <link rel="stylesheet" href="./bookmark_service.css">
    <script src="./bookmark.js" type="text/javascript"></script>
    <title>Assignment 2</title>
</head>
<body>
    <div class="main">
        <div class="navbar">
            <div class="title">Bookmark Service</div>
            <div class="links">
                <a class="link" href="../tma2.php">Home</a>
                <a class="link" href="../management_system/">Management System</a>
            </div>
        </div>
        <div class="content">
            <div class="bookmark-service">
                <div class="popular-bookmark-list">
                    <h2>Popular Bookmarks</h2>
                    <div>
                        <ul class="bookmark-list">
                        </ul>
                    </div>
                </div>
                <div class="user-list">
                    <h2>Your Bookmarks</h2>
                    <div>
                        <ul class="user-bookmark-list">
                        </ul>
                    </div>
                </div>
                <div class="user-add-bookmark">
                    <div>
                        <input type="text" name="user-add-bookmark" id="user-add-bookmark-input">
                        <label for="user-add-bookmark">Enter a new bookmark</label>
                    </div>
                    <button id="user-add-bookmark-submit">Add New</button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>