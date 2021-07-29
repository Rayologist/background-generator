const fullCSS = document.querySelector("#full-css");
const RGBText = document.querySelector("#rgb");
const hexText = document.querySelector("#hex");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const randomBtn = document.querySelector(".btn-random");
const fullCSSCopyBtn = document.querySelector("#full-css-btn");
const RGBCopyBtn = document.querySelector("#rgb-btn");
const hexCopyBtn = document.querySelector("#hex-btn");
const exchangeBtn = document.querySelector(".btn-exchange");



function copyBackgroundColor(copyBtn, node){
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(node);
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

function toRGB(hex){
    let hex_value = hex.replace("#", "");
    let r = parseInt(hex_value.slice(0, 2), 16);
    let g = parseInt(hex_value.slice(2, 4), 16);
    let b = parseInt(hex_value.slice(4, 6), 16);
    return `rgb(${r}, ${g}, ${b})`;

}

function setGradient(color1, color2){
    bgColor = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    body.style.background = bgColor;
    fullCSS.textContent = body.style.background + ";";
    RGBText.textContent = toRGB(color1.value) + ", " + toRGB(color2.value);
    hexText.textContent = color1.value + ", " + color2.value;

}

function exchangeGradient(){
    let temp = color1.value
    color1.value = color2.value
    color2.value = temp
    setGradient(color1, color2);
}

function randomizeGradient(){
    let rand1 = getRandomColor();
    let rand2 = getRandomColor();
    color1.value = rand1;
    color2.value = rand2;
    setGradient(color1, color2);
}

randomBtn.addEventListener('click', randomizeGradient)
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
fullCSSCopyBtn.addEventListener("click", ()=>copyBackgroundColor(fullCSSCopyBtn, fullCSS));
RGBCopyBtn.addEventListener("click", ()=>copyBackgroundColor(RGBCopyBtn, RGBText));
hexCopyBtn.addEventListener("click", ()=>copyBackgroundColor(hexCopyBtn, hexText));
exchangeBtn.addEventListener("click", exchangeGradient)
