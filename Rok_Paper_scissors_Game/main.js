 const Paper_Id = document.getElementById("Paper");
 const Rock_Id = document.getElementById("Rock");
 const Scissor_Id = document.getElementById("Scissor");

function getComputerChoice(){
  const choices = ["r", "p", "s"];
  const RandomNum =  Math.floor(Math.random() * 3);
  return choices[RandomNum];
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
        console.log("User Win.");
      break;
      case "rp":
      case "ps":
      case "sr":
          console.log("User Lose.");
      break;
      case "rr":
      case "pp":
      case "ss":
            console.log("game is draw");
        break;
  }

}


/*
 function game(userChoice) {
   console.log("Let's - " + userChoice);
 }*/

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



/*
      document.getElementById("click").onclick = function(){
     const YourAns = document.getElementById("option").value;

    var RandomNum = Math.floor(Math.random() * 3);
    RandomNum++;

       if (YourAns == RandomNum){
            alert("you Got it..!");
       }else{
           alert("Ups! The number is " + RandomNum + ".");
       }

      }
*/
