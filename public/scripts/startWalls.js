const   canvas = document.getElementById("wallbreaker"),
        context = canvas.getContext('2d'),
        ballRadius = 10,
        blockWidth = 80,
        blockHeight = 30,
        wallbreakerStartButton = document.getElementById("wallbreakerStartButton"),
        canvasWidth = (ballRadius*2) * blockWidth*0.7,
        canvasHeight = (ballRadius*2) * blockHeight;

canvas.setAttribute("width", canvasWidth);
canvas.setAttribute("height", canvasHeight);


// Pour le block
context.beginPath();
context.rect(blockWidth, blockHeight*2, blockWidth, blockHeight);
context.fillStyle = "#FF0000";
context.fill();
context.closePath();


// pour le paddle
context.beginPath();
context.rect((canvasWidth/2)-50, canvasHeight-50, 100, 20);
context.fillStyle = "#00FF00";
context.fill();
context.closePath();

// pour le ballon
context.beginPath();
context.arc(240, 160, ballRadius, 0, Math.PI * 2, false);
context.fillStyle = "green";
context.fill();
context.closePath();