<?php

session_start();

require_once("../config.php");
require_once(PROJECT_DIRECTORY."/controller/dbConnectController.php");
require_once(PROJECT_DIRECTORY."/model/laundryModel.php");
require_once(PROJECT_DIRECTORY."/model/homeModel.php");
require_once(PROJECT_DIRECTORY."/model/loginModel.php");

require_once(PROJECT_DIRECTORY."/controller/publicController.php");

$db = null;