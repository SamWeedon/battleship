export default function Ship(type) {
  let length;
  switch (type) {
    case "destroyer":
      length = 2;
      break;
    case "submarine":
      length = 3;
      break;
    case "cruiser":
      length = 3;
      break;
    case "battleship":
      length = 4;
      break;
    case "carrier":
      length = 5;
      break;
  }

  let hits = 0;

  const hit = function () {
    hits++;
  };

  const isSunk = function () {
    return hits === length;
  };

  return { length, hit, isSunk, type };
}
