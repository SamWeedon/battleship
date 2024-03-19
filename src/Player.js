import Gameboard from "./Gameboard.js";

export default function Player(type) {
  const randomInt = function (max) {
    return Math.floor(Math.random() * (max + 1));
  };

  const takeTurn = function (enemy, coordinate) {
    if (type === "user") {
      let square =
        enemy.board.squares[enemy.board.coordinateToIndex(coordinate)];
      if (!square.miss && !square.hit) enemy.board.receiveAttack(coordinate);
    } else if (type === "computer") {
      let square = enemy.board.squares[randomInt(99)];
      while (square.miss || square.hit) {
        square = enemy.board.squares[randomInt(99)];
      }
      enemy.board.receiveAttack(square.coordinate);
    }
  };

  return { board: Gameboard(), takeTurn };
}
