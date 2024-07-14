const   globalDiv = document.getElementById("globalDiv"),
        mainHeading = document.getElementById("mainHeading"),
        gameWindow = document.querySelectorAll(".gameWindow");

globalDiv.className = "container-fluid flex-col text-center justify-center pt-16 mx-auto bg-gradient-to-t from-gray-600 to-gray-500 via-indigo-600 h-screen";
mainHeading.className = "my-16 text-center text-6xl font-extrabold text-gray-900 dark:text-white"


for (let i=0; i<gameWindow.length; i++) {
    gameWindow[i].addEventListener("click", makeItSpin);
}

function makeItSpin() {
    let spinThis = this;
    spinThis.classList.toggle("spinIt");
    let spinUrl = spinThis.getAttribute("url");
    setTimeout(function () {
    window.open(spinUrl, "_self");
    }, 1250);
}