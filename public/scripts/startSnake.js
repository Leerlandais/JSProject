// pre game logic containing global variable creation

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
    consumedFood = 0,
    snakeBodyArray = [];

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

snakeStartButton.addEventListener("click", startGameSnake);


function startGameSnake () {
    snakeStartButton.disabled = true;
    gameTimer = speedSelect.value;
    speedSelect.disabled = true;
}
