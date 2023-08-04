import { fuseGameBoard } from './fuseGameBoard';

export function findErrorIndexes(
  puzzleBoard: number[],
  playerBoard: number[],
  hintBoard: number[],
  mistakeIndexes: Set<number>,
) {
  const errorIndexes = new Set<number>();
  const fusedBoard = fuseGameBoard(puzzleBoard, playerBoard, hintBoard);

  mistakeIndexes.forEach((index) => {
    const colErrorIndexes = findColErrorIndexes(fusedBoard, index);
    const rowErrorIndexes = findRowErrorIndexes(fusedBoard, index);
    const boxErrorIndexes = findBoxErrorIndexes(fusedBoard, index);

    colErrorIndexes.forEach((index) => errorIndexes.add(index));
    rowErrorIndexes.forEach((index) => errorIndexes.add(index));
    boxErrorIndexes.forEach((index) => errorIndexes.add(index));
  });

  return errorIndexes;
}

export function findColErrorIndexes(
  fusedBoard: number[],
  index: number,
): number[] {
  const errorIndexes: number[] = [];
  const col = index % 9;

  for (let j = col; j < 81; j += 9) {
    if (j !== index && fusedBoard[j] === fusedBoard[index]) {
      errorIndexes.push(j);
    }
  }

  if (errorIndexes.length !== 0) {
    errorIndexes.push(index);
  }

  return errorIndexes;
}

export function findRowErrorIndexes(
  fusedBoard: number[],
  index: number,
): number[] {
  const errorIndexes: number[] = [];
  const row = Math.floor(index / 9);

  for (let j = row * 9; j < (row + 1) * 9; j++) {
    if (j !== index && fusedBoard[j] === fusedBoard[index]) {
      errorIndexes.push(j);
    }
  }

  if (errorIndexes.length !== 0) {
    errorIndexes.push(index);
  }

  return errorIndexes;
}

export function findBoxErrorIndexes(
  fusedBoard: number[],
  index: number,
): number[] {
  const errorIndexes: number[] = [];
  const boxStartRow = Math.floor(Math.floor(index / 9) / 3) * 3;
  const boxStartCol = Math.floor((index % 9) / 3) * 3;
  const boxStartIndex = boxStartRow * 9 + boxStartCol;

  for (let j = 0; j < 3; j++) {
    for (let k = 0; k < 3; k++) {
      const i = boxStartIndex + 9 * j + k;
      if (i !== index && fusedBoard[i] === fusedBoard[index]) {
        errorIndexes.push(i);
      }
    }
  }

  if (errorIndexes.length !== 0) {
    errorIndexes.push(index);
  }

  return errorIndexes;
}
