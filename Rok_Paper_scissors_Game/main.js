
 const Paper_Id = document.getElementById("Paper");
 const Rock_Id = document.getElementById("Rock");
 const Scissor_Id = document.getElementById("Scissor");
 var userScore = 0;
 var computerScore = 0;
 const playerScore_td = document.getElementById("player_score");
 const computerScore_td = document.getElementById("comp_score");



function getComputerChoice(){
  const choices = ["r", "p", "s"];
  const RandomNum =  Math.floor(Math.random() * 3);
  return choices[RandomNum];
}

function win(){
  userScore++;
  playerScore_td.innerHTML = userScore ;
  computerScore_td .innerHTML = computerScore;
}
function lose(){
  computerScore++;
  playerScore_td.innerHTML = userScore ;
  computerScore_td .innerHTML = computerScore;
  console.log("LOST");
}
function draw(){
  playerScore_td.innerHTML = userScore ;
  computerScore_td .innerHTML = computerScore;
  console.log("DRAW");
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
        win();
      break;
      case "rp":
      case "ps":
      case "sr":
          lose();
      break;
      case "rr":
      case "pp":
      case "ss":
            draw();
        break;
  }

}


function main(){
Paper_Id.addEventListener('click', function(){
    game("p");
  })
  Rock_Id.addEventListener('click', function(){
    game("r");
  })
   Scissor_Id.addEventListener('click', function(){
    game("s");
  })
 }
 main();
