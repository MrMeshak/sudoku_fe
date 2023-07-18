import { boxSafe, generateSudoku, printBoard, shuffle, solveBoard } from '@/sudoku/sudoku';

export interface IAppProps {}

export default function App(props: IAppProps) {
  const result = generateSudoku(1);
  if (result) {
    const [board, solution] = result;
    printBoard(board);
    console.log('');
    printBoard(solution);

    const solution2 = solveBoard(board);
    if (solution2) {
      console.log('');
      printBoard(solution2);
    }
  }

  return <div></div>;
}
