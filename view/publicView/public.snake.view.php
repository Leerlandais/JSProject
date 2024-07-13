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
    <h1 id="mainHeading"></h1>
    <h2 id="subHeading"></h2>

    <canvas id="snake"></canvas>

<div class="flex flex-row mx-auto w-fit">
        <label for="speedSelect"><h3 class="text-3xl mb-6 pe-6 text-gray-900 dark:text-white">Select your Speed</h3></label>
        <select id="speedSelect" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-auto h-10 mx-auto px-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
        <option value="200">200</option>
        <option value="150">150</option>
        <option value="100" selected>100</option>
        <option value="50">50</option>
    </select>
</div>
    <button id="snakeStartButton" class="bg-gradient-to-b w-max mx-auto my-12 text-blue-500 font-semibold from-slate-50 to-blue-100 px-10 py-3 rounded-2xl shadow-blue-600 shadow-md border-b-4 hover border-b border-blue-200 hover:shadow-sm transition-all duration-500">Begin</button>

    <footer>
        &copy; <a href="https://leerlandais.com" target="_blank">Lee Brennan</a>
    </footer>
</div>
<form action="./" method="POST" id="snakeScoreForm">
    <input type="text" name="playerScore" id="playerScores" value="<?=$leaderScores["jsl_score_value"]?>">
</form>
<div class="hidden">Fonts made from <a href="http://www.onlinewebfonts.com">Web Fonts</a> is licensed by CC BY 4.0</div>
<!--
<script src="scripts/endSnake.js"></script>
<script src="scripts/newSnake.js"></script>
<script src="scripts/sharedScript.js"></script>
-->
<script src="scripts/sharedScript.js"></script>
<script src="scripts/startSnake.js"></script>
<script src="scripts/stopSnake.js"></script>
<script src="scripts/createSnake.js"></script>
<script src="scripts/moveSnake.js"></script>
</body>
</html>



