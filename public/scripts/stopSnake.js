// logic for Snake endgame
function calculateTotalScore() {
    let bonusForSpeed = 10;
    switch(gameTimer) {
        case "50" :
            bonusForSpeed = 100;
            break;
        case "100" :
            bonusForSpeed = 70;
            break;
        case "150" :
            bonusForSpeed = 20;
            break;
        default :
            bonusForSpeed = bonusForSpeed;
    }

    let finalScoreSnake = ((snakeBodyArray.length-1) + consumedFood) * bonusForSpeed;
    document.removeEventListener("keydown", keyListener);
    clearInterval(gameInterval);

    gameOn = false;
    let gameRestart = confirm("You scored : "+finalScoreSnake + "!\n Play Again?"); // make this pretty

    if (gameRestart === true) {
        window.location.reload();
    }else {
        window.open("?route=home", "_self");
    }

}