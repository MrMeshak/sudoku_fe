import { boxSafe, generateBoard, hasMultipleSolution, printBoard, shuffle, solveBoard } from '@/sudoku/sudoku';

export interface IAppProps {}

export default function App(props: IAppProps) {
  const array = [1, 2, 3, 4, 5];
  console.log(shuffle(array));

  // prettier-ignore
  const board = [
    5,3,0,0,7,0,0,0,0,
    6,0,0,1,9,5,0,0,0,
    0,9,8,0,0,0,0,6,0,
    8,0,0,0,6,0,0,0,3,
    4,0,0,8,0,3,0,0,1,
    7,0,0,0,2,0,0,0,6,
    0,6,0,0,0,0,2,8,0,
    0,0,0,4,1,9,0,0,5,
    0,0,0,0,8,0,0,7,9
  ]

  const solutions = hasMultipleSolution(board);
  console.log(solutions);

  return <div></div>;
}
