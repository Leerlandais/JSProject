<?php



function attemptUserLogin (PDO $db, string $name, string $pwd) : bool | string {
    $sql = "SELECT *
    FROM `np_users`
    WHERE `np_user_username` = ?";

    $stmt = $db->prepare($sql);

    try {
        $stmt->execute([$name]);
        if($stmt->rowCount()===0) return false;
        $result = $stmt->fetch();

        if (password_verify($pwd, $result['np_user_pwd'])) {
            $_SESSION = $result;
            unset($_SESSION['np_user_pwd']);
            $_SESSION['id'] = session_id();
            $_SESSION["user_lang"] = $_SESSION["np_user_lang"];
            // unset($_SESSION["np_user_lang"]);
            return true;
        }else {
            return false;
        }
    }catch (Exception $e) {
        return $e->getMessage();
    }
}


function createNewUser(PDO $db, string $user, string $first, string $second, string $email, string $cryptPWD, string $lang) {
    //  var_dump($db, $user, $first, $second, $email, $cryptPWD);
    $sql = 'SELECT `np_user_username`
            FROM `np_users`
            WHERE `np_user_username` = ?';
    $stmt = $db->prepare($sql);
    $stmt->execute([$user]);
    if($stmt->rowCount() === 1) return false;

    $create = "INSERT INTO `np_users`
                (`np_user_username`,
                `np_user_firstname`,
                `np_user_lastname`,
                `np_user_email`,
                `np_user_pwd`,
                `np_user_lang`)
                VALUES (?,?,?,?,?,?)";
    $newStmt = $db->prepare($create);
    $newStmt->bindValue(1, $user);
    $newStmt->bindValue(2, $first);
    $newStmt->bindValue(3, $second);
    $newStmt->bindValue(4, $email);
    $newStmt->bindValue(5, $cryptPWD);
    $newStmt->bindValue(6, $lang);

    try{
        $newStmt->execute();
        return true;

    }catch(Exception){
        $errorMessage = "Couldn't create user";
        return $errorMessage;
    }

}