function canTravelTo(
  gameMatrix: boolean[][],
  fromRow: number,
  fromColumn: number,
  toRow: number,
  toColumn: number
): boolean {
  // Check for invalid input or out-of-bounds
  if (
    toRow < 0 ||
    toColumn < 0 ||
    toRow >= gameMatrix.length ||
    toColumn >= gameMatrix[0].length
  ) {
    return false;
  }

  // Check if the move is diagonal
  if (fromRow !== toRow && fromColumn !== toColumn) {
    return false;
  }

  let fRow: number, tRow: number, fCol: number, tCol: number;

  if (fromRow < toRow) {
    fRow = fromRow;
    tRow = toRow;
  } else {
    fRow = toRow;
    tRow = fromRow;
  }

  if (fromColumn < toColumn) {
    fCol = fromColumn;
    tCol = toColumn;
  } else {
    fCol = toColumn;
    tCol = fromColumn;
  }

  if (fromColumn == toColumn) {
    // Moving vertically
    for (let index = fRow; index <= tRow; index++) {
      if (!gameMatrix[index][fromColumn]) {
        return false;
      }
    }
    return true;
  }

  if (fromRow == toRow) {
    // Moving horizontally
    for (let index = fCol; index <= tCol; index++) {
      if (!gameMatrix[fromRow][index]) {
        return false;
      }
    }
    return true;
  }

  return false; // For diagonal or invalid moves
}

// Test cases
const gameMatrix = [
  [false, true, true, false, false, false],
  [true, true, true, false, false, false],
  [true, true, true, true, true, true],
  [false, true, true, false, true, true],
  [false, true, true, true, false, true],
  [false, false, false, false, false, false],
];

console.log(canTravelTo(gameMatrix, 3, 2, 2, 2)); // true
console.log(canTravelTo(gameMatrix, 3, 2, 3, 4)); // false
console.log(canTravelTo(gameMatrix, 3, 2, 6, 2)); // false
