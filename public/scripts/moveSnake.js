// logic for updating snake position and collision detection

function keyListener(btnPressed) {
    if (btnPressed.code === "ArrowUp" || btnPressed.code === "ArrowDown") {
        btnPressed.preventDefault();
    }
    if (btnPressed.repeat) return;
    let leftButtons = ["ArrowLeft", "Numpad4", "KeyA"],
        rightButtons = ["ArrowRight", "Numpad6", "KeyD"],
        upButtons = ["ArrowUp", "Numpad8", "KeyW"],
        downButtons = ["ArrowDown", "Numpad2", "KeyS"];
    if (leftButtons.includes(btnPressed.code) && snakeDirection !== "RIGHT") {
        snakeDirection = "LEFT";
    } else if (rightButtons.includes(btnPressed.code) && snakeDirection !== "LEFT") {
        snakeDirection = "RIGHT";
    } else if (upButtons.includes(btnPressed.code) && snakeDirection !== "DOWN") {
        snakeDirection = "UP";
    } else if (downButtons.includes(btnPressed.code) && snakeDirection !== "UP") {
        snakeDirection = "DOWN";
    }
    gameOn = true;
    updateSnake(snakeDirection);
}

document.addEventListener('keydown', keyListener);



function updateSnake() {
    let newHead = {
        x: snakeBodyArray[0].x,
        y: snakeBodyArray[0].y,
        direction: snakeDirection
    };

    if (snakeDirection === 'LEFT') {
        newHead.x -= snakeSegment;
    } else if (snakeDirection === 'RIGHT') {
        newHead.x += snakeSegment;
    } else if (snakeDirection === 'UP') {
        newHead.y -= snakeSegment;
    } else if (snakeDirection === 'DOWN') {
        newHead.y += snakeSegment;
    }


    if (newHead.x < 0 || newHead.x >= canvasWidth || newHead.y < 0 || newHead.y >= canvasHeight) {
        document.removeEventListener("keydown", keyListener);
        clearInterval(gameInterval);
        calculateTotalScore();
    }
    for (let i = 1; i < snakeBodyArray.length; i++) {
        if (newHead.x === snakeBodyArray[i].x && newHead.y === snakeBodyArray[i].y) {
            document.removeEventListener("keydown", keyListener);
            clearInterval(gameInterval);
            calculateTotalScore();
        }
    }
    if (newHead.x === foodX && newHead.y === foodY) {
        snakeBodyArray.push({ x: snakeX * snakeSegment, y: snakeY });

        prepareFood();
    }

    snakeBodyArray.unshift(newHead);
    snakeBodyArray.pop();

    createSnake(snakeDirection);
}


createSnake();
updateSnake();
prepareFood();
placeFood();
