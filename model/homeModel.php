<?php

function getAllGamesForHomepage(PDO $db) : array|null {
$sql = "SELECT * FROM jsl_games
         WHERE jsl_game_visibility = 1
        ORDER BY jsl_game_id ASC";
$query = $db->query($sql);
if ($query->rowCount() === 0) return null;
$result = $query->fetchAll(PDO::FETCH_ASSOC);
$query->closeCursor();
return $result;
}