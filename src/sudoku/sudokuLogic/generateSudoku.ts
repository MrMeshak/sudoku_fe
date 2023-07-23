import { shuffle, getRandomInt } from './sudokuHelper';
import { hasUniqueSolution } from './hasUniqueSolution';
import { generateFilledBoard } from './generateFilledBoard';

interface IGenerateSudokuError {
  __typename: 'GenerateSudokuError';
  message: string;
}

interface IGenerateSudokuSuccess {
  __typename: 'GenerateSudokuSuccess';
  message: string;
  board: number[];
  solution: number[];
}

type GenerateSudokuResult = IGenerateSudokuSuccess | IGenerateSudokuError;

export function generateSudoku(difficulty: number): GenerateSudokuResult {
  let numOfHoles = 0;
  switch (difficulty) {
    case 1:
      numOfHoles = getRandomInt(28, 31);
      break;
    case 2:
      numOfHoles = getRandomInt(31, 44);
      break;
    case 3:
      numOfHoles = getRandomInt(45, 49);
      break;
    case 4:
      numOfHoles = getRandomInt(49, 52);
      break;
    case 5:
      numOfHoles = getRandomInt(53, 58);
      break;
  }

  const generateFilledBoardResult = generateFilledBoard();
  if (generateFilledBoardResult.__typename === 'GenerateFilledBoardError') {
    return {
      __typename: 'GenerateSudokuError',
      message: generateFilledBoardResult.message
    };
  }

  const board = pokeHoles(generateFilledBoardResult.board, numOfHoles);
  return {
    __typename: 'GenerateSudokuSuccess',
    message: 'Sudoku board successfully generated',
    board: board,
    solution: generateFilledBoardResult.board
  };
}

export function pokeHoles(startBoard: number[], numOfHoles: number) {
  const board = [...startBoard];
  const holeIndexes = shuffle(Array.from(Array(81).keys()));
  console.log('numHoles:', numOfHoles);
  console.log(holeIndexes);
  let holeCount = numOfHoles;
  for (let j = 0; j < holeCount && j < 81; j++) {
    const num = board[holeIndexes[j]];
    board[holeIndexes[j]] = 0;
    if (!hasUniqueSolution(board)) {
      board[holeIndexes[j]] = num;
      holeCount++;
    }
  }

  return board;
}
