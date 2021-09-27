<?php
    session_start();
    if (empty($_SESSION) || !isset( $_SESSION['loggedIn']) || !$_SESSION['loggedIn']) {
        header("Location: ./login.html");
    }
?>