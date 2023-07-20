import { safeToPlace, shuffle, isValidBoard } from './sudokuHelper';

export interface ISolveBoardError {
  __typename: 'SolveBoardError';
  message: string;
}

export interface ISolveBoardUnsolveable {
  __typename: 'SolveBoardUnsolveable';
  message: string;
}

export interface ISolveBoardSuccess {
  __typename: 'SolveBoardSuccess';
  message: string;
  solution: number[];
}

type SolveBoardResult = ISolveBoardSuccess | ISolveBoardUnsolveable | ISolveBoardError;

export function solveBoard(startBoard: number[]): SolveBoardResult {
  const board = [...startBoard];
  if (!isValidBoard(board)) {
    return {
      __typename: 'SolveBoardError',
      message: 'Error - Invalid sudoku puzzle'
    };
  }
  const startIndex = board.indexOf(0);
  if (startIndex === -1) {
    return {
      __typename: 'SolveBoardSuccess',
      message: 'Success - Sudoku puzzle was already complete',
      solution: board
    };
  }

  const solution = solveBoardFill(board, startIndex);
  if (!solution) {
    return {
      __typename: 'SolveBoardUnsolveable',
      message: 'Unsolvable - Sudoku puzzle unsolvable'
    };
  }

  return {
    __typename: 'SolveBoardSuccess',
    message: 'Success - Sudoku puzzle solved',
    solution: solution
  };
}

export function solveBoardFill(board: number[], i: number): number[] | false {
  const numArray = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  for (let j = 0; j < numArray.length; j++) {
    if (safeToPlace(board, numArray[j], i)) {
      board[i] = numArray[j];

      const nextIndex = board.indexOf(0, i);
      if (nextIndex === -1) {
        return board;
      }

      if (solveBoardFill(board, nextIndex)) {
        return board;
      }
      board[i] = 0;
    }
  }
  return false;
}
