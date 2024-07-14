const   canvas = document.getElementById("wallbreaker"),
        context = canvas.getContext('2d'),
        ballRadius = 10,
        blockWidth = 80,
        blockHeight = 30,
        blockSpacing = 5,
        blockRowSize = 5,
        blockColSize = 15,
        paddleWidth = 100,
        paddleHeight = 20,
        totalBlockWidth = blockColSize * blockWidth + (blockColSize - 1) * blockSpacing,
        wallbreakerStartButton = document.getElementById("wallbreakerStartButton"),
        canvasWidth = (ballRadius*2) * blockWidth*0.7,
        canvasHeight = ((ballRadius*2) * blockHeight),
        blockOffset = (canvasWidth - totalBlockWidth) / 2,
        fillstyles = ["red", "blue", "green", "yellow", "black", "orange", "violet"];


let x = canvasWidth / 2,
    y = canvasHeight-((paddleWidth)/2)-ballRadius*2,
    dx = 5,
    dy = -5,
    fillstyle = fillstyles[0],
    paddlePosition = (canvas.width - paddleWidth) / 2,
    paddleSpeed = 5,
    gameInterval = 0;
    rightPressed = false,
    leftPressed = false;

canvas.setAttribute("width", canvasWidth);
canvas.setAttribute("height", canvasHeight);

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


// pour la raquette
function drawPaddle() {
    if (rightPressed) {
        paddlePosition = Math.min(paddlePosition + paddleSpeed, canvas.width - paddleWidth);
    } else if (leftPressed) {
        paddlePosition = Math.max(paddlePosition - paddleSpeed, 0);
    }

    context.beginPath();
context.rect(paddlePosition, canvasHeight-paddleHeight, paddleWidth, paddleHeight);
context.strokeStyle = "black";
context.stroke();
context.fillStyle = "#00FF00";
context.fill();
context.closePath();
}

function drawBlocks() {
// pour les blocks
const blocks = [];
for (let col = 0; col < blockColSize; col++) {
    blocks[col] = [];
    for (let row = 0; row < blockRowSize; row++) {
        blocks[col][row] = { x: 0, y: 0 };
    }
}
    for (let col = 2; col < blockColSize-2; col++) {
        for (let row = 1; row < blockRowSize; row++) {
            const blockX = blockOffset + col * (blockWidth + blockSpacing);
            const blockY = row * (blockHeight + blockSpacing);

            blocks[col][row].x = blockX;
            blocks[col][row].y = blockY;
            context.beginPath();
            context.rect(blockX, blockY, blockWidth, blockHeight);
            context.strokeStyle = "white";
            context.stroke();
            context.fillStyle = "#FF0000";
            context.fill();
            context.closePath();
        }
    }
}

function drawBall () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(x, y, ballRadius, 0, Math.PI * 2, false);
   // context.arc(x, y, 10, 0, Math.PI * 2);
    context.fillStyle = fillstyle;
    context.fill();
    context.strokeStyle = "rgb(255 255 255)";
    context.stroke();
    context.closePath();
    x += dx;
    y += dy
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
        changeColour();
    }
    if (y + dy < ballRadius) {
        dy = -dy;
        changeColour();
    } else if (y + dy > canvasHeight - ballRadius/2) {
        if (x > paddlePosition && x < paddlePosition + paddleWidth + ballRadius/2) {
            dy = -dy;
            // console.log("paddleCollision");
            changeColour();
        } else {
            alert("GAME OVER");
            clearInterval(gameInterval);
            document.location.reload();
        }
    }


}
function changeColour() {
    let newColour = Math.floor(Math.random() * fillstyles.length);
    fillstyle = fillstyles[newColour];
}
function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
        console.log("right pressed");
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
        console.log("left pressed");
    }
}

function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
        console.log("right depressed");
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
        console.log("left depressed");
    }
}

function beginWallGame() {
    wallbreakerStartButton.disabled = true;
gameInterval = setInterval(() => {
    drawBall();
 //   drawBlocks();
    drawPaddle();
}, 10);
}
wallbreakerStartButton.addEventListener('click', beginWallGame);

drawBall();
// drawBlocks();
drawPaddle();
// ADD SCREENWIDTH DETECTOR (the usual one) AND WIDTH-REACTION BASED ON IT