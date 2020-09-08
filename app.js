let humanScore = 0;
let computerScore = 0;

//dummy variables
const humanScore_span = document.getElementById("human-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoise() {
  const choises = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choises[randomNumber];
}

function convertToWord(letter) {
  if (letter == "r") return "Rock";
  if (letter == "p") return "Paper";
  return "Scissors";
}

function win(userChoise, computerChoise) {
  const smallUserWord = "user".fontsize(3).sup(); // this methods exists on the String object in javascript
  const smallComputerWord = "computer".fontsize(3).sup();
  const userChoise_div = document.getElementById(userChoise);
  humanScore++;
  humanScore_span.innerHTML = humanScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${smallUserWord} ${convertToWord(userChoise)} beats
  ${smallComputerWord} ${convertToWord(computerChoise)}. You win 🔥🔥 !!!`;
  userChoise_div.classList.add('green-glow');
  setTimeout(() => {
    userChoise_div.classList.remove('green-glow')
  }, 400);
}

function lose(userChoise, computerChoise) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallComputerWord = "computer".fontsize(3).sup();
  const userChoise_div = document.getElementById(userChoise);
  computerScore++;
  humanScore_span.innerHTML = humanScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${smallUserWord} ${convertToWord(userChoise)} loses to
  ${smallComputerWord} ${convertToWord(computerChoise)}. You lose 😟.`;
  userChoise_div.classList.add('red-glow');
  setTimeout(() => {
    userChoise_div.classList.remove('red-glow')
  }, 400);
}

function draw(userChoise, computerChoise) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallComputerWord = "computer".fontsize(3).sup();
  const userChoise_div = document.getElementById(userChoise);
  result_p.innerHTML = `${smallUserWord} ${convertToWord(
    userChoise
  )} can't win to
  ${smallComputerWord} ${convertToWord(
    computerChoise
  )}. We got a draw here 🤝.`;
  userChoise_div.classList.add('grey-glow');
  setTimeout(() => {
    userChoise_div.classList.remove('grey-glow')
  }, 400);
}

function game(userChoise) {
  const computerChoise = getComputerChoise();
  switch (userChoise + computerChoise) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoise, computerChoise);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoise, computerChoise);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoise, computerChoise);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });

  paper_div.addEventListener("click", function () {
    game("p");
  });

  scissors_div.addEventListener("click", function () {
    game("s");
  });
}

main();
