// Because of webpack, CSS rules need to be imported here and not in the .html file
import './styles.css';

// Another webpack check
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

// ---------------------- START YOUR CODE BELOW HERE

import { Ship } from './ship.js';
import { Gameboard } from './ship.js';
import { Player } from './ship.js';
import { render } from './render.js';
import { DOM } from './render.js';

(function () {
  render.init();
  const playerOne = new Player('playerOne');
  const playerTwo = new Player('playerTwo');

  playerOne.board.place([
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
  ]);
  playerOne.board.place([
    [2, 0],
    [2, 1],
    [2, 2],
  ]);
  playerTwo.board.place([
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
  ]);
  playerTwo.board.place([
    [2, 0],
    [2, 1],
    [2, 2],
  ]);
  render.update(playerOne);
  render.update(playerTwo);

  document.addEventListener(
    'click',
    function (event) {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          if (event.target.matches('#P1' + i + j)) {
            if (render.currentPlayer === 2) {
              console.log('Valid click 1');
              playerOne.board.receiveHit([i, j]);
              render.update(playerOne);
              render.currentPlayer = 1;
            }
          } else if (event.target.matches('#P2' + i + j)) {
            if (event.target.matches('#P2' + i + j)) {
              if (render.currentPlayer === 1) {
                console.log('Valid click 2');
                playerTwo.board.receiveHit([i, j]);
                render.update(playerTwo);
                render.currentPlayer = 2;
              }
            }
          }
        }
      }
    },
    false,
  );
})();
