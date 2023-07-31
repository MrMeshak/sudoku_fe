import { boardToBoxBoardMapping } from './generateBoxBoardCells';
import { ISolverCell } from './solver.model';

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
