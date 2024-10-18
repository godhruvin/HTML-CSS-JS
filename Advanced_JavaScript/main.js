// Advanced concepts of the JAvaScript
// https://www.wearecapicua.com/blog/12-advanced-javascript-concepts#12-advanced-javascript-concepts
// 1) closures

// A closure is a function that has access to its outer function's variables, even after the outer function has returned.

//  a function can access the variables inside the function but the function can even access the var declared outside the function 

let a = 5;
function product(){
    return a * a;
}
// console.log(product());

// let take a counter example 

function counter(){
    let count = 0;
    count += 1;
    return count;
}
counter()
counter()
counter()
// console.log(counter())
// in above case every time the function is called it will declare the count to zero , so the final output is 1

// for solving this problem , inner function will do this work.

function makeCounter() {
    let count = 0; 

    return function() {
        count += 1; 
        return count; 
    }; // Here the makeCounter will return the function in the output.
}

const counter1 = makeCounter(); 

// console.log(counter1()); // 1
// console.log(counter1()); // 2
// console.log(counter1()); // 3


function increment(){   
    let count = 0;
    return function add1(){
        count += 1;
        return count;
    }
}
const myfunc = increment();

console.log(myfunc())
console.log(myfunc())
console.log(myfunc())
