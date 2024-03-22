const displayBoard = function (board) {
  for (let node of board) {
    const square = document.createElement("div");
    square.classList.add("square");
    document.body.appendChild(square);
  }
};

export { displayBoard };
