import { shuffle, safeToPlace } from './sudokuHelper';

interface IGenerateFilledBoardError {
  __typename: 'GenerateFilledBoardError';
  message: string;
}

interface IGenerateFilledBoardSuccess {
  __typename: 'GenerateFilledBoardSuccess';
  message: string;
  board: number[];
}

type GenerateFilledBoardResult = IGenerateFilledBoardSuccess | IGenerateFilledBoardError;

export function generateFilledBoard(): GenerateFilledBoardResult {
  const blankBoard = Array(81).fill(0);
  const board = generateBoardFill(blankBoard, 0);

  if (!board) {
    return {
      __typename: 'GenerateFilledBoardError',
      message: 'Error - filled sudoku board could not be generated'
    };
  }

  return {
    __typename: 'GenerateFilledBoardSuccess',
    message: 'Success - Filled sudoku board was successfully generated',
    board: board
  };
}

function generateBoardFill(board: number[], i: number): number[] | false {
  if (i > 80) {
    return board;
  }
  const numArray = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  for (let j = 0; j < numArray.length; j++) {
    if (safeToPlace(board, numArray[j], i)) {
      board[i] = numArray[j];

      if (generateBoardFill(board, i + 1)) {
        return board;
      }
      board[i] = 0; //return to 0 on backtrack
    }
  }
  return false;
}
