<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?=$title?></title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="styles/home.style.css">
</head>
<body>
<div id="globalDiv">
<h1 id="mainHeading"><?=$mainHeading?></h1>
<?php
 // var_dump($allGames);
?>
    <div id="gameHolder" class="container-fluid flex flex-row justify-evenly">
        <?php
            foreach ($allGames as $game) {
                if ($game["jsl_game_name"] == "Snake") {
                    $backSize = "contain";
                }else {
                    $backSize = "cover";
                }
        ?>
                <div id="innerHolder" class="flex flex-col">
                    <h3 class="mb-4 text-center text-4xl font-bold italic text-gray-900 dark:text-white"><?=$game["jsl_game_name"]?></h3>
                    <div class="gameWindow w-auto h-auto border border-blue-300" style="background-image: <?=$game['jsl_game_image']?>; background-size : <?=$backSize?>;" url="<?=$game['jsl_game_url']?>"></div>
                </div>
        <?php
            }
        ?>
    </div>
<!--
    <form action="" method="POST" id="loginForm">
        <label for="nomInp">Name</label>
        <input type="text" name="nameInp" id="nomInp" aria-describedby="userNameField" placeholder="Name">
        <label for="pwdInp">Password</label>
        <input type="password" name="passInp" id="pwdInp" placeholder="Password">
        <button type="submit" class="submitButton mt-2 font-semibold leading-none text-white py-4 px-10 bg-green-700 rounded hover:bg-green-600 focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:outline-none">Login</button>
    </form>
-->
</div> <!-- end global -->
<script src="scripts/sharedScript.js"></script>
</body>
</html>