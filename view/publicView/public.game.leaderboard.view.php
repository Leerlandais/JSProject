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
    var_dump($leaderboard);
    ?>
    <!-- component -->

        <div class="overflow-x-auto w-fit mx-auto">
            <table class="min-w-full bg-white shadow-md rounded-xl text-center">
                <thead>
                <tr class="bg-blue-gray-100 text-gray-700">
                    <th class="py-3 px-4 text-center" colspan="2"><?=$leaderboard[0]["jsl_game_name"]?></th>
                </tr>
                <tr class="bg-blue-gray-100 text-gray-700">
                    <th class="py-3 px-4 text-left">Player Name</th>
                    <th class="py-3 px-4 text-left">Player Score</th>
                </tr>
                </thead>
                <tbody class="text-blue-gray-900">
                <tr class="border-b border-blue-gray-200">
                    <?php
                    foreach ($leaderboard as $lead) {
                    ?>
                    <td class="py-3 px-4"><?=$lead["jsl_user_name"]?></td>
                    <td class="py-3 px-4"><?=$lead["jsl_score_value"]?></td>
                    <?php
                    }
                    ?>
                </tr>

                </tbody>
            </table>

        </div>

</div> <!-- end global -->
<script src="scripts/sharedScript.js"></script>
</body>
</html>