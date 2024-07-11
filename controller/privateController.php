<?php


// LOGOUT CALL
if (isset($_GET["logout"])) {
    include_once("../model/logoutModel.php");
    die();
}
