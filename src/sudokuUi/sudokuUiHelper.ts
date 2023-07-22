interface ISolver_Cell {
  value: string;
  type: 'puzzle' | 'solution' | 'empty';
}

export function generateFusedBoard(
  puzzleBoard: number[],
  solutionBoard: number[],
): ISolver_Cell[] {
  const fusedBoard: ISolver_Cell[] = [];
  for (let i = 0; i < 81; i++) {
    if (puzzleBoard[i] !== 0) {
      fusedBoard.push({
        value: puzzleBoard[i].toString(),
        type: 'puzzle',
      });
    } else if (solutionBoard[i] !== 0) {
      fusedBoard.push({
        value: solutionBoard[i].toString(),
        type: 'solution',
      });
    } else {
      fusedBoard.push({
        value: '',
        type: 'empty',
      });
    }
  }

  return fusedBoard;
}

export const boardToBoxBoardMapping = [
  [0, 1, 2, 9, 10, 11, 18, 19, 20],
  [3, 4, 5, 12, 13, 14, 21, 22, 23],
  [6, 7, 8, 15, 16, 17, 24, 25, 26],
  [27, 28, 29, 36, 37, 38, 45, 46, 47],
  [30, 31, 32, 39, 40, 41, 48, 49, 50],
  [33, 34, 35, 42, 43, 44, 51, 52, 53],
  [54, 55, 56, 63, 64, 65, 72, 73, 74],
  [57, 58, 59, 66, 67, 68, 75, 76, 77],
  [60, 61, 62, 69, 70, 71, 78, 79, 80],
];

export function generateFusedBoxBoard(
  puzzleBoard: number[],
  solutionBoard: number[],
): ISolver_Cell[][] {
  const fusedBoard = generateFusedBoard(puzzleBoard, solutionBoard);

  const fusedBoxBoard: ISolver_Cell[][] = boardToBoxBoardMapping.map(
    (boxMapping) => {
      return boxMapping.map((index) => fusedBoard[index]);
    },
  );

  return fusedBoxBoard;
}

export function stringBoardToBoard(stringBoard: string): number[] {
  const board: number[] = new Array(81).fill(0);
  const charArray = stringBoard.split('');

  for (let i = 0; i < charArray.length && i < board.length; i++) {
    if (charArray[i] === '.') {
      board[i] = 0;
    } else if (charArray[i].match(/[1-9]/)) {
      board[i] = Number(charArray[i]);
    }
  }

  return board;
}
