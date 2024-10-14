// Que 1 : write a function to reverse a number

let reverse = 0;
function reverseNumber(num) {
  while (num > 0) {
    let rem = num % 10;
    reverse = reverse * 10 + rem;
    num = Math.floor(num / 10);
  }
  return reverse;
}

// console.log(reverseNumber(432));

// Que 2 : calculate the dog age
function calculateDogAge(puppy_age, conversionRate = 7) {
  let dogAge = puppy_age * conversionRate;
  console.log(`Your doggie is ${dogAge} years old in dog years!`);
}
// calculateDogAge(1);
// calculateDogAge(2);
// calculateDogAge(3, 5);

// Que 3 : Write a JavaScript function that checks whether a passed string is a palindrome or not?

const isPalindrome = (str) => {
    const normalString = str.toLowerCase();
    const revString = normalString.split('').reverse().join('');
    return revString === normalString;
}
console.log(isPalindrome('abba abba'));


//  Que 4 : calculate for the life time supply of your snacks

const calculateSupply = (age , amountPerDay) => {
    const remainingYears = maxAge - age; // Calculate the remaining years
    const totalAmount = Math.round(remainingYears * 365 * amountPerDay)
  console.log(`You will need ${totalAmount} to last you until the ripe old age of ${maxAge}`);
}
calculateSupply(20,20);
calculateSupply(21,45);
calculateSupply(40,60);