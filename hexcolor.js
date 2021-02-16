const hex = document.querySelector(".colorname"),
    color = hex.querySelector("h1"),
    button = hex.querySelector("button");

const randomNumber = "randomNumber";
randomNumber = Math.floor(Math.random()*10)



function Number(randomNumber) {
    return Math.floor(Math.random()*10)
}
//0~9까지의 숫자와 A~F까지의 알파벳이 랜덤하게 구성되어 이루는 6자리 코드

console.log();

function handleSumit(){
    color.innerText = `HEX COLOR :#${randomNumber}`;
    //컬러를 바꿔야함....여기서
}

function init() {
    button.addEventListener("click", handleSumit);
}

init();