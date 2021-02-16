const hex = document.querySelector(".colorname"),
    color = hex.querySelector("h1"),
    button = hex.querySelector("button");


const RANDOMPICK_LS = "colorname";

function saveColorName(text){
    localStorage.setItem(RANDOMPICK_LS, text);
}

function pick() {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    const sol = array[Math.floor(Math.random()*array.length)];
    return sol; // array에서 randomly pick
}

function combine(){
    const picked = `${pick()}${pick()}${pick()}${pick()}${pick()}${pick()}`;
    return picked;
}

//0~9까지의 숫자와 A~F까지의 알파벳이 랜덤하게 구성되어 이루는 6자리 코드

function handleSumit(){
    const currentValue = combine();
    paintColor(currentValue);
    saveColorName(currentValue);
}

function paintColor(text){
    color.innerText = `HEX COLOR :#${text}`;
    hex.style.backgroundColor = `#${text}`;
}

function loadColorName(){
    const loadedColor = localStorage.getItem(RANDOMPICK_LS);
    if(loadedColor !== null){
        paintColor(loadedColor);
    } 
}

function init() {
    loadColorName();
    button.addEventListener("click", handleSumit);
}

init();