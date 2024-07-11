<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?=$title?></title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
<div id="globalDiv">
<h1 id="mainHeading"><?=$mainHeading?></h1>
<?php
 // var_dump($allGames);
?>
    <div id="gameHolder" class="container-fluid">
        <?php
            foreach ($allGames as $game) {
        ?>
            <div class="gameWindow w-auto h-auto border border-blue-300"><?=$game["jsl_game_name"]?></div>
        <?php
            }
        ?>
    </div>
    <div>
        <ul>
            <li>Windows for games</li>
            <li>Login</li>
            <li>The games</li>
            <li>Leaderboard</li>
        </ul>
    </div>

</div> <!-- end global -->
<script src="scripts/sharedScript.js"></script>
</body>
</html>