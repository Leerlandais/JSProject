<?php


$title = "Games | Home";
$mainHeading = "Games";

$allGames = getAllGamesForHomepage($db);
include(PROJECT_DIRECTORY."/view/publicView/public.game.home.view.php");
die();