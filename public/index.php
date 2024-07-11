<?php

session_start();
if(!isset($_SESSION["user_lang"])) $_SESSION["user_lang"] = "en";

require_once("../config.php");
require_once(PROJECT_DIRECTORY."/controller/dbConnectController.php");
require_once(PROJECT_DIRECTORY."/model/laundryModel.php");
require_once(PROJECT_DIRECTORY."/model/homeModel.php");
require_once(PROJECT_DIRECTORY."/model/loginModel.php");

if (isset($_SESSION["mySession"])) {
    $route = $_SESSION["js_user_permission"];
    if ($route == "255") {
        require_once PROJECT_DIRECTORY . "/controller/privateController.php";
        die();
    }
}
require_once(PROJECT_DIRECTORY."/controller/publicController.php");

$db = null;