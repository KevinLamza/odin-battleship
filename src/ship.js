export class Ship {
  constructor(length) {
    if (!(length > 0 && length < 6)) throw new Error('Invalid ship length');
    this.length = length;
    this.hitsTaken = 0;
    this.sunk = false;
  }
  hit() {
    return ++this.hitsTaken;
  }
  isSunk() {
    if (this.hitsTaken >= this.length) {
      this.sunk = true;
    }
    return this.sunk;
  }
}

export class Gameboard {
  constructor() {
    this.board = [];
    this.placedShips = [];
    let rows = 10;
    let columns = 10;
    for (let i = 0; i < rows; i++) {
      this.board[i] = [];
      for (let j = 0; j < columns; j++) {
        this.board[i][j] = 'E'; // E stands for "empty"
      }
    }
  }
  place(array) {
    this.placedShips.push(new Ship(array.length));
    // console.log(this.placedShips);
    for (let i = 0; i < array.length; i++) {
      this.board[array[i][0]][array[i][1]] = (
        this.placedShips.length - 1
      ).toString();
    }
    return this.board;
  }
  receiveHit(array) {
    if (this.board[array[0]][array[1]] === 'E') {
      this.board[array[0]][array[1]] = 'M';
    } else if (
      this.board[array[0]][array[1]] === 'M' ||
      this.board[array[0]][array[1]] === 'H'
    ) {
      return false;
    } else {
      this.placedShips[Number(this.board[array[0]][array[1]])].hit();
      this.board[array[0]][array[1]] = 'H';
    }
    return this.board;
  }
  allSunk() {
    let status = true;
    for (let ship of this.placedShips) {
      if (ship.isSunk() === false) {
        status = false;
      }
    }
    return status;
  }
  randomizeHit() {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    return [x, y];
  }
  randomizedPlaceSingleShip(length, previousFields) {
    let run = true;
    let fullArray = [];
    let checkFields;
    while (run) {
      let startPoint = this.randomizeHit();
      let direction = Math.floor(Math.random() * 4);
      checkFields = structuredClone(previousFields);
      fullArray = [];

      // randomize a starting point and a direction; move in a direction and add the points to an array
      fullArray.push(startPoint);
      let valid = (() => {
        for (let i = 1; i < length; i++) {
          let x;
          let y;
          if (direction === 0) {
            x = startPoint[0] - i;
            y = startPoint[1];
          } else if (direction === 1) {
            x = startPoint[0];
            y = startPoint[1] + i;
          } else if (direction === 2) {
            x = startPoint[0] + i;
            y = startPoint[1];
          } else if (direction === 3) {
            x = startPoint[0];
            y = startPoint[1] - i;
          }
          // make sure that no point is out of grid
          if (x < 0 || y < 0 || x > 9 || y > 9) {
            return false;
          }
          fullArray.push([x, y]);
        }
        return true;
      })();
      if (valid === false) {
        continue;
      }

      // check if the calculated array contains elements, that are not valid
      for (let item1 of fullArray) {
        for (let item2 of checkFields) {
          if (JSON.stringify(item1) === JSON.stringify(item2)) {
            valid = false;
          }
        }
      }
      if (valid === false) {
        continue;
      }
      run = !run;

      // after evaluating a valid array, add new fields to the invalid fields array and return them
      for (let item of fullArray) {
        checkFields.push(item);
        checkFields.push([item[0] + 1, item[1]]);
        checkFields.push([item[0] - 1, item[1]]);
        checkFields.push([item[0], item[1] + 1]);
        checkFields.push([item[0], item[1] - 1]);
        checkFields.push([item[0] + 1, item[1] + 1]);
        checkFields.push([item[0] + 1, item[1] - 1]);
        checkFields.push([item[0] - 1, item[1] + 1]);
        checkFields.push([item[0] - 1, item[1] - 1]);
      }
    }
    console.log(this.placedShips);
    return { fullArray, checkFields };
  }
  randomizedPlaceShips() {
    // 1x5, 2x4, 3x3, 4x2
    let ships = [5, 4, 4, 3, 3, 3, 2, 2, 2, 2];
    let invalidFields = [];
    let result;

    // place a single ship randomly and keep track of the invalid fields; loop;
    for (let i = 0; i < ships.length; i++) {
      result = this.randomizedPlaceSingleShip(ships[i], invalidFields);
      invalidFields = result['checkFields'];
      this.place(result['fullArray']);
    }
  }
}

export class Player {
  constructor(name) {
    this.name = name;
    this.board = new Gameboard();
  }
}
