let index = alert ("Welcome to the Land Of Pastry!");


const menuButton = document.getElementById('pink');
function pink (jo, on, na, ah, jn) {
    let add = (jo + on + na + ah + jn);
    let total = add;
    console.log("Total price is " + total);

    let cash = parseFloat(prompt("Enter your cash paid"));
    let change = cash - total;

    console.log("Cash paid: " + cash);
    console.log("Change: " + change);
}

let j = prompt("List your grocery 1");
let o = prompt("List your grocery 2");
let n = prompt("List your grocery 3");
let a = prompt("List your grocery 4"); 
let h = prompt("List your grocery 5");

let jo = parseFloat(prompt("The price of " + j));
let on = parseFloat(prompt("The price of " + o));
let na = parseFloat(prompt("The price of " + n));
let ah = parseFloat(prompt("The price of " + a));
let jn = parseFloat(prompt("The price of " + h));

console.log("Your grocery item is " + j + ", the grocery price is " + jo);
console.log("Your grocery item is " + o + ", the grocery price is " + on);
console.log("Your grocery item is " + n + ", the grocery price is " + na);
console.log("Your grocery item is " + a + ", the grocery price is " + ah);
console.log("Your grocery item is " + h + ", the grocery price is " + jn);

groceries(jo, on, na, ah, jn);
  
