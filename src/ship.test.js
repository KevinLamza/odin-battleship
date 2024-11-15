// import { jest } from '@jest/globals';
import { Ship } from './ship.js';
import { Gameboard } from './ship.js';

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
