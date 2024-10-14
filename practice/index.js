// const button = document.querySelector("button");

// button.addEventListener("click", updateName);

// function updateName() {
//   const name = prompt("Enter a new name");
//   button.textContent = `Player 1: ${name}`;
// }
const button = document.querySelector('button');

button.addEventListener('click' , updateName);

function updateName(){
    const name = prompt("Pls enter the name of your choice");
    button.textContent = `Click Me : ${name}`;
}