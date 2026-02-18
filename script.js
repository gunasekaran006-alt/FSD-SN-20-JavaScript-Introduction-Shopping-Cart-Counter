// 1. App Name - Var (Legacy style)
var appName = "A1 Super Market";

// 2. Tax Rate - const used ( Fixed )
const Tax_Rate = 0.18 // 18% GST

// 3. Cart Items - Let used ( changeable / variable )
let cartItemCount = 0;
let totalPrice = 0;

//Adding Items
console.log("Welcome:" + appName);

// 1st Item Add
cartItemCount = 1;
totalPrice = 500;
// 2nd Item Add
cartItemCount = 2;
totalPrice = 500+300; // Total 800

// 4. Tax & Total Calculate
const finalTax = totalPrice * Tax_Rate;
const grandTotal = totalPrice + finalTax;

// Result
console.log("Product Quantity: " + cartItemCount);
console.log("Product Price: $" + totalPrice);
console.log("Tax: $" + finalTax);
console.log("Total Amount: $" + grandTotal);

document.getElementById("store-name").innerText = appName;
document.getElementById("count").innerText = cartItemCount;
document.getElementById("total").innerText = grandTotal;

