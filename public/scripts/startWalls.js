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
        blockOffset = (canvasWidth - totalBlockWidth) / 2;


canvas.setAttribute("width", canvasWidth);
canvas.setAttribute("height", canvasHeight);

// pour la raquette
context.beginPath();
context.rect((canvasWidth/2)-(paddleWidth/2), canvasHeight-(paddleHeight*3), paddleWidth, paddleHeight);
context.strokeStyle = "black";
context.stroke();
context.fillStyle = "#00FF00";
context.fill();
context.closePath();

// pour le ballon
context.beginPath();
context.arc((canvasWidth/2), canvasHeight-((paddleWidth)/2)-ballRadius*2, ballRadius, 0, Math.PI * 2, false);
context.strokeStyle = "rgb(255 255 255)";
context.stroke();
context.fillStyle = "#8f12d7";
context.fill();
context.closePath();


// pour les blocks
const blocks = [];
for (let col = 0; col < blockColSize; col++) {
    blocks[col] = [];
    for (let row = 0; row < blockRowSize; row++) {
        blocks[col][row] = { x: 0, y: 0 };
    }
}
function drawBlocks() {
    for (let col = 1; col < blockColSize-1; col++) {
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

drawBlocks();
// ADD SCREENWIDTH DETECTOR (the usual one) AND WIDTH-REACTION BASED ON IT