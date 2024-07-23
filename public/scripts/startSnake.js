// pre game logic containing global variable creation

// Pour permettre à tous les autres scripts d'y accéder, les constantes sont déclarées ici plutôt que dans le cadre des fonctions.
const   canvas = document.getElementById("snake"),
        context = canvas.getContext('2d'),
        snakeSegment = 30,
        snakeBaseLength = 5,
        segmentsWidth = 30,
        segmentsHeight = 20,
        snakeStartButton = document.getElementById("snakeStartButton"),
        speedSelect = document.getElementById("speedSelect"),
        canvasWidth = snakeSegment * segmentsWidth,
        canvasHeight = snakeSegment * segmentsHeight,
        highScoreDisplay = document.getElementById("highScoreDisplay");

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
if (!localStorage.getItem("highScore")) localStorage.setItem("highScore", "0");
// idem pour les mutables
let gameTimer = 100,
    foodCount = 0,
    consumedFood = 0,
    snakeBodyArray = [],
    gameOn = false,
    foodX, foodY,
    gameInterval,
    currentHighScore = localStorage.getItem('highScore');

highScoreDisplay.textContent = currentHighScore;


// définer la taille du canvas
canvas.setAttribute("width", canvasWidth);
canvas.setAttribute("height", canvasHeight);

function preloadImages(sources, callback) {
    // préparation des images du Snake avant que le jeu commence
    // sinon, au haut vitesse, il y à des trous dans l'image (à leur premier utilisation (très visible avec les segments courbés))
const images = [];
    let loadedImagesCount = 0;
    for (let i = 0; i < sources.length; i++) {
        // boucle sur les images jusqu'à toutes sont chargés
        images[i] = new Image();
        images[i].src = sources[i];
        images[i].onload = () => {
            loadedImagesCount++;
            if (loadedImagesCount === sources.length) {
                // signaler completion de la tâche
                callback();
            }
        };
        images[i].onerror = () => {
            // signaler erreur
            console.error(`Failed to load image: ${sources[i]}`);
        };
    }
}
preloadImages(snakeImages, () => {
    // en completion du preloadImages, affiche succès
    console.log('All images preloaded');
});

// placement du Snake au milieu du canvas et définir direction originale
let snakeX = canvasWidth/ 2,
    snakeY = canvasHeight / 2,
    snakeDirection = "LEFT";

// création du corps du Snake
for (let i = 0; i < snakeBaseLength; i++) {
    snakeBodyArray.push({ x: snakeX + i * snakeSegment, y: snakeY, direction: snakeDirection });
}

snakeStartButton.addEventListener("click", startGameSnake);
function startGameSnake () {
    snakeStartButton.disabled = true; // les choses tournent mal si ce bouton est trop cliquer donc désactivation pendant que le jeu passe
    gameTimer = speedSelect.value;
    speedSelect.disabled = true; // plus besoin de ceci non plus
    gameOn = true;  // signal l'interval qu'il peut commencer
    document.addEventListener('keydown', keyListener); // maintenant activer l'ecouter (si fait avant, Snake bouge)
    gameInterval = setInterval(() => {
        if(gameOn === true){
            updateSnake();
        }
    }, gameTimer); // vitesse selon choix de joueur
}
