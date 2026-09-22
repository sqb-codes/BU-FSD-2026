let firstNum = document.querySelector("#box-1");
let secondNum = document.querySelector("#box-2");
let result;

let buttons = document.querySelectorAll("button");
// Now buttons is an array
for(let btn of buttons) {
    btn.addEventListener("click", calc);
}

function calc() {
    console.log(firstNum.value + "," + secondNum.value);
    let btn = this;
    // console.log("Current element",btn);
    let operator = btn.innerText;
    let expression = firstNum.value + operator + secondNum.value;
    // console.log("Expression",expression);
    result = eval(expression);
    document.querySelector("#result").innerText = result;
}