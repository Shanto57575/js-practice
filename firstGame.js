//Rock paper scissor game in console menu
let playGame = confirm("Cholo rock, paper, scissors kheli !!!")
if (playGame) {
  let playerChoice = prompt("Asho kheli!!! \n please Enter rock, paper or scissor");
  if (playerChoice) {
    let player = playerChoice.trim().toLowerCase();
    if (player == "rock" || player == "paper" || player == "scissor") {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer = computerChoice == 1 ? "rock" : computerChoice == 2 ? "paper" : "scissor";
      let result =
        (player == computer)
          ? "Game Tie!!!"
          : (player == "rock" && computer == "paper")
            ? `player: ${player}\n computer : ${computer}\nComputer Wins!!!`
            : (player == "rock" && computer == "scissor")
              ? `player: ${player}\n computer : ${computer}\n player Wins!!!`
              : (player == "scissor" && computer == "paper")
                ? `player: ${player}\n computer : ${computer}\nplayer Wins!!!`
                : `player: ${player}\n computer : ${computer}\n player wins!!!`
      alert(result);
      let playAgain = confirm("playAgain?")
      playAgain ? location.reload() : alert("Ok arekdin khelbo");
    }
    else if (playerChoice != "rock" || playerChoice != "paper" || playerChoice != "scissor") {
      alert("You Entered something else");
      location.reload();
  }
  }
  else
  alert("khelbi bole khelos na keno?");
}
else {
  alert("Khelbo na tomar sathe");
}