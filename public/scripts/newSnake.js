const canvas = document.getElementById("snake"),
    context = canvas.getContext('2d');
const snakeSegment = 30,
    snakeBaseLength = 5;

const segmentsWidth = 30;
const segmentsHeight = 20;
const snakeStartButton = document.getElementById("snakeStartButton");
const speedSelect = document.getElementById("speedSelect");
const canvasWidth = snakeSegment * segmentsWidth;
const canvasHeight = snakeSegment * segmentsHeight;
canvas.setAttribute("width", canvasWidth);
canvas.setAttribute("height", canvasHeight);

const snakeImages = [
    'images/snake/head_left.png',
    'images/snake/head_right.png',
    'images/snake/head_down.png',
    'images/snake/head_up.png',
    'images/snake/tail_left.png',
    'images/snake/tail_right.png',
    'images/snake/tail_down.png',
    'images/snake/tail_up.png',
    'images/snake/body_horizontal.png',
    'images/snake/body_vertical.png',
    'images/snake/body_bottomleft.png',
    'images/snake/body_bottomright.png',
    'images/snake/body_topleft.png',
    'images/snake/body_topright.png'
];

const spiderImages = [
    'images/snake/spider.svg',
    'images/snake/spider2.svg',
    'images/snake/spider3.svg',
    'images/snake/spider4.svg',
    'images/snake/spider5.svg'
]
let gameTimer = 100,
    foodCount = 0,
    consumedFood = 0;
snakeStartButton.addEventListener("click", function() {
snakeStartButton.disabled = true;
    gameTimer = speedSelect.value;
speedSelect.disabled = true;
console.log(gameTimer);


const images = [];
function preloadImages(sources, callback) {
    let loadedImagesCount = 0;
    for (let i = 0; i < sources.length; i++) {
        images[i] = new Image();
        images[i].src = sources[i];

        images[i].onload = () => {
            loadedImagesCount++;
            if (loadedImagesCount === sources.length) {
                callback();
            }
        };
        images[i].onerror = () => {
            console.error(`Failed to load image: ${sources[i]}`);
        };
    }
}
preloadImages(snakeImages, () => {
    console.log('All images preloaded');
});

let snakeX = canvasWidth/ 2,
    snakeY = canvasHeight / 2;
let snakeDirection = "LEFT";
let snakeBodyArray = [];

for (let i = 0; i < snakeBaseLength; i++) {
    snakeBodyArray.push({ x: snakeX + i * snakeSegment, y: snakeY, direction: snakeDirection });
}
let gameOn = false;
let foodX, foodY;

let gameInterval= setInterval(() => {
    if(gameOn === true){
        updateSnake();
    }
}, gameTimer);

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






// Step 1: Define the function separately
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

// Step 2: Add the event listener
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
        calculateTotalScore();
    }
    for (let i = 1; i < snakeBodyArray.length; i++) {
        if (newHead.x === snakeBodyArray[i].x && newHead.y === snakeBodyArray[i].y) {
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
function calculateTotalScore() {
    let bonusForSpeed = 10;
    switch(gameTimer) {
        case "50" :
            bonusForSpeed = 100;
            break;
        case "100" :
            bonusForSpeed = 40;
            break;
        case "150" :
            bonusForSpeed = 20;
            break;
        default :
            bonusForSpeed = bonusForSpeed;
    }

    let finalScoreSnake = ((snakeBodyArray.length-1) + consumedFood) * bonusForSpeed;

    context.clearRect(0, 0, canvasWidth, canvasHeight);
    clearInterval(gameInterval);
    document.removeEventListener("keydown", keyListener);
    alert(finalScoreSnake + " : speed = " + gameTimer);

}

    createSnake();
    updateSnake();
    prepareFood();
    placeFood();
});