import Ship from "./Ship.js";

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
test("", () => {
  expect(Gameboard().squares.length).toBe(100);
});
// tests for Player
