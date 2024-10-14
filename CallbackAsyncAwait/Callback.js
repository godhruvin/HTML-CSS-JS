// callback function are the function which are passed as a parameter to another function
function displayer(some){
   return some;
}
function myfirst(){
    console.log(displayer("hello first"));
}
function mysecond(){
    console.log(displayer("hello second"));
}
mysecond();
myfirst();


// Another example

// 1: 
// to display the calculation result 
function display(some){
    return some;
}
// function to calculate the result
function calc(a , b){
  return a + b;
}

console.log(display(calc(45,10)));
// console.log(result);

// 2:

function calculation(a , b){
    let sum = a + b;
    return display(sum);
}
console.log(calculation(4,10));

// The problem with the above example is that in 1st it is required to make 2 functions and in 2nd we cant stop the display function from stop running.

// solving this error , here come the call back function
// now we will pass the display function in the calculation function

function displayer(some){
    return some;
}
// myCallback is just acting as a paramater
function calculation(a , b , myCallback){
    let sum = a + b;
    return myCallback(sum); 
}
// here , displayer replaces the myCallback function
let result = calculation(45,55 , displayer);
console.log(result);    