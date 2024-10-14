// Example of functions in javascript

// 1st way : normal way using function keyword and its parameters
function showMessage() {
    console.log("Hello , this is the message i want to display");
}
// showMessage();

// 2nd way : using function expression => no need to write the function name
let message = function() {
    console.log("Hello , this is the message i want to display");
}
message();

let square = function(a){
    return a * a;
}
let result = square(5);
console.log(result);

// 3rd way : use function as a variable name 

function cube(num){
    return num * num * num;
}
let cube_result = cube(4);
console.log(`The cube of a 4 is ${cube_result}`);

// 4th way : using fat arrow function => most simple and used way of writing the function.

const multiplication = (a , b) => a * b;
console.log(multiplication(5,4));

// let take example to return the value
function addition(a , b){
    return a + b;
}
// console.log(addition(51,10));
