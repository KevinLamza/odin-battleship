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

render.init();

(function () {
  // DOM.resetButton.addEventListener('click', resetGame);
  // DOM.newGameButton.addEventListener('click', resetGame);

  document.addEventListener(
    'click',
    function (event) {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          if (event.target.matches('#P1' + i + j)) {
            alert('#P1' + i + j);
          } else if (event.target.matches('#P2' + i + j)) {
            if (event.target.matches('#P2' + i + j)) {
              alert('#P2' + i + j);
            }
          }
        }
      }
    },
    false,
  );
})();
