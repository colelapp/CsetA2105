
const prompt = require('prompt-sync')();
let n = Number(prompt("How many numbers?"));
 let arr = [];
let sum = 0;

for (let i = 0; i < n; i++) {
    let num = Number(prompt("Enter a number:"));
     arr.push(num);
    sum += num;
}

console.log("Sum =", sum);

let previousItem = 0;
let currentItem = 1;
let arr = [previousItem,currentItem]
let n = Number(prompt("How many items?"));
for(let i=0; i<n-2;i++){
    let nextItem = previousItem + currentItem
    arr.push(nextItem)
    previousItem = currentItem
    currentItem = nextItem
}
function removeItem(){
    let arr = [3,7,12,8]
    let input = Number(prompt("Input the index number:"));
    arr.splice(input, 1)
console.log(arr)
}
removeItem()


function addItem(){
    let arr = [3,7,12,8]
    let input = Number(prompt("Input the index number:"));
    let item = Number(prompt("item please:"));
    arr.splice(input, 0,item)
    console.log(arr)
}
addItem()

let input = Number(prompt("Number of items in the grocery list:"))
let arr = []

for (let i = 0; i < input; i++) {
    let item = prompt("Items:").toLowerCase()
    arr.push(item)
}

console.log("Starting list:", arr)


while (true) {
    let choice = prompt("Choose: add, search, remove, print, exit").toLowerCase()

    if (choice === "add") {
        let newItem = prompt("Item to add:").toLowerCase()

        if (arr.indexOf(newItem) === -1) {
            arr.push(newItem)
            console.log(newItem + " added.")
        } else {
            console.log("Item already exists.")
        }
    }

    else if (choice === "search") {
        let searchItem = prompt("Item to search:").toLowerCase()

        if (arr.indexOf(searchItem) === -1) {
            console.log("Not found.")
        } else {
            console.log("Found!")
        }
    }
    else if (choice === "remove") {
        let removeItem = prompt("Item to remove:").toLowerCase()
        let index = arr.indexOf(removeItem)
        if (index === -1) {
            console.log("Item does not exist.")
        } else {
            arr.splice(index, 1)
            console.log(removeItem + " removed.")
        }
    }

    else if (choice === "print") {
        console.log("Your Grocery List:")
        for (let i = 0; i < arr.length; i++) {
            console.log((i + 1) + ". " + arr[i])
        }
    }
    else if (choice === "exit") {
        console.log("Program ended.")
        break
    }
    else {
        console.log("Invalid option.")
    }

max function
function MathMax(...numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
console.log(MathMax(2, 3, 4, 5, 6))

function RevNum() {
    let arr = [];
    let dih = prompt(`give me a number: ${arr.join("\n")} `)
    if (dih !== null) {
        for (let i = 0; i < dih.length; i++) {
            arr.push(dih[i])
        }
        arr.reverse()
    }

    return arr.join("");
}
console.log(RevNum())

let lower = "abcdefghijklmnopqrstuvwxyz";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function UpperCase(str) {
    let result = ""
    for (let i = 0; i < str.length; i++) {
        let c = str[i];
        let index = lower.indexOf(c);

        if (index !== -1) {
            result += upper[index]
        } else {
            result += c;
        }
    }
    return result;
}
console.log(UpperCase("i am daniel"));

function RevCase(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (letter === letter.toUpperCase()) {
            result += letter.toLowerCase();
        } else {
            result += letter.toUpperCase();
        }
    }
    return result;
}
console.log(RevCase("BaNaNa"));