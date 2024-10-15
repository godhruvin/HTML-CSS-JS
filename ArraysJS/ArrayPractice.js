const arr = [1,2,3,4,5];

// perform all the built- in methods of the array 
console.log(arr.length);

// console.log(arr.toString())
// console.log(arr.at(2));
// console.log(arr.join("-"))  // same as tostring but in this u can specify the separator
arr.pop()     
arr.push(7);
// console.log(arr)
// console.log(arr.shift()) // shift or remove the first element of the array.
arr.unshift(10);
// console.log(arr);

// delete arr[0];
// console.log(arr) // it will leave undefined in the array , thats why use shift or pop

const arr2 = [1,4,5,6,7];
const concatArray = arr.concat(arr2);
// console.log(concatArray)

arr.splice(5,0,'200')
// console.log(arr)


// console.log(arr.includes(10));
// diff between includes and indexof is includes help u to check if an specific element 
// is present in the array or not including undefined , null , whereas , index of return the index of element in the array
// console.log(arr)
arr.push(10);
console.log(arr)
// console.log(arr.find(num => num % 2 === 0))


console.log(Math.min.apply(null , arr))
console.log(Math.max.apply(null , arr))


const multiply = arr.map(num => num * num);
console.log(multiply)

const filteredArr = arr.filter(num => num % 2 === 0);
console.log(filteredArr)

// const sum = arr.reduce((a,b)=>{return a + b},arr[0] + arr[1])

const newarr = Array.from('abcde');
console.log(newarr)