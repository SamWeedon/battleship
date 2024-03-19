import Gameboard from "./Gameboard.js";

export default function Player(type) {
  const takeTurn = function (enemy, coordinate) {
    if (type === "user") {
      let square =
        enemy.board.squares[enemy.board.coordinateToIndex(coordinate)];
      if (!square.miss && !square.hit) enemy.board.receiveAttack(coordinate);
    } else if (type === "computer") {
    }
  };

  return { board: Gameboard(), takeTurn };
}
