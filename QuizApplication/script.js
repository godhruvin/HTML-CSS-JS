const buttonEl = document.getElementById("btn");
const inputEl = document.getElementsByTagName("input")[0];
const scoreVal = document.getElementById("score");
const quesVal = document.getElementById("question");
const formEl = document.getElementById("form");

const number1 = Math.ceil(Math.random() * 10);
const number2 = Math.ceil(Math.random() * 10);

let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}

quesVal.innerHTML = `What is ${number1} Multiplied By ${number2}. (${number1} * ${number2})`;

// function to test the ans on the click of Submit Button.
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputEl.value == "" || inputEl.value == null) {
    alert("Please provide the answer to submit");
    return;
  }
  if (inputEl.value == number1 * number2) {
    score += 1;
    scoreVal.innerHTML = `Score : ${score}`;
    updateLocalStorage();
    
  } else {
    score -= 1;
    scoreVal.innerHTML = `Score : ${score}`;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
