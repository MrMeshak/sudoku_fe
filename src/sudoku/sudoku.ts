import { count } from 'console';
import next from 'next/types';

export function hasUniqueSolution(board: number[]) {
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

export function solveBoard(board: number[]): number[] | false {
  const startIndex = board.indexOf(0);
  if (startIndex === -1) {
    return board;
  }
  return solveBoardFill(board, startIndex);
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

export function isValidBoard(board: number[]) {
  if (board.length != 81) {
    return false;
  }

  for (let i = 0; i < 81; i++) {
    if (board[i] === 0) {
      continue;
    }

    if (board[i] < 1 || board[i] > 9) {
      return false;
    }

    let num = board[i];
    board[i] = 0;
    if (!safeToPlace(board, num, i)) {
      return false;
    }
    board[i] = num;
  }

  return true;
}

export function generateBoard() {
  const board = Array(81).fill(0);
  return generateBoardFill(board, 0);
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
      console.log(board);
      board[i] = 0; //return to 0 on backtrack
    }
  }
  return false;
}

export function safeToPlace(board: number[], num: number, i: number) {
  return rowSafe(board, num, i) && colSafe(board, num, i) && boxSafe(board, num, i);
}

export function rowSafe(board: number[], num: number, i: number) {
  const row = Math.floor(i / 9);

  for (let j = row * 9; j < (row + 1) * 9; j++) {
    if (board[j] === num) {
      return false;
    }
  }

  return true;
}

export function colSafe(board: number[], num: number, i: number) {
  const col = i % 9;

  for (let j = col; j < 81; j += 9) {
    if (board[j] === num) {
      return false;
    }
  }

  return true;
}

export function boxSafe(board: number[], num: number, i: number) {
  const boxStartRow = Math.floor(Math.floor(i / 9) / 3) * 3;
  const boxStartCol = Math.floor((i % 9) / 3) * 3;
  const boxStartIndex = boxStartRow * 9 + boxStartCol;

  for (let j = 0; j < 3; j++) {
    for (let k = 0; k < 3; k++) {
      if (board[boxStartIndex + 9 * j + k] === num) {
        return false;
      }
    }
  }
  return true;
}

export function printBoard(board: number[]) {
  for (let k = 0; k < 9; k++) {
    process.stdout.write('[');
    for (let j = 0; j < 9; j++) {
      process.stdout.write(` ${board[k * 9 + j]} `);
    }
    process.stdout.write(']');
    process.stdout.write('\n');
  }
}

export function shuffle<T>(array: Array<T>): Array<T> {
  const shuffledArray = [...array];

  for (let i = array.length - 1; i > 0; i--) {
    const j = getRandomInt(0, i);
    swap(shuffledArray, i, j);
  }
  return shuffledArray;
}

function swap<T>(array: Array<T>, i: number, j: number) {
  const a = array[i];
  array[i] = array[j];
  array[j] = a;
  return;
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
