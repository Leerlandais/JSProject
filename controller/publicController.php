<?php




    $route = $_GET["route"] ?? "home";
    switch ($route) {
        case "home" :
            $allGames = getAllGamesForHomepage($db);
            $mainHeading = "Games";
            $title = "Games";
            include(PROJECT_DIRECTORY."/view/publicView/public.game.home.view.php");
            break;
        case "snake" :
            $title = "sssSnake";
            $mainHeading = "Snake";
            $leaderScores = getLeaderboardForOneGame($db, "Snake");
            include(PROJECT_DIRECTORY."/view/publicView/public.snake.view.php");
            break;
        case "leader" :
            $leaderboard = getAllLeaderboards($db);
            $title = "Leaderboard";
            $mainHeading = "Top 10 Scores";
            include(PROJECT_DIRECTORY."/view/publicView/public.game.leaderboard.view.php");
            break;
        default :
            $title = "404";
            include(PROJECT_DIRECTORY."/view/publicView/public.404.view.php");
    }

