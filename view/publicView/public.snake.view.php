<?php

?>


<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style>canvas{background: rgba(0, 0, 0, .6); margin: 5vh auto;} </style>
    <title>Snake</title>
</head>
<body>
<div id="globalDiv">
    <h1 id="mainHeading"></h1>
    <h2 id="subHeading"></h2>

    <canvas id="snake"></canvas>

    <select name="speedSelect" id="speedSelect" class="mb-16">
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
</body>
</html>



