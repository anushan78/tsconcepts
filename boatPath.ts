function canTravelTo1(
  gameMatrix1: boolean[][],
  fromRow: number,
  fromColumn: number,
  toRow: number,
  toColumn: number
): boolean {
  // Write your code here
  if (
    (fromRow !== toRow && fromColumn !== toColumn) ||
    toRow > 5 ||
    toColumn > 5
  ) {
    return false;
  }
  const cordValue: boolean = gameMatrix1[toRow][toColumn];
  let fRow: number;
  let tRow: number;
  let fCol: number;
  let tCol: number;
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
    for (let index = fCol; index < tCol; index++) {
      let element = gameMatrix[index][fromColumn];
      if (element == true) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }

  if (fromRow == toRow) {
    for (let index = fRow; index < tRow; index++) {
      let element = gameMatrix[index][fromRow];
      if (element == true) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }

  return cordValue === true;
}

const gameMatrix1 = [
  [false, true, true, false, false, false],
  [true, true, true, false, false, false],
  [true, true, true, true, true, true],
  [false, true, true, false, true, true],
  [false, true, true, true, false, true],
  [false, false, false, false, false, false],
];

//console.log(canTravelTo(gameMatrix, 3, 2, 2, 2)); // true, Valid move
console.log(canTravelTo1(gameMatrix, 3, 2, 3, 4)); // false, Can't travel through land
//console.log(canTravelTo(gameMatrix, 3, 2, 6, 2)); // false, Out of bounds
