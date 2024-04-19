window.addEventListener('load', () => {
  const playerOne = 'X';
  const playerTwo = 'O';

  let turn = playerOne;
  const GAME = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  const BOXES = document.querySelectorAll('.box');

  const isFull = () => {
    const CP_BOXES = [...GAME].flat(Infinity);
    const isTotal = CP_BOXES.every(box => box !== null);
    return isTotal;
  }

  const checkGame = () => {
    const isWinnerRowOne = [GAME[0][0], GAME[0][1], GAME[0][2]].every(item => item === GAME[0][0]);
    const isWinnerRowTwo = [GAME[1][0], GAME[1][1], GAME[1][2]].every(item => item === GAME[1][0]);
    const isWinnerRowThree = [GAME[2][0], GAME[2][1], GAME[2][2]].every(item => item === GAME[2][0]);
    
    const isWinnerColumnOne = [GAME[0][0], GAME[1][0], GAME[2][0]].every(item => item === GAME[0][0]);
    const isWinnerColumnTwo = [GAME[0][1], GAME[1][1], GAME[2][1]].every(item => item === GAME[0][1]);
    const isWinnerColumnThree = [GAME[0][2], GAME[1][2], GAME[2][2]].every(item => item === GAME[0][2]);

    const isWinnerDiagonalOne = [GAME[0][0], GAME[1][1], GAME[2][2]].every(item => item === GAME[0][0]);
    const isWinnerDiagonalTwo = [GAME[0][2], GAME[1][1], GAME[2][0]].every(item => item === GAME[0][2]);

    if (isWinnerRowOne || isWinnerColumnOne) {
      alert(`1`);
      window.location.reload();
      return;
    }

    if (isWinnerRowTwo || isWinnerColumnTwo) {
      alert(`2`);
      window.location.reload();
      return;
    }

    if (isWinnerRowThree || isWinnerColumnThree) {
      alert(`3`);
      window.location.reload();
      return;
    }

    if (isWinnerDiagonalOne) {
      alert(`4`);
      window.location.reload();
      return;
    }

    if (isWinnerDiagonalTwo) {
      alert(`5`);
      window.location.reload();
      return;
    }

  }

  BOXES.forEach((box) => {
    box.addEventListener('click', () => {
      const row = box.getAttribute('data-row');
      const column = box.getAttribute('data-col');
      GAME[row][column] = turn === playerOne ? 0 : 1;
      box.innerHTML = turn;
      turn = turn === playerOne ? playerTwo : playerOne;
      if (isFull()) {
        checkGame();
      }
      console.log(window);
    });
  })
})