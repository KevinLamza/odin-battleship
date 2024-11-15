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
    console.log(this.placedShips);
    for (let i = 0; i < array.length; i++) {
      this.board[array[i][0]][array[i][1]] = (
        this.placedShips.length - 1
      ).toString();
    }
    return this.board;
  }
}
