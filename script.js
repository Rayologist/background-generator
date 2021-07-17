var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.querySelector(".btn-random");


function getRandomColor(){
    randomNumber = Math.floor(Math.random() * 16777215).toString(16);
    if (String(randomNumber).length != 6) {
        return getRandomColor()
    }
    return "#" + String(randomNumber);
}

function setGradient(){
    bgColor = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    body.style.background = bgColor;

    css.textContent = body.style.background + ";";
}

function randomizeGradient(){
    rand1 = getRandomColor();
    rand2 = getRandomColor();
    color1.value = rand1;
    color2.value = rand2;
    setGradient();
}


setGradient();

randomBtn.addEventListener('click', randomizeGradient)


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);