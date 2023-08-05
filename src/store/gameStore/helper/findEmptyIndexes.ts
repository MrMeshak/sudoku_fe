import { fuseGameBoard } from './fuseGameBoard';

export function findEmptyIndexes(
  puzzleBoard: number[],
  playerBoard: number[],
  hintBoard: number[],
): number[] {
  const errorIndexes: number[] = [];

  for (let i = 0; i < 81; i++) {
    if (puzzleBoard[i] === 0 && playerBoard[i] === 0 && hintBoard[i] === 0) {
      errorIndexes.push(i);
    }
  }

  return errorIndexes;
}
