export function fetchDom() {
  const currentTurn = document.querySelector('.currentTurn');
  const playerOneBoard = document.querySelector('.board.playerOne');
  const playerTwoBoard = document.querySelector('.board.playerTwo');

  const dialog = document.querySelector('dialog');
  const announcement = document.querySelector('.announcement');
  const resetButton = document.querySelector('.resetButton');
  const newGameButton = document.querySelector('.newGameButton');

  const playerOneList = document.querySelector('.playerOneList');
  const playerTwoList = document.querySelector('.playerOneList');

  const ship0player1 = document.querySelector('#ship0player1');
  const ship1player1 = document.querySelector('#ship1player1');
  const ship2player1 = document.querySelector('#ship2player1');
  const ship3player1 = document.querySelector('#ship3player1');
  const ship4player1 = document.querySelector('#ship4player1');
  const ship5player1 = document.querySelector('#ship5player1');
  const ship6player1 = document.querySelector('#ship6player1');
  const ship7player1 = document.querySelector('#ship7player1');
  const ship8player1 = document.querySelector('#ship8player1');
  const ship9player1 = document.querySelector('#ship9player1');

  const shipsPlayer1 = [];
  for (let i = 0; i < 10; i++) {
    shipsPlayer1[i] = document.querySelector('#ship' + i + 'player1');
  }

  const ship0player2 = document.querySelector('#ship0player2');
  const ship1player2 = document.querySelector('#ship1player2');
  const ship2player2 = document.querySelector('#ship2player2');
  const ship3player2 = document.querySelector('#ship3player2');
  const ship4player2 = document.querySelector('#ship4player2');
  const ship5player2 = document.querySelector('#ship5player2');
  const ship6player2 = document.querySelector('#ship6player2');
  const ship7player2 = document.querySelector('#ship7player2');
  const ship8player2 = document.querySelector('#ship8player2');
  const ship9player2 = document.querySelector('#ship9player2');

  const shipsPlayer2 = [];
  for (let i = 0; i < 10; i++) {
    shipsPlayer2[i] = document.querySelector('#ship' + i + 'player2');
  }

  return {
    currentTurn,
    playerOneBoard,
    playerTwoBoard,
    dialog,
    announcement,
    resetButton,
    newGameButton,
    playerOneList,
    playerTwoList,
    ship0player1,
    ship1player1,
    ship2player1,
    ship3player1,
    ship4player1,
    ship5player1,
    ship6player1,
    ship7player1,
    ship8player1,
    ship9player1,
    ship0player2,
    ship1player2,
    ship2player2,
    ship3player2,
    ship4player2,
    ship5player2,
    ship6player2,
    ship7player2,
    ship8player2,
    ship9player2,
    shipsPlayer1,
    shipsPlayer2,
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
    const DOM = fetchDom();
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
      for (let i = 0; i < player.board.placedShips.length; i++) {
        if (player.board.placedShips[i]['sunk'] === true) {
          DOM.shipsPlayer1[i].setAttribute('class', 'crossed');
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
            gridCell.setAttribute('class', 'cell ship hidden');
          }
        }
      }
      for (let i = 0; i < player.board.placedShips.length; i++) {
        if (player.board.placedShips[i]['sunk'] === true) {
          DOM.shipsPlayer2[i].setAttribute('class', 'crossed');
        }
      }
    }
  },
  gameOver(player) {
    const DOM = fetchDom();
    DOM.dialog.showModal();
    DOM.announcement.textContent = player + ' won the game!';
  },
  clear(player1, player2) {
    const DOM = fetchDom();
    while (DOM.playerOneBoard.firstChild) {
      DOM.playerOneBoard.removeChild(DOM.playerOneBoard.firstChild);
    }
    while (DOM.playerTwoBoard.firstChild) {
      DOM.playerTwoBoard.removeChild(DOM.playerTwoBoard.firstChild);
    }
    for (let i = 0; i < player1.board.placedShips.length; i++) {
      DOM.shipsPlayer1[i].setAttribute('class', 'shipListItem');
    }
    for (let i = 0; i < player2.board.placedShips.length; i++) {
      DOM.shipsPlayer2[i].setAttribute('class', 'shipListItem');
    }
    this.currentPlayer = 1;
  },
};
