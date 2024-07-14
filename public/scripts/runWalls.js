
document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);



function collisionDetection () {
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
        changeColour();
    }
    if (y + dy < ballRadius) {
        dy = -dy;
        changeColour();
    } else if (y + dy > canvasHeight - ballRadius - paddleHeight*2) {
        if (x > paddlePosition && x < paddlePosition + paddleWidth + ballRadius) {
            dy = -dy;
            // console.log("paddleCollision");
            changeColour();
        } else if(y + dy > canvas.height) {
            alert("GAME OVER");
            clearInterval(gameInterval);
            document.location.reload();
        }
    }
    for (let c = 0; c < blockColSize; c++) {
        for (let r = 0; r < blockRowSize; r++) {
            // console.log(blockArray);
            const b = blockArray[c][r];
            if (x > b.x && x < b.x + blockWidth && y > b.y && y < b.y + blockHeight) {

                dy = -dy;
                b.status = false;
            }
        }
    }
    }
function changeColour() {
    let newColour = Math.floor(Math.random() * fillstyles.length);
    fillstyle = fillstyles[newColour];
}
function keyDown(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
      //  console.log("right pressed");
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
      //  console.log("left pressed");
    }
}

function keyUp(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
       // console.log("right depressed");
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
       // console.log("left depressed");
    }
}