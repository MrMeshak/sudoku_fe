export function fuseGameBoard(
  puzzleBoard: number[],
  playerBoard: number[],
  hintBoard: number[],
): number[] {
  const fusedBoard: number[] = Array(81).fill(0);

  for (let i = 0; i < 81; i++) {
    if (puzzleBoard[i] !== 0) {
      fusedBoard[i] = puzzleBoard[i];
    } else if (hintBoard[i] !== 0) {
      fusedBoard[i] = hintBoard[i];
    } else if (playerBoard[i] !== 0) {
      fusedBoard[i] = playerBoard[i];
    }
  }

  return fusedBoard;
}
