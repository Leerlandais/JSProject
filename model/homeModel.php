<?php

function getAllGamesForHomepage(PDO $db) : array|null {
$sql = "SELECT * FROM jsl_games
         WHERE jsl_game_visibility = 1
        ORDER BY jsl_game_id ASC";
$query = $db->query($sql);
if ($query->rowCount() === 0) return null;
$result = $query->fetchAll();
$query->closeCursor();
return $result;
}

function getAllLeaderboards(PDO $db) : array|null {
    $sql = "SELECT game.* , score.`jsl_score_value`, `jsl_users`.`jsl_user_name` 
                FROM `jsl_games` game
            LEFT JOIN `game_has_score` ghs
                ON `ghs`.`game_game_id` = game.jsl_game_id
            LEFT JOIN `jsl_scores` score
                ON score.jsl_score_id = ghs.score_score_id
            LEFT JOIN `user_has_score` uhs
                ON score.jsl_score_id = uhs.score_score_id
            LEFT JOIN `jsl_users` 
                ON uhs.user_user_id = `jsl_users`.`jsl_user_id`
            WHERE `jsl_game_name` != 'Leaderboard'
            AND game.jsl_game_visibility = 1
            AND `jsl_users`.`jsl_user_name` IS NOT NULL";
    $query = $db->query($sql);
    if ($query->rowCount() === 0) return null;
    $result = $query->fetchAll();
    $query->closeCursor();
    return $result;
}

function getLeaderboardForOneGame(PDO $db, string $gameId) : array|null|string {
    $sql = "SELECT game.* , score.`jsl_score_value`
                FROM `jsl_games` game
            LEFT JOIN `game_has_score` ghs
                ON `ghs`.`game_game_id` = game.jsl_game_id
            LEFT JOIN `jsl_scores` score
                ON score.jsl_score_id = ghs.score_score_id
            WHERE `jsl_game_name` = :game";
    $stmt = $db->prepare($sql);
    $stmt->bindParam(':game', $gameId);
    try{
    $stmt->execute();
    if ($stmt->rowCount() === 0) return null;
    $result = $stmt->fetch();
    $stmt->closeCursor();
    return $result;
    }catch (Exception $e){
        return $e->getMessage();
    }
}