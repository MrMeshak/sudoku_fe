export function generateBoard() {
  const board = Array(81).fill(0);
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

  for (let j = col; j < 80; j += 9) {
    if (board[j] === num) {
      return false;
    }
  }

  return true;
}

export function boxSafe(board: number[], num: number, i: number) {
  const boxRow = Math.floor(i / 9) % 3;
  const boxCol = i % 3;

  for (let k = boxCol * 3; k < 8; k += 3) {
    for (let j = boxRow * 3; j < (boxRow + 1) * 3; j++) {
      if (board[k + j] === num) {
        return false;
      }
    }
  }

  return true;
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
