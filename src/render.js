const DOM = (function () {
  const currentTurn = document.querySelector('.currentTurn');
  const playerOneBoard = document.querySelector('.board.playerOne');
  const playerTwoBoard = document.querySelector('.board.playerTwo');

  return { currentTurn, playerOneBoard, playerTwoBoard };
})();

export const render = {
  init() {
    // const DOM = fetchDom();
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
  update() {},
};
