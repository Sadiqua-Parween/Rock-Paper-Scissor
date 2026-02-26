const choises = ["rock", "paper", "scissors"];
      let computer = choises[Math.floor(Math.random() * 3)];
      console.log(computer);

      let result = document.getElementById("result-text");

      let choice = document.getElementsByClassName("choice");
      for (let c of choice) {
        c.addEventListener("click", play);
      }

      let playerScore = document.getElementById("player-score");
      let computerScore = document.getElementById("computer-score");

      let playerMove = document.getElementById("player-move");
      let ComputerMove = document.getElementById("computer-move");

      function play(e) {
        let choice = e.target.dataset.choice;
        computer = choises[Math.floor(Math.random() * 3)];

        playerMove.textContent = choice;
        ComputerMove.textContent = computer;
        if (choice === computer) {
          result.textContent = "Tie";
          console.log(computer);
        } else if (choice === "rock" && computer === "scissors") {
          result.textContent = "Win🏅";
          playerScore.textContent = Number(playerScore.textContent) + 1;
          console.log(computer);
        } else if (choice === "rock" && computer === "paper") {
          result.textContent = "Lose 🤡";
          computerScore.textContent = Number(computerScore.textContent) + 1;
          console.log(computer);
        } else if (choice === "paper" && computer === "scissors") {
          result.textContent = "Lose 🤡";
          computerScore.textContent = Number(computerScore.textContent) + 1;
          console.log(computer);
        } else if (choice === "paper" && computer === "rock") {
          result.textContent = "Win🏅";
          playerScore.textContent = Number(playerScore.textContent) + 1;
          console.log(computer);
        } else if (choice === "scissors" && computer === "paper") {
          result.textContent = "Win🏅";
          playerScore.textContent = Number(playerScore.textContent) + 1;
          console.log(computer);
        } else if (choice === "scissors" && computer === "rock") {
          result.textContent = "Lose 🤡";
          computerScore.textContent = Number(computerScore.textContent) + 1;
          console.log(computer);
        } else {
          reset();
        }
      }

      let reset = document.getElementsByClassName("reset")[0];
      reset.addEventListener("click", function reset() {
        location.reload();
      });