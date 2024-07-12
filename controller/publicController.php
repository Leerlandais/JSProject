<?php

if (isset($_GET["route"])) {
    $route = $_GET["route"];
    switch ($route) {
        case "home" :
            $allGames = getAllGamesForHomepage($db);
            $mainHeading = "Games";
            $title = "Games";
            include(PROJECT_DIRECTORY."/view/publicView/public.game.home.view.php");
            break;
        case "snake" :
            $title = "sssSnake";
            include(PROJECT_DIRECTORY."/view/publicView/public.snake.view.php");
        case "leader" :
            $title = "Leaderboard";
            $mainHeading = "Top 10 Scores";
            include(PROJECT_DIRECTORY."/view/publicView/public.game.leaderboard.view.php");
        default :
            $title = "404";
            include(PROJECT_DIRECTORY."/view/publicView/public.404.view.php");
    }
}else {
    $mainHeading = "Games";
    $title = "Games | Home";
    $allGames = getAllGamesForHomepage($db);
    include(PROJECT_DIRECTORY."/view/publicView/public.game.home.view.php");
    die();
}
