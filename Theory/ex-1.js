// console.log("Hello");
const username = "Amit";
let laptopPrice = 45000;
let mousePrice = 1200;
let keyboardPrice = 2300;

let laptopQuantity = 1;
let mouseQuantity = 2;
let keyboardQuantity = 1;

const gst = 0.18;

let laptopTotal = laptopPrice * laptopQuantity;
let mouseTotal = mousePrice * mouseQuantity;
let keyboardTotal = keyboardPrice * keyboardQuantity;

let subtotal = laptopTotal + mouseTotal + keyboardTotal;

// Calculate GST
let gstAmount = subtotal * gst;

let finalAmout = subtotal + gstAmount;
// console.log("Total amount is :",finalAmout);
console.log(`Hi ${username}, Total amount is ${finalAmout}`);
