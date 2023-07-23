export function stringBoardToBoard(stringBoard: string): number[] {
  const board: number[] = new Array(81).fill(0);
  const stringBoardClean = stringBoard.replace(/[^1-9\.]/g, '');

  const charArray = stringBoardClean.split('');
  for (let i = 0; i < charArray.length && i < board.length; i++) {
    if (charArray[i] === '.') {
      board[i] = 0;
    } else {
      board[i] = Number(charArray[i]);
    }
  }

  return board;
}
