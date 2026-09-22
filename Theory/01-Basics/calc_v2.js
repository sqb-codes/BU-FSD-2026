let firstNum = document.querySelector("#box-1");
let secondNum = document.querySelector("#box-2");
let result;

console.log("Before calculation: " + firstNum + "," + secondNum);

document.querySelector("#add").addEventListener("click", add);
document.querySelector("#sub").addEventListener("click", sub);
document.querySelector("#div").addEventListener("click", div);
document.querySelector("#mul").addEventListener("click", mul);

function add() {
    console.log(firstNum.value + "," + secondNum.value);
    result = parseInt(firstNum.value) + parseInt(secondNum.value);
    document.querySelector("#result").innerText = result;
}

function sub() {
    result = parseInt(firstNum.value) - parseInt(secondNum.value);
    document.querySelector("#result").innerText = result;
}

function div() {
    result = parseInt(firstNum.value) / parseInt(secondNum.value);
    document.querySelector("#result").innerText = result;
}

function mul() {
    result = parseInt(firstNum.value) * parseInt(secondNum.value);
    document.querySelector("#result").innerText = result;
}