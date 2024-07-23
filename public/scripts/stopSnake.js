// logic for Snake endgame
const myModal = document.getElementById("myModal"),
      snakeScore = document.getElementById("snakeScore"),
      replayButton = document.getElementById("replayButton"),
      quitButton = document.getElementById("quitButton"),
      highScore = document.getElementById("highScore");


replayButton.addEventListener("click", function() {
    window.location.reload();
})

quitButton.addEventListener("click", function() {
    window.open("?route=home", "_self");
})
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
     myModal.style.display = "block";
     snakeScore.textContent = finalScoreSnake.toString();
     console.log("final score = "+finalScoreSnake);
     if (finalScoreSnake > currentHighScore) {
     highScore.textContent = "Congrats: That's a new high score!";

         localStorage.setItem("highScore", finalScoreSnake.toString());
     }
    /*
    let gameRestart = confirm("You scored : "+finalScoreSnake + "!\n Play Again?"); // make this pretty

    if (gameRestart === true) {
        window.location.reload();
    }else {
        window.open("?route=home", "_self");
    }
*/
}