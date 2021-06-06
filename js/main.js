// let startGame = confirm("Why don't we play a game?")

// while(startGame) {
//   let playerChoice = prompt("Ok choose paper, rock or scissors")
//     if(playerChoice || playerChoice ==="") {
//       let playerOne = playerChoice.trim().toLowerCase();  
//         if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
//           let computerChoice = Math.floor(Math.random() * 3 + 1)
//           let computer = computerChoice === 1 ? "paper" 
//           :computerChoice === 2 ? "scissors" 
//           : "scissors";
//           let result =  
//           playerOne === computer ? `You:  ${playerOne}\nComputer: ${computer}\nFriendship won`
//           : playerOne === "rock" && computer === "paper" 
//           ? `You: ${playerOne}\nComputer: ${computer}\nComputer wins!)))`
//           : playerOne === "paper" && computer === "scissors" 
//           ? `You: ${playerOne}\nComputer: ${computer}\nComputer wins!)))`
//           : playerOne === "scissors" && computer === "rock" 
//           ? `You: ${playerOne}\nComputer: ${computer}\nComputer wins!)))`
//           :`You: ${playerOne}\nComputer: ${computer}\nYou win!)))`;
//           alert(result)
//           startGame = "What about a revenge?"
//           if (startGame=== false) {
//             alert("Thanks for a game!")
//             break;
//           }
//           else{
//             continue
//           }
//         } else {
//           alert("You didn't choose a character!")
//         }
//     } else {
//       alert("Ok may be next time")
//     }
  
// } 

// // finished successfully

let startGame = confirm("Why don't we chill out?")
while (startGame === true) {
  const playerChoice = prompt("Please enter rock, paper or scissors")
  playerChoice.trim().toLowerCase
  if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors"){
    const computerChoice = Math.floor(Math.random() * 3 + 1);
    const computer = computerChoice === 1 ? "rock"
    :computerChoice === 2 ? "paper"
    :"scissors"
    const result = 
    playerChoice === computer ? `You ${playerChoice} \nComputer: ${computer} \nFriendship wins!`
    :playerChoice === "rock" && computer === "paper" ? `You ${playerChoice} \nComputer: ${computer} \nComputer wins!`
    :playerChoice === "paper" && computer === "scissors" ? `You ${playerChoice} \nComputer: ${computer} \nComputer wins!`
    :playerChoice === "scissors" && computer === "rock" ? `You ${playerChoice} \nComputer: ${computer} \nComputer wins!`
    :  `You ${playerChoice} \nComputer: ${computer} \nYou win!`
    alert(result)
  } else {
    alert("Please enter appropriate characters!")
    continue
  }
  startGame = confirm("What about a revenge?")
  if (startGame) {
    continue
  } else  {
    alert("May be next time.")
    break
  }
}