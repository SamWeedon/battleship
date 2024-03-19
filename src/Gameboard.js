import Ship from "./Ship.js";

export default function Gameboard() {
  let shipTotal = 0;
  let sunkTotal = 0;

  // build board
  let squares = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      squares.push(Node(i, j));
    }
  }

  const coordinateToIndex = function (coordinate) {
    // converts a coordinate into the corresponding index of the squares array
    return coordinate[0] * 10 + coordinate[1];
  };

  const placeShip = function (type, coordinate, orientation) {
    // The given coordinate will refer to either the leftmost or topmost coordinate of the ship,
    // depending on whether the orientation is horizontal or vertical
    let ship = Ship(type);
    const length = ship.length;
    if (orientation === "horizontal") {
      for (let i = 0; i < length; i++) {
        squares[coordinateToIndex(coordinate) + i].occupiedBy = ship;
      }
    } else {
      for (let i = 0; i < length; i++) {
        squares[coordinateToIndex(coordinate) + i * 10].occupiedBy = ship;
      }
    }
    shipTotal++;
  };

  const receiveAttack = function (coordinate) {
    const attackedSquare = squares[coordinateToIndex(coordinate)];
    if (attackedSquare.occupiedBy) {
      attackedSquare.occupiedBy.hit();
      attackedSquare.hit = true;
      if (attackedSquare.occupiedBy.isSunk()) sunkTotal++;
    } else {
      attackedSquare.miss = true;
    }
  };

  const allSunk = function () {
    return shipTotal === sunkTotal;
  };

  return { squares, placeShip, receiveAttack, allSunk, coordinateToIndex };
}

function Node(row, column) {
  return {
    occupiedBy: undefined,
    coordinate: [row, column],
    miss: false,
    hit: false,
  };
}
