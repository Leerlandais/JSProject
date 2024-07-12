<?php


$title = "Games | Home";
$mainHeading = "Games";

if (isset($_GET["route"])) {
    $route = $_GET["route"];
    switch ($route) {
        case "home" :
            $allGames = getAllGamesForHomepage($db);
            include(PROJECT_DIRECTORY."/view/publicView/public.game.home.view.php");
            break;
        case "snake" :
            include(PROJECT_DIRECTORY."/view/publicView/public.snake.view.php");
    }
}

$allGames = getAllGamesForHomepage($db);
include(PROJECT_DIRECTORY."/view/publicView/public.game.home.view.php");
die();