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
        canvasHeight = (ballRadius*2) * blockHeight,
        blockOffset = (canvasWidth - totalBlockWidth) / 2,
        fillstyles = ["red", "blue", "green", "yellow", "black", "orange", "violet"];


let x = canvasWidth / 2,
    y = canvasHeight-((paddleWidth)/2)-ballRadius*2,
    dx = 3,
    dy = -3,
    fillstyle = fillstyles[0];



canvas.setAttribute("width", canvasWidth);
canvas.setAttribute("height", canvasHeight);

// pour la raquette
function drawPaddle() {
context.beginPath();
context.rect((canvasWidth/2)-(paddleWidth/2), canvasHeight-(paddleHeight*3), paddleWidth, paddleHeight);
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
/*
function drawBall () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(x, y, 10, 0, Math.PI * 2);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
    x += dx;
    y += dy
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
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
        changeColour();
    }
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
        changeColour();
    }

function changeColour() {
    let newColour = Math.floor(Math.random() * fillstyles.length);
    fillstyle = fillstyles[newColour];
}

}
function beginWallGame() {
setInterval(() => {
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