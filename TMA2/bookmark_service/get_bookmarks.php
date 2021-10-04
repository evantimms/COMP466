<?php
    $host = getenv("mysqlhost");
    $password = getenv("mysqlpass");
    $conn = new mysqli($host,"comp466",$password,"comp466");

    if ($conn -> connect_errno) {
        echo "Failed to connect to MySQL: " . $conn->connect_error;
        exit();
    }

    
    $stmt = $conn->prepare(
        "SELECT url, COUNT(url) AS NumOccurences
        FROM bookmarks
        GROUP BY url
        ORDER BY COUNT(NumOccurences) desc
        LIMIT 10"
    );


    $stmt->execute();
    $result = $stmt->get_result();
    
    while ($row = $result->fetch_assoc()) {
        echo $row['url'],',';
    }
?>