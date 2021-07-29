const fullCSS = document.querySelector("#full-css");
const RGBText = document.querySelector("#rgb");
const hexText = document.querySelector("#hex");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const randomBtn = document.querySelector(".btn-random");
const copyBtn = document.querySelector(".btn-copy");
const exchangeBtn = document.querySelector(".btn-exchange");

function copyBackgroundColor(){
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(fullCSS);
    selection.removeAllRanges();
    selection.addRange(range);
    let res = document.execCommand("copy");
    if (res){
        copyBtn.classList.add("btn-copied");
        copyBtn.textContent = "Copied!";
        selection.removeAllRanges();
        
        setTimeout(()=>{
            copyBtn.classList.remove("btn-copied");
            copyBtn.textContent = "Copy";}, 800)
    }
   
}

function getRandomColor(){
    randomNumber = Math.floor(Math.random() * 16777215).toString(16);
    if (String(randomNumber).length != 6) {
        return getRandomColor()
    }
    return "#" + String(randomNumber).toLowerCase();
}

function setGradient(cssNode){
    bgColor = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    body.style.background = bgColor;
    cssNode.textContent = body.style.background + ";";
}

function exchangeGradient(){
    let temp = color1.value
    color1.value = color2.value
    color2.value = temp
    setGradient(fullCSS);
}

function randomizeGradient(){
    let rand1 = getRandomColor();
    let rand2 = getRandomColor();
    color1.value = rand1;
    color2.value = rand2;
    setGradient(fullCSS);
}

randomBtn.addEventListener('click', randomizeGradient)
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
copyBtn.addEventListener("click", copyBackgroundColor);
exchangeBtn.addEventListener("click", exchangeGradient)
