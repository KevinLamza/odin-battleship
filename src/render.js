export function fetchDom() {
  const currentTurn = document.querySelector('.currentTurn');
  const playerOneBoard = document.querySelector('.board.playerOne');
  const playerTwoBoard = document.querySelector('.board.playerTwo');

  const dialog = document.querySelector('dialog');
  const announcement = document.querySelector('.announcement');
  const resetButton = document.querySelector('.resetButton');
  const newGameButton = document.querySelector('.newGameButton');

  return {
    currentTurn,
    playerOneBoard,
    playerTwoBoard,
    dialog,
    announcement,
    resetButton,
    newGameButton,
  };
}

export const render = {
  currentPlayer: 1,
  init() {
    const DOM = fetchDom();
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let gridCell = document.createElement('div');
        gridCell.setAttribute('class', 'cell empty');
        gridCell.setAttribute('id', 'P1' + i.toString() + j.toString());
        DOM.playerOneBoard.appendChild(gridCell);
      }
    }
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let gridCell = document.createElement('div');
        gridCell.setAttribute('class', 'cell empty');
        gridCell.setAttribute('id', 'P2' + i.toString() + j.toString());
        DOM.playerTwoBoard.appendChild(gridCell);
      }
    }
  },
  update(player) {
    if (player.name === 'playerOne') {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          let gridCell = document.querySelector('#P1' + i + j);
          // console.log(gridCell);
          if (player.board.board[i][j] === 'E') {
            gridCell.setAttribute('class', 'cell empty');
          } else if (player.board.board[i][j] === 'M') {
            gridCell.setAttribute('class', 'cell missed');
          } else if (player.board.board[i][j] === 'H') {
            gridCell.setAttribute('class', 'cell hit');
          } else {
            gridCell.setAttribute('class', 'cell ship');
          }
        }
      }
    }
    if (player.name === 'playerTwo') {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          let gridCell = document.querySelector('#P2' + i + j);
          // console.log(gridCell);
          if (player.board.board[i][j] === 'E') {
            gridCell.setAttribute('class', 'cell empty');
          } else if (player.board.board[i][j] === 'M') {
            gridCell.setAttribute('class', 'cell missed');
          } else if (player.board.board[i][j] === 'H') {
            gridCell.setAttribute('class', 'cell hit');
          } else {
            gridCell.setAttribute('class', 'cell ship');
          }
        }
      }
    }
  },
  gameOver(player) {
    const DOM = fetchDom();
    DOM.dialog.showModal();
    DOM.announcement.textContent = player + ' won the game!';
  },
  clear() {
    const DOM = fetchDom();
    while (DOM.playerOneBoard.firstChild) {
      DOM.playerOneBoard.removeChild(DOM.playerOneBoard.firstChild);
    }
    while (DOM.playerTwoBoard.firstChild) {
      DOM.playerTwoBoard.removeChild(DOM.playerTwoBoard.firstChild);
    }
    this.currentPlayer = 1;
  },
};
