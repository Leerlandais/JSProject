// logic for Snake endgame

function calculateTotalScore() {
    let bonusForSpeed = 10;
    switch(gameTimer) {
        case "50" :
            bonusForSpeed = 100;
            break;
        case "100" :
            bonusForSpeed = 40;
            break;
        case "150" :
            bonusForSpeed = 20;
            break;
        default :
            bonusForSpeed = bonusForSpeed;
    }

    let finalScoreSnake = ((snakeBodyArray.length-1) + consumedFood) * bonusForSpeed;
    gameOn = false;
    let gameRestart = confirm("You scored : "+finalScoreSnake + "!\n Play Again?");
    context.restore();


    if (gameRestart === true) {
        window.location.reload();
    }else {
        window.open("?route=home", "_self");
    }

}