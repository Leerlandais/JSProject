
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
        if (x > paddlePosition && x < paddlePosition + paddleWidth + ballRadius/2) {
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
            const b = blockArray[c][r];
            if (b.status) { // Check if the block is still active
                if (x > b.x - ballRadius && x < b.x + blockWidth + ballRadius/2 && y > b.y - ballRadius/2 && y < b.y + blockHeight + ballRadius/2) {
                    // Determine where the collision occurred
                    const ballCenterX = x;
                    const ballCenterY = y;
                    const blockCenterX = b.x + blockWidth / 2;
                    const blockCenterY = b.y + blockHeight / 2;

                    const distX = ballCenterX - blockCenterX;
                    const distY = ballCenterY - blockCenterY;
                    const absDistX = Math.abs(distX);
                    const absDistY = Math.abs(distY);

                    if (absDistX > absDistY) {
                        // Collision on the sides
                        dx = -dx;
                    } else {
                        // Collision on the top or bottom
                        dy = -dy;
                    }
                    b.status = false; // Deactivate the block
                }
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