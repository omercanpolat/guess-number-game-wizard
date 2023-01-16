let numberEntered = document.getElementById("number_enter");
let checkButton = document.getElementById("check");
// let instantResult = document.getElementById("user_guess");
let warning = document.getElementById("warning");
let attemptCount = document.getElementById("attempt_count");
let attemptList = document.getElementById("attempt_list");
let luckyNumber = Math.floor(Math.random() * 100) + 1;
// let loading = document.getElementById("loading");
let attempt = 0;
let attempted = [];
let rangeHi = 100;
let rangeLow = 0;

console.log(luckyNumber);

checkButton.addEventListener("click", begin);

function begin() {
  if (numberEntered.value == luckyNumber) {
    //.value ile .HTML arası fark
    warning.innerHTML = `BRAVOOO! YOU WON!.. The Lucky Number is ${luckyNumber}. Do You Want to Try Again?`;
    bingo();
  } else if (numberEntered.value < 1 || numberEntered.value > 100) {
    // alert("Please enter a number between 1-100");
    warning.innerHTML = "Please enter a number between 1-100";
    tryAgain();
  } else if (numberEntered.value < luckyNumber) {
    if (rangeLow < numberEntered.value) {
      rangeLow = numberEntered.value;
    }
    warning.innerHTML = `Try Again.. Enter a number between ${rangeLow} and ${rangeHi}`;
    refresh();
  } else if (numberEntered.value > luckyNumber) {
    if (rangeHi > numberEntered.value) {
      rangeHi = numberEntered.value;
    }
    warning.innerHTML = `Try Again.. Enter a number between ${rangeLow} and ${rangeHi}`;
    refresh();
  }

  if (attempt == 10 && numberEntered.value != luckyNumber) {
    warning.innerHTML = `YOU LOST!.. THE LUCKY NUMBER WAS ${luckyNumber}, TRY AGAIN?`;
    restart();
  }
}

function bingo() {
  attempt++;
  attempted.push(numberEntered.value);
  attemptCount.innerHTML = attempt;
  attemptList.innerHTML = attempted.join(", ");
  checkButton.setAttribute("id", "restart");
  let restart = document.getElementById("restart");
  restart.innerHTML = "RESTART";
  restart.style.backgroundColor = "black";
  // restart.style.backgroundSize = "cover"
  restart.style.fontSize = "2rem";
  restart.style.padding = "1rem";
  restart.addEventListener("click", () => {
    location.reload();
  });
}
function tryAgain() {
  numberEntered.value = "";
}

function refresh() {
  attempt++;
  attemptCount.innerHTML = attempt;
  attempted.push(numberEntered.value);
  attemptList.innerHTML = attempted.join(", ");
  numberEntered.value = "";
}

function restart() {
  attemptCount.innerHTML = attempt;
  attemptList.innerHTML = attempted.join(", ");
  checkButton.setAttribute("id", "restart");
  let restart = document.getElementById("restart");
  restart.innerHTML = "RESTART";
  restart.style.backgroundColor = "black";
  restart.style.backgroundSize = "cover";
  restart.style.fontSize = "2rem";
  restart.style.padding = "1rem";
  restart.addEventListener("click", () => {
    location.reload();
  });
}

document.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    checkButton.click();
  }
});
