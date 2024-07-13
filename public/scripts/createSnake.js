// logic for creating snake and food


function prepareFood() {
    foodCount = Math.floor(Math.random() * spiderImages.length);
    consumedFood++;

    const maxWidth = Math.floor(canvasWidth / snakeSegment);
    const maxHeight = Math.floor(canvasHeight / snakeSegment);

    foodX = Math.floor(Math.random() * maxWidth) * snakeSegment;
    foodY = Math.floor(Math.random() * maxHeight) * snakeSegment;

    for (let i = 0; i < snakeBodyArray.length; i++) {
        if (foodX === snakeBodyArray[i].x && foodY === snakeBodyArray[i].y) {
            prepareFood();
            return;
        }
    }
}

function placeFood() {
    let img = new Image();
    img.src = spiderImages[foodCount];
    context.drawImage(img, foodX, foodY, snakeSegment, snakeSegment);
}


function createSnake() {
    let imgHead = new Image(),
        imgBodyH = new Image(),
        imgBodyV = new Image(),
        imgTail = new Image(),
        imgBend = new Image();



    if (snakeDirection === 'LEFT') {
        imgHead.src = "images/snake/head_left.png";
        imgTail.src = "images/snake/tail_right.png";
    } else if (snakeDirection === 'RIGHT') {
        imgHead.src = "images/snake/head_right.png";
        imgTail.src = "images/snake/tail_left.png";
    } else if (snakeDirection === 'UP') {
        imgHead.src = "images/snake/head_up.png";
        imgTail.src = "images/snake/tail_down.png";
    } else if (snakeDirection === 'DOWN') {
        imgHead.src = "images/snake/head_down.png";
        imgTail.src = "images/snake/tail_up.png";
    } else {
        imgHead.src = "images/snake/head_left.png";
        imgTail.src = "images/snake/tail_right.png";
    }

    imgBodyH.src = "images/snake/body_horizontal.png";
    imgBodyV.src = "images/snake/body_vertical.png";

    context.clearRect(0, 0, canvasWidth, canvasHeight);

    snakeBodyArray.forEach((snakePart, index) => {
        if (index === 0) {
            context.drawImage(imgHead, snakePart.x, snakePart.y, snakeSegment, snakeSegment);
        } else if (index === snakeBodyArray.length - 1) {
            let tailDir = snakeBodyArray[snakeBodyArray.length - 2].direction;
            if (tailDir === 'LEFT') {
                imgTail.src = "images/snake/tail_right.png";
            } else if (tailDir === 'RIGHT') {
                imgTail.src = "images/snake/tail_left.png";
            } else if (tailDir === 'UP') {
                imgTail.src = "images/snake/tail_down.png";
            } else if (tailDir === 'DOWN') {
                imgTail.src = "images/snake/tail_up.png";
            }
            context.drawImage(imgTail, snakePart.x, snakePart.y, snakeSegment, snakeSegment);
        } else {
            let nextSegment = snakeBodyArray[index - 1];

            let isBent = false;
            let bendImage ="";
            if (snakePart.direction === "UP" && nextSegment.direction === 'LEFT') {
                bendImage = "images/snake/body_bottomleft.png";
                isBent = true;
            } else if (snakePart.direction === "DOWN" && nextSegment.direction === 'LEFT') {
                bendImage = "images/snake/body_topleft.png";
                isBent = true;
            } else if (snakePart.direction === "UP" && nextSegment.direction === 'RIGHT') {
                bendImage = "images/snake/body_bottomright.png";
                isBent = true;
            } else if (snakePart.direction === "DOWN" && nextSegment.direction === 'RIGHT') {
                bendImage = "images/snake/body_topright.png";
                isBent = true;
            } else if (snakePart.direction === "LEFT" && nextSegment.direction === 'UP') {
                bendImage = "images/snake/body_topright.png";
                isBent = true;
            } else if (snakePart.direction === "LEFT" && nextSegment.direction === 'DOWN') {
                bendImage = "images/snake/body_bottomright.png";
                isBent = true;
            } else if (snakePart.direction === "RIGHT" && nextSegment.direction === 'UP') {
                bendImage = "images/snake/body_topleft.png";
                isBent = true;
            } else if (snakePart.direction === "RIGHT" && nextSegment.direction === 'DOWN') {
                bendImage = "images/snake/body_bottomleft.png";
                isBent = true;
            }
            if (isBent) {
                imgBend.src = bendImage;
                context.drawImage(imgBend, snakePart.x, snakePart.y, snakeSegment, snakeSegment);
            } else {
                if (snakePart.direction === 'LEFT' || snakePart.direction === 'RIGHT') {
                    context.drawImage(imgBodyH, snakePart.x, snakePart.y, snakeSegment, snakeSegment);
                } else if (snakePart.direction === 'UP' || snakePart.direction === 'DOWN') {
                    context.drawImage(imgBodyV, snakePart.x, snakePart.y, snakeSegment, snakeSegment);
                }
            }
        }
    });


    placeFood();
}