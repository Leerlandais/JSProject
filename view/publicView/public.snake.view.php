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
    <h2 id="subHeading" class="text-3xl">Highest Score : <span id="highScoreDisplay" class="text-2xl text-gray-300"></span></h2>

    <canvas id="snake"></canvas>

<div class="flex flex-row mx-auto w-fit">
        <label for="speedSelect"><h3 class="text-3xl mb-6 pe-6 text-gray-900 dark:text-white">Select your Speed</h3></label>
        <select id="speedSelect" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-auto h-10 mx-auto px-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
        <option value="200">200</option>
        <option value="150">150</option>
        <option value="100" >100</option>
        <option value="50" selected>50</option>
    </select>
</div>
    <button id="snakeStartButton" class="bg-gradient-to-b w-max mx-auto my-12 text-blue-500 font-semibold from-slate-50 to-blue-100 px-10 py-3 rounded-2xl shadow-blue-600 shadow-md border-b-4 hover border-b border-blue-200 hover:shadow-sm transition-all duration-500">Begin</button>


    <div class="flex items-center mx-auto w-full h-full bg-transparent" id="myModal">
            <div class="w-[25%] mt-96 mx-auto rounded-lg bg-indigo-600">
                <div class="w-full mx-auto lg:px-24"
                            <div class="p-6">
                                <p class="mt-5 text-2xl font-semibold text-3xl">Game Over</p>
                                <p class="mt-3 text-base  text-center text-black">You Scored : <span id="snakeScore"></span></p>
                                <p class="mt-3 text-base  text-center text-green-500" id="highScore"></p>

                                <div class="w-full mt-6 pb-6 flex flex-row justify-between">
                                        <button id="replayButton">Play Again</button><button id="quitButton">Quit</button>
                                </div>
                            </div>


                </div>
            </div>

    </div>
    <footer>
        &copy; <a href="https://leerlandais.com" target="_blank">Lee Brennan</a>
    </footer>
</div>

<div class="hidden">Fonts made from <a href="http://www.onlinewebfonts.com">Web Fonts</a> is licensed by CC BY 4.0</div>
<!--
pour voir si cela fonctionnerait, j'ai séparé les scripts. Tout va bien mais faites attention à l'ordre dans lequel ils sont appelés
-->
<script src="scripts/sharedScript.js"></script> <!-- Pour gerer certains choses qui sont présent sur toutes les pages -->
<script src="scripts/startSnake.js"></script> <!-- Utilisé pour précharger les images afin d'éviter les problèmes d'affichage -->
<script src="scripts/stopSnake.js"></script> <!-- Pour calculer le score à fin de jeu - Bientôt en plus jolie -->
<script src="scripts/createSnake.js"></script> <!-- Gère la création du serpent et de la nourriture -->
<script src="scripts/moveSnake.js"></script> <!-- Écouteurs de boutons et détection de collision -->
</body>
</html>



