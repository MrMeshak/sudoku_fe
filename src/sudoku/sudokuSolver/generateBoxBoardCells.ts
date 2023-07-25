export interface ISolverCell {
  index: number;
  value: string;
  type: 'puzzle' | 'solution' | 'empty';
}

export function generateBoardCells(board: number[]) {
  const boardCells: ISolverCell[] = [];
  for (let i = 0; i < 81; i++) {
    if (board[i] !== 0) {
      boardCells.push({
        index: i,
        value: board[i].toString(),
        type: 'puzzle',
      });
    } else {
      boardCells.push({
        index: i,
        value: '',
        type: 'empty',
      });
    }
  }
  return boardCells;
}

export function generateBoxBoardCells(board: number[]) {
  const boardCells = generateBoardCells(board);

  const boxBoardCells = boardToBoxBoardMapping.map((boxMapping) => {
    return boxMapping.map((index) => boardCells[index]);
  });

  return boxBoardCells;
}

export function generateFusedBoardCells(
  puzzleBoard: number[],
  solutionBoard: number[],
): ISolverCell[] {
  const fusedBoardCells: ISolverCell[] = [];
  for (let i = 0; i < 81; i++) {
    if (puzzleBoard[i] !== 0) {
      fusedBoardCells.push({
        index: i,
        value: puzzleBoard[i].toString(),
        type: 'puzzle',
      });
    } else if (solutionBoard[i] !== 0) {
      fusedBoardCells.push({
        index: i,
        value: solutionBoard[i].toString(),
        type: 'solution',
      });
    } else {
      fusedBoardCells.push({
        index: i,
        value: '',
        type: 'empty',
      });
    }
  }

  return fusedBoardCells;
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

export function generateFusedBoxBoardCells(
  puzzleBoard: number[],
  solutionBoard: number[],
): ISolverCell[][] {
  const fusedBoardCells = generateFusedBoardCells(puzzleBoard, solutionBoard);

  const fusedBoxBoardCells: ISolverCell[][] = boardToBoxBoardMapping.map(
    (boxMapping) => {
      return boxMapping.map((index) => fusedBoardCells[index]);
    },
  );

  return fusedBoxBoardCells;
}
