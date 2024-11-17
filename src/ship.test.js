// import { jest } from '@jest/globals';
import { Ship } from './ship.js';
import { Gameboard } from './ship.js';
import { Player } from './ship.js';

// jest.mock('./ship.js');

// beforeEach(() => {
//   Ship.mockClear();
// });

test('Create battleship', () => {
  expect(new Ship(5)).toEqual({ length: 5, hitsTaken: 0, sunk: false });
  expect(() => new Ship(6)).toThrow();
  expect(() => new Ship(0)).toThrow();
  expect(() => new Ship('hello')).toThrow();
});

// test('Hit battleship', () => {
//   expect(new Ship(5).hit()).toEqual(1);
// });

test('Sink battleship', () => {
  let ship = new Ship(3);
  expect(ship.isSunk()).toEqual(false);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toEqual(true);
});

test('Create gameboard', () => {
  expect(new Gameboard().board).toEqual([
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
  ]);
});

test('Place ship', () => {
  const gameboard = new Gameboard();
  expect(
    gameboard.place([
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
    ]),
  ).toEqual([
    ['0', '0', '0', '0', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
  ]);
  expect(
    gameboard.place([
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
    ]),
  ).toEqual([
    ['0', '0', '0', '0', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['1', '1', '1', '1', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
  ]);
});

test('Receive hit', () => {
  // Test Setup
  let gameboard = new Gameboard();
  gameboard.place([
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
  ]);
  gameboard.place([
    [1, 0],
    [1, 1],
    [1, 2],
    [1, 3],
  ]);

  // First Hit
  gameboard.receiveHit([0, 2]);
  expect(gameboard.board).toEqual([
    ['0', '0', 'H', '0', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['1', '1', '1', '1', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
  ]);
  expect(gameboard.placedShips[0].hitsTaken).toBe(1);

  // Second Hit
  gameboard.receiveHit([4, 2]);
  expect(gameboard.board).toEqual([
    ['0', '0', 'H', '0', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['1', '1', '1', '1', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'M', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
  ]);
});

test('Report if all sunk', () => {
  // Test Setup
  let gameboard = new Gameboard();
  gameboard.place([
    [0, 0],
    [0, 1],
  ]);
  gameboard.place([
    [1, 2],
    [1, 3],
  ]);
  gameboard.receiveHit([0, 0]);
  gameboard.receiveHit([0, 1]);

  // Test if all ships sunken
  expect(gameboard.allSunk()).toBe(false);

  gameboard.receiveHit([1, 2]);
  gameboard.receiveHit([1, 3]);
  expect(gameboard.allSunk()).toBe(true);
});

test('Create New Player', () => {
  const player1 = new Player('playerOne');
  const player2 = new Player('playerTwo');
  expect(player1.board.board).toEqual([
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
  ]);
  expect(player2.board.board).toEqual([
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
  ]);
  expect(player1.board.placedShips).toEqual([]);
  expect(player2.board.placedShips).toEqual([]);
  expect(player1.name).toBe('playerOne');
  expect(player2.name).toBe('playerTwo');
});

test('Randomize Hit', () => {
  let array = new Gameboard().randomizeHit();
  expect(array[0]).toBeGreaterThanOrEqual(0);
  expect(array[0]).toBeLessThanOrEqual(9);
  expect(array[1]).toBeGreaterThanOrEqual(0);
  expect(array[1]).toBeLessThanOrEqual(9);
});

// TESTED, but now commented, due to randomizing factor in final function
// test('Randomized Ship Placement', () => {
//   expect(new Gameboard().randomizedPlaceShips()).toEqual([
//     [4, 4],
//     [3, 4],
//     [2, 4],
//     [1, 4],
//     [0, 4],
//   ]);
// });
