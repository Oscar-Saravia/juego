window.addEventListener("load", () => {
  // Jugadores
  const player1 = "X";
  const player2 = "O";
  // Turno
  let currentPlayer = player1;
  // Matriz de Juego
  const GAME = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  const BOXES = document.querySelectorAll(".box");

  // HELPERS
  const checkGame = () => {
    let winner = false;

    // Winner by Row
    GAME.map((rows) => {
      winner = rows.every((row) => row === currentPlayer);
      if (winner) {
        alert(`Winner: ${currentPlayer}`);
        window.location.reload();
      }
    });

    // Winner by Column
    GAME.map((rows, index) => {
      winner = [GAME[0][index], GAME[1][index], GAME[2][index]].every((row) => row === currentPlayer);
      if (winner) {
        alert(`Winner: ${currentPlayer}`);
        window.location.reload();
      }
    });

    // Winner by Diagonal
    {
      diag1 = [GAME[0][0], GAME[1][1], GAME[2][2]].every((row) => row === currentPlayer);
      diag2 = [GAME[0][2], GAME[1][1], GAME[2][0]].every((row) => row === currentPlayer);

      if (diag1 || diag2) {
        alert(`Winner: ${currentPlayer}`);
        window.location.reload();
      }
    }

    // No winner - Game Over
    {
      winner = GAME.flat(Infinity).every( (items) => items !== null)
      if(winner){
        alert(`Game Over`);
        window.location.reload();
      }
    } 
  };
  // Logica de juego
  BOXES.forEach((box) => {
    box.addEventListener("click", () => {
      const row = box.getAttribute("data-row");
      const column = box.getAttribute("data-col");

      if (GAME[row][column] === null) {
        // set value in the matrix
        GAME[row][column] = currentPlayer;
        // Draw player in the board
        box.innerHTML = currentPlayer;
        //check who's winner
        checkGame();
        // switch player
        currentPlayer = currentPlayer === player1 ? player2 : player1;
      }
    });
  });
});
