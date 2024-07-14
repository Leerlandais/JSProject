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

    <canvas id="wallbreaker"></canvas>


    <button id="wallbreakerStartButton"
            class="w-max mx-auto my-12 px-10 py-3
                   text-blue-500 font-semibold
                   bg-gradient-to-b
                   from-slate-50 to-blue-100
                   rounded-2xl shadow-blue-600
                   shadow-md border-b-4 hover
                   border-b border-blue-200
                   ">Begin</button>

    <footer>
        &copy; <a href="https://leerlandais.com" target="_blank">Lee Brennan</a>
    </footer>
</div>

<script src="scripts/sharedScript.js"></script>
<script src="scripts/startWalls.js"></script>
<script src="scripts/runWalls.js"></script>

</body>
</html>



