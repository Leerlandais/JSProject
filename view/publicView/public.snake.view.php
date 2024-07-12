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


        <label for="speedSelect" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your Speed</label>
        <select id="speedSelect" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto mx-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="200">200</option>
        <option value="150">150</option>
        <option value="100" selected>100</option>
        <option value="50">50</option>
    </select>
    <button id="snakeStartButton">Begin</button>


    <footer>
        &copy; <a href="https://leerlandais.com" target="_blank">Lee Brennan</a>
    </footer>
</div>

<div>Fonts made from <a href="http://www.onlinewebfonts.com">Web Fonts</a> is licensed by CC BY 4.0</div>
<script src="scripts/newSnake.js"></script>
<script src="scripts/sharedScript.js"></script>
</body>
</html>



