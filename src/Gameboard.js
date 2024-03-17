import Ship from "./Ship.js";

export default function Gameboard() {
  let squares = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      squares.push(Node(i, j));
    }
  }

  return { squares };
}

function Node(row, column) {
  return { occupiedBy: undefined, coordinate: [row, column] };
}
