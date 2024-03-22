import Ship from "./Ship.js";
import Gameboard from "./Gameboard.js";
import Player from "./Player.js";
import { displayBoard } from "./DOM.js";

// game loop
const user = Player("user");
const computer = Player("computer");

user.board.placeShip("destroyer", [0, 0], "horizontal");
user.board.placeShip("submarine", [2, 0], "vertical");
user.board.placeShip("cruiser", [4, 2], "horizontal");
user.board.placeShip("battleship", [7, 0], "horizontal");
user.board.placeShip("carrier", [9, 2], "horizontal");

computer.board.placeShip("destroyer", [0, 0], "horizontal");
computer.board.placeShip("submarine", [2, 0], "horizontal");
computer.board.placeShip("cruiser", [4, 2], "horizontal");
computer.board.placeShip("battleship", [7, 0], "horizontal");
computer.board.placeShip("carrier", [9, 2], "horizontal");

displayBoard(user.board.squares);
displayBoard(computer.board.squares);
