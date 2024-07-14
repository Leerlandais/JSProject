// logic for updating snake position and collision detection

function keyListener(btnPressed) {
    // empêcher l'écran de bouger s
    if (btnPressed.code === "ArrowUp" || btnPressed.code === "ArrowDown") {
        btnPressed.preventDefault();
    }
    if (btnPressed.repeat) return; // empêcher repetition au cas où bouton est tenu ou trop appuyé

    // afin de permettre utilisation de plusieurs boutons pour le mouvement - peut-être ajouter possibilité pour définition par utilisateur
    let leftButtons = ["ArrowLeft", "Numpad4", "KeyA"],
        rightButtons = ["ArrowRight", "Numpad6", "KeyD"],
        upButtons = ["ArrowUp", "Numpad8", "KeyW"],
        downButtons = ["ArrowDown", "Numpad2", "KeyS"];

    // empêcher l'utilisateur d'inverser la direction de Snake
    if (leftButtons.includes(btnPressed.code) && snakeDirection !== "RIGHT") {
        snakeDirection = "LEFT";
    } else if (rightButtons.includes(btnPressed.code) && snakeDirection !== "LEFT") {
        snakeDirection = "RIGHT";
    } else if (upButtons.includes(btnPressed.code) && snakeDirection !== "DOWN") {
        snakeDirection = "UP";
    } else if (downButtons.includes(btnPressed.code) && snakeDirection !== "UP") {
        snakeDirection = "DOWN";
    }

    updateSnake(snakeDirection);
}

function updateSnake() {
    // copier la position de la tête
    let newHead = {
        x: snakeBodyArray[0].x,
        y: snakeBodyArray[0].y,
        direction: snakeDirection
    };
// définir la nouvelle oriéntation des segments
    if (snakeDirection === 'LEFT') {
        newHead.x -= snakeSegment;
    } else if (snakeDirection === 'RIGHT') {
        newHead.x += snakeSegment;
    } else if (snakeDirection === 'UP') {
        newHead.y -= snakeSegment;
    } else if (snakeDirection === 'DOWN') {
        newHead.y += snakeSegment;
    }
// si position horizontal ou verticak de la tête est hors canvas, game over
    if (newHead.x < 0 || newHead.x >= canvasWidth || newHead.y < 0 || newHead.y >= canvasHeight) {
        calculateTotalScore();
    }
    // même chose pour contact avec le corps -- je pourrais, probablement réduire ceci car c'est impossible de auto-bouffer si length < 4
    for (let i = 1; i < snakeBodyArray.length; i++) {
        if (newHead.x === snakeBodyArray[i].x && newHead.y === snakeBodyArray[i].y) {
            calculateTotalScore();
        }
    }
    // si on mange, il faut agrandie Snake et refaure le nourriture -- do it so that the Snake swells when eating
    if (newHead.x === foodX && newHead.y === foodY) {
        snakeBodyArray.push({ x: snakeX * snakeSegment, y: snakeY });
        prepareFood();
    }
    // remplace la tête
    snakeBodyArray.unshift(newHead);
    snakeBodyArray.pop();
    createSnake(snakeDirection);
}


createSnake();
updateSnake();
prepareFood();
placeFood();
