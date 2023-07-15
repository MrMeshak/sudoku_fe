import { boxSafe, generateBoard, printBoard, shuffle } from '@/sudoku/sudoku';

export interface IAppProps {}

export default function App(props: IAppProps) {
  const array = [1, 2, 3, 4, 5];
  console.log(shuffle(array));

  boxSafe([], 2, 53);
  const board = generateBoard();

  console.log(board);
  if (board) {
    printBoard(board);
  }
  return <div></div>;
}
