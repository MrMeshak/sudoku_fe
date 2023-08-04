import { TGameCell } from './game.model';

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

export function generateFusedGameBoardBoxCells(
  puzzleBoard: number[],
  playerBoard: number[],
  hintBoard: number[],
  noteBoard: Set<number>[],
  errorIndexes: Set<number>,
) {
  const boardCells = generateFusedGameBoardCells(
    puzzleBoard,
    playerBoard,
    hintBoard,
    noteBoard,
    errorIndexes,
  );

  const boxBoardCells = boardToBoxBoardMapping.map((boxMapping) => {
    return boxMapping.map((index) => boardCells[index]);
  });

  return boxBoardCells;
}

export function generateFusedGameBoardCells(
  puzzleBoard: number[],
  playerBoard: number[],
  hintBoard: number[],
  noteBoard: Set<number>[],
  errorIndexes: Set<number>,
) {
  const boardCells: TGameCell[] = [];

  for (let i = 0; i < 81; i++) {
    if (puzzleBoard[i] !== 0) {
      boardCells.push({
        __typename: 'IPuzzleCell',
        index: i,
        value: puzzleBoard[i].toString(),
      });
    } else if (hintBoard[i] !== 0) {
      boardCells.push({
        __typename: 'IHintCell',
        index: i,
        value: hintBoard[i].toString(),
      });
    } else if (playerBoard[i] !== 0) {
      boardCells.push({
        __typename: 'IPlayerCell',
        index: i,
        value: playerBoard[i].toString(),
        hasError: errorIndexes.has(i),
      });
    } else if (noteBoard[i].size !== 0) {
      boardCells.push({
        __typename: 'INoteCell',
        index: i,
        notes: noteBoard[i],
      });
    } else {
      boardCells.push({
        __typename: 'IEmptyCell',
        index: i,
        value: '',
      });
    }
  }
  return boardCells;
}
