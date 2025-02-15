const   canvas = document.getElementById("wallbreaker"),
        context = canvas.getContext('2d'),
        ballRadius = 10,
        blockWidth = 80,
        blockHeight = 30,
        blockSpacing = 10,
        blockRowSize = 5,
        blockColSize = 7,
        blockArray = [],
        paddleWidth = 100,
        paddleHeight = 20,
        totalBlockWidth = blockColSize * blockWidth + (blockColSize - 1) * blockSpacing,
        wallbreakerStartButton = document.getElementById("wallbreakerStartButton"),
        canvasWidth = (ballRadius*2) * blockWidth*0.6,
        canvasHeight = ((ballRadius*2) * blockHeight),
        blockOffset = (canvasWidth - totalBlockWidth) / 2,
        fillstyles = ["red", "blue", "green", "yellow", "black", "orange", "violet"];


let x = canvasWidth / 2,
    y = canvasHeight-((paddleWidth)/2)-ballRadius*2,
    dx,
    dy = -6,
    fillstyle = fillstyles[0],
    paddlePosition = (canvas.width - paddleWidth) / 2,
    paddleSpeed = 8,
    gameInterval = 0;
    rightPressed = false,
    leftPressed = false
    gameRunning = false;
Math.floor(Math.random() * 100) % 2 === 0 ? dx = -6 : dx = 6;
canvas.setAttribute("width", canvasWidth);
canvas.setAttribute("height", canvasHeight);

// pour la raquette
function drawPaddle() {
    if (gameRunning) {
    if (rightPressed) {
        paddlePosition = Math.min(paddlePosition + paddleSpeed, canvas.width - paddleWidth);
    } else if (leftPressed) {
        paddlePosition = Math.max(paddlePosition - paddleSpeed, 0);
    }
    }else {
        paddlePosition = (canvas.width - paddleWidth) / 2
    }

    context.beginPath();
context.rect(paddlePosition, canvasHeight-paddleHeight*3, paddleWidth, paddleHeight);
context.strokeStyle = "black";
context.stroke();
context.fillStyle = "#00FF00";
context.fill();
context.closePath();
}

for (let col = 0; col < blockColSize; col++) {
    blockArray[col] = [];
    for (let row = 0; row < blockRowSize; row++) {
        blockArray[col][row] = { x: 0, y: 0, status: true, fillStyle: fillstyles[(col % blockRowSize)-1] };
    }
}

// pour les blocks
function drawBlocks() {
    for (let col = 1; col < blockColSize-1; col++) {
        for (let row = 1; row < blockRowSize; row++) {

            if (blockArray[col][row].status === true) {
            const blockX = blockOffset + col * (blockWidth + blockSpacing);
            const blockY = row * (blockHeight + blockSpacing);

            blockArray[col][row].x = blockX;
            blockArray[col][row].y = blockY;
            context.beginPath();
            context.rect(blockX, blockY, blockWidth, blockHeight);
            context.strokeStyle = "white";
            context.stroke();
            context.fillStyle = blockArray[col][row].fillStyle;
            context.fill();
            context.closePath();
            }
        }
    }
}

/* Version avec images - à travailler
const blockImage = new Image();
blockImage.src = 'images/brick.svg';
// pour les blocks
function drawBlocks() {
    for (let col = 1; col < blockColSize-1; col++) {
        for (let row = 1; row < blockRowSize; row++) {
            if (blockArray[col][row].status === true) {
                const blockX = blockOffset + col * (blockWidth + blockSpacing);
                const blockY = row * (blockHeight + blockSpacing);

                blockArray[col][row].x = blockX;
                blockArray[col][row].y = blockY;

                context.drawImage(blockImage, blockX, blockY, blockWidth, blockHeight);
            }
        }
    }
}
 */

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

}


function beginWallGame() {
    wallbreakerStartButton.disabled = true;
    gameRunning = true;
gameInterval = setInterval(() => {
    collisionDetection();
    drawBall();
    drawBlocks();
    drawPaddle();
}, 10);
}
wallbreakerStartButton.addEventListener('click', beginWallGame);


drawBall();
drawBlocks();
drawPaddle();
// ADD SCREENWIDTH DETECTOR (the usual one) AND WIDTH-REACTION BASED ON IT