// 1 write a program to implement bubble sort

const arr = [6,4,0,3,-2,1];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j+1]) {
      let temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
    }
  }
}
// console.log(arr);


// Que 5 Write a JavaScript program to get the length of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
}
console.log(Object.keys(student).length)

// Que 6. Write a JavaScript program that returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

function substringArray(str){
  const subsets = []
  for(let i = 0; i < str.length; i++){
    for(let j = i+1; j <= str.length; j++){
      subsets.push(str.slice(i , j));
    }
  }
  return subsets;
}
// console.log(substringArray('dog'))


// Que 4. WAP which find unique characters from the string which user provide using JavaScript
function findUniqueCharacters(str) {
  const charCount = new Set(); 
  const duplicateChars = new Set(); 
  const uniqueChars = []; 

  for (let char of str) {
      if (charCount.has(char)) {
          duplicateChars.add(char);
      } else {
          charCount.add(char); 
      }
  }
  for (let char of charCount) {
      if (!duplicateChars.has(char)) {
          uniqueChars.push(char); 
      }
  }

  return uniqueChars.join(''); 
}

const userInput = "hello"
const uniqueCharacters = findUniqueCharacters(userInput);

// console.log("Unique characters: ", uniqueCharacters);


// Que 2 : 2. Write a JavaScript program to create a clock.
// Note: The output will come every second.
// Expected Console Output :
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"

function showClock(){
  const date = new Date();
  const hr = date.getHours().toString().padStart(2,'0');
  const min = date.getMinutes().toString().padStart(2,'0');
  const sec = date.getSeconds().toString().padStart(2,'0');

  const time = `${hr} : ${min} : ${sec}`
  console.log(time)
}
showClock()
setInterval(showClock , 1000);