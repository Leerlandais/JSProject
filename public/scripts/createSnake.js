// logic for creating snake and food


function prepareFood() {
    // afin d'avoir plusieurs possibilités d'image choisi aléatoirement
    foodImage = Math.floor(Math.random() * spiderImages.length);
    consumedFood++;

    const maxWidth = Math.floor(canvasWidth / snakeSegment);
    const maxHeight = Math.floor(canvasHeight / snakeSegment);
// définition de placement pour le nourriture
    foodX = Math.floor(Math.random() * maxWidth) * snakeSegment;
    foodY = Math.floor(Math.random() * maxHeight) * snakeSegment;

    // evite que le nourriture est mis sur le Snake
    for (let i = 0; i < snakeBodyArray.length; i++) {
        if (foodX === snakeBodyArray[i].x && foodY === snakeBodyArray[i].y) {
            prepareFood();
            return;
        }
    }
}

function placeFood() {
    // création du nourriture selon l'image choisi au dessus
    let img = new Image();
    img.src = spiderImages[foodImage];
    context.drawImage(img, foodX, foodY, snakeSegment, snakeSegment);
}


function createSnake() {
    context.clearRect(0, 0, canvasWidth, canvasHeight); // toujours commencer par tout vider
    // préparation des images
    let imgHead = new Image(),
        imgBodyH = new Image(),
        imgBodyV = new Image(),
        imgTail = new Image(),
        imgBend = new Image();


// d'abord sélection d'image pour la tête
    if (snakeDirection === 'LEFT') {
        imgHead.src = "images/snake/head_left.png";
            } else if (snakeDirection === 'RIGHT') {
        imgHead.src = "images/snake/head_right.png";
            } else if (snakeDirection === 'UP') {
        imgHead.src = "images/snake/head_up.png";
            } else if (snakeDirection === 'DOWN') {
        imgHead.src = "images/snake/head_down.png";
            } else {
        imgHead.src = "images/snake/head_left.png";
            }
// et les segment du corps
    imgBodyH.src = "images/snake/body_horizontal.png";
    imgBodyV.src = "images/snake/body_vertical.png";


    snakeBodyArray.forEach((snakePart, index) => {
        if (index === 0) { // index-0 = tête
            context.drawImage(imgHead, snakePart.x, snakePart.y, snakeSegment, snakeSegment);
        } else if (index === snakeBodyArray.length - 1) { // index--1 = queue
            let tailDir = snakeBodyArray[snakeBodyArray.length - 2].direction; // pour que direction du queue est égal à son voisin
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
            // si pas tête ni queue, c'est le corps
            let nextSegment = snakeBodyArray[index - 1];

            let isBent = false; // d'abord, verifier s'il est courbé
            let bendImage ="";
            // puis verifier direction de la courbe
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
            // ajoute l'image nécessaire pour chaque segment courbé
            if (isBent) {
                imgBend.src = bendImage;
                context.drawImage(imgBend, snakePart.x, snakePart.y, snakeSegment, snakeSegment);
            } else {
                //  pour les segment horizontals
                if (snakePart.direction === 'LEFT' || snakePart.direction === 'RIGHT') {
                    context.drawImage(imgBodyH, snakePart.x, snakePart.y, snakeSegment, snakeSegment);
                    // et les verticales
                } else if (snakePart.direction === 'UP' || snakePart.direction === 'DOWN') {
                    context.drawImage(imgBodyV, snakePart.x, snakePart.y, snakeSegment, snakeSegment);
                }
            }
        }
    });

}