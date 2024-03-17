import Ship from "./Ship.js";
import Gameboard from "./Gameboard.js";

// tests for Ship
test("hit() and isSunk() methods", () => {
  const ship1 = Ship("destroyer");
  ship1.hit();
  ship1.hit();

  const ship2 = Ship("battleship");
  ship2.hit();
  ship2.hit();

  expect(ship1.isSunk()).toBe(true);
  expect(ship2.isSunk()).toBe(false);
});

test("length property", () => {
  expect(Ship("destroyer").length).toBe(2);
});

// tests for Gameboard
test("gameboard populates normally", () => {
  expect(Gameboard().squares.length).toBe(100);
  expect(Gameboard().squares[0].coordinate).toEqual([0, 0]);
  expect(Gameboard().squares[10].coordinate).toEqual([1, 0]);
});

test("placing ships", () => {
  const board1 = Gameboard();
  board1.placeShip("destroyer", [0, 0], "horizontal");
  expect(board1.squares[0].occupiedBy.type).toBe("destroyer");
  expect(board1.squares[1].occupiedBy.type).toBe("destroyer");
  expect(board1.squares[20].occupiedBy?.type).toBe(undefined);

  board1.placeShip("destroyer", [1, 0], "vertical");
  expect(board1.squares[10].occupiedBy.type).toBe("destroyer");
  expect(board1.squares[20].occupiedBy.type).toBe("destroyer");
  expect(board1.squares[30].occupiedBy?.type).toBe(undefined);
});
// tests for Player
