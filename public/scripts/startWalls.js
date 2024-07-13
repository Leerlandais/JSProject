const   canvas = document.getElementById("wallbreaker"),
        context = canvas.getContext('2d'),
        ballRadius = 10,
        blockWidth = 80,
        blockHeight = 30,
        blockRowSize = 5,
        blockColSize = 15,
        wallbreakerStartButton = document.getElementById("wallbreakerStartButton"),
        canvasWidth = (ballRadius*2) * blockWidth*0.7,
        canvasHeight = (ballRadius*2) * blockHeight;

canvas.setAttribute("width", canvasWidth);
canvas.setAttribute("height", canvasHeight);


// Pour le block



// pour la raquette
context.beginPath();
context.rect((canvasWidth/2)-50, canvasHeight-50, 100, 20);
context.strokeStyle = "black";
context.stroke();
context.fillStyle = "#00FF00";
context.fill();
context.closePath();

// pour le ballon
context.beginPath();
context.arc(240, 160, ballRadius, 0, Math.PI * 2, false);
context.strokeStyle = "rgb(255 255 255)";
context.stroke();
context.fillStyle = "#8f12d7";
context.fill();
context.closePath();

const blocks = [];
for (let c = 0; c < blockColSize; c++) {
    blocks[c] = [];
    for (let r = 0; r < blockRowSize; r++) {
        blocks[c][r] = { x: 0, y: 0 };
    }
}

function drawBlocks() {
    for (let col = 0; col < blockColSize; col++) {
        for (let row = 0; row < blockRowSize; row++) {
            const blockX = col * (blockWidth);
            const blockY = row * (blockHeight);

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



