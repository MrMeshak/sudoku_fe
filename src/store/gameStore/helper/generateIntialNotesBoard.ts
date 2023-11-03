export function generateInitialNotesBoard() {
  const notesBoard = Array(81);
  for (let i = 0; i < notesBoard.length; i++) {
    notesBoard[i] = new Set<number>();
  }

  return notesBoard;
}
