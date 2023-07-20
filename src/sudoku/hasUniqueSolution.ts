import { shuffle, isValidBoard, safeToPlace } from './sudokuHelper';

export function hasUniqueSolution(board: number[]): boolean {
  if (!isValidBoard(board)) {
    return false;
  }

  const solutionCount = [0];
  const startIndex = board.indexOf(0);
  if (startIndex === -1) {
    return true;
  }

  return !hasMultipleSolutionFill([...board], startIndex, solutionCount);
}

export function hasMultipleSolutionFill(board: number[], i: number, solutionCount: number[]) {
  const numArray = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  for (let j = 0; j < numArray.length; j++) {
    if (safeToPlace(board, numArray[j], i)) {
      board[i] = numArray[j];

      let nextIndex = board.indexOf(0, i);
      if (nextIndex === -1) {
        solutionCount[0]++;
        if (solutionCount[0] >= 2) {
          return true;
        }
      } else if (hasMultipleSolutionFill(board, nextIndex, solutionCount)) {
        return true;
      }

      board[i] = 0;
    }
  }
  return false;
}
